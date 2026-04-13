import { useIntl } from "react-intl";

export default function AboutGrid() {
  const intl = useIntl();
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {intl.formatMessage({ id: "about-grid.whyThisExists" })}
        </h2>
        <p className="text-sm text-muted-foreground">
          {intl.formatMessage({ id: "about-grid.choosingAnI18nLibraryIs" })}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {intl.formatMessage({ id: "about-grid.methodology" })}
        </h2>
        <p className="text-sm text-muted-foreground">
          {intl.formatMessage({ id: "about-grid.theSame10PageApp" })}
        </p>
      </div>
    </div>
  );
}
