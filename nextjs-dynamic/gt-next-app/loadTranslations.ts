import en from "./public/_gt/en.json";
import fr from "./public/_gt/fr.json";
import de from "./public/_gt/de.json";
import es from "./public/_gt/es.json";
import it from "./public/_gt/it.json";
import ja from "./public/_gt/ja.json";
import ko from "./public/_gt/ko.json";
import pt from "./public/_gt/pt.json";
import ru from "./public/_gt/ru.json";
import zh from "./public/_gt/zh.json";

const translationsMap: Record<string, any> = {
  en,
  fr,
  de,
  es,
  it,
  ja,
  ko,
  pt,
  ru,
  zh,
};

export default async function loadTranslations(locale: string) {
  return translationsMap[locale] || translationsMap["en"];
}
