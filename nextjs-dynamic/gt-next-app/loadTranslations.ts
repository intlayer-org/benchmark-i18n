export default async function loadTranslations(locale: string) {
  try {
    const mod = await import(`./src/_gt/${locale}.json`);
    return (mod as { default?: unknown }).default ?? mod;
  } catch (e) {
    console.error(`Failed to load translations for locale: ${locale}`, e);
    try {
      const fallback = await import("./src/_gt/en.json");
      return (fallback as { default?: unknown }).default ?? fallback;
    } catch {
      return {};
    }
  }
}
