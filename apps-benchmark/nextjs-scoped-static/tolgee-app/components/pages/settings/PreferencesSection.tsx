"use client";

import { T, useTranslate } from "@/i18n/tolgee";
import { useId } from "react";

export default function PreferencesSection() {
  const { t } = useTranslate();
  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        <T keyName="preferencesSection.preferences" defaultValue="Preferences" />
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              <T
                keyName="preferencesSection.emailNotifications"
                defaultValue="Email Notifications"
              />
            </p>
            <p className="text-xs text-muted-foreground">
              <T
                keyName="preferencesSection.receiveWeeklyBenchmark"
                defaultValue="Receive weekly benchmark reports"
              />
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label={t(
              "preferencesSection.toggleNotifications",
              "Toggle notifications"
            )}
          >
            <span className="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              <T keyName="preferencesSection.darkMode" defaultValue="Dark Mode" />
            </p>
            <p className="text-xs text-muted-foreground">
              <T
                keyName="preferencesSection.useDarkColorScheme"
                defaultValue="Use dark color scheme"
              />
            </p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label={t("preferencesSection.toggleDarkMode", "Toggle dark mode")}
          >
            <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            htmlFor={languageId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            <T
              keyName="preferencesSection.defaultLanguage"
              defaultValue="Default Language"
            />
          </label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{t("preferencesSection.englishEn", "English (en)")}</option>
            <option>{t("preferencesSection.frenchFr", "French (fr)")}</option>
            <option>{t("preferencesSection.germanDe", "German (de)")}</option>
            <option>{t("preferencesSection.spanishEs", "Spanish (es)")}</option>
            <option>{t("preferencesSection.japaneseJa", "Japanese (ja)")}</option>
            <option>
              {t(
                "preferencesSection.chineseSimplifiedZhCn",
                "Chinese Simplified (zh-CN)"
              )}
            </option>
            <option>{t("preferencesSection.arabicAr", "Arabic (ar)")}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
