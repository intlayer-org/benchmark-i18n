<script lang="ts">
  import { onMount } from "svelte";
  import {
    recordHydrationDuration,
    recordRenderTime,
  } from "test-utils/browser-metrics";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import { setLocale } from "../locales/main.loader.svelte.js";

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

  // Catalogs are bundled (`loading.direct`); the loader's locale is $state,
  // so every translated node re-derives before the DOM update.
  $effect.pre(() => {
    setLocale(locale);
  });

  $effect(() => {
    document.documentElement.lang = locale;
  });
</script>

<Header />
{@render children()}
<Footer />
