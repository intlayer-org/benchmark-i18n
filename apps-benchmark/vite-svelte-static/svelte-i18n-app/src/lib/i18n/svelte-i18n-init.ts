import { init, register, waitLocale } from "svelte-i18n";
import { parsePath } from "../path";
import type { Locale } from "./config";

const loaders: Record<Locale, () => Promise<{ default: unknown }>> = {
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
