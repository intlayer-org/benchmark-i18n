export default function OpenPositions() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        Open Positions
      </h2>
      <div className="space-y-4">
        <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Senior Frontend Engineer
            </h3>
            <p className="text-sm text-muted-foreground">
              Build and maintain our benchmarking dashboard and developer tools
              using React, TypeScript, and Vite.
            </p>
            <div className="mt-2 flex gap-2">
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Engineering
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Remote
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Full-time
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

        <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Backend Engineer
            </h3>
            <p className="text-sm text-muted-foreground">
              Design and scale our cloud benchmarking infrastructure handling
              thousands of automated runs daily.
            </p>
            <div className="mt-2 flex gap-2">
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Engineering
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Remote
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Full-time
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

        <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Technical Writer
            </h3>
            <p className="text-sm text-muted-foreground">
              Create comprehensive guides, API references, and tutorials for our
              benchmarking platform.
            </p>
            <div className="mt-2 flex gap-2">
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Documentation
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Remote
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Part-time
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

        <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              DevRel Engineer
            </h3>
            <p className="text-sm text-muted-foreground">
              Engage with the i18n community through talks, workshops, blog
              posts, and open source contributions.
            </p>
            <div className="mt-2 flex gap-2">
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Community
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                San Francisco / Remote
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Full-time
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

        <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              QA Engineer
            </h3>
            <p className="text-sm text-muted-foreground">
              Ensure the accuracy and reliability of benchmark results through
              rigorous testing and validation.
            </p>
            <div className="mt-2 flex gap-2">
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Engineering
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Remote
              </span>
              <span className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                Full-time
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
      </div>
    </>
  );
}
