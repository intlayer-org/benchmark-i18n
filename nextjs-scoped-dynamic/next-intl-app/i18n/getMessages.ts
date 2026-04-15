import type { AbstractIntlMessages } from "next-intl";

export const namespaces = [
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "home",
  "pricing",
  "products",
  "route",
  "settings",
  "shared",
  "team",
] as const;

export type Namespace = (typeof namespaces)[number];

type NamespaceMessages = Record<string, string>;
type NamespaceLoader = () => Promise<{ default: NamespaceMessages }>;
const namespaceLoaders: Record<string, Record<Namespace, NamespaceLoader>> = {
  en: {
    about: () => import("../messages/en/about.json"),
    blog: () => import("../messages/en/blog.json"),
    careers: () => import("../messages/en/careers.json"),
    contact: () => import("../messages/en/contact.json"),
    faq: () => import("../messages/en/faq.json"),
    home: () => import("../messages/en/home.json"),
    pricing: () => import("../messages/en/pricing.json"),
    products: () => import("../messages/en/products.json"),
    route: () => import("../messages/en/route.json"),
    settings: () => import("../messages/en/settings.json"),
    shared: () => import("../messages/en/shared.json"),
    team: () => import("../messages/en/team.json"),
  },
  fr: {
    about: () => import("../messages/fr/about.json"),
    blog: () => import("../messages/fr/blog.json"),
    careers: () => import("../messages/fr/careers.json"),
    contact: () => import("../messages/fr/contact.json"),
    faq: () => import("../messages/fr/faq.json"),
    home: () => import("../messages/fr/home.json"),
    pricing: () => import("../messages/fr/pricing.json"),
    products: () => import("../messages/fr/products.json"),
    route: () => import("../messages/fr/route.json"),
    settings: () => import("../messages/fr/settings.json"),
    shared: () => import("../messages/fr/shared.json"),
    team: () => import("../messages/fr/team.json"),
  },
  es: {
    about: () => import("../messages/es/about.json"),
    blog: () => import("../messages/es/blog.json"),
    careers: () => import("../messages/es/careers.json"),
    contact: () => import("../messages/es/contact.json"),
    faq: () => import("../messages/es/faq.json"),
    home: () => import("../messages/es/home.json"),
    pricing: () => import("../messages/es/pricing.json"),
    products: () => import("../messages/es/products.json"),
    route: () => import("../messages/es/route.json"),
    settings: () => import("../messages/es/settings.json"),
    shared: () => import("../messages/es/shared.json"),
    team: () => import("../messages/es/team.json"),
  },
  de: {
    about: () => import("../messages/de/about.json"),
    blog: () => import("../messages/de/blog.json"),
    careers: () => import("../messages/de/careers.json"),
    contact: () => import("../messages/de/contact.json"),
    faq: () => import("../messages/de/faq.json"),
    home: () => import("../messages/de/home.json"),
    pricing: () => import("../messages/de/pricing.json"),
    products: () => import("../messages/de/products.json"),
    route: () => import("../messages/de/route.json"),
    settings: () => import("../messages/de/settings.json"),
    shared: () => import("../messages/de/shared.json"),
    team: () => import("../messages/de/team.json"),
  },
  it: {
    about: () => import("../messages/it/about.json"),
    blog: () => import("../messages/it/blog.json"),
    careers: () => import("../messages/it/careers.json"),
    contact: () => import("../messages/it/contact.json"),
    faq: () => import("../messages/it/faq.json"),
    home: () => import("../messages/it/home.json"),
    pricing: () => import("../messages/it/pricing.json"),
    products: () => import("../messages/it/products.json"),
    route: () => import("../messages/it/route.json"),
    settings: () => import("../messages/it/settings.json"),
    shared: () => import("../messages/it/shared.json"),
    team: () => import("../messages/it/team.json"),
  },
  pt: {
    about: () => import("../messages/pt/about.json"),
    blog: () => import("../messages/pt/blog.json"),
    careers: () => import("../messages/pt/careers.json"),
    contact: () => import("../messages/pt/contact.json"),
    faq: () => import("../messages/pt/faq.json"),
    home: () => import("../messages/pt/home.json"),
    pricing: () => import("../messages/pt/pricing.json"),
    products: () => import("../messages/pt/products.json"),
    route: () => import("../messages/pt/route.json"),
    settings: () => import("../messages/pt/settings.json"),
    shared: () => import("../messages/pt/shared.json"),
    team: () => import("../messages/pt/team.json"),
  },
  zh: {
    about: () => import("../messages/zh/about.json"),
    blog: () => import("../messages/zh/blog.json"),
    careers: () => import("../messages/zh/careers.json"),
    contact: () => import("../messages/zh/contact.json"),
    faq: () => import("../messages/zh/faq.json"),
    home: () => import("../messages/zh/home.json"),
    pricing: () => import("../messages/zh/pricing.json"),
    products: () => import("../messages/zh/products.json"),
    route: () => import("../messages/zh/route.json"),
    settings: () => import("../messages/zh/settings.json"),
    shared: () => import("../messages/zh/shared.json"),
    team: () => import("../messages/zh/team.json"),
  },
  ja: {
    about: () => import("../messages/ja/about.json"),
    blog: () => import("../messages/ja/blog.json"),
    careers: () => import("../messages/ja/careers.json"),
    contact: () => import("../messages/ja/contact.json"),
    faq: () => import("../messages/ja/faq.json"),
    home: () => import("../messages/ja/home.json"),
    pricing: () => import("../messages/ja/pricing.json"),
    products: () => import("../messages/ja/products.json"),
    route: () => import("../messages/ja/route.json"),
    settings: () => import("../messages/ja/settings.json"),
    shared: () => import("../messages/ja/shared.json"),
    team: () => import("../messages/ja/team.json"),
  },
  ko: {
    about: () => import("../messages/ko/about.json"),
    blog: () => import("../messages/ko/blog.json"),
    careers: () => import("../messages/ko/careers.json"),
    contact: () => import("../messages/ko/contact.json"),
    faq: () => import("../messages/ko/faq.json"),
    home: () => import("../messages/ko/home.json"),
    pricing: () => import("../messages/ko/pricing.json"),
    products: () => import("../messages/ko/products.json"),
    route: () => import("../messages/ko/route.json"),
    settings: () => import("../messages/ko/settings.json"),
    shared: () => import("../messages/ko/shared.json"),
    team: () => import("../messages/ko/team.json"),
  },
  ru: {
    about: () => import("../messages/ru/about.json"),
    blog: () => import("../messages/ru/blog.json"),
    careers: () => import("../messages/ru/careers.json"),
    contact: () => import("../messages/ru/contact.json"),
    faq: () => import("../messages/ru/faq.json"),
    home: () => import("../messages/ru/home.json"),
    pricing: () => import("../messages/ru/pricing.json"),
    products: () => import("../messages/ru/products.json"),
    route: () => import("../messages/ru/route.json"),
    settings: () => import("../messages/ru/settings.json"),
    shared: () => import("../messages/ru/shared.json"),
    team: () => import("../messages/ru/team.json"),
  },
};

