"use client";

import useTranslation from "next-translate/useTranslation";

export default function WhyItMatters() {
  const { t } = useTranslation("common");
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {t("home.whyItMatters.whyTheseMetricsMatter")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("home.whyItMatters.bundleSize")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("home.whyItMatters.theBundleIsTheData")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("home.whyItMatters.renderingHydration")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("home.whyItMatters.connectingALargeJson")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("home.whyItMatters.dynamicLoading")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("home.whyItMatters.loadingAllTranslationsUpfront")}
          </p>
        </div>
      </div>
    </section>
  );
}
