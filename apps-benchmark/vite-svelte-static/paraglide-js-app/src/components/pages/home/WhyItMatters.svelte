<script lang="ts">
  import * as m from "../../../paraglide/messages";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("WhyItMatters");
</script>

<section class="mb-16">
  <h2 class="mb-6 text-2xl font-bold text-foreground">
    {m.home_whyItMatters_title()}
  </h2>
  <div class="grid gap-6 md:grid-cols-3">
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {m.home_whyItMatters_bundleSizeTitle()}
      </h3>
      <p class="text-sm text-muted-foreground">
        {m.home_whyItMatters_bundleSizeDesc()}
      </p>
    </div>
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {m.home_whyItMatters_renderingTitle()}
      </h3>
      <p class="text-sm text-muted-foreground">
        {m.home_whyItMatters_renderingDesc()}
      </p>
    </div>
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {m.home_whyItMatters_dynamicLoadingTitle()}
      </h3>
      <p class="text-sm text-muted-foreground">
        {m.home_whyItMatters_dynamicLoadingDesc()}
      </p>
    </div>
  </div>
</section>
