import enShared from "./src/_gt/en/shared.json";
import frShared from "./src/_gt/fr/shared.json";
import deShared from "./src/_gt/de/shared.json";
import esShared from "./src/_gt/es/shared.json";
import itShared from "./src/_gt/it/shared.json";
import jaShared from "./src/_gt/ja/shared.json";
import koShared from "./src/_gt/ko/shared.json";
import ptShared from "./src/_gt/pt/shared.json";
import ruShared from "./src/_gt/ru/shared.json";
import zhShared from "./src/_gt/zh/shared.json";

const translationsMap: Record<string, Record<string, string>> = {
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
