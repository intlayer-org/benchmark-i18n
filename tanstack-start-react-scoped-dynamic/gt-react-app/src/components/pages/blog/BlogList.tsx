import { T } from "gt-react";

export default function BlogList() {
  const posts = [
    {
      title: <T>Comparing i18n Libraries in 2026: A Deep Dive</T>,
      date: <T>March 15, 2026</T>,
      excerpt: (
        <T>
          We tested 12 different internationalization libraries across
          performance, bundle size, and DX. Here are the surprising results.
        </T>
      ),
      category: <T>Benchmark</T>,
    },
    {
      title: <T>How to Reduce Your i18n Bundle by 60%</T>,
      date: <T>March 8, 2026</T>,
      excerpt: (
        <T>
          Practical strategies for optimizing translation bundles including lazy
          loading, code splitting, and compile-time optimizations.
        </T>
      ),
      category: <T>Tutorial</T>,
    },
    {
      title: <T>The State of Internationalization in React</T>,
      date: <T>February 28, 2026</T>,
      excerpt: (
        <T>
          An overview of the current i18n ecosystem in React, covering trends,
          emerging patterns, and community preferences.
        </T>
      ),
      category: <T>Analysis</T>,
    },
    {
      title: <T>Migrating from react-i18next to Lingui</T>,
      date: <T>February 15, 2026</T>,
      excerpt: (
        <T>
          A step-by-step guide on migrating a production app with 50,000
          translation keys from react-i18next to Lingui.
        </T>
      ),
      category: <T>Tutorial</T>,
    },
    {
      title: <T>Server Components and i18n: What Changes?</T>,
      date: <T>February 1, 2026</T>,
      excerpt: (
        <T>
          React Server Components introduce new patterns for internationalization.
          We explore the implications and best practices.
        </T>
      ),
      category: <T>Analysis</T>,
    },
    {
      title: <T>Benchmark Methodology: How We Test</T>,
      date: <T>January 20, 2026</T>,
      excerpt: (
        <T>
          A transparent look at our benchmarking methodology, including test
          environments, statistical methods, and reproducibility.
        </T>
      ),
      category: <T>Meta</T>,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((p, i) => (
        <article
          key={i}
          className="rounded-lg border border-border bg-card p-6"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
              {p.category}
            </span>
            <span className="text-xs text-muted-foreground">{p.date}</span>
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            {p.title}
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">{p.excerpt}</p>
          <button
            type="button"
            className="text-sm font-medium text-primary hover:underline"
          >
            <T>Read More →</T>
          </button>
        </article>
      ))}
    </div>
  );
}
