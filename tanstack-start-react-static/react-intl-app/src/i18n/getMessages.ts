// import.meta.glob tells Vite about all locale files at build time, so they are
// correctly included in both client and server bundles. A plain dynamic import
// with a template-literal path generates hashed chunk references that the SSR
// server cannot resolve at runtime.
const messageModules = import.meta.glob("../messages/*.json");

export async function getMessages(locale: string) {
  const moduleLoader =
    messageModules[`../messages/${locale}.json`] ??
    messageModules["../messages/en.json"];

  try {
    const module = (await moduleLoader()) as { default: Record<string, string> };
    return module.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    const fallback = (await messageModules["../messages/en.json"]()) as {
      default: Record<string, string>;
    };
    return fallback.default;
  }
}
