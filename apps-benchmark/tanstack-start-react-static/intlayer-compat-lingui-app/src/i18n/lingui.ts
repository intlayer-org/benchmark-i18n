import { setupI18n } from "@lingui/core";

export const locales = [
  "en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru",
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

// `@lingui/core` resolves to `@intlayer/lingui` here, which serves messages
// from the compiled intlayer `messages` dictionary. The per-locale catalogs are
// still the content source, but syncJSON reads them at build time instead of
// the app importing them — so there is nothing left to `load()`.
export function getMessages(_locale: string) {
  return {};
}

export function initLingui(locale: string, _messages?: unknown) {
  const lingui = setupI18n();
  lingui.activate(locale);
  return lingui;
}
