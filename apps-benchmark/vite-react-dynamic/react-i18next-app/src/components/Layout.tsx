import { Profiler, use, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";
import Footer from "./Footer";
import Header from "./Header";

// One request per locale; `use()` suspends the (transition) navigation until
// the catalog is there, as TanStack's route loader does.
const catalogs = new Map<string, Promise<any>>();
const loadCatalog = (locale: string) => {
  let promise = catalogs.get(locale);
  if (!promise) {
    promise = i18n.loadLanguages(locale);
    catalogs.set(locale, promise);
  }
  return promise;
};

export default function Layout() {
  const { locale = "en" } = useParams();
  use(loadCatalog(locale));
  // The bundle is loaded, so the switch completes synchronously.
  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Profiler id="AppRoot" onRender={onRender}>
        <Header />
        <Outlet />
        <Footer />
      </Profiler>
    </I18nextProvider>
  );
}
