"use client";

import { useTranslations } from "next-intl";

export default function OpenPositions() {
  const t = useTranslations();

  const openings = [
    {
      title: t("careers.open-positions.seniorFrontendEngineer"),
      location: t("careers.open-positions.remote"),
      type: t("careers.open-positions.fullTime"),
      dept: t("careers.open-positions.engineering"),
      description: t("careers.open-positions.buildAndMaintainOurBenchmarking"),
    },
    {
      title: t("careers.open-positions.backendEngineer"),
      location: t("careers.open-positions.remote"),
      type: t("careers.open-positions.fullTime"),
      dept: t("careers.open-positions.engineering"),
      description: t("careers.open-positions.designAndScaleOurCloud"),
    },
    {
      title: t("careers.open-positions.technicalWriter"),
      location: t("careers.open-positions.remote"),
      type: t("careers.open-positions.partTime"),
      dept: t("careers.open-positions.documentation"),
      description: t("careers.open-positions.createComprehensiveGuidesApiReferences"),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {t("careers.open-positions.openPositions")}
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
              {t("careers.open-positions.applyNow")}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
