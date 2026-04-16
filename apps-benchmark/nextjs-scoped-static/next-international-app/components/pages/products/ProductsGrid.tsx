"use client";

import { useScopedI18n } from "../../../locales/client";

export default function ProductsGrid() {
  const scopedT = useScopedI18n("products-grid");

  const products = [
    {
      name: scopedT("benchmarkCli"),
      desc: scopedT("runBenchmarksLocallyFromYour"),
      price: scopedT("free"),
    },
    {
      name: scopedT("benchmarkCloud"),
      desc: scopedT("automatedCloudBasedBenchmarkingWith"),
      price: scopedT("price29mo"),
    },
    {
      name: scopedT("benchmarkEnterprise"),
      desc: scopedT("onPremiseDeploymentWithSso"),
      price: scopedT("contactUs"),
    },
    {
      name: scopedT("migrationAssistant"),
      desc: scopedT("aiPoweredToolThatHelps"),
      price: scopedT("price99oneTime"),
    },
    {
      name: scopedT("translationQa"),
      desc: scopedT("automatedQualityChecksForMissing"),
      price: scopedT("price19mo"),
    },
    {
      name: scopedT("bundleOptimizer"),
      desc: scopedT("analyzesAndOptimizesYourI18n"),
      price: scopedT("price49mo"),
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
              {scopedT("learnMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
