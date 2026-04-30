<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  import { get } from 'svelte/store';
  const content = useIntlayer('pricing-tiers');

  const tiers = [
    {
      name: get(content).starter,
      price: "$0",
      period: "forever",
      features: [
        get(content).x5BenchmarkRunsday,
        "3 libraries",
        get(content).communitySupport,
        get(content).publicResults,
      ],
    },
    {
      name: get(content).pro,
      price: "$29",
      period: "/month",
      features: [
        get(content).unlimitedRuns,
        get(content).allLibraries,
        get(content).prioritySupport,
        get(content).privateResults,
        get(content).ciIntegration,
        get(content).historicalData,
      ],
      highlighted: true,
    },
    {
      name: get(content).enterprise,
      price: get(content).custom,
      period: "",
      features: [
        get(content).everythingInPro,
        get(content).onPremiseOption,
        get(content).ssoSaml,
        get(content).dedicatedAccountManager,
        get(content).customSlas,
        get(content).auditLogs,
        get(content).trainingSessions,
      ],
    },
  ];
</script>

<div class="grid gap-6 md:grid-cols-3">
  {#each tiers as t (t.name)}
    <div
      class="flex flex-col rounded-lg border p-6 {t.highlighted
        ? 'border-primary bg-primary/5 ring-1 ring-primary'
        : 'border-border bg-card'}"
    >
      <h3 class="text-lg font-semibold text-foreground">{t.name}</h3>
      <div class="my-4">
        <span class="text-3xl font-bold text-foreground">{t.price}</span>
        <span class="text-sm text-muted-foreground">{t.period}</span>
      </div>
      <ul class="mb-6 flex-1 space-y-2">
        {#each t.features as f (f)}
          <li class="flex items-center gap-2 text-sm text-muted-foreground">
            <span class="text-primary">✓</span>
            {f}
          </li>
        {/each}
      </ul>
      <button
        type="button"
        class="w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 {t.highlighted
          ? 'bg-primary text-primary-foreground'
          : 'border border-border text-foreground hover:bg-accent'}"
      >
        {t.name === "Enterprise" ? "Contact Sales" : "Get Started"}
      </button>
    </div>
  {/each}
</div>
