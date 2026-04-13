import { useNavigate } from "@tanstack/react-router";
import { getLocaleName } from "intlayer";
import { useLocale } from "react-intlayer";

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
