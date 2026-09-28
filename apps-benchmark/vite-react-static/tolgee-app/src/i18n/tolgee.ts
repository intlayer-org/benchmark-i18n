import { Tolgee, FormatSimple } from "@tolgee/web";
import en from "./locales/en.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import pt from "./locales/pt.json";
import ru from "./locales/ru.json";
import zh from "./locales/zh.json";

export const tolgee = Tolgee()
  // Formatter for passing variables into translations
  .use(FormatSimple())
  .init({
    language: "en",
    // Required for the DevTools to connect to your project
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
    // Provide local translation files for production fallback
    staticData: {
      en,
      de,
      es,
      fr,
      it,
      ja,
      ko,
      pt,
      ru,
      zh,
    },
  });
