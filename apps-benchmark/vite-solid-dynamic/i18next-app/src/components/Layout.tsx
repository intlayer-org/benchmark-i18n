import { useParams } from "@solidjs/router";
import { createEffect, onMount, type JSX } from "solid-js";
import { i18next, setT } from "../i18n";
import {
  recordHydrationDuration,
  recordRenderTime,
} from "test-utils/browser-metrics";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: { children?: JSX.Element }) {
  const params = useParams<{ locale: string }>();
  const start = typeof performance !== "undefined" ? performance.now() : 0;

  onMount(() => {
    recordHydrationDuration();
    recordRenderTime("AppRoot", start);
  });

  createEffect(() => {
    const loc = params.locale ?? "en";
    document.documentElement.lang = loc;
    void i18next.changeLanguage(loc).then(() => {
      setT(() => i18next.t.bind(i18next));
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
