import { useTranslate } from "@tolgee/react";

export default function TeamGrid() {
  const { t } = useTranslate("teamGrid");

  const members = [
    {
      name: t("sarahChen", "Sarah Chen"),
      role: t("founderLeadEngineer", "Founder & Lead Engineer"),
      bio: t(
        "formerGoogleEngineerWith10",
        "Former Google engineer with 10 years of experience building internationalization systems at scale."
      ),
    },
    {
      name: t("marcusWeber", "Marcus Weber"),
      role: t("performanceEngineer", "Performance Engineer"),
      bio: t(
        "specializesInJavascriptPerformanceOptimization",
        "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
      ),
    },
    {
      name: t("aishaPatel", "Aisha Patel"),
      role: t("developerAdvocate", "Developer Advocate"),
      bio: t(
        "passionateAboutDeveloperExperienceAnd",
        "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
      ),
    },
    {
      name: t("tomasRodriguez", "Tomás Rodríguez"),
      role: t("fullStackDeveloper", "Full-Stack Developer"),
      bio: t(
        "maintainsTheBenchmarkingInfrastructureAnd",
        "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
      ),
    },
    {
      name: t("yukiTanaka", "Yuki Tanaka"),
      role: t("dataAnalyst", "Data Analyst"),
      bio: t(
        "ensuresStatisticalRigorInAll",
        "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
      ),
    },
    {
      name: t("elenaKowalski", "Elena Kowalski"),
      role: t("communityManager", "Community Manager"),
      bio: t(
        "managesCommunityContributionsPartnershipsAnd",
        "Manages community contributions, partnerships, and events. Background in open source governance."
      ),
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
