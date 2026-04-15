import en from "../messages/en.json";
import fr from "../messages/fr.json";
import es from "../messages/es.json";
import de from "../messages/de.json";
import it from "../messages/it.json";
import pt from "../messages/pt.json";
import zh from "../messages/zh.json";
import ja from "../messages/ja.json";
import ko from "../messages/ko.json";
import ru from "../messages/ru.json";

const messages: Record<string, any> = {
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

export async function getMessages(locale: string) {
  return messages[locale] || messages.en;
}
