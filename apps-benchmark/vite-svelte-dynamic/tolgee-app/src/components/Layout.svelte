<script lang="ts">
  import { onMount } from "svelte";
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

  const renderStart =
    typeof performance !== "undefined" ? performance.now() : 0;

  onMount(() => {
    recordHydrationDuration();
    recordRenderTime("AppRoot", renderStart);
  });

  // html[lang] is set by the Tolgee "language" handler (lib/i18n/tolgee.ts)
  // once the translated text is in the DOM.
</script>

<Header />
{@render children()}
<Footer />
