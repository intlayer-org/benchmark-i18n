"use client";

import { useTranslation } from "react-i18next";

export default function UnderstandingImpact() {
  const { t } = useTranslation("home");
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        {t("understandingImpact.understandingTheImpact")}
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("understandingImpact.whyASingleLargeJson")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("understandingImpact.manyI18nLibrariesStoreTranslations")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{t("understandingImpact.theJsonMustBeParsed")}</li>
          <li>{t("understandingImpact.contextBasedArchitecturesCanCause")}</li>
          <li>{t("understandingImpact.duringServerSideRenderingThe")}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("understandingImpact.theTradeOffsOfDynamic")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("understandingImpact.splittingTranslationsIntoPerRoute")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              {t("understandingImpact.waterfallRequests")}
            </strong>{" "}
            the app must first load, determine the locale, then fetch the right
            chunk — adding network round-trips.
          </li>
          <li>
            <strong className="text-foreground">
              {t("understandingImpact.flashOfUntranslatedContentFouc")}
            </strong>{" "}
            users may briefly see translation keys or a fallback language before
            the chunk arrives.
          </li>
          <li>
            <strong className="text-foreground">
              {t("understandingImpact.cacheInvalidation")}
            </strong>{" "}
            updating translations requires cache-busting strategies to ensure
            users get fresh content without re-downloading unchanged chunks.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("understandingImpact.whatThisBenchmarkMeasures")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("understandingImpact.thisTestAppProvidesA")}
        </p>
      </div>
    </section>
  );
}
