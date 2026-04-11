import { useLingui } from "@lingui/react";

export default function UnderstandingImpact() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`understanding-impact.${id}`);

  return (
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        {t("understandingTheImpact")}
      </h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("whyASingleLargeJson")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("manyI18nLibrariesStoreTranslations")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>{t("theJsonMustBeParsed")}</li>
          <li>{t("contextBasedArchitecturesCanCause")}</li>
          <li>{t("duringServerSideRenderingThe")}</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("theTradeOffsOfDynamic")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("splittingTranslationsIntoPerRoute")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">{t("waterfallRequests")}</strong>{" "}
            the app must first load, determine the locale, then fetch the right
            chunk — adding network round-trips.
          </li>
          <li>
            <strong className="text-foreground">
              {t("flashOfUntranslatedContentFouc")}
            </strong>{" "}
            users may briefly see translation keys or a fallback language before
            the chunk arrives.
          </li>
          <li>
            <strong className="text-foreground text-nowrap">
              {t("cacheInvalidation")}
            </strong>{" "}
            updating translations requires cache-busting strategies to ensure
            users get fresh content without re-downloading unchanged chunks.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {t("whatThisBenchmarkMeasures")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("thisTestAppProvidesA")}
        </p>
      </div>
    </section>
  );
}
