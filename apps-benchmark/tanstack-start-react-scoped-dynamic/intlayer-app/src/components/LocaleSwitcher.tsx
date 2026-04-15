import { useNavigate } from "@tanstack/react-router";
import { useLocale } from "react-intlayer";

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
  const navigate = useNavigate();
  const { locale, availableLocales, setLocale } = useLocale({
    onLocaleChange: (newLocale) => {
      navigate({
        to: ".",
        params: (prev) => ({ ...prev, locale: newLocale }),
      });
    },
  });

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
      >
        {availableLocales.map((locale) => (
          <option key={locale} value={locale}>
            {getLocaleName(locale)}
          </option>
        ))}
      </select>
    </div>
  );
}
