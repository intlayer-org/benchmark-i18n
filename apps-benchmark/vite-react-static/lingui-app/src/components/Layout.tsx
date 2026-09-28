import { Profiler, useEffect, useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { I18nProvider } from "@lingui/react";
import { getMessages, initLingui } from "../i18n/lingui";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const { locale = "en" } = useParams();
  const i18n = useMemo(() => initLingui(locale, getMessages(locale)), [locale]);

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
