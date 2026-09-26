import { For } from "solid-js";
import { trans } from "../../../i18n";

export default function CareersBenefits() {
  const benefitKeys = [
    { label: "remoteLabel", value: "remoteValue" },
    { label: "payLabel", value: "payValue" },
    { label: "ossLabel", value: "ossValue" },
  ] as const;

  return (
    <div class="mb-12 grid gap-4 md:grid-cols-3">
      <For each={benefitKeys}>
        {(b) => (
          <div class="rounded-lg border border-border bg-card p-4 text-center">
            <p class="text-sm font-semibold text-foreground">
              {trans(`careers.benefits.${b.label}`)}
            </p>
            <p class="text-xs text-muted-foreground">
              {trans(`careers.benefits.${b.value}`)}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}
