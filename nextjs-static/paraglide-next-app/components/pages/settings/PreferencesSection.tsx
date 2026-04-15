"use client";

import * as m from "../../../paraglide/messages";
import { useId } from "react";

export default function PreferencesSection() {
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {m["preferences-section.preferences"]()}
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {m["preferences-section.emailNotifications"]()}
            </p>
            <p className="text-xs text-muted-foreground">
              {m["preferences-section.receiveWeeklyBenchmarkReports"]()}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label={m["preferences-section.toggleNotifications"]()}
          >
            <span className="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {m["preferences-section.darkMode"]()}
            </p>
            <p className="text-xs text-muted-foreground">
              {m["preferences-section.useDarkColorScheme"]()}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label={m["preferences-section.toggleDarkMode"]()}
          >
            <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            htmlFor={languageId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {m["preferences-section.defaultLanguage"]()}
          </label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{m["preferences-section.englishEn"]()}</option>
            <option>{m["preferences-section.frenchFr"]()}</option>
            <option>{m["preferences-section.germanDe"]()}</option>
            <option>{m["preferences-section.spanishEs"]()}</option>
            <option>{m["preferences-section.japaneseJa"]()}</option>
            <option>{m["preferences-section.chineseSimplifiedZhCn"]()}</option>
            <option>{m["preferences-section.arabicAr"]()}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
