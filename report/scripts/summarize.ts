#!/usr/bin/env bun
/**
 * Benchmark Bloom — Result Summarizer
 *
 * Reads all benchmark result JSON files from results/ and outputs per-framework
 * summaries organized by library, with 5 groups per lib:
 *   global / static / dynamic / scoped-static / scoped-dynamic
 *
 * Usage:
 *   bun report/scripts/summarize.ts [options]
 *
 * Options:
 *   --framework <name>   Filter by framework (nextjs, tanstack, vite-react)
 *   --category  <name>   Filter by test category (static, dynamic, scoped-static, scoped-dynamic)
 *   --lib       <name>   Filter by library name (partial match)
 *   --json               Output aggregated lib data as JSON on stdout
 *   --out [path]         Base path for JSON output; produces <base>-<fw>-<category>.json per framework×category
 *   --md  [path]         Base path for Markdown; one <base>-<fw>.md per framework (all categories merged)
 *   --help               Show this help message
 */

import {
  readdirSync,
  readFileSync,
  existsSync,
  writeFileSync,
  mkdirSync,
} from "fs";
import { dirname, join, resolve } from "path";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const REPO_ROOT = resolve(import.meta.dir, "../..");
const RESULTS_DIR = join(REPO_ROOT, "results");
const APPS_DIR = join(REPO_ROOT, "apps-benchmark");
const APP_MAP_PATH = join(REPO_ROOT, "report/scripts/appMap.json");

const appMap = existsSync(APP_MAP_PATH)
  ? JSON.parse(readFileSync(APP_MAP_PATH, "utf-8"))
  : null;

const FALLBACKS: Record<string, string[]> = appMap?.fallbacks ?? {
  "scoped-dynamic": ["scoped-dynamic", "dynamic", "static"],
  "scoped-static": ["scoped-static", "static"],
  dynamic: ["dynamic", "static"],
  static: ["static"],
};

/** Library slugs (`deriveLibraryName`) whose locale/page leak probes are not meaningful — omit only those columns, not other bundle metrics. */
const LIBS_WITHOUT_RELIABLE_LEAK_METRICS = new Set([
  "lingo.dev",
  "gt-next",
  "gt-react",
]);

/** Library slugs whose empty-component lib-size row is omitted (other metrics unchanged). */
const LIBS_WITHOUT_RELIABLE_LIB_SIZE = new Set(["wuchale"]);

/** Library slugs whose locale-leak % is omitted; page JS and other leak metrics stay. */
const LIBS_WITHOUT_RELIABLE_LOCALE_LEAK = new Set(["wuchale"]);

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

if (args.includes("--help")) {
  console.log(`
Benchmark Bloom — Result Summarizer

Usage:
  bun report/scripts/summarize.ts [options]

Options:
  --framework <name>   Filter by framework: nextjs | tanstack | vite-react
  --category  <name>   Filter by test category: static | dynamic | scoped-static | scoped-dynamic
  --lib       <name>   Filter by library name (partial match, e.g. "intlayer")
  --json               Output aggregated lib data as JSON on stdout
  --out [path]         Base path for JSON (<base>-<fw>-<category>.json per framework×category)
  --md  [path]         Base path for Markdown (one <base>-<fw>.md per framework, all categories)
  --help               Show this help
  `);
  process.exit(0);
}

function getArg(flag: string): string | null {
  const idx = args.indexOf(flag);
  return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null;
}

const filterFramework = getArg("--framework")?.toLowerCase() ?? null;
const filterCategory = getArg("--category")?.toLowerCase() ?? null;
const filterLib = getArg("--lib")?.toLowerCase() ?? null;
const outputJson = args.includes("--json");

function getOutBasePath(): string | null {
  const idx = args.indexOf("--out");
  if (idx === -1) return null;
  const next = args[idx + 1];
  if (!next || next.startsWith("-")) {
    return join(REPO_ROOT, "report/summarize");
  }
  return resolve(REPO_ROOT, next).replace(/\.json$/, "");
}

function getMdBasePath(): string | null {
  const idx = args.indexOf("--md");
  if (idx === -1) return null;
  const next = args[idx + 1];
  if (!next || next.startsWith("-")) {
    return join(REPO_ROOT, "report/scripts/summarize");
  }
  return resolve(REPO_ROOT, next).replace(/\.md$/, "");
}

const outBasePath = getOutBasePath();
const mdBasePath = getMdBasePath();

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------

type DataStatus = "ok" | "missing" | "error" | "invalid";

interface MetricStats {
  avg: number;
  min: number;
  max: number;
  raw: number[];
}

interface LibSizeData {
  status: DataStatus;
  gzip: number | null;
  minified: number | null;
  unminified: number | null;
}

interface PageData {
  path: string;
  page: string;
  jsGzipSize: number;
  totalGzipSize: number;
  cssGzipSize: number;
  htmlGzipSize: number;
  fileCount: number;
  jsFileCount: number;
  /** Null when locale leak is excluded (`leakMetricsExcluded` or `localeLeakMetricsExcluded`). */
  localeLeakagePercent: number | null;
  /** Null when `PageBundleData.leakMetricsExcluded` (page leak probe not comparable). */
  pageLeakagePercent: number | null;
  otherPageContentLeakagePercent: number | null;
}

interface PageBundleLocaleData {
  jsGzip: MetricStats | null;
  localeLeakPct: MetricStats | null;
  pageLeakPct: MetricStats | null;
  otherPageContentLeakPct: MetricStats | null;
  pages: PageData[];
}

interface PageBundleData {
  status: DataStatus;
  /** True when locale/page leak values are intentionally nulled (probe not comparable); other bundle metrics stay. */
  leakMetricsExcluded?: boolean;
  /** True when only locale-leak fields are nulled (`LIBS_WITHOUT_RELIABLE_LOCALE_LEAK`). */
  localeLeakMetricsExcluded?: boolean;
  byLocale: Record<string, PageBundleLocaleData>;
  jsGzipMin: number | null;
  jsGzipAvg: number | null;
  jsGzipMax: number | null;
  localeLeakAvgPct: number | null;
  pageLeakAvgPct: number | null;
  otherPageContentLeakAvgPct: number | null;
}

interface ComponentItem {
  name: string;
  category: string;
  minifiedGzip: number;
  minified: number;
  unminified: number;
  unminifiedGzip: number;
}

interface ComponentsData {
  status: DataStatus;
  gzipMin: number | null;
  gzipAvg: number | null;
  gzipMax: number | null;
  count: number;
  items: ComponentItem[];
}

interface ReactivityLocaleData {
  e2e: MetricStats | null;
  profiler: MetricStats | null;
}

interface ReactivityData {
  status: DataStatus;
  byLocale: Record<string, ReactivityLocaleData>;
  e2eAvgMs: number | null;
  profilerAvgMs: number | null;
}

interface RenderingLocaleData {
  e2ePageLoad: MetricStats | null;
  hydration: MetricStats | null;
  reactMount: MetricStats | null;
  hydrationInstrumented: boolean;
  reactMountInstrumented: boolean;
}

