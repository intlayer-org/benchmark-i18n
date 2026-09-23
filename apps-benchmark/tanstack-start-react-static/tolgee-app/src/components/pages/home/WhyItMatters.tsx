import { T } from "../../../i18n/config";

export default function WhyItMatters() {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        <T keyName="whyItMatters.whyTheseMetricsMatter" />
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <T keyName="whyItMatters.bundleSize" />
          </h3>
          <p className="text-sm text-muted-foreground">
            <T
              keyName="whyItMatters.theBundleIsTheData"
            />
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <T keyName="whyItMatters.renderingHydration" />
          </h3>
          <p className="text-sm text-muted-foreground">
            <T
              keyName="whyItMatters.connectingALargeJson"
            />
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <T keyName="whyItMatters.dynamicLoading" />
          </h3>
          <p className="text-sm text-muted-foreground">
            <T
              keyName="whyItMatters.loadingAllTranslationsUpfront"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
