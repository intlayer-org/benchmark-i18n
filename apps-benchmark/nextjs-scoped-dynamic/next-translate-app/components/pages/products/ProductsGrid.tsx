"use client";

import useTranslation from "next-translate/useTranslation";

export default function ProductsGrid() {
  const { t } = useTranslation("products");

  const products = [
    {
      name: t("products.benchmarkCli"),
      desc: t("products.runBenchmarksLocallyFromYour"),
      price: t("products.free"),
    },
    {
      name: t("products.benchmarkCloud"),
      desc: t("products.automatedCloudBasedBenchmarkingWith"),
      price: t("products.price29mo"),
    },
    {
      name: t("products.benchmarkEnterprise"),
      desc: t("products.onPremiseDeploymentWithSso"),
      price: t("products.contactUs"),
    },
    {
      name: t("products.migrationAssistant"),
      desc: t("products.aiPoweredToolThatHelps"),
      price: t("products.price99oneTime"),
    },
    {
      name: t("products.translationQa"),
      desc: t("products.automatedQualityChecksForMissing"),
      price: t("products.price19mo"),
    },
    {
      name: t("products.bundleOptimizer"),
      desc: t("products.analyzesAndOptimizesYourI18n"),
      price: t("products.price49mo"),
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
              {t("products.learnMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
