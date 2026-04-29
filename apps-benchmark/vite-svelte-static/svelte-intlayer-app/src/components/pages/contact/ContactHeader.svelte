<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('contact-header');

  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">{$content.getInTouch}</h1>
<p class="mb-8 text-muted-foreground">{$content.haveIdeasFoundABug}<a href="mailto:contact@intlayer.org" class="text-primary hover:underline">
    contact@intlayer.org
  </a>
  .
</p>
