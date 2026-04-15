"use client";

import { useTranslation } from "react-i18next";

export default function BlogList() {
  const { t } = useTranslation();

  const posts = [
    {
      title: t("blog.blogList.i18nBenchmark2026Results"),
      date: t("blog.blogList.march152026"),
      excerpt: t("blog.blogList.weTested12DifferentInternationalization"),
      category: "Benchmark",
    },
    {
      title: t("blog.blogList.howToReduceYourI18n"),
      date: t("blog.blogList.march82026"),
      excerpt: t("blog.blogList.practicalStrategiesForOptimizingTranslation"),
      category: "Tutorial",
    },
    {
      title: t("blog.blogList.theStateOfInternationalizationIn"),
      date: t("blog.blogList.february282026"),
      excerpt: t("blog.blogList.anOverviewOfTheCurrent"),
      category: "Analysis",
    },
    {
      title: t("blog.blogList.migratingFromReactI18nextTo"),
      date: t("blog.blogList.february152026"),
      excerpt: t("blog.blogList.aStepByStepGuide"),
      category: "Tutorial",
    },
    {
      title: t("blog.blogList.serverComponentsAndI18nWhat"),
      date: t("blog.blogList.february12026"),
      excerpt: t("blog.blogList.reactServerComponentsIntroduceNew"),
      category: "Analysis",
    },
    {
      title: t("blog.blogList.benchmarkMethodologyHowWeTest"),
      date: t("blog.blogList.january202026"),
      excerpt: t("blog.blogList.aTransparentLookAtOur"),
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
            {t("blog.blogList.readMore")}
          </button>
        </article>
      ))}
    </div>
  );
}
