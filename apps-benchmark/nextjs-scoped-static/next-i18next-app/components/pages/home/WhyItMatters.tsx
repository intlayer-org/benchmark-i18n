"use client";

import { useTranslation } from "react-i18next";

export default function WhyItMatters() {
  const { t } = useTranslation("home");
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
            {t("whyItMatters.connectingALargeJson")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("whyItMatters.dynamicLoading")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("whyItMatters.loadingAllTranslationsUpfront")}
          </p>
        </div>
      </div>
    </section>
  );
}
