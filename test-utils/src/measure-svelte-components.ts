/**
 * Per-component bundle size for Svelte apps — same output shape as measure-components.
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { build, loadConfigFromFile, type PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import type { RolldownOutput } from "rolldown";
import { benchmarkBloomRoot } from "./repo-root";
import { svelte } from "@sveltejs/vite-plugin-svelte";

/** One recursive scan under `src/components` covers shared + `pages/*`. */
const DEFAULT_DIRS = ["./src/components"];

const BLOCKED_PLUGIN_SUBSTRINGS = [
  "tanstack",
  "vite:react",
  "tailwind",
  "visualizer",
];

const SVELTE_EXTERNAL: (string | RegExp)[] = [
  /^svelte(\/.*)?$/,
  /^\$app\//,
  "lucide-svelte",
  /^lucide-svelte\//,
  "test-utils",
  /^test-utils\//,
  /[\\/](?!(en)[\\/\.])[a-z]{2}(?:-[A-Z]{2})?([\\/].*)?\.json$/,
];

interface ComponentSizeStats {
  name: string;
  category: string;
  unminifiedBytes: number;
  unminifiedGzipBytes: number;
  minifiedBytes: number;
  minifiedGzipBytes: number;
}

const deriveCategory = (relativeFilePath: string): string =>
  path.dirname(relativeFilePath) === "."
    ? "Shared"
    : path.dirname(relativeFilePath).split(path.sep)[0];

const collectSvelte = (dir: string, base: string): string[] => {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) return collectSvelte(path.join(dir, e.name), rel);
    return e.name.endsWith(".svelte") ? [rel] : [];
  });
};

const stripCommentsPlugin = {
  name: "strip-comments",
  enforce: "post" as const,
  renderChunk(code: string) {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/#.*?$/gm, "")
      .replace(/^\s*\/\/.*$/gm, "");
  },
};

async function buildOne(
  entryFilePath: string,
  minify: boolean,
  configRoot: string,
): Promise<{ bytes: number; gzipBytes: number; code: string }> {
  const configFile = path.join(configRoot, "vite.config.ts");
  const loaded = fs.existsSync(configFile)
    ? await loadConfigFromFile(
        { command: "build", mode: "production" },
        configFile,
        configRoot,
      )
    : null;
  const appConfig = loaded?.config ?? {};

  const filteredPlugins: PluginOption[] = ((appConfig.plugins || []) as any[])
    .flat(Infinity)
    .filter((plugin: any) => {
      if (!plugin?.name) return true;
      return !BLOCKED_PLUGIN_SUBSTRINGS.some((b) =>
        String(plugin.name).toLowerCase().includes(b),
      );
    });

  const hasSvelte = filteredPlugins.some(
    (p: any) => p?.name && String(p.name).includes("vite-plugin-svelte"),
  );
  if (!hasSvelte) {
    filteredPlugins.unshift(svelte());
  }

  filteredPlugins.push(tsconfigPaths());
  filteredPlugins.push(stripCommentsPlugin);

  const output = (await build({
    configFile: false,
    logLevel: "silent",
    plugins: filteredPlugins,
    resolve: appConfig.resolve,
    define: appConfig.define,
    build: {
      write: false,
      minify,
      lib: {
        entry: entryFilePath,
        formats: ["es"],
        fileName: "component",
      },
      rollupOptions: {
        external: SVELTE_EXTERNAL,
      },
    },
  })) as RolldownOutput[];

  const chunks = output[0]?.output ?? [];
  const code = chunks
    .map((c) => ("code" in c ? c.code : ""))
    .join("");
  const buf = Buffer.from(code);
  return {
    bytes: buf.byteLength,
    gzipBytes: zlib.gzipSync(buf).length,
    code,
  };
}

export interface MeasureSvelteConfig {
  appName: string;
  benchmarkCategory: string;
  componentDirectories?: string[];
  appDir?: string;
}

