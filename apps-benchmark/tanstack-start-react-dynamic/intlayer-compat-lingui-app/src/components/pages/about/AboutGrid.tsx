import { useLingui } from "@lingui/react";

export default function AboutGrid() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`about-grid.${id}`);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("whyThisExists")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("choosingAnI18nLibraryIs")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("methodology")}
        </h2>
        <p className="text-sm text-muted-foreground">{t("theSame10PageApp")}</p>
      </div>
    </div>
  );
}
