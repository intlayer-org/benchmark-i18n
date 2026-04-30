import i18next from "i18next";
import { createSignal } from "solid-js";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";
import de from "../locales/de.json";
import it from "../locales/it.json";
import pt from "../locales/pt.json";
import zh from "../locales/zh.json";
import ja from "../locales/ja.json";
import ko from "../locales/ko.json";
import ru from "../locales/ru.json";

export const [t, setT] = createSignal(i18next.t.bind(i18next));

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  zh: { translation: zh },
  ja: { translation: ja },
  ko: { translation: ko },
  ru: { translation: ru },
};

i18next.init({
  fallbackLng: "en",
  resources,
});

setT(() => i18next.t.bind(i18next));

/**
 * Prefer this over `const tt = t()` in components. Solid runs the component body once;
 * caching `t()` freezes the old bound `i18next.t`. Each `trans()` call reads the signal
 * again so locale switches re-render.
 */
export function trans(
  ...args: Parameters<typeof i18next.t>
): ReturnType<typeof i18next.t> {
  return t()(...args);
}

export { i18next };
