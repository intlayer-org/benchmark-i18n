import { T } from "gt-react";

const tiers = [
  {
    name: <T>Starter</T>,
    price: <T>$0</T>,
    period: <T>forever</T>,
    features: [
      <T key="f1">5 benchmark runs/day</T>,
      <T key="f2">3 libraries</T>,
      <T key="f3">Community support</T>,
      <T key="f4">Public results</T>,
    ],
  },
  {
    name: <T>Pro</T>,
    price: <T>$29</T>,
    period: <T>/month</T>,
    features: [
      <T key="f1">Unlimited runs</T>,
      <T key="f2">All libraries</T>,
      <T key="f3">Priority support</T>,
      <T key="f4">Private results</T>,
      <T key="f5">CI integration</T>,
      <T key="f6">Historical data</T>,
    ],
    highlighted: true,
  },
  {
    name: <T>Enterprise</T>,
    price: <T>Custom</T>,
    period: <T></T>,
    features: [
      <T key="f1">Everything in Pro</T>,
      <T key="f2">On-premise option</T>,
      <T key="f3">SSO & SAML</T>,
      <T key="f4">Dedicated account manager</T>,
      <T key="f5">Custom SLAs</T>,
      <T key="f6">Audit logs</T>,
      <T key="f7">Training sessions</T>,
    ],
    isEnterprise: true,
  },
];

export default function PricingTiers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t, i) => (
        <div
          key={i}
          className={`flex flex-col rounded-lg border p-6 ${
            t.highlighted
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">{t.price}</span>
            <span className="text-sm text-muted-foreground">{t.period}</span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {t.features.map((f, fi) => (
              <li
                key={fi}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
              t.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {t.isEnterprise ? <T>Contact Sales</T> : <T>Get Started</T>}
          </button>
        </div>
      ))}
    </div>
  );
}
