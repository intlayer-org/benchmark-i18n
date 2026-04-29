import { useIntlayer } from 'solid-intlayer';
export default function WhyItMatters() {
  const content = useIntlayer('why-it-matters');

  return (
    <section class="mb-16">
      <h2 class="mb-6 text-2xl font-bold text-foreground">
        {content().whyTheseMetricsMatter}
      </h2>
      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-lg border border-border bg-card p-6">
          <h3 class="mb-2 text-lg font-semibold text-foreground">
            {content().bundleSize}
          </h3>
          <p class="text-sm text-muted-foreground">
            {content().theBundleIsTheData}
          </p>
        </div>
        <div class="rounded-lg border border-border bg-card p-6">
          <h3 class="mb-2 text-lg font-semibold text-foreground">
            {content().renderingHydration}
          </h3>
          <p class="text-sm text-muted-foreground">
            {content().connectingALargeJsonDictionary}
          </p>
        </div>
        <div class="rounded-lg border border-border bg-card p-6">
          <h3 class="mb-2 text-lg font-semibold text-foreground">
            {content().dynamicLoading}
          </h3>
          <p class="text-sm text-muted-foreground">
            {content().loadingAllTranslationsUpfrontOverloads}
          </p>
        </div>
      </div>
    </section>
  );
}
