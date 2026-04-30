<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("WhatWeMeasure");

  const content = useIntlayer("what-we-measure");
</script>

<section class="mx-auto mt-12 max-w-3xl">
  <h2 class="mb-4 text-2xl font-bold text-foreground">
    {$content.title}
  </h2>
  <ul class="space-y-4">
    {#each $content.metrics as m (m.metric)}
      <li class="rounded-md border border-border p-4">
        <span class="block text-sm font-bold text-primary">{m.metric}</span>
        <span class="mt-1 block text-sm text-muted-foreground">{m.desc}</span>
      </li>
    {/each}
  </ul>
</section>
