import de from "../messages/de.json";
import en from "../messages/en.json";
import es from "../messages/es.json";
import fr from "../messages/fr.json";
import it from "../messages/it.json";
import ja from "../messages/ja.json";
import ko from "../messages/ko.json";
import pt from "../messages/pt.json";
import ru from "../messages/ru.json";
import zh from "../messages/zh.json";

const messageModules: Record<string, any> = {
  de,
  en,
  es,
  fr,
  it,
  ja,
  ko,
  pt,
  ru,
  zh,
};

export function getMessages(locale: string) {
  return messageModules[locale] ?? messageModules["en"];
}
