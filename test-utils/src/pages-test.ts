/**
 * pages-test.ts — Bundle size & i18n content leakage analysis
 *
 * WHAT THIS MEASURES
 * ──────────────────
 * For each page, we capture every JS/CSS/HTML file the browser downloads and
 * ask two questions:
 *
 *   1. Locale leakage — does the bundle for /en/home contain French strings?
 *      A well-optimised i18n library ships only the active locale's translations
 *      in the bundle. If foreign strings are present, the library is bundling all
 *      locales together (wasted bytes + potential content confusion).
 *
 *   2. Page leakage — does the bundle for /en/home contain strings that belong
 *      exclusively to /en/about?
 *      Lazy-loaded or per-route code-split apps should only ship content for the
 *      requested page. If cross-page strings appear, the app is over-bundling.
 *
 * WHY FINGERPRINTS INSTEAD OF A HARDCODED DICTIONARY
 * ───────────────────────────────────────────────────
 * Hardcoded expected strings would couple this test to a specific app's copy.
 * Instead we derive "fingerprints" from what the app actually renders:
 *   - A locale fingerprint is a string that appears in locale A but in NO other
 *     locale. It can therefore unambiguously identify locale A in a raw bundle.
 *   - A page fingerprint is a string that appears on page P (in the active locale)
 *     but on NO other page. It can unambiguously identify page P.
 *
 * This makes the test completely library-agnostic and copy-agnostic.
 *
 * LEAKAGE PERCENTAGE FORMULA
 * ──────────────────────────
 * leakage% = foreignFingerprints / (foreignFingerprints + currentFingerprints) × 100
 *
 * A score of 0% means the bundle contains no detectable foreign content.
 * A score of 100% would mean only foreign content was found (pathological case).
 *
 * Usage in each app's pages.test.ts:
 *   import { registerBundleTest } from "test-utils/pages-test";
 *   import pkg from "./package.json" with { type: "json" };
 *   registerBundleTest({ appName: pkg.name });
 */

import fs from "node:fs";
import path from "node:path";
import { test, expect, type Browser } from "@playwright/test";

// ─── Types ───────────────────────────────────────────────────────────────────

/** A page route definition used by the benchmark. */
export interface PageConfig {
  /** URL path segment, e.g. "/about". */
  path: string;
  /** Short identifier used in reports and fingerprint keys, e.g. "about". */
  name: string;
}

/** Configuration accepted by {@link registerBundleTest}. */
export interface BundleTestConfig {
  /** Package name of the app under test — used to name the output JSON file. */
  appName: string;
  /**
   * Locale codes to compare against for leakage detection.
   * Every locale is visited during Phase 1 so fingerprints can be derived.
   * Default: ["en", "fr"]
   */
  locales?: string[];
  /**
   * Pages to visit and measure. Each entry is tested in every locale during
   * Phase 1 and in the active locale during Phase 3.
   * Default: 10 standard benchmark pages (home, about, blog, …)
   */
  pages?: PageConfig[];
  /**
   * Minimum character length a visible text line must have to qualify as a
   * fingerprint. Short strings (e.g. "OK", "fr") are too generic and appear
   * in code/comments even without actual leakage.
   * Default: 20
   */
  minimumFingerprintLength?: number;
  /**
   * Subfolder name under `<repo-root>/results/` that groups results by
   * benchmark category, e.g. `"tanstack-start-react-static"`.
   * Produces: `<repo-root>/results/<benchmarkCategory>/<appName>/`
   */
  benchmarkCategory: string;
}

/** A single JS, CSS, or HTML file downloaded by the browser for a given page visit. */
interface BundleFile {
  /** URL path relative to the app base URL. */
  url: string;
  /** Raw byte size of the response body. */
  size: number;
  /** Asset category derived from Content-Type and URL extension. */
  type: "js" | "css" | "html";
}

/** Per-key leakage detail: how many fingerprint strings of that key appeared in the bundle. */
interface LeakageDetail {
  /** Number of fingerprint strings found in the bundle. */
  count: number;
  /** The actual strings that were found (subset of the key's fingerprints). */
  found: string[];
}

