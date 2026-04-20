import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { defaultLocale, type Namespace, defaultNS } from "./config";

const backend = resourcesToBackend(
  (locale: string, namespace: string) =>
    import(`./locales/${locale}/${namespace}.json`),
);

export async function initI18next(
  locale: string,
  ns: Namespace[] = [defaultNS],
) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(backend)
    .init({
      lng: locale,
      fallbackLng: defaultLocale,
      ns: ns as string[],
      defaultNS: defaultNS as string,
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });

  return i18nInstance;
}
