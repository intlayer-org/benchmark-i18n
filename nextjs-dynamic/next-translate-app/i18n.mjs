import en from "./locales/en.json" with { type: "json" };
import fr from "./locales/fr.json" with { type: "json" };
import es from "./locales/es.json" with { type: "json" };
import de from "./locales/de.json" with { type: "json" };
import it from "./locales/it.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };
import zh from "./locales/zh.json" with { type: "json" };
import ja from "./locales/ja.json" with { type: "json" };
import ko from "./locales/ko.json" with { type: "json" };
import ru from "./locales/ru.json" with { type: "json" };

const translationsMap = {
  en,
  fr,
  es,
  de,
  it,
  pt,
  zh,
  ja,
  ko,
  ru,
};

/** @type {import('next-translate').I18nConfig} */
export default {
  locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
  defaultLocale: "en",
  keySeparator: false,
  nsSeparator: false,
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: async (lang) => translationsMap[lang],
};
