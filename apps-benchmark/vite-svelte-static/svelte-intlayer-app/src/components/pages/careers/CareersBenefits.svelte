<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  import { get } from 'svelte/store';
  const content = useIntlayer('careers-benefits');

  const benefits = [
    { label: "Remote-first", value: get(content).workFromAnywhereInThe },
    { label: get(content).competitivePay, value: get(content).topOfMarketCompensation },
    { label: get(content).openSourceTime, value: get(content).x20TimeForOssContributions },
  ];
</script>

<div class="mb-12 grid gap-4 md:grid-cols-3">
  {#each benefits as b (b.label)}
    <div class="rounded-lg border border-border bg-card p-4 text-center">
      <p class="text-sm font-semibold text-foreground">{b.label}</p>
      <p class="text-xs text-muted-foreground">{b.value}</p>
    </div>
  {/each}
</div>
