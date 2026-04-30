<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('pricing-header');

  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<div class="mb-12 text-center">
  <h1 class="mb-3 text-3xl font-bold text-foreground">{$content.simpleTransparentPricing}</h1>
  <p class="text-muted-foreground">{$content.chooseThePlanThatFits}</p>
</div>
