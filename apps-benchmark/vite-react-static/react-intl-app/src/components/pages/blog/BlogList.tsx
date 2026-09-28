import { useIntl } from "react-intl";

export default function BlogList() {
  const intl = useIntl();

  const posts = [
    {
      title: intl.formatMessage({
        id: "blog-list.comparingI18nLibrariesIn2026",
      }),
      date: "March 15, 2026",
      excerpt: intl.formatMessage({
        id: "blog-list.weTested12DifferentInternationalization",
      }),
      category: "Benchmark",
    },
    {
      title: intl.formatMessage({ id: "blog-list.howToReduceYourI18n" }),
      date: intl.formatMessage({ id: "blog-list.march82026" }),
      excerpt: intl.formatMessage({
        id: "blog-list.practicalStrategiesForOptimizingTranslation",
      }),
      category: "Tutorial",
    },
    {
      title: intl.formatMessage({ id: "blog-list.theStateOfInternationalizationIn" }),
      date: intl.formatMessage({ id: "blog-list.february282026" }),
      excerpt: intl.formatMessage({
        id: "blog-list.anOverviewOfTheCurrent",
      }),
      category: "Analysis",
    },
    {
      title: intl.formatMessage({ id: "blog-list.migratingFromReactI18nextTo" }),
      date: intl.formatMessage({ id: "blog-list.february152026" }),
      excerpt: intl.formatMessage({
        id: "blog-list.aStepByStepGuide",
      }),
      category: "Tutorial",
    },
    {
      title: intl.formatMessage({ id: "blog-list.serverComponentsAndI18nWhat" }),
      date: intl.formatMessage({ id: "blog-list.february12026" }),
      excerpt: intl.formatMessage({
        id: "blog-list.reactServerComponentsIntroduceNew",
      }),
      category: "Analysis",
    },
    {
      title: intl.formatMessage({ id: "blog-list.benchmarkMethodologyHowWeTest" }),
      date: intl.formatMessage({ id: "blog-list.january202026" }),
      excerpt: intl.formatMessage({
        id: "blog-list.aTransparentLookAtOur",
      }),
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
            {intl.formatMessage({ id: "blog-list.readMore" })}
          </button>
        </article>
      ))}
    </div>
  );
}
