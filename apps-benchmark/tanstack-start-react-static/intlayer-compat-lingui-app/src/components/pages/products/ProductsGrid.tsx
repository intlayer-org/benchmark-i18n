import { useLingui } from "@lingui/react";

export default function ProductsGrid() {
  const { i18n } = useLingui();

  const products = [
    {
      name: i18n._({ id: "products.benchmarkCli", message: "Benchmark CLI" }),
      desc: i18n._({
        id: "products.benchmarkCliDesc",
        message:
          "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
      }),
      price: i18n._({ id: "products.free", message: "Free" }),
    },
    {
      name: i18n._({ id: "products.benchmarkCloud", message: "Benchmark Cloud" }),
      desc: i18n._({
        id: "products.benchmarkCloudDesc",
        message:
          "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
      }),
      price: i18n._({ id: "products.price.benchmarkCloud", message: "$29/mo" }),
    },
    {
      name: i18n._({
        id: "products.benchmarkEnterprise",
        message: "Benchmark Enterprise",
      }),
      desc: i18n._({
        id: "products.benchmarkEnterpriseDesc",
        message:
          "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
      }),
      price: i18n._({ id: "products.contactUs", message: "Contact Us" }),
    },
    {
      name: i18n._({
        id: "products.migrationAssistant",
        message: "Migration Assistant",
      }),
      desc: i18n._({
        id: "products.migrationAssistantDesc",
        message:
          "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
      }),
      price: i18n._({
        id: "products.price.migrationAssistant",
        message: "$99 one-time",
      }),
    },
    {
      name: i18n._({ id: "products.translationQa", message: "Translation QA" }),
      desc: i18n._({
        id: "products.translationQaDesc",
        message:
          "Automated quality checks for missing translations, pluralization issues, and context errors.",
      }),
      price: i18n._({ id: "products.price.translationQa", message: "$19/mo" }),
    },
    {
      name: i18n._({ id: "products.bundleOptimizer", message: "Bundle Optimizer" }),
      desc: i18n._({
        id: "products.bundleOptimizerDesc",
        message:
          "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
      }),
      price: i18n._({ id: "products.price.bundleOptimizer", message: "$49/mo" }),
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
              {i18n._({ id: "products.learnMore", message: "Learn More" })}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
