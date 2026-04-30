import { trans } from "../../../i18n";

export default function SettingsFooter() {
  return (
    <div class="flex justify-end gap-3">
      <button
        type="button"
        class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
      >
        {trans("settings.footer.cancel")}
      </button>
      <button
        type="submit"
        class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {trans("settings.footer.saveChanges")}
      </button>
    </div>
  );
}
