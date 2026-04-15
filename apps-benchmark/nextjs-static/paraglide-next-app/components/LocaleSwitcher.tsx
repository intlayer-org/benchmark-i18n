"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { locales } from "../paraglide/runtime";

export default function LocaleSwitcher() {
  const params = useParams();
  const locale = (params.locale as string) ?? "en";
  const pathname = usePathname();
  const router = useRouter();

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
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
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
