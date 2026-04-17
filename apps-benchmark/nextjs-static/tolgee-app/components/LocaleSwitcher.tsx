"use client";

import { useTolgee } from "@tolgee/react";
import { locales, getLocaleName } from "@/i18n/config";
import { useRouter, usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const tolgee = useTolgee(["language"]);
  const locale = tolgee.getLanguage() || "en";
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    tolgee.changeLanguage(newLocale);
   
    const segments = pathname.split("/");
   
    segments[1] = newLocale;
   
    const newPath = segments.join("/") || `/${newLocale}`;

    console.log("newPath", newPath);
    router.push(newPath);
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
