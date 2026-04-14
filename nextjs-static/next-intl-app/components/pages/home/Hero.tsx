import { useTranslations } from "use-intl";
import { usePerformanceMeasure } from "../../../src/hooks/usePerformanceMeasure";

export default function Hero() {
  const t = useTranslations("hero");
  const tHeader = useTranslations("header");
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
          {tHeader("methodology")}
        </button>
      </div>
    </section>
  );
}
