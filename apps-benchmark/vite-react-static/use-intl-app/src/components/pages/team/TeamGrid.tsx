import { useTranslations } from "use-intl";

export default function TeamGrid() {
  const t = useTranslations("team-grid");

  const members = [
    {
      name: t("sarahChen"),
      role: t("founderLeadEngineer"),
      bio: t("formerGoogleEngineerWith10"),
    },
    {
      name: t("marcusWeber"),
      role: t("performanceEngineer"),
      bio: t("specializesInJavascriptPerformanceOptimization"),
    },
    {
      name: t("aishaPatel"),
      role: t("developerAdvocate"),
      bio: t("passionateAboutDeveloperExperienceAnd"),
    },
    {
      name: t("tomasRodriguez"),
      role: t("fullStackDeveloper"),
      bio: t("maintainsTheBenchmarkingInfrastructureAnd"),
    },
    {
      name: t("yukiTanaka"),
      role: t("dataAnalyst"),
      bio: t("ensuresStatisticalRigorInAll"),
    },
    {
      name: t("elenaKowalski"),
      role: t("communityManager"),
      bio: t("managesCommunityContributionsPartnershipsAnd"),
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
