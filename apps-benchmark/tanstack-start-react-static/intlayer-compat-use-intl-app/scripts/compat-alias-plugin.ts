import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require_ = createRequire(import.meta.url);

/**
 * Resolve a package specifier to an absolute file path.
 *
 * Several `@intlayer/*` compat packages ship ESM only (their `exports` map has
 * no `require` condition), so `require.resolve` throws on them. `import.meta.resolve`
 * honours the `import` condition; `require.resolve` stays as the fallback for
 * anything CJS-only.
 */
const resolveModule = (specifier: string): string => {
  try {
    return fileURLToPath(import.meta.resolve(specifier));
  } catch {
    return require_.resolve(specifier);
  }
};

/**
 * Mirrors the `use-intl` → `@intlayer/use-intl` aliasing that the compat Vite
 * plugin applies to the app build, so the component-size and lib-size
 * measurements bundle the compat adapter instead of the real `use-intl` that
 * the components still import by name.
 */
const ALIASES: Record<string, string> = {
  "use-intl": "@intlayer/use-intl",
  "use-intl/core": "@intlayer/use-intl/core",
  "use-intl/react": "@intlayer/use-intl/react",
};

export const useIntlCompatAlias = () => ({
  name: "use-intl-compat-alias",
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
