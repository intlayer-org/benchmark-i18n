import { For } from "solid-js";
import { t } from "../../../i18n";

export default function ProductsGrid() {
  const productIds = [
    "cli",
    "cloud",
    "enterprise",
    "migration",
    "qa",
    "optimizer",
  ] as const;

  return (
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <For each={productIds}>
        {(id) => (
          <div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
            <div>
              <h3 class="mb-2 text-lg font-semibold text-foreground">
                {t(`products.grid.${id}Name`)}
              </h3>
              <p class="mb-4 text-sm text-muted-foreground">
                {t(`products.grid.${id}Desc`)}
              </p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-primary">
                {t(`products.grid.${id}Price`)}
              </span>
              <button
                type="button"
                class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("products.grid.learnMore")}
              </button>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
