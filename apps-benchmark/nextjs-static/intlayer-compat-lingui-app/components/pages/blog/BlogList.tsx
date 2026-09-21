"use client";

import { useLingui } from "@lingui/react";

export default function BlogList() {
  const { i18n } = useLingui();

  const posts = [
    {
      title: i18n._("blog-list.comparingI18nLibrariesIn2026"),
      date: "March 15, 2026",
      excerpt: i18n._("blog-list.weTested12DifferentInternationalization"),
      category: "Benchmark",
    },
    {
      title: i18n._("blog-list.howToReduceYourI18n"),
      date: i18n._("blog-list.march82026"),
      excerpt: i18n._("blog-list.practicalStrategiesForOptimizingTranslation"),
      category: "Tutorial",
    },
    {
      title: i18n._("blog-list.theStateOfInternationalizationIn"),
      date: i18n._("blog-list.february282026"),
      excerpt: i18n._("blog-list.anOverviewOfTheCurrent"),
      category: "Analysis",
    },
    {
      title: i18n._("blog-list.migratingFromReactI18nextTo"),
      date: i18n._("blog-list.february152026"),
      excerpt: i18n._("blog-list.aStepByStepGuide"),
      category: "Tutorial",
    },
    {
      title: i18n._("blog-list.serverComponentsAndI18nWhat"),
      date: i18n._("blog-list.february12026"),
      excerpt: i18n._("blog-list.reactServerComponentsIntroduceNew"),
      category: "Analysis",
    },
    {
      title: i18n._("blog-list.benchmarkMethodologyHowWeTest"),
      date: i18n._("blog-list.january202026"),
      excerpt: i18n._("blog-list.aTransparentLookAtOur"),
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
            {i18n._("blog-list.readMore")}
          </button>
        </article>
      ))}
    </div>
  );
}
