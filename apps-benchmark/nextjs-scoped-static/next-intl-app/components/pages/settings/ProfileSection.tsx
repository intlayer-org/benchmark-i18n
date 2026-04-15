"use client";

import { useId } from "react";
import { useTranslations } from "next-intl";

export default function ProfileSection() {
  const t = useTranslations();
  const displayNameId = useId();
  const emailId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {t("profile-section.profile")}
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor={displayNameId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {t("profile-section.displayName")}
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
            {t("profile-section.email")}
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
