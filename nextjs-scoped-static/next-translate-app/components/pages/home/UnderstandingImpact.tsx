"use client";

import useTranslation from "next-translate/useTranslation";

export default function UnderstandingImpact() {
  const { t } = useTranslation("common");
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        {t("home.understandingImpact.understandingTheImpact")}
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("home.understandingImpact.whyASingleLargeJson")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("home.understandingImpact.manyI18nLibrariesStoreTranslations")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{t("home.understandingImpact.theJsonMustBeParsed")}</li>
          <li>{t("home.understandingImpact.contextBasedArchitecturesCanCause")}</li>
          <li>{t("home.understandingImpact.duringServerSideRenderingThe")}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("home.understandingImpact.theTradeOffsOfDynamic")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("home.understandingImpact.splittingTranslationsIntoPerRoute")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              {t("home.understandingImpact.waterfallRequests")}
            </strong>{" "}
            the app must first load, determine the locale, then fetch the right
            chunk — adding network round-trips.
          </li>
          <li>
            <strong className="text-foreground">
              {t("home.understandingImpact.flashOfUntranslatedContentFouc")}
            </strong>{" "}
            users may briefly see translation keys or a fallback language before
            the chunk arrives.
          </li>
          <li>
            <strong className="text-foreground">
              {t("home.understandingImpact.cacheInvalidation")}
            </strong>{" "}
            updating translations requires cache-busting strategies to ensure
            users get fresh content without re-downloading unchanged chunks.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("home.understandingImpact.whatThisBenchmarkMeasures")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("home.understandingImpact.thisTestAppProvidesA")}
        </p>
      </div>
    </section>
  );
}
