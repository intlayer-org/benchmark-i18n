"use client";

import { useI18n } from "../../../locales/client";

export default function BlogList() {
  const t = useI18n();

  const posts = [
    {
      title: t("blog.blog-list.comparingI18nLibrariesIn2026"),
      date: t("blog.blog-list.march82026"),
      excerpt: t("blog.blog-list.weTested12DifferentInternationalization"),
      category: t("blog.blog-list.categoryBenchmark"),
    },
    {
      title: t("blog.blog-list.howToReduceYourI18n"),
      date: t("blog.blog-list.march82026"),
      excerpt: t("blog.blog-list.practicalStrategiesForOptimizingTranslation"),
      category: t("blog.blog-list.categoryTutorial"),
    },
    {
      title: t("blog.blog-list.theStateOfInternationalizationIn"),
      date: t("blog.blog-list.february282026"),
      excerpt: t("blog.blog-list.anOverviewOfTheCurrent"),
      category: t("blog.blog-list.categoryAnalysis"),
    },
    {
      title: t("blog.blog-list.migratingFromReactI18nextTo"),
      date: t("blog.blog-list.february152026"),
      excerpt: t("blog.blog-list.aStepByStepGuide"),
      category: t("blog.blog-list.categoryTutorial"),
    },
    {
      title: t("blog.blog-list.serverComponentsAndI18nWhat"),
      date: t("blog.blog-list.february12026"),
      excerpt: t("blog.blog-list.reactServerComponentsIntroduceNew"),
      category: t("blog.blog-list.categoryAnalysis"),
    },
    {
      title: t("blog.blog-list.benchmarkMethodologyHowWeTest"),
      date: t("blog.blog-list.january202026"),
      excerpt: t("blog.blog-list.aTransparentLookAtOur"),
      category: t("blog.blog-list.categoryMeta"),
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
            {t("blog.blog-list.readMore")}
          </button>
        </article>
      ))}
    </div>
  );
}
