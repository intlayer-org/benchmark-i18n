"use client";

import { useTranslation } from "react-i18next";

export default function AboutGrid() {
  const { t } = useTranslation();
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("about.aboutGrid.whyThisExists")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("about.aboutGrid.choosingAnI18nLibraryIs")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("about.aboutGrid.methodology")}
        </h2>
        <p className="text-sm text-muted-foreground">{t("about.aboutGrid.theSame10PageApp")}</p>
      </div>
    </div>
  );
}
