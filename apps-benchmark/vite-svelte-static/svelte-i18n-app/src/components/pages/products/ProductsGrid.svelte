<script lang="ts">
  import { _ } from "svelte-i18n";

  const products = [
    { id: "cli", nameKey: "cliName", descKey: "cliDesc", priceKey: "cliPrice" },
    {
      id: "cloud",
      nameKey: "cloudName",
      descKey: "cloudDesc",
      priceKey: "cloudPrice",
    },
    {
      id: "enterprise",
      nameKey: "enterpriseName",
      descKey: "enterpriseDesc",
      priceKey: "enterprisePrice",
    },
    {
      id: "migration",
      nameKey: "migrationName",
      descKey: "migrationDesc",
      priceKey: "migrationPrice",
    },
    {
      id: "qa",
      nameKey: "qaName",
      descKey: "qaDesc",
      priceKey: "qaPrice",
    },
    {
      id: "optimizer",
      nameKey: "optimizerName",
      descKey: "optimizerDesc",
      priceKey: "optimizerPrice",
    },
  ] as const;
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {#each products as p (p.id)}
    <div
      class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"
    >
      <div>
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {$_(`products.grid.${p.nameKey}`)}
        </h3>
        <p class="mb-4 text-sm text-muted-foreground">
          {$_(`products.grid.${p.descKey}`)}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm font-bold text-primary"
          >{$_(`products.grid.${p.priceKey}`)}</span
        >
        <button
          type="button"
          class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {$_("products.grid.learnMore")}
        </button>
      </div>
    </div>
  {/each}
</div>
