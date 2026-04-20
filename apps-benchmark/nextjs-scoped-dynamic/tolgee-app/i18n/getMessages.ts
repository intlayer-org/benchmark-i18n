const cache = new Map<string, Record<string, any>>();

async function loadNamespace(locale: string, namespace: string) {
  const safeLocale = locale || "en";
  try {
    const module = await import(`./locales/${safeLocale}/${namespace}.json`);
    return module.default as Record<string, any>;
  } catch {
    try {
      const fallback = await import(`./locales/en/${namespace}.json`);
      return fallback.default as Record<string, any>;
    } catch {
      return {};
    }
  }
}

export async function getMessages(locale: string, namespaces: string[] = ["common"]) {
  const safeLocale = locale || "en";
  
  // We don't cache the whole result because namespaces can vary
  const entries = await Promise.all(
    namespaces.map(async (namespace) => [namespace, await loadNamespace(safeLocale, namespace)] as const)
  );
  
  const result = Object.fromEntries(entries) as Record<string, any>;
  
  // If "common" is present, we might want to merge it or keep it namespaced
  // Tolgee usually expects { namespace: { key: value } }
  
  return result;
}
