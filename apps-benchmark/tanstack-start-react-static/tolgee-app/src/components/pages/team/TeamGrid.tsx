import { useTranslate } from "../../../i18n/config";

export default function TeamGrid() {
  const { t } = useTranslate();

  const members = [
    {
      name: "Sarah Chen",
      role: t("teamGrid.founderLeadEngineer"),
      bio: t(
        "teamGrid.formerGoogleEngineerWith"),
    },
    {
      name: "Marcus Weber",
      role: t("teamGrid.performanceEngineer"),
      bio: t(
        "teamGrid.specializesInJavascriptPerformance"),
    },
    {
      name: "Aisha Patel",
      role: t("teamGrid.developerAdvocate"),
      bio: t(
        "teamGrid.passionateAboutDeveloperExperience"),
    },
    {
      name: "Tomás Rodríguez",
      role: t("teamGrid.fullStackDeveloper"),
      bio: t(
        "teamGrid.maintainsTheBenchmarkingInfrastructure"),
    },
    {
      name: "Yuki Tanaka",
      role: t("teamGrid.dataAnalyst"),
      bio: t(
        "teamGrid.ensuresStatisticalRigorIn"),
    },
    {
      name: "Elena Kowalski",
      role: t("teamGrid.communityManager"),
      bio: t(
        "teamGrid.managesCommunityContributions"),
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
