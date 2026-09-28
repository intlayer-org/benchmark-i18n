import { createI18n } from "vue-i18n";

// Scoped variant: the app shell's namespaces are bundled up front; each page
// brings its own namespace (for every locale) in its chunk — see useNamespace.
const sharedModules = import.meta.glob<Record<string, unknown>>(
  "../../locales/*/{shared,header,footer,themeToggle,notFound,_root}.json",
  { eager: true, import: "default" }
);

const messages: Record<string, Record<string, unknown>> = {};
for (const [path, data] of Object.entries(sharedModules)) {
  const [, locale, ns] = path.match(/locales\/(\w+)\/(\w+)\.json$/)!;
  const target = (messages[locale] ??= {});
  if (ns === "_root") Object.assign(target, data);
  else target[ns] = data;
}

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

const merged = new Set<string>();

/**
 * Registers a page namespace for every locale. Pages call it with an eager
 * `import.meta.glob` of their own `locales/*\/<ns>.json`, so the messages live
 * in the page chunk instead of the entry chunk.
 */
export function useNamespace(
  ns: string,
  modules: Record<string, Record<string, unknown>>
): void {
  if (merged.has(ns)) return;
  merged.add(ns);
  for (const [path, data] of Object.entries(modules)) {
    const locale = path.match(/locales\/(\w+)\//)![1];
    i18n.global.mergeLocaleMessage(locale as never, { [ns]: data } as never);
  }
}

export default i18n;
