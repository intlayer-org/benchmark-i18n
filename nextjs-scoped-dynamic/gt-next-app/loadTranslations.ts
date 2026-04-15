const locales = ["en", "fr", "de", "es", "it", "ja", "ko", "pt", "ru", "zh"];

export default async function loadTranslations(locale: string) {
  const safeLocale = locales.includes(locale) ? locale : "en";
  try {
    const module = await import(`./src/_gt/${safeLocale}/shared.json`);
    return module.default as Record<string, string>;
  } catch {
    const fallback = await import("./src/_gt/en/shared.json");
    return fallback.default as Record<string, string>;
  }
}
