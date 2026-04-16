"use client";

import { useId } from "react";
import { useScopedI18n } from "../../../locales/client";

export default function PreferencesSection() {
  const scopedT = useScopedI18n("preferences-section");
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {scopedT("preferences")}
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {scopedT("emailNotifications")}
            </p>
            <p className="text-xs text-muted-foreground">
              {scopedT("receiveWeeklyBenchmarkReports")}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label={scopedT("toggleNotifications")}
          >
            <span className="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {scopedT("darkMode")}
            </p>
            <p className="text-xs text-muted-foreground">
              {scopedT("useDarkColorScheme")}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label={scopedT("toggleDarkMode")}
          >
            <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            htmlFor={languageId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {scopedT("defaultLanguage")}
          </label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{scopedT("englishEn")}</option>
            <option>{scopedT("frenchFr")}</option>
            <option>{scopedT("germanDe")}</option>
            <option>{scopedT("spanishEs")}</option>
            <option>{scopedT("japaneseJa")}</option>
            <option>{scopedT("chineseSimplifiedZhCn")}</option>
            <option>{scopedT("arabicAr")}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
