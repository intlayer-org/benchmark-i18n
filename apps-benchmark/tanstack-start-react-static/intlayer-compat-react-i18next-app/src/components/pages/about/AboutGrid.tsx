import { useTranslation } from "react-i18next";

export default function AboutGrid() {
  const { t } = useTranslation();
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("aboutGrid.testEnvironment")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("aboutGrid.allBenchmarksRunOn")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("aboutGrid.applicationDesign")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("aboutGrid.theBenchmarkAppHas10")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("aboutGrid.measurementMethodology")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("aboutGrid.weUseBrowserNativeApis")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("aboutGrid.fairComparison")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("aboutGrid.eachI18nLibraryIsIntegrated")}
        </p>
      </div>
    </div>
  );
}
