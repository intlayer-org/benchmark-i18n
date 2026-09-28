import de from "../messages/de.ts";
import en from "../messages/en.ts";
import es from "../messages/es.ts";
import fr from "../messages/fr.ts";
import it from "../messages/it.ts";
import ja from "../messages/ja.ts";
import ko from "../messages/ko.ts";
import pt from "../messages/pt.ts";
import ru from "../messages/ru.ts";
import zh from "../messages/zh.ts";

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
