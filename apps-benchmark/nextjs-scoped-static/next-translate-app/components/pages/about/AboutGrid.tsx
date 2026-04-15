"use client";

import useTranslation from "next-translate/useTranslation";

export default function AboutGrid() {
  const { t } = useTranslation("common");
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("about.aboutGrid.testEnvironment")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("about.aboutGrid.allBenchmarksRunOn")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("about.aboutGrid.applicationDesign")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("about.aboutGrid.theBenchmarkAppHas10")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("about.aboutGrid.measurementMethodology")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("about.aboutGrid.weUseBrowserNativeApis")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("about.aboutGrid.fairComparison")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("about.aboutGrid.eachI18nLibraryIsIntegrated")}
        </p>
      </div>
    </div>
  );
}