/** Full measurement result for one page × active-locale bundle capture. */
interface PageBundleResult {
  /** Full URL path including locale prefix, e.g. "/en/about". */
  path: string;
  /** Page name identifier, e.g. "about". */
  page: string;
  /** Active locale at the time of capture, e.g. "en". */
  locale: string;
  /** Total byte size of all downloaded assets (JS + CSS + HTML). */
  totalSize: number;
  /** Combined byte size of all JS assets. */
  jsSize: number;
  /** Combined byte size of all CSS assets. */
  cssSize: number;
  /** Combined byte size of the HTML document. */
  htmlSize: number;
  /** Total number of asset files downloaded. */
  fileCount: number;
  /** Number of JS files downloaded. */
  jsFileCount: number;
  /** Detailed list of every asset file captured. */
  bundleFiles: BundleFile[];
  /** Leakage breakdown per locale (foreign locale strings found in the bundle). */
  localeLeakage: Record<string, LeakageDetail>;
  /** Percentage of detected fingerprints that belong to a foreign locale. */
  localeLeakagePercent: number;
  /** Leakage breakdown per page (foreign page strings found in the bundle). */
  pageLeakage: Record<string, LeakageDetail>;
  /** Percentage of detected fingerprints that belong to a foreign page. */
  pageLeakagePercent: number;
}

// ─── Defaults ────────────────────────────────────────────────────────────────

/** Locales compared in every benchmark run unless overridden. */
export const DEFAULT_LOCALES = ["en", "fr"];

/**
 * Minimum visible text line length to be considered a fingerprint.
 * Short lines produce too many false-positive matches in raw bundle source.
 */
export const DEFAULT_MINIMUM_FINGERPRINT_LENGTH = 20;

/** Standard set of pages present in every benchmark app. */
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

// ─── Low-level browser helpers ────────────────────────────────────────────────

/**
 * Loads a page in a fully isolated browser context and returns every distinct
 * visible text line that is at least `minimumFingerprintLength` characters long.
 *
 * We use `innerText` (not `textContent`) because it reflects only text that is
 * actually rendered on screen — hidden elements and script/style content are
 * excluded. Each line is trimmed and deduplicated before returning.
 *
 * A fresh context is created for every call so that cookies, cache, and
 * navigation history from other pages cannot influence the rendered content.
 *
 * @param browser - Playwright Browser instance shared across the test.
 * @param url - Fully qualified URL to load.
 * @param minimumFingerprintLength - Minimum character count for a line to be kept.
 * @returns Deduplicated visible text lines meeting the length threshold.
 */
const extractPageText = async (
  browser: Browser,
  url: string,
  minimumFingerprintLength: number,
): Promise<string[]> => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });

    return await page.evaluate((minimumLength: number) => {
      const textLines = (document.body.innerText ?? "")
        .split("\n")
        .map((textLine: string) => textLine.trim())
        .filter((textLine: string) => textLine.length >= minimumLength);

      return [...new Set(textLines)];
    }, minimumFingerprintLength);
  } catch {
    return [];
  } finally {
    await browserContext.close();
  }
};

