export default function CareersBenefits() {
  return (
    <div className="mb-12 grid gap-4 md:grid-cols-3">
      <div className="rounded-lg border border-border bg-card p-4 text-center">
        <p className="text-sm font-semibold text-foreground">Remote-first</p>
        <p className="text-xs text-muted-foreground">Work from anywhere in the world</p>
      </div>
      <div className="rounded-lg border border-border bg-card p-4 text-center">
        <p className="text-sm font-semibold text-foreground">Competitive pay</p>
        <p className="text-xs text-muted-foreground">Top-of-market compensation</p>
      </div>
      <div className="rounded-lg border border-border bg-card p-4 text-center">
        <p className="text-sm font-semibold text-foreground">Open source time</p>
        <p className="text-xs text-muted-foreground">20% time for OSS contributions</p>
      </div>
    </div>
  );
}
