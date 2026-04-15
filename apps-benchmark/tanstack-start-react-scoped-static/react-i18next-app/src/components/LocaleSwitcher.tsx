import { useNavigate, useParams } from "@tanstack/react-router";
import { locales, getLocaleName } from "../i18n/config";

export default function LocaleSwitcher() {
  const params = useParams({ strict: false });
  const locale = params.locale ?? "en";
  const navigate = useNavigate();

  const handleLocaleChange = (newLocale: string) => {
    navigate({
      to: ".",
      params: (prev) => ({ ...prev, locale: newLocale }),
    });
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
      >
        {locales.map((localeEl) => (
          <option key={localeEl} value={localeEl}>
            {getLocaleName(localeEl)}
          </option>
        ))}
      </select>
    </div>
  );
}
