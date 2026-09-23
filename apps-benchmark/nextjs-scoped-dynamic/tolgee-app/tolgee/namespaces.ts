/** Namespace name → that namespace's nested messages. */
export type Messages = Record<string, Record<string, unknown>>;

const loadedMessages: Record<string, Messages> = {};

/**
 * Adds namespaces to the single per-locale record tolgee reads keys from
 * (`aboutHeader.x` lives in the default namespace), returning the merged record.
 *
 * `addStaticData` replaces a locale's record wholesale, so the layout (shared
 * namespaces) and each page (its own namespaces) must both pass the accumulated
 * record — otherwise whichever runs last evicts the other's keys.
 */
export function mergeMessages(locale: string, messages: Messages): Messages {
  loadedMessages[locale] = { ...loadedMessages[locale], ...messages };
  return loadedMessages[locale];
}
