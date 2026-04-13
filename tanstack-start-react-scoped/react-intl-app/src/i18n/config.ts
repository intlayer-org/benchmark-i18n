export const defaultLocale = "en";
export const locales = ["en", "de", "fr", "es", "ja", "zh", "ko", "it", "pt", "ru"] as const;
export type Locale = (typeof locales)[number];
