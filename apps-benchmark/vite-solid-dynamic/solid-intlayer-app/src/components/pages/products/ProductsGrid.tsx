import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function ProductsGrid() {
  const content = useIntlayer('products-grid');

  const products = [
    {
      name: content().benchmarkCli.value,
      desc: content().runBenchmarksLocallyFromYour.value,
      price: content().free.value,
    },
    {
      name: content().benchmarkCloud.value,
      desc: content().automatedCloudBasedBenchmarkingWith.value,
      price: '$29/mo',
    },
    {
      name: content().benchmarkEnterprise.value,
      desc: content().onPremiseDeploymentWithSso.value,
      price: content().contactUs.value,
    },
    {
      name: content().migrationAssistant.value,
      desc: content().aiPoweredToolThatHelps.value,
      price: '$99 one-time',
    },
    {
      name: content().translationQa.value,
      desc: content().automatedQualityChecksForMissing.value,
      price: '$19/mo',
    },
    {
      name: content().bundleOptimizer.value,
      desc: content().analyzesAndOptimizesYourI18n.value,
      price: '$49/mo',
    },
  ];

  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <For each={products}>
        {(p) => (
          <div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
            <div>
              <h3 class="mb-2 text-lg font-semibold text-foreground">
                {p.name}
              </h3>
              <p class="mb-4 text-sm text-muted-foreground">{p.desc}</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-primary">{p.price}</span>
              <button
                type="button"
                class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {content().learnMore}
              </button>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
