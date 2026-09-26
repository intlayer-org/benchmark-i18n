"use client";

import { useTranslate } from "@/i18n/tolgee";

export default function OpenPositions() {
  const { t } = useTranslate();
  const openings = [
    {
      title: t("openPositions.seniorFrontendEngineer"),
      location: t("openPositions.remote"),
      type: t("openPositions.fullTime"),
      dept: t("openPositions.engineering"),
      desc: t("openPositions.buildAndMaintainOurBenchmarking"),
    },
    {
      title: t("openPositions.backendEngineer"),
      location: t("openPositions.remote"),
      type: t("openPositions.fullTime"),
      dept: t("openPositions.engineering"),
      desc: t("openPositions.designAndScaleOurCloud"),
    },
    {
      title: t("openPositions.technicalWriter"),
      location: t("openPositions.remote"),
      type: t("openPositions.partTime"),
      dept: t("openPositions.documentation"),
      desc: t("openPositions.createComprehensiveGuidesApiReferences"),
    },
    {
      title: t("openPositions.devrelEngineer"),
      location: t("openPositions.sanFranciscoRemote"),
      type: t("openPositions.fullTime"),
      dept: t("openPositions.community"),
      desc: t("openPositions.engageWithTheI18nCommunity"),
    },
    {
      title: t("openPositions.qaEngineer"),
      location: t("openPositions.remote"),
      type: t("openPositions.fullTime"),
      dept: t("openPositions.engineering"),
      desc: t("openPositions.ensureTheAccuracyAndReliability"),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {t("openPositions.openPositions")}
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
              {t("openPositions.applyNow")}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
