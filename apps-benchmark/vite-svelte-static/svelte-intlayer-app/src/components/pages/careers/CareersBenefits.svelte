<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('careers-benefits');

  const benefits = $derived([
    { label: "Remote-first", value: $content.workFromAnywhereInThe },
    { label: $content.competitivePay, value: $content.topOfMarketCompensation },
    { label: $content.openSourceTime, value: $content.x20TimeForOssContributions },
  ]);
</script>

<div class="mb-12 grid gap-4 md:grid-cols-3">
  {#each benefits as b, __k1 (__k1)}
    <div class="rounded-lg border border-border bg-card p-4 text-center">
      <p class="text-sm font-semibold text-foreground">{b.label}</p>
      <p class="text-xs text-muted-foreground">{b.value}</p>
    </div>
  {/each}
</div>
