import { useTranslate } from "../../../i18n/tolgee";

export default function WhyItMatters() {
  const { t } = useTranslate();
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {t("whyItMatters.whyTheseMetricsMatter")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("whyItMatters.bundleSize")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("whyItMatters.theBundleIsTheData")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("whyItMatters.renderingHydration")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("whyItMatters.connectingALargeJsonDictionary")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("whyItMatters.dynamicLoading")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("whyItMatters.loadingAllTranslationsUpfrontOverloads")}
          </p>
        </div>
      </div>
    </section>
  );
}
