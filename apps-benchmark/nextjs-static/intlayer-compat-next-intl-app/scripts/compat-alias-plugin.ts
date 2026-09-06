import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);

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
    return require_.resolve(replacement);
  },
});
