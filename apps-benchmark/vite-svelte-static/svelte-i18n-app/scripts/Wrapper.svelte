<script lang="ts">
  import { setupSvelteI18n } from "../src/lib/i18n/svelte-i18n-init";
  import { onMount } from "svelte";

  onMount(async () => {
    await setupSvelteI18n("/en");
  });
</script>

<slot />
