import { useParams, useRouter } from "@tanstack/react-router";
import { T } from "gt-react";
import { locales } from "../../gt.config.json";

export default function LocaleSwitcher() {
  const params = useParams({ strict: false });
  const locale = params.locale ?? "en";

  const getLocaleName = (l: string) => {
    try {
      const displayNames = new Intl.DisplayNames([l], { type: "language" });
      const name = displayNames.of(l);
      return name ? name.charAt(0).toUpperCase() + name.slice(1) : l;
    } catch (e) {
      return l.toUpperCase();
    }
  };

  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    console.log("handleLocaleChange", newLocale);
    const newPath = window.location.pathname.replace(
      new RegExp(`^\\/${locale}`),
      `/${newLocale}`,
    );
    router.navigate({
      to: newPath as any, // Bypass strict TS checks for absolute paths if needed
    });
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
            <T>{getLocaleName(localeItem)}</T>
          </option>
        ))}
      </select>
    </div>
  );
}
