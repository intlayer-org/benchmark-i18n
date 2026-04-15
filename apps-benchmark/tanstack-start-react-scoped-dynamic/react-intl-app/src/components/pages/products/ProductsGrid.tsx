import { useIntl } from "react-intl";

export default function ProductsGrid() {
  const intl = useIntl();

  const products = [
    {
      name: intl.formatMessage({ id: "products-grid.benchmarkCli" }),
      desc: intl.formatMessage({
        id: "products-grid.runBenchmarksLocallyFromYour",
      }),
      price: "Free",
    },
    {
      name: intl.formatMessage({ id: "products-grid.benchmarkCloud" }),
      desc: intl.formatMessage({
        id: "products-grid.automatedCloudBasedBenchmarkingWith",
      }),
      price: "$29/mo",
    },
    {
      name: intl.formatMessage({ id: "products-grid.benchmarkEnterprise" }),
      desc: intl.formatMessage({
        id: "products-grid.onPremiseDeploymentWithSso",
      }),
      price: intl.formatMessage({ id: "products-grid.contactUs" }),
    },
    {
      name: intl.formatMessage({ id: "products-grid.migrationAssistant" }),
      desc: intl.formatMessage({ id: "products-grid.aiPoweredToolThatHelps" }),
      price: "$99 one-time",
    },
    {
      name: intl.formatMessage({ id: "products-grid.translationQa" }),
      desc: intl.formatMessage({
        id: "products-grid.automatedQualityChecksForMissing",
      }),
      price: "$19/mo",
    },
    {
      name: intl.formatMessage({ id: "products-grid.bundleOptimizer" }),
      desc: intl.formatMessage({
        id: "products-grid.analyzesAndOptimizesYourI18n",
      }),
      price: "$49/mo",
    },
  ];

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
            >
              {intl.formatMessage({ id: "products-grid.learnMore" })}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
