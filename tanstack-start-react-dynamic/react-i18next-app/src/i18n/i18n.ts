import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "./config";

i18n.use(initReactI18next).init({
  resources: {},
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
