const locales = ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"];
const namespaces = [
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "home",
  "pricing",
  "products",
  "route",
  "settings",
  "shared",
  "team",
];

/** @type {import('next-translate').I18nConfig} */
export default {
  locales,
  defaultLocale: "en",
  keySeparator: false,
  nsSeparator: false,
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: async (lang, namespace) => {
    const locale = lang ?? "en";
    const safeLocale = locales.includes(locale) ? locale : "en";

    const translations = {};
    for (const ns of namespaces) {
      try {
        const module = await import(`./locales/${safeLocale}/${ns}.json`, {
          with: { type: "json" },
        });
        for (const [key, value] of Object.entries(module.default)) {
          translations[`${ns}.${key}`] = value;
        }
      } catch {
        try {
          const fallbackModule = await import(`./locales/en/${ns}.json`, {
            with: { type: "json" },
          });
          for (const [key, value] of Object.entries(fallbackModule.default)) {
            translations[`${ns}.${key}`] = value;
          }
        } catch (e) {
          console.error(`Failed to load namespace ${ns} for locale ${safeLocale}:`, e);
        }
      }
    }
    return translations;
  },
};
