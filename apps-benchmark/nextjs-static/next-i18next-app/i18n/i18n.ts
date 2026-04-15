import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "./config";

import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import pt from "./locales/pt.json";
import ru from "./locales/ru.json";
import zh from "./locales/zh.json";

export const defaultNS = "translation";

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    it: { translation: it },
    ja: { translation: ja },
    ko: { translation: ko },
    pt: { translation: pt },
    ru: { translation: ru },
    zh: { translation: zh },
  },
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
