import { useTranslations } from "use-intl";

export default function ProductsGrid() {
  const t = useTranslations("products-grid");

  const products = [
    {
      name: t("benchmarkCli"),
      desc: t("runBenchmarksLocallyFromYour"),
      price: "Free",
    },
    {
      name: t("benchmarkCloud"),
      desc: t("automatedCloudBasedBenchmarkingWith"),
      price: "$29/mo",
    },
    {
      name: t("benchmarkEnterprise"),
      desc: t("onPremiseDeploymentWithSso"),
      price: t("contactUs"),
    },
    {
      name: t("migrationAssistant"),
      desc: t("aiPoweredToolThatHelps"),
      price: "$99 one-time",
    },
    {
      name: t("translationQa"),
      desc: t("automatedQualityChecksForMissing"),
      price: "$19/mo",
    },
    {
      name: t("bundleOptimizer"),
      desc: t("analyzesAndOptimizesYourI18n"),
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
              {t("learnMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
