import * as m from "../../../paraglide/messages";

export default function ProductsGrid() {
  const products = [
    {
      name: m["products-grid.benchmarkCli"](),
      desc: m["products-grid.runBenchmarksLocallyFromYour"](),
      price: "Free",
    },
    {
      name: m["products-grid.benchmarkCloud"](),
      desc: m["products-grid.automatedCloudBasedBenchmarkingWith"](),
      price: "$29/mo",
    },
    {
      name: m["products-grid.benchmarkEnterprise"](),
      desc: m["products-grid.onPremiseDeploymentWithSso"](),
      price: m["products-grid.contactUs"](),
    },
    {
      name: m["products-grid.migrationAssistant"](),
      desc: m["products-grid.aiPoweredToolThatHelps"](),
      price: "$99 one-time",
    },
    {
      name: m["products-grid.translationQa"](),
      desc: m["products-grid.automatedQualityChecksForMissing"](),
      price: "$19/mo",
    },
    {
      name: m["products-grid.bundleOptimizer"](),
      desc: m["products-grid.analyzesAndOptimizesYourI18n"](),
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
              {m["products-grid.learnMore"]()}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
