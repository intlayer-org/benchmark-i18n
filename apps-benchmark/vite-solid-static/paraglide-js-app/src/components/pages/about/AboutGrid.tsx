import * as m from "../../../paraglide/messages";

export default function AboutGrid() {
  return (
    <div class="grid gap-8 md:grid-cols-2">
      <div class="rounded-lg border border-border bg-card p-6">
        <h2 class="mb-3 text-xl font-semibold text-foreground">
          {m.about_grid_whyExistsTitle()}
        </h2>
        <p class="text-sm text-muted-foreground">
          {m.about_grid_whyExistsDesc()}
        </p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6">
        <h2 class="mb-3 text-xl font-semibold text-foreground">
          {m.about_grid_methodologyTitle()}
        </h2>
        <p class="text-sm text-muted-foreground">
          {m.about_grid_methodologyDesc()}
        </p>
      </div>
    </div>
  );
}

