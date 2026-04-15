export async function getMessages(locale: string) {
  const module = await import(`./locales/${locale}.json`);
  return module.default;
}
