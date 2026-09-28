export async function getMessages(locale: string) {
  const module = await import(`../messages/${locale}.ts`);
  return module.default;
}
