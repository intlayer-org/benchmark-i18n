<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("AboutHeader");

  const content = useIntlayer("about-header");
</script>

<h1 class="mb-4 text-3xl font-bold text-foreground">{$content.title}</h1>
<p class="mb-8 max-w-3xl text-muted-foreground">{$content.description}</p>
