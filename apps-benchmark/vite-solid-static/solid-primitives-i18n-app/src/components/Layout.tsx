import { useParams } from "@solidjs/router";
import { createEffect, onMount, type JSX } from "solid-js";
import { setLocale, type PrimitiveLocale } from "../i18n";
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
    setLocale(loc as PrimitiveLocale);
  });

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
