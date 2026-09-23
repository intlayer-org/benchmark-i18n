'use server';

import { detectLanguageFromHeaders } from '@tolgee/react/server';
import { cookies, headers } from 'next/headers';
import { ALL_LOCALES, DEFAULT_LOCALE } from './shared';

const LANGUAGE_COOKIE = 'NEXT_LOCALE';

export async function setLanguage(locale: string) {
  const cookieStore = await cookies();
  cookieStore.set(LANGUAGE_COOKIE, locale, { maxAge: 31536000 });
}

export async function getLanguage() {
  // Restore cookie reading
  const cookieStore = await cookies();
  const locale = cookieStore.get(LANGUAGE_COOKIE)?.value;
  
  if (locale && ALL_LOCALES.includes(locale)) {
    return locale;
  }

  const detected = detectLanguageFromHeaders(await headers(), ALL_LOCALES);
  return detected || DEFAULT_LOCALE;
}