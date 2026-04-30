import { getCurrentInstance } from "vue";

/**
 * Maps vue-i18n-style dotted keys to Fluent message ids (kebab-case segments):
 * shared.appName → shared-app-name, home.hero.viewResults → home-hero-view-results
 */
function segmentToKebab(segment: string): string {
  return segment
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function dottedKeyToFluentId(dottedKey: string): string {
  return dottedKey.split(".").map(segmentToKebab).join("-");
}

export function useFluentDottedT() {
  const proxy = getCurrentInstance()?.proxy as {
    $t: (
      key: string,
      value?: Record<string, string | number | boolean | Date>,
    ) => string;
  };

  const td = (
    dottedVueI18nKey: string,
    params?: Record<string, string | number | boolean | Date>,
  ): string => {
    if (!proxy)
      throw new Error("useFluentDottedT must be used during setup()");
    return proxy.$t(dottedKeyToFluentId(dottedVueI18nKey), params ?? {});
  };

  return { td };
}
