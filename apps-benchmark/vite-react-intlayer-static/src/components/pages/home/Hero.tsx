import { useIntlayer } from "react-intlayer";

export default function Hero() {
  const { title, description, viewResults, methodology } = useIntlayer("hero");

  return (
    <section className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        {description}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {viewResults}
        </button>
        <button
          type="button"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          {methodology}
        </button>
      </div>
    </section>
  );
}