interface RenderingData {
  status: DataStatus;
  byLocale: Record<string, RenderingLocaleData>;
  e2ePageLoadAvgMs: number | null;
  hydrationAvgMs: number | null;
  reactMountAvgMs: number | null;
}

interface AppSummary {
  category: string;
  framework: string;
  testCategory: string;
  appName: string;
  library: string;
  version: string | null;
  overallStatus: "ok" | "partial" | "missing" | "error";
  libSize: LibSizeData;
  pageBundle: PageBundleData;
  components: ComponentsData;
  reactivity: ReactivityData;
  rendering: RenderingData;
}

// ---------------------------------------------------------------------------
// New output types — organized by library
// ---------------------------------------------------------------------------

interface CategoryData {
  appName: string;
  bundleLink: string;
  overallStatus: "ok" | "partial" | "missing" | "error";
  pageBundle: PageBundleData;
  components: ComponentsData;
  reactivity: ReactivityData;
  rendering: RenderingData;
}

interface LibrarySummary {
  global: {
    version: string | null;
    libSize: LibSizeData;
  };
  static: CategoryData | null;
  dynamic: CategoryData | null;
  "scoped-static": CategoryData | null;
  "scoped-dynamic": CategoryData | null;
}

interface FrameworkSummary {
  meta: {
    framework: string;
    frameworkLabel: string;
    generatedAt: string;
    counts: {
      totalLibs: number;
      totalApps: number;
    };
  };
  libs: Record<string, LibrarySummary>;
}

// ---------------------------------------------------------------------------
// Raw file types
// ---------------------------------------------------------------------------

interface RawPageResult {
  path: string;
  page: string;
  locale: string;
  totalSize?: number;
  totalGzipSize?: number;
  jsSize?: number;
  jsGzipSize: number;
  cssSize?: number;
  cssGzipSize?: number;
  htmlSize?: number;
  htmlGzipSize?: number;
  fileCount?: number;
  jsFileCount?: number;
  localeLeakage?: Record<string, { count: number; found: string[] }>;
  localeLeakagePercent: number;
  pageLeakage?: Record<string, { count: number; found: string[] }>;
  pageLeakagePercent: number;
  otherPageContentLeakagePercent?: number;
}

interface RawPagesBundleFile {
  app: string;
  locale: string;
  results: RawPageResult[];
}

interface RawComponentEntry {
  name: string;
  category: string;
  unminifiedBytes?: number;
  unminifiedGzipBytes?: number;
  minifiedBytes?: number;
  minifiedGzipBytes?: number;
}

interface RawComponentsFile {
  packageName: string;
  components: RawComponentEntry[];
  summary?: {
    totalComponents: number;
    totalMinifiedBytes?: number;
    totalGzipBytes: number;
  };
}

interface RawTimingStats {
  avg: number;
  min: number;
  max: number;
  raw?: number[];
  description?: string;
}

interface RawReactivityFile {
  locale: string;
  iterations?: number;
  e2e: RawTimingStats;
  reactProfiler: RawTimingStats;
}

