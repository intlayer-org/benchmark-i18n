import { useLingui } from "@lingui/react";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function Hero() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`hero.${id}`);

  usePerformanceMeasure("Hero");
  return (
    <section className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        i18n Benchmark
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        {t("aTestApplicationDesignedTo")}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {t("viewResults")}
        </button>
        <button
          type="button"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          {i18n._("header.methodology")}
        </button>
      </div>
    </section>
  );
}
