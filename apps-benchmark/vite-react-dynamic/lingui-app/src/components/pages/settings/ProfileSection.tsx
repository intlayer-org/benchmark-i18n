import { useId } from "react";
import { useLingui } from "@lingui/react";

export default function ProfileSection() {
  const { i18n } = useLingui();
  const displayNameId = useId();
  const emailId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">Profile</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor={displayNameId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {i18n._({ id: "profile-section.displayName", message: "Display Name" })}
          </label>
          <input
            id={displayNameId}
            defaultValue="John Developer"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id={emailId}
            defaultValue="john@example.com"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
    </section>
  );
}
