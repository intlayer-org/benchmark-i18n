import { useIntlayer } from 'react-intlayer';
import { useId } from "react";

export default function PreferencesSection() {
  const content = useIntlayer('preferences-section');

  const languageId = useId();

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-foreground">{content.preferences}</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">{content.emailNotifications}</p>
            <p className="text-xs text-muted-foreground">{content.receiveWeeklyBenchmarkReports}</p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label={content.toggleNotifications.value}
          >
            <span className="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">{content.darkMode}</p>
            <p className="text-xs text-muted-foreground">{content.useDarkColorScheme}</p>
          </div>
          <button
            type="button"
            className="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label={content.toggleDarkMode.value}
          >
            <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            htmlFor={languageId}
            className="mb-1 block text-sm font-medium text-foreground"
          >{content.defaultLanguage}</label>
          <select
            id={languageId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{content.englishEn}</option>
            <option>{content.frenchFr}</option>
            <option>{content.germanDe}</option>
            <option>{content.spanishEs}</option>
            <option>{content.japaneseJa}</option>
            <option>{content.chineseSimplifiedZhCn}</option>
            <option>{content.arabicAr}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
