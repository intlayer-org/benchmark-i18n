import { type Dictionary, t } from 'intlayer';

const preferencesSectionContent = {
  key: 'preferences-section',
  content: {
    emailNotifications: t({
      en: "Email Notifications"
    }),

    receiveWeeklyBenchmarkReports: t({
      en: "Receive weekly benchmark reports"
    }),

    toggleNotifications: t({
      en: "Toggle notifications"
    }),

    darkMode: t({
      en: "Dark Mode"
    }),

    useDarkColorScheme: t({
      en: "Use dark color scheme"
    }),

    toggleDarkMode: t({
      en: "Toggle dark mode"
    }),

    defaultLanguage: t({
      en: "Default Language"
    }),

    englishEn: t({
      en: "English (en)"
    }),

    frenchFr: t({
      en: "French (fr)"
    }),

    germanDe: t({
      en: "German (de)"
    }),

    spanishEs: t({
      en: "Spanish (es)"
    }),

    japaneseJa: t({
      en: "Japanese (ja)"
    }),

    chineseSimplifiedZhCn: t({
      en: "Chinese Simplified (zh-CN)"
    }),

    arabicAr: t({
      en: "Arabic (ar)"
    })
  },
} satisfies Dictionary;

export default preferencesSectionContent;
