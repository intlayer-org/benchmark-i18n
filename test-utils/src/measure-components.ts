/**
 * measure-components.ts — Per-component bundle size measurement via Vite
 *
 * WHAT THIS MEASURES
 * ──────────────────
 * Each React component (.tsx) in the app is compiled individually by Vite in
 * library mode. We record two size metrics:
 *
 * Minified  — byte length of the compiled, minified ES module output.
 * This is what gets shipped to users after the build step.
 *
 * Gzipped   — byte length of the minified output after gzip compression.
 * This approximates the over-the-wire transfer size, which is
 * the number that actually matters for real-world performance.
 *
 * WHY BUILD EACH COMPONENT SEPARATELY
 * ─────────────────────────────────────
 * Building the whole app gives one large bundle where it is impossible to
 * attribute bytes to individual components or to the i18n library overhead.
 * Building each component in isolation lets us answer: "how much does this
 * particular component grow when we add i18n library X?"
 *
 * WHY WE DO NOT USE THE APP'S VITE CONFIG
 * ─────────────────────────────────────────
 * The full app config includes `tanstackStart()`, which overrides Vite's
 * library mode and triggers a full app build for every component entry. This
 * causes every component to report the same full-bundle size, making the
 * measurement useless. Using `configFile: false` with esbuild's built-in JSX
 * transform correctly isolates each component's own code and i18n runtime.
 *
 * WHY EXTERNALIZE REACT AND ROUTER
 * ──────────────────────────────────
 * React, ReactDOM and the router are always bundled once at the app level and
 * shared across all components via the host. Externalising them from each
 * component build ensures we measure only the component's own code plus any
 * i18n runtime it pulls in — not React itself, which is identical for every app.
 *
 * Usage in each app's scripts/measure-components.ts:
 * import { measureComponents } from "test-utils/measure-components";
 * import pkg from "../package.json" with { type: "json" };
 * measureComponents({ appName: pkg.name });
 */

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { build, loadConfigFromFile, type PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import type { RolldownOutput } from "rolldown";
import Bun from "bun";

// ─── Types ───────────────────────────────────────────────────────────────────

/** Configuration accepted by {@link measureComponents}. */
export interface MeasureConfig {
  /** Package name of the app under test — used to name the output JSON file. */
  appName: string;
  /**
   * Directories to scan for `.tsx` component files.
   * Paths are resolved relative to `process.cwd()` (the app root).
   * Default: ["./src/components", "./src/components/pages"]
   */
  componentDirectories?: string[];
  /**
   * Additional package names to mark as external during each component build,
   * on top of the base set (React, ReactDOM, TanStack Router, lucide-react).
   * Use this when you want to exclude an i18n library from the measurement to
   * isolate pure component logic.
   */
  additionalExternalPackages?: (string | RegExp)[];
  /**
   * Subfolder name under `<repo-root>/results/` that groups results by
   * benchmark category, e.g. `"tanstack-start-react-static"`.
   * Produces: `<repo-root>/results/<benchmarkCategory>/<appName>/`
   */
  benchmarkCategory: string;
  /**
   * Optional function to wrap the component code on the fly.
   * Returns the source code for a virtual module that imports the component.
   */
  wrapperTemplate?: (componentPath: string) => string;
  /**
   * Additional Vite plugins or Babel plugins to apply during the build.
   * Babel plugins should be passed as [plugin, options].
   */
  additionalPlugins?: any[];
}

/** Size measurements for a single compiled component. */
interface ComponentSizeStats {
  name: string;
  category: string;
  unminifiedBytes: number;
  unminifiedGzipBytes: number;
  minifiedBytes: number;
  minifiedGzipBytes: number;
}

// ─── Defaults ────────────────────────────────────────────────────────────────

/** Directories scanned when none are provided in the config. */
const DEFAULT_COMPONENT_DIRECTORIES = [
  "./src/components",
  "./src/components/pages",
];

/**
 * Packages shared by every TanStack Start app that are irrelevant to compare
 * across i18n libraries. Externalising them ensures each component's measured
 * size reflects only its own logic plus any i18n runtime it pulls in.
 */
const BASE_EXTERNAL_PACKAGES: (string | RegExp)[] = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "@tanstack/react-router",
  "lucide-react",
  /^next(\/.*)?$/,

  // Filter out non-English locale JSON imports
  // Matches patterns like: /locales/zh.json or /locales/zh/home.json
  // It excludes any locale that isn't 'en'
  /[\\/](?!(en)[\\/\.])[a-z]{2}(?:-[A-Z]{2})?([\\/].*)?\.json$/,
];