interface RawRenderingFile {
  locale: string;
  iterations?: number;
  e2ePageLoad: RawTimingStats;
  hydration: RawTimingStats;
  reactMount: RawTimingStats;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readJson<T>(filePath: string): T | null {
  try {
    return JSON.parse(readFileSync(filePath, "utf-8")) as T;
  } catch {
    return null;
  }
}

function fileExists(filePath: string): boolean {
  return existsSync(filePath);
}

function statsFromArray(nums: number[]): MetricStats {
  if (nums.length === 0) return { avg: 0, min: 0, max: 0, raw: [] };
  const sum = nums.reduce((a, b) => a + b, 0);
  return {
    avg: sum / nums.length,
    min: Math.min(...nums),
    max: Math.max(...nums),
    raw: nums,
  };
}

function avgOf(nums: number[]): number {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function minOf(nums: number[]): number {
  return Math.min(...nums);
}

function maxOf(nums: number[]): number {
  return Math.max(...nums);
}

function rawStatsToMetric(s: RawTimingStats): MetricStats {
  return {
    avg: s.avg ?? 0,
    min: s.min ?? 0,
    max: s.max ?? 0,
    raw: s.raw ?? [],
  };
}

function kb(bytes: number): string {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function pct(value: number): string {
  return `${value.toFixed(1)}%`;
}

function ms(value: number): string {
  return `${value.toFixed(1)} ms`;
}

// ---------------------------------------------------------------------------
// App identity
// ---------------------------------------------------------------------------

function parseCategory(appName: string): {
  framework: string;
  testCategory: string;
} {
  let framework = "unknown";
  if (appName.startsWith("nextjs-")) {
    framework = "nextjs";
  } else if (appName.startsWith("tanstack-")) {
    framework = "tanstack-start-react";
  } else if (
    appName.startsWith("vite+react-") ||
    appName.startsWith("vite-")
  ) {
    // `vite-base-app` / legacy folders use `vite-`; workspace packages use `vite+react-*`
    framework = "vite-react";
  }

  let testCategory = "unknown";
  if (appName.includes("-scoped-dynamic-")) {
    testCategory = "scoped-dynamic";
  } else if (appName.includes("-scoped-static-")) {
    testCategory = "scoped-static";
  } else if (appName.includes("-dynamic-")) {
    testCategory = "dynamic";
  } else if (appName.includes("-static-")) {
    testCategory = "static";
  } else if (appName.includes("-base-app")) {
    testCategory = "base";
  }

  return { framework, testCategory };
}

function deriveLibraryName(appName: string): string {
  let name = appName;

  const prefixes = [
    "nextjs-scoped-dynamic-",
    "nextjs-scoped-static-",
    "nextjs-dynamic-",
    "nextjs-static-",
    "tanstack-scoped-dynamic-",
    "tanstack-scoped-static-",
    "tanstack-dynamic-",
    "tanstack-static-",
    "vite+react-",
    "vite-react-",
    "vite-",
    "nextjs-",
    "tanstack-",
  ];

  for (const prefix of prefixes) {
    if (name.startsWith(prefix)) {
      name = name.slice(prefix.length);
      break;
    }
  }

  if (name.endsWith("-app")) {
    name = name.slice(0, -4);
  }

  return name || appName;
}

const LIBRARY_PACKAGES: Record<string, string[]> = {
  "gt-next": ["gt-next"],
  "gt-react": ["gt-react"],
  "next-intl": ["next-intl"],
  "next-i18next": ["next-i18next"],
  "next-translate": ["next-translate"],
  "next-intlayer": ["next-intlayer"],
  intlayer: ["intlayer"],
  lingui: ["@lingui/react"],
  "paraglide-next": ["@inlang/paraglide-next", "@inlang/paraglide-js"],
  paraglide: ["@inlang/paraglide-js"],
  tolgee: ["@tolgee/react"],
  "react-i18next": ["react-i18next"],
  "use-intl": ["use-intl"],
  "react-intl": ["react-intl"],
  wuchale: ["wuchale"],
  "next-international": ["next-international"],
  "lingo.dev": [
    "lingo.dev",
    "@lingo.dev/i18next",
    "lingodotdev-i18next",
    "@lingo.dev/compiler",
  ],
};

function findLibraryVersion(
  librarySlug: string,
  appPackageName: string,
): string | null {
  let categories: string[];
  try {
    categories = readdirSync(APPS_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith("results"))
      .map((d) => d.name);
  } catch {
    return null;
  }

  for (const cat of categories) {
    const catPath = join(APPS_DIR, cat);
    let appDirs: string[];
    try {
      appDirs = readdirSync(catPath, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
    } catch {
      continue;
    }

    for (const appDir of appDirs) {
      const pkgPath = join(catPath, appDir, "package.json");
      if (!existsSync(pkgPath)) continue;
      const pkg = readJson<{
        name?: string;
        dependencies?: Record<string, string>;
        devDependencies?: Record<string, string>;
      }>(pkgPath);
      if (!pkg || pkg.name !== appPackageName) continue;

      const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
      const candidates = LIBRARY_PACKAGES[librarySlug] ?? [];
      for (const candidate of candidates) {
        if (allDeps[candidate]) {
          return allDeps[candidate].replace(/^[\^~>=<]/, "");
        }
      }
      return null;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Data collection per section
// ---------------------------------------------------------------------------

function collectLibSize(appResultDir: string): LibSizeData {
  const filePath = join(appResultDir, "empty-component-size.json");

  if (!fileExists(filePath)) {
    if (appResultDir.includes("-base-app")) {
      return { status: "ok", gzip: 0, minified: 0, unminified: 0 };
    }
    return { status: "missing", gzip: null, minified: null, unminified: null };
  }

  const data = readJson<RawComponentsFile>(filePath);
  if (!data?.components || data.components.length === 0) {
    return { status: "error", gzip: null, minified: null, unminified: null };
  }

  const comp = data.components[0];
  const gzip = comp.minifiedGzipBytes ?? null;
  const minified = comp.minifiedBytes ?? null;
  const unminified = comp.unminifiedBytes ?? null;

  if (gzip == null || gzip === 0) {
    return { status: "invalid", gzip, minified, unminified };
  }

  return { status: "ok", gzip, minified, unminified };
}

function collectPageBundle(
  appResultDir: string,
  locales = ["en", "fr"],
): PageBundleData {
  const byLocale: Record<string, PageBundleLocaleData> = {};
  let anyFile = false;
  let anyError = false;
  let anyData = false;

  for (const locale of locales) {
    const filePath = join(appResultDir, `pages-bundle-${locale}.json`);
    if (!fileExists(filePath)) continue;

    anyFile = true;
    const data = readJson<RawPagesBundleFile>(filePath);
    if (!data || !Array.isArray(data.results) || data.results.length === 0) {
      anyError = true;
      continue;
    }

    const results = data.results;
    const pages: PageData[] = results.map((r) => ({
      path: r.path,
      page: r.page,
      jsGzipSize: r.jsGzipSize ?? 0,
      totalGzipSize: r.totalGzipSize ?? 0,
      cssGzipSize: r.cssGzipSize ?? 0,
      htmlGzipSize: r.htmlGzipSize ?? 0,
      fileCount: r.fileCount ?? 0,
      jsFileCount: r.jsFileCount ?? 0,
      localeLeakagePercent: r.localeLeakagePercent ?? 0,
      pageLeakagePercent: r.pageLeakagePercent ?? 0,
      otherPageContentLeakagePercent:
        r.otherPageContentLeakagePercent ?? r.pageLeakagePercent ?? 0,
    }));

    const jsSizes = pages.map((p) => p.jsGzipSize);
    const localeLeak = pages
      .map((p) => p.localeLeakagePercent)
      .filter((v): v is number => v != null);
    const pageLeak = pages
      .map((p) => p.pageLeakagePercent)
      .filter((v): v is number => v != null);

    const validJsSizes = jsSizes.filter((v) => v > 0);

    byLocale[locale] = {
      jsGzip: validJsSizes.length > 0 ? statsFromArray(validJsSizes) : null,
      localeLeakPct: statsFromArray(localeLeak),
      pageLeakPct: statsFromArray(pageLeak),
      otherPageContentLeakPct: statsFromArray(
        pages.map((p) => p.otherPageContentLeakagePercent ?? 0),
      ),
      pages,
    };

    if (validJsSizes.length > 0) anyData = true;
  }

  if (!anyFile) {
    return {
      status: "missing",
      byLocale: {},
      jsGzipMin: null,
      jsGzipAvg: null,
      jsGzipMax: null,
      localeLeakAvgPct: null,
      pageLeakAvgPct: null,
      otherPageContentLeakAvgPct: null,
    };
  }

  if (anyError && Object.keys(byLocale).length === 0) {
    return {
      status: "error",
      byLocale: {},
      jsGzipMin: null,
      jsGzipAvg: null,
      jsGzipMax: null,
      localeLeakAvgPct: null,
      pageLeakAvgPct: null,
      otherPageContentLeakAvgPct: null,
    };
  }

  const allJsSizes: number[] = [];
  const allLocaleLeak: number[] = [];
  const allPageLeak: number[] = [];
  const allOtherPageLeak: number[] = [];

  for (const localeData of Object.values(byLocale)) {
    if (localeData.jsGzip) {
      allJsSizes.push(
        ...localeData.pages.map((p) => p.jsGzipSize).filter((v) => v > 0),
      );
    }
    for (const p of localeData.pages) {
      if (p.localeLeakagePercent != null) {
        allLocaleLeak.push(p.localeLeakagePercent);
      }
      if (p.pageLeakagePercent != null) {
        allPageLeak.push(p.pageLeakagePercent);
      }
    }
    allOtherPageLeak.push(
      ...localeData.pages.map((p) => p.otherPageContentLeakagePercent ?? 0),
    );
  }

  const status: DataStatus = !anyData ? "invalid" : anyError ? "error" : "ok";

  return {
    status,
    byLocale,
    jsGzipMin: allJsSizes.length > 0 ? minOf(allJsSizes) : null,
    jsGzipAvg: allJsSizes.length > 0 ? avgOf(allJsSizes) : null,
    jsGzipMax: allJsSizes.length > 0 ? maxOf(allJsSizes) : null,
    localeLeakAvgPct: allLocaleLeak.length > 0 ? avgOf(allLocaleLeak) : null,
    pageLeakAvgPct: allPageLeak.length > 0 ? avgOf(allPageLeak) : null,
    otherPageContentLeakAvgPct:
      allOtherPageLeak.length > 0 ? avgOf(allOtherPageLeak) : null,
  };
}

/** Drop only locale/page leak fields where the probe is not meaningful; keep other page-content leak metrics. */
function excludeUnreliableLeakMetrics(
  library: string,
  pb: PageBundleData,
): PageBundleData {
  if (!LIBS_WITHOUT_RELIABLE_LEAK_METRICS.has(library)) return pb;
  if (pb.status === "missing") return pb;

  const byLocale: Record<string, PageBundleLocaleData> = {};
  for (const [locale, locData] of Object.entries(pb.byLocale)) {
    byLocale[locale] = {
      ...locData,
      localeLeakPct: null,
      pageLeakPct: null,
      pages: locData.pages.map((p) => ({
        ...p,
        localeLeakagePercent: null,
        pageLeakagePercent: null,
      })),
    };
  }

  return {
    ...pb,
    leakMetricsExcluded: true,
    byLocale,
    localeLeakAvgPct: null,
    pageLeakAvgPct: null,
  };
}

/** Null out component size metrics for libs whose component measurements are not meaningful. */
function excludeUnreliableComponentMetrics(
  library: string,
  co: ComponentsData,
): ComponentsData {
  if (!LIBS_WITHOUT_RELIABLE_LEAK_METRICS.has(library)) return co;
  if (co.status === "missing") return co;
  return {
    ...co,
    gzipMin: null,
    gzipAvg: null,
    gzipMax: null,
  };
}

/** Omit lib-size row only; does not affect page bundle or other sections. */
function excludeUnreliableLibSize(
  library: string,
  ls: LibSizeData,
): LibSizeData {
  if (!LIBS_WITHOUT_RELIABLE_LIB_SIZE.has(library)) return ls;
  if (ls.status === "missing") return ls;
  return {
    status: "missing",
    gzip: null,
    minified: null,
    unminified: null,
  };
}

/** Drop only locale-leak fields; keep page leak, other page content leak, and JS bundle stats. */
function excludeUnreliableLocaleLeakMetrics(
  library: string,
  pb: PageBundleData,
): PageBundleData {
  if (!LIBS_WITHOUT_RELIABLE_LOCALE_LEAK.has(library)) return pb;
  if (pb.status === "missing") return pb;

  const byLocale: Record<string, PageBundleLocaleData> = {};
  for (const [locale, locData] of Object.entries(pb.byLocale)) {
    byLocale[locale] = {
      ...locData,
      localeLeakPct: null,
      pages: locData.pages.map((p) => ({
        ...p,
        localeLeakagePercent: null,
      })),
    };
  }

  const allLocaleLeak: number[] = [];
  for (const localeData of Object.values(byLocale)) {
    for (const p of localeData.pages) {
      if (p.localeLeakagePercent != null) {
        allLocaleLeak.push(p.localeLeakagePercent);
      }
    }
  }

  return {
    ...pb,
    localeLeakMetricsExcluded: true,
    byLocale,
    localeLeakAvgPct:
      allLocaleLeak.length > 0 ? avgOf(allLocaleLeak) : null,
  };
}

function collectComponents(appResultDir: string): ComponentsData {
  const filePath = join(appResultDir, "components-size.json");

  if (!fileExists(filePath)) {
    return {
      status: "missing",
      gzipMin: null,
      gzipAvg: null,
      gzipMax: null,
      count: 0,
      items: [],
    };
  }

  const data = readJson<RawComponentsFile>(filePath);
  if (!data || !Array.isArray(data.components)) {
    return {
      status: "error",
      gzipMin: null,
      gzipAvg: null,
      gzipMax: null,
      count: 0,
      items: [],
    };
  }

  const seen = new Set<string>();
  const unique = data.components.filter((c) => {
    if (seen.has(c.name)) return false;
    seen.add(c.name);
    return true;
  });

  const items: ComponentItem[] = unique.map((c) => ({
    name: c.name,
    category: c.category,
    minifiedGzip: c.minifiedGzipBytes ?? 0,
    minified: c.minifiedBytes ?? 0,
    unminified: c.unminifiedBytes ?? 0,
    unminifiedGzip: c.unminifiedGzipBytes ?? 0,
  }));

  const gzipSizes = items.map((i) => i.minifiedGzip).filter((v) => v > 0);

  if (gzipSizes.length === 0) {
    return {
      status: "invalid",
      gzipMin: null,
      gzipAvg: null,
      gzipMax: null,
      count: items.length,
      items,
    };
  }

  return {
    status: "ok",
    gzipMin: minOf(gzipSizes),
    gzipAvg: avgOf(gzipSizes),
    gzipMax: maxOf(gzipSizes),
    count: items.length,
    items,
  };
}

function collectReactivity(
  appResultDir: string,
  locales = ["en", "fr"],
): ReactivityData {
  const byLocale: Record<string, ReactivityLocaleData> = {};
  let anyFile = false;
  let anyError = false;
  let anyData = false;

  for (const locale of locales) {
    const filePath = join(appResultDir, `reactivity-${locale}.json`);
    if (!fileExists(filePath)) continue;

    anyFile = true;
    const data = readJson<RawReactivityFile>(filePath);
    if (!data?.e2e || !data.reactProfiler) {
      anyError = true;
      continue;
    }

    const e2e = rawStatsToMetric(data.e2e);
    const profiler = rawStatsToMetric(data.reactProfiler);

    byLocale[locale] = { e2e, profiler };

    if (e2e.avg > 0 || profiler.avg > 0) anyData = true;
  }

  if (!anyFile) {
    return {
      status: "missing",
      byLocale: {},
      e2eAvgMs: null,
      profilerAvgMs: null,
    };
  }

  if (anyError && Object.keys(byLocale).length === 0) {
    return {
      status: "error",
      byLocale: {},
      e2eAvgMs: null,
      profilerAvgMs: null,
    };
  }

  const e2eValues = Object.values(byLocale)
    .map((d) => d.e2e?.avg ?? 0)
    .filter((v) => v > 0);
  const profilerValues = Object.values(byLocale)
    .map((d) => d.profiler?.avg ?? 0)
    .filter((v) => v > 0);

  const status: DataStatus = !anyData ? "invalid" : anyError ? "error" : "ok";

  return {
    status,
    byLocale,
    e2eAvgMs: e2eValues.length > 0 ? avgOf(e2eValues) : null,
    profilerAvgMs: profilerValues.length > 0 ? avgOf(profilerValues) : null,
  };
}

function collectRendering(
  appResultDir: string,
  locales = ["en", "fr"],
): RenderingData {
  const byLocale: Record<string, RenderingLocaleData> = {};
  let anyFile = false;
  let anyError = false;
  let anyData = false;

  for (const locale of locales) {
    const filePath = join(appResultDir, `rendering-${locale}.json`);
    if (!fileExists(filePath)) continue;

    anyFile = true;
    const data = readJson<RawRenderingFile>(filePath);
    if (!data?.e2ePageLoad) {
      anyError = true;
      continue;
    }

    const e2ePageLoad = rawStatsToMetric(data.e2ePageLoad);
    const hydration = data.hydration ? rawStatsToMetric(data.hydration) : null;
    const reactMount = data.reactMount
      ? rawStatsToMetric(data.reactMount)
      : null;

    const hydrationInstrumented = (hydration?.avg ?? 0) > 0;
    const reactMountInstrumented = (reactMount?.avg ?? 0) > 0;

    byLocale[locale] = {
      e2ePageLoad,
      hydration,
      reactMount,
      hydrationInstrumented,
      reactMountInstrumented,
    };

    if (e2ePageLoad.avg > 0) anyData = true;
  }

  if (!anyFile) {
    return {
      status: "missing",
      byLocale: {},
      e2ePageLoadAvgMs: null,
      hydrationAvgMs: null,
      reactMountAvgMs: null,
    };
  }

  if (anyError && Object.keys(byLocale).length === 0) {
    return {
      status: "error",
      byLocale: {},
      e2ePageLoadAvgMs: null,
      hydrationAvgMs: null,
      reactMountAvgMs: null,
    };
  }

  const e2eValues = Object.values(byLocale)
    .map((d) => d.e2ePageLoad?.avg ?? 0)
    .filter((v) => v > 0);
  const hydrationValues = Object.values(byLocale)
    .map((d) => d.hydration?.avg ?? 0)
    .filter((v) => v > 0);
  const mountValues = Object.values(byLocale)
    .map((d) => d.reactMount?.avg ?? 0)
    .filter((v) => v > 0);

  const status: DataStatus = !anyData ? "invalid" : anyError ? "error" : "ok";

  return {
    status,
    byLocale,
    e2ePageLoadAvgMs: e2eValues.length > 0 ? avgOf(e2eValues) : null,
    hydrationAvgMs: hydrationValues.length > 0 ? avgOf(hydrationValues) : null,
    reactMountAvgMs: mountValues.length > 0 ? avgOf(mountValues) : null,
  };
}

function deriveOverallStatus(
  sections: DataStatus[],
): "ok" | "partial" | "missing" | "error" {
  if (sections.every((s) => s === "missing")) return "missing";
  if (sections.some((s) => s === "error")) return "error";
  if (sections.some((s) => s === "missing" || s === "invalid"))
    return "partial";
  return "ok";
}

// ---------------------------------------------------------------------------
// Main data collection
// ---------------------------------------------------------------------------

function buildAppDirectoryIndex(): Map<
  string,
  { dirs: string[]; canonicalCategoryDir: string }
> {
  const index = new Map<
    string,
    { dirs: Set<string>; canonicalCategoryDir: string }
  >();

  let appDirs: string[];
  try {
    appDirs = readdirSync(RESULTS_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    console.error(`Results directory not found: ${RESULTS_DIR}`);
    console.error("Run the benchmarks first: bun run build && bun run test");
    process.exit(1);
  }

  for (const appDir of appDirs) {
    const appResultDir = join(RESULTS_DIR, appDir);
    const hasContent = [
      "empty-component-size.json",
      "components-size.json",
      "pages-bundle-en.json",
      "pages-bundle-fr.json",
      "reactivity-en.json",
      "reactivity-fr.json",
      "rendering-en.json",
      "rendering-fr.json",
    ].some((f) => fileExists(join(appResultDir, f)));

    if (!hasContent) continue;

    const { testCategory } = parseCategory(appDir);

    index.set(appDir, {
      dirs: new Set([appResultDir]),
      canonicalCategoryDir: appDir, // In flat structure, the appDir itself is the category indicator
    });
  }

  return new Map(
    [...index.entries()].map(([k, v]) => [
      k,
      { dirs: [...v.dirs], canonicalCategoryDir: v.canonicalCategoryDir },
    ]),
  );
}

function mergeFromDirs<T>(
  dirs: string[],
  collect: (dir: string) => T,
  isPresent: (data: T) => boolean,
): T {
  for (const dir of dirs) {
    const data = collect(dir);
    if (isPresent(data)) return data;
  }
  return collect(dirs[0]);
}

function collectAppSummary(
  appName: string,
  dirs: string[],
  canonicalCategoryDir: string,
): AppSummary {
  const { framework, testCategory } = parseCategory(appName);
  const library = deriveLibraryName(appName);

  const libSize = excludeUnreliableLibSize(
    library,
    mergeFromDirs(
      dirs,
      (d) => collectLibSize(d),
      (s) => s.status !== "missing",
    ),
  );
  const pageBundle = excludeUnreliableLocaleLeakMetrics(
    library,
    excludeUnreliableLeakMetrics(
      library,
      mergeFromDirs(
        dirs,
        (d) => collectPageBundle(d),
        (s) => s.status !== "missing",
      ),
    ),
  );
  const components = excludeUnreliableComponentMetrics(
    library,
    mergeFromDirs(
      dirs,
      (d) => collectComponents(d),
      (s) => s.status !== "missing",
    ),
  );
  const reactivity = mergeFromDirs(
    dirs,
    (d) => collectReactivity(d),
    (s) => s.status !== "missing",
  );
  const rendering = mergeFromDirs(
    dirs,
    (d) => collectRendering(d),
    (s) => s.status !== "missing",
  );

  const overallStatus = deriveOverallStatus([
    libSize.status,
    pageBundle.status,
    components.status,
    reactivity.status,
    rendering.status,
  ]);

  const version = findLibraryVersion(library, appName);

  return {
    category: canonicalCategoryDir,
    framework,
    testCategory,
    appName,
    library,
    version,
    overallStatus,
    libSize,
    pageBundle,
    components,
    reactivity,
    rendering,
  };
}

function collectAllSummaries(): AppSummary[] {
  const appIndex = buildAppDirectoryIndex();
  const results: AppSummary[] = [];

  for (const [appName, { dirs, canonicalCategoryDir }] of appIndex) {
    const summary = collectAppSummary(appName, dirs, canonicalCategoryDir);
    results.push(summary);
  }

  return results;
}

// ---------------------------------------------------------------------------
// Filtering
// ---------------------------------------------------------------------------

function applyFilters(summaries: AppSummary[]): AppSummary[] {
  return summaries.filter((s) => {
    if (filterFramework && !s.framework.toLowerCase().includes(filterFramework))
      return false;
    if (filterCategory && s.testCategory !== filterCategory) return false;
    if (filterLib && !s.library.toLowerCase().includes(filterLib)) return false;
    return true;
  });
}

// ---------------------------------------------------------------------------
// Build framework summary (organized by library)
// ---------------------------------------------------------------------------

const FRAMEWORK_LABELS: Record<string, string> = {
  nextjs: "Next.js",
  "tanstack-start-react": "TanStack Start (React)",
  vite: "Vite",
  "vite-react": "Vite + React",
};

/** Filename segment for --out / --md (matches result folder naming). */
function frameworkFileSlug(fw: string): string {
  if (fw === "nextjs") return "nextjs";
  if (fw.startsWith("tanstack")) return "tanstack";
  if (fw === "vite-react") return "vite_react";
  return "unknown";
}

const CATEGORY_ORDER = [
  "static",
  "dynamic",
  "scoped-static",
  "scoped-dynamic",
] as const;

type TestCategory = (typeof CATEGORY_ORDER)[number];

function buildFrameworkSummary(
  framework: string,
  apps: AppSummary[],
  generatedAt: string,
  targetCategory?: TestCategory,
): FrameworkSummary {
  const libMap = new Map<string, AppSummary[]>();
  for (const app of apps) {
    if (!libMap.has(app.library)) libMap.set(app.library, []);
    libMap.get(app.library)!.push(app);
  }

  const libs: Record<string, LibrarySummary> = {};

  for (const [lib, libApps] of libMap) {
    const isBase = lib === "base" || lib.includes("base");

    if (isBase) {
      if (framework === "nextjs" && !lib.includes("nextjs") && lib !== "base")
        continue;
      if (
        framework.includes("tanstack") &&
        !lib.includes("tanstack") &&
        lib !== "base"
      )
        continue;
    }

    const version = libApps.find((a) => a.version != null)?.version ?? null;
    const libSizeApp =
      libApps.find((a) => a.libSize.status === "ok") ?? libApps[0];

    const getCategory = (cat: TestCategory): CategoryData | null => {
      const chain = FALLBACKS[cat] ?? [cat];

      for (const fallbackCat of chain) {
        const app = libApps.find((a) => a.testCategory === fallbackCat);
        if (!app) continue;

        return {
          appName: app.appName,
          bundleLink: getBundleLink(app.testCategory, app.appName),
          overallStatus: app.overallStatus,
          pageBundle: app.pageBundle,
          components: app.components,
          reactivity: app.reactivity,
          rendering: app.rendering,
        };
      }
      return null;
    };

    let staticCat = getCategory("static");
    let dynamicCat = getCategory("dynamic");
    let scopedStaticCat = getCategory("scoped-static");
    let scopedDynamicCat = getCategory("scoped-dynamic");

    if (targetCategory) {
      let catData: CategoryData | null = null;
      if (lib === "base" || lib.includes("base-app")) {
        catData = getCategory("base");
      } else {
        catData = getCategory(targetCategory);
        if (!catData && targetCategory === "scoped-dynamic") {
          catData = getCategory("scoped-static") || getCategory("static");
        } else if (!catData && targetCategory === "scoped-static") {
          catData = getCategory("static");
        } else if (!catData && targetCategory === "dynamic") {
          catData = getCategory("static");
        }
      }
      staticCat = targetCategory === "static" ? catData : null;
      dynamicCat = targetCategory === "dynamic" ? catData : null;
      scopedStaticCat = targetCategory === "scoped-static" ? catData : null;
      scopedDynamicCat = targetCategory === "scoped-dynamic" ? catData : null;
    } else {
      if (lib === "base" || lib.includes("base-app")) {
        const bd = getCategory("base");
        staticCat = bd;
        dynamicCat = bd;
        scopedStaticCat = bd;
        scopedDynamicCat = bd;
      }
    }

    libs[lib] = {
      global: {
        version,
        libSize: libSizeApp.libSize,
      },
      static: staticCat,
      dynamic: dynamicCat,
      "scoped-static": scopedStaticCat,
      "scoped-dynamic": scopedDynamicCat,
    };
  }

  const sortedLibs: Record<string, LibrarySummary> = {};
  for (const key of Object.keys(libs).sort()) {
    sortedLibs[key] = libs[key];
  }

  return {
    meta: {
      framework,
      frameworkLabel: FRAMEWORK_LABELS[framework] ?? framework,
      generatedAt,
      counts: {
        totalLibs: Object.keys(libs).length,
        totalApps: apps.length,
      },
    },
    libs: sortedLibs,
  };
}

// ---------------------------------------------------------------------------
// Markdown renderer
// ---------------------------------------------------------------------------

function mdCell(
  value: number | null,
  status: DataStatus,
  formatter: (v: number) => string,
): string {
  if (status === "missing") return "—";
  if (status === "error") return "⚠ ERROR";
  if (status === "invalid") return "⚠ INVALID";
  if (value == null) return "—";
  return formatter(value);
}

const CATEGORY_LABELS: Record<string, string> = {
  static: "Static",
  dynamic: "Dynamic",
  "scoped-static": "Scoped Static",
  "scoped-dynamic": "Scoped Dynamic",
};

function renderMarkdownByLib(summary: FrameworkSummary): string {
  const lines: string[] = [];
  const { frameworkLabel, generatedAt } = summary.meta;
  const date = generatedAt.split("T")[0];

  lines.push(`# ${frameworkLabel} — i18n Benchmark Results`);
  lines.push("");
  lines.push(`_Generated: ${date}_`);
  lines.push("");

  const activeFilters = [
    filterCategory && `category \`${filterCategory}\``,
    filterLib && `library \`${filterLib}\``,
  ].filter(Boolean);
  if (activeFilters.length > 0) {
    lines.push(`> Filtered by: ${activeFilters.join(", ")}`);
    lines.push("");
  }

  // Metric legend
  lines.push("## Metric Legend");
  lines.push("");
  lines.push("| Column | What it measures |");
  lines.push("| :--- | :--- |");
  lines.push(
    "| **Lib size (gz)** | Gzip bytes of the minified i18n library via an empty-component build |",
  );
  lines.push(
    "| **Page JS avg (gz)** | Average gzip JS bundle per page across all locales |",
  );
  lines.push(
    "| **Locale leak %** | % of JS bundle containing strings from locales the user is NOT using |",
  );
  lines.push(
    "| **Page leak %** | % of JS bundle containing strings from pages the user is NOT on |",
  );
  lines.push(
    "| **Comp avg (gz)** | Average gzip size of individual components compiled in isolation |",
  );
  lines.push(
    "| **E2E reactivity** | Wall-clock time from locale `<select>` change to `html[lang]` DOM update (ms) |",
  );
  lines.push(
    "| **React Profiler** | Sum of React `actualDuration` during locale-switch re-renders (ms) |",
  );
  lines.push(
    "| **Page load** | `PerformanceNavigationTiming.duration` — full page load time (ms) |",
  );
  lines.push(
    "| **Hydration avg** | Custom perf-mark delta for React hydration phase (ms); — = not instrumented |",
  );
  lines.push("");
  lines.push(
    "> **Status icons:** ✅ all data · 🔶 partial · ⬜ missing · ❌ error  ",
  );
  lines.push(
    "> **⚠ INVALID** = test ran but all measured values were zero (missing instrumentation or broken test)",
  );
  lines.push("");

  // TOC
  lines.push("## Libraries");
  lines.push("");
  for (const lib of Object.keys(summary.libs)) {
    const anchor = lib
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    lines.push(`- [${lib}](#${anchor})`);
  }
  lines.push("");

  // Per-library sections
  for (const [lib, libData] of Object.entries(summary.libs)) {
    lines.push(`## ${lib}`);
    lines.push("");

    // Global info
    const version = libData.global.version ?? "—";
    const libSize = libData.global.libSize;
    lines.push(`| Version | Lib size (gz) | Lib size (min) |`);
    lines.push(`| :--- | ---: | ---: |`);
    lines.push(
      `| ${version} | ${mdCell(libSize.gzip, libSize.status, kb)} | ${mdCell(libSize.minified, libSize.status, kb)} |`,
    );
    lines.push("");

    // Category overview table
    const hasSomeData = CATEGORY_ORDER.some((cat) => libData[cat] != null);
    if (hasSomeData) {
      lines.push(
        "| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |",
      );
      lines.push(
        "| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
      );

      for (const cat of CATEGORY_ORDER) {
        const catData = libData[cat];
        const label = CATEGORY_LABELS[cat] ?? cat;
        if (!catData) {
          lines.push(
            `| ${label} | ⬜ missing | — | — | — | — | — | — | — | — |`,
          );
          continue;
        }

        const overallIcon =
          catData.overallStatus === "ok"
            ? "✅"
            : catData.overallStatus === "partial"
              ? "🔶"
              : catData.overallStatus === "missing"
                ? "⬜"
                : "❌";

        const pb = catData.pageBundle;
        const co = catData.components;
        const re = catData.reactivity;
        const rd = catData.rendering;

        lines.push(
          `| ${label} | ${overallIcon} | ${mdCell(pb.jsGzipAvg, pb.status, kb)} | ${mdCell(pb.localeLeakAvgPct, pb.status, pct)} | ${mdCell(pb.otherPageContentLeakAvgPct, pb.status, pct)} | ${mdCell(co.gzipAvg, co.status, kb)} | ${mdCell(re.e2eAvgMs, re.status, ms)} | ${mdCell(re.profilerAvgMs, re.status, ms)} | ${mdCell(rd.e2ePageLoadAvgMs, rd.status, ms)} | ${mdCell(rd.hydrationAvgMs, rd.status, ms)} |`,
        );
      }
      lines.push("");
    }

    // Per-category details
    for (const cat of CATEGORY_ORDER) {
      const catData = libData[cat];
      if (!catData) continue;

      const label = CATEGORY_LABELS[cat] ?? cat;

      // Page bundle breakdown
      if (catData.pageBundle.status === "ok") {
        lines.push(`<details>`);
        lines.push(
          `<summary><strong>${label}</strong> — per-locale page bundle</summary>`,
        );
        lines.push("");
        for (const [locale, locData] of Object.entries(
          catData.pageBundle.byLocale,
        )) {
          lines.push(`**Locale: \`${locale}\`**`);
          lines.push("");
          lines.push("| Page | JS (gz) | Locale leak % | Page leak % |");
          lines.push("| :--- | ---: | ---: | ---: |");
          for (const p of locData.pages) {
            const jsGz = p.jsGzipSize > 0 ? kb(p.jsGzipSize) : "—";
            const localeLeakCell =
              p.localeLeakagePercent != null
                ? pct(p.localeLeakagePercent)
                : "—";
            const otherPageLeak =
              p.otherPageContentLeakagePercent ?? p.pageLeakagePercent;
            const pageLeakCell =
              otherPageLeak != null ? pct(otherPageLeak) : "—";
            lines.push(
              `| \`${p.path}\` | ${jsGz} | ${localeLeakCell} | ${pageLeakCell} |`,
            );
          }
          lines.push("");
        }
        lines.push(`**Bundle link:** [View bundle visualizer](${catData.bundleLink})`);
        lines.push("");
        lines.push("</details>");
        lines.push("");
      }

      // Reactivity breakdown
      if (catData.reactivity.status === "ok") {
        lines.push(`<details>`);
        lines.push(
          `<summary><strong>${label}</strong> — per-locale reactivity</summary>`,
        );
        lines.push("");
        lines.push("| Locale | E2E avg | E2E min | E2E max | Profiler avg |");
        lines.push("| :---: | ---: | ---: | ---: | ---: |");
        for (const [locale, d] of Object.entries(catData.reactivity.byLocale)) {
          lines.push(
            `| \`${locale}\` | ${d.e2e ? ms(d.e2e.avg) : "—"} | ${d.e2e ? ms(d.e2e.min) : "—"} | ${d.e2e ? ms(d.e2e.max) : "—"} | ${d.profiler ? ms(d.profiler.avg) : "—"} |`,
          );
        }
        lines.push("");
        lines.push("</details>");
        lines.push("");
      }

      // Rendering breakdown
      if (catData.rendering.status === "ok") {
        lines.push(`<details>`);
        lines.push(
          `<summary><strong>${label}</strong> — per-locale rendering</summary>`,
        );
        lines.push("");
        lines.push("| Locale | Page load | Hydration | React mount |");
        lines.push("| :---: | ---: | ---: | ---: |");
        for (const [locale, d] of Object.entries(catData.rendering.byLocale)) {
          const hydration =
            d.hydrationInstrumented && d.hydration ? ms(d.hydration.avg) : "—";
          const mount =
            d.reactMountInstrumented && d.reactMount
              ? ms(d.reactMount.avg)
              : "—";
          lines.push(
            `| \`${locale}\` | ${d.e2ePageLoad ? ms(d.e2ePageLoad.avg) : "—"} | ${hydration} | ${mount} |`,
          );
        }
        lines.push("");
        lines.push("</details>");
        lines.push("");
      }
    }

    lines.push("---");
    lines.push("");
  }

  // Coverage
  const allCatData = Object.values(summary.libs).flatMap((l) =>
    CATEGORY_ORDER.map((c) => l[c]).filter(Boolean),
  ) as CategoryData[];

  lines.push("## Coverage");
  lines.push("");
  lines.push("| Metric | Count |");
  lines.push("| :--- | :--- |");
  lines.push(`| Total libraries | ${Object.keys(summary.libs).length} |`);
  lines.push(`| Total app entries | ${summary.meta.counts.totalApps} |`);
  lines.push(
    `| With lib size data | ${Object.values(summary.libs).filter((l) => l.global.libSize.status === "ok").length} |`,
  );
  lines.push(
    `| With page bundle data | ${allCatData.filter((d) => d.pageBundle.status === "ok").length} |`,
  );
  lines.push(
    `| With component data | ${allCatData.filter((d) => d.components.status === "ok").length} |`,
  );
  lines.push(
    `| With reactivity data | ${allCatData.filter((d) => d.reactivity.status === "ok").length} |`,
  );
  lines.push(
    `| With rendering data | ${allCatData.filter((d) => d.rendering.status === "ok").length} |`,
  );
  lines.push("");

  return lines.join("\n");
}

function getBundleLink(cat: string, appName: string): string {
  return `https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/${appName}/bundle/rollup-visualizer.html`;
}

// ---------------------------------------------------------------------------
// Console table helpers
// ---------------------------------------------------------------------------

function padRight(str: string, width: number): string {
  return str.length >= width ? str : str + " ".repeat(width - str.length);
}

function renderTable(headers: string[], rows: string[][]): string {
  const colWidths = headers.map((h, i) =>
    Math.max(h.length, ...rows.map((r) => (r[i] ?? "").length)),
  );

  const divider = colWidths.map((w) => "─".repeat(w + 2)).join("┼");
  const headerLine = headers
    .map((h, i) => ` ${padRight(h, colWidths[i])} `)
    .join("│");
  const dataLines = rows.map((row) =>
    row.map((cell, i) => ` ${padRight(cell ?? "", colWidths[i])} `).join("│"),
  );

  return [
    `┌${colWidths.map((w) => "─".repeat(w + 2)).join("┬")}┐`,
    `│${headerLine}│`,
    `├${divider}┤`,
    ...dataLines.map((line) => `│${line}│`),
    `└${colWidths.map((w) => "─".repeat(w + 2)).join("┴")}┘`,
  ].join("\n");
}

function fmtMetric(
  value: number | null,
  status: DataStatus,
  formatter: (v: number) => string,
): string {
  if (status === "missing") return "—";
  if (status === "error") return "ERROR";
  if (status === "invalid") return "INVALID";
  if (value == null) return "—";
  return formatter(value);
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function main() {
  console.log("Collecting benchmark results...\n");

  const all = applyFilters(collectAllSummaries());

  if (all.length === 0) {
    console.log("No results found matching the given filters.");
    console.log(
      "Make sure benchmarks have been run: bun run build && bun run test",
    );
    process.exit(0);
  }

  const generatedAt = new Date().toISOString();

  // Group by framework
  const frameworkMap = new Map<string, AppSummary[]>();
  for (const app of all) {
    if (!frameworkMap.has(app.framework)) frameworkMap.set(app.framework, []);
    frameworkMap.get(app.framework)!.push(app);
  }

  const frameworkSummaries = new Map<string, FrameworkSummary>();
  for (const [fw, apps] of frameworkMap) {
    frameworkSummaries.set(fw, buildFrameworkSummary(fw, apps, generatedAt));
  }

  const splitSummaries = new Map<
    string,
    { fw: string; cat: TestCategory; summary: FrameworkSummary }
  >();
  for (const [fw, apps] of frameworkMap) {
    for (const cat of CATEGORY_ORDER) {
      splitSummaries.set(`${fw}-${cat}`, {
        fw,
        cat,
        summary: buildFrameworkSummary(fw, apps, generatedAt, cat),
      });
    }
  }

  // Write JSON files
  if (outBasePath) {
    for (const { fw, cat, summary } of splitSummaries.values()) {
      const slug = frameworkFileSlug(fw);
      const outPath = `${outBasePath}-${slug}-${cat}.json`;
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, JSON.stringify(summary, null, 2), "utf-8");
      console.error(`Wrote ${outPath}`);
    }
  }

  // Write Markdown: one file per framework (all categories in one doc)
  if (mdBasePath) {
    for (const [fw, summary] of frameworkSummaries) {
      const slug = frameworkFileSlug(fw);
      const mdPath = `${mdBasePath}-${slug}.md`;
      const md = renderMarkdownByLib(summary);
      mkdirSync(dirname(mdPath), { recursive: true });
      writeFileSync(mdPath, md, "utf-8");
      console.error(`Wrote ${mdPath}`);
    }
  }

  if (outputJson) {
    const out: Record<string, FrameworkSummary> = {};
    for (const [key, { summary }] of splitSummaries) {
      out[key] = summary;
    }
    console.log(JSON.stringify(out, null, 2));
    return;
  }

  // ── Console output ──────────────────────────────────────────────────────────
  console.log("═".repeat(100));
  console.log(" BENCHMARK BLOOM — SUMMARY (organized by library)");
  console.log(` Generated: ${generatedAt.split("T")[0]}`);
  if (filterFramework || filterCategory || filterLib) {
    const filters = [
      filterFramework && `framework=${filterFramework}`,
      filterCategory && `category=${filterCategory}`,
      filterLib && `lib=${filterLib}`,
    ]
      .filter(Boolean)
      .join(", ");
    console.log(` Filters: ${filters}`);
  }
  console.log("═".repeat(100));
  console.log();

  const TABLE_HEADERS = [
    "Category",
    "Status",
    "Page JS avg (gz)",
    "Locale leak %",
    "Other page content leak %",
    "Comp avg (gz)",
    "E2E reactivity",
    "React Profiler",
    "Page load",
    "Hydration",
  ];

  for (const [fw, summary] of frameworkSummaries) {
    console.log(
      `\n▶ Framework: ${FRAMEWORK_LABELS[fw] ?? fw}  (${summary.meta.counts.totalLibs} libs)`,
    );
    console.log("─".repeat(100));

    for (const [lib, libData] of Object.entries(summary.libs)) {
      const version = libData.global.version ?? "—";
      const libSz = fmtMetric(
        libData.global.libSize.gzip,
        libData.global.libSize.status,
        kb,
      );
      console.log(`\n  ■ ${lib}  v${version}  lib size: ${libSz}`);

      const rows: string[][] = [];
      for (const cat of CATEGORY_ORDER) {
        const catData = libData[cat];
        const label = CATEGORY_LABELS[cat] ?? cat;
        if (!catData) {
          rows.push([label, "MISSING", "—", "—", "—", "—", "—", "—", "—", "—"]);
          continue;
        }
        const {
          pageBundle: pb,
          components: co,
          reactivity: re,
          rendering: rd,
        } = catData;
        const overallSym =
          catData.overallStatus === "ok"
            ? "ok"
            : catData.overallStatus === "partial"
              ? "partial"
              : catData.overallStatus.toUpperCase();
        rows.push([
          label,
          overallSym,
          fmtMetric(pb.jsGzipAvg, pb.status, kb),
          fmtMetric(pb.localeLeakAvgPct, pb.status, pct),
          fmtMetric(pb.otherPageContentLeakAvgPct, pb.status, pct),
          fmtMetric(co.gzipAvg, co.status, kb),
          fmtMetric(re.e2eAvgMs, re.status, ms),
          fmtMetric(re.profilerAvgMs, re.status, ms),
          fmtMetric(rd.e2ePageLoadAvgMs, rd.status, ms),
          fmtMetric(rd.hydrationAvgMs, rd.status, ms),
        ]);
      }

      console.log(
        renderTable(TABLE_HEADERS, rows)
          .split("\n")
          .map((l) => `    ${l}`)
          .join("\n"),
      );

      // Collect the app names to display bundle links
      const appLinks = CATEGORY_ORDER.map((cat) => {
        const catData = libData[cat];
        if (!catData) return null;
        return `    🔗 ${CATEGORY_LABELS[cat] ?? cat} bundle: ${catData.bundleLink}`;
      }).filter(Boolean);

      if (appLinks.length > 0) {
        console.log(`\n${appLinks.join("\n")}`);
      }
    }

    console.log();
  }

  console.log("─".repeat(100));
  console.log(
    "Tip: --out <base> writes <base>-<fw>-<category>.json per slice. --md <base> writes one <base>-<fw>.md per framework.",
  );
}

main();
