<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  import { get } from 'svelte/store';
  const content = useIntlayer('team-grid');

  const members = [
    {
      name: get(content).sarahChen,
      role: get(content).founderLeadEngineer,
      bio: get(content).formerGoogleEngineerWith10,
    },
    {
      name: get(content).marcusWeber,
      role: get(content).performanceEngineer,
      bio: get(content).specializesInJavascriptPerformanceOptimi,
    },
    {
      name: get(content).aishaPatel,
      role: get(content).developerAdvocate,
      bio: get(content).passionateAboutDeveloperExperienceAnd,
    },
    {
      name: get(content).tomasRodriguez,
      role: get(content).fullStackDeveloper,
      bio: get(content).maintainsTheBenchmarkingInfrastructureAn,
    },
    {
      name: get(content).yukiTanaka,
      role: get(content).dataAnalyst,
      bio: get(content).ensuresStatisticalRigorInAll,
    },
    {
      name: get(content).elenaKowalski,
      role: get(content).communityManager,
      bio: get(content).managesCommunityContributionsPartnership,
    },
  ];
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {#each members as m (m.name)}
    <div class="rounded-lg border border-border bg-card p-6 text-center">
      <div
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"
      >
        {m.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <h3 class="text-base font-semibold text-foreground">{m.name}</h3>
      <p class="mb-2 text-xs font-medium text-primary">{m.role}</p>
      <p class="text-sm text-muted-foreground">{m.bio}</p>
    </div>
  {/each}
</div>
