import i18n, { type Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale, namespaces, type Namespace, defaultNS } from "./config";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
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

export default i18n;
