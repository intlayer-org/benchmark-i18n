export async function getMessages(locale: string) {
  const module = await import(`../messages/${locale}.json`);
  return module.default;
}
