import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function PricingTiers() {
  const content = useIntlayer('pricing-tiers');

  const tiers = [
    {
      name: content().starter.value,
      price: '$0',
      period: 'forever',
      features: [
        content().x5BenchmarkRunsday.value,
        '3 libraries',
        content().communitySupport.value,
        content().publicResults.value,
      ],
    },
    {
      name: content().pro.value,
      price: '$29',
      period: '/month',
      features: [
        content().unlimitedRuns.value,
        content().allLibraries.value,
        content().prioritySupport.value,
        content().privateResults.value,
        content().ciIntegration.value,
        content().historicalData.value,
      ],
      highlighted: true,
    },
    {
      name: content().enterprise.value,
      price: content().custom.value,
      period: '',
      features: [
        content().everythingInPro.value,
        content().onPremiseOption.value,
        content().ssoSaml.value,
        content().dedicatedAccountManager.value,
        content().customSlas.value,
        content().auditLogs.value,
        content().trainingSessions.value,
      ],
    },
  ];

  return (
    <div class="grid gap-6 md:grid-cols-3">
      <For each={tiers}>
        {(t) => (
          <div
            class={`flex flex-col rounded-lg border p-6 ${
              t.highlighted
                ? content().borderPrimaryBgPrimary5Ring.value
                : 'border-border bg-card'
            }`}
          >
            <h3 class="text-lg font-semibold text-foreground">{t.name}</h3>
            <div class="my-4">
              <span class="text-3xl font-bold text-foreground">{t.price}</span>
              <span class="text-sm text-muted-foreground">{t.period}</span>
            </div>
            <ul class="mb-6 flex-1 space-y-2">
              <For each={t.features}>
                {(f) => (
                  <li class="flex items-center gap-2 text-sm text-muted-foreground">
                    <span class="text-primary">✓</span> {f}
                  </li>
                )}
              </For>
            </ul>
            <button
              type="button"
              class={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
                t.highlighted
                  ? 'bg-primary text-primary-foreground'
                  : content().borderBorderBorderTextForeground.value
              }`}
            >
              {t.name === content().enterprise.value
                ? content().contactSales.value
                : content().getStarted.value}
            </button>
          </div>
        )}
      </For>
    </div>
  );
}
