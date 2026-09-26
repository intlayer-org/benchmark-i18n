<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('team-grid');

  const members = $derived([
    {
      name: $content.sarahChen,
      role: $content.founderLeadEngineer,
      bio: $content.formerGoogleEngineerWith10,
    },
    {
      name: $content.marcusWeber,
      role: $content.performanceEngineer,
      bio: $content.specializesInJavascriptPerformanceOptimi,
    },
    {
      name: $content.aishaPatel,
      role: $content.developerAdvocate,
      bio: $content.passionateAboutDeveloperExperienceAnd,
    },
    {
      name: $content.tomasRodriguez,
      role: $content.fullStackDeveloper,
      bio: $content.maintainsTheBenchmarkingInfrastructureAn,
    },
    {
      name: $content.yukiTanaka,
      role: $content.dataAnalyst,
      bio: $content.ensuresStatisticalRigorInAll,
    },
    {
      name: $content.elenaKowalski,
      role: $content.communityManager,
      bio: $content.managesCommunityContributionsPartnership,
    },
  ]);
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {#each members as m, __k1 (__k1)}
    <div class="rounded-lg border border-border bg-card p-6 text-center">
      <div
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"
      >
        {String(m.name ?? "")
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
