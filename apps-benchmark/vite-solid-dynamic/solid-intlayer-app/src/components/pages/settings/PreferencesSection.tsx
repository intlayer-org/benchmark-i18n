import { useIntlayer } from 'solid-intlayer';
import { createUniqueId } from 'solid-js';

export default function PreferencesSection() {
  const content = useIntlayer('preferences-section');

  const languageId = createUniqueId();

  return (
    <section class="rounded-lg border border-border bg-card p-6">
      <h2 class="mb-4 text-lg font-semibold text-foreground">
        {content().preferences}
      </h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-foreground">
              {content().emailNotifications}
            </p>
            <p class="text-xs text-muted-foreground">
              {content().receiveWeeklyBenchmarkReports}
            </p>
          </div>
          <button
            type="button"
            class="h-6 w-11 rounded-full bg-primary transition-colors"
            aria-label={content().toggleNotifications.value}
          >
            <span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
          </button>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-foreground">
              {content().darkMode}
            </p>
            <p class="text-xs text-muted-foreground">
              {content().useDarkColorScheme}
            </p>
          </div>
          <button
            type="button"
            class="h-6 w-11 rounded-full bg-muted transition-colors"
            aria-label={content().toggleDarkMode.value}
          >
            <span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
          </button>
        </div>
        <div>
          <label
            for={languageId}
            class="mb-1 block text-sm font-medium text-foreground"
          >
            {content().defaultLanguage}
          </label>
          <select
            id={languageId}
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option>{content().englishEn}</option>
            <option>{content().frenchFr}</option>
            <option>{content().germanDe}</option>
            <option>{content().spanishEs}</option>
            <option>{content().japaneseJa}</option>
            <option>{content().chineseSimplifiedZhCn}</option>
            <option>{content().italianIt}</option>
            <option>{content().portuguesePt}</option>
            <option>{content().koreanKo}</option>
            <option>{content().russianRu}</option>
            <option>{content().arabicAr}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
