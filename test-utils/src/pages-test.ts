/**
 * pages-test.ts — Bundle size & i18n content leakage analysis
 *
 * WHAT THIS MEASURES
 * ──────────────────
 * For each page, we capture every JS/CSS/HTML file the browser downloads and
 * ask two questions:
 *
 * 1. Locale leakage — does the bundle for /en/home contain French strings?
 * 2. Page leakage — does the bundle for /en/home contain strings for /en/about?
 *
 * WHY FINGERPRINTS INSTEAD OF A HARDCODED DICTIONARY
 * ───────────────────────────────────────────────────
 * Hardcoded expected strings couple this test to a specific app's copy.
 * Instead we derive "fingerprints" from what the app actually renders.
 *
 * LEAKAGE PERCENTAGE FORMULA
 * ──────────────────────────
 * leakage% = foreignFingerprints / (foreignFingerprints + currentFingerprints) × 100
 */

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { test, expect, type Browser } from "@playwright/test";
import { benchmarkBloomRoot } from "./repo-root";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PageConfig {
  path: string;
  name: string;
}

export interface BundleTestConfig {
  appName: string;
  locales?: string[];
  pages?: PageConfig[];
  minimumFingerprintLength?: number;
  benchmarkCategory: string;
}

interface BundleFile {
  url: string;
  size: number;
  gzipSize: number;
  type: "js" | "css" | "html";
}

interface LeakageDetail {
  count: number;
  found: string[];
}

interface PageBundleResult {
  path: string;
  page: string;
  locale: string;
  totalSize: number;
  totalGzipSize: number;
  jsSize: number;
  jsGzipSize: number;
  cssSize: number;
  cssGzipSize: number;
  htmlSize: number;
  htmlGzipSize: number;
  fileCount: number;
  jsFileCount: number;
  bundleFiles: BundleFile[];
  localeLeakage: Record<string, LeakageDetail>;
  localeLeakagePercent: number;
  pageLeakage: Record<string, LeakageDetail>;
  pageLeakagePercent: number;
}

// ─── Defaults ────────────────────────────────────────────────────────────────

export const DEFAULT_LOCALES = ["en", "fr"];
export const DEFAULT_MINIMUM_FINGERPRINT_LENGTH = 20;
export const DEFAULT_PAGES: PageConfig[] = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/blog", name: "blog" },
  { path: "/careers", name: "careers" },
  { path: "/contact", name: "contact" },
  { path: "/faq", name: "faq" },
  { path: "/pricing", name: "pricing" },
  { path: "/products", name: "products" },
  { path: "/settings", name: "settings" },
  { path: "/team", name: "team" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Normalizes text to bridge the gap between rendered DOM text and raw JS strings.
 * Lowers case, collapses whitespace/newlines, and handles basic escaped quotes.
 */
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\\n/g, " ") // Handle JS newline escapes
    .replace(/\\"/g, '"') // Handle escaped quotes
    .replace(/\\'/g, "'")
    .replace(/&#x27;/g, "'") // Handle React apostrophe escapes
    .trim();
};

// ─── Low-level browser helpers ────────────────────────────────────────────────

const extractPageText = async (
  browser: Browser,
  url: string,
  minimumFingerprintLength: number,
): Promise<string[]> => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
    // Wait briefly for hydration to replace any loaders with actual text
    await page.waitForLoadState("load");

    const rawTextLines = await page.evaluate((minimumLength: number) => {
      const lines = (document.body.innerText ?? "")
        .split("\n")
        .map((line: string) => line.trim())
        .filter((line: string) => line.length >= minimumLength);
      return [...new Set(lines)];
    }, minimumFingerprintLength);

    // Normalize strings before returning
    const normalizedLines = rawTextLines
      .map(normalizeText)
      .filter((line) => line.length >= minimumFingerprintLength);

    return [...new Set(normalizedLines)];
  } catch (err) {
    console.error(`Failed to extract text from ${url}:`, err);
    return [];
  } finally {
    await browserContext.close();
  }
};

