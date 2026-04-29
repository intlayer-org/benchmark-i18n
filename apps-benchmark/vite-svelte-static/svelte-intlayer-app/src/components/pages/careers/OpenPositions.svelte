<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  import { get } from 'svelte/store';
  const content = useIntlayer('open-positions');

  const openings = [
    {
      title: get(content).seniorFrontendEngineer,
      location: get(content).remote,
      type: "Full-time",
      dept: get(content).engineering,
      desc: get(content).buildAndMaintainOurBenchmarking,
    },
    {
      title: get(content).backendEngineer,
      location: get(content).remote1,
      type: "Full-time",
      dept: get(content).engineering1,
      desc: get(content).designAndScaleOurCloud,
    },
    {
      title: get(content).technicalWriter,
      location: get(content).remote2,
      type: "Part-time",
      dept: get(content).documentation,
      desc: get(content).createComprehensiveGuidesApiReferences,
    },
    {
      title: get(content).devrelEngineer,
      location: get(content).sanFranciscoRemote,
      type: "Full-time",
      dept: get(content).community,
      desc: get(content).engageWithTheI18nCommunity,
    },
    {
      title: get(content).qaEngineer,
      location: get(content).remote3,
      type: "Full-time",
      dept: get(content).engineering2,
      desc: get(content).ensureTheAccuracyAndReliability,
    },
  ];
</script>

<h2 class="mb-6 text-2xl font-bold text-foreground">{$content.openPositions}</h2>
<div class="space-y-4">
  {#each openings as o (o.title)}
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
