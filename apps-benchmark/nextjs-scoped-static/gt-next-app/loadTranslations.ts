import enShared from "./public/_gt/en.json";
import frShared from "./public/_gt/fr.json";
import deShared from "./public/_gt/de.json";
import esShared from "./public/_gt/es.json";
import itShared from "./public/_gt/it.json";
import jaShared from "./public/_gt/ja.json";
import koShared from "./public/_gt/ko.json";
import ptShared from "./public/_gt/pt.json";
import ruShared from "./public/_gt/ru.json";
import zhShared from "./public/_gt/zh.json";

const translationsMap: Record<string, any> = {
  en: { ...enShared },
  fr: { ...frShared },
  de: { ...deShared },
  es: { ...esShared },
  it: { ...itShared },
  ja: { ...jaShared },
  ko: { ...koShared },
  pt: { ...ptShared },
  ru: { ...ruShared },
  zh: { ...zhShared },
};

export default async function loadTranslations(locale: string) {
  return translationsMap[locale] || translationsMap["en"];
}
