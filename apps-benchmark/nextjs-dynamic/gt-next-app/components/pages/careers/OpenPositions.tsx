import { T } from "gt-next";

export default function OpenPositions() {
  const openings = [
    {
      title: <T>Senior Frontend Engineer</T>,
      location: <T>Remote</T>,
      type: <T>Full-time</T>,
      dept: <T>Engineering</T>,
      desc: (
        <T>
          Build and maintain our benchmarking dashboard and developer tools
          using React, TypeScript, and Vite.
        </T>
      ),
    },
    {
      title: <T>Backend Engineer</T>,
      location: <T>Remote</T>,
      type: <T>Full-time</T>,
      dept: <T>Engineering</T>,
      desc: (
        <T>
          Design and scale our cloud benchmarking infrastructure handling
          thousands of automated runs daily.
        </T>
      ),
    },
    {
      title: <T>Technical Writer</T>,
      location: <T>Remote</T>,
      type: <T>Part-time</T>,
      dept: <T>Documentation</T>,
      desc: (
        <T>
          Create comprehensive guides, API references, and tutorials for our
          benchmarking platform.
        </T>
      ),
    },
    {
      title: <T>DevRel Engineer</T>,
      location: <T>San Francisco / Remote</T>,
      type: <T>Full-time</T>,
      dept: <T>Community</T>,
      desc: (
        <T>
          Engage with the i18n community through talks, workshops, blog posts,
          and open source contributions.
        </T>
      ),
    },
    {
      title: <T>QA Engineer</T>,
      location: <T>Remote</T>,
      type: <T>Full-time</T>,
      dept: <T>Engineering</T>,
      desc: (
        <T>
          Ensure the accuracy and reliability of benchmark results through
          rigorous testing and validation.
        </T>
      ),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        <T>Open Positions</T>
      </h2>
      <div className="space-y-4">
        {openings.map((o) => (
          <div
            key={o.title?.toString() || ""}
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
              <T>Apply Now</T>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
