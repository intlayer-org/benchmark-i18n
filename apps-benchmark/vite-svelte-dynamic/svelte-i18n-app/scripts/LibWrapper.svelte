<script lang="ts">
  import { init, register, waitLocale } from "svelte-i18n";
  import { onMount } from "svelte";

  onMount(async () => {
    register("en", () =>
      Promise.resolve({ default: { header: { home: "Home" } } }),
    );
    await init({ fallbackLocale: "en", initialLocale: "en" });
    await waitLocale("en");
  });
</script>

<slot />
