import { setupI18n } from "@lingui/core";
import en from "../locales/en/messages.mjs";
import fr from "../locales/fr/messages.mjs";
import es from "../locales/es/messages.mjs";
import de from "../locales/de/messages.mjs";
import it from "../locales/it/messages.mjs";
import pt from "../locales/pt/messages.mjs";
import zh from "../locales/zh/messages.mjs";
import ja from "../locales/ja/messages.mjs";
import ko from "../locales/ko/messages.mjs";
import ru from "../locales/ru/messages.mjs";

export const locales = [
  "en",
  "fr",
  "es",
  "de",
  "it",
  "pt",
  "zh",
  "ja",
  "ko",
  "ru",
] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function getLocaleName(locale: string): string {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "language" });
    const name = displayNames.of(locale);
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
  } catch (e) {
    return locale.toUpperCase();
  }
}

const messageModules: Record<string, any> = {
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

export function getMessages(locale: string) {
  const module = messageModules[locale] || messageModules[defaultLocale];

  return module.messages;
}

export function initLingui(locale: string, messages: any) {
  const lingui = setupI18n();
  lingui.load(locale, messages);
  lingui.activate(locale);
  return lingui;
}
