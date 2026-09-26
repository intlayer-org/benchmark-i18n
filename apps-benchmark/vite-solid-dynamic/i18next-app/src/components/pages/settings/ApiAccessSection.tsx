import { createUniqueId } from "solid-js";
import { trans } from "../../../i18n";

export default function ApiAccessSection() {
  const apiKeyId = createUniqueId();

  return (
    <section class="rounded-lg border border-border bg-card p-6">
      <h2 class="mb-4 text-lg font-semibold text-foreground">
        {trans("settings.apiAccess.title")}
      </h2>
      <div>
        <label
          for={apiKeyId}
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {trans("settings.apiAccess.apiKey")}
        </label>
        <div class="flex gap-2">
          <input
            id={apiKeyId}
            readOnly
            defaultValue="sk_bench_xxxxxxxxxxxxxxxxxxxx"
            class="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
          />
          <button
            type="button"
            class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {trans("settings.apiAccess.copy")}
          </button>
        </div>
        <p class="mt-1 text-xs text-muted-foreground">
          {trans("settings.apiAccess.description")}
        </p>
      </div>
    </section>
  );
}
