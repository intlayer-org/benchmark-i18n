import MockBanner from "@/components/MockBanner";

const Settings = () => (
  <div className="container py-16">
    <MockBanner />
    <h1 className="mb-2 text-3xl font-bold text-foreground">Settings</h1>
    <p className="mb-8 text-muted-foreground">Manage your account preferences and configuration.</p>

    <div className="mx-auto max-w-2xl space-y-8">
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">Display Name</label>
            <input defaultValue="John Developer" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
            <input defaultValue="john@example.com" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive weekly benchmark reports</p>
            </div>
            <button className="h-6 w-11 rounded-full bg-primary transition-colors" aria-label="Toggle notifications">
              <span className="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Use dark color scheme</p>
            </div>
            <button className="h-6 w-11 rounded-full bg-muted transition-colors" aria-label="Toggle dark mode">
              <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
            </button>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">Default Language</label>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
              <option>English (en)</option>
              <option>French (fr)</option>
              <option>German (de)</option>
              <option>Spanish (es)</option>
              <option>Japanese (ja)</option>
              <option>Chinese Simplified (zh-CN)</option>
              <option>Arabic (ar)</option>
            </select>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">API Access</h2>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">API Key</label>
          <div className="flex gap-2">
            <input readOnly defaultValue="sk_bench_xxxxxxxxxxxxxxxxxxxx" className="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground" />
            <button className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors">Copy</button>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Use this key to access the benchmarking API programmatically.</p>
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <button className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors">Cancel</button>
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">Save Changes</button>
      </div>
    </div>
  </div>
);

export default Settings;
