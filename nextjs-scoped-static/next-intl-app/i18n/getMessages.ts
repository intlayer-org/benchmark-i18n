import type { AbstractIntlMessages } from "next-intl";

import enAbout from "../messages/en/about.json";
import enBlog from "../messages/en/blog.json";
import enCareers from "../messages/en/careers.json";
import enContact from "../messages/en/contact.json";
import enFaq from "../messages/en/faq.json";
import enHome from "../messages/en/home.json";
import enPricing from "../messages/en/pricing.json";
import enProducts from "../messages/en/products.json";
import enRoute from "../messages/en/route.json";
import enSettings from "../messages/en/settings.json";
import enShared from "../messages/en/shared.json";
import enTeam from "../messages/en/team.json";
import frAbout from "../messages/fr/about.json";
import frBlog from "../messages/fr/blog.json";
import frCareers from "../messages/fr/careers.json";
import frContact from "../messages/fr/contact.json";
import frFaq from "../messages/fr/faq.json";
import frHome from "../messages/fr/home.json";
import frPricing from "../messages/fr/pricing.json";
import frProducts from "../messages/fr/products.json";
import frRoute from "../messages/fr/route.json";
import frSettings from "../messages/fr/settings.json";
import frShared from "../messages/fr/shared.json";
import frTeam from "../messages/fr/team.json";
import esAbout from "../messages/es/about.json";
import esBlog from "../messages/es/blog.json";
import esCareers from "../messages/es/careers.json";
import esContact from "../messages/es/contact.json";
import esFaq from "../messages/es/faq.json";
import esHome from "../messages/es/home.json";
import esPricing from "../messages/es/pricing.json";
import esProducts from "../messages/es/products.json";
import esRoute from "../messages/es/route.json";
import esSettings from "../messages/es/settings.json";
import esShared from "../messages/es/shared.json";
import esTeam from "../messages/es/team.json";
import deAbout from "../messages/de/about.json";
import deBlog from "../messages/de/blog.json";
import deCareers from "../messages/de/careers.json";
import deContact from "../messages/de/contact.json";
import deFaq from "../messages/de/faq.json";
import deHome from "../messages/de/home.json";
import dePricing from "../messages/de/pricing.json";
import deProducts from "../messages/de/products.json";
import deRoute from "../messages/de/route.json";
import deSettings from "../messages/de/settings.json";
import deShared from "../messages/de/shared.json";
import deTeam from "../messages/de/team.json";
import itAbout from "../messages/it/about.json";
import itBlog from "../messages/it/blog.json";
import itCareers from "../messages/it/careers.json";
import itContact from "../messages/it/contact.json";
import itFaq from "../messages/it/faq.json";
import itHome from "../messages/it/home.json";
import itPricing from "../messages/it/pricing.json";
import itProducts from "../messages/it/products.json";
import itRoute from "../messages/it/route.json";
import itSettings from "../messages/it/settings.json";
import itShared from "../messages/it/shared.json";
import itTeam from "../messages/it/team.json";
import ptAbout from "../messages/pt/about.json";
import ptBlog from "../messages/pt/blog.json";
import ptCareers from "../messages/pt/careers.json";
import ptContact from "../messages/pt/contact.json";
import ptFaq from "../messages/pt/faq.json";
import ptHome from "../messages/pt/home.json";
import ptPricing from "../messages/pt/pricing.json";
import ptProducts from "../messages/pt/products.json";
import ptRoute from "../messages/pt/route.json";
import ptSettings from "../messages/pt/settings.json";
import ptShared from "../messages/pt/shared.json";
import ptTeam from "../messages/pt/team.json";
import zhAbout from "../messages/zh/about.json";
import zhBlog from "../messages/zh/blog.json";
import zhCareers from "../messages/zh/careers.json";
import zhContact from "../messages/zh/contact.json";
import zhFaq from "../messages/zh/faq.json";
import zhHome from "../messages/zh/home.json";
import zhPricing from "../messages/zh/pricing.json";
import zhProducts from "../messages/zh/products.json";
import zhRoute from "../messages/zh/route.json";
import zhSettings from "../messages/zh/settings.json";
import zhShared from "../messages/zh/shared.json";
import zhTeam from "../messages/zh/team.json";
import jaAbout from "../messages/ja/about.json";
import jaBlog from "../messages/ja/blog.json";
import jaCareers from "../messages/ja/careers.json";
import jaContact from "../messages/ja/contact.json";
import jaFaq from "../messages/ja/faq.json";
import jaHome from "../messages/ja/home.json";
import jaPricing from "../messages/ja/pricing.json";
import jaProducts from "../messages/ja/products.json";
import jaRoute from "../messages/ja/route.json";
import jaSettings from "../messages/ja/settings.json";
import jaShared from "../messages/ja/shared.json";
import jaTeam from "../messages/ja/team.json";
import koAbout from "../messages/ko/about.json";
import koBlog from "../messages/ko/blog.json";
import koCareers from "../messages/ko/careers.json";
import koContact from "../messages/ko/contact.json";
import koFaq from "../messages/ko/faq.json";
import koHome from "../messages/ko/home.json";
import koPricing from "../messages/ko/pricing.json";
import koProducts from "../messages/ko/products.json";
import koRoute from "../messages/ko/route.json";
import koSettings from "../messages/ko/settings.json";
import koShared from "../messages/ko/shared.json";
import koTeam from "../messages/ko/team.json";
import ruAbout from "../messages/ru/about.json";
import ruBlog from "../messages/ru/blog.json";
import ruCareers from "../messages/ru/careers.json";
import ruContact from "../messages/ru/contact.json";
import ruFaq from "../messages/ru/faq.json";
import ruHome from "../messages/ru/home.json";
import ruPricing from "../messages/ru/pricing.json";
import ruProducts from "../messages/ru/products.json";
import ruRoute from "../messages/ru/route.json";
import ruSettings from "../messages/ru/settings.json";
import ruShared from "../messages/ru/shared.json";
import ruTeam from "../messages/ru/team.json";

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

