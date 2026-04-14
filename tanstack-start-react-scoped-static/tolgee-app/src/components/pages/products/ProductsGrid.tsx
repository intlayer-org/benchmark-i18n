import { T, useTranslate } from "../../../i18n/tolgee";

export default function ProductsGrid() {
  const { t } = useTranslate("products");

  const products = [
    {
      name: t("products.benchmarkCLI", "Benchmark CLI"),
      desc: t(
        "products.benchmarkCLIDesc",
        "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
      ),
      price: t("products.benchmarkCLIPrice", "Free"),
    },
    {
      name: t("products.benchmarkCloud", "Benchmark Cloud"),
      desc: t(
        "products.benchmarkCloudDesc",
        "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
      ),
      price: t("products.benchmarkCloudPrice", "$29/mo"),
    },
    {
      name: t("products.benchmarkEnterprise", "Benchmark Enterprise"),
      desc: t(
        "products.benchmarkEnterpriseDesc",
        "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
      ),
      price: t("products.benchmarkEnterprisePrice", "Contact Us"),
    },
    {
      name: t("products.migrationAssistant", "Migration Assistant"),
      desc: t(
        "products.migrationAssistantDesc",
        "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
      ),
      price: t("products.migrationAssistantPrice", "$99 one-time"),
    },
    {
      name: t("products.translationQA", "Translation QA"),
      desc: t(
        "products.translationQADesc",
        "Automated quality checks for missing translations, pluralization issues, and context errors."
      ),
      price: t("products.translationQAPrice", "$19/mo"),
    },
    {
      name: t("products.bundleOptimizer", "Bundle Optimizer"),
      desc: t(
        "products.bundleOptimizerDesc",
        "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
      ),
      price: t("products.bundleOptimizerPrice", "$49/mo"),
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
              <T ns="products" keyName="products.learnMore" defaultValue="Learn More" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
