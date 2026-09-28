import { FormattedMessage } from "react-intl";

export default function WhyItMatters() {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        <FormattedMessage id="why-it-matters.whyTheseMetricsMatter" />
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <FormattedMessage id="why-it-matters.bundleSize" />
          </h3>
          <p className="text-sm text-muted-foreground">
            <FormattedMessage id="why-it-matters.theBundleIsTheData" />
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <FormattedMessage id="why-it-matters.renderingHydration" />
          </h3>
          <p className="text-sm text-muted-foreground">
            <FormattedMessage id="why-it-matters.connectingALargeJsonDictionary" />
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            <FormattedMessage id="why-it-matters.dynamicLoading" />
          </h3>
          <p className="text-sm text-muted-foreground">
            <FormattedMessage id="why-it-matters.loadingAllTranslationsUpfrontOverloads" />
          </p>
        </div>
      </div>
    </section>
  );
}
