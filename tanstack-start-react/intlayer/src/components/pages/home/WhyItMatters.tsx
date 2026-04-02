import { useIntlayer } from 'react-intlayer';
export default function WhyItMatters() {
  const content = useIntlayer('why-it-matters');

  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">{content.whyTheseMetricsMatter}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{content.bundleSize}</h3>
          <p className="text-sm text-muted-foreground">{content.theBundleIsTheData}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{content.renderingHydration}</h3>
          <p className="text-sm text-muted-foreground">{content.connectingALargeJsonDictionary}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{content.dynamicLoading}</h3>
          <p className="text-sm text-muted-foreground">{content.loadingAllTranslationsUpfrontOverloads}</p>
        </div>
      </div>
    </section>
  );
}