/**
 * Loads a page in a fresh browser context while intercepting all network
 * responses to record asset sizes and concatenated source text.
 *
 * JS and HTML body text is concatenated into `bundleText` for fingerprint
 * scanning. CSS is tracked for size only — translation strings never appear
 * in CSS, so scanning it would only produce false positives.
 *
 * Response handlers fire asynchronously, so all resulting promises are
 * collected in `pendingResponsePromises` and awaited with `Promise.allSettled`
 * before closing the context to avoid dropping late-arriving responses.
 *
 * @param browser - Playwright Browser instance shared across the test.
 * @param url - Fully qualified URL to load.
 * @param normalizedBaseUrl - Base URL with trailing slash stripped, used to
 *   produce relative asset URLs in the report.
 * @returns Captured asset file list and concatenated JS + HTML source text.
 */
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

  page.on("response", (response) => {
    const responseBodyPromise = (async () => {
      const responseUrl = response.url();

      if (response.status() !== 200) return;

      // Detect type from Content-Type header first, then fall back to URL
      // extension (some dev servers omit or genericise the Content-Type).
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

        bundleFiles.push({
          url: responseUrl.replace(normalizedBaseUrl, ""),
          size: responseBody.length,
          type: assetType,
        });

        // Only JS and HTML can contain translated strings; skip CSS body text.

        if (isJavaScript || isHtml) {
          bundleText += responseBody.toString("utf-8");
        }
      } catch {
        /* Response body already consumed or request aborted — safe to skip. */
      }
    })();
    pendingResponsePromises.push(responseBodyPromise);
  });

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
  } catch (navigationError) {
    console.log(`  Warning navigating to ${url}: ${navigationError}`);
  }

  // Wait for all in-flight response body reads before closing the context.
  await Promise.allSettled(pendingResponsePromises);
  await browserContext.close();

  return { bundleFiles, bundleText };
};

/**
 * Scans `bundleText` for occurrences of each fingerprint set and computes a
 * leakage breakdown with an overall percentage.
 *
 * `activeKey` identifies which locale or page the bundle belongs to.
 * Every fingerprint hit from a *different* key is counted as a foreign (leaked)
 * hit. The percentage formula is:
 *
 *   leakage% = foreignHits / (foreignHits + activeHits) × 100
 *
 * A result of 0% can mean either:
 *   a) The library correctly ships only the active locale/page — ideal.
 *   b) No unique fingerprints were found for any key — rare edge case caused by
 *      apps that render identical content across locales or pages.
 *
 * @param bundleText - Concatenated JS + HTML source of all captured assets.
 * @param activeKey - The locale code or page name of the bundle being analysed.
 * @param fingerprintsByKey - Map of key → unique strings for that key.
 * @returns Per-key leakage details and an overall leakage percentage.
 */
const analyzeLeakage = (
  bundleText: string,
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
    const matchedStrings = fingerprintStrings.filter((fingerprintString) =>
      bundleText.includes(fingerprintString),
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

// ─── Phase 1: text extraction ─────────────────────────────────────────────────

/**
 * Phase 1 — Visit every locale × page in an isolated browser context and
 * collect all visible text strings for fingerprint computation.
 *
 * All locales must be visited (not just the active one) so that locale
 * fingerprints can be derived by set difference in Phase 2.
 *
 * @param browser - Playwright Browser instance.
 * @param locales - All locale codes to visit.
 * @param pages - All pages to visit per locale.
 * @param normalizedBaseUrl - Base URL with trailing slash stripped.
 * @param minimumFingerprintLength - Minimum line length to retain.
 * @returns `renderedTexts[localeCode][pageName]` = deduplicated visible lines.
 */
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

// ─── Phase 2: fingerprint computation ────────────────────────────────────────

/**
 * Phase 2a — For each locale, compute the set of strings that appear in that
 * locale across all pages but in NO other locale.
 *
 * A string shared between EN and FR (e.g. "Submit") cannot distinguish them and
 * is therefore excluded. Only exclusively-locale strings are useful fingerprints.
 *
 * @param renderedTexts - Output of {@link collectAllRenderedTexts}.
 * @param locales - All locale codes.
 * @param pages - All pages visited.
 * @returns `localeFingerprints[localeCode]` = strings unique to that locale.
 */
const computeLocaleFingerprints = (
  renderedTexts: Record<string, Record<string, string[]>>,
  locales: string[],
  pages: PageConfig[],
): Record<string, string[]> => {
  const localeFingerprints: Record<string, string[]> = {};

  for (const localeCode of locales) {
    const ownStrings = new Set(
      pages.flatMap(
        ({ name: pageName }) => renderedTexts[localeCode][pageName],
      ),
    );
    const foreignStrings = new Set(
      locales
        .filter((otherLocale) => otherLocale !== localeCode)
        .flatMap((otherLocale) =>
          pages.flatMap(
            ({ name: pageName }) => renderedTexts[otherLocale][pageName],
          ),
        ),
    );
    localeFingerprints[localeCode] = [...ownStrings].filter(
      (textLine) => !foreignStrings.has(textLine),
    );
  }

  return localeFingerprints;
};

/**
 * Phase 2b — For each page in the active locale, compute strings that appear
 * on that page but on NO other page in the same locale.
 *
 * Strings shared across pages (e.g. nav labels) are excluded — they would
 * produce false positives when scanning for cross-page leakage.
 *
 * @param renderedTexts - Output of {@link collectAllRenderedTexts}.
 * @param activeLocale - The locale whose pages are being fingerprinted.
 * @param pages - All pages visited.
 * @returns `pageFingerprints[pageName]` = strings unique to that page.
 */
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
        .filter(({ name: otherPageName }) => otherPageName !== pageName)
        .flatMap(
          ({ name: otherPageName }) =>
            renderedTexts[activeLocale][otherPageName],
        ),
    );
    pageFingerprints[pageName] = [...ownStrings].filter(
      (textLine) => !foreignStrings.has(textLine),
    );
  }

  return pageFingerprints;
};

