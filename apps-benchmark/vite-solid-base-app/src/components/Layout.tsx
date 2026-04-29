import { useParams } from "@solidjs/router";
import { createEffect, onMount, type JSX } from "solid-js";
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
    document.documentElement.lang = params.locale ?? "en";
  });

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
