"use client";

import { useTranslations } from "next-intl";

export default function UnderstandingImpact() {
  const t = useTranslations();
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        {t("understanding-impact.understandingTheImpact")}
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("understanding-impact.whyASingleLargeJson")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("understanding-impact.manyI18nLibrariesStoreTranslations")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{t("understanding-impact.theJsonMustBeParsed")}</li>
          <li>{t("understanding-impact.contextBasedArchitecturesCanCause")}</li>
          <li>{t("understanding-impact.duringServerSideRenderingThe")}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("understanding-impact.theTradeOffsOfDynamic")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("understanding-impact.splittingTranslationsIntoPerRoute")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              {t("understanding-impact.waterfallRequests")}
            </strong>
            {
              " the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
            }
          </li>
          <li>
            <strong className="text-foreground">
              {t("understanding-impact.flashOfUntranslatedContentFouc")}
            </strong>
            {
              " users may briefly see translation keys or a fallback language before the chunk arrives."
            }
          </li>
          <li>
            <strong className="text-foreground">
              {t("understanding-impact.cacheInvalidation")}
            </strong>
            {
              " updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
            }
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("understanding-impact.whatThisBenchmarkMeasures")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("understanding-impact.thisTestAppProvidesA")}
        </p>
      </div>
    </section>
  );
}
