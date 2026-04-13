import { useLingui } from "@lingui/react";

export default function AboutGrid() {
  const { i18n } = useLingui();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {i18n._("about-grid.whyThisExists")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {i18n._("about-grid.choosingAnI18nLibraryIs")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {i18n._("about-grid.methodology")}
        </h2>
        <p className="text-sm text-muted-foreground">{i18n._("about-grid.theSame10PageApp")}</p>
      </div>
    </div>
  );
}