const BLOCKED_PLUGIN_SUBSTRINGS = [
  "tanstack", // Strips tanstack-react-start:config and nested router plugins
  "vite:react", // Strips vite:react-babel, vite:react-refresh, etc.
  "tailwind", // Strips @tailwindcss/vite:*
  "visualizer", // Strips rollup-plugin-visualizer
];


// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Derives a human-readable category label from a component's relative file path.
 *
 * Files directly in the scanned directory root (e.g. `Header.tsx`) are
 * labelled `"Shared"`. Files in subdirectories use the first directory segment
 * as the category (e.g. `pages/home/HeroSection.tsx` → `"pages"`).
 *
 * @param relativeFilePath - File path relative to the scanned directory root.
 * @returns Category label for use in the report table.
 */
const deriveComponentCategory = (relativeFilePath: string): string =>
  path.dirname(relativeFilePath) === "."
    ? "Shared"
    : path.dirname(relativeFilePath).split(path.sep)[0];

/**
 * Builds a single component with Vite in library mode (in-memory, no disk
 * write) and returns its minified code, minified byte size, and gzipped byte size.
 *
 * @param componentFilePath - Absolute path to the .tsx component file.
 * @param externalPackages - Package names to exclude from the build output.
 * @param wrapperTemplate - Optional function to generate a wrapper component.
 * @returns Minified code string, minified bytes, and gzipped bytes.
 * @throws If Vite fails to build the component (caller should catch and skip).
 */
