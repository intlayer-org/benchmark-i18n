import { useTranslations } from "use-intl";

export default function OpenPositions() {
  const t = useTranslations("open-positions");

  const openings = [
    {
      title: t("seniorFrontendEngineer"),
      location: t("remote"),
      type: t("fullTime"),
      dept: t("engineering"),
      desc: t("seniorFrontendEngineer"), // Wait, en.ts has seniorFrontendEngineer: "Senior Frontend Engineer" but no description key?
      // Actually, en.ts has: seniorFrontendEngineer: "Senior Frontend Engineer",
      // buildAndMaintainOurBenchmarking: "Build and maintain our...",
      // Let's use those.
      description: t("buildAndMaintainOurBenchmarking"),
    },
    {
      title: t("backendEngineer"),
      location: t("remote"),
      type: t("fullTime"),
      dept: t("engineering"),
      description: t("designAndScaleOurCloud"),
    },
    {
      title: t("technicalWriter"),
      location: t("remote"),
      type: t("partTime"),
      dept: t("documentation"),
      description: t("createComprehensiveGuidesApiReferences"),
    },
    {
      title: t("devrelEngineer"),
      location: t("sanFranciscoRemote"),
      type: t("fullTime"),
      dept: t("community"),
      description: t("engageWithTheI18nCommunity"),
    },
    {
      title: t("qaEngineer"),
      location: t("remote"),
      type: t("fullTime"),
      dept: t("engineering"),
      description: t("ensureTheAccuracyAndReliability"),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {t("openPositions")}
      </h2>
      <div className="space-y-4">
        {openings.map((o) => (
          <div
            key={o.title}
            className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {o.title}
              </h3>
              <p className="text-sm text-muted-foreground">{o.description}</p>
              <div className="mt-2 flex gap-2">
                <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                  {o.dept}
                </span>
                <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                  {o.location}
                </span>
                <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                  {o.type}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t("applyNow")}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
