import { useIntlayer } from "react-intlayer";

export default function BlogList() {
  const content = useIntlayer("blog-list");

  const posts = [
    {
      title: "15/03/2026",
      date: "15/03/2026",
      excerpt: content.weTested12DifferentInternationalization.value,
      category: "Benchmark",
    },
    {
      title: content.howToReduceYourI18n.value,
      date: content.march82026.value,
      excerpt: content.practicalStrategiesForOptimizingTranslation.value,
      category: "Tutorial",
    },
    {
      title: content.theStateOfInternationalizationIn.value,
      date: content.february282026.value,
      excerpt: content.anOverviewOfTheCurrent.value,
      category: "Analysis",
    },
    {
      title: content.migratingFromReactI18nextTo.value,
      date: content.february152026.value,
      excerpt: content.aStepByStepGuide.value,
      category: "Tutorial",
    },
    {
      title: content.serverComponentsAndI18nWhat.value,
      date: content.february12026.value,
      excerpt: content.reactServerComponentsIntroduceNew.value,
      category: "Analysis",
    },
    {
      title: content.benchmarkMethodologyHowWeTest.value,
      date: content.january202026.value,
      excerpt: content.aTransparentLookAtOur.value,
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
            {content.readMore}
          </button>
        </article>
      ))}
    </div>
  );
}
