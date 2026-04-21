import { setupI18n, type Messages } from "@lingui/core";

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

/** Layout shell: header, footer, theme, mock banner, not-found copy. */
export const LINGUI_LAYOUT_NAMESPACES = ["shared", "route"] as const;

/**
 * Per-route compiled catalogs under `locales/{locale}/<name>.mjs`.
 * Used by pages via `loadNamespaces` and by measurement scripts that need a full merge.
 */
export const LINGUI_PAGE_NAMESPACES = [
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "home",
  "pricing",
  "products",
  "settings",
  "team",
] as const;

/** All split catalogs (layout + pages) — scripts only; do not load this set in the root layout. */
export const LINGUI_ALL_NAMESPACES = [
  ...LINGUI_LAYOUT_NAMESPACES,
  ...LINGUI_PAGE_NAMESPACES,
] as const;

export function getLocaleName(locale: string): string {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "language" });
    const name = displayNames.of(locale);
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
  } catch (e) {
    return locale.toUpperCase();
  }
}

const allMessages = {} as Messages;
export async function loadNamespaces(
  locale: string,
  namespaces: readonly string[],
): Promise<Messages> {

  for (const ns of namespaces) {
    try {
      const { messages } = await import(`../locales/${locale}/${ns}.mjs`);
      Object.assign(allMessages, messages as Messages);
    } catch (error) {
      console.error(`Failed to load namespace: ${ns} for locale: ${locale}`, error);
    }
  }

  return allMessages;
}

export function initLingui(locale: string, messages: Messages) {
  const lingui = setupI18n();
  lingui.load(locale, messages);
  lingui.activate(locale);
  return lingui;
}
