import { createI18n } from "vue-i18n";
import { locales } from "./config";

// Scoped dynamic variant: nothing is bundled up front; every (locale,
// namespace) pair is its own chunk, fetched the first time a route needs it.
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {},
});

/** Namespaces the app shell (Layout, Header, Footer…) renders on every page. */
const SHARED_NAMESPACES = [
  "shared",
  "header",
  "footer",
  "themeToggle",
  "notFound",
  "_root", // top-level leaf keys (mockBanner)
];

const messageLoaders = import.meta.glob<{ default: Record<string, unknown> }>(
  "../../locales/*/*.json"
);

const loaded = new Set<string>();

async function loadNamespace(locale: string, ns: string): Promise<void> {
  const id = `${locale}/${ns}`;
  if (loaded.has(id)) return;
  const loader = messageLoaders[`../../locales/${id}.json`];
  if (!loader) return;
  const messages = await loader();
  const data = ns === "_root" ? messages.default : { [ns]: messages.default };
  i18n.global.mergeLocaleMessage(locale as never, data as never);
  loaded.add(id);
}

/** Loads the shell's namespaces plus the page's one for `locale`. */
export async function loadRouteMessages(
  locale: string,
  pageNamespace: string
): Promise<void> {
  if (!(locales as readonly string[]).includes(locale)) return;
  await Promise.all(
    [...SHARED_NAMESPACES, pageNamespace].map((ns) => loadNamespace(locale, ns))
  );
}

export default i18n;
