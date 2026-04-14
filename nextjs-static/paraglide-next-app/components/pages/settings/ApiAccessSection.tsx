import * as m from "../../../paraglide/messages";
import { useId } from "react";

export default function ApiAccessSection() {
  const apiKeyId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {m["api-access-section.apiAccess"]()}
      </h2>
      <div>
        <label
          htmlFor={apiKeyId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {m["api-access-section.apiKey"]()}
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
            {m["api-access-section.copy"]()}
          </button>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {m["api-access-section.useThisKeyToAccess"]()}
        </p>
      </div>
    </section>
  );
}
