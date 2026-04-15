const locales = ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"];

export async function getMessages(locale: string, namespaces: string[] = ["shared", "route"]) {
  const allMessages: Record<string, string> = {};
  
  for (const ns of namespaces) {
    try {
      const messages = await import(`../messages/${locale}/${ns}.json`);
      Object.assign(allMessages, messages.default);
    } catch (e) {
      console.warn(`Could not load namespace ${ns} for locale ${locale}`);
    }
  }
  
  return allMessages;
}
