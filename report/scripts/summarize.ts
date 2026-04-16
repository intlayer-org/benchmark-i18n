#!/usr/bin/env bun
/**
 * Benchmark Bloom — Result Summarizer
 *
 * Reads all benchmark result JSON files from apps-benchmark/results/
 * and prints a human-readable summary table.
 *
 * Usage:
 *   bun report/scripts/summarize.ts [options]
 *
 * Options:
 *   --framework <name>   Filter by framework (nextjs, tanstack)
 *   --category  <name>   Filter by test category (static, dynamic, scoped-static, scoped-dynamic)
 *   --lib       <name>   Filter by library name (partial match)
 *   --json               Output raw aggregated data as JSON
 *   --help               Show this help message
 */

import { readdirSync, readFileSync, existsSync } from "fs";
import { join, resolve } from "path";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const REPO_ROOT = resolve(import.meta.dir, "../..");
const RESULTS_DIR = join(REPO_ROOT, "apps-benchmark/results");
const APPS_DIR = join(REPO_ROOT, "apps-benchmark");

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
  --framework <name>   Filter by framework: "nextjs" or "tanstack"
  --category  <name>   Filter by test category: static | dynamic | scoped-static | scoped-dynamic
  --lib       <name>   Filter by library name (partial match, e.g. "intlayer")
  --json               Output raw aggregated data as JSON instead of tables
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

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------

interface PageResult {
  path: string;
  page: string;
  locale: string;
  jsGzipSize: number;
  localeLeakagePercent: number;
  pageLeakagePercent: number;
}

interface PagesBundleFile {
  app: string;
  locale: string;
  results: PageResult[];
}

interface ComponentEntry {
  name: string;
  category: string;
  minifiedGzipBytes: number;
}

interface ComponentsFile {
  packageName: string;
  components: ComponentEntry[];
  summary: {
    totalComponents: number;
    totalMinifiedBytes: number;
    totalGzipBytes: number;
  };
}

interface ReactivityFile {
  locale: string;
  e2e: { avg: number; min: number; max: number };
  reactProfiler: { avg: number; min: number; max: number };
}

interface AppSummary {
  category: string;        // result dir name (e.g. "nextjs-static")
  framework: string;       // "nextjs" | "tanstack-start-react"
  testCategory: string;    // "static" | "dynamic" | "scoped-static" | "scoped-dynamic"
  appName: string;         // package name (e.g. "nextjs-static-gt-next-app")
  library: string;         // human-friendly library name (e.g. "gt-next")
  version: string | null;  // library version from package.json, if found

  // Library overhead (empty-component-size.json)
  libSizeGzip: number | null;

  // Page sizes (pages-bundle-*.json)
  pageJsGzipMin: number | null;
  pageJsGzipAvg: number | null;
  pageJsGzipMax: number | null;

  // Content leakage
  localeLeakAvgPct: number | null;
  pageLeakAvgPct: number | null;

  // Component sizes (components-size.json)
  componentGzipMin: number | null;
  componentGzipAvg: number | null;
  componentGzipMax: number | null;

