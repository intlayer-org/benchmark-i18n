import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require_ = createRequire(import.meta.url);

/**
 * Resolve a package specifier to an absolute file path through the `import`
 * condition, the way `createNextIntlPlugin`'s own `resolveEsmPath()` does for
 * the real build.
 *
 * `require.resolve` picks the `require` condition and lands on `dist/cjs`. A
 * CommonJS entry cannot be tree-shaken, so the whole `react-intlayer` barrel —
 * `@intlayer/core`'s markdown compiler included — stayed in the measurement and
 * the adapter's reported overhead was about 65 KB too high.
 */
const resolveModule = (specifier: string): string => {
  try {
    return fileURLToPath(import.meta.resolve(specifier));
  } catch {
    return require_.resolve(specifier);
  }
};

/**
 * Mirrors the `next-intl` → `@intlayer/next-intl` aliasing that
 * `createNextIntlPlugin` applies to the Next build, so the component-size and
 * lib-size measurements bundle the compat adapter instead of the real
 * `next-intl` that the components still import by name.
 */
const ALIASES: Record<string, string> = {
  "next-intl": "@intlayer/next-intl",
  "next-intl/server": "@intlayer/next-intl/server",
  "next-intl/routing": "@intlayer/next-intl/routing",
  "next-intl/navigation": "@intlayer/next-intl/navigation",
  "next-intl/middleware": "@intlayer/next-intl/middleware",
};

export const nextIntlCompatAlias = () => ({
  name: "next-intl-compat-alias",
  enforce: "pre" as const,
  // The adapter chain (`@intlayer/use-intl`, …) is ESM-only; the measurement
  // build otherwise resolves with a `require` condition and fails.
  config() {
    return {
      resolve: {
        conditions: ["module", "browser", "development", "import", "default"],
      },
    };
  },
  resolveId(source: string) {
    const replacement = ALIASES[source];
    if (!replacement) return null;
    return resolveModule(replacement);
  },
});
