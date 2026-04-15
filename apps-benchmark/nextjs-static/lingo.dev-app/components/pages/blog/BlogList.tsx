export default function BlogList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <article className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
            Benchmark
          </span>
          <span className="text-xs text-muted-foreground">March 15, 2026</span>
        </div>
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Comparing i18n Libraries in 2026: A Deep Dive
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          We tested 12 different internationalization libraries across
          performance, bundle size, and DX. Here are the surprising results.
        </p>
        <button
          type="button"
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </button>
      </article>

      <article className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
            Tutorial
          </span>
          <span className="text-xs text-muted-foreground">March 8, 2026</span>
        </div>
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          How to Reduce Your i18n Bundle by 60%
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Practical strategies for optimizing translation bundles including lazy
          loading, code splitting, and compile-time optimizations.
        </p>
        <button
          type="button"
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </button>
      </article>

      <article className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
            Analysis
          </span>
          <span className="text-xs text-muted-foreground">
            February 28, 2026
          </span>
        </div>
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          The State of Internationalization in React
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          An overview of the current i18n ecosystem in React, covering trends,
          emerging patterns, and community preferences.
        </p>
        <button
          type="button"
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </button>
      </article>

      <article className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
            Tutorial
          </span>
          <span className="text-xs text-muted-foreground">
            February 15, 2026
          </span>
        </div>
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Migrating from react-i18next to Lingui
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          A step-by-step guide on migrating a production app with 50,000
          translation keys from react-i18next to Lingui.
        </p>
        <button
          type="button"
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </button>
      </article>

      <article className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
            Analysis
          </span>
          <span className="text-xs text-muted-foreground">
            February 1, 2026
          </span>
        </div>
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Server Components and i18n: What Changes?
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          React Server Components introduce new patterns for
          internationalization. We explore the implications and best practices.
        </p>
        <button
          type="button"
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </button>
      </article>

      <article className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
            Meta
          </span>
          <span className="text-xs text-muted-foreground">
            January 20, 2026
          </span>
        </div>
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Benchmark Methodology: How We Test
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          A transparent look at our benchmarking methodology, including test
          environments, statistical methods, and reproducibility.
        </p>
        <button
          type="button"
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </button>
      </article>
    </div>
  );
}
