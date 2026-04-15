const translationModules = import.meta.glob("./src/_gt/*.json");

export default async function loadTranslations(locale: string) {
  try {
    const importFn = translationModules[`./src/_gt/${locale}.json`];
    if (!importFn) {
      console.warn(`Translation missing for ${locale}`);
      return {};
    }

    const translations: any = await importFn();
    return translations.default || translations;
  } catch (e) {
    console.error(`Failed to load translations for locale: ${locale}`, e);
    return {};
  }
}
