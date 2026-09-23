import { tolgee } from "./tolgee";

/** Namespace name → that namespace's nested messages. */
export type Messages = Record<string, Record<string, unknown>>;

// One lazy chunk per locale × namespace file.
const catalogs = import.meta.glob<Record<string, unknown>>(
  "./locales/*/*.json",
  { import: "default" },
);

export async function getMessages(
  locale: string,
  namespaces: string[],
): Promise<Messages> {
  const entries = await Promise.all(
    namespaces.map(async (namespace) => {
      const load =
        catalogs[`./locales/${locale}/${namespace}.json`] ??
        catalogs[`./locales/en/${namespace}.json`];
      return [namespace, load ? await load() : {}] as const;
    }),
  );
  return Object.fromEntries(entries);
}

const loadedMessages: Record<string, Messages> = {};

/**
 * Adds namespaces to the single per-locale record tolgee reads keys from
 * (`aboutHeader.x` lives in the default namespace), returning the merged record.
 *
 * `addStaticData` replaces a locale's record wholesale, so every caller has to
 * pass the accumulated one — otherwise a route's namespaces would evict the
 * layout's, or the other way round.
 */
export function mergeMessages(locale: string, messages: Messages): Messages {
  loadedMessages[locale] = { ...loadedMessages[locale], ...messages };
  return loadedMessages[locale];
}

/** Route loader helper: fetches a route's namespaces and hands them to tolgee. */
export async function loadNamespaces(locale: string, namespaces: string[]) {
  const messages = await getMessages(locale, namespaces);
  tolgee.addStaticData({ [locale]: mergeMessages(locale, messages) });
  return { messages };
}
