import { Trans } from "@lingui/react";
import { useLingui } from "@lingui/react";

export default function WhyItMatters() {
  const { i18n } = useLingui();

  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        <Trans
          id="why-it-matters.whyTheseMetricsMatter"
          message="Why These Metrics Matter"
        />
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <Trans id="why-it-matters.bundleSize" message="Bundle Size" />
          </h3>
          <p className="text-sm text-muted-foreground">
            <Trans
              id="why-it-matters.theBundleIsTheData"
              message="The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
            />
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <Trans
              id="why-it-matters.renderingHydration"
              message="Rendering & Hydration"
            />
          </h3>
          <p className="text-sm text-muted-foreground">
            <Trans
              id="why-it-matters.connectingALargeJsonDictionary"
              message="Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
            />
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <Trans
              id="why-it-matters.dynamicLoading"
              message="Dynamic Loading"
            />
          </h3>
          <p className="text-sm text-muted-foreground">
            <Trans
              id="why-it-matters.loadingAllTranslationsUpfrontOverloads"
              message="Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
            />
          </p>
        </div>
      </div>
    </section>
  );
}
