<script lang="ts">
  import { onMount } from "svelte";
  import {
    recordHydrationDuration,
    recordRenderTime,
  } from "test-utils/browser-metrics";
  import { setLocale as setParaglideLocale } from "../paraglide/runtime.js";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";

  let { locale, children } = $props<{
    locale: string;
    children: import("svelte").Snippet;
  }>();

  const renderStart =
    typeof performance !== "undefined" ? performance.now() : 0;

  onMount(() => {
    recordHydrationDuration();
    recordRenderTime("AppRoot", renderStart);
  });

  $effect(() => {
    document.documentElement.lang = locale;
    setParaglideLocale(locale, { reload: false });
  });
</script>

<Header />
{@render children()}
<Footer />
