import { T, useTranslate } from "@tolgee/react";

export default function BlogList() {
  const { t } = useTranslate("blog");

  const posts = [
    {
      title: t("blogList.comparingI18nLibrariesIn", "Comparing i18n Libraries in 2026: A Deep Dive"),
      date: t("blogList.march152026", "March 15, 2026"),
      excerpt: t(
        "blogList.weTested12DifferentInternationalization",
        "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
      ),
      category: t("blogList.benchmark", "Benchmark"),
    },
    {
      title: t("blogList.howToReduceYourI18n", "How to Reduce Your i18n Bundle by 60%"),
      date: t("blogList.march82026", "March 8, 2026"),
      excerpt: t(
        "blogList.practicalStrategiesForOptimizingTranslation",
        "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
      ),
      category: t("blogList.tutorial", "Tutorial"),
    },
    {
      title: t("blogList.theStateOfInternationalizationIn", "The State of Internationalization in React"),
      date: t("blogList.february282026", "February 28, 2026"),
      excerpt: t(
        "blogList.anOverviewOfTheCurrentI18n",
        "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
      ),
      category: t("blogList.analysis", "Analysis"),
    },
    {
      title: t("blogList.migratingFromReactI18nextTo", "Migrating from react-i18next to Lingui"),
      date: t("blogList.february152026", "February 15, 2026"),
      excerpt: t(
        "blogList.aStepByStepGuideOnMigrating",
        "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
      ),
      category: t("blogList.tutorial", "Tutorial"),
    },
    {
      title: t("blogList.serverComponentsAndI18nWhat", "Server Components and i18n: What Changes?"),
      date: t("blogList.february12026", "February 1, 2026"),
      excerpt: t(
        "blogList.reactServerComponentsIntroduceNew",
        "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
      ),
      category: t("blogList.analysis", "Analysis"),
    },
    {
      title: t("blogList.benchmarkMethodologyHowWe", "Benchmark Methodology: How We Test"),
      date: t("blogList.january202026", "January 20, 2026"),
      excerpt: t(
        "blogList.aTransparentLookAtOurBenchmarking",
        "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
      ),
      category: t("blogList.meta", "Meta"),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((p) => (
        <article
          key={p.title}
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
            <T keyName="common.readMore" defaultValue="Read More" /> →
          </button>
        </article>
      ))}
    </div>
  );
}
