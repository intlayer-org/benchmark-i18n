"use client";

import { useTranslation } from "react-i18next";

export default function BlogList() {
  const { t } = useTranslation("blog");

  const posts = [
    {
      title: t("blogList.i18nBenchmark2026Results"),
      date: t("blogList.march152026"),
      excerpt: t("blogList.weTested12DifferentInternationalization"),
      category: "Benchmark",
    },
    {
      title: t("blogList.howToReduceYourI18n"),
      date: t("blogList.march82026"),
      excerpt: t("blogList.practicalStrategiesForOptimizingTranslation"),
      category: "Tutorial",
    },
    {
      title: t("blogList.theStateOfInternationalizationIn"),
      date: t("blogList.february282026"),
      excerpt: t("blogList.anOverviewOfTheCurrent"),
      category: "Analysis",
    },
    {
      title: t("blogList.migratingFromReactI18nextTo"),
      date: t("blogList.february152026"),
      excerpt: t("blogList.aStepByStepGuide"),
      category: "Tutorial",
    },
    {
      title: t("blogList.serverComponentsAndI18nWhat"),
      date: t("blogList.february12026"),
      excerpt: t("blogList.reactServerComponentsIntroduceNew"),
      category: "Analysis",
    },
    {
      title: t("blogList.benchmarkMethodologyHowWeTest"),
      date: t("blogList.january202026"),
      excerpt: t("blogList.aTransparentLookAtOur"),
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
            {t("blogList.readMore")}
          </button>
        </article>
      ))}
    </div>
  );
}
