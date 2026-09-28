import { FluentBundle, FluentResource } from "@fluent/bundle";
import { createFluentVue } from "fluent-vue";
import { type Locale, locales } from "./config";

/** Namespaces the app shell (Layout, Header, Footer…) renders on every page. */
const SHARED_NAMESPACES = [
  "shared",
  "header",
  "footer",
  "theme-toggle",
  "mock-banner",
  "not-found",
];

const bundleMap = Object.fromEntries(
  locales.map((locale) => [locale, new FluentBundle(locale)])
) as Record<Locale, FluentBundle>;

const added = new Set<string>();

/** Adds one `<locale>/<namespace>.ftl` resource to its locale bundle, once. */
function addResource(path: string, ftl: string): void {
  if (added.has(path)) return;
  added.add(path);
  const locale = path.match(/locales\/(\w+)\//)![1] as Locale;
  bundleMap[locale]?.addResource(new FluentResource(ftl));
}

function negotiatedBundles(locale: string): FluentBundle[] {
  const primary = bundleMap[locale as Locale] ?? bundleMap.en;
  return primary === bundleMap.en ? [bundleMap.en] : [primary, bundleMap.en];
}

// Scoped dynamic variant: nothing is bundled up front; every (locale,
// namespace) FTL is its own chunk, fetched the first time a route needs it.
const loaders = import.meta.glob<string>("../locales/*/*.ftl", {
  query: "?raw",
  import: "default",
});

/** Loads the shell's namespaces plus the page's one for `locale`. */
export async function loadRouteMessages(
  locale: string,
  pageNamespace: string
): Promise<void> {
  if (!(locales as readonly string[]).includes(locale)) return;
  await Promise.all(
    [...SHARED_NAMESPACES, pageNamespace].map(async (ns) => {
      const path = `../locales/${locale}/${ns}.ftl`;
      if (added.has(path) || !loaders[path]) return;
      addResource(path, await loaders[path]());
    })
  );
}

export const fluent = createFluentVue({
  bundles: negotiatedBundles("en"),
});

export function syncFluentBundles(locale: string): void {
  fluent.bundles = negotiatedBundles(locale);
}

export default fluent;
