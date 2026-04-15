const locales = ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"];
const namespaces = [
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
];

function mergeNamespace(prefix, data) {
  const merged = {};
  for (const [key, value] of Object.entries(data)) {
    merged[`${prefix}.${key}`] = value;
  }
  return merged;
}

async function loadNamespace(locale, namespace) {
  const safeLocale = locales.includes(locale) ? locale : "en";
  try {
    const module = await import(`./locales/${safeLocale}/${namespace}.json`, {
      with: { type: "json" },
    });
    return module.default;
  } catch {
    if (safeLocale === "en") {
      return {};
    }
    const fallbackModule = await import(`./locales/en/${namespace}.json`, {
      with: { type: "json" },
    });
    return fallbackModule.default;
  }
}

/** @type {import('next-translate').I18nConfig} */
export default {
  locales,
  defaultLocale: "en",
  keySeparator: false,
  nsSeparator: false,
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: async (lang, namespace) => {
    const locale = lang ?? "en";
    if (!namespace || namespace === "common") {
      const merged = {};
      for (const ns of namespaces) {
        const nsMessages = await loadNamespace(locale, ns);
        Object.assign(merged, mergeNamespace(ns, nsMessages));
      }
      return merged;
    }
    return loadNamespace(locale, namespace);
  },
};
