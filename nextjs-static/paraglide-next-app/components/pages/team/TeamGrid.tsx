import * as m from "../../../paraglide/messages";

export default function TeamGrid() {
  const members = [
    {
      name: m["team-grid.sarahChen"](),
      role: m["team-grid.founderLeadEngineer"](),
      bio: m["team-grid.formerGoogleEngineerWith10"](),
    },
    {
      name: m["team-grid.marcusWeber"](),
      role: m["team-grid.performanceEngineer"](),
      bio: m["team-grid.specializesInJavascriptPerformanceOptimization"](),
    },
    {
      name: m["team-grid.aishaPatel"](),
      role: m["team-grid.developerAdvocate"](),
      bio: m["team-grid.passionateAboutDeveloperExperienceAnd"](),
    },
    {
      name: m["team-grid.tomasRodriguez"](),
      role: m["team-grid.fullStackDeveloper"](),
      bio: m["team-grid.maintainsTheBenchmarkingInfrastructureAnd"](),
    },
    {
      name: m["team-grid.yukiTanaka"](),
      role: m["team-grid.dataAnalyst"](),
      bio: m["team-grid.ensuresStatisticalRigorInAll"](),
    },
    {
      name: m["team-grid.elenaKowalski"](),
      role: m["team-grid.communityManager"](),
      bio: m["team-grid.managesCommunityContributionsPartnershipsAnd"](),
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