const buildComponentBundle = async (
  componentFilePath: string,
  externalPackages: (string | RegExp)[],
  minify: boolean,
  wrapperTemplate?: (componentPath: string) => string,
  additionalPlugins: any[] = [],
): Promise<{ bytes: number; gzipBytes: number; code: string }> => {
  // Load the host application's Vite config
  const loaded = await loadConfigFromFile({
    command: "build",
    mode: "production",
  });
  const appConfig = loaded?.config || {};

  // Filter out plugins that interfere with isolated library mode.
  const filteredPlugins : PluginOption[] = ((appConfig.plugins || []) as any[])
    .flat(Infinity)
    .filter((plugin: any) => {
      if (!plugin || !plugin.name) return true;

      // Keep the plugin ONLY if its name does NOT match any of the blocked substrings
      return !BLOCKED_PLUGIN_SUBSTRINGS.some((blockedSubstring) =>
        plugin.name.includes(blockedSubstring),
      );
    });

  // Ensure Vite can resolve Next.js tsconfig paths (e.g. @/*)
  filteredPlugins.push(tsconfigPaths());

  // Add this custom plugin to strip JSDoc and other block comments
  filteredPlugins.push({
    name: "strip-jsdoc",
    renderChunk(code) {
      // Matches standard block comments /* ... */ and JSDoc /** ... */
      return code.replace(/\/\*[\s\S]*?\*\//g, "");
    },
  });

  // Add additional plugins provided via config
  for (const plugin of additionalPlugins) {
    if (!plugin) continue;

    if (Array.isArray(plugin) && typeof plugin[0] === "function") {
      const [babelPlugin, options] = plugin;
      // Wrap Babel plugin in a simple Vite plugin
      filteredPlugins.push({
        name: `babel-plugin-wrapper-${babelPlugin.name || "anonymous"}`,
        async transform(code: string, id: string) {
          if (!id.endsWith(".tsx") && !id.endsWith(".ts")) return null;

          try {
            // Dynamically import @babel/core to avoid it being a hard dependency of test-utils
            const babel = await import("@babel/core");
            const result = await babel.transformAsync(code, {
              filename: id,
              plugins: [[babelPlugin, options]],
              // Ensure we don't process JSX if esbuild is going to do it,
              // OR if we want babel to do it, we should add the react preset.
              // For now, let's just run the requested plugin.
              babelrc: false,
              configFile: false,
              comments: false,
            });
            return result?.code || null;
          } catch (e) {
            console.error(
              `Error applying Babel plugin ${babelPlugin.name}:`,
              e,
            );
            return null;
          }
        },
      });
    } else if (Array.isArray(plugin)) {
      // It's a list of Vite plugins, flatten and add them
      filteredPlugins.push(...plugin.flat(Infinity));
    } else {
      // It's a single Vite plugin
      filteredPlugins.push(plugin);
    }

    
  }

  // --- TEMPORARY FILE STRATEGY ---
  let entryFilePath = componentFilePath;
  let isTempFile = false;

  if (wrapperTemplate) {
    // Create a temporary physical file next to the actual component
    // The .tsx extension ensures esbuild processes the JSX inside the wrapper
    entryFilePath = componentFilePath.replace(/\.tsx$/, ".wrapper.tsx");
    const normalizedPath = componentFilePath.replace(/\\/g, "/");
    fs.writeFileSync(entryFilePath, wrapperTemplate(normalizedPath), "utf-8");
    isTempFile = true;
  }

  try {
    const buildOutput = (await build({
      configFile: false, // We apply the extracted config manually
      logLevel: "silent",
      plugins: filteredPlugins,
      resolve: appConfig.resolve, // Inherit path aliases (e.g., ~/*)
      define: appConfig.define, // Inherit any app-level defines only
      esbuild: {
        jsx: "automatic",
        legalComments: "none",
      },
      build: {
        write: false,
        minify,
        lib: {
          entry: entryFilePath,
          formats: ["es"],
          fileName: "component",
        },
        rollupOptions: {
          external: externalPackages,
        },
      },
    })) as RolldownOutput[];

    const outputChunks = buildOutput[0]?.output ?? [];
    const code = outputChunks
      .map((outputChunk) => ("code" in outputChunk ? outputChunk.code : ""))
      .join("");

    const codeBuffer = Buffer.from(code);

    return {
      bytes: codeBuffer.byteLength,
      gzipBytes: zlib.gzipSync(codeBuffer).length,
      code,
    };
  } finally {
    // ALWAYS clean up the temporary file, even if the build fails
    if (isTempFile && fs.existsSync(entryFilePath)) {
      fs.unlinkSync(entryFilePath);
    }
  }
};

/**
 * Scans a single directory for `.tsx` files, builds each component with Vite,
 * writes the resulting bundle to disk for inspection, and returns size stats.
 *
 * @param directoryPath - Absolute path to the directory to scan.
 * @param externalPackages - Package names to exclude from each build.
 * @param bundlesOutputDir - Absolute path to the directory where bundles should be saved.
 * @returns Size statistics for every successfully built component in the directory.
 */
const scanAndMeasureDirectory = async (
  directoryPath: string,
  externalPackages: (string | RegExp)[],
  bundlesOutputDir: string,
  wrapperTemplate?: (componentPath: string) => string,
  additionalPlugins: any[] = [],
): Promise<ComponentSizeStats[]> => {
  const componentStats: ComponentSizeStats[] = [];
  const globPattern = new Bun.Glob("**/*.tsx");

  console.log(`Scanning directory: ${directoryPath}`);
  for await (const relativeFilePath of globPattern.scan({
    cwd: directoryPath,
  })) {
    console.log(`  - Processing component: ${relativeFilePath}`);
    const absoluteFilePath = path.join(directoryPath, relativeFilePath);
    const category = deriveComponentCategory(relativeFilePath);
    const componentName = path.basename(relativeFilePath);

    try {
      // Build 1: Unminified
      const unminified = await buildComponentBundle(
        absoluteFilePath,
        externalPackages,
        false,
        wrapperTemplate,
        additionalPlugins,
      );

      // Build 2: Minified
      const minified = await buildComponentBundle(
        absoluteFilePath,
        externalPackages,
        true,
        wrapperTemplate,
        additionalPlugins,
      );

      // Write both bundled code versions to disk for inspection
      const componentBundleDir = path.join(bundlesOutputDir, category);
      if (!fs.existsSync(componentBundleDir)) {
        fs.mkdirSync(componentBundleDir, { recursive: true });
      }
      const componentBaseName = path.parse(componentName).name;

      const unminifiedPath = path.join(
        componentBundleDir,
        `${componentBaseName}.js`,
      );
      fs.writeFileSync(unminifiedPath, unminified.code, "utf-8");

      const minifiedPath = path.join(
        componentBundleDir,
        `${componentBaseName}_min.js`,
      );
      fs.writeFileSync(minifiedPath, minified.code, "utf-8");

      componentStats.push({
        name: componentName,
        category,
        unminifiedBytes: unminified.bytes,
        unminifiedGzipBytes: unminified.gzipBytes,
        minifiedBytes: minified.bytes,
        minifiedGzipBytes: minified.gzipBytes,
      });

      console.log(
        `    ✓ ${componentName}: Unminified=${(unminified.bytes / 1024).toFixed(2)}KB | Minified=${(minified.bytes / 1024).toFixed(2)}KB`,
      );
    } catch (buildError) {
      console.error(`\nFailed to build ${componentName}:`, buildError);
      continue; // skip rather than recording misleading sizes
    }
  }

  console.log(
    `Finished scanning ${directoryPath}. Measured ${componentStats.length} components.\n`,
  );

  return componentStats;
};

// ─── Reporting ────────────────────────────────────────────────────────────────

/**
 * Prints the component size table to the console, sorted by minified size
 * (largest first) so the most impactful components are immediately visible.
 *
 * @param componentStatsList - All collected component measurements.
 */
const printComponentSizeTable = (
  componentStatsList: ComponentSizeStats[],
): void => {
  console.log(`\n\n--- INDIVIDUAL COMPONENT SIZES ---`);
  console.table(
    componentStatsList.map((c) => ({
      Component: c.name,
      Category: c.category,
      "Raw (KB)": (c.unminifiedBytes / 1024).toFixed(2),
      "Raw GZ (KB)": (c.unminifiedGzipBytes / 1024).toFixed(2),
      "Min (KB)": (c.minifiedBytes / 1024).toFixed(2),
      "Min GZ (KB)": (c.minifiedGzipBytes / 1024).toFixed(2),
    })),
  );
};

// ─── Persistence ──────────────────────────────────────────────────────────────

/**
 * Writes all component size measurements to a JSON file in the shared results
 * directory (`<workspace-root>/results/<appName>/components-size.json`).
 *
 * @param resultsDirectory - Absolute path to the output directory (created if needed).
 * @param appName - Package name of the app under test.
 * @param componentStatsList - All collected component measurements.
 */
const saveComponentMeasurements = (
  resultsDirectory: string,
  outputFileName: string,
  appName: string,
  componentStatsList: ComponentSizeStats[],
): void => {
  try {
    if (!fs.existsSync(resultsDirectory)) {
      fs.mkdirSync(resultsDirectory, { recursive: true });
    }

    const outputFilePath = path.join(resultsDirectory, outputFileName);
    fs.writeFileSync(
      outputFilePath,
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          packageName: appName,
          summary: {
            totalComponents: componentStatsList.length,
            totalUnminifiedBytes: componentStatsList.reduce(
              (totalBytes, component) =>
                totalBytes + component.unminifiedBytes,
              0,
            ),
            totalMinifiedBytes: componentStatsList.reduce(
              (totalBytes, component) => totalBytes + component.minifiedBytes,
              0,
            ),
            totalGzipBytes: componentStatsList.reduce(
              (totalBytes, component) =>
                totalBytes + component.minifiedGzipBytes,
              0,
            ),
          },
          components: componentStatsList,
        },
        null,
        2,
      ),
    );

    console.log(`\nResults saved to: ${outputFilePath}\n`);
  } catch (err) {
    console.error(
      `Failed to save component measurements to ${resultsDirectory}:`,
      err,
    );
  }
};

