import { useLingui } from "@lingui/react";

export default function OpenPositions() {
  const { i18n } = useLingui();

  const openings = [
    {
      title: i18n._({ id: "open-positions.seniorFrontendEngineer", message: "Senior Frontend Engineer" }),
      location: i18n._({ id: "open-positions.remote", message: "Remote" }),
      type: i18n._({ id: "open-positions.fullTime", message: "Full-time" }),
      dept: i18n._({ id: "open-positions.engineering", message: "Engineering" }),
      desc: i18n._({ id: "open-positions.buildAndMaintainOurBenchmarking", message: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite." }),
    },
    {
      title: i18n._({ id: "open-positions.backendEngineer", message: "Backend Engineer" }),
      location: i18n._({ id: "open-positions.remote", message: "Remote" }),
      type: i18n._({ id: "open-positions.fullTime", message: "Full-time" }),
      dept: i18n._({ id: "open-positions.engineering", message: "Engineering" }),
      desc: i18n._({ id: "open-positions.designAndScaleOurCloud", message: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily." }),
    },
    {
      title: i18n._({ id: "open-positions.technicalWriter", message: "Technical Writer" }),
      location: i18n._({ id: "open-positions.remote", message: "Remote" }),
      type: i18n._({ id: "open-positions.partTime", message: "Part-time" }),
      dept: i18n._({ id: "open-positions.documentation", message: "Documentation" }),
      desc: i18n._({ id: "open-positions.createComprehensiveGuidesApiReferences", message: "Create comprehensive guides, API references, and tutorials for our benchmarking platform." }),
    },
    {
      title: i18n._({ id: "open-positions.devrelEngineer", message: "DevRel Engineer" }),
      location: i18n._({ id: "open-positions.sanFranciscoRemote", message: "San Francisco / Remote" }),
      type: i18n._({ id: "open-positions.fullTime", message: "Full-time" }),
      dept: i18n._({ id: "open-positions.community", message: "Community" }),
      desc: i18n._({ id: "open-positions.engageWithTheI18nCommunity", message: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions." }),
    },
    {
      title: i18n._({ id: "open-positions.qaEngineer", message: "QA Engineer" }),
      location: i18n._({ id: "open-positions.remote", message: "Remote" }),
      type: i18n._({ id: "open-positions.fullTime", message: "Full-time" }),
      dept: i18n._({ id: "open-positions.engineering", message: "Engineering" }),
      desc: i18n._({ id: "open-positions.ensureTheAccuracyAndReliability", message: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation." }),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {i18n._({ id: "open-positions.openPositions", message: "Open Positions" })}
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
              {i18n._({ id: "open-positions.applyNow", message: "Apply Now" })}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
