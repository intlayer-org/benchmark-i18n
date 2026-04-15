export async function getMessages(locale: string) {
  try {
    const mod = await import(`../messages/${locale}.json`);
    return (mod as { default: Record<string, unknown> }).default;
  } catch {
    const mod = await import("../messages/en.json");
    return mod.default;
  }
}
