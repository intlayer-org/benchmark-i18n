import { i18n, setupI18n } from "@lingui/core";

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

// import.meta.glob tells Vite about all locale files at build time, so they are
// correctly included in both client and server bundles.
const messageModules = import.meta.glob("../locales/*/messages.json");

export async function loadMessages(locale: string) {
  const path = `../locales/${locale}/messages.json`;
  const moduleLoader =
    messageModules[path] ||
    messageModules[`../locales/${defaultLocale}/messages.json`];

  try {
    const module = (await moduleLoader()) as { default: any };
    return module.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    const fallback = (await messageModules[
      `../locales/${defaultLocale}/messages.json`
    ]()) as { default: any };
    return fallback.default;
  }
}

export function initLingui(locale: string, messages: any) {
  const lingui = setupI18n();
  lingui.load(locale, messages);
  lingui.activate(locale);
  return lingui;
}
