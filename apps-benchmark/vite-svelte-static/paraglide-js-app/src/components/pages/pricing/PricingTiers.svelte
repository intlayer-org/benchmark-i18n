<script lang="ts">
  import { m } from "../../../paraglide/messages";
  import { route } from "$lib/routerStore";

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const tiers = $derived.by(() => {
    void currentLocale;
    return [
      {
        name: m.pricing_tiers_starterName(),
        price: m.pricing_tiers_starterPrice(),
        period: m.pricing_tiers_starterPeriod(),
        features: [
          m.pricing_tiers_starterFeature1(),
          m.pricing_tiers_starterFeature2(),
          m.pricing_tiers_starterFeature3(),
          m.pricing_tiers_starterFeature4(),
        ],
      },
      {
        name: m.pricing_tiers_proName(),
        price: m.pricing_tiers_proPrice(),
        period: m.pricing_tiers_proPeriod(),
        features: [
          m.pricing_tiers_proFeature1(),
          m.pricing_tiers_proFeature2(),
          m.pricing_tiers_proFeature3(),
          m.pricing_tiers_proFeature4(),
          m.pricing_tiers_proFeature5(),
          m.pricing_tiers_proFeature6(),
        ],
        highlighted: true,
      },
      {
        name: m.pricing_tiers_enterpriseName(),
        price: m.pricing_tiers_enterprisePrice(),
        period: "",
        features: [
          m.pricing_tiers_enterpriseFeature1(),
          m.pricing_tiers_enterpriseFeature2(),
          m.pricing_tiers_enterpriseFeature3(),
          m.pricing_tiers_enterpriseFeature4(),
          m.pricing_tiers_enterpriseFeature5(),
          m.pricing_tiers_enterpriseFeature6(),
          m.pricing_tiers_enterpriseFeature7(),
        ],
      },
    ];
  });

  function tierButtonLabel(tierName: string): string {
    return tierName === m.pricing_tiers_enterpriseName()
      ? m.pricing_tiers_contactSales()
      : m.pricing_tiers_getStarted();
  }
</script>

<div class="grid gap-6 md:grid-cols-3">
  {#each tiers as t, ti (ti)}
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
        {tierButtonLabel(t.name)}
      </button>
    </div>
  {/each}
</div>
