import { FormatSimple, GlobalContextPlugin, Tolgee, getTranslate } from "@tolgee/svelte";
import { tick } from "svelte";
import { writable } from "svelte/store";
import de from "../../../locales/de.json";
import en from "../../../locales/en.json";
import es from "../../../locales/es.json";
import fr from "../../../locales/fr.json";
import it from "../../../locales/it.json";
import ja from "../../../locales/ja.json";
import ko from "../../../locales/ko.json";
import pt from "../../../locales/pt.json";
import ru from "../../../locales/ru.json";
import zh from "../../../locales/zh.json";
import { type Locale, isLocale } from "./config";

export const tolgee = Tolgee()
  .use(FormatSimple())
  .use(GlobalContextPlugin())
  .init({
    language: "en",
    staticData: { en, fr, es, de, it, pt, zh, ja, ko, ru },
  });

tolgee.run();

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
