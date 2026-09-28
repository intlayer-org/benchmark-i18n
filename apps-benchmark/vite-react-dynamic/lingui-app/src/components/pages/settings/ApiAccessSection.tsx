import { useId } from "react";
import { useLingui } from "@lingui/react";

export default function ApiAccessSection() {
  const { i18n } = useLingui();
  const apiKeyId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {i18n._({ id: "api-access-section.apiAccess", message: "API Access" })}
      </h2>
      <div>
        <label
          htmlFor={apiKeyId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {i18n._({ id: "api-access-section.apiKey", message: "API Key" })}
        </label>
        <div className="flex gap-2">
          <input
            id={apiKeyId}
            readOnly
            defaultValue="sk_bench_xxxxxxxxxxxxxxxxxxxx"
            className="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
          />
          <button
            type="button"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            Copy
          </button>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {i18n._({ id: "api-access-section.useThisKeyToAccess", message: "Use this key to access the benchmarking API programmatically." })}
        </p>
      </div>
    </section>
  );
}
