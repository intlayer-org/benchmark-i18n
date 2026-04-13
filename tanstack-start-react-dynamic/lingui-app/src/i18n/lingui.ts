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

export async function getMessages(
  locale: string,
  namespaces: string[] = ["shared", "route"],
) {
  const allMessages: Record<string, any> = {};

  await Promise.all(
    namespaces.map(async (ns) => {
      try {
        const module = await import(`../locales/${locale}/${ns}.mjs`);
        Object.assign(allMessages, module.messages);
      } catch (e) {
        console.warn(`Could not load namespace ${ns} for locale ${locale}`);
      }
    }),
  );

  return allMessages;
}

export function initLingui(locale: string, messages: any) {
  const lingui = setupI18n();
  lingui.load(locale, messages);
  lingui.activate(locale);
  return lingui;
}
