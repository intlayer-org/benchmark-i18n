import { For } from "solid-js";
import * as m from "../../../paraglide/messages";

export default function ProductsGrid() {
  const products = () => [
    {
      name: m.products_grid_cliName(),
      desc: m.products_grid_cliDesc(),
      price: m.products_grid_cliPrice(),
    },
    {
      name: m.products_grid_cloudName(),
      desc: m.products_grid_cloudDesc(),
      price: m.products_grid_cloudPrice(),
    },
    {
      name: m.products_grid_enterpriseName(),
      desc: m.products_grid_enterpriseDesc(),
      price: m.products_grid_enterprisePrice(),
    },
    {
      name: m.products_grid_migrationName(),
      desc: m.products_grid_migrationDesc(),
      price: m.products_grid_migrationPrice(),
    },
    {
      name: m.products_grid_qaName(),
      desc: m.products_grid_qaDesc(),
      price: m.products_grid_qaPrice(),
    },
    {
      name: m.products_grid_optimizerName(),
      desc: m.products_grid_optimizerDesc(),
      price: m.products_grid_optimizerPrice(),
    },
  ];

  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <For each={products()}>
        {(p) => (
          <div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
            <div>
              <h3 class="mb-2 text-lg font-semibold text-foreground">{p.name}</h3>
              <p class="mb-4 text-sm text-muted-foreground">{p.desc}</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-primary">{p.price}</span>
              <button
                type="button"
                class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {m.products_grid_learnMore()}
              </button>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}


