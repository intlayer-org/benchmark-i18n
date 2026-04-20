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
  loadLocaleFrom: async (lang, ns) => {
    const locale = lang ?? "en";
    const safeLocale = locales.includes(locale) ? locale : "en";
    const namespace = ns || "common";

    try {
      const module = await import(`./locales/${safeLocale}/${namespace}.json`, {
        with: { type: "json" },
      });
      const translations = {};
      for (const [key, value] of Object.entries(module.default)) {
        translations[`${namespace}.${key}`] = value;
      }
      return translations;
    } catch {
      try {
        const fallbackModule = await import(`./locales/en/${namespace}.json`, {
          with: { type: "json" },
        });
        const translations = {};
        for (const [key, value] of Object.entries(fallbackModule.default)) {
          translations[`${namespace}.${key}`] = value;
        }
        return translations;
      } catch (e) {
        console.error(`Failed to load namespace ${namespace} for locale ${safeLocale}:`, e);
        return {};
      }
    }
  },
};
