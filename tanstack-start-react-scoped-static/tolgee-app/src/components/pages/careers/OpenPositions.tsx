import { T, useTranslate } from "@tolgee/react";

export default function OpenPositions() {
  const { t } = useTranslate("careers");

  const openings = [
    {
      title: t("careersPositions.seniorFrontendEngineer", "Senior Frontend Engineer"),
      location: t("openPositions.remote", "Remote"),
      type: t("openPositions.fullTime", "Full-time"),
      dept: t("openPositions.engineering", "Engineering"),
      desc: t(
        "careersPositions.seniorFrontendEngineerDesc",
        "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
      ),
    },
  ];

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        <T ns="careers" keyName="openPositions.openPositions" defaultValue="Open Positions" />
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
              <T ns="careers" keyName="openPositions.applyNow" defaultValue="Apply Now" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
