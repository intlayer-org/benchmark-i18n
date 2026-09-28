import { Profiler, useEffect } from "react";
import { TolgeeProvider, useTolgee } from "@tolgee/react";
import { Outlet, useParams } from "react-router-dom";
import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { tolgee } from "../i18n/tolgee";
import Footer from "./Footer";
import Header from "./Header";

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
