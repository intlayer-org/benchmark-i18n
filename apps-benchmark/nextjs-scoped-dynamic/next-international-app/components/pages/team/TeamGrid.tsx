"use client";

import { useScopedI18n } from "../../../locales/client";

export default function TeamGrid() {
  const scopedT = useScopedI18n("team-grid");

  const members = [
    {
      name: scopedT("sarahChen"),
      role: scopedT("founderLeadEngineer"),
      bio: scopedT("formerGoogleEngineerWith10"),
    },
    {
      name: scopedT("marcusWeber"),
      role: scopedT("performanceEngineer"),
      bio: scopedT("specializesInJavascriptPerformanceOptimization"),
    },
    {
      name: scopedT("aishaPatel"),
      role: scopedT("developerAdvocate"),
      bio: scopedT("passionateAboutDeveloperExperienceAnd"),
    },
    {
      name: scopedT("tomasRodriguez"),
      role: scopedT("fullStackDeveloper"),
      bio: scopedT("maintainsTheBenchmarkingInfrastructureAnd"),
    },
    {
      name: scopedT("yukiTanaka"),
      role: scopedT("dataAnalyst"),
      bio: scopedT("ensuresStatisticalRigorInAll"),
    },
    {
      name: scopedT("elenaKowalski"),
      role: scopedT("communityManager"),
      bio: scopedT("managesCommunityContributionsPartnershipsAnd"),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {members.map((m) => (
        <div
          key={m.name}
          className="rounded-lg border border-border bg-card p-6"
        >
          <h3 className="mb-1 text-lg font-semibold text-foreground">{m.name}</h3>
          <p className="mb-3 text-sm font-medium text-primary">{m.role}</p>
          <p className="text-sm text-muted-foreground">{m.bio}</p>
        </div>
      ))}
    </div>
  );
}
