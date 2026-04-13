import { useIntl } from "react-intl";

export default function TeamGrid() {
  const intl = useIntl();

  const members = [
    {
      name: intl.formatMessage({ id: "team-grid.sarahChen" }),
      role: intl.formatMessage({ id: "team-grid.founderLeadEngineer" }),
      bio: intl.formatMessage({ id: "team-grid.formerGoogleEngineerWith10" }),
    },
    {
      name: intl.formatMessage({ id: "team-grid.marcusWeber" }),
      role: intl.formatMessage({ id: "team-grid.performanceEngineer" }),
      bio: intl.formatMessage({
        id: "team-grid.specializesInJavascriptPerformanceOptimization",
      }),
    },
    {
      name: intl.formatMessage({ id: "team-grid.aishaPatel" }),
      role: intl.formatMessage({ id: "team-grid.developerAdvocate" }),
      bio: intl.formatMessage({
        id: "team-grid.passionateAboutDeveloperExperienceAnd",
      }),
    },
    {
      name: intl.formatMessage({ id: "team-grid.tomasRodriguez" }),
      role: intl.formatMessage({ id: "team-grid.fullStackDeveloper" }),
      bio: intl.formatMessage({
        id: "team-grid.maintainsTheBenchmarkingInfrastructureAnd",
      }),
    },
    {
      name: intl.formatMessage({ id: "team-grid.yukiTanaka" }),
      role: intl.formatMessage({ id: "team-grid.dataAnalyst" }),
      bio: intl.formatMessage({ id: "team-grid.ensuresStatisticalRigorInAll" }),
    },
    {
      name: intl.formatMessage({ id: "team-grid.elenaKowalski" }),
      role: intl.formatMessage({ id: "team-grid.communityManager" }),
      bio: intl.formatMessage({
        id: "team-grid.managesCommunityContributionsPartnershipsAnd",
      }),
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
