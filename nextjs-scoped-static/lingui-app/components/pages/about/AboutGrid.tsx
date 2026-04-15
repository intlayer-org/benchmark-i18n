"use client";

import { Trans } from "@lingui/react";
import { useLingui } from "@lingui/react";

export default function AboutGrid() {
  const { i18n } = useLingui();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          <Trans id="about-grid.whyThisExists" message="Why This Exists" />
        </h2>
        <p className="text-sm text-muted-foreground">
          <Trans
            id="about-grid.choosingAnI18nLibraryIs"
            message="Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
          />
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          <Trans id="about-grid.methodology" message="Methodology" />
        </h2>
        <p className="text-sm text-muted-foreground">
          <Trans
            id="about-grid.theSame10PageApp"
            message="The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
          />
        </p>
      </div>
    </div>
  );
}
