import { setupI18n } from "@lingui/core";

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

export async function getMessages(locale: string) {
  try {
    const mod = await import(`../locales/${locale}/messages.mjs`);
    return mod.messages;
  } catch (e) {
    console.warn(`Could not load messages for locale ${locale}`, e);
    const mod = await import(`../locales/en/messages.mjs`);
    return mod.messages;
  }
}

export function initLingui(locale: string, messages: any) {
  const lingui = setupI18n();
  lingui.load(locale, messages);
  lingui.activate(locale);
  return lingui;
}
