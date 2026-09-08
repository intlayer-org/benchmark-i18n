import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require_ = createRequire(import.meta.url);

/**
 * Resolve a package specifier to an absolute file path.
 *
 * `@intlayer/lingui` ships ESM only (its `exports` map has no `require`
 * condition), so `require.resolve` throws on it. `import.meta.resolve` honours
 * the `import` condition; `require.resolve` stays as the fallback.
 */
const resolveModule = (specifier: string): string => {
  try {
    return fileURLToPath(import.meta.resolve(specifier));
  } catch {
    return require_.resolve(specifier);
  }
};

/**
 * Mirrors the `@lingui/core` + `@lingui/react` → `@intlayer/lingui` aliasing
 * that the compat Vite plugin applies to the app build, so the component-size
 * and lib-size measurements bundle the compat adapter instead of the real
 * lingui packages that the components still import by name.
 */
const ALIASES: Record<string, string> = {
  "@lingui/core": "@intlayer/lingui",
  "@lingui/react": "@intlayer/lingui",
};

export const linguiCompatAlias = () => ({
  name: "lingui-compat-alias",
  enforce: "pre" as const,
  // The adapter chain is ESM-only; the measurement build otherwise resolves
  // with a `require` condition and fails.
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
