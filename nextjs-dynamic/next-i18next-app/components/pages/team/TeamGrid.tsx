"use client";

import { useTranslation } from "react-i18next";

export default function TeamGrid() {
  const { t } = useTranslation();

  const members = [
    {
      name: t("team.teamGrid.sarahChen"),
      role: t("team.teamGrid.founderLeadEngineer"),
      bio: t("team.teamGrid.formerGoogleEngineerWith10"),
    },
    {
      name: t("team.teamGrid.marcusWeber"),
      role: t("team.teamGrid.performanceEngineer"),
      bio: t("team.teamGrid.specializesInJavascriptPerformanceOptimization"),
    },
    {
      name: t("team.teamGrid.aishaPatel"),
      role: t("team.teamGrid.developerAdvocate"),
      bio: t("team.teamGrid.passionateAboutDeveloperExperienceAnd"),
    },
    {
      name: t("team.teamGrid.tomasRodriguez"),
      role: t("team.teamGrid.fullStackDeveloper"),
      bio: t("team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd"),
    },
    {
      name: t("team.teamGrid.yukiTanaka"),
      role: t("team.teamGrid.dataAnalyst"),
      bio: t("team.teamGrid.ensuresStatisticalRigorInAll"),
    },
    {
      name: t("team.teamGrid.elenaKowalski"),
      role: t("team.teamGrid.communityManager"),
      bio: t("team.teamGrid.managesCommunityContributionsPartnershipsAnd"),
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
