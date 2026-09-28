import i18next from "i18next";
import { createSignal } from "solid-js";

export const [t, setT] = createSignal(i18next.t.bind(i18next));

i18next.init({
  fallbackLng: "en",
  resources: {},
  partialBundledLanguages: true,
});

/** Merges one `<locale>/<namespace>.json` into the default namespace. */
function addNamespace(path: string, data: Record<string, unknown>): void {
  const [, locale, ns] = path.match(/locales\/(\w+)\/(\w+)\.json$/)!;
  // `_root` holds the top-level leaf keys (mockBanner).
  const bundle = ns === "_root" ? data : { [ns]: data };
  i18next.addResourceBundle(locale, "translation", bundle, true, true);
}

/** Namespaces the app shell (Layout, Header, Footer…) renders on every page. */
const SHARED_NAMESPACES = [
  "shared",
  "header",
  "footer",
  "themeToggle",
  "notFound",
  "_root",
];

// Scoped dynamic variant: nothing is bundled up front; every (locale,
// namespace) pair is its own chunk, fetched the first time a route needs it.
const loaders = import.meta.glob<Record<string, unknown>>(
  "../locales/*/*.json",
  {
    import: "default",
  }
);
const loaded = new Set<string>();

/** Loads the shell's namespaces plus the page's one for `locale`. */
export async function loadRouteMessages(
  locale: string,
  pageNamespace: string
): Promise<void> {
  await Promise.all(
    [...SHARED_NAMESPACES, pageNamespace].map(async (ns) => {
      const path = `../locales/${locale}/${ns}.json`;
      if (loaded.has(path) || !loaders[path]) return;
      addNamespace(path, await loaders[path]());
      loaded.add(path);
    })
  );
}

setT(() => i18next.t.bind(i18next));

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
