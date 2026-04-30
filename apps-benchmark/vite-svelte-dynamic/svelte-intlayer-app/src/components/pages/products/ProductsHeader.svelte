<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('products-header');

  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">{$content.products}</h1>
<p class="mb-10 text-muted-foreground">{$content.toolsAndServicesToStreamline}</p>
