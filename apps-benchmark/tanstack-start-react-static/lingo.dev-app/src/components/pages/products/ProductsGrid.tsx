export default function ProductsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Benchmark CLI
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">Run benchmarks locally from your terminal. Supports custom configurations and CI integration.</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-primary">Free</span>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Benchmark Cloud
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-primary">$29/mo</span>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Benchmark Enterprise
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-primary">Contact Us</span>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Migration Assistant
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-primary">$99 one-time</span>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Translation QA
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">Automated quality checks for missing translations, pluralization issues, and context errors.</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-primary">$19/mo</span>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Bundle Optimizer
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-primary">$49/mo</span>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
