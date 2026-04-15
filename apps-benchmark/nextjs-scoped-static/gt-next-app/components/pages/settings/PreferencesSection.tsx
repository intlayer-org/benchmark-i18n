import { useId } from "react";
import { T } from "gt-next";

export default function PreferencesSection() {
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        <T>Preferences</T>
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              <T>Email Notifications</T>
            </p>
            <p className="text-xs text-muted-foreground">
              <T>Receive weekly benchmark reports</T>
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
              <T>Dark Mode</T>
            </p>
            <p className="text-xs text-muted-foreground">
              <T>Use dark color scheme</T>
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
            <T>Default Language</T>
          </label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>
              <T>English (en)</T>
            </option>
            <option>
              <T>French (fr)</T>
            </option>
            <option>
              <T>German (de)</T>
            </option>
            <option>
              <T>Spanish (es)</T>
            </option>
            <option>
              <T>Japanese (ja)</T>
            </option>
            <option>
              <T>Chinese Simplified (zh-CN)</T>
            </option>
            <option>
              <T>Arabic (ar)</T>
            </option>
          </select>
        </div>
      </div>
    </section>
  );
}
