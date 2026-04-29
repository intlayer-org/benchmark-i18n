import { getCurrentInstance } from "vue";

/**
 * Fluent message ids mirror vue-i18n nested keys with dots replaced by hyphens:
 * shared.appName → shared-appName, home.hero.title → home-hero-title
 */
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
    const fluentKey = dottedVueI18nKey.replace(/\./g, "-");
    return proxy.$t(fluentKey, params ?? {});
  };

  return { td };
}
