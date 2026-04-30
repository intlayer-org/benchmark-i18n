import { init, register, waitLocale } from "svelte-i18n";
import de from "../../locales/de.json";
import en from "../../locales/en.json";
import es from "../../locales/es.json";
import fr from "../../locales/fr.json";
import it from "../../locales/it.json";
import ja from "../../locales/ja.json";
import ko from "../../locales/ko.json";
import pt from "../../locales/pt.json";
import ru from "../../locales/ru.json";
import zh from "../../locales/zh.json";
import { parsePath } from "../path";
import type { Locale } from "./config";

const loaders: Record<Locale, () => Promise<{ default: unknown }>> = {
  en: () => Promise.resolve({ default: en }),
  fr: () => Promise.resolve({ default: fr }),
  es: () => Promise.resolve({ default: es }),
  de: () => Promise.resolve({ default: de }),
  it: () => Promise.resolve({ default: it }),
  pt: () => Promise.resolve({ default: pt }),
  zh: () => Promise.resolve({ default: zh }),
  ja: () => Promise.resolve({ default: ja }),
  ko: () => Promise.resolve({ default: ko }),
  ru: () => Promise.resolve({ default: ru }),
};

export async function setupSvelteI18n(
  initialPathname: string,
): Promise<void> {
  const locales = Object.keys(loaders) as Locale[];
  for (const loc of locales) {
    register(loc, loaders[loc]);
  }
  const parsed = parsePath(initialPathname);
  const initialLocale = parsed.kind === "ok" ? parsed.locale : "en";
  await init({
    fallbackLocale: "en",
    initialLocale,
  });
  await waitLocale(initialLocale);
}
