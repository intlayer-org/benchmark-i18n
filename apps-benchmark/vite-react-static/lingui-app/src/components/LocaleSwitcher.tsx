import { useLocation, useNavigate, useParams } from "react-router-dom";
import { locales, getLocaleName } from "../i18n/lingui";

export default function LocaleSwitcher() {
  const { locale = "en" } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLocaleChange = (newLocale: string) => {
    navigate(
      location.pathname.replace(/^\/[^/]+/, `/${newLocale}`) +
        location.search +
        location.hash,
    );
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {getLocaleName(loc)}
          </option>
        ))}
      </select>
    </div>
  );
}
