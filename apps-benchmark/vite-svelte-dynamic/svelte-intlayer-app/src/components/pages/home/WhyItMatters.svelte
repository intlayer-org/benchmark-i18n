<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("WhyItMatters");

  const content = useIntlayer("why-it-matters");
</script>

<section class="mb-16">
  <h2 class="mb-6 text-2xl font-bold text-foreground">
    {$content.title}
  </h2>
  <div class="grid gap-6 md:grid-cols-3">
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {$content.bundleSize.title}
      </h3>
      <p class="text-sm text-muted-foreground">
        {$content.bundleSize.description}
      </p>
    </div>
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {$content.renderingHydration.title}
      </h3>
      <p class="text-sm text-muted-foreground">
        {$content.renderingHydration.description}
      </p>
    </div>
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {$content.dynamicLoading.title}
      </h3>
      <p class="text-sm text-muted-foreground">
        {$content.dynamicLoading.description}
      </p>
    </div>
  </div>
</section>
