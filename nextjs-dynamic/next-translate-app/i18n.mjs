/** @type {import('next-translate').I18nConfig} */
export default {
  locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  defaultLocale: "en",
  keySeparator: false,
  nsSeparator: false,
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: async (lang, _ns) => {
    const locale = lang ?? "en";
    try {
      const mod = await import(`./locales/${locale}.json`);
      return mod.default;
    } catch {
      const mod = await import("./locales/en.json");
      return mod.default;
    }
  },
};
