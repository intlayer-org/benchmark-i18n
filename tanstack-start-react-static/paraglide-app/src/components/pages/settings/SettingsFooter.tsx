import * as m from "../../../paraglide/messages";

export default function SettingsFooter() {
  return (
    <div className="flex justify-end gap-3">
      <button
        type="button"
        className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        {m["settings-footer.cancel"]()}
      </button>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {m["settings-footer.saveChanges"]()}
      </button>
    </div>
  );
}
