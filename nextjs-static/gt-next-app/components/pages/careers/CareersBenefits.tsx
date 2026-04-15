import { T } from "gt-next";

export default function CareersBenefits() {
  const benefits = [
    {
      label: <T>Remote-first</T>,
      value: <T>Work from anywhere in the world</T>,
    },
    { label: <T>Competitive pay</T>, value: <T>Top-of-market compensation</T> },
    {
      label: <T>Open source time</T>,
      value: <T>20% time for OSS contributions</T>,
    },
  ];

  return (
    <div className="mb-12 grid gap-4 md:grid-cols-3">
      {benefits.map((b) => (
        <div
          key={b.label?.toString() || ""}
          className="rounded-lg border border-border bg-card p-4 text-center"
        >
          <p className="text-sm font-semibold text-foreground">{b.label}</p>
          <p className="text-xs text-muted-foreground">{b.value}</p>
        </div>
      ))}
    </div>
  );
}
