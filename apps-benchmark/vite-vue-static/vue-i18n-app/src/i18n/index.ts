import { createI18n } from "vue-i18n";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";
import es from "../../locales/es.json";
import de from "../../locales/de.json";
import it from "../../locales/it.json";
import pt from "../../locales/pt.json";
import zh from "../../locales/zh.json";
import ja from "../../locales/ja.json";
import ko from "../../locales/ko.json";
import ru from "../../locales/ru.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
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
  },
});

export default i18n;
