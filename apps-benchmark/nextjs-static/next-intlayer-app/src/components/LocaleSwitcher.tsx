"use client";

import { locales, getLocaleName } from "intlayer";
import { useLocale } from "next-intlayer";

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale({
    onChange: "push",
  });

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
      >
        {locales.map((localeItem) => (
          <option key={localeItem} value={localeItem}>
            {getLocaleName(localeItem)}
          </option>
        ))}
      </select>
    </div>
  );
}
