<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('products-grid');

  const products = $derived([
    {
      name: $content.benchmarkCli,
      desc: $content.runBenchmarksLocallyFromYour,
      price: $content.free,
    },
    {
      name: $content.benchmarkCloud,
      desc: $content.automatedCloudBasedBenchmarkingWith,
      price: "$29/mo",
    },
    {
      name: $content.benchmarkEnterprise,
      desc: $content.onPremiseDeploymentWithSso,
      price: $content.contactUs,
    },
    {
      name: $content.migrationAssistant,
      desc: $content.aiPoweredToolThatHelps,
      price: "$99 one-time",
    },
    {
      name: $content.translationQa,
      desc: $content.automatedQualityChecksForMissing,
      price: "$19/mo",
    },
    {
      name: $content.bundleOptimizer,
      desc: $content.analyzesAndOptimizesYourI18n,
      price: "$49/mo",
    },
  ]);
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {#each products as p, __k1 (__k1)}
    <div
      class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"
    >
      <div>
        <h3 class="mb-2 text-lg font-semibold text-foreground">{p.name}</h3>
        <p class="mb-4 text-sm text-muted-foreground">{p.desc}</p>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm font-bold text-primary">{p.price}</span>
        <button
          type="button"
          class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >{$content.learnMore}</button>
      </div>
    </div>
  {/each}
</div>
