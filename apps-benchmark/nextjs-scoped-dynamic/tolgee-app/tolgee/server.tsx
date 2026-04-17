// tolgee/server.tsx
import { createServerInstance } from '@tolgee/react/server';
import { TolgeeBase, ALL_LOCALES } from './shared';
import { getLanguage } from './language';
import { getMessages } from '@/i18n/getMessages'; // <-- IMPORT ONLY HERE

export const { getTolgee, getTranslate, T } = createServerInstance({
  getLocale: getLanguage,
  createTolgee: async (language) => {
    return TolgeeBase().init({
      observerOptions: {
        fullKeyEncode: true,
      },
      language,
      staticData: Object.fromEntries(
        ALL_LOCALES.map((locale) => [locale, () => getMessages(locale as any)])
      ),
    })
  },
});