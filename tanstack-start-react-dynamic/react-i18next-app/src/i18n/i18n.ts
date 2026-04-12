import i18n from "i18next";
import { defaultLocale } from "./config";

i18n.init({
  resources: {},
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
