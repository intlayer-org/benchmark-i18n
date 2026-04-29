import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getLocaleName, locales } from "../i18n/config";

export default function LocaleSwitcher() {
  const { locale = "en" } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLocaleChange = (newLocale: string) => {
    const newPath = location.pathname.replace(
      /^\/[^/]+/,
      `/${newLocale}`,
    );
    navigate(newPath + location.search + location.hash);
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
