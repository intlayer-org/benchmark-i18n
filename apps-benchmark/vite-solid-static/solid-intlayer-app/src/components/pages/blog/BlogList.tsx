import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function BlogList() {
  const content = useIntlayer('blog-list');

  const posts = [
    {
      title: content().comparingI18nLibrariesIn2026.value,
      date: content().march152026.value,
      excerpt: content().weTested12DifferentInternationalization.value,
      category: content().benchmark.value,
    },
    {
      title: content().howToReduceYourI18n.value,
      date: content().march82026.value,
      excerpt: content().practicalStrategiesForOptimizingTranslat.value,
      category: content().tutorial.value,
    },
    {
      title: content().theStateOfInternationalizationIn.value,
      date: content().february282026.value,
      excerpt: content().anOverviewOfTheCurrent.value,
      category: content().analysis.value,
    },
    {
      title: content().migratingFromReactI18nextTo.value,
      date: content().february152026.value,
      excerpt: content().aStepByStepGuide.value,
      category: content().tutorial.value,
    },
    {
      title: content().serverComponentsAndI18nWhat.value,
      date: content().february12026.value,
      excerpt: content().reactServerComponentsIntroduceNew.value,
      category: content().analysis.value,
    },
    {
      title: content().benchmarkMethodologyHowWeTest.value,
      date: content().january202026.value,
      excerpt: content().aTransparentLookAtOur.value,
      category: content().meta.value,
    },
  ];

  return (
    <div class="grid gap-6 md:grid-cols-2">
      <For each={posts}>
        {(p) => (
          <article class="rounded-lg border border-border bg-card p-6">
            <div class="mb-3 flex items-center gap-3">
              <span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                {p.category}
              </span>
              <span class="text-xs text-muted-foreground">{p.date}</span>
            </div>
            <h2 class="mb-2 text-lg font-semibold text-foreground">
              {p.title}
            </h2>
            <p class="mb-4 text-sm text-muted-foreground">{p.excerpt}</p>
            <button
              type="button"
              class="text-sm font-medium text-primary hover:underline"
            >
              {content().readMore}
            </button>
          </article>
        )}
      </For>
    </div>
  );
}