/**
 * Logs the fingerprint counts for all locales and pages to the console.
 *
 * @param localeFingerprints - Output of {@link computeLocaleFingerprints}.
 * @param pageFingerprints - Output of {@link computePageFingerprints}.
 * @param activeLocale - The locale used for page fingerprints.
 * @param pages - All pages.
 */
const printFingerprintCounts = (
  localeFingerprints: Record<string, string[]>,
  pageFingerprints: Record<string, string[]>,
  activeLocale: string,
  pages: PageConfig[],
): void => {
  console.log("\n── Fingerprint counts ──");

  for (const [localeCode, fingerprintStrings] of Object.entries(
    localeFingerprints,
  )) {
    console.log(
      `  locale[${localeCode}]: ${fingerprintStrings.length} unique strings`,
    );
  }

  for (const { name: pageName } of pages) {
    console.log(
      `  page[${pageName}] (${activeLocale}): ${pageFingerprints[pageName].length} unique strings`,
    );
  }
};

// ─── Phase 3: bundle capture & leakage analysis ───────────────────────────────

/**
 * Phase 3 — Load a single page, capture its full network bundle, and measure
 * leakage against both locale and page fingerprints.
 *
 * The page is loaded in a fresh browser context (separate from Phase 1) to
 * ensure we capture the full asset set without HTTP cache influence.
 *
 * @param browser - Playwright Browser instance.
 * @param pageConfig - The page to measure.
 * @param activeLocale - Current locale being tested.
 * @param normalizedBaseUrl - Base URL with trailing slash stripped.
 * @param localeFingerprints - Output of {@link computeLocaleFingerprints}.
 * @param pageFingerprints - Output of {@link computePageFingerprints}.
 * @returns Full measurement result for this page.
 */
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

  const totalSize = bundleFiles.reduce(
    (sizeAccumulator, bundleFile) => sizeAccumulator + bundleFile.size,
    0,
  );
  const jsSize = bundleFiles
    .filter((bundleFile) => bundleFile.type === "js")
    .reduce(
      (sizeAccumulator, bundleFile) => sizeAccumulator + bundleFile.size,
      0,
    );
  const cssSize = bundleFiles
    .filter((bundleFile) => bundleFile.type === "css")
    .reduce(
      (sizeAccumulator, bundleFile) => sizeAccumulator + bundleFile.size,
      0,
    );
  const htmlSize = bundleFiles
    .filter((bundleFile) => bundleFile.type === "html")
    .reduce(
      (sizeAccumulator, bundleFile) => sizeAccumulator + bundleFile.size,
      0,
    );

  const {
    leakageDetails: localeLeakage,
    leakagePercent: localeLeakagePercent,
  } = analyzeLeakage(bundleText, activeLocale, localeFingerprints);
  const { leakageDetails: pageLeakage, leakagePercent: pageLeakagePercent } =
    analyzeLeakage(bundleText, pageConfig.name, pageFingerprints);

  console.log(
    `${(totalSize / 1024).toFixed(1).padStart(8)} KB total | ` +
      `JS ${(jsSize / 1024).toFixed(1).padStart(7)} KB | ` +
      `locale leak: ${localeLeakagePercent.toFixed(1).padStart(5)}% | ` +
      `page leak: ${pageLeakagePercent.toFixed(1).padStart(5)}%`,
  );

  return {
    path: fullPath,
    page: pageConfig.name,
    locale: activeLocale,
    totalSize,
    jsSize,
    cssSize,
    htmlSize,
    fileCount: bundleFiles.length,
    jsFileCount: bundleFiles.filter((bundleFile) => bundleFile.type === "js")
      .length,
    bundleFiles,
    localeLeakage,
    localeLeakagePercent,
    pageLeakage,
    pageLeakagePercent,
  };
};

