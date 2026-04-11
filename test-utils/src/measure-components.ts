/**
 * measure-components.ts — Per-component bundle size measurement via Vite
 *
 * WHAT THIS MEASURES
 * ──────────────────
 * Each React component (.tsx) in the app is compiled individually by Vite in
 * library mode. We record three size metrics:
 *
 *   Raw       — UTF-8 byte length of the source file as written on disk.
 *               Useful for comparing authoring overhead between libraries.
 *
 *   Minified  — byte length of the compiled, minified ES module output.
 *               This is what gets shipped to users after the build step.
 *
 *   Gzipped   — byte length of the minified output after gzip compression.
 *               This approximates the over-the-wire transfer size, which is
 *               the number that actually matters for real-world performance.
 *
 * WHY BUILD EACH COMPONENT SEPARATELY
 * ─────────────────────────────────────
 * Building the whole app gives one large bundle where it is impossible to
 * attribute bytes to individual components or to the i18n library overhead.
 * Building each component in isolation lets us answer: "how much does this
 * particular component grow when we add i18n library X?"
 *
 * WHY INHERIT THE APP'S VITE CONFIG
 * ───────────────────────────────────
 * Each app has its own Vite plugins (e.g. intlayer(), paraglide(), etc.).
 * We pass `configFile: viteConfigFilePath` so those plugins are active during
 * the build. This ensures the measurement reflects reality — the same
 * transformations that happen in production are applied here.
 *
 * WHY EXTERNALIZE REACT AND ROUTER
 * ──────────────────────────────────
 * React, ReactDOM and the router are always bundled once at the app level and
 * shared across all components via the host. Externalising them from each
 * component build ensures we measure only the component's own code plus any
 * i18n runtime it pulls in — not React itself, which is identical for every app.
 *
 * Usage in each app's scripts/measure-components.ts:
 *   import { measureComponents } from "test-utils/measure-components";
 *   import pkg from "../package.json" with { type: "json" };
 *   measureComponents({ appName: pkg.name });
 */

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { build } from "vite";
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
  additionalExternalPackages?: string[];
  /**
   * Path to the app's Vite config file, resolved relative to `process.cwd()`.
   * The app's own plugins (intlayer, paraglide, etc.) must be active here so
   * that component transforms match a real production build.
   * Default: "./vite.config.ts"
   */
  viteConfigFile?: string;
  /**
   * Subfolder name under `<repo-root>/results/` that groups results by
   * benchmark category, e.g. `"tanstack-start-react-static"`.
   * Produces: `<repo-root>/results/<benchmarkCategory>/<appName>/`
   */
  benchmarkCategory: string;
}

/** Size measurements for a single compiled component. */
interface ComponentSizeStats {
  /** File name, e.g. "Header.tsx". */
  name: string;
  /**
   * Category derived from directory structure.
   * "Shared" for files directly in src/components/, otherwise the first
   * subdirectory name (e.g. "home" for src/components/pages/home/).
   */
  category: string;
  /** UTF-8 byte length of the source file. */
  sourceBytes: number;
  /** Byte length of the minified ES module output. */
  minifiedBytes: number;
  /** Byte length of the minified output after gzip compression (level 6). */
  gzipBytes: number;
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
const BASE_EXTERNAL_PACKAGES = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "@tanstack/react-router",
  "lucide-react",
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
 * write) and returns its minified and gzipped byte sizes.
 *
 * Vite is invoked with the app's own config file so that any registered plugins
 * (e.g. intlayer()) apply the same transforms as in a production build.
 * The output is kept in memory (`write: false`) for speed and to avoid leaving
 * temporary files on disk.
 *
 * gzip is applied at level 6 (the default), matching most CDN and server
 * configurations, to give a realistic over-the-wire size estimate.
 *
 * @param componentFilePath - Absolute path to the .tsx component file.
 * @param viteConfigFilePath - Absolute path to the app's vite.config.ts.
 * @param externalPackages - Package names to exclude from the build output.
 * @returns Minified and gzipped byte sizes of the compiled component.
 * @throws If Vite fails to build the component (caller should catch and skip).
 */
const buildComponentBundle = async (
  componentFilePath: string,
  viteConfigFilePath: string,
  externalPackages: string[],
): Promise<{ minifiedBytes: number; gzipBytes: number }> => {
  const buildOutput = (await build({
    configFile: viteConfigFilePath,
    logLevel: "silent", // suppress Vite's build progress noise
    build: {
      write: false, // keep output in memory — faster, no temp files
      minify: true,
      lib: {
        entry: componentFilePath,
        formats: ["es"],
        fileName: "component",
      },
      rollupOptions: {
        external: externalPackages,
      },
    },
  })) as RolldownOutput[];

  // Library mode normally produces one chunk per entry, but plugins can emit
  // additional helper chunks. Concatenate all of them into a single buffer.
  const outputChunks = buildOutput[0]?.output ?? [];
  const minifiedCodeBuffer = Buffer.from(
    outputChunks
      .map((outputChunk) => ("code" in outputChunk ? outputChunk.code : ""))
      .join(""),
  );

  return {
    minifiedBytes: minifiedCodeBuffer.byteLength,
    gzipBytes: zlib.gzipSync(minifiedCodeBuffer).length,
  };
};