// ─── Entry point ──────────────────────────────────────────────────────────────

/**
 * Scans all component directories, builds each `.tsx` file with Vite, and
 * writes a size report to the shared results directory.
 *
 * All paths are resolved relative to `process.cwd()`, which is the app root
 * when the script is invoked via `bun scripts/measure-components.ts`.
 *
 * @param config - Measurement configuration for the app under test.
 */
export const measureComponents = async ({
  appName,
  benchmarkCategory,
  componentDirectories = DEFAULT_COMPONENT_DIRECTORIES,
  additionalExternalPackages = [],
  wrapperTemplate,
  additionalPlugins = [],
}: MeasureConfig): Promise<void> => {
  const resolvedComponentDirectories = componentDirectories.map(
    (directoryPath) => path.resolve(directoryPath),
  );
  const allExternalPackages = [
    ...BASE_EXTERNAL_PACKAGES,
    ...additionalExternalPackages,
  ];
  // From the app directory (tanstack-start-react/<app>/), two levels up
  // reaches the repo root.
  const resultsDirectory = path.resolve(
    "..",
    "..",
    "results",
    benchmarkCategory,
    appName,
  );

  const bundlesOutputDir = path.join(resultsDirectory, "bundles");

  console.log(`\n--- COMPONENT SIZE MEASUREMENT CONFIG ---`);
  console.log(`App Name: ${appName}`);
  console.log(`Benchmark Category: ${benchmarkCategory}`);
  console.log(`Results Dir: ${resultsDirectory}`);
  console.log(`Bundles Output Dir: ${bundlesOutputDir}`);
  console.log(`External Packages: ${allExternalPackages.join(", ")}`);
  console.log(`------------------------------------------\n`);

  console.log(`Measuring component sizes via Vite...`);

  const allComponentStats: ComponentSizeStats[] = [];

  for (const directoryPath of resolvedComponentDirectories) {
    if (!fs.existsSync(directoryPath)) continue;

    const directoryStats = await scanAndMeasureDirectory(
      directoryPath,
      allExternalPackages,
      bundlesOutputDir,
      wrapperTemplate,
      additionalPlugins,
    );
    allComponentStats.push(...directoryStats);
  }

  // Sort largest-first so the most impactful components appear at the top.
  allComponentStats.sort(
    (componentA, componentB) =>
      componentB.minifiedBytes - componentA.minifiedBytes,
  );

  printComponentSizeTable(allComponentStats);
  saveComponentMeasurements(
    resultsDirectory,
    "components-size.json",
    appName,
    allComponentStats,
  );
};

