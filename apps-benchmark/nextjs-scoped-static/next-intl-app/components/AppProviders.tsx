"use client";

import { Profiler, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import { onRenderCallback, recordHydrationDuration } from "test-utils/browser-metrics";

interface Props {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}

export default function AppProviders({ children, locale, messages }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Measure time from the inline theme-init script (hydration_start mark) to
  // first client mount, matching the pattern used in the TanStack root document.
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
    <Profiler id="AppRoot" onRender={onRenderCallback}>
      <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
        {children}
      </NextIntlClientProvider>
    </Profiler>
  );
}
