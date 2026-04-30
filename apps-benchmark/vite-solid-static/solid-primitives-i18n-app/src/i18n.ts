import { createSignal } from "solid-js";
import { flatten, translator, resolveTemplate } from "@solid-primitives/i18n";
import translations from "../locales/translations.json";

const dicts = {
  en: flatten(translations.en),
  fr: flatten(translations.fr),
  es: flatten(translations.es),
  de: flatten(translations.de),
  it: flatten(translations.it),
  pt: flatten(translations.pt),
  zh: flatten(translations.zh),
  ja: flatten(translations.ja),
  ko: flatten(translations.ko),
  ru: flatten(translations.ru),
};

export type PrimitiveLocale = "en" | "fr" | "es" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ru";
export const [locale, setLocale] = createSignal<PrimitiveLocale>("en");

export const t = translator(() => dicts[locale()], resolveTemplate);