// ─── Library size measurement ─────────────────────────────────────────────────

/**
 * Builds `scripts/EmptyComponent.tsx` in isolation to measure the pure i18n
 * library overhead — the bytes added to a component that uses the library's
 * hooks/APIs but renders nothing and loads no translation JSON.
 *
 * The wrapper is resolved in this order:
 *  1. `scripts/EmptyWrapper.tsx` if present (provides the minimal provider
 *     context that the lib hooks require, without loading any locale files).
 *  2. The `wrapperTemplate` from the config (falls back to the app's regular
 *     Wrapper so router/context hooks still resolve).
 *
 * Saves results to `<results-dir>/empty-component-size.json`.
 *
 * Call this from a dedicated `scripts/measure-lib-size.ts` entry point so it
 * runs independently of the per-component scan.
 */
export const measureLibSize = async ({
  appName,
  benchmarkCategory,
  additionalExternalPackages = [],
  wrapperTemplate,
  additionalPlugins = [],
}: MeasureConfig): Promise<void> => {
  const emptyComponentPath = path.resolve("./scripts/EmptyComponent.tsx");
  if (!fs.existsSync(emptyComponentPath)) {
    console.log(
      `[measureLibSize] No EmptyComponent.tsx found at ${emptyComponentPath} — skipping.`,
    );
    return;
  }

  const allExternalPackages = [
    ...BASE_EXTERNAL_PACKAGES,
    ...additionalExternalPackages,
  ];

  const resultsDirectory = path.resolve(
    "..",
    "..",
    "results",
    benchmarkCategory,
    appName,
  );

  // Prefer a dedicated EmptyWrapper that sets up only the minimal provider
  // context the lib needs, without loading any translation files.
  const emptyWrapperPath = path.resolve("./scripts/EmptyWrapper.tsx");
  const resolvedWrapperTemplate = fs.existsSync(emptyWrapperPath)
    ? (componentPath: string) => `
    import React from 'react';
    import Component from '${componentPath}';
    import Wrapper from '${emptyWrapperPath.replace(/\\/g, "/")}';

    export default function Wrapped() {
      return (
        <Wrapper>
          <Component />
        </Wrapper>
      );
    }
  `
    : wrapperTemplate;

  console.log(`\n--- LIB SIZE MEASUREMENT ---`);
  console.log(`App Name: ${appName}`);
  console.log(`Benchmark Category: ${benchmarkCategory}`);
  console.log(`EmptyComponent: ${emptyComponentPath}`);
  console.log(
    `EmptyWrapper: ${fs.existsSync(emptyWrapperPath) ? emptyWrapperPath : "(none — using app Wrapper)"}`,
  );
  console.log(`----------------------------\n`);

  try {
    const unminified = await buildComponentBundle(
      emptyComponentPath,
      allExternalPackages,
      false,
      resolvedWrapperTemplate,
      additionalPlugins,
    );

    const minified = await buildComponentBundle(
      emptyComponentPath,
      allExternalPackages,
      true,
      resolvedWrapperTemplate,
      additionalPlugins,
    );

    console.log(
      `EmptyComponent.tsx: Unminified=${(unminified.bytes / 1024).toFixed(2)}KB | Minified=${(minified.bytes / 1024).toFixed(2)}KB | Gzip=${(minified.gzipBytes / 1024).toFixed(2)}KB`,
    );

    const stats: ComponentSizeStats[] = [
      {
        name: "EmptyComponent.tsx",
        category: "Synthetic",
        unminifiedBytes: unminified.bytes,
        unminifiedGzipBytes: unminified.gzipBytes,
        minifiedBytes: minified.bytes,
        minifiedGzipBytes: minified.gzipBytes,
      },
    ];

    saveComponentMeasurements(
      resultsDirectory,
      "empty-component-size.json",
      appName,
      stats,
    );
  } catch (err) {
    console.error("[measureLibSize] Build or save failed:", err);
  }
};
