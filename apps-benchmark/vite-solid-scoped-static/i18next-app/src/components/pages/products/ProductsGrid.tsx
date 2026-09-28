import { For } from "solid-js";
import { trans } from "../../../i18n";

export default function ProductsGrid() {
  const products = [
    {
      nameKey: "cliName",
      descKey: "cliDesc",
      priceKey: "cliPrice",
    },
    {
      nameKey: "cloudName",
      descKey: "cloudDesc",
      priceKey: "cloudPrice",
    },
    {
      nameKey: "enterpriseName",
      descKey: "enterpriseDesc",
      priceKey: "enterprisePrice",
    },
    {
      nameKey: "migrationName",
      descKey: "migrationDesc",
      priceKey: "migrationPrice",
    },
    {
      nameKey: "qaName",
      descKey: "qaDesc",
      priceKey: "qaPrice",
    },
    {
      nameKey: "optimizerName",
      descKey: "optimizerDesc",
      priceKey: "optimizerPrice",
    },
  ] as const;

  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <For each={products}>
        {(p) => (
          <div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
            <div>
              <h3 class="mb-2 text-lg font-semibold text-foreground">
                {trans(`products.grid.${p.nameKey}`)}
              </h3>
              <p class="mb-4 text-sm text-muted-foreground">
                {trans(`products.grid.${p.descKey}`)}
              </p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-primary">
                {trans(`products.grid.${p.priceKey}`)}
              </span>
              <button
                type="button"
                class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {trans("products.grid.learnMore")}
              </button>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
