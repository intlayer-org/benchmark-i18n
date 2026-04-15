"use client";

import { useTranslation } from "react-i18next";

export default function ProductsGrid() {
  const { t } = useTranslation("products");

  const products = [
    {
      name: t("products.benchmarkCLI"),
      desc: t("products.benchmarkCLIDesc"),
      price: t("products.benchmarkCLIPrice"),
    },
    {
      name: t("products.benchmarkCloud"),
      desc: t("products.benchmarkCloudDesc"),
      price: t("products.benchmarkCloudPrice"),
    },
    {
      name: t("products.benchmarkEnterprise"),
      desc: t("products.benchmarkEnterpriseDesc"),
      price: t("products.benchmarkEnterprisePrice"),
    },
    {
      name: t("products.migrationAssistant"),
      desc: t("products.migrationAssistantDesc"),
      price: t("products.migrationAssistantPrice"),
    },
    {
      name: t("products.translationQA"),
      desc: t("products.translationQADesc"),
      price: t("products.translationQAPrice"),
    },
    {
      name: t("products.bundleOptimizer"),
      desc: t("products.bundleOptimizerDesc"),
      price: t("products.bundleOptimizerPrice"),
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
