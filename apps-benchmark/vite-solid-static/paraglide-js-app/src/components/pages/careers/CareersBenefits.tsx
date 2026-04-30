import { For } from "solid-js";
import * as m from "../../../paraglide/messages";

export default function CareersBenefits() {
  const benefits = () => [
    { label: m.careers_benefits_remoteLabel(), value: m.careers_benefits_remoteValue() },
    { label: m.careers_benefits_payLabel(), value: m.careers_benefits_payValue() },
    {
      label: m.careers_benefits_ossLabel(),
      value: m.careers_benefits_ossValue(),
    },
  ];

  return (
    <div class="mb-12 grid gap-4 md:grid-cols-3">
      <For each={benefits()}>
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

