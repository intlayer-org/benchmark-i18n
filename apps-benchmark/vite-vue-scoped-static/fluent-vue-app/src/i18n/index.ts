import { FluentBundle, FluentResource } from "@fluent/bundle";
import { createFluentVue } from "fluent-vue";
import { type Locale, locales } from "./config";

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

// Scoped variant: the shell's namespaces are bundled up front for every
// locale; each page brings its own namespace in its chunk (useNamespace).
const shared = import.meta.glob<string>(
  "../locales/*/{shared,header,footer,theme-toggle,mock-banner,not-found}.ftl",
  { eager: true, query: "?raw", import: "default" }
);
for (const [path, ftl] of Object.entries(shared)) addResource(path, ftl);

/**
 * Registers a page namespace for every locale. Pages call it with an eager
 * `import.meta.glob` of their own `locales/*\/<ns>.ftl`, so the messages live
 * in the page chunk instead of the entry chunk.
 */
export function useNamespace(modules: Record<string, string>): void {
  for (const [path, ftl] of Object.entries(modules)) addResource(path, ftl);
}

export const fluent = createFluentVue({
  bundles: negotiatedBundles("en"),
});

export function syncFluentBundles(locale: string): void {
  fluent.bundles = negotiatedBundles(locale);
}

export default fluent;