  // Reactivity (reactivity-*.json)
  e2eAvgMs: number | null;
  profilerAvgMs: number | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readJson<T>(path: string): T | null {
  try {
    return JSON.parse(readFileSync(path, "utf-8")) as T;
  } catch {
    return null;
  }
}

function avg(nums: number[]): number {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function min(nums: number[]): number {
  return Math.min(...nums);
}

function max(nums: number[]): number {
  return Math.max(...nums);
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

/**
 * Derive framework and test category from the app package name and/or results
 * directory name.
 *
 * The app package name is the canonical source of truth because the directory
 * layout may be inconsistent (e.g. all nextjs apps under "nextjs-static/").
 */
function parseCategory(
  categoryDir: string,
  appName: string
): { framework: string; testCategory: string } {
  // Prefer deriving from the app name since it always encodes the category
  const source = appName || categoryDir;

  let framework = "unknown";
  if (source.startsWith("nextjs") || categoryDir.startsWith("nextjs")) {
    framework = "nextjs";
  } else if (
    source.startsWith("tanstack") ||
    categoryDir.startsWith("tanstack") ||
    // TanStack app names use short prefixes like "static-intlayer-app"
    /^(static|dynamic|scoped)/.test(source)
  ) {
    framework = "tanstack-start-react";
  }

  let testCategory = "unknown";
  // Order matters: check more specific patterns first
  if (source.includes("scoped-dynamic")) {
    testCategory = "scoped-dynamic";
  } else if (source.includes("scoped-static")) {
    testCategory = "scoped-static";
  } else if (source.includes("dynamic")) {
    testCategory = "dynamic";
  } else if (source.includes("static")) {
    testCategory = "static";
  } else if (source.includes("base")) {
    testCategory = "base";
  }

  return { framework, testCategory };
}

/**
 * Derive a human-friendly library name from the app package name.
 * Strips the category prefix (e.g. "nextjs-static-", "static-") and "-app" suffix.
 */
function deriveLibraryName(appName: string, categoryDir: string): string {
  let name = appName;

  // Try to strip the category dir prefix first (nextjs apps embed the full category)
  if (name.startsWith(categoryDir + "-")) {
    name = name.slice(categoryDir.length + 1);
  }

  // Also strip known short prefixes for TanStack apps
  const shortPrefixes = [
    "static-",
    "dynamic-",
    "scoped-static-",
    "scoped-dynamic-",
  ];
  for (const prefix of shortPrefixes) {
    if (name.startsWith(prefix)) {
      name = name.slice(prefix.length);
      break;
    }
  }

  // Strip trailing "-app"
  if (name.endsWith("-app")) {
    name = name.slice(0, -4);
  }

  return name || appName;
}

/** Known i18n package names per library slug */
const LIBRARY_PACKAGES: Record<string, string[]> = {
  "gt-next": ["gt-next"],
  "gt-react": ["gt-react"],
  "next-intl": ["next-intl"],
  "next-i18next": ["next-i18next"],
  "next-translate": ["next-translate"],
  "next-intlayer": ["next-intlayer"],
  "intlayer": ["intlayer"],
  "lingui": ["@lingui/react"],
  "paraglide-next": ["@inlang/paraglide-next"],
  "paraglide": ["@inlang/paraglide-js"],
  "tolgee": ["@tolgee/react"],
  "react-i18next": ["react-i18next"],
  "use-intl": ["use-intl"],
  "react-intl": ["react-intl"],
  "wuchale": ["wuchale"],
  "lingo.dev": ["@lingo.dev/i18next", "lingodotdev-i18next", "lingo.dev"],
};

/** Look up the library version from a source app's package.json */
function findLibraryVersion(
  librarySlug: string,
  appPackageName: string
): string | null {
  // Search for the source app directory whose package.json has matching "name"
  const categories = readdirSync(APPS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("results"))
    .map((d) => d.name);

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
      const pkg = readJson<{ name?: string; dependencies?: Record<string, string>; devDependencies?: Record<string, string> }>(pkgPath);
      if (!pkg || pkg.name !== appPackageName) continue;

      const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
      const candidates = LIBRARY_PACKAGES[librarySlug] ?? [];

      for (const candidate of candidates) {
        if (allDeps[candidate]) {
          return allDeps[candidate].replace(/^[\^~>=<]/, "");
        }
      }
      // Return null if found the app but not the specific package
      return null;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Main data collection
// ---------------------------------------------------------------------------

function collectAppSummary(
  categoryDir: string,
  appName: string
): AppSummary | null {
  const appResultDir = join(RESULTS_DIR, categoryDir, appName);
  const { framework, testCategory } = parseCategory(categoryDir, appName);
  const library = deriveLibraryName(appName, categoryDir);

  const summary: AppSummary = {
    category: categoryDir,
    framework,
    testCategory,
    appName,
    library,
    version: null,
    libSizeGzip: null,
    pageJsGzipMin: null,
    pageJsGzipAvg: null,
    pageJsGzipMax: null,
    localeLeakAvgPct: null,
    pageLeakAvgPct: null,
    componentGzipMin: null,
    componentGzipAvg: null,
    componentGzipMax: null,
    e2eAvgMs: null,
    profilerAvgMs: null,
  };

  // 1. Library size from empty-component-size.json
  const emptyComp = readJson<ComponentsFile>(
    join(appResultDir, "empty-component-size.json")
  );
  if (emptyComp?.components[0]?.minifiedGzipBytes) {
    summary.libSizeGzip = emptyComp.components[0].minifiedGzipBytes;
  }

  // 2. Page sizes + leakage from pages-bundle-*.json
  const pageResults: PageResult[] = [];
  for (const locale of ["en", "fr"]) {
    const bundleFile = readJson<PagesBundleFile>(
      join(appResultDir, `pages-bundle-${locale}.json`)
    );
    if (bundleFile?.results) {
      pageResults.push(...bundleFile.results);
    }
  }

  if (pageResults.length > 0) {
    const jsSizes = pageResults.map((r) => r.jsGzipSize).filter((v) => v > 0);
    const localeLeak = pageResults.map((r) => r.localeLeakagePercent ?? 0);
    const pageLeak = pageResults.map((r) => r.pageLeakagePercent ?? 0);

    if (jsSizes.length > 0) {
      summary.pageJsGzipMin = min(jsSizes);
      summary.pageJsGzipAvg = avg(jsSizes);
      summary.pageJsGzipMax = max(jsSizes);
    }
    summary.localeLeakAvgPct = avg(localeLeak);
    summary.pageLeakAvgPct = avg(pageLeak);
  }

  // 3. Component sizes from components-size.json
  const components = readJson<ComponentsFile>(
    join(appResultDir, "components-size.json")
  );
  if (components?.components && components.components.length > 0) {
    // Deduplicate by component name (same component may appear in multiple categories)
    const seen = new Set<string>();
    const unique = components.components.filter((c) => {
      if (seen.has(c.name)) return false;
      seen.add(c.name);
      return true;
    });

    const sizes = unique
      .map((c) => c.minifiedGzipBytes)
      .filter((v) => v != null && v > 0);

    if (sizes.length > 0) {
      summary.componentGzipMin = min(sizes);
      summary.componentGzipAvg = avg(sizes);
      summary.componentGzipMax = max(sizes);
    }
  }

  // 4. Reactivity from reactivity-*.json
  const reactivityValues: { e2e: number; profiler: number }[] = [];
  for (const locale of ["en", "fr"]) {
    const r = readJson<ReactivityFile>(
      join(appResultDir, `reactivity-${locale}.json`)
    );
    if (r) {
      reactivityValues.push({
        e2e: r.e2e?.avg ?? 0,
        profiler: r.reactProfiler?.avg ?? 0,
      });
    }
  }
  if (reactivityValues.length > 0) {
    summary.e2eAvgMs = avg(reactivityValues.map((v) => v.e2e));
    summary.profilerAvgMs = avg(reactivityValues.map((v) => v.profiler));
  }

  // 5. Library version
  summary.version = findLibraryVersion(library, appName);

  return summary;
}

function collectAllSummaries(): AppSummary[] {
  const results: AppSummary[] = [];

  let categoryDirs: string[];
  try {
    categoryDirs = readdirSync(RESULTS_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    console.error(`Results directory not found: ${RESULTS_DIR}`);
    console.error("Run the benchmarks first: bun run build && bun run test");
    process.exit(1);
  }

  for (const categoryDir of categoryDirs) {
    const catPath = join(RESULTS_DIR, categoryDir);
    let appDirs: string[];
    try {
      appDirs = readdirSync(catPath, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
    } catch {
      continue;
    }

    for (const appDir of appDirs) {
      const summary = collectAppSummary(categoryDir, appDir);
      if (summary) results.push(summary);
    }
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
// Table rendering
// ---------------------------------------------------------------------------

function padRight(str: string, width: number): string {
  return str.length >= width ? str : str + " ".repeat(width - str.length);
}

function padLeft(str: string, width: number): string {
  return str.length >= width ? str : " ".repeat(width - str.length) + str;
}

function renderTable(headers: string[], rows: string[][]): string {
  const colWidths = headers.map((h, i) =>
    Math.max(h.length, ...rows.map((r) => (r[i] ?? "").length))
  );

  const divider = colWidths.map((w) => "─".repeat(w + 2)).join("┼");
  const headerLine = headers
    .map((h, i) => ` ${padRight(h, colWidths[i])} `)
    .join("│");
  const dataLines = rows.map((row) =>
    row.map((cell, i) => ` ${padRight(cell ?? "", colWidths[i])} `).join("│")
  );

  return [
    `┌${colWidths.map((w) => "─".repeat(w + 2)).join("┬")}┐`,
    `│${headerLine}│`,
    `├${divider}┤`,
    ...dataLines.map((line) => `│${line}│`),
    `└${colWidths.map((w) => "─".repeat(w + 2)).join("┴")}┘`,
  ].join("\n");
}

function formatSummaryRow(s: AppSummary): string[] {
  return [
    s.library,
    s.version ?? "—",
    s.libSizeGzip != null ? kb(s.libSizeGzip) : "—",
    s.pageJsGzipAvg != null ? kb(s.pageJsGzipAvg) : "—",
    s.pageJsGzipMin != null && s.pageJsGzipMax != null
      ? `${kb(s.pageJsGzipMin)} – ${kb(s.pageJsGzipMax)}`
      : "—",
    s.localeLeakAvgPct != null ? pct(s.localeLeakAvgPct) : "—",
    s.pageLeakAvgPct != null ? pct(s.pageLeakAvgPct) : "—",
    s.componentGzipAvg != null ? kb(s.componentGzipAvg) : "—",
    s.componentGzipMin != null && s.componentGzipMax != null
      ? `${kb(s.componentGzipMin)} – ${kb(s.componentGzipMax)}`
      : "—",
    s.e2eAvgMs != null ? ms(s.e2eAvgMs) : "—",
    s.profilerAvgMs != null ? ms(s.profilerAvgMs) : "—",
  ];
}

const TABLE_HEADERS = [
  "Library",
  "Version",
  "Lib size (gz)",
  "Page JS avg (gz)",
  "Page JS min–max (gz)",
  "Locale leak %",
  "Page leak %",
  "Comp avg (gz)",
  "Comp min–max (gz)",
  "E2E reactivity",
  "React Profiler",
];

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

const FRAMEWORK_LABELS: Record<string, string> = {
  "nextjs": "Next.js",
  "tanstack-start-react": "TanStack Start (React)",
};

const CATEGORY_LABELS: Record<string, string> = {
  "base": "Base (no i18n)",
  "static": "Static — all-in-one bundle, no lazy loading",
  "dynamic": "Dynamic — lazy-loaded, no namespacing",
  "scoped-static": "Scoped Static — namespaced, no lazy loading",
  "scoped-dynamic": "Scoped Dynamic — namespaced + lazy loading (gold standard)",
};

function main() {
  console.log("Collecting benchmark results...\n");

  const all = applyFilters(collectAllSummaries());

  if (all.length === 0) {
    console.log("No results found matching the given filters.");
    console.log("Make sure benchmarks have been run: bun run build && bun run test");
    process.exit(0);
  }

  // Deduplicate: if the same app appears in multiple result dirs (old vs new
  // layout), keep only the one from the most specifically named directory.
  const seen = new Map<string, AppSummary>();
  for (const s of all) {
    const existing = seen.get(s.appName);
    if (!existing) {
      seen.set(s.appName, s);
    } else {
      // Prefer the entry whose categoryDir matches the testCategory derived
      // from the app name (i.e. the "correct" location)
      const currentMatches = s.category.includes(s.testCategory.replace("-", "-"));
      const existingMatches = existing.category.includes(existing.testCategory);
      if (currentMatches && !existingMatches) {
        seen.set(s.appName, s);
      }
    }
  }
  const deduped = [...seen.values()];

  if (outputJson) {
    console.log(JSON.stringify(deduped, null, 2));
    return;
  }

  console.log("═".repeat(80));
  console.log(" BENCHMARK BLOOM — SUMMARY");
  console.log(` Generated: ${new Date().toISOString().split("T")[0]}`);
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
  console.log("═".repeat(80));
  console.log();

  // Group by framework, then test category
  const groups = new Map<string, Map<string, AppSummary[]>>();

  for (const s of deduped) {
    if (!groups.has(s.framework)) groups.set(s.framework, new Map());
    const fwGroup = groups.get(s.framework)!;
    if (!fwGroup.has(s.testCategory)) fwGroup.set(s.testCategory, []);
    fwGroup.get(s.testCategory)!.push(s);
  }

  const categoryOrder = ["base", "static", "dynamic", "scoped-static", "scoped-dynamic"];

  for (const [framework, categoryMap] of groups) {
    const fwLabel = FRAMEWORK_LABELS[framework] ?? framework;
    console.log(`\n${"▶".padEnd(2)} Framework: ${fwLabel}`);
    console.log("─".repeat(80));

    for (const cat of categoryOrder) {
      if (!categoryMap.has(cat)) continue;
      const apps = categoryMap.get(cat)!;

      console.log(`\n  Category: ${CATEGORY_LABELS[cat] ?? cat}`);
      console.log();

      const rows = apps
        .sort((a, b) => a.library.localeCompare(b.library))
        .map(formatSummaryRow);

      console.log(
        renderTable(TABLE_HEADERS, rows)
          .split("\n")
          .map((l) => "  " + l)
          .join("\n")
      );

      // Print leakage legend if any leakage detected
      const hasLeak = apps.some(
        (s) =>
          (s.localeLeakAvgPct ?? 0) > 0 || (s.pageLeakAvgPct ?? 0) > 0
      );
      if (hasLeak) {
        console.log(
          "\n  Note: Locale leak % = strings from unused locales in bundle. Page leak % = strings from other pages in bundle."
        );
      }
    }

    console.log();
  }

  // Print overall counts
  console.log("─".repeat(80));
  console.log(`Total apps summarized: ${deduped.length}`);
  const withPages = deduped.filter((s) => s.pageJsGzipAvg != null).length;
  const withComponents = deduped.filter((s) => s.componentGzipAvg != null).length;
  const withReactivity = deduped.filter((s) => s.e2eAvgMs != null).length;
  const withLibSize = deduped.filter((s) => s.libSizeGzip != null).length;
  console.log(`  with page data:        ${withPages}`);
  console.log(`  with component data:   ${withComponents}`);
  console.log(`  with reactivity data:  ${withReactivity}`);
  console.log(`  with lib size data:    ${withLibSize}`);
  console.log();
  console.log(
    "Tip: Use --json to output raw data. Use --framework, --category, --lib to filter."
  );
}

main();
