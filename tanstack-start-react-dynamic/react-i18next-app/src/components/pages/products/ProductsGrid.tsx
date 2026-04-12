import { useTranslation } from "react-i18next";

export default function ProductsGrid() {
  const { t } = useTranslation();

  const products = [
    {
      name: t("productsGrid.benchmarkDashboard"),
      desc: t("productsGrid.interactiveChartsAndTables"),
      price: "Free",
    },
    {
      name: t("productsGrid.bundleAnalyzer"),
      desc: t("productsGrid.uploadYourBuildOutput"),
      price: "$29/mo",
    },
    {
      name: t("productsGrid.migrationAssistant"),
      desc: t("productsGrid.automatedCodemodsAndGuides"),
      price: "$99 one-time",
    },
    {
      name: t("productsGrid.performanceMonitor"),
      desc: t("productsGrid.continuousPerformanceTrackingFor"),
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
              {t("productsGrid.learnMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