/**
 * Scans a single directory for `.tsx` files, builds each component with Vite,
 * and returns the collected size statistics.
 *
 * Failed component builds are logged and skipped rather than aborting the
 * entire run — one broken component should not hide all other measurements.
 *
 * A dot is printed to stdout for each processed component so the operator can
 * confirm the script is still running (Vite builds are noticeably slow).
 *
 * @param directoryPath - Absolute path to the directory to scan.
 * @param viteConfigFilePath - Absolute path to the app's vite.config.ts.
 * @param externalPackages - Package names to exclude from each build.
 * @returns Size statistics for every successfully built component in the directory.
 */
const scanAndMeasureDirectory = async (
  directoryPath: string,
  viteConfigFilePath: string,
  externalPackages: string[],
): Promise<ComponentSizeStats[]> => {
  const componentStats: ComponentSizeStats[] = [];
  const globPattern = new Bun.Glob("**/*.tsx");

  console.log(`Scanning directory: ${directoryPath}`);
  for await (const relativeFilePath of globPattern.scan({
    cwd: directoryPath,
  })) {
    console.log(`  - Processing component: ${relativeFilePath}`);
    const absoluteFilePath = path.join(directoryPath, relativeFilePath);
    const sourceContent = fs.readFileSync(absoluteFilePath, "utf-8");
    const sourceBytes = Buffer.byteLength(sourceContent);

    let minifiedBytes = sourceBytes;
    let gzipBytes = sourceBytes;

    try {
      ({ minifiedBytes, gzipBytes } = await buildComponentBundle(
        absoluteFilePath,
        viteConfigFilePath,
        externalPackages,
      ));
    } catch (buildError) {
      const componentFileName = path.basename(relativeFilePath);
      console.error(`\nFailed to build ${componentFileName}:`, buildError);
      continue; // skip rather than recording misleading sizes
    }

    componentStats.push({
      name: path.basename(relativeFilePath),
      category: deriveComponentCategory(relativeFilePath),
      sourceBytes,
      minifiedBytes,
      gzipBytes,
    });

    console.log(
      `    ✓ Build complete: minified=${(minifiedBytes / 1024).toFixed(
        2,
      )}KB, gzipped=${(gzipBytes / 1024).toFixed(2)}KB`,
    );

    // process.stdout.write(".");
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
    componentStatsList.map((component) => ({
      Component: component.name,
      Category: component.category,
      "Raw (KB)": (component.sourceBytes / 1024).toFixed(2),
      "Minified (KB)": (component.minifiedBytes / 1024).toFixed(2),
      "Gzipped (KB)": (component.gzipBytes / 1024).toFixed(2),
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
  appName: string,
  componentStatsList: ComponentSizeStats[],
): void => {
  if (!fs.existsSync(resultsDirectory)) {
    fs.mkdirSync(resultsDirectory, { recursive: true });
  }

  const outputFilePath = path.join(resultsDirectory, "components-size.json");
  fs.writeFileSync(
    outputFilePath,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        packageName: appName,
        summary: {
          totalComponents: componentStatsList.length,
          totalMinifiedBytes: componentStatsList.reduce(
            (totalBytes, component) => totalBytes + component.minifiedBytes,
            0,
          ),
          totalGzipBytes: componentStatsList.reduce(
            (totalBytes, component) => totalBytes + component.gzipBytes,
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
export const measureComponents = async (
  config: MeasureConfig,
): Promise<void> => {
  const {
    appName,
    benchmarkCategory,
    componentDirectories = DEFAULT_COMPONENT_DIRECTORIES,
    additionalExternalPackages = [],
    viteConfigFile = "./vite.config.ts",
  } = config;

  const resolvedComponentDirectories = componentDirectories.map(
    (directoryPath) => path.resolve(directoryPath),
  );
  const allExternalPackages = [
    ...BASE_EXTERNAL_PACKAGES,
    ...additionalExternalPackages,
  ];
  const viteConfigFilePath = path.resolve(viteConfigFile);
  // From the app directory (tanstack-start-react/<app>/), two levels up
  // reaches the repo root.
  const resultsDirectory = path.resolve(
    "..",
    "..",
    "results",
    benchmarkCategory,
    appName,
  );

  console.log(`\n--- COMPONENT SIZE MEASUREMENT CONFIG ---`);
  console.log(`App Name: ${appName}`);
  console.log(`Benchmark Category: ${benchmarkCategory}`);
  console.log(`Vite Config: ${viteConfigFilePath}`);
  console.log(`Results Dir: ${resultsDirectory}`);
  console.log(`External Packages: ${allExternalPackages.join(", ")}`);
  console.log(`------------------------------------------\n`);

  console.log(`Measuring component sizes via Vite...`);

  const allComponentStats: ComponentSizeStats[] = [];

  for (const directoryPath of resolvedComponentDirectories) {
    if (!fs.existsSync(directoryPath)) continue;

    const directoryStats = await scanAndMeasureDirectory(
      directoryPath,
      viteConfigFilePath,
      allExternalPackages,
    );
    allComponentStats.push(...directoryStats);
  }

  // Sort largest-first so the most impactful components appear at the top.
  allComponentStats.sort(
    (componentA, componentB) =>
      componentB.minifiedBytes - componentA.minifiedBytes,
  );

  printComponentSizeTable(allComponentStats);
  saveComponentMeasurements(resultsDirectory, appName, allComponentStats);
};
