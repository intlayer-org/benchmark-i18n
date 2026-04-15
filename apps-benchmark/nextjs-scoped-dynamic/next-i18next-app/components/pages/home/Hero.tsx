"use client";

import { useTranslation } from "react-i18next";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function Hero() {
  const { t } = useTranslation(["home", "shared"]);
  usePerformanceMeasure("Hero");
  return (
    <section className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        i18n Benchmark
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        {t("hero.aTestApplicationDesignedTo", { ns: "home" })}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {t("hero.viewResults", { ns: "home" })}
        </button>
        <button
          type="button"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          {t("header.methodology", { ns: "shared" })}
        </button>
      </div>
    </section>
  );
}
