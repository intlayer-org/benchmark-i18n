"use client";

import { useId } from "react";
import { useScopedI18n } from "../../../locales/client";

export default function ApiAccessSection() {
  const scopedT = useScopedI18n("api-access-section");
  const apiKeyId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {scopedT("apiAccess")}
      </h2>
      <div>
        <label
          htmlFor={apiKeyId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {scopedT("apiKey")}
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
            {scopedT("copy")}
          </button>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {scopedT("useThisKeyToAccess")}
        </p>
      </div>
    </section>
  );
}
