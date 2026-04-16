"use client";

import { useScopedI18n } from "../../../locales/client";

export default function WhyItMatters() {
  const scopedT = useScopedI18n("why-it-matters");
  const scopedResultsT = useScopedI18n("results-table");
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {scopedT("whyTheseMetricsMatter")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {scopedResultsT("bundleSize")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {scopedT("theBundleIsTheData")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {scopedT("renderingHydration")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {scopedT("connectingALargeJsonDictionary")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {scopedT("dynamicLoading")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {scopedT("loadingAllTranslationsUpfrontOverloads")}
          </p>
        </div>
      </div>
    </section>
  );
}
