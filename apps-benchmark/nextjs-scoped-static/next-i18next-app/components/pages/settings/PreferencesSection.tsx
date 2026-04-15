"use client";

import { useId } from "react";
import { useTranslation } from "react-i18next";

export default function PreferencesSection() {
  const { t } = useTranslation("settings");
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {t("preferencesSection.preferences")}
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {t("preferencesSection.emailNotifications")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("preferencesSection.receiveWeeklyBenchmarkReports")}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label="Toggle notifications"
          >
            <span className="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {t("preferencesSection.darkMode")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("preferencesSection.useDarkColorScheme")}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            htmlFor={languageId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {t("preferencesSection.defaultLanguage")}
          </label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
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
  );
}
