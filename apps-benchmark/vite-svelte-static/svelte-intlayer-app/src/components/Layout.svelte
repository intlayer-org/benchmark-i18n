<script lang="ts">
  import { onMount } from "svelte";
  import { Locales, type LocalesValues } from "intlayer";
  import { setupIntlayer } from "svelte-intlayer";
  import {
    recordHydrationDuration,
    recordRenderTime,
  } from "test-utils/browser-metrics";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";

  let { locale, children } = $props<{
    locale: string;
    children: import("svelte").Snippet;
  }>();

  const intlayer = setupIntlayer(Locales.ENGLISH);

  const renderStart =
    typeof performance !== "undefined" ? performance.now() : 0;

  onMount(() => {
    recordHydrationDuration();
    recordRenderTime("AppRoot", renderStart);
  });

  $effect(() => {
    intlayer.setLocale(locale as LocalesValues);
    document.documentElement.lang = locale;
  });
</script>

<Header />
{@render children()}
<Footer />