const messagesByLocaleAndNamespace: Record<
  string,
  Record<Namespace, NamespaceMessages>
> = {
  en: {
    about: enAbout,
    blog: enBlog,
    careers: enCareers,
    contact: enContact,
    faq: enFaq,
    home: enHome,
    pricing: enPricing,
    products: enProducts,
    route: enRoute,
    settings: enSettings,
    shared: enShared,
    team: enTeam,
  },
  fr: {
    about: frAbout,
    blog: frBlog,
    careers: frCareers,
    contact: frContact,
    faq: frFaq,
    home: frHome,
    pricing: frPricing,
    products: frProducts,
    route: frRoute,
    settings: frSettings,
    shared: frShared,
    team: frTeam,
  },
  es: {
    about: esAbout,
    blog: esBlog,
    careers: esCareers,
    contact: esContact,
    faq: esFaq,
    home: esHome,
    pricing: esPricing,
    products: esProducts,
    route: esRoute,
    settings: esSettings,
    shared: esShared,
    team: esTeam,
  },
  de: {
    about: deAbout,
    blog: deBlog,
    careers: deCareers,
    contact: deContact,
    faq: deFaq,
    home: deHome,
    pricing: dePricing,
    products: deProducts,
    route: deRoute,
    settings: deSettings,
    shared: deShared,
    team: deTeam,
  },
  it: {
    about: itAbout,
    blog: itBlog,
    careers: itCareers,
    contact: itContact,
    faq: itFaq,
    home: itHome,
    pricing: itPricing,
    products: itProducts,
    route: itRoute,
    settings: itSettings,
    shared: itShared,
    team: itTeam,
  },
  pt: {
    about: ptAbout,
    blog: ptBlog,
    careers: ptCareers,
    contact: ptContact,
    faq: ptFaq,
    home: ptHome,
    pricing: ptPricing,
    products: ptProducts,
    route: ptRoute,
    settings: ptSettings,
    shared: ptShared,
    team: ptTeam,
  },
  zh: {
    about: zhAbout,
    blog: zhBlog,
    careers: zhCareers,
    contact: zhContact,
    faq: zhFaq,
    home: zhHome,
    pricing: zhPricing,
    products: zhProducts,
    route: zhRoute,
    settings: zhSettings,
    shared: zhShared,
    team: zhTeam,
  },
  ja: {
    about: jaAbout,
    blog: jaBlog,
    careers: jaCareers,
    contact: jaContact,
    faq: jaFaq,
    home: jaHome,
    pricing: jaPricing,
    products: jaProducts,
    route: jaRoute,
    settings: jaSettings,
    shared: jaShared,
    team: jaTeam,
  },
  ko: {
    about: koAbout,
    blog: koBlog,
    careers: koCareers,
    contact: koContact,
    faq: koFaq,
    home: koHome,
    pricing: koPricing,
    products: koProducts,
    route: koRoute,
    settings: koSettings,
    shared: koShared,
    team: koTeam,
  },
  ru: {
    about: ruAbout,
    blog: ruBlog,
    careers: ruCareers,
    contact: ruContact,
    faq: ruFaq,
    home: ruHome,
    pricing: ruPricing,
    products: ruProducts,
    route: ruRoute,
    settings: ruSettings,
    shared: ruShared,
    team: ruTeam,
  },
};

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
export function getMessages(
  locale: string,
  requestedNamespaces: readonly Namespace[]
): AbstractIntlMessages {
  const localeMessages = messagesByLocaleAndNamespace[locale] ?? messagesByLocaleAndNamespace.en;

  const nsSet = new Set<Namespace>(requestedNamespaces);
  nsSet.add("shared");

  const parts: Record<string, unknown>[] = [];
  for (const ns of nsSet) {
    const nsMessages = localeMessages[ns];
    if (nsMessages) {
      parts.push(nestify(nsMessages));
    }
  }

  return mergeAll(parts) as AbstractIntlMessages;
}

/**
 * Get all messages for a locale (for backward compatibility).
 */
export function getAllMessages(locale: string): AbstractIntlMessages {
  return getMessages(locale, namespaces);
}
