"use client";

import { useScopedI18n } from "../../../locales/client";

export default function OpenPositions() {
  const positionsT = useScopedI18n("open-positions");
  const openings = [
    {
      title: positionsT("seniorFrontendEngineer"),
      location: positionsT("remote"),
      type: positionsT("fullTime"),
      dept: positionsT("engineering"),
      desc: positionsT("buildAndMaintainOurBenchmarking"),
    },
    {
      title: positionsT("backendEngineer"),
      location: positionsT("remote"),
      type: positionsT("fullTime"),
      dept: positionsT("engineering"),
      desc: positionsT("designAndScaleOurCloud"),
    },
    {
      title: positionsT("technicalWriter"),
      location: positionsT("remote"),
      type: positionsT("partTime"),
      dept: positionsT("documentation"),
      desc: positionsT("createComprehensiveGuidesApiReferences"),
    },
    {
      title: positionsT("devrelEngineer"),
      location: positionsT("sanFranciscoRemote"),
      type: positionsT("fullTime"),
      dept: positionsT("community"),
      desc: positionsT("engageWithTheI18nCommunity"),
    },
    {
      title: positionsT("qaEngineer"),
      location: positionsT("remote"),
      type: positionsT("fullTime"),
      dept: positionsT("engineering"),
      desc: positionsT("ensureTheAccuracyAndReliability"),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {positionsT("openPositions")}
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
              {positionsT("applyNow")}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
