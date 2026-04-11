import { useNavigate, useParams } from "@tanstack/react-router";

export default function LocaleSwitcher() {
  const params = useParams({ strict: false });
  const locale = params.locale ?? "en";
  const navigate = useNavigate();

  // Assuming some common locales for now
  const locales = ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"];

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
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
