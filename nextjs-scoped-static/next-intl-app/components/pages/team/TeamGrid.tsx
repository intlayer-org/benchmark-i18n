"use client";

import { useTranslations } from "next-intl";

export default function TeamGrid() {
  const t = useTranslations();

  const members = [
    {
      name: t("team-grid.sarahChen"),
      role: t("team-grid.founderLeadEngineer"),
      bio: t("team-grid.formerGoogleEngineerWith10"),
    },
    {
      name: t("team-grid.marcusWeber"),
      role: t("team-grid.performanceEngineer"),
      bio: t("team-grid.specializesInJavascriptPerformanceOptimization"),
    },
    {
      name: t("team-grid.aishaPatel"),
      role: t("team-grid.developerAdvocate"),
      bio: t("team-grid.passionateAboutDeveloperExperienceAnd"),
    },
    {
      name: t("team-grid.tomasRodriguez"),
      role: t("team-grid.fullStackDeveloper"),
      bio: t("team-grid.maintainsTheBenchmarkingInfrastructureAnd"),
    },
    {
      name: t("team-grid.yukiTanaka"),
      role: t("team-grid.dataAnalyst"),
      bio: t("team-grid.ensuresStatisticalRigorInAll"),
    },
    {
      name: t("team-grid.elenaKowalski"),
      role: t("team-grid.communityManager"),
      bio: t("team-grid.managesCommunityContributionsPartnershipsAnd"),
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
              .split(/\s+/)
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
