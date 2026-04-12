import { useId } from "react";
import { useTranslation } from "react-i18next";

export default function ApiAccessSection() {
  const { t } = useTranslation();
  const apiKeyId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {t("apiAccessSection.apiAccess")}
      </h2>
      <div>
        <label
          htmlFor={apiKeyId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {t("apiAccessSection.apiKey")}
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
            {t("apiAccessSection.copy")}
          </button>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {t("apiAccessSection.useThisKeyTo")}
        </p>
      </div>
    </section>
  );
}
