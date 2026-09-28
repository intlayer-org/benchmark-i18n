import { FormattedMessage } from "react-intl";

export default function UnderstandingImpact() {
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        <FormattedMessage id="understanding-impact.understandingTheImpact" />
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <FormattedMessage id="understanding-impact.whyASingleLargeJson" />
        </h3>
        <p className="text-sm text-muted-foreground">
          <FormattedMessage id="understanding-impact.manyI18nLibrariesStoreTranslations" />
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <FormattedMessage id="understanding-impact.theJsonMustBeParsed" />
          </li>
          <li>
            <FormattedMessage id="understanding-impact.contextBasedArchitecturesCanCause" />
          </li>
          <li>
            <FormattedMessage id="understanding-impact.duringServerSideRenderingThe" />
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <FormattedMessage id="understanding-impact.theTradeOffsOfDynamic" />
        </h3>
        <p className="text-sm text-muted-foreground">
          <FormattedMessage id="understanding-impact.splittingTranslationsIntoPerRoute" />
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              <FormattedMessage id="understanding-impact.waterfallRequests" />
            </strong>{" "}
            <FormattedMessage id="understanding-impact.theAppMustFirstLoad" />
          </li>
          <li>
            <strong className="text-foreground">
              <FormattedMessage id="understanding-impact.flashOfUntranslatedContentFouc" />
            </strong>{" "}
            <FormattedMessage id="understanding-impact.usersMayBrieflySee" />
          </li>
          <li>
            <strong className="text-foreground">
              <FormattedMessage id="understanding-impact.cacheInvalidation" />
            </strong>{" "}
            <FormattedMessage id="understanding-impact.updatingTranslationsRequiresCacheBusting" />
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <FormattedMessage id="understanding-impact.whatThisBenchmarkMeasures" />
        </h3>
        <p className="text-sm text-muted-foreground">
          <FormattedMessage id="understanding-impact.thisTestAppProvidesA" />
        </p>
      </div>
    </section>
  );
}
