"use client";

import { useTranslation } from "react-i18next";

export default function SettingsFooter() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-end gap-3">
      <button
        type="button"
        className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        {t("settings.settingsFooter.cancel")}
      </button>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {t("settings.settingsFooter.saveChanges")}
      </button>
    </div>
  );
}
