import { useParams } from "@solidjs/router";
import { createEffect, onMount, type JSX } from "solid-js";
import {
  recordHydrationDuration,
  recordRenderTime,
} from "test-utils/browser-metrics";
import { setLocale as setParaglideLocale } from "../paraglide/runtime.js";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

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
    setParaglideLocale(loc, { reload: false });
  });

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
