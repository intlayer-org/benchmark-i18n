import { useLingui } from "@lingui/react";

export default function UnderstandingImpact() {
  const { i18n } = useLingui();

  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        {i18n._("understanding-impact.understandingTheImpact")}
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {i18n._("understanding-impact.whyASingleLargeJson")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {i18n._("understanding-impact.manyI18nLibrariesStoreTranslations")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{i18n._("understanding-impact.theJsonMustBeParsed")}</li>
          <li>{i18n._("understanding-impact.contextBasedArchitecturesCanCause")}</li>
          <li>{i18n._("understanding-impact.duringServerSideRenderingThe")}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {i18n._("understanding-impact.theTradeOffsOfDynamic")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {i18n._("understanding-impact.splittingTranslationsIntoPerRoute")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">{i18n._("understanding-impact.waterfallRequests")}</strong>{" "}
            the app must first load, determine the locale, then fetch the right
            chunk — adding network round-trips.
          </li>
          <li>
            <strong className="text-foreground">
              {i18n._("understanding-impact.flashOfUntranslatedContentFouc")}
            </strong>{" "}
            users may briefly see translation keys or a fallback language before
            the chunk arrives.
          </li>
          <li>
            <strong className="text-foreground text-nowrap">
              {i18n._("understanding-impact.cacheInvalidation")}
            </strong>{" "}
            updating translations requires cache-busting strategies to ensure
            users get fresh content without re-downloading unchanged chunks.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {i18n._("understanding-impact.whatThisBenchmarkMeasures")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {i18n._("understanding-impact.thisTestAppProvidesA")}
        </p>
      </div>
    </section>
  );
}
