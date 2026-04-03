import { useIntlayer } from 'react-intlayer';
const products = [
  {
    name: content.benchmarkCli.value,
    desc: content.runBenchmarksLocallyFromYour.value,
    price: "Free",
  },
  {
    name: content.benchmarkCloud.value,
    desc: content.automatedCloudBasedBenchmarkingWith.value,
    price: "$29/mo",
  },
  {
    name: content.benchmarkEnterprise.value,
    desc: content.onPremiseDeploymentWithSso.value,
    price: content.contactUs.value,
  },
  {
    name: content.migrationAssistant.value,
    desc: content.aiPoweredToolThatHelps.value,
    price: "$99 one-time",
  },
  {
    name: content.translationQa.value,
    desc: content.automatedQualityChecksForMissing.value,
    price: "$19/mo",
  },
  {
    name: content.bundleOptimizer.value,
    desc: content.analyzesAndOptimizesYourI18n.value,
    price: "$49/mo",
  },
];

export default function ProductsGrid() {
  const content = useIntlayer('products-grid');

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div
          key={p.name}
          className="flex flex-col justify-between rounded-lg border border-border bg-card p-6"
        >
          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {p.name}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-primary">{p.price}</span>
            <button
              type="button"
              className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >{content.learnMore}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
