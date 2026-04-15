"use client";

import * as m from "../../../paraglide/messages";

export default function BlogList() {
  const posts = [
    {
      title: m["blog-list.comparingI18nLibrariesIn2026"](),
      date: m["blog-list.march82026"](),
      excerpt: m["blog-list.weTested12DifferentInternationalization"](),
      category: "Benchmark",
    },
    {
      title: m["blog-list.howToReduceYourI18n"](),
      date: m["blog-list.march82026"](),
      excerpt: m["blog-list.practicalStrategiesForOptimizingTranslation"](),
      category: "Tutorial",
    },
    {
      title: m["blog-list.theStateOfInternationalizationIn"](),
      date: m["blog-list.february282026"](),
      excerpt: m["blog-list.anOverviewOfTheCurrent"](),
      category: "Analysis",
    },
    {
      title: m["blog-list.migratingFromReactI18nextTo"](),
      date: m["blog-list.february152026"](),
      excerpt: m["blog-list.aStepByStepGuide"](),
      category: "Tutorial",
    },
    {
      title: m["blog-list.serverComponentsAndI18nWhat"](),
      date: m["blog-list.february12026"](),
      excerpt: m["blog-list.reactServerComponentsIntroduceNew"](),
      category: "Analysis",
    },
    {
      title: m["blog-list.benchmarkMethodologyHowWeTest"](),
      date: m["blog-list.january202026"](),
      excerpt: m["blog-list.aTransparentLookAtOur"](),
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
            {m["blog-list.readMore"]()}
          </button>
        </article>
      ))}
    </div>
  );
}
