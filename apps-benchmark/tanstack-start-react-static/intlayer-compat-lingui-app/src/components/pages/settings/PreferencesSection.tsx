import { Trans } from "@lingui/react";
import { useId } from "react";

export default function PreferencesSection() {
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        <Trans id="settings.preferences.title" message="Preferences" />
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              <Trans
                id="settings.preferences.emailNotifications"
                message="Email Notifications"
              />
            </p>
            <p className="text-xs text-muted-foreground">
              <Trans
                id="settings.preferences.receiveWeeklyReports"
                message="Receive weekly benchmark reports"
              />
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
              <Trans id="settings.preferences.darkMode" message="Dark Mode" />
            </p>
            <p className="text-xs text-muted-foreground">
              <Trans
                id="settings.preferences.useDarkScheme"
                message="Use dark color scheme"
              />
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
            <Trans
              id="settings.preferences.defaultLanguage"
              message="Default Language"
            />
          </label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{i18n._("settings.preferences.english")}</option>
            <option>{i18n._("settings.preferences.french")}</option>
            <option>{i18n._("settings.preferences.german")}</option>
            <option>{i18n._("settings.preferences.spanish")}</option>
            <option>{i18n._("settings.preferences.japanese")}</option>
            <option>{i18n._("settings.preferences.chinese")}</option>
            <option>{i18n._("settings.preferences.arabic")}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
