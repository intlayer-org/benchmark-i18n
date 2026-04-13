import { t } from "wuchale";

export default function PricingTiers() {
  const tiers = [
    {
      name: t("Starter"),
      price: t("$0"),
      period: t("forever"),
      features: [
        t("5 benchmark runs/day"),
        t("3 libraries"),
        t("Community support"),
        t("Public results"),
      ],
      cta: t("Get Started"),
    },
    {
      name: t("Pro"),
      price: t("$29"),
      period: t("/month"),
      features: [
        t("Unlimited runs"),
        t("All libraries"),
        t("Priority support"),
        t("Private results"),
        t("CI integration"),
        t("Historical data"),
      ],
      highlighted: true,
      cta: t("Get Started"),
    },
    {
      name: t("Enterprise"),
      price: t("Custom"),
      period: "",
      features: [
        t("Everything in Pro"),
        t("On-premise option"),
        t("SSO & SAML"),
        t("Dedicated account manager"),
        t("Custom SLAs"),
        t("Audit logs"),
        t("Training sessions"),
      ],
      cta: t("Contact Sales"),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`flex flex-col rounded-lg border p-6 ${
            tier.highlighted
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">
              {tier.price}
            </span>
            <span className="text-sm text-muted-foreground">{tier.period}</span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {tier.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
              tier.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
