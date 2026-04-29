<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('blog-header');

  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">{$content.blog}</h1>
<p class="mb-10 text-muted-foreground">{$content.insightsTutorialsAndAnalysisFrom}</p>
