"use client";

import { useScopedI18n } from "../../../locales/client";

export default function SettingsFooter() {
  const scopedT = useScopedI18n("settings-footer");
  return (
    <div className="flex justify-end gap-3">
      <button
        type="button"
        className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        {scopedT("cancel")}
      </button>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {scopedT("saveChanges")}
      </button>
    </div>
  );
}
