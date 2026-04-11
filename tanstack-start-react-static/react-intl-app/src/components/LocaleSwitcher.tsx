import { useNavigate, useParams } from "@tanstack/react-router";
import { locales } from "../i18n/config";

export default function LocaleSwitcher() {
  const params = useParams({ strict: false });
  const locale = params.locale ?? "en";
  const navigate = useNavigate();

  const getLocaleName = (l: string) => {
    switch (l) {
      case "en":
        return "English";
      case "fr":
        return "Français";
      case "es":
        return "Español";
      case "de":
        return "Deutsch";
      case "ja":
        return "日本語";
      case "zh":
        return "中文";
      case "ko":
        return "한국어";
      case "it":
        return "Italiano";
      case "pt":
        return "Português";
      case "ru":
        return "Русский";
      default:
        return l.toUpperCase();
    }
  };

  const handleLocaleChange = (newLocale: string) => {
    navigate({
      to: ".",
      params: (prev: any) => ({ ...prev, locale: newLocale }),
    });
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
