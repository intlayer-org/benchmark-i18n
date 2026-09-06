import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "./config";

export const defaultNS = "translation";

// The compat plugin aliases `i18next` to `@intlayer/i18next`, which serves
// translations from the compiled intlayer dictionaries. The per-locale JSON
// files are still the content source, but they are read at build time by the
// `syncJSON` plugin rather than imported into the bundle — so no `resources`
// option here (it would be ignored, and would re-bundle every locale).
i18n.use(initReactI18next).init({
  lng: defaultLocale,
  fallbackLng: defaultLocale,

  interpolation: {
    escapeValue: false, // React already escapes
  },
  react: {
    useSuspense: false,
  },
  keySeparator: false,
  nsSeparator: false,
});

export default i18n;
