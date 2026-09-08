import { useId } from "react";
import { useLingui } from "@lingui/react";

export default function PreferencesSection() {
  const { i18n } = useLingui();
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {i18n._({ id: "preferences-section.preferences", message: "Preferences" })}
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {i18n._({ id: "preferences-section.emailNotifications", message: "Email Notifications" })}
            </p>
            <p className="text-xs text-muted-foreground">
              {i18n._({ id: "preferences-section.receiveWeeklyBenchmarkReports", message: "Receive weekly benchmark reports" })}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label={i18n._({ id: "preferences-section.toggleNotifications", message: "Toggle notifications" })}
          >
            <span className="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {i18n._({ id: "preferences-section.darkMode", message: "Dark Mode" })}
            </p>
            <p className="text-xs text-muted-foreground">
              {i18n._({ id: "preferences-section.useDarkColorScheme", message: "Use dark color scheme" })}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label={i18n._({ id: "preferences-section.toggleDarkMode", message: "Toggle dark mode" })}
          >
            <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            htmlFor={languageId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {i18n._({ id: "preferences-section.defaultLanguage", message: "Default Language" })}
          </label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{i18n._({ id: "preferences-section.englishEn", message: "English (en)" })}</option>
            <option>{i18n._({ id: "preferences-section.frenchFr", message: "French (fr)" })}</option>
            <option>{i18n._({ id: "preferences-section.germanDe", message: "German (de)" })}</option>
            <option>{i18n._({ id: "preferences-section.spanishEs", message: "Spanish (es)" })}</option>
            <option>{i18n._({ id: "preferences-section.japaneseJa", message: "Japanese (ja)" })}</option>
            <option>{i18n._({ id: "preferences-section.chineseSimplifiedZhCn", message: "Chinese Simplified (zh-CN)" })}</option>
            <option>{i18n._({ id: "preferences-section.arabicAr", message: "Arabic (ar)" })}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
