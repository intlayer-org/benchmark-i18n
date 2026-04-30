import { For } from "solid-js";
import { t } from "../../../i18n";

const tiers = [
  {
    id: "starter" as const,
    highlighted: false,
    featureKeys: [
      "starterFeature1",
      "starterFeature2",
      "starterFeature3",
      "starterFeature4",
    ] as const,
  },
  {
    id: "pro" as const,
    highlighted: true,
    featureKeys: [
      "proFeature1",
      "proFeature2",
      "proFeature3",
      "proFeature4",
      "proFeature5",
      "proFeature6",
    ] as const,
  },
  {
    id: "enterprise" as const,
    highlighted: false,
    featureKeys: [
      "enterpriseFeature1",
      "enterpriseFeature2",
      "enterpriseFeature3",
      "enterpriseFeature4",
      "enterpriseFeature5",
      "enterpriseFeature6",
      "enterpriseFeature7",
    ] as const,
  },
];

export default function PricingTiers() {
  return (
    <div class="grid gap-6 md:grid-cols-3">
      <For each={tiers}>
        {(tier) => {
          const id = tier.id;
          const period =
            id === "enterprise" ? "" : t(`pricing.tiers.${id}Period`);
          return (
            <div
              class={`flex flex-col rounded-lg border p-6 ${
                tier.highlighted
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              <h3 class="text-lg font-semibold text-foreground">
                {t(`pricing.tiers.${id}Name`)}
              </h3>
              <div class="my-4">
                <span class="text-3xl font-bold text-foreground">
                  {t(`pricing.tiers.${id}Price`)}
                </span>
                <span class="text-sm text-muted-foreground">{period}</span>
              </div>
              <ul class="mb-6 flex-1 space-y-2">
                <For each={[...tier.featureKeys]}>
                  {(fk) => (
                    <li class="flex items-center gap-2 text-sm text-muted-foreground">
                      <span class="text-primary">✓</span>{" "}
                      {t(`pricing.tiers.${fk}`)}
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
                {id === "enterprise"
                  ? t("pricing.tiers.contactSales")
                  : t("pricing.tiers.getStarted")}
              </button>
            </div>
          );
        }}
      </For>
    </div>
  );
}