const captureBundle = async (
  browser: Browser,
  url: string,
  normalizedBaseUrl: string,
): Promise<{ bundleFiles: BundleFile[]; bundleText: string }> => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();

  const bundleFiles: BundleFile[] = [];
  let bundleText = "";
  const pendingResponsePromises: Promise<void>[] = [];

  // Intercept and abort explicit prefetch requests to reduce false-positive leakage
  await page.route("**/*", (route, request) => {
    if (request.resourceType() === "prefetch") {
      return route.abort();
    }
    route.continue();
  });

  page.on("response", (response) => {
    const responseBodyPromise = (async () => {
      const responseUrl = response.url();
      if (response.status() !== 200) return;

      const contentType = response.headers()["content-type"] ?? "";
      const isJavaScript =
        contentType.includes("javascript") ||
        /\.(js|mjs|cjs)(\?|$)/.test(responseUrl);
      const isCss =
        contentType.includes("css") || /\.css(\?|$)/.test(responseUrl);
      const isHtml = contentType.includes("html");

      if (!isJavaScript && !isCss && !isHtml) return;

      try {
        const responseBody = await response.body();
        const assetType: BundleFile["type"] = isJavaScript
          ? "js"
          : isCss
            ? "css"
            : "html";

        // Calculate both uncompressed and gzipped sizes
        const size = responseBody.length;
        const gzipSize = zlib.gzipSync(responseBody).length;

        bundleFiles.push({
          url: responseUrl.replace(normalizedBaseUrl, ""),
          size,
          gzipSize,
          type: assetType,
        });

        if (isJavaScript || isHtml) {
          bundleText += responseBody.toString("utf-8");
        }
      } catch {
        // Response aborted or consumed
      }
    })();
    pendingResponsePromises.push(responseBodyPromise);
  });

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
    // Wait for load state to ensure primary assets are downloaded,
    // avoiding networkidle which hangs on polling/websockets.
    await page.waitForLoadState("load");
    await page.waitForTimeout(1000); // Small buffer for async chunk resolution
  } catch (navigationError) {
    console.log(`  Warning navigating to ${url}: ${navigationError}`);
  }

  // Ensure all intercepted bodies are fully processed
  await Promise.allSettled(pendingResponsePromises);
  await browserContext.close();

  // Normalize the entire captured bundle text ONCE for efficient searching
  const normalizedBundleText = normalizeText(bundleText);

  return { bundleFiles, bundleText: normalizedBundleText };
};

const analyzeLeakage = (
  normalizedBundleText: string,
  activeKey: string,
  fingerprintsByKey: Record<string, string[]>,
): {
  leakageDetails: Record<string, LeakageDetail>;
  leakagePercent: number;
} => {
  const leakageDetails: Record<string, LeakageDetail> = {};
  let foreignHitCount = 0;
  let activeHitCount = 0;

  for (const [key, fingerprintStrings] of Object.entries(fingerprintsByKey)) {
    const matchedStrings = fingerprintStrings.filter(
      (fingerprintString) => normalizedBundleText.includes(fingerprintString), // Both are now normalized
    );

    leakageDetails[key] = {
      count: matchedStrings.length,
      found: matchedStrings,
    };

    if (key === activeKey) {
      activeHitCount += matchedStrings.length;
    } else {
      foreignHitCount += matchedStrings.length;
    }
  }

  const totalHits = foreignHitCount + activeHitCount;
  const leakagePercent =
    totalHits === 0 ? 0 : (foreignHitCount / totalHits) * 100;

  return { leakageDetails, leakagePercent };
};

// ─── Phase 1 & 2: Text extraction & Fingerprinting ────────────────────────────

