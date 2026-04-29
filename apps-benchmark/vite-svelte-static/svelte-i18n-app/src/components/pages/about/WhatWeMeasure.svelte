<script lang="ts">
  import { _ } from "svelte-i18n";

  const metricKeys = [
    { m: "bundleSizeImpact", d: "bundleSizeImpactDesc" },
    { m: "renderingOverhead", d: "renderingOverheadDesc" },
    { m: "hydrationCost", d: "hydrationCostDesc" },
    { m: "lazyLoading", d: "lazyLoadingDesc" },
    { m: "localeSwitch", d: "localeSwitchDesc" },
  ] as const;
</script>

<section class="mx-auto mt-12 max-w-3xl">
  <h2 class="mb-4 text-2xl font-bold text-foreground">
    {$_("about.whatWeMeasure.title")}
  </h2>
  <ul class="space-y-4">
    {#each metricKeys as k (k.m)}
      <li class="rounded-md border border-border p-4">
        <span class="block text-sm font-bold text-primary"
          >{$_(`about.whatWeMeasure.${k.m}`)}</span
        >
        <span class="mt-1 block text-sm text-muted-foreground"
          >{$_(`about.whatWeMeasure.${k.d}`)}</span
        >
      </li>
    {/each}
  </ul>
</section>
