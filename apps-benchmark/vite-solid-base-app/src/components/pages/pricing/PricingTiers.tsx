import { For } from "solid-js";

export default function PricingTiers() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      features: [
        "5 benchmark runs/day",
        "3 libraries",
        "Community support",
        "Public results",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited runs",
        "All libraries",
        "Priority support",
        "Private results",
        "CI integration",
        "Historical data",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Everything in Pro",
        "On-premise option",
        "SSO & SAML",
        "Dedicated account manager",
        "Custom SLAs",
        "Audit logs",
        "Training sessions",
      ],
    },
  ];

  return (
    <div class="grid gap-6 md:grid-cols-3">
      <For each={tiers}>
        {(t) => (
          <div
            class={`flex flex-col rounded-lg border p-6 ${
              t.highlighted
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-border bg-card"
            }`}
          >
            <h3 class="text-lg font-semibold text-foreground">{t.name}</h3>
            <div class="my-4">
              <span class="text-3xl font-bold text-foreground">{t.price}</span>
              <span class="text-sm text-muted-foreground">{t.period}</span>
            </div>
            <ul class="mb-6 flex-1 space-y-2">
              <For each={t.features}>
                {(f) => (
                  <li class="flex items-center gap-2 text-sm text-muted-foreground">
                    <span class="text-primary">✓</span> {f}
                  </li>
                )}
              </For>
            </ul>
            <button
              type="button"
              class={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
                t.highlighted
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-accent"
              }`}
            >
              {t.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>
          </div>
        )}
      </For>
    </div>
  );
}