const collectAllRenderedTexts = async (
  browser: Browser,
  locales: string[],
  pages: PageConfig[],
  normalizedBaseUrl: string,
  minimumFingerprintLength: number,
): Promise<Record<string, Record<string, string[]>>> => {
  console.log(
    "\n── Phase 1: extracting rendered text for all locales & pages ──\n",
  );
  const renderedTexts: Record<string, Record<string, string[]>> = {};

  for (const localeCode of locales) {
    renderedTexts[localeCode] = {};
    for (const { path: pagePath, name: pageName } of pages) {
      const fullUrl = `${normalizedBaseUrl}/${localeCode}${pagePath}`;
      process.stdout.write(`  [${localeCode}] ${pageName.padEnd(12)} → `);
      const extractedTextLines = await extractPageText(
        browser,
        fullUrl,
        minimumFingerprintLength,
      );
      renderedTexts[localeCode][pageName] = extractedTextLines;
      console.log(`${extractedTextLines.length} strings extracted`);
    }
  }
  return renderedTexts;
};

const computeLocaleFingerprints = (
  renderedTexts: Record<string, Record<string, string[]>>,
  locales: string[],
  pages: PageConfig[],
): Record<string, string[]> => {
  const localeFingerprints: Record<string, string[]> = {};
  for (const localeCode of locales) {
    const ownStrings = new Set(
      pages.flatMap(({ name }) => renderedTexts[localeCode][name]),
    );
    const foreignStrings = new Set(
      locales
        .filter((l) => l !== localeCode)
        .flatMap((l) => pages.flatMap(({ name }) => renderedTexts[l][name])),
    );
    localeFingerprints[localeCode] = [...ownStrings].filter(
      (str) => !foreignStrings.has(str),
    );
  }
  return localeFingerprints;
};

const computePageFingerprints = (
  renderedTexts: Record<string, Record<string, string[]>>,
  activeLocale: string,
  pages: PageConfig[],
): Record<string, string[]> => {
  const pageFingerprints: Record<string, string[]> = {};
  for (const { name: pageName } of pages) {
    const ownStrings = new Set(renderedTexts[activeLocale][pageName]);
    const foreignStrings = new Set(
      pages
        .filter(({ name }) => name !== pageName)
        .flatMap(({ name }) => renderedTexts[activeLocale][name]),
    );
    pageFingerprints[pageName] = [...ownStrings].filter(
      (str) => !foreignStrings.has(str),
    );
  }
  return pageFingerprints;
};

const printFingerprintCounts = (
  localeFingerprints: Record<string, string[]>,
  pageFingerprints: Record<string, string[]>,
  activeLocale: string,
  pages: PageConfig[],
): void => {
  console.log("\n── Fingerprint counts ──");
  for (const [localeCode, strings] of Object.entries(localeFingerprints)) {
    console.log(`  locale[${localeCode}]: ${strings.length} unique strings`);
  }
  for (const { name: pageName } of pages) {
    console.log(
      `  page[${pageName}] (${activeLocale}): ${pageFingerprints[pageName].length} unique strings`,
    );
  }
};

// ─── Phase 3: Bundle capture & analysis ───────────────────────────────────────

