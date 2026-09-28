import { Profiler, use, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { IntlProvider } from "use-intl";
import { getMessages } from "../i18n/getMessages";
import Footer from "./Footer";
import Header from "./Header";

// One request per locale; `use()` suspends the (transition) navigation until
// the catalog is there, as TanStack's route loader does.
const catalogs = new Map<string, Promise<any>>();
const loadCatalog = (locale: string) => {
  let promise = catalogs.get(locale);
  if (!promise) {
    promise = getMessages(locale);
    catalogs.set(locale, promise);
  }
  return promise;
};

export default function Layout() {
  const { locale = "en" } = useParams();
  const messages = use(loadCatalog(locale));

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      timeZone="UTC"
      now={new Date()}
    >
      <Profiler id="AppRoot" onRender={onRender}>
        <Header />
        <Outlet />
        <Footer />
      </Profiler>
    </IntlProvider>
  );
}
