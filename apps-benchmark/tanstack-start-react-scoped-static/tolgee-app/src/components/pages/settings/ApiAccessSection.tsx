import { T } from "../../../i18n/tolgee";
import { useId } from "react";

export default function ApiAccessSection() {
  const apiKeyId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        <T keyName="apiAccessSection.apiAccess" />
      </h2>
      <div>
        <label
          htmlFor={apiKeyId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          <T keyName="apiAccessSection.apiKey" />
        </label>
        <div className="flex gap-2">
          <input
            id={apiKeyId}
            readOnly
            className="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
          />
          <button
            type="button"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            <T keyName="common.copy" />
          </button>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          <T
            keyName="apiAccessSection.useThisKeyTo"
          />
        </p>
      </div>
    </section>
  );
}
