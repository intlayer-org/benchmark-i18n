const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    features: ["5 benchmark runs/day", "3 libraries", "Community support", "Public results"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    features: ["Unlimited runs", "All libraries", "Priority support", "Private results", "CI integration", "Historical data"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Everything in Pro", "On-premise option", "SSO & SAML", "Dedicated account manager", "Custom SLAs", "Audit logs", "Training sessions"],
  },
];

const Pricing = () => (
  <div className="container py-16">
    <div className="mb-12 text-center">
      <h1 className="mb-3 text-3xl font-bold text-foreground">Simple, Transparent Pricing</h1>
      <p className="text-muted-foreground">Choose the plan that fits your team. No hidden fees.</p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={`flex flex-col rounded-lg border p-6 ${
            t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">{t.price}</span>
            <span className="text-sm text-muted-foreground">{t.period}</span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {t.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
              t.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {t.name === "Enterprise" ? "Contact Sales" : "Get Started"}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;
