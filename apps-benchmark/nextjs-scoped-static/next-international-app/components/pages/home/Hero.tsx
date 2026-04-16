"use client";

import { useScopedI18n } from "../../../locales/client";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function Hero() {
  const scopedT = useScopedI18n("hero");
  const scopedNavT = useScopedI18n("header");
  usePerformanceMeasure("Hero");
  return (
    <section className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        i18n Benchmark
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        {scopedT("aTestApplicationDesignedTo")}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {scopedT("viewResults")}
        </button>
        <button
          type="button"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          {scopedNavT("methodology")}
        </button>
      </div>
    </section>
  );
}
