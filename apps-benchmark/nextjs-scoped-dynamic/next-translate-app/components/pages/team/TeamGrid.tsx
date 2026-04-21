"use client";

import useTranslation from "next-translate/useTranslation";

export default function TeamGrid() {
  const { t } = useTranslation("team");

  const members = [
    {
      name: t("teamGrid.sarahChen"),
      role: t("teamGrid.founderLeadEngineer"),
      bio: t("teamGrid.formerGoogleEngineerWith10"),
    },
    {
      name: t("teamGrid.marcusWeber"),
      role: t("teamGrid.performanceEngineer"),
      bio: t("teamGrid.specializesInJavascriptPerformanceOptimization"),
    },
    {
      name: t("teamGrid.aishaPatel"),
      role: t("teamGrid.developerAdvocate"),
      bio: t("teamGrid.passionateAboutDeveloperExperienceAnd"),
    },
    {
      name: t("teamGrid.tomasRodriguez"),
      role: t("teamGrid.fullStackDeveloper"),
      bio: t("teamGrid.maintainsTheBenchmarkingInfrastructureAnd"),
    },
    {
      name: t("teamGrid.yukiTanaka"),
      role: t("teamGrid.dataAnalyst"),
      bio: t("teamGrid.ensuresStatisticalRigorInAll"),
    },
    {
      name: t("teamGrid.elenaKowalski"),
      role: t("teamGrid.communityManager"),
      bio: t("teamGrid.managesCommunityContributionsPartnershipsAnd"),
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
              .split("team. ")
              .map((n: string) => n[0])
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
