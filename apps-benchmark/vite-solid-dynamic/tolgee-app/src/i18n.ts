import { FormatSimple, Tolgee } from "@tolgee/web";
import { createSignal } from "solid-js";

const LOCALES = ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"];
const urlLocale = window.location.pathname.split("/")[1] ?? "";

export const tolgee = Tolgee()
  .use(FormatSimple())
  .init({
    // Start in the URL's locale so the first load fetches only that chunk.
    language: LOCALES.includes(urlLocale) ? urlLocale : "en",
    // One lazy chunk per locale, fetched on first use.
    staticData: {
      en: () => import("../locales/en.json"),
      fr: () => import("../locales/fr.json"),
      es: () => import("../locales/es.json"),
      de: () => import("../locales/de.json"),
      it: () => import("../locales/it.json"),
      pt: () => import("../locales/pt.json"),
      zh: () => import("../locales/zh.json"),
      ja: () => import("../locales/ja.json"),
      ko: () => import("../locales/ko.json"),
      ru: () => import("../locales/ru.json"),
    },
  });

tolgee.run();

export const [tolgeeLanguage, setTolgeeLanguage] = createSignal(
  tolgee.getLanguage() || "en"
);

tolgee.on("language", (lang) => {
  setTolgeeLanguage(lang.value);
});

// Catalogs arrive after the first render; 'update' (not 'language') fires then.
const [catalogVersion, setCatalogVersion] = createSignal(0);
tolgee.on("update", () => setCatalogVersion((v) => v + 1));

export function t(...args: Parameters<typeof tolgee.t>): any {
  tolgeeLanguage();
  catalogVersion();
  if (args.length === 0) {
    return (...inner: Parameters<typeof tolgee.t>) => {
      tolgeeLanguage();
      catalogVersion();
      return tolgee.t(...inner);
    };
  }
  return tolgee.t(...args);
}

export const trans = t;
