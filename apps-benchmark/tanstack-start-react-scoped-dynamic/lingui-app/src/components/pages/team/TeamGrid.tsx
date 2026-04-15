import { useLingui } from "@lingui/react";

export default function TeamGrid() {
  const { i18n } = useLingui();

  const members = [
    {
      name: i18n._({ id: "team-grid.sarahChen", message: "Sarah Chen" }),
      role: i18n._({ id: "team-grid.founderLeadEngineer", message: "Founder & Lead Engineer" }),
      bio: i18n._({ id: "team-grid.formerGoogleEngineerWith10", message: "Former Google engineer with 10 years of experience building internationalization systems at scale." }),
    },
    {
      name: i18n._({ id: "team-grid.marcusWeber", message: "Marcus Weber" }),
      role: i18n._({ id: "team-grid.performanceEngineer", message: "Performance Engineer" }),
      bio: i18n._({ id: "team-grid.specializesInJavascriptPerformanceOptimization", message: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel." }),
    },
    {
      name: i18n._({ id: "team-grid.aishaPatel", message: "Aisha Patel" }),
      role: i18n._({ id: "team-grid.developerAdvocate", message: "Developer Advocate" }),
      bio: i18n._({ id: "team-grid.passionateAboutDeveloperExperienceAnd", message: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext." }),
    },
    {
      name: i18n._({ id: "team-grid.tomasRodriguez", message: "Tomás Rodríguez" }),
      role: i18n._({ id: "team-grid.fullStackDeveloper", message: "Full-Stack Developer" }),
      bio: i18n._({ id: "team-grid.maintainsTheBenchmarkingInfrastructureAnd", message: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui." }),
    },
    {
      name: i18n._({ id: "team-grid.yukiTanaka", message: "Yuki Tanaka" }),
      role: i18n._({ id: "team-grid.dataAnalyst", message: "Data Analyst" }),
      bio: i18n._({ id: "team-grid.ensuresStatisticalRigorInAll", message: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT." }),
    },
    {
      name: i18n._({ id: "team-grid.elenaKowalski", message: "Elena Kowalski" }),
      role: i18n._({ id: "team-grid.communityManager", message: "Community Manager" }),
      bio: i18n._({ id: "team-grid.managesCommunityContributionsPartnershipsAnd", message: "Manages community contributions, partnerships, and events. Background in open source governance." }),
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
