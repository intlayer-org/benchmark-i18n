"use client";

import { useTolgee } from "@tolgee/react";
import { locales, getLocaleName } from "@/i18n/config";
import { useRouter, usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const tolgee = useTolgee(["language"]);
  const router = useRouter();
  const pathname = usePathname();
  const locale = tolgee.getLanguage() || "en";

  const handleLocaleChange = async (newLocale: string) => {
    // Update html[lang] immediately so the reactivity test can observe the change
    // without waiting for Tolgee's async translation loading or RSC re-render.
    document.documentElement.lang = newLocale;
    // Update Tolgee client-side immediately for fast perceived reactivity.
    tolgee.changeLanguage(newLocale);
    // Navigate to the same page under the new locale prefix (e.g. /en/about → /fr/about).
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || `/${newLocale}`);
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
