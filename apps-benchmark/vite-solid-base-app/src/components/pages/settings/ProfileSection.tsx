import { createUniqueId } from "solid-js";

export default function ProfileSection() {
  const displayNameId = createUniqueId();
  const emailId = createUniqueId();

  return (
    <section class="rounded-lg border border-border bg-card p-6">
      <h2 class="mb-4 text-lg font-semibold text-foreground">Profile</h2>
      <div class="space-y-4">
        <div>
          <label
            for={displayNameId}
            class="mb-1 block text-sm font-medium text-foreground"
          >
            Display Name
          </label>
          <input
            id={displayNameId}
            defaultValue="John Developer"
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div>
          <label
            for={emailId}
            class="mb-1 block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id={emailId}
            defaultValue="john@example.com"
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
    </section>
  );
}
