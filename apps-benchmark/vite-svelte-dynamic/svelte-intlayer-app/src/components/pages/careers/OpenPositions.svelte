<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('open-positions');

  const openings = $derived([
    {
      title: $content.seniorFrontendEngineer,
      location: $content.remote,
      type: "Full-time",
      dept: $content.engineering,
      desc: $content.buildAndMaintainOurBenchmarking,
    },
    {
      title: $content.backendEngineer,
      location: $content.remote1,
      type: "Full-time",
      dept: $content.engineering1,
      desc: $content.designAndScaleOurCloud,
    },
    {
      title: $content.technicalWriter,
      location: $content.remote2,
      type: "Part-time",
      dept: $content.documentation,
      desc: $content.createComprehensiveGuidesApiReferences,
    },
    {
      title: $content.devrelEngineer,
      location: $content.sanFranciscoRemote,
      type: "Full-time",
      dept: $content.community,
      desc: $content.engageWithTheI18nCommunity,
    },
    {
      title: $content.qaEngineer,
      location: $content.remote3,
      type: "Full-time",
      dept: $content.engineering2,
      desc: $content.ensureTheAccuracyAndReliability,
    },
  ]);
</script>

<h2 class="mb-6 text-2xl font-bold text-foreground">{$content.openPositions}</h2>
<div class="space-y-4">
  {#each openings as o, __k1 (__k1)}
    <div
      class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h3 class="text-base font-semibold text-foreground">{o.title}</h3>
        <p class="text-sm text-muted-foreground">{o.desc}</p>
        <div class="mt-2 flex gap-2">
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {o.dept}
          </span>
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {o.location}
          </span>
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {o.type}
          </span>
        </div>
      </div>
      <button
        type="button"
        class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >{$content.applyNow}</button>
    </div>
  {/each}
</div>
