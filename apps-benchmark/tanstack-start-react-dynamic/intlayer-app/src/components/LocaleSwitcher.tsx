import { useNavigate, useParams } from "@tanstack/react-router";
import { getConfiguration } from "intlayer";

const { locales } = getConfiguration().internationalization;

function getLocaleName(locale: string): string {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "language" });
    const name = displayNames.of(locale);
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
  } catch (e) {
    return locale.toUpperCase();
  }
}

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
        {locales.map((l) => (
          <option key={l} value={l}>
            {getLocaleName(l)}
          </option>
        ))}
      </select>
    </div>
  );
}
