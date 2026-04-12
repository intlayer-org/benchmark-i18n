import { Tolgee, DevTools, FormatSimple } from "@tolgee/web";

export const tolgee = Tolgee()
  // Enables in-context editing (ALT + Click) in development
  .use(DevTools())
  // Formatter for passing variables into translations
  .use(FormatSimple())
  .init({
    language: "en",
    // Required for the DevTools to connect to your project
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
    // Provide local translation files for production fallback
    staticData: {
      en: () => import("./locales/en.json"),
      fr: () => import("./locales/fr.json"),
      es: () => import("./locales/es.json"),
      de: () => import("./locales/de.json"),
      it: () => import("./locales/it.json"),
      pt: () => import("./locales/pt.json"),
      zh: () => import("./locales/zh.json"),
      ja: () => import("./locales/ja.json"),
      ko: () => import("./locales/ko.json"),
      ru: () => import("./locales/ru.json"),
    },
  });
