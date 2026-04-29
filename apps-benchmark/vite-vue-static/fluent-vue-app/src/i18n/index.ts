import { FluentBundle, FluentResource } from "@fluent/bundle";
import { createFluentVue } from "fluent-vue";
import deRaw from "../locales/de.ftl?raw";
import enRaw from "../locales/en.ftl?raw";
import esRaw from "../locales/es.ftl?raw";
import frRaw from "../locales/fr.ftl?raw";
import itRaw from "../locales/it.ftl?raw";
import jaRaw from "../locales/ja.ftl?raw";
import koRaw from "../locales/ko.ftl?raw";
import ptRaw from "../locales/pt.ftl?raw";
import ruRaw from "../locales/ru.ftl?raw";
import zhRaw from "../locales/zh.ftl?raw";
import type { Locale } from "./config";

const createBundle = (locale: string, ftl: string) => {
  const bundle = new FluentBundle(locale);
  bundle.addResource(new FluentResource(ftl));
  return bundle;
};

const bundleMap = {
  en: createBundle("en", enRaw),
  fr: createBundle("fr", frRaw),
  es: createBundle("es", esRaw),
  de: createBundle("de", deRaw),
  it: createBundle("it", itRaw),
  pt: createBundle("pt", ptRaw),
  zh: createBundle("zh", zhRaw),
  ja: createBundle("ja", jaRaw),
  ko: createBundle("ko", koRaw),
  ru: createBundle("ru", ruRaw),
} satisfies Record<Locale, FluentBundle>;

function negotiatedBundles(locale: string): FluentBundle[] {
  const primary = bundleMap[locale as Locale] ?? bundleMap.en;
  return primary === bundleMap.en ? [bundleMap.en] : [primary, bundleMap.en];
}

export const fluent = createFluentVue({
  bundles: negotiatedBundles("en"),
});

export function syncFluentBundles(locale: string): void {
  fluent.bundles = negotiatedBundles(locale);
}

export default fluent;
