'use client';

import {
  TolgeeProvider,
  TolgeeStaticData,
  CachePublicRecord,
} from '@tolgee/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { TolgeeBase } from './shared';

type Props = {
  language: string;
  staticData: TolgeeStaticData | CachePublicRecord[];
  children: React.ReactNode;
};

const tolgee = TolgeeBase().init();

export const TolgeeNextProvider = ({
  language,
  staticData,
  children,
}: Props) => {
  const router = useRouter();

  useEffect(() => {
    // Refresh server components when a translation is permanently changed (dev/in-context editor).
    const { unsubscribe: unsubPermanentChange } = tolgee.on('permanentChange', () => {
      router.refresh();
    });

    // URL navigation (router.push in LocaleSwitcher) handles the server re-render.
    // html[lang] is set by AppProviders once the new locale has rendered, as in
    // every other app — setting it on tolgee's `language` event would stop the
    // reactivity timer before any content changed.

    return () => {
      unsubPermanentChange();
    };
  }, [router]);

  return (
    <TolgeeProvider
      tolgee={tolgee}
      ssr={{ language, staticData }}
      options={{ useSuspense: false }}
    >
      {children}
    </TolgeeProvider>
  );
};
