<script lang="ts">
  import { _ } from "svelte-i18n";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("WhyItMatters");
</script>

<section class="mb-16">
  <h2 class="mb-6 text-2xl font-bold text-foreground">
    {$_("home.whyItMatters.title")}
  </h2>
  <div class="grid gap-6 md:grid-cols-3">
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {$_("home.whyItMatters.bundleSizeTitle")}
      </h3>
      <p class="text-sm text-muted-foreground">
        {$_("home.whyItMatters.bundleSizeDesc")}
      </p>
    </div>
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {$_("home.whyItMatters.renderingTitle")}
      </h3>
      <p class="text-sm text-muted-foreground">
        {$_("home.whyItMatters.renderingDesc")}
      </p>
    </div>
    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {$_("home.whyItMatters.dynamicLoadingTitle")}
      </h3>
      <p class="text-sm text-muted-foreground">
        {$_("home.whyItMatters.dynamicLoadingDesc")}
      </p>
    </div>
  </div>
</section>
