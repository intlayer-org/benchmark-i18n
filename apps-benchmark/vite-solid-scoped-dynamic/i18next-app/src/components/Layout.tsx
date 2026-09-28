import { useLocation, useParams } from "@solidjs/router";
import { createEffect, onMount, type JSX } from "solid-js";
import { i18next, loadRouteMessages, setT } from "../i18n";
import {
  recordHydrationDuration,
  recordRenderTime,
} from "test-utils/browser-metrics";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: { children?: JSX.Element }) {
  const params = useParams<{ locale: string }>();
  const location = useLocation();
  const start = typeof performance !== "undefined" ? performance.now() : 0;

  onMount(() => {
    recordHydrationDuration();
    recordRenderTime("AppRoot", start);
  });

  createEffect(() => {
    const loc = params.locale ?? "en";
    // `/:locale/<page>` → namespace `<page>`, `/:locale` → home.
    const page = location.pathname.split("/")[2] || "home";
    void loadRouteMessages(loc, page)
      .then(() => i18next.changeLanguage(loc))
      .then(() => {
        setT(() => i18next.t.bind(i18next));
        // Solid patches the DOM synchronously on the signal write above, so
        // html[lang] (the reactivity test's end marker) follows the new text.
        document.documentElement.lang = loc;
      });
  });

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
