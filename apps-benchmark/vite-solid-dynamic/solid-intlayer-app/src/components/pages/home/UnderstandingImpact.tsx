import { useIntlayer } from 'solid-intlayer';
export default function UnderstandingImpact() {
  const content = useIntlayer('understanding-impact');

  return (
    <section class="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 class="text-2xl font-bold text-foreground">
        {content().understandingTheImpact}
      </h2>

      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {content().whyASingleLargeJson}
        </h3>
        <p class="text-sm text-muted-foreground">
          {content().manyI18nLibrariesStoreTranslations}
        </p>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>{content().theJsonMustBeParsed}</li>
          <li>{content().contextBasedArchitecturesCanCause}</li>
          <li>{content().duringServerSideRenderingThe}</li>
        </ul>
      </div>

      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {content().theTradeOffsOfDynamic}
        </h3>
        <p class="text-sm text-muted-foreground">
          {content().splittingTranslationsIntoPerRoute}
        </p>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            <strong class="text-foreground">
              {content().waterfallRequests}
            </strong>
            {content().theAppMustFirstLoad}
          </li>
          <li>
            <strong class="text-foreground">
              {content().flashOfUntranslatedContentFouc}
            </strong>{' '}
            {content().usersMayBrieflySeeTranslation}
          </li>
          <li>
            <strong class="text-foreground">
              {content().cacheInvalidation}
            </strong>
            {content().updatingTranslationsRequiresCacheBusting}
          </li>
        </ul>
      </div>

      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {content().whatThisBenchmarkMeasures}
        </h3>
        <p class="text-sm text-muted-foreground">
          {content().thisTestAppProvidesA}
        </p>
      </div>
    </section>
  );
}
