"use client";

import { useTranslation } from "react-i18next";

export default function ProductsGrid() {
  const { t } = useTranslation();

  const products = [
    {
      name: t("products.products.benchmarkCLI"),
      desc: t("products.products.benchmarkCLIDesc"),
      price: t("products.products.benchmarkCLIPrice"),
    },
    {
      name: t("products.products.benchmarkCloud"),
      desc: t("products.products.benchmarkCloudDesc"),
      price: t("products.products.benchmarkCloudPrice"),
    },
    {
      name: t("products.products.benchmarkEnterprise"),
      desc: t("products.products.benchmarkEnterpriseDesc"),
      price: t("products.products.benchmarkEnterprisePrice"),
    },
    {
      name: t("products.products.migrationAssistant"),
      desc: t("products.products.migrationAssistantDesc"),
      price: t("products.products.migrationAssistantPrice"),
    },
    {
      name: t("products.products.translationQA"),
      desc: t("products.products.translationQADesc"),
      price: t("products.products.translationQAPrice"),
    },
    {
      name: t("products.products.bundleOptimizer"),
      desc: t("products.products.bundleOptimizerDesc"),
      price: t("products.products.bundleOptimizerPrice"),
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
