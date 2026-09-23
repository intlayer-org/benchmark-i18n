import { FormatSimple, Tolgee, useTranslate } from "@tolgee/vue";
import type { TFnType } from "@tolgee/vue";
import { defaultLocale, isLocale } from "./config";

// Start in the locale the URL asks for, so the first load fetches only that
// locale's chunk rather than English and then the real one.
const urlLocale = window.location.pathname.split("/")[1] ?? "";

export const tolgee = Tolgee()
  .use(FormatSimple())
  .init({
    language: isLocale(urlLocale) ? urlLocale : defaultLocale,
    // One lazy chunk per locale, fetched on first use.
    staticData: {
      en: () => import("../../locales/en.json"),
      fr: () => import("../../locales/fr.json"),
      es: () => import("../../locales/es.json"),
      de: () => import("../../locales/de.json"),
      it: () => import("../../locales/it.json"),
      pt: () => import("../../locales/pt.json"),
      zh: () => import("../../locales/zh.json"),
      ja: () => import("../../locales/ja.json"),
      ko: () => import("../../locales/ko.json"),
      ru: () => import("../../locales/ru.json"),
    },
  });

/**
 * `useTranslate()` hands back `t` as a ref. Unwrapping it on every call keeps
 * script-side `computed(() => t(...))` reactive to language changes.
 */
export function useT() {
  const { t } = useTranslate();
  return { t: ((...args: Parameters<TFnType>) => t.value(...args)) as TFnType };
}
