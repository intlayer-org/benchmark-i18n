import { Profiler, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { IntlayerProvider } from "react-intlayer";
import { Locales } from "intlayer";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const { locale = "en" } = useParams();

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <IntlayerProvider locale={locale as Locales}>
      <Profiler id="AppRoot" onRender={onRender}>
        <Header />
        <Outlet />
        <Footer />
      </Profiler>
    </IntlayerProvider>
  );
}
