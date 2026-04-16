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

    // Update html[lang] immediately when the client-side language changes.
    // URL navigation (router.push in LocaleSwitcher) handles the server re-render.
    const { unsubscribe: unsubLanguage } = tolgee.on('language', ({ value }) => {
      document.documentElement.lang = value;
    });

    return () => {
      unsubPermanentChange();
      unsubLanguage();
    };
  }, [router]);

  return (
    <TolgeeProvider
      tolgee={tolgee}
      fallback="Loading"
      ssr={{ language, staticData }}
    >
      {children}
    </TolgeeProvider>
  );
};
