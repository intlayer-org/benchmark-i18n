import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "./config";
import { messageModules } from "./getMessages";

// We initialize with resources already loaded synchronously
i18n.use(initReactI18next).init({
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  resources: messageModules,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  keySeparator: false,
});

export const loadNamespaces = (locale: string, namespaces: string[]) => {
  // Namespaces are already loaded synchronously in init
};

export default i18n;
