import i18n, { type Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "./config";

export const namespaces = [
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "home",
  "pricing",
  "products",
  "route",
  "settings",
  "shared",
  "team",
] as const;

export type Namespace = (typeof namespaces)[number];

export const defaultNS: Namespace = "shared";
const localeNamespaces = new Set<string>();

async function loadNamespaceMessages(
  locale: string,
  namespace: Namespace
): Promise<Record<string, string>> {
  const safeLocale = locale || defaultLocale;
  try {
    const module = await import(`./locales/${safeLocale}/${namespace}.json`);
    return module.default as Record<string, string>;
  } catch {
    if (safeLocale === defaultLocale) {
      return {};
    }
    const fallbackModule = await import(`./locales/${defaultLocale}/${namespace}.json`);
    return fallbackModule.default as Record<string, string>;
  }
}

export async function preloadNamespaces(
  locale: string,
  requestedNamespaces: readonly Namespace[] = namespaces
) {
  const safeLocale = locale || defaultLocale;
  for (const namespace of requestedNamespaces) {
    const cacheKey = `${safeLocale}:${namespace}`;
    if (localeNamespaces.has(cacheKey)) {
      continue;
    }
    const messages = await loadNamespaceMessages(safeLocale, namespace);
    i18n.addResourceBundle(safeLocale, namespace, messages, true, true);
    localeNamespaces.add(cacheKey);
  }
}

i18n.use(initReactI18next).init({
  resources: {} as Resource,
  lng: defaultLocale,
  fallbackLng: defaultLocale,

  ns: namespaces as unknown as string[],
  defaultNS,

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

void preloadNamespaces(defaultLocale, namespaces);

export default i18n;
