"use client";

import { useTranslations } from "next-intl";

export default function BlogList() {
  const t = useTranslations();

  const posts = [
    {
      title: t("blog-list.comparingI18nLibrariesIn2026"),
      date: t("blog-list.march82026"),
      excerpt: t("blog-list.weTested12DifferentInternationalization"),
      category: "Benchmark",
    },
    {
      title: t("blog-list.howToReduceYourI18n"),
      date: t("blog-list.march82026"),
      excerpt: t("blog-list.practicalStrategiesForOptimizingTranslation"),
      category: "Tutorial",
    },
    {
      title: t("blog-list.theStateOfInternationalizationIn"),
      date: t("blog-list.february282026"),
      excerpt: t("blog-list.anOverviewOfTheCurrent"),
      category: "Analysis",
    },
    {
      title: t("blog-list.migratingFromReactI18nextTo"),
      date: t("blog-list.february152026"),
      excerpt: t("blog-list.aStepByStepGuide"),
      category: "Tutorial",
    },
    {
      title: t("blog-list.serverComponentsAndI18nWhat"),
      date: t("blog-list.february12026"),
      excerpt: t("blog-list.reactServerComponentsIntroduceNew"),
      category: "Analysis",
    },
    {
      title: t("blog-list.benchmarkMethodologyHowWeTest"),
      date: t("blog-list.january202026"),
      excerpt: t("blog-list.aTransparentLookAtOur"),
      category: "Meta",
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
            {t("blog-list.readMore")}
          </button>
        </article>
      ))}
    </div>
  );
}
