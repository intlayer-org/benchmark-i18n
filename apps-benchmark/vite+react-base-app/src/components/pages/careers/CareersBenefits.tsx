export default function CareersBenefits() {
  const benefits = [
    { label: "Remote-first", value: "Work from anywhere in the world" },
    { label: "Competitive pay", value: "Top-of-market compensation" },
    {
      label: "Open source time",
      value: "20% time for OSS contributions",
    },
  ];

  return (
    <div className="mb-12 grid gap-4 md:grid-cols-3">
      {benefits.map((b) => (
        <div
          key={b.label}
          className="rounded-lg border border-border bg-card p-4 text-center"
        >
          <p className="text-sm font-semibold text-foreground">{b.label}</p>
          <p className="text-xs text-muted-foreground">{b.value}</p>
        </div>
      ))}
    </div>
  );
}
