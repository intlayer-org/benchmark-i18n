import { Profiler, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { IntlProvider } from "react-intl";
import { defaultLocale } from "../i18n/config";
import { getMessages } from "../i18n/getMessages";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const { locale = "en" } = useParams();
  const messages = getMessages(locale);

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <IntlProvider
      key={locale}
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <Profiler id="AppRoot" onRender={onRender}>
        <Header />
        <Outlet />
        <Footer />
      </Profiler>
    </IntlProvider>
  );
}
