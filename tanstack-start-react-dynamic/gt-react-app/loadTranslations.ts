export default async function loadTranslations(locale: string) {
  try {
    console.log(`--- loadTranslations: importing ./src/_gt/${locale}.json`);
    const translations = await import(`./src/_gt/${locale}.json`);
    console.log(
      `--- loadTranslations: loaded ${Object.keys(translations.default).length} keys`,
    );
    return translations.default;
  } catch (e) {
    console.error(`Failed to load translations for locale: ${locale}`, e);
    return {};
  }
}
