import i18next from "i18next";
import type { i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "./config";

export const defaultNS = "shared";
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
];

export function createI18n(locale: string = defaultLocale) {
  const instance = i18next.createInstance();
  instance.use(initReactI18next).init({
    resources: {},
    lng: locale,
    fallbackLng: defaultLocale,

    ns: namespaces,
    defaultNS,

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  return instance;
}

const defaultI18n = createI18n();

export async function loadNamespaces(
  locale: string,
  nsList: string[],
  i18nInstance: i18n = defaultI18n,
): Promise<Record<string, Record<string, unknown>>> {
  const result: Record<string, Record<string, unknown>> = {};
  await Promise.all(
    nsList.map(async (ns) => {
      const messages = await import(`./locales/${locale}/${ns}.json`);
      result[ns] = messages.default;
      i18nInstance.addResourceBundle(locale, ns, messages.default, true, true);
    }),
  );

  return result;
}

export default defaultI18n;