export async function measureSvelteComponents({
  appName,
  benchmarkCategory,
  componentDirectories = DEFAULT_DIRS,
  appDir,
}: MeasureSvelteConfig): Promise<void> {
  const effectiveDir = appDir ?? process.cwd();
  const dirs = componentDirectories.map((d) => path.resolve(effectiveDir, d));
  const resultsDirectory = path.join(
    benchmarkBloomRoot(effectiveDir),
    "results",
    appName,
  );
  const bundlesOutputDir = path.join(resultsDirectory, "bundle");

  console.log(`\n--- SVELTE COMPONENT SIZE MEASUREMENT ---`);
  console.log(`App: ${appName}`);
  console.log(`Category: ${benchmarkCategory}`);
  console.log(`Results: ${resultsDirectory}\n`);

  const all: ComponentSizeStats[] = [];

  for (const directoryPath of dirs) {
    for (const relativeFilePath of collectSvelte(directoryPath, "")) {
      const absoluteFilePath = path.join(directoryPath, relativeFilePath);
      const category = deriveCategory(relativeFilePath);
      const componentName = path.basename(relativeFilePath);
      const baseName = path.parse(componentName).name;

      console.log(`  Processing ${relativeFilePath} ...`);

      try {
        const unminified = await buildOne(absoluteFilePath, false, effectiveDir);
        const minified = await buildOne(absoluteFilePath, true, effectiveDir);

        const componentBundleDir = path.join(bundlesOutputDir, category);
        if (!fs.existsSync(componentBundleDir)) {
          fs.mkdirSync(componentBundleDir, { recursive: true });
        }
        fs.writeFileSync(
          path.join(componentBundleDir, `${baseName}.js`),
          unminified.code,
          "utf-8",
        );
        fs.writeFileSync(
          path.join(componentBundleDir, `${baseName}_min.js`),
          minified.code,
          "utf-8",
        );

        all.push({
          name: componentName,
          category,
          unminifiedBytes: unminified.bytes,
          unminifiedGzipBytes: unminified.gzipBytes,
          minifiedBytes: minified.bytes,
          minifiedGzipBytes: minified.gzipBytes,
        });
        console.log(
          `    ✓ ${componentName}: min=${(minified.bytes / 1024).toFixed(2)} KB`,
        );
      } catch (e) {
        console.error(`    ✗ ${componentName}:`, e);
      }
    }
  }

  all.sort((a, b) => b.minifiedBytes - a.minifiedBytes);

  console.log(`\n--- INDIVIDUAL COMPONENT SIZES (Svelte) ---`);
  console.table(
    all.map((c) => ({
      Component: c.name,
      Category: c.category,
      "Min (KB)": (c.minifiedBytes / 1024).toFixed(2),
      "Min GZ (KB)": (c.minifiedGzipBytes / 1024).toFixed(2),
    })),
  );

  if (!fs.existsSync(resultsDirectory)) {
    fs.mkdirSync(resultsDirectory, { recursive: true });
  }
  fs.writeFileSync(
    path.join(resultsDirectory, "components-size.json"),
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        packageName: appName,
        framework: "svelte",
        summary: {
          totalComponents: all.length,
          totalUnminifiedBytes: all.reduce((s, c) => s + c.unminifiedBytes, 0),
          totalMinifiedBytes: all.reduce((s, c) => s + c.minifiedBytes, 0),
          totalGzipBytes: all.reduce((s, c) => s + c.minifiedGzipBytes, 0),
        },
        components: all,
      },
      null,
      2,
    ),
  );
  console.log(`\nResults saved to ${path.join(resultsDirectory, "components-size.json")}\n`);
}

// ─── Library size measurement (Svelte) ────────────────────────────────────────

/**
 * Builds `scripts/EmptyComponent.svelte` in isolation to measure the pure i18n
 * library overhead — bytes added by a component that uses the library's
 * APIs but renders nothing and loads no translation JSON.
 *
 * Saves results to `<results-dir>/empty-component-size.json`.
 */
export interface MeasureSvelteLibSizeConfig {
  appName: string;
  benchmarkCategory: string;
  appDir?: string;
  emptyComponentFile?: string;
}

export async function measureSvelteLibSize({
  appName,
  benchmarkCategory,
  appDir,
  emptyComponentFile = "scripts/EmptyComponent.svelte",
}: MeasureSvelteLibSizeConfig): Promise<void> {
  const effectiveDir = appDir ?? process.cwd();
  const emptyComponentPath = path.resolve(effectiveDir, emptyComponentFile);
  const emptyComponentName = path.basename(emptyComponentPath);

  if (!fs.existsSync(emptyComponentPath)) {
    console.log(
      `[measureSvelteLibSize] No ${emptyComponentName} found at ${emptyComponentPath} — skipping.`,
    );
    return;
  }

  const resultsDirectory = path.join(
    benchmarkBloomRoot(effectiveDir),
    "results",
    appName,
  );

  console.log(`\n--- SVELTE LIB SIZE MEASUREMENT ---`);
  console.log(`App: ${appName}`);
  console.log(`Category: ${benchmarkCategory}`);
  console.log(`EmptyComponent: ${emptyComponentPath}`);
  console.log(`-----------------------------------\n`);

  try {
    const unminified = await buildOne(emptyComponentPath, false, effectiveDir);
    const minified = await buildOne(emptyComponentPath, true, effectiveDir);

    console.log(
      `${emptyComponentName}: Unminified=${(unminified.bytes / 1024).toFixed(2)}KB | Minified=${(minified.bytes / 1024).toFixed(2)}KB | Gzip=${(minified.gzipBytes / 1024).toFixed(2)}KB`,
    );

    const bundlesOutputDir = path.join(resultsDirectory, "bundle", "Lib");
    if (!fs.existsSync(bundlesOutputDir)) {
      fs.mkdirSync(bundlesOutputDir, { recursive: true });
    }
    fs.writeFileSync(
      path.join(bundlesOutputDir, "index.js"),
      unminified.code,
      "utf-8",
    );
    fs.writeFileSync(
      path.join(bundlesOutputDir, "index_min.js"),
      minified.code,
      "utf-8",
    );

    if (!fs.existsSync(resultsDirectory)) {
      fs.mkdirSync(resultsDirectory, { recursive: true });
    }
    const stats: ComponentSizeStats[] = [
      {
        name: emptyComponentName,
        category: "Synthetic",
        unminifiedBytes: unminified.bytes,
        unminifiedGzipBytes: unminified.gzipBytes,
        minifiedBytes: minified.bytes,
        minifiedGzipBytes: minified.gzipBytes,
      },
    ];
    fs.writeFileSync(
      path.join(resultsDirectory, "empty-component-size.json"),
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          packageName: appName,
          framework: "svelte",
          summary: {
            totalComponents: stats.length,
            totalUnminifiedBytes: unminified.bytes,
            totalMinifiedBytes: minified.bytes,
            totalGzipBytes: minified.gzipBytes,
          },
          components: stats,
        },
        null,
        2,
      ),
    );
    console.log(
      `\nResults saved to ${path.join(resultsDirectory, "empty-component-size.json")}\n`,
    );
  } catch (err) {
    console.error("[measureSvelteLibSize] Build or save failed:", err);
  }
}
