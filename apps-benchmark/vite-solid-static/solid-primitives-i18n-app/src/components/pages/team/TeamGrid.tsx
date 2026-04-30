import { For } from "solid-js";
import { t } from "../../../i18n";

export default function TeamGrid() {
  const memberNums = [1, 2, 3, 4, 5, 6] as const;

  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <For each={memberNums}>
        {(n) => {
          const name = t(`team.grid.member${n}Name`);
          return (
            <div class="rounded-lg border border-border bg-card p-6 text-center">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3 class="text-base font-semibold text-foreground">{name}</h3>
              <p class="mb-2 text-xs font-medium text-primary">
                {t(`team.grid.member${n}Role`)}
              </p>
              <p class="text-sm text-muted-foreground">
                {t(`team.grid.member${n}Bio`)}
              </p>
            </div>
          );
        }}
      </For>
    </div>
  );
}