const measurePageBundle = async (
  browser: Browser,
  pageConfig: PageConfig,
  activeLocale: string,
  normalizedBaseUrl: string,
  localeFingerprints: Record<string, string[]>,
  pageFingerprints: Record<string, string[]>,
): Promise<PageBundleResult> => {
  const fullPath = `/${activeLocale}${pageConfig.path}`;
  const fullUrl = `${normalizedBaseUrl}${fullPath}`;

  process.stdout.write(`  ${fullPath.padEnd(20)} ... `);

  const { bundleFiles, bundleText } = await captureBundle(
    browser,
    fullUrl,
    normalizedBaseUrl,
  );

  const calculateSizes = (typeFilter?: "js" | "css" | "html") => {
    const filtered = typeFilter
      ? bundleFiles.filter((f) => f.type === typeFilter)
      : bundleFiles;

    return {
      raw: filtered.reduce((acc, f) => acc + f.size, 0),
      gzip: filtered.reduce((acc, f) => acc + f.gzipSize, 0),
    };
  };

  const total = calculateSizes();
  const js = calculateSizes("js");
  const css = calculateSizes("css");
  const html = calculateSizes("html");

  const {
    leakageDetails: localeLeakage,
    leakagePercent: localeLeakagePercent,
  } = analyzeLeakage(bundleText, activeLocale, localeFingerprints);
  const { leakageDetails: pageLeakage, leakagePercent: pageLeakagePercent } =
    analyzeLeakage(bundleText, pageConfig.name, pageFingerprints);

  console.log(
    `${(total.gzip / 1024).toFixed(1).padStart(8)} KB (gz) | ` +
      `JS ${(js.gzip / 1024).toFixed(1).padStart(7)} KB (gz) | ` +
      `locale leak: ${localeLeakagePercent.toFixed(1).padStart(5)}% | ` +
      `page leak: ${pageLeakagePercent.toFixed(1).padStart(5)}%`,
  );

  return {
    path: fullPath,
    page: pageConfig.name,
    locale: activeLocale,
    totalSize: total.raw,
    totalGzipSize: total.gzip,
    jsSize: js.raw,
    jsGzipSize: js.gzip,
    cssSize: css.raw,
    cssGzipSize: css.gzip,
    htmlSize: html.raw,
    htmlGzipSize: html.gzip,
    fileCount: bundleFiles.length,
    jsFileCount: bundleFiles.filter((f) => f.type === "js").length,
    bundleFiles,
    localeLeakage,
    localeLeakagePercent,
    pageLeakage,
    pageLeakagePercent,
  };
};

// ─── Reporting & Persistence ──────────────────────────────────────────────────

const printBundleSummaryTable = (
  pageResults: PageBundleResult[],
  activeLocale: string,
): void => {
  console.log(
    `\n\n════════════════════════════════════════════════════════════════`,
  );
  console.log(`  BUNDLE SIZE & LEAKAGE REPORT [${activeLocale.toUpperCase()}]`);
  console.log(
    `════════════════════════════════════════════════════════════════\n`,
  );
  console.table(
    pageResults.map((pr) => ({
      URL: pr.path,
      "Total (Raw/GZ KB)": `${(pr.totalSize / 1024).toFixed(1)} / ${(pr.totalGzipSize / 1024).toFixed(1)}`,
      "JS (Raw/GZ KB)": `${(pr.jsSize / 1024).toFixed(1)} / ${(pr.jsGzipSize / 1024).toFixed(1)}`,
      "CSS (Raw/GZ KB)": `${(pr.cssSize / 1024).toFixed(1)} / ${(pr.cssGzipSize / 1024).toFixed(1)}`,
      "JS files": pr.jsFileCount,
      "Locale leak %": `${pr.localeLeakagePercent.toFixed(1)}%`,
      "Page leak %": `${pr.pageLeakagePercent.toFixed(1)}%`,
    })),
  );
};

const printLocaleLeakageDetails = (pageResults: PageBundleResult[]): void => {
  console.log(`\n── Locale content leakage (ideal: 0% foreign strings) ──\n`);
  for (const pr of pageResults) {
    const status = pr.localeLeakagePercent === 0 ? "✓" : "✗";
    console.log(`${status} ${pr.path}  (active locale: ${pr.locale})`);
    for (const [key, detail] of Object.entries(pr.localeLeakage)) {
      if (detail.count === 0) continue;
      const label = key === pr.locale ? `${key} (current)` : `${key} ← LEAKED`;
      const examples = detail.found
        .slice(0, 2)
        .map((s) => `"${s.slice(0, 45)}..."`)
        .join(", ");
      console.log(`    ${label.padEnd(22)} ${detail.count}× — ${examples}`);
    }
  }
};

