import { useNavigate, useParams } from "@tanstack/react-router";

export default function LocaleSwitcher() {
  const params = useParams({ strict: false });
  const locale = (params as any).locale ?? "en";
  const navigate = useNavigate();

  // Assuming some common locales for now
  const locales = ["en", "fr", "es"];

  const handleLocaleChange = (newLocale: string) => {
    navigate({
      to: "/$locale",
      params: { locale: newLocale },
    });
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
