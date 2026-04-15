"use client";

import { useTolgee } from "@tolgee/react";
import { setLanguage } from "@/tolgee/language";
import { locales, getLocaleName } from "@/i18n/config";

export default function LocaleSwitcher() {
  const tolgee = useTolgee();
  const locale = tolgee.getLanguage() || "en";

  const handleLocaleChange = async (newLocale: string) => {
    await setLanguage(newLocale);
    await tolgee.changeLanguage(newLocale);
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
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
