import { Tolgee, FormatSimple } from '@tolgee/web';
import { getMessages } from '@/i18n/getMessages';

export const ALL_LOCALES = ['en', 'fr', 'es', 'de', 'it', 'ja', 'ko', 'pt', 'ru', 'zh'];
export const DEFAULT_LOCALE = 'en';

export function TolgeeBase() {
  return Tolgee()
    .use(FormatSimple())
    .updateDefaults({
      staticData: Object.fromEntries(
        ALL_LOCALES.map((locale) => [locale, () => Promise.resolve(getMessages(locale))])
      ),
    });
}