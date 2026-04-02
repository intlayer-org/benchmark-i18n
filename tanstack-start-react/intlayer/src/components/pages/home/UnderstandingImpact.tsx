import { useIntlayer } from 'react-intlayer';
export default function UnderstandingImpact() {
  const content = useIntlayer('understanding-impact');

  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">{content.understandingTheImpact}</h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{content.whyASingleLargeJson}</h3>
        <p className="text-sm text-muted-foreground">{content.manyI18nLibrariesStoreTranslations}</p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{content.theJsonMustBeParsed}</li>
          <li>{content.contextBasedArchitecturesCanCause}</li>
          <li>{content.duringServerSideRenderingThe}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{content.theTradeOffsOfDynamic}</h3>
        <p className="text-sm text-muted-foreground">{content.splittingTranslationsIntoPerRoute}</p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">{content.waterfallRequests}</strong> the
            app must first load, determine the locale, then fetch the right
            chunk — adding network round-trips.
          </li>
          <li>
            <strong className="text-foreground">{content.flashOfUntranslatedContentFouc}</strong>{" "}
            users may briefly see translation keys or a fallback language before
            the chunk arrives.
          </li>
          <li>
            <strong className="text-foreground">{content.cacheInvalidation}</strong>{" "}
            updating translations requires cache-busting strategies to ensure
            users get fresh content without re-downloading unchanged chunks.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{content.whatThisBenchmarkMeasures}</h3>
        <p className="text-sm text-muted-foreground">{content.thisTestAppProvidesA}</p>
      </div>
    </section>
  );
}
