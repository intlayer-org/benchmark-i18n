import { Profiler, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { setLocale } from "../paraglide/runtime";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const { locale = "en" } = useParams();

  // Paraglide messages read the locale at call time; remount on switch.
  setLocale(locale as Parameters<typeof setLocale>[0], { reload: false });

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div key={locale} className="contents">
      <Profiler id="AppRoot" onRender={onRender}>
        <Header />
        <Outlet />
        <Footer />
      </Profiler>
    </div>
  );
}
