import { Tolgee, FormatSimple } from '@tolgee/web';

export const ALL_LOCALES = ['en', 'fr', 'es', 'de', 'it', 'ja', 'ko', 'pt', 'ru', 'zh'];
export const DEFAULT_LOCALE = 'en';

export function TolgeeBase() {
  const instance = Tolgee()
    .use(FormatSimple())
  
  return instance;
}
