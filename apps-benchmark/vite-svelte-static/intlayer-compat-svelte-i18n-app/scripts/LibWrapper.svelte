<script lang="ts">
  import { init } from "svelte-i18n";
  import { onMount } from "svelte";

  onMount(async () => {
    await init({ fallbackLocale: "en", initialLocale: "en" });
  });
</script>

<slot />