const printPageLeakageDetails = (pageResults: PageBundleResult[]): void => {
  console.log(
    `\n── Cross-page content leakage (ideal: 0% foreign strings) ──\n`,
  );
  for (const pr of pageResults) {
    const status = pr.pageLeakagePercent === 0 ? "✓" : "✗";
    console.log(`${status} ${pr.path}  (page: ${pr.page})`);
    for (const [key, detail] of Object.entries(pr.pageLeakage)) {
      if (detail.count === 0) continue;
      const label = key === pr.page ? `${key} (current)` : `${key} ← LEAKED`;
      const examples = detail.found
        .slice(0, 2)
        .map((s) => `"${s.slice(0, 45)}..."`)
        .join(", ");
      console.log(`    ${label.padEnd(22)} ${detail.count}× — ${examples}`);
    }
  }
};

const saveBundleResults = (
  outputFilePath: string,
  appName: string,
  activeLocale: string,
  localeFingerprints: Record<string, string[]>,
  pageFingerprints: Record<string, string[]>,
  pageResults: PageBundleResult[],
): void => {
  try {
    fs.writeFileSync(
      outputFilePath,
      JSON.stringify(
        {
          app: appName,
          locale: activeLocale,
          timestamp: new Date().toISOString(),
          fingerprintCounts: {
            locale: Object.fromEntries(
              Object.entries(localeFingerprints).map(([k, v]) => [k, v.length]),
            ),
            page: Object.fromEntries(
              Object.entries(pageFingerprints).map(([k, v]) => [k, v.length]),
            ),
          },
          results: pageResults,
        },
        null,
        2,
      ),
    );
    console.log(`\nResults saved to: ${outputFilePath}\n`);
  } catch (err) {
    console.error(`Failed to save bundle results to ${outputFilePath}:`, err);
  }
};

// ─── Test registration ────────────────────────────────────────────────────────

export const registerBundleTest = (test: any, expect: any, config: BundleTestConfig): void => {
  const {
    appName,
    benchmarkCategory,
    locales = DEFAULT_LOCALES,
    pages = DEFAULT_PAGES,
    minimumFingerprintLength = DEFAULT_MINIMUM_FINGERPRINT_LENGTH,
  } = config;

  test("Bundle size & content leakage analysis", async ({
    browser,
    baseURL,
  }: {
    browser: Browser;
    baseURL: string | undefined;
  }) => {
    const activeLocale = test.info().project.name;
    test.slow();

    const normalizedBaseUrl = baseURL?.endsWith("/")
      ? baseURL.slice(0, -1)
      : (baseURL ?? "");

    const renderedTexts = await collectAllRenderedTexts(
      browser,
      locales,
      pages,
      normalizedBaseUrl,
      minimumFingerprintLength,
    );

    const localeFingerprints = computeLocaleFingerprints(
      renderedTexts,
      locales,
      pages,
    );
    const pageFingerprints = computePageFingerprints(
      renderedTexts,
      activeLocale,
      pages,
    );

    printFingerprintCounts(
      localeFingerprints,
      pageFingerprints,
      activeLocale,
      pages,
    );

    console.log("\n── Phase 3: capturing bundles & measuring leakage ──\n");
    const pageResults: PageBundleResult[] = [];

    for (const pageConfig of pages) {
      pageResults.push(
        await measurePageBundle(
          browser,
          pageConfig,
          activeLocale,
          normalizedBaseUrl,
          localeFingerprints,
          pageFingerprints,
        ),
      );
    }

    printBundleSummaryTable(pageResults, activeLocale);
    printLocaleLeakageDetails(pageResults);
    printPageLeakageDetails(pageResults);

    const resultsDirectory = path.join(
      benchmarkBloomRoot(process.cwd()),
      "results",
      benchmarkCategory,
      appName,
    );

    try {
      if (!fs.existsSync(resultsDirectory)) {
        fs.mkdirSync(resultsDirectory, { recursive: true });
      }
    } catch (err) {
      console.error(`Failed to create results directory ${resultsDirectory}:`, err);
    }
    const outputFilePath = path.join(
      resultsDirectory,
      `pages-bundle-${activeLocale}.json`,
    );

    saveBundleResults(
      outputFilePath,
      appName,
      activeLocale,
      localeFingerprints,
      pageFingerprints,
      pageResults,
    );

    expect(pageResults.length).toBeGreaterThan(0);
  });
};
