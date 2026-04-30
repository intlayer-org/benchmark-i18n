import { createSignal } from "solid-js";
import { flatten, translator, resolveTemplate } from "@solid-primitives/i18n";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";
import de from "../locales/de.json";
import it from "../locales/it.json";
import pt from "../locales/pt.json";
import zh from "../locales/zh.json";
import ja from "../locales/ja.json";
import ko from "../locales/ko.json";
import ru from "../locales/ru.json";

const dicts = {
  en: flatten(en),
  fr: flatten(fr),
  es: flatten(es),
  de: flatten(de),
  it: flatten(it),
  pt: flatten(pt),
  zh: flatten(zh),
  ja: flatten(ja),
  ko: flatten(ko),
  ru: flatten(ru),
};

export type PrimitiveLocale =
  | "en"
  | "fr"
  | "es"
  | "de"
  | "it"
  | "pt"
  | "zh"
  | "ja"
  | "ko"
  | "ru";
export const [locale, setLocale] = createSignal<PrimitiveLocale>("en");

export const t = translator(() => dicts[locale()], resolveTemplate);
