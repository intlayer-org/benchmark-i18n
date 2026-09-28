import { useIntl } from "react-intl";

export default function OpenPositions() {
  const intl = useIntl();

  const openings = [
    {
      title: intl.formatMessage({ id: "open-positions.seniorFrontendEngineer" }),
      location: intl.formatMessage({ id: "open-positions.remote" }),
      type: intl.formatMessage({ id: "open-positions.fullTime" }),
      dept: intl.formatMessage({ id: "open-positions.engineering" }),
      desc: intl.formatMessage({
        id: "open-positions.buildAndMaintainOurBenchmarking",
      }),
    },
    {
      title: intl.formatMessage({ id: "open-positions.backendEngineer" }),
      location: intl.formatMessage({ id: "open-positions.remote" }),
      type: intl.formatMessage({ id: "open-positions.fullTime" }),
      dept: intl.formatMessage({ id: "open-positions.engineering" }),
      desc: intl.formatMessage({
        id: "open-positions.designAndScaleOurCloud",
      }),
    },
    {
      title: intl.formatMessage({ id: "open-positions.technicalWriter" }),
      location: intl.formatMessage({ id: "open-positions.remote" }),
      type: intl.formatMessage({ id: "open-positions.partTime" }),
      dept: intl.formatMessage({ id: "open-positions.documentation" }),
      desc: intl.formatMessage({
        id: "open-positions.createComprehensiveGuidesApiReferences",
      }),
    },
    {
      title: intl.formatMessage({ id: "open-positions.devrelEngineer" }),
      location: intl.formatMessage({ id: "open-positions.sanFranciscoRemote" }),
      type: intl.formatMessage({ id: "open-positions.fullTime" }),
      dept: intl.formatMessage({ id: "open-positions.community" }),
      desc: intl.formatMessage({
        id: "open-positions.engageWithTheI18nCommunity",
      }),
    },
    {
      title: intl.formatMessage({ id: "open-positions.qaEngineer" }),
      location: intl.formatMessage({ id: "open-positions.remote" }),
      type: intl.formatMessage({ id: "open-positions.fullTime" }),
      dept: intl.formatMessage({ id: "open-positions.engineering" }),
      desc: intl.formatMessage({
        id: "open-positions.ensureTheAccuracyAndReliability",
      }),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {intl.formatMessage({ id: "open-positions.openPositions" })}
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
              {intl.formatMessage({ id: "open-positions.applyNow" })}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
