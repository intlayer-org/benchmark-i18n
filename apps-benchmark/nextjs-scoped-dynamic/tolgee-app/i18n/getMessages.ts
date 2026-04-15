const NAMESPACES = [
  "route",
  "header",
  "footer",
  "themeToggle",
  "hero",
  "whyItMatters",
  "understandingImpact",
  "resultsTable",
  "aboutHeader",
  "aboutGrid",
  "whatWeMeasure",
  "blogHeader",
  "blogList",
  "careersHeader",
  "careersBenefits",
  "openPositions",
  "contactHeader",
  "contactForm",
  "faqHeader",
  "faqList",
  "pricingHeader",
  "pricingTiers",
  "productsHeader",
  "productsGrid",
  "settingsHeader",
  "profileSection",
  "preferencesSection",
  "apiAccessSection",
  "settingsFooter",
  "teamHeader",
  "teamGrid",
  "common",
  "home",
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "pricing",
  "products",
  "settings",
  "team",
] as const;

type Namespace = (typeof NAMESPACES)[number];

const cache = new Map<string, Record<string, any>>();

async function loadNamespace(locale: string, namespace: Namespace) {
  const safeLocale = locale || "en";
  try {
    const module = await import(`./locales/${safeLocale}/${namespace}.json`);
    return module.default as Record<string, any>;
  } catch {
    if (safeLocale === "en") {
      return {};
    }
    const fallback = await import(`./locales/en/${namespace}.json`);
    return fallback.default as Record<string, any>;
  }
}

export async function getMessages(locale: string) {
  const safeLocale = locale || "en";
  const cached = cache.get(safeLocale);
  if (cached) {
    return cached;
  }

  const entries = await Promise.all(
    NAMESPACES.map(async (namespace) => [namespace, await loadNamespace(safeLocale, namespace)] as const)
  );
  const result = Object.fromEntries(entries) as Record<string, any>;
  const common = result.common ?? {};
  const merged = { ...result, ...common };
  cache.set(safeLocale, merged);
  return merged;
}
