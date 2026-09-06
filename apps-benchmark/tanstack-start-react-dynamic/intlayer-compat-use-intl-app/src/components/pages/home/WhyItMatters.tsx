import { useTranslations } from "use-intl";

export default function WhyItMatters() {
  const t = useTranslations("why-it-matters");
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {t("whyTheseMetricsMatter")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("bundleSize")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("theBundleIsTheData")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("renderingHydration")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("connectingALargeJsonDictionary")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {t("dynamicLoading")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("loadingAllTranslationsUpfrontOverloads")}
          </p>
        </div>
      </div>
    </section>
  );
}
