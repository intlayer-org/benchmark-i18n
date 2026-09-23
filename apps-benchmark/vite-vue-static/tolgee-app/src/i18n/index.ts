import { FormatSimple, Tolgee, useTranslate } from "@tolgee/vue";
import type { TFnType } from "@tolgee/vue";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";
import es from "../../locales/es.json";
import de from "../../locales/de.json";
import it from "../../locales/it.json";
import pt from "../../locales/pt.json";
import zh from "../../locales/zh.json";
import ja from "../../locales/ja.json";
import ko from "../../locales/ko.json";
import ru from "../../locales/ru.json";

export const tolgee = Tolgee()
  .use(FormatSimple())
  .init({
    language: "en",
    staticData: { en, fr, es, de, it, pt, zh, ja, ko, ru },
  });

/**
 * `useTranslate()` hands back `t` as a ref. Unwrapping it on every call keeps
 * script-side `computed(() => t(...))` reactive to language changes.
 */
export function useT() {
  const { t } = useTranslate();
  return { t: ((...args: Parameters<TFnType>) => t.value(...args)) as TFnType };
}
