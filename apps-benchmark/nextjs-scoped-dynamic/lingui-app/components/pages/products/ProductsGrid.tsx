"use client";

import { useLingui } from "@lingui/react";

export default function ProductsGrid() {
  const { i18n } = useLingui();

  const products = [
    {
      name: i18n._({ id: "products-grid.benchmarkCli", message: "Benchmark CLI" }),
      desc: i18n._({
        id: "products-grid.runBenchmarksLocallyFromYour",
        message:
          "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
      }),
      price: "Free",
    },
    {
      name: i18n._({ id: "products-grid.benchmarkCloud", message: "Benchmark Cloud" }),
      desc: i18n._({
        id: "products-grid.automatedCloudBasedBenchmarkingWith",
        message:
          "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
      }),
      price: "$29/mo",
    },
    {
      name: i18n._({
        id: "products-grid.benchmarkEnterprise",
        message: "Benchmark Enterprise",
      }),
      desc: i18n._({
        id: "products-grid.onPremiseDeploymentWithSso",
        message:
          "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
      }),
      price: i18n._({ id: "products-grid.contactUs", message: "Contact Us" }),
    },
    {
      name: i18n._({
        id: "products-grid.migrationAssistant",
        message: "Migration Assistant",
      }),
      desc: i18n._({
        id: "products-grid.aiPoweredToolThatHelps",
        message:
          "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
      }),
      price: "$99 one-time",
    },
    {
      name: i18n._({ id: "products-grid.translationQa", message: "Translation QA" }),
      desc: i18n._({
        id: "products-grid.automatedQualityChecksForMissing",
        message:
          "Automated quality checks for missing translations, pluralization issues, and context errors.",
      }),
      price: "$19/mo",
    },
    {
      name: i18n._({ id: "products-grid.bundleOptimizer", message: "Bundle Optimizer" }),
      desc: i18n._({
        id: "products-grid.analyzesAndOptimizesYourI18n",
        message:
          "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
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
              {i18n._({ id: "products-grid.learnMore", message: "Learn More" })}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
