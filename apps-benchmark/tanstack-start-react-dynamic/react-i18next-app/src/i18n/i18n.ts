import i18n from "i18next";
import { defaultLocale } from "./config";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export const defaultNS = "translation";

i18n
  .use(initReactI18next) // 2. Pass the instance to react-i18next
  .use(
    resourcesToBackend(
      (language: string) => import(`./locales/${language}.json`),
    ),
  )
  .init({
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
