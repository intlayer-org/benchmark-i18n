import i18next from "i18next";
import { createSignal } from "solid-js";

export const [t, setT] = createSignal(i18next.t.bind(i18next));

i18next.init({
  fallbackLng: "en",
  resources: {},
});

/** Merges one `<locale>/<namespace>.json` into the default namespace. */
function addNamespace(path: string, data: Record<string, unknown>): void {
  const [, locale, ns] = path.match(/locales\/(\w+)\/(\w+)\.json$/)!;
  // `_root` holds the top-level leaf keys (mockBanner).
  const bundle = ns === "_root" ? data : { [ns]: data };
  i18next.addResourceBundle(locale, "translation", bundle, true, true);
}

// Scoped variant: the shell's namespaces are bundled up front for every
// locale; each page brings its own namespace in its chunk (useNamespace).
const shared = import.meta.glob<Record<string, unknown>>(
  "../locales/*/{shared,header,footer,themeToggle,notFound,_root}.json",
  { eager: true, import: "default" }
);
for (const [path, data] of Object.entries(shared)) addNamespace(path, data);

setT(() => i18next.t.bind(i18next));

/**
 * Registers a page namespace for every locale. Page modules call it with an
 * eager `import.meta.glob` of their own `locales/*\/<ns>.json`, so the
 * messages live in the page chunk instead of the entry chunk.
 */
export function useNamespace(
  modules: Record<string, Record<string, unknown>>
): void {
  for (const [path, data] of Object.entries(modules)) addNamespace(path, data);
  setT(() => i18next.t.bind(i18next));
}

/**
 * Prefer this over `const tt = t()` in components. Solid runs the component body once;
 * caching `t()` freezes the old bound `i18next.t`. Each `trans()` call reads the signal
 * again so locale switches re-render.
 */
export function trans(
  ...args: Parameters<typeof i18next.t>
): ReturnType<typeof i18next.t> {
  return t()(...args);
}

export { i18next };
