import { For } from "solid-js";
import { trans } from "../../../i18n";

export default function TeamGrid() {
  const teamIndices = [1, 2, 3, 4, 5, 6] as const;

  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <For each={teamIndices}>
        {(i) => {
          const name = trans(`team.grid.member${i}Name`);
          const role = trans(`team.grid.member${i}Role`);
          const bio = trans(`team.grid.member${i}Bio`);
          return (
            <div class="rounded-lg border border-border bg-card p-6 text-center">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 class="text-base font-semibold text-foreground">{name}</h3>
              <p class="mb-2 text-xs font-medium text-primary">{role}</p>
              <p class="text-sm text-muted-foreground">{bio}</p>
            </div>
          );
        }}
      </For>
    </div>
  );
}
