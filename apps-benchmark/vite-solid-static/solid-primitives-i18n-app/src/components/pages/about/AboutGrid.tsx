import { t } from "../../../i18n";

export default function AboutGrid() {
  return (
    <div class="grid gap-8 md:grid-cols-2">
      <div class="rounded-lg border border-border bg-card p-6">
        <h2 class="mb-3 text-xl font-semibold text-foreground">
          {t("about.grid.whyExistsTitle")}
        </h2>
        <p class="text-sm text-muted-foreground">{t("about.grid.whyExistsDesc")}</p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6">
        <h2 class="mb-3 text-xl font-semibold text-foreground">
          {t("about.grid.methodologyTitle")}
        </h2>
        <p class="text-sm text-muted-foreground">{t("about.grid.methodologyDesc")}</p>
      </div>
    </div>
  );
}
