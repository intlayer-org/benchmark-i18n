"use client";

import { T } from "@/i18n/tolgee";
import { useId } from "react";

export default function ApiAccessSection() {
  const apiKeyId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        <T keyName="apiAccessSection.apiAccess" defaultValue="API Access" />
      </h2>
      <div>
        <label
          htmlFor={apiKeyId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          <T keyName="apiAccessSection.apiKey" defaultValue="API Key" />
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
            <T keyName="common.copy" defaultValue="Copy" />
          </button>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          <T
            keyName="apiAccessSection.useThisKeyTo"
            defaultValue="Use this key to access the benchmarking API programmatically."
          />
        </p>
      </div>
    </section>
  );
}
