import { T } from "../../../i18n/config";

export default function AboutGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          <T keyName="aboutGrid.whyThisExists" />
        </h2>
        <p className="text-sm text-muted-foreground">
          <T
            keyName="aboutGrid.choosingAnI18nLibrary"
          />
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          <T keyName="aboutGrid.methodology" />
        </h2>
        <p className="text-sm text-muted-foreground">
          <T
            keyName="aboutGrid.theSame10PageApp"
          />
        </p>
      </div>
    </div>
  );
}
