import { useTranslate } from "@tolgee/react";

export default function TeamGrid() {
  const { t } = useTranslate();

  const members = [
    {
      name: "Sarah Chen",
      role: t("teamGrid.founderLeadEngineer", "Founder & Lead Engineer"),
      bio: t(
        "teamGrid.formerGoogleEngineerWith",
        "Former Google engineer with 10 years of experience building internationalization systems at scale."
      ),
    },
    {
      name: "Marcus Weber",
      role: t("teamGrid.performanceEngineer", "Performance Engineer"),
      bio: t(
        "teamGrid.specializesInJavascriptPerformance",
        "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
      ),
    },
    {
      name: "Aisha Patel",
      role: t("teamGrid.developerAdvocate", "Developer Advocate"),
      bio: t(
        "teamGrid.passionateAboutDeveloperExperience",
        "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
      ),
    },
    {
      name: "Tomás Rodríguez",
      role: t("teamGrid.fullStackDeveloper", "Full-Stack Developer"),
      bio: t(
        "teamGrid.maintainsTheBenchmarkingInfrastructure",
        "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
      ),
    },
    {
      name: "Yuki Tanaka",
      role: t("teamGrid.dataAnalyst", "Data Analyst"),
      bio: t(
        "teamGrid.ensuresStatisticalRigorIn",
        "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
      ),
    },
    {
      name: "Elena Kowalski",
      role: t("teamGrid.communityManager", "Community Manager"),
      bio: t(
        "teamGrid.managesCommunityContributions",
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
