/** Namespace name → that namespace's nested messages. */
export type Messages = Record<string, Record<string, unknown>>;

// Scoped static: every locale × namespace file is bundled up front.
const catalogs = import.meta.glob<Record<string, unknown>>(
  "./locales/*/*.json",
  { eager: true, import: "default" },
);

export const messageModules: Record<string, Messages> = {};
for (const [path, messages] of Object.entries(catalogs)) {
  const [, locale, namespace] = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.json$/)!;
  (messageModules[locale] ??= {})[namespace] = messages;
}

export function getMessages(locale: string): Messages {
  return messageModules[locale] ?? messageModules.en;
}
