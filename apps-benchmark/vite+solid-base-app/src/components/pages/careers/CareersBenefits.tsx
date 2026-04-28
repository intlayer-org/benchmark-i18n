import { For } from "solid-js";

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
    <div class="mb-12 grid gap-4 md:grid-cols-3">
      <For each={benefits}>
        {(b) => (
          <div class="rounded-lg border border-border bg-card p-4 text-center">
            <p class="text-sm font-semibold text-foreground">{b.label}</p>
            <p class="text-xs text-muted-foreground">{b.value}</p>
          </div>
        )}
      </For>
    </div>
  );
}