async function loadNamespace(locale: string, namespace: Namespace): Promise<NamespaceMessages> {
  const loader = namespaceLoaders[locale]?.[namespace] ?? namespaceLoaders.en[namespace];
  const module = await loader();
  return module.default;
}

function nestify(flat: Record<string, string>): Record<string, unknown> {
  const root: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split(".");
    let cur: Record<string, unknown> = root;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      const next = cur[p];
      if (typeof next !== "object" || next === null || Array.isArray(next)) {
        cur[p] = {};
      }
      cur = cur[p] as Record<string, unknown>;
    }
    cur[parts[parts.length - 1]] = value;
  }
  return root;
}

function deepMerge(
  a: Record<string, unknown>,
  b: Record<string, unknown>
): Record<string, unknown> {
  const out: Record<string, unknown> = { ...a };
  for (const [k, v] of Object.entries(b)) {
    const existing = out[k];
    if (
      v !== null &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      existing !== null &&
      typeof existing === "object" &&
      !Array.isArray(existing)
    ) {
      out[k] = deepMerge(
        existing as Record<string, unknown>,
        v as Record<string, unknown>
      );
    } else {
      out[k] = v;
    }
  }
  return out;
}

function mergeAll(parts: Record<string, unknown>[]): Record<string, unknown> {
  return parts.reduce(
    (acc, p) => deepMerge(acc, p),
    {} as Record<string, unknown>
  );
}

/**
 * Get messages for a specific locale, filtered by namespaces.
 * Always includes "shared" namespace (header, footer, theme-toggle).
 */
export async function getMessages(
  locale: string,
  requestedNamespaces: readonly Namespace[]
): Promise<AbstractIntlMessages> {
  const nsSet = new Set<Namespace>(requestedNamespaces);
  nsSet.add("shared");

  const parts: Record<string, unknown>[] = [];
  for (const ns of nsSet) {
    const nsMessages = await loadNamespace(locale, ns);
    parts.push(nestify(nsMessages));
  }

  return mergeAll(parts) as AbstractIntlMessages;
}

/**
 * Get all messages for a locale (for backward compatibility).
 */
export async function getAllMessages(locale: string): Promise<AbstractIntlMessages> {
  return getMessages(locale, namespaces);
}
