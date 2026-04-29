<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  import { get } from 'svelte/store';
  const content = useIntlayer('blog-list');

  const posts = [
    {
      title: get(content).comparingI18nLibrariesIn2026,
      date: get(content).march152026,
      excerpt:
        get(content).weTested12DifferentInternationalization,
      category: get(content).benchmark,
    },
    {
      title: get(content).howToReduceYourI18n,
      date: get(content).march82026,
      excerpt:
        get(content).practicalStrategiesForOptimizingTranslat,
      category: get(content).tutorial,
    },
    {
      title: get(content).theStateOfInternationalizationIn,
      date: get(content).february282026,
      excerpt:
        get(content).anOverviewOfTheCurrent,
      category: get(content).analysis,
    },
    {
      title: get(content).migratingFromReactI18nextTo,
      date: get(content).february152026,
      excerpt:
        get(content).aStepByStepGuide,
      category: get(content).tutorial1,
    },
    {
      title: get(content).serverComponentsAndI18nWhat,
      date: get(content).february12026,
      excerpt:
        get(content).reactServerComponentsIntroduceNew,
      category: get(content).analysis1,
    },
    {
      title: get(content).benchmarkMethodologyHowWeTest,
      date: get(content).january202026,
      excerpt:
        get(content).aTransparentLookAtOur,
      category: get(content).meta,
    },
  ];
</script>

<div class="grid gap-6 md:grid-cols-2">
  {#each posts as p (p.title)}
    <article class="rounded-lg border border-border bg-card p-6">
      <div class="mb-3 flex items-center gap-3">
        <span
          class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"
        >
          {p.category}
        </span>
        <span class="text-xs text-muted-foreground">{p.date}</span>
      </div>
      <h2 class="mb-2 text-lg font-semibold text-foreground">{p.title}</h2>
      <p class="mb-4 text-sm text-muted-foreground">{p.excerpt}</p>
      <button
        type="button"
        class="text-sm font-medium text-primary hover:underline"
      >{$content.readMore}</button>
    </article>
  {/each}
</div>