// ─── Reporting ────────────────────────────────────────────────────────────────

/**
 * Prints the bundle size summary table for all measured pages to the console.
 *
 * @param pageResults - Output of {@link measurePageBundle} calls.
 * @param activeLocale - Current locale, used in the report header.
 */
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
    pageResults.map((pageResult) => ({
      URL: pageResult.path,
      "Total (KB)": (pageResult.totalSize / 1024).toFixed(2),
      "JS (KB)": (pageResult.jsSize / 1024).toFixed(2),
      "CSS (KB)": (pageResult.cssSize / 1024).toFixed(2),
      "HTML (KB)": (pageResult.htmlSize / 1024).toFixed(2),
      "JS files": pageResult.jsFileCount,
      "Locale leak %": `${pageResult.localeLeakagePercent.toFixed(1)}%`,
      "Page leak %": `${pageResult.pageLeakagePercent.toFixed(1)}%`,
    })),
  );
};

/**
 * Prints locale leakage details for each page, highlighting which foreign
 * locale strings were found in the bundle and showing example matches.
 *
 * @param pageResults - Output of {@link measurePageBundle} calls.
 */
const printLocaleLeakageDetails = (pageResults: PageBundleResult[]): void => {
  console.log(`\n── Locale content leakage (ideal: 0% foreign strings) ──\n`);

  for (const pageResult of pageResults) {
    const statusIcon = pageResult.localeLeakagePercent === 0 ? "✓" : "✗";
    console.log(
      `${statusIcon} ${pageResult.path}  (active locale: ${pageResult.locale})`,
    );

    for (const [localeKey, leakageDetail] of Object.entries(
      pageResult.localeLeakage,
    )) {
      if (leakageDetail.count === 0) continue;
      const label =
        localeKey === pageResult.locale
          ? `${localeKey} (current)`
          : `${localeKey} ← LEAKED`;
      const exampleStrings = leakageDetail.found
        .slice(0, 2)
        .map((leakedString) => `"${leakedString.slice(0, 55)}"`)
        .join(", ");
      console.log(
        `    ${label.padEnd(22)} ${leakageDetail.count}× — ${exampleStrings}`,
      );
    }
  }
};

/**
 * Prints cross-page leakage details for each page, highlighting which foreign
 * page strings were found in the bundle and showing example matches.
 *
 * @param pageResults - Output of {@link measurePageBundle} calls.
 */
const printPageLeakageDetails = (pageResults: PageBundleResult[]): void => {
  console.log(
    `\n── Cross-page content leakage (ideal: 0% foreign strings) ──\n`,
  );

  for (const pageResult of pageResults) {
    const statusIcon = pageResult.pageLeakagePercent === 0 ? "✓" : "✗";
    console.log(`${statusIcon} ${pageResult.path}  (page: ${pageResult.page})`);

    for (const [pageKey, leakageDetail] of Object.entries(
      pageResult.pageLeakage,
    )) {
      if (leakageDetail.count === 0) continue;

      const label =
        pageKey === pageResult.page
          ? `${pageKey} (current)`
          : `${pageKey} ← LEAKED`;

      const exampleStrings = leakageDetail.found
        .slice(0, 2)
        .map((leakedString) => `"${leakedString.slice(0, 55)}"`)
        .join(", ");

      console.log(
        `    ${label.padEnd(22)} ${leakageDetail.count}× — ${exampleStrings}`,
      );
    }
  }
};

