import { useIntlayer } from "next-intlayer";
export default function OpenPositions() {
  const content = useIntlayer("open-positions");

  const openings = [
    {
      title: content.seniorFrontendEngineer.value,
      location: content.remote.value,
      type: content.fullTime.value,
      dept: content.engineering.value,
      desc: content.buildAndMaintainOurBenchmarking.value,
    },
    {
      title: content.backendEngineer.value,
      location: content.remote.value,
      type: content.fullTime.value,
      dept: content.engineering.value,
      desc: content.designAndScaleOurCloud.value,
    },
    {
      title: content.technicalWriter.value,
      location: content.remote.value,
      type: content.partTime.value,
      dept: content.documentation.value,
      desc: content.createComprehensiveGuidesApiReferences.value,
    },
    {
      title: content.devrelEngineer.value,
      location: content.sanFranciscoRemote.value,
      type: content.fullTime.value,
      dept: content.community.value,
      desc: content.engageWithTheI18nCommunity.value,
    },
    {
      title: content.qaEngineer.value,
      location: content.remote.value,
      type: content.fullTime.value,
      dept: content.engineering.value,
      desc: content.ensureTheAccuracyAndReliability.value,
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {content.openPositions}
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
              {content.applyNow}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
