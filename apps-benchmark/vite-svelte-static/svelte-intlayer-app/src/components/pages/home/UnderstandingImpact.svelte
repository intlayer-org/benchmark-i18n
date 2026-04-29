<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("UnderstandingImpact");

  const content = useIntlayer("understanding-impact");
</script>

<section class="mx-auto mb-16 max-w-3xl space-y-6">
  <h2 class="text-2xl font-bold text-foreground">
    {$content.title}
  </h2>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {$content.largeJson.title}
    </h3>
    <p class="text-sm text-muted-foreground">
      {$content.largeJson.description}
    </p>
    <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
      {#each $content.largeJson.points as point, index (index)}
        <li>{point}</li>
      {/each}
    </ul>
  </div>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {$content.dynamicLoading.title}
    </h3>
    <p class="text-sm text-muted-foreground">
      {$content.dynamicLoading.description}
    </p>
    <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
      {#each $content.dynamicLoading.points as point, index (index)}
        <li>
          <strong class="text-foreground">{point.label}</strong>
          {point.text}
        </li>
      {/each}
    </ul>
  </div>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {$content.benchmarkMeasures.title}
    </h3>
    <p class="text-sm text-muted-foreground">
      {$content.benchmarkMeasures.description}
    </p>
  </div>
</section>