// ─── Persistence ──────────────────────────────────────────────────────────────

/**
 * Writes the full bundle measurement results to a JSON file in the shared
 * results directory (`<repo-root>/results/<benchmarkCategory>/<appName>/`).
 *
 * @param outputFilePath - Absolute path of the output JSON file.
 * @param appName - Package name of the app under test.
 * @param activeLocale - Locale that was active during the capture.
 * @param localeFingerprints - Computed locale fingerprints (counts saved only).
 * @param pageFingerprints - Computed page fingerprints (counts saved only).
 * @param pageResults - All captured page bundle results.
 */
const saveBundleResults = (
  outputFilePath: string,
  appName: string,
  activeLocale: string,
  localeFingerprints: Record<string, string[]>,
  pageFingerprints: Record<string, string[]>,
  pageResults: PageBundleResult[],
): void => {
  fs.writeFileSync(
    outputFilePath,
    JSON.stringify(
      {
        app: appName,
        locale: activeLocale,
        timestamp: new Date().toISOString(),
        fingerprintCounts: {
          locale: Object.fromEntries(
            Object.entries(localeFingerprints).map(([localeCode, strings]) => [
              localeCode,
              strings.length,
            ]),
          ),
          page: Object.fromEntries(
            Object.entries(pageFingerprints).map(([pageName, strings]) => [
              pageName,
              strings.length,
            ]),
          ),
        },
        results: pageResults,
      },
      null,
      2,
    ),
  );
  console.log(`\nResults saved to: ${outputFilePath}\n`);
};

// ─── Test registration ────────────────────────────────────────────────────────

/**
 * Registers the bundle size & content leakage Playwright test for an app.
 *
 * Call this at the top level of your `pages.test.ts` file. The test is
 * parameterised by the Playwright project name, which must match a locale code
 * (e.g. "en", "fr"). This lets the same test file run once per locale via
 * `playwright.config.ts` projects without any code duplication.
 *
 * @param config - Test configuration for the app under test.
 */
export const registerBundleTest = (config: BundleTestConfig): void => {
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
  }) => {
    // The Playwright project name is used as the active locale identifier.
    // Running the test under multiple projects measures each locale independently.
    const activeLocale = test.info().project.name;
    test.slow(); // this test opens many pages — increase the default timeout

    // Strip trailing slash so all URL concatenation is consistent.
    const normalizedBaseUrl = baseURL?.endsWith("/")
      ? baseURL.slice(0, -1)
      : (baseURL ?? "");

    // ── Phase 1: collect visible text for all locales × pages ────────────────
    const renderedTexts = await collectAllRenderedTexts(
      browser,
      locales,
      pages,
      normalizedBaseUrl,
      minimumFingerprintLength,
    );

    // ── Phase 2: derive fingerprints ─────────────────────────────────────────
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

    // ── Phase 3: capture bundles and measure leakage ──────────────────────────
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

    // ── Report ────────────────────────────────────────────────────────────────
    printBundleSummaryTable(pageResults, activeLocale);
    printLocaleLeakageDetails(pageResults);
    printPageLeakageDetails(pageResults);

    // ── Save ──────────────────────────────────────────────────────────────────
    // Results land in <repo-root>/results/<benchmarkCategory>/<appName>/.
    // From the app directory (tanstack-start-react/<app>/), two levels up
    // reaches the repo root.
    const resultsDirectory = path.resolve(
      process.cwd(),
      "..",
      "..",
      "results",
      benchmarkCategory,
      appName,
    );

    if (!fs.existsSync(resultsDirectory)) {
      fs.mkdirSync(resultsDirectory, { recursive: true });
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
