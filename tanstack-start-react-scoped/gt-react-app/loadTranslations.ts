import en from "./src/_gt/en.json";
import fr from "./src/_gt/fr.json";
import de from "./src/_gt/de.json";
import es from "./src/_gt/es.json";
import it from "./src/_gt/it.json";
import ja from "./src/_gt/ja.json";
import ko from "./src/_gt/ko.json";
import pt from "./src/_gt/pt.json";
import ru from "./src/_gt/ru.json";
import zh from "./src/_gt/zh.json";

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
