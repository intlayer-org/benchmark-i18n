import { useLingui } from "@lingui/react";

export default function BlogList() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`blog-list.${id}`);

  const posts = [
    {
      title: t("comparingI18nLibrariesIn2026"),
      date: "March 15, 2026",
      excerpt: t("weTested12DifferentInternationalization"),
      category: "Benchmark",
    },
    {
      title: t("howToReduceYourI18n"),
      date: t("march82026"),
      excerpt: t("practicalStrategiesForOptimizingTranslation"),
      category: "Tutorial",
    },
    {
      title: t("theStateOfInternationalizationIn"),
      date: t("february282026"),
      excerpt: t("anOverviewOfTheCurrent"),
      category: "Analysis",
    },
    {
      title: t("migratingFromReactI18nextTo"),
      date: t("february152026"),
      excerpt: t("aStepByStepGuide"),
      category: "Tutorial",
    },
    {
      title: t("serverComponentsAndI18nWhat"),
      date: t("february12026"),
      excerpt: t("reactServerComponentsIntroduceNew"),
      category: "Analysis",
    },
    {
      title: t("benchmarkMethodologyHowWeTest"),
      date: t("january202026"),
      excerpt: t("aTransparentLookAtOur"),
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
            {t("readMore")}
          </button>
        </article>
      ))}
    </div>
  );
}
