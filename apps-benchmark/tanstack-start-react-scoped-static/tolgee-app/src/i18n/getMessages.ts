export async function getMessages(locale: string, namespaces: string[] = ["common"]) {
  const allMessages: Record<string, any> = {};
  
  for (const ns of namespaces) {
    try {
      const messages = await import(`./locales/${locale}/${ns}.json`);
      allMessages[ns] = messages.default;
    } catch (e) {
      console.warn(`Could not load namespace ${ns} for locale ${locale}`);
    }
  }
  
  return allMessages;
}
