"use client";

import { Trans } from "@lingui/react";

export default function SettingsFooter() {
  return (
    <div className="flex justify-end gap-3">
      <button
        type="button"
        className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        <Trans id="settings-footer.cancel" message="Cancel" />
      </button>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        <Trans id="settings-footer.saveChanges" message="Save Changes" />
      </button>
    </div>
  );
}
