"use client";

import { useTranslations } from "next-intl";

export default function ProductsGrid() {
  const t = useTranslations();

  const products = [
    {
      name: t("products-grid.benchmarkCli"),
      desc: t("products-grid.runBenchmarksLocallyFromYour"),
      price: t("products-grid.free"),
    },
    {
      name: t("products-grid.benchmarkCloud"),
      desc: t("products-grid.automatedCloudBasedBenchmarkingWith"),
      price: t("products-grid.price29mo"),
    },
    {
      name: t("products-grid.benchmarkEnterprise"),
      desc: t("products-grid.onPremiseDeploymentWithSso"),
      price: t("products-grid.contactUs"),
    },
    {
      name: t("products-grid.migrationAssistant"),
      desc: t("products-grid.aiPoweredToolThatHelps"),
      price: t("products-grid.price99oneTime"),
    },
    {
      name: t("products-grid.translationQa"),
      desc: t("products-grid.automatedQualityChecksForMissing"),
      price: t("products-grid.price19mo"),
    },
    {
      name: t("products-grid.bundleOptimizer"),
      desc: t("products-grid.analyzesAndOptimizesYourI18n"),
      price: t("products-grid.price49mo"),
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
            <h3 className="mb-2 text-lg font-semibold text-foreground">{p.name}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-primary">{p.price}</span>
            <button
              type="button"
              className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t("products-grid.learnMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
