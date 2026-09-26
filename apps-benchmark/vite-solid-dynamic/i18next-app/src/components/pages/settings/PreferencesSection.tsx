import { createUniqueId } from "solid-js";
import { trans } from "../../../i18n";

export default function PreferencesSection() {
  const languageId = createUniqueId();

  return (
    <section class="rounded-lg border border-border bg-card p-6">
      <h2 class="mb-4 text-lg font-semibold text-foreground">
        {trans("settings.preferences.title")}
      </h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-foreground">
              {trans("settings.preferences.emailNotifications")}
            </p>
            <p class="text-xs text-muted-foreground">
              {trans("settings.preferences.weeklyReports")}
            </p>
          </div>
          <button
            type="button"
            class="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label={trans("settings.preferences.toggleNotifications")}
          >
            <span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-foreground">
              {trans("settings.preferences.darkMode")}
            </p>
            <p class="text-xs text-muted-foreground">
              {trans("settings.preferences.darkColorScheme")}
            </p>
          </div>
          <button
            type="button"
            class="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label={trans("settings.preferences.toggleDarkMode")}
          >
            <span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            for={languageId}
            class="mb-1 block text-sm font-medium text-foreground"
          >
            {trans("settings.preferences.defaultLanguage")}
          </label>
          <select
            id={languageId}
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{trans("settings.preferences.english")}</option>
            <option>{trans("settings.preferences.french")}</option>
            <option>{trans("settings.preferences.german")}</option>
            <option>{trans("settings.preferences.spanish")}</option>
            <option>{trans("settings.preferences.japanese")}</option>
            <option>{trans("settings.preferences.chinese")}</option>
            <option>{trans("settings.preferences.arabic")}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
