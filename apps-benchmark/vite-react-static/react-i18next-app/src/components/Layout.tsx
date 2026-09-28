import { Profiler, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import i18n from "../i18n/i18n";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const { locale = "en" } = useParams();

  // Resources are bundled, so the switch is synchronous and the children of
  // this render already read the new locale (TanStack does it in beforeLoad).
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
