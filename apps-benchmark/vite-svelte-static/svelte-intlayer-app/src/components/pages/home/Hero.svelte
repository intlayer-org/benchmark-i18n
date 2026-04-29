<script lang="ts">
  import { get } from 'svelte/store';

  import { useIntlayer } from "svelte-intlayer";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  const content = useIntlayer("hero");

  usePerformanceMeasure(get(content).hero);
</script>

<section class="mb-16 text-center">
  <h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground">
    {$content.title}
  </h1>
  <p class="mx-auto max-w-2xl text-lg text-muted-foreground">
    {$content.description}
  </p>
  <div class="mt-8 flex justify-center gap-4">
    <button
      type="button"
      class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      {$content.viewResults}
    </button>
    <button
      type="button"
      class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
    >
      {$content.methodology}
    </button>
  </div>
</section>
