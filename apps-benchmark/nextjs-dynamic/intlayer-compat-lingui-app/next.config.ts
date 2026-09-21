import { createRequire } from "node:module";
import { dirname, relative, resolve, sep } from "node:path";
import { LINGUI_CALLERS } from "@intlayer/config/callers";
import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

/**
 * `@intlayer/lingui` ships a Vite plugin only, so this composes the same two
 * pieces `withI18next` / `withNextIntl` bundle for their libraries:
 *
 * 1. alias `@lingui/core` + `@lingui/react` → `@intlayer/lingui` for both
 *    webpack and Turbopack, so the components' unchanged lingui imports are
 *    served by the compat adapter;
 * 2. hand `LINGUI_CALLERS` to `withIntlayer`, so the SWC optimize pass
 *    rewrites `useLingui()` / `<Trans>` / `i18n._()` to direct dictionary
 *    imports.
 */
const compatRequire = createRequire(import.meta.url);

const LINGUI_ALIASES = ["@lingui/core", "@lingui/react"];

/**
 * Both bundlers ignore alias values that are bare package specifiers, so the
 * alias has to point at the adapter's real ESM entry file. `@intlayer/lingui`
 * is ESM-only (no `require` condition), so read its `exports` map directly
 * instead of `require.resolve`.
 */
const resolveEsmEntry = (specifier: string): string => {
  const packageJsonPath = compatRequire.resolve(`${specifier}/package.json`);
  const packageJson = compatRequire(packageJsonPath) as {
    exports?: Record<string, string | { import?: string; default?: string }>;
  };
  const entry = packageJson.exports?.["."];
  const relativeFile =
    typeof entry === "string" ? entry : (entry?.import ?? entry?.default);
  if (!relativeFile) return compatRequire.resolve(specifier);
  return resolve(dirname(packageJsonPath), relativeFile);
};

const adapterPath = resolveEsmEntry("@intlayer/lingui");

// Webpack resolves aliases from absolute paths.
const webpackAlias = Object.fromEntries(
  LINGUI_ALIASES.map((request) => [request, adapterPath]),
);

// Turbopack only honours project-root-relative `./` paths.
const turboAlias = Object.fromEntries(
  LINGUI_ALIASES.map((request) => [
    request,
    `./${relative(process.cwd(), adapterPath).split(sep).join("/")}`,
  ]),
);

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias, ...webpackAlias };
    return config;
  },
  turbopack: {
    resolveAlias: turboAlias,
  },
};

export default withIntlayer(nextConfig, { compatCallers: LINGUI_CALLERS });
