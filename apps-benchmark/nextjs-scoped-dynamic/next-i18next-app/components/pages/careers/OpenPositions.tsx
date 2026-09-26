"use client";

import { useTranslation } from "react-i18next";

export default function OpenPositions() {
  const { t } = useTranslation("careers");
  const openings = [
    {
      title: t("careersPositions.seniorFrontendEngineer"),
      location: t("careersPositions.remote"),
      type: t("careersPositions.fullTime"),
      dept: t("careersPositions.engineering"),
      desc: t("careersPositions.buildAndMaintainOurBenchmarking"),
    },
    {
      title: t("careersPositions.backendEngineer"),
      location: t("careersPositions.remote"),
      type: t("careersPositions.fullTime"),
      dept: t("careersPositions.engineering"),
      desc: t("careersPositions.designAndScaleOurCloud"),
    },
    {
      title: t("careersPositions.technicalWriter"),
      location: t("careersPositions.remote"),
      type: t("careersPositions.partTime"),
      dept: t("careersPositions.documentation"),
      desc: t("careersPositions.createComprehensiveGuidesApiReferences"),
    },
    {
      title: t("careersPositions.devrelEngineer"),
      location: t("careersPositions.sanFranciscoRemote"),
      type: t("careersPositions.fullTime"),
      dept: t("careersPositions.community"),
      desc: t("careersPositions.engageWithTheI18nCommunity"),
    },
    {
      title: t("careersPositions.qaEngineer"),
      location: t("careersPositions.remote"),
      type: t("careersPositions.fullTime"),
      dept: t("careersPositions.engineering"),
      desc: t("careersPositions.ensureTheAccuracyAndReliability"),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {t("careersPositions.openPositions")}
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
              {t("careersPositions.applyNow")}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
