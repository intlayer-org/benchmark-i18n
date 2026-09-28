import { FormatSimple, GlobalContextPlugin, Tolgee, getTranslate } from "@tolgee/svelte";
import { tick } from "svelte";
import { writable } from "svelte/store";
import { type Locale, isLocale } from "./config";

const urlLocale =
  typeof window !== "undefined" ? (window.location.pathname.split("/")[1] ?? "") : "";

export const tolgee = Tolgee()
  .use(FormatSimple())
  .use(GlobalContextPlugin())
  .init({
    // Start in the URL's locale so the first load fetches only that chunk.
    language: isLocale(urlLocale) ? urlLocale : "en",
    // One lazy chunk per locale, fetched on first use.
    staticData: {
      en: () => import("../../../locales/en.json"),
      fr: () => import("../../../locales/fr.json"),
      es: () => import("../../../locales/es.json"),
      de: () => import("../../../locales/de.json"),
      it: () => import("../../../locales/it.json"),
      pt: () => import("../../../locales/pt.json"),
      zh: () => import("../../../locales/zh.json"),
      ja: () => import("../../../locales/ja.json"),
      ko: () => import("../../../locales/ko.json"),
      ru: () => import("../../../locales/ru.json"),
    },
  });

// The initial language comes from init (no "language" event), so mark
// html[lang] once its catalog has rendered.
void tolgee.run().then(tick).then(() => {
  document.documentElement.lang = tolgee.getLanguage() ?? "en";
});

function createTranslateFn() {
  return (key: string, options?: any): string => {
    if (options?.values) {
      return tolgee.t(key, options.values);
    }
    return tolgee.t(key, options);
  };
}

const tStore = writable(createTranslateFn());

tolgee.on("update", () => {
  tStore.set(createTranslateFn());
});

tolgee.on("language", (lang) => {
  tStore.set(createTranslateFn());
  // html[lang] is the reactivity test's end marker: set it after Svelte has
  // flushed the translated text, not when the switch starts.
  if (typeof document !== "undefined" && lang?.value) {
    void tick().then(() => {
      document.documentElement.lang = lang.value;
    });
  }
});

export const t = tStore;
export const _ = tStore;
export { getTranslate };

export function changeLanguage(locale: string): Promise<void> {
  if (isLocale(locale)) {
    return tolgee.changeLanguage(locale);
  }
  return Promise.resolve();
}
