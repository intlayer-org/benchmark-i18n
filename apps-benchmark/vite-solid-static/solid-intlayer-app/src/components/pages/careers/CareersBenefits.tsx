import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function CareersBenefits() {
  const content = useIntlayer('careers-benefits');

  const benefits = [
    { label: 'Remote-first', value: content().workFromAnywhereInThe.value },
    {
      label: content().competitivePay.value,
      value: content().topOfMarketCompensation.value,
    },
    {
      label: content().openSourceTime.value,
      value: content().x20TimeForOssContributions.value,
    },
  ];

  return (
    <div class="mb-12 grid gap-4 md:grid-cols-3">
      <For each={benefits}>
        {(b) => (
          <div class="rounded-lg border border-border bg-card p-4 text-center">
            <p class="text-sm font-semibold text-foreground">{b.label}</p>
            <p class="text-xs text-muted-foreground">{b.value}</p>
          </div>
        )}
      </For>
    </div>
  );
}
