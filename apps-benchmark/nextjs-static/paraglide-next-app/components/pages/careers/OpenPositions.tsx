"use client";

import * as m from "../../../paraglide/messages";

export default function OpenPositions() {
  const openings = [
    {
      title: m["open-positions.seniorFrontendEngineer"](),
      location: m["open-positions.remote"](),
      type: m["open-positions.fullTime"](),
      dept: m["open-positions.engineering"](),
      desc: m["open-positions.buildAndMaintainOurBenchmarking"](),
    },
    {
      title: m["open-positions.backendEngineer"](),
      location: m["open-positions.remote"](),
      type: m["open-positions.fullTime"](),
      dept: m["open-positions.engineering"](),
      desc: m["open-positions.designAndScaleOurCloud"](),
    },
    {
      title: m["open-positions.technicalWriter"](),
      location: m["open-positions.remote"](),
      type: m["open-positions.partTime"](),
      dept: m["open-positions.documentation"](),
      desc: m["open-positions.createComprehensiveGuidesApiReferences"](),
    },
    {
      title: m["open-positions.devrelEngineer"](),
      location: m["open-positions.sanFranciscoRemote"](),
      type: m["open-positions.fullTime"](),
      dept: m["open-positions.community"](),
      desc: m["open-positions.engageWithTheI18nCommunity"](),
    },
    {
      title: m["open-positions.qaEngineer"](),
      location: m["open-positions.remote"](),
      type: m["open-positions.fullTime"](),
      dept: m["open-positions.engineering"](),
      desc: m["open-positions.ensureTheAccuracyAndReliability"](),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {m["open-positions.openPositions"]()}
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
              {m["open-positions.applyNow"]()}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
