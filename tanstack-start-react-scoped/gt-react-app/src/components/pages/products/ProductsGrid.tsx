import { T } from "gt-react";

const products = [
  {
    name: <T>Benchmark CLI</T>,
    desc: (
      <T>
        Run benchmarks locally from your terminal. Supports custom
        configurations and CI integration.
      </T>
    ),
    price: <T>Free</T>,
  },
  {
    name: <T>Benchmark Cloud</T>,
    desc: (
      <T>
        Automated cloud-based benchmarking with historical tracking, alerts, and
        team dashboards.
      </T>
    ),
    price: "$29/mo",
  },
  {
    name: <T>Benchmark Enterprise</T>,
    desc: (
      <T>
        On-premise deployment with SSO, audit logs, custom SLAs, and dedicated
        support.
      </T>
    ),
    price: <T>Contact Us</T>,
  },
  {
    name: <T>Migration Assistant</T>,
    desc: (
      <T>
        AI-powered tool that helps migrate your codebase between i18n libraries
        with zero downtime.
      </T>
    ),
    price: <T>$99 one-time</T>,
  },
  {
    name: <T>Translation QA</T>,
    desc: (
      <T>
        Automated quality checks for missing translations, pluralization issues,
        and context errors.
      </T>
    ),
    price: "$19/mo",
  },
  {
    name: <T>Bundle Optimizer</T>,
    desc: (
      <T>
        Analyzes and optimizes your i18n bundle for production with tree-shaking
        and code splitting.
      </T>
    ),
    price: "$49/mo",
  },
];

export default function ProductsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div
          key={p.name?.toString() || ""}
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
              <T>Learn More</T>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
