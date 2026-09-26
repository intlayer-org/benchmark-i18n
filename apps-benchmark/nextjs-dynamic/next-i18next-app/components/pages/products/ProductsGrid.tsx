"use client";

import { useTranslation } from "react-i18next";

export default function ProductsGrid() {
  const { t } = useTranslation();

  const products = [
    {
      name: t("products.products.benchmarkCli"),
      desc: t("products.products.runBenchmarksLocallyFromYour"),
      price: t("products.products.free"),
    },
    {
      name: t("products.products.benchmarkCloud"),
      desc: t("products.products.automatedCloudBasedBenchmarkingWith"),
      price: t("products.products.price29mo"),
    },
    {
      name: t("products.products.benchmarkEnterprise"),
      desc: t("products.products.onPremiseDeploymentWithSso"),
      price: t("products.products.contactUs"),
    },
    {
      name: t("products.products.migrationAssistant"),
      desc: t("products.products.aiPoweredToolThatHelps"),
      price: t("products.products.price99oneTime"),
    },
    {
      name: t("products.products.translationQa"),
      desc: t("products.products.automatedQualityChecksForMissing"),
      price: t("products.products.price19mo"),
    },
    {
      name: t("products.products.bundleOptimizer"),
      desc: t("products.products.analyzesAndOptimizesYourI18n"),
      price: t("products.products.price49mo"),
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
              {t("products.products.learnMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
