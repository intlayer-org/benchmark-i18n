import { T } from "gt-react";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function Hero() {
  usePerformanceMeasure("Hero");
  return (
    <section className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        <T>i18n Benchmark</T>
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        <T>
          A test application designed to measure the real-world impact of
          internationalization libraries on bundle size, loading performance,
          and rendering reactivity.
        </T>
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <T>View Results</T>
        </button>
        <button
          type="button"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          <T>Methodology</T>
        </button>
      </div>
    </section>
  );
}
