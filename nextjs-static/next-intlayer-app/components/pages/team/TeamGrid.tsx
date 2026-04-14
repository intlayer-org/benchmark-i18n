import { useIntlayer } from "next-intlayer";

export default function TeamGrid() {
  const content = useIntlayer("team-grid");

  const members = [
    {
      name: content.sarahChen.value,
      role: content.founderLeadEngineer.value,
      bio: content.formerGoogleEngineerWith10.value,
    },
    {
      name: content.marcusWeber.value,
      role: content.performanceEngineer.value,
      bio: content.specializesInJavascriptPerformanceOptimization.value,
    },
    {
      name: content.aishaPatel.value,
      role: content.developerAdvocate.value,
      bio: content.passionateAboutDeveloperExperienceAnd.value,
    },
    {
      name: content.tomasRodriguez.value,
      role: content.fullStackDeveloper.value,
      bio: content.maintainsTheBenchmarkingInfrastructureAnd.value,
    },
    {
      name: content.yukiTanaka.value,
      role: content.dataAnalyst.value,
      bio: content.ensuresStatisticalRigorInAll.value,
    },
    {
      name: content.elenaKowalski.value,
      role: content.communityManager.value,
      bio: content.managesCommunityContributionsPartnershipsAnd.value,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {members.map((m) => (
        <div
          key={m.name}
          className="rounded-lg border border-border bg-card p-6 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
            {m.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h3 className="text-base font-semibold text-foreground">{m.name}</h3>
          <p className="mb-2 text-xs font-medium text-primary">{m.role}</p>
          <p className="text-sm text-muted-foreground">{m.bio}</p>
        </div>
      ))}
    </div>
  );
}
