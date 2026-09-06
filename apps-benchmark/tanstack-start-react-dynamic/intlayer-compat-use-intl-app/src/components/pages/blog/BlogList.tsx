import { useTranslations } from "use-intl";

export default function BlogList() {
  const t = useTranslations("blog-list");

  const posts = [
    {
      title: t("comparingI18nLibrariesIn2026"),
      date: t("march82026"), // The en.ts has march82026 for the first one too? Let's check.
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
