"use client";

import { useI18n } from "../../../locales/client";

export default function UnderstandingImpact() {
  const t = useI18n();
  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        {t("home.understanding-impact.understandingTheImpact")}
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("home.understanding-impact.whyASingleLargeJson")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("home.understanding-impact.manyI18nLibrariesStoreTranslations")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{t("home.understanding-impact.theJsonMustBeParsed")}</li>
          <li>{t("home.understanding-impact.contextBasedArchitecturesCanCause")}</li>
          <li>{t("home.understanding-impact.duringServerSideRenderingThe")}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("home.understanding-impact.theTradeOffsOfDynamic")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("home.understanding-impact.splittingTranslationsIntoPerRoute")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              {t("home.understanding-impact.waterfallRequests")}
            </strong>
            {t("home.understanding-impact.waterfallRequestsDetail")}
          </li>
          <li>
            <strong className="text-foreground">
              {t("home.understanding-impact.flashOfUntranslatedContentFouc")}
            </strong>
            {t("home.understanding-impact.flashOfUntranslatedContentDetail")}
          </li>
          <li>
            <strong className="text-foreground">
              {t("home.understanding-impact.cacheInvalidation")}
            </strong>
            {t("home.understanding-impact.cacheInvalidationDetail")}
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("home.understanding-impact.whatThisBenchmarkMeasures")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("home.understanding-impact.thisTestAppProvidesA")}
        </p>
      </div>
    </section>
  );
}
