"use client";

import { useScopedI18n } from "../../../locales/client";

export default function BlogList() {
  const scopedT = useScopedI18n("blog-list");

  const posts = [
    {
      title: scopedT("comparingI18nLibrariesIn2026"),
      date: scopedT("march82026"),
      excerpt: scopedT("weTested12DifferentInternationalization"),
      category: "Benchmark",
    },
    {
      title: scopedT("howToReduceYourI18n"),
      date: scopedT("march82026"),
      excerpt: scopedT("practicalStrategiesForOptimizingTranslation"),
      category: "Tutorial",
    },
    {
      title: scopedT("theStateOfInternationalizationIn"),
      date: scopedT("february282026"),
      excerpt: scopedT("anOverviewOfTheCurrent"),
      category: "Analysis",
    },
    {
      title: scopedT("migratingFromReactI18nextTo"),
      date: scopedT("february152026"),
      excerpt: scopedT("aStepByStepGuide"),
      category: "Tutorial",
    },
    {
      title: scopedT("serverComponentsAndI18nWhat"),
      date: scopedT("february12026"),
      excerpt: scopedT("reactServerComponentsIntroduceNew"),
      category: "Analysis",
    },
    {
      title: scopedT("benchmarkMethodologyHowWeTest"),
      date: scopedT("january202026"),
      excerpt: scopedT("aTransparentLookAtOur"),
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
            {scopedT("readMore")}
          </button>
        </article>
      ))}
    </div>
  );
}
