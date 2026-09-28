import { useIntl } from "react-intl";

export default function SettingsFooter() {
  const intl = useIntl();

  return (
    <div className="flex justify-end gap-3">
      <button
        type="button"
        className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        {intl.formatMessage({ id: "settings-footer.cancel" })}
      </button>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {intl.formatMessage({ id: "settings-footer.saveChanges" })}
      </button>
    </div>
  );
}
