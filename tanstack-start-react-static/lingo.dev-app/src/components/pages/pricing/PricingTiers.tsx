export default function PricingTiers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="flex flex-col rounded-lg border p-6 border-border bg-card">
        <h3 className="text-lg font-semibold text-foreground">Starter</h3>
        <div className="my-4">
          <span className="text-3xl font-bold text-foreground">$0</span>
          <span className="text-sm text-muted-foreground">forever</span>
        </div>
        <ul className="mb-6 flex-1 space-y-2">
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> 5 benchmark runs/day
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> 3 libraries
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Community support
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Public results
          </li>
        </ul>
        <button
          type="button"
          className="w-full rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:bg-accent hover:opacity-90"
        >
          Get Started
        </button>
      </div>

      <div className="flex flex-col rounded-lg border p-6 border-primary bg-primary/5 ring-1 ring-primary">
        <h3 className="text-lg font-semibold text-foreground">Pro</h3>
        <div className="my-4">
          <span className="text-3xl font-bold text-foreground">$29</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>
        <ul className="mb-6 flex-1 space-y-2">
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Unlimited runs
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> All libraries
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Priority support
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Private results
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> CI integration
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Historical data
          </li>
        </ul>
        <button
          type="button"
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get Started
        </button>
      </div>

      <div className="flex flex-col rounded-lg border p-6 border-border bg-card">
        <h3 className="text-lg font-semibold text-foreground">Enterprise</h3>
        <div className="my-4">
          <span className="text-3xl font-bold text-foreground">Custom</span>
          <span className="text-sm text-muted-foreground"></span>
        </div>
        <ul className="mb-6 flex-1 space-y-2">
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Everything in Pro
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> On-premise option
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> SSO & SAML
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Dedicated account manager
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Custom SLAs
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Audit logs
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">✓</span> Training sessions
          </li>
        </ul>
        <button
          type="button"
          className="w-full rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:bg-accent hover:opacity-90"
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
}
