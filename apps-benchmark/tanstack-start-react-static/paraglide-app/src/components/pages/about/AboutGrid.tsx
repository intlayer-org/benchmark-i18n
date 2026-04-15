import * as m from "../../../paraglide/messages";

export default function AboutGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {m["about-grid.whyThisExists"]()}
        </h2>
        <p className="text-sm text-muted-foreground">
          {m["about-grid.choosingAnI18nLibraryIs"]()}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {m["about-grid.methodology"]()}
        </h2>
        <p className="text-sm text-muted-foreground">
          {m["about-grid.theSame10PageApp"]()}
        </p>
      </div>
    </div>
  );
}
