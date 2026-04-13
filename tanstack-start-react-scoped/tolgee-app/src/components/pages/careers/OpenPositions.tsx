import { T, useTranslate } from "@tolgee/react";

export default function OpenPositions() {
  const { t } = useTranslate("careers");

  const openings = [
    {
      title: t("openPositions.seniorFrontendEngineer", "Senior Frontend Engineer"),
      location: t("openPositions.remote", "Remote"),
      type: t("openPositions.fullTime", "Full-time"),
      dept: t("openPositions.engineering", "Engineering"),
      desc: t(
        "openPositions.buildAndMaintainOur",
        "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
      ),
    },
    {
      title: t("openPositions.backendEngineer", "Backend Engineer"),
      location: t("openPositions.remote", "Remote"),
      type: t("openPositions.fullTime", "Full-time"),
      dept: t("openPositions.engineering", "Engineering"),
      desc: t(
        "openPositions.designAndScaleOur",
        "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
      ),
    },
    {
      title: t("openPositions.technicalWriter", "Technical Writer"),
      location: t("openPositions.remote", "Remote"),
      type: t("openPositions.partTime", "Part-time"),
      dept: t("openPositions.documentation", "Documentation"),
      desc: t(
        "openPositions.createComprehensiveGuidesApi",
        "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
      ),
    },
    {
      title: t("openPositions.devrelEngineer", "DevRel Engineer"),
      location: t("openPositions.sfRemote", "San Francisco / Remote"),
      type: t("openPositions.fullTime", "Full-time"),
      dept: t("openPositions.community", "Community"),
      desc: t(
        "openPositions.engageWithTheI18n",
        "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
      ),
    },
    {
      title: t("openPositions.qaEngineer", "QA Engineer"),
      location: t("openPositions.remote", "Remote"),
      type: t("openPositions.fullTime", "Full-time"),
      dept: t("openPositions.engineering", "Engineering"),
      desc: t(
        "openPositions.ensureTheAccuracyAnd",
        "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
      ),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        <T ns="careers" keyName="openPositions.openPositions" defaultValue="Open Positions" />
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
              <p className="text-sm text-muted-foreground">{o.desc}</p>
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
              <T ns="careers" keyName="openPositions.applyNow" defaultValue="Apply Now" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
