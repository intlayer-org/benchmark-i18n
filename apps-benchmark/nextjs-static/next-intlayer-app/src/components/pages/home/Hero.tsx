import { useIntlayer } from "next-intlayer/server";

export default function Hero() {
  const content = useIntlayer("hero");

  return (
    <section className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        {content.i18nBenchmarkTitle}
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        {content.aTestApplicationDesignedTo}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {content.viewResults}
        </button>
        <button
          type="button"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          {content.methodology}
        </button>
      </div>
    </section>
  );
}
