"use client";

import { useId } from "react";
import { useTranslate } from "@/i18n/tolgee";

export default function PreferencesSection() {
  const { t } = useTranslate();
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Preferences
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
            aria-label={t("preferencesSection.toggleNotifications")}
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
            aria-label={t("preferencesSection.toggleDarkMode")}
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
            <option>{t("preferencesSection.englishEn")}</option>
            <option>{t("preferencesSection.frenchFr")}</option>
            <option>{t("preferencesSection.germanDe")}</option>
            <option>{t("preferencesSection.spanishEs")}</option>
            <option>{t("preferencesSection.japaneseJa")}</option>
            <option>{t("preferencesSection.chineseSimplifiedZhCn")}</option>
            <option>{t("preferencesSection.arabicAr")}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
