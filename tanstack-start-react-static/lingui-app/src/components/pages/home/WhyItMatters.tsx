import { useLingui } from "@lingui/react";

export default function WhyItMatters() {
  const { i18n } = useLingui();

  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {i18n._("why-it-matters.whyTheseMetricsMatter")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {i18n._("why-it-matters.bundleSize")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {i18n._("why-it-matters.theBundleIsTheData")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {i18n._("why-it-matters.renderingHydration")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {i18n._("why-it-matters.connectingALargeJsonDictionary")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {i18n._("why-it-matters.dynamicLoading")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {i18n._("why-it-matters.loadingAllTranslationsUpfrontOverloads")}
          </p>
        </div>
      </div>
    </section>
  );
}
