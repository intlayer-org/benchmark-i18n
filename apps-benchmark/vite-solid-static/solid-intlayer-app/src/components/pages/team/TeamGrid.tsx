import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function TeamGrid() {
  const content = useIntlayer('team-grid');

  const members = [
    {
      name: content().sarahChen.value,
      role: content().founderLeadEngineer.value,
      bio: content().formerGoogleEngineerWith10.value,
    },
    {
      name: content().marcusWeber.value,
      role: content().performanceEngineer.value,
      bio: content().specializesInJavascriptPerformanceOptimi.value,
    },
    {
      name: content().aishaPatel.value,
      role: content().developerAdvocate.value,
      bio: content().passionateAboutDeveloperExperienceAnd.value,
    },
    {
      name: content().tomasRodriguez.value,
      role: content().fullStackDeveloper.value,
      bio: content().maintainsTheBenchmarkingInfrastructureAn.value,
    },
    {
      name: content().yukiTanaka.value,
      role: content().dataAnalyst.value,
      bio: content().ensuresStatisticalRigorInAll.value,
    },
    {
      name: content().elenaKowalski.value,
      role: content().communityManager.value,
      bio: content().managesCommunityContributionsPartnership.value,
    },
  ];

  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <For each={members}>
        {(m) => (
          <div class="rounded-lg border border-border bg-card p-6 text-center">
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
              {m.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <h3 class="text-base font-semibold text-foreground">{m.name}</h3>
            <p class="mb-2 text-xs font-medium text-primary">{m.role}</p>
            <p class="text-sm text-muted-foreground">{m.bio}</p>
          </div>
        )}
      </For>
    </div>
  );
}
