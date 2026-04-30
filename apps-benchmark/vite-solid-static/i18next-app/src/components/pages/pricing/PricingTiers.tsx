import { For } from "solid-js";
import { trans } from "../../../i18n";

export default function PricingTiers() {
  const tiers = [
    {
      nameKey: "starterName",
      priceKey: "starterPrice",
      periodKey: "starterPeriod",
      features: [
        "starterFeature1",
        "starterFeature2",
        "starterFeature3",
        "starterFeature4",
      ],
    },
    {
      nameKey: "proName",
      priceKey: "proPrice",
      periodKey: "proPeriod",
      features: [
        "proFeature1",
        "proFeature2",
        "proFeature3",
        "proFeature4",
        "proFeature5",
        "proFeature6",
      ],
      highlighted: true,
    },
    {
      nameKey: "enterpriseName",
      priceKey: "enterprisePrice",
      periodKey: "enterprisePeriod",
      features: [
        "enterpriseFeature1",
        "enterpriseFeature2",
        "enterpriseFeature3",
        "enterpriseFeature4",
        "enterpriseFeature5",
        "enterpriseFeature6",
        "enterpriseFeature7",
      ],
    },
  ] as const;

  return (
    <div class="grid gap-6 md:grid-cols-3">
      <For each={tiers}>
        {(tier) => (
          <div
            class={`flex flex-col rounded-lg border p-6 ${
              tier.highlighted
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-border bg-card"
            }`}
          >
            <h3 class="text-lg font-semibold text-foreground">
              {trans(`pricing.tiers.${tier.nameKey}`)}
            </h3>
            <div class="my-4">
              <span class="text-3xl font-bold text-foreground">
                {trans(`pricing.tiers.${tier.priceKey}`)}
              </span>
              <span class="text-sm text-muted-foreground">
                {trans(`pricing.tiers.${tier.periodKey}`)}
              </span>
            </div>
            <ul class="mb-6 flex-1 space-y-2">
              <For each={tier.features}>
                {(f) => (
                  <li class="flex items-center gap-2 text-sm text-muted-foreground">
                    <span class="text-primary">✓</span> {trans(`pricing.tiers.${f}`)}
                  </li>
                )}
              </For>
            </ul>
            <button
              type="button"
              class={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
                tier.highlighted
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-accent"
              }`}
            >
              {tier.nameKey === "enterpriseName"
                ? trans("pricing.tiers.contactSales")
                : trans("pricing.tiers.getStarted")}
            </button>
          </div>
        )}
      </For>
    </div>
  );
}
