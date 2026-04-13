import { Tolgee, DevTools, FormatSimple } from "@tolgee/web";
import { getMessages } from "./getMessages";
import { locales } from "./config";

// Generate root objects for every locale (e.g., { en: {...messages}, fr: {...messages}, de: {...messages} })
export const rootLocales = locales.reduce(
  (acc, lang) => {
    acc[lang] = getMessages(lang);
    return acc;
  },
  {} as Record<string, any>,
);

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
    // Provide local translation files for production fallback (namespace-split)
    staticData: rootLocales,
  });
