"use client";

import { useRouter, useParams, usePathname } from "next/navigation";
import { T } from "gt-next";
import { locales } from "../gt.config.json";

export default function LocaleSwitcher() {
  const params = useParams();
  const locale = (params.locale as string) ?? "en";
  const router = useRouter();
  const pathname = usePathname();

  const getLocaleName = (l: string) => {
    try {
      const displayNames = new Intl.DisplayNames([l], { type: "language" });
      const name = displayNames.of(l);
      return name ? name.charAt(0).toUpperCase() + name.slice(1) : l;
    } catch (e) {
      return l.toUpperCase();
    }
  };

  const handleLocaleChange = (newLocale: string) => {
    // Replace the locale part of the pathname
    const segments = pathname.split("/");
    // pathname usually starts with /locale/...
    // segments[0] is "", segments[1] is the locale
    segments[1] = newLocale;
    const newPathname = segments.join("/");

    router.push(newPathname);
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
