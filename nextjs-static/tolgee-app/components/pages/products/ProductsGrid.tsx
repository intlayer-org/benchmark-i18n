"use client";

import { T, useTranslate } from "@/i18n/tolgee";

export default function ProductsGrid() {
  const { t } = useTranslate();

  const products = [
    {
      name: t("productsGrid.benchmarkDashboard", "Benchmark Dashboard"),
      desc: t(
        "productsGrid.interactiveChartsAndTables",
        "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost."
      ),
      price: t("pricingTiers.free", "Free"),
    },
    {
      name: t("productsGrid.bundleAnalyzer", "Bundle Analyzer"),
      desc: t(
        "productsGrid.uploadYourBuildOutput",
        "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead."
      ),
      price: "$29/mo",
    },
    {
      name: t("productsGrid.migrationAssistant", "Migration Assistant"),
      desc: t(
        "productsGrid.automatedCodemodsAndGuides",
        "Automated codemods and guides for migrating between i18n libraries with minimal disruption."
      ),
      price: t("pricingTiers.custom", "Custom"),
    },
    {
      name: t("productsGrid.performanceMonitor", "Performance Monitor"),
      desc: t(
        "productsGrid.continuousPerformanceTrackingFor",
        "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades."
      ),
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
              <T keyName="productsGrid.learnMore" defaultValue="Learn More" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
