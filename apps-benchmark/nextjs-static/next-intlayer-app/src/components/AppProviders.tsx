"use client";

import { useEffect } from "react";
import { IntlayerClientProvider } from "next-intlayer";
import type { LocalesValues } from "intlayer";
import {
  useRenderMetrics,
  recordHydrationDuration,
} from "test-utils/browser-metrics";

export default function AppProviders({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale?: LocalesValues;
}) {
  useRenderMetrics("AppRoot");

  useEffect(() => {
    if (locale) document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
    <IntlayerClientProvider locale={locale}>
      {children}
    </IntlayerClientProvider>
  );
}
