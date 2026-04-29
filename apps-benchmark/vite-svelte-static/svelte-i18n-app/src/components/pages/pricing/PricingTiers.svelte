<script lang="ts">
  import { _ } from "svelte-i18n";

  const tiers = [
    {
      id: "starter",
      nameKey: "starterName",
      priceKey: "starterPrice",
      periodKey: "starterPeriod",
      featureKeys: [
        "starterFeature1",
        "starterFeature2",
        "starterFeature3",
        "starterFeature4",
      ],
      ctaKey: "getStarted" as const,
      highlight: false,
    },
    {
      id: "pro",
      nameKey: "proName",
      priceKey: "proPrice",
      periodKey: "proPeriod",
      featureKeys: [
        "proFeature1",
        "proFeature2",
        "proFeature3",
        "proFeature4",
        "proFeature5",
        "proFeature6",
      ],
      ctaKey: "getStarted" as const,
      highlight: true,
    },
    {
      id: "enterprise",
      nameKey: "enterpriseName",
      priceKey: "enterprisePrice",
      periodKey: "" as const,
      featureKeys: [
        "enterpriseFeature1",
        "enterpriseFeature2",
        "enterpriseFeature3",
        "enterpriseFeature4",
        "enterpriseFeature5",
        "enterpriseFeature6",
        "enterpriseFeature7",
      ],
      ctaKey: "contactSales" as const,
      highlight: false,
    },
  ] as const;
</script>

<div class="grid gap-6 md:grid-cols-3">
  {#each tiers as t (t.id)}
    <div
      class="flex flex-col rounded-lg border p-6 {t.highlight
        ? 'border-primary bg-primary/5 ring-1 ring-primary'
        : 'border-border bg-card'}"
    >
      <h3 class="text-lg font-semibold text-foreground">
        {$_(`pricing.tiers.${t.nameKey}`)}
      </h3>
      <div class="my-4">
        <span class="text-3xl font-bold text-foreground"
          >{$_(`pricing.tiers.${t.priceKey}`)}</span
        >
        {#if t.periodKey}
          <span class="text-sm text-muted-foreground">
            {$_(`pricing.tiers.${t.periodKey}`)}
          </span>
        {/if}
      </div>
      <ul class="mb-6 flex-1 space-y-2">
        {#each t.featureKeys as fk (fk)}
          <li class="flex items-center gap-2 text-sm text-muted-foreground">
            <span class="text-primary">✓</span>
            {$_(`pricing.tiers.${fk}`)}
          </li>
        {/each}
      </ul>
      <button
        type="button"
        class="w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 {t.highlight
          ? 'bg-primary text-primary-foreground'
          : 'border border-border text-foreground hover:bg-accent'}"
      >
        {$_(`pricing.tiers.${t.ctaKey}`)}
      </button>
    </div>
  {/each}
</div>
