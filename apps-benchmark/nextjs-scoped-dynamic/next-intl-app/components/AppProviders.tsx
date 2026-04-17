"use client";

import { useEffect, useLayoutEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";

interface Props {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}

export default function AppProviders({ children, locale, messages }: Props) {
  const renderStart =
    typeof performance !== "undefined" ? performance.now() : 0;
  useLayoutEffect(() => {
    recordRenderTime("AppRoot", renderStart);
  });

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Measure time from the inline theme-init script (hydration_start mark) to
  // first client mount, matching the pattern used in the TanStack root document.
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
      <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
        {children}
      </NextIntlClientProvider>
  );
}
