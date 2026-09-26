<script lang="ts">
  import { _ } from "svelte-i18n";

  const memberNums = [1, 2, 3, 4, 5, 6] as const;

  function initialsFromName(name: string): string {
    return name
      .split(" ")
      .map((part) => part[0] ?? "")
      .join("");
  }
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {#each memberNums as n (n)}
    {@const name = $_(`team.grid.member${n}Name`)}
    <div class="rounded-lg border border-border bg-card p-6 text-center">
      <div
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"
      >
        {initialsFromName(name)}
      </div>
      <h3 class="text-base font-semibold text-foreground">{name}</h3>
      <p class="mb-2 text-xs font-medium text-primary">
        {$_(`team.grid.member${n}Role`)}
      </p>
      <p class="text-sm text-muted-foreground">
        {$_(`team.grid.member${n}Bio`)}
      </p>
    </div>
  {/each}
</div>
