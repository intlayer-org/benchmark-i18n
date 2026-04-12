const openings = [
  {
    title: "Senior Frontend Engineer",
    location: "Remote",
    type: "Full-time",
    dept: "Engineering",
    desc: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
    dept: "Engineering",
    desc: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
  },
  {
    title: "Technical Writer",
    location: "Remote",
    type: "Part-time",
    dept: "Documentation",
    desc: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
  },
  {
    title: "DevRel Engineer",
    location: "San Francisco / Remote",
    type: "Full-time",
    dept: "Community",
    desc: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
  },
  {
    title: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    dept: "Engineering",
    desc: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
  },
];

export default function OpenPositions() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        Open Positions
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
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
