"use client";

import { useI18n } from "../../../locales/client";

export default function AboutGrid() {
  const t = useI18n();
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("about.about-grid.whyThisExists")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("about.about-grid.choosingAnI18nLibraryIs")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {t("about.about-grid.methodology")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("about.about-grid.theSame10PageApp")}
        </p>
      </div>
    </div>
  );
}
