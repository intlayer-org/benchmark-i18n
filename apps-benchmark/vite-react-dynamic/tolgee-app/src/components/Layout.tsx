import { Profiler, use, useEffect } from "react";
import { TolgeeProvider, useTolgee } from "@tolgee/react";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { tolgee } from "../i18n/tolgee";
import Footer from "./Footer";
import Header from "./Header";

// One request per locale; `use()` suspends the (transition) navigation until
// the catalog is there, as TanStack's route loader does.
const catalogs = new Map<string, Promise<unknown>>();
const loadCatalog = (locale: string) => {
  let promise = catalogs.get(locale);
  if (!promise) {
    promise = tolgee.loadRecord({ language: locale });
    catalogs.set(locale, promise);
  }
  return promise;
};

// Tolgee applies the language asynchronously, so html[lang] follows Tolgee's
// language (committed with the translated text), not the URL.
function LangSync() {
  const { getLanguage } = useTolgee(["language"]);
  const language = getLanguage();
  useEffect(() => {
    if (language) document.documentElement.lang = language;
  }, [language]);
  return null;
}

export default function Layout() {
  const { locale = "en" } = useParams();
  use(loadCatalog(locale));

  if (tolgee.getLanguage() !== locale) {
    tolgee.changeLanguage(locale);
  }

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
    <TolgeeProvider
      tolgee={tolgee}
      fallback={<div>Loading translations...</div>}
      options={{ useSuspense: false }}
    >
      <LangSync />
      <Profiler id="AppRoot" onRender={onRender}>
        <Header />
        <Outlet />
        <Footer />
      </Profiler>
    </TolgeeProvider>
  );
}
