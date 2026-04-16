"use client";

import { useId } from "react";
import { useI18n } from "../../../locales/client";

export default function PreferencesSection() {
  const t = useI18n();
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {t("settings.preferences-section.preferences")}
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {t("settings.preferences-section.emailNotifications")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("settings.preferences-section.receiveWeeklyBenchmarkReports")}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label={t("settings.preferences-section.toggleNotifications")}
          >
            <span className="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {t("settings.preferences-section.darkMode")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("settings.preferences-section.useDarkColorScheme")}
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label={t("settings.preferences-section.toggleDarkMode")}
          >
            <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            htmlFor={languageId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {t("settings.preferences-section.defaultLanguage")}
          </label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{t("settings.preferences-section.englishEn")}</option>
            <option>{t("settings.preferences-section.frenchFr")}</option>
            <option>{t("settings.preferences-section.germanDe")}</option>
            <option>{t("settings.preferences-section.spanishEs")}</option>
            <option>{t("settings.preferences-section.japaneseJa")}</option>
            <option>
              {t("settings.preferences-section.chineseSimplifiedZhCn")}
            </option>
            <option>{t("settings.preferences-section.arabicAr")}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
