import { useIntlayer } from "react-intlayer";

export default function BlogList() {
  const content = useIntlayer("blog-list");

  const posts = [
    {
      title: content.comparingI18nLibrariesIn2026.value,
      date: content.march152026.value,
      excerpt: content.weTested12DifferentInternationalization.value,
      category: content.benchmark.value,
    },
    {
      title: content.howToReduceYourI18n.value,
      date: content.march82026.value,
      excerpt: content.practicalStrategiesForOptimizingTranslation.value,
      category: content.tutorial.value,
    },
    {
      title: content.theStateOfInternationalizationIn.value,
      date: content.february282026.value,
      excerpt: content.anOverviewOfTheCurrent.value,
      category: content.analysis.value,
    },
    {
      title: content.migratingFromReactI18nextTo.value,
      date: content.february152026.value,
      excerpt: content.aStepByStepGuide.value,
      category: content.tutorial.value,
    },
    {
      title: content.serverComponentsAndI18nWhat.value,
      date: content.february12026.value,
      excerpt: content.reactServerComponentsIntroduceNew.value,
      category: content.analysis.value,
    },
    {
      title: content.benchmarkMethodologyHowWeTest.value,
      date: content.january202026.value,
      excerpt: content.aTransparentLookAtOur.value,
      category: content.meta.value,
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
