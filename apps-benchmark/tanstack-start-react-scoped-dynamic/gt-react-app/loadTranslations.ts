const translationModules = import.meta.glob("./src/_gt/*/*.json");

export default async function loadTranslations(
  locale: string,
  namespaces: string[] = ["shared"],
) {
  let merged: Record<string, string> = {};
  await Promise.all(
    namespaces.map(async (ns) => {
      const key = `./src/_gt/${locale}/${ns}.json`;
      const importFn = translationModules[key];
      if (!importFn) {
        console.warn(`Translation missing for ${locale}/${ns}`);
        return;
      }
      const mod: any = await importFn();
      merged = { ...merged, ...(mod.default || mod) };
    }),
  );
  return merged;
}
