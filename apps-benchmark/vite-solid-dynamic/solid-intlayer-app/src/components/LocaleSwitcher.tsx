import { useLocation, useNavigate, useParams } from "@solidjs/router";
import { For } from "solid-js";
import { getLocaleName, locales } from "../i18n/config";

export default function LocaleSwitcher() {
  const params = useParams<{ locale: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLocaleChange = (newLocale: string) => {
    const pathname = location.pathname;
    const newPath = pathname.replace(/^\/[^/]+/, `/${newLocale}`);
    navigate(`${newPath}${location.search}${location.hash}`);
  };

  return (
    <div class="flex items-center gap-2">
      <select
        value={params.locale ?? "en"}
        onChange={(e) => handleLocaleChange(e.currentTarget.value)}
        class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <For each={locales}>
          {(localeItem) => (
            <option value={localeItem}>{getLocaleName(localeItem)}</option>
          )}
        </For>
      </select>
    </div>
  );
}
