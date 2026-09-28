import { Profiler, use, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { getMessages, initLingui } from "../i18n/lingui";

// Every namespace of the locale: this is the per-locale (not per-page) variant.
const NAMESPACES = [
  "shared",
  "route",
  "home",
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "pricing",
  "products",
  "settings",
  "team",
];
import Footer from "./Footer";
import Header from "./Header";

// One request per locale; `use()` suspends the (transition) navigation until
// the catalog is there, as TanStack's route loader does.
const catalogs = new Map<string, Promise<any>>();
const loadCatalog = (locale: string) => {
  let promise = catalogs.get(locale);
  if (!promise) {
    promise = getMessages(locale, NAMESPACES);
    catalogs.set(locale, promise);
  }
  return promise;
};

export default function Layout() {
  const { locale = "en" } = useParams();
  const messages = use(loadCatalog(locale));
  const i18n = useMemo(() => initLingui(locale, messages), [locale, messages]);

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <I18nProvider i18n={i18n}>
      <Profiler id="AppRoot" onRender={onRender}>
        <Header />
        <Outlet />
        <Footer />
      </Profiler>
    </I18nProvider>
  );
}
