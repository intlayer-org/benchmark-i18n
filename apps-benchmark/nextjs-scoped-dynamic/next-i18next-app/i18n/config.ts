export const defaultLocale = "en";

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

export function getLocaleName(locale: string): string {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "language" });
    const name = displayNames.of(locale);
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
  } catch (e) {
    return locale.toUpperCase();
  }
}

export const namespaces = [
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "home",
  "pricing",
  "products",
  "route",
  "settings",
  "shared",
  "team",
] as const;

export type Namespace = (typeof namespaces)[number];

export const defaultNS: Namespace = "shared";
