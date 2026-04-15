"use client";

import { Profiler, useEffect } from "react";
import { IntlayerClientProvider } from "next-intlayer";
import type { LocalesValues } from "intlayer";
import {
  onRenderCallback,
  recordHydrationDuration,
} from "test-utils/browser-metrics";

export default function AppProviders({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale?: LocalesValues;
}) {
  useEffect(() => {
    if (locale) document.documentElement.lang = locale;
  }, [locale]);

  // Measure time from the inline theme-init script (hydration_start mark) to
  // first client mount, matching the pattern used in the TanStack root document.
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
    <Profiler id="AppRoot" onRender={onRenderCallback}>
      <IntlayerClientProvider locale={locale}>
        {children}
      </IntlayerClientProvider>
    </Profiler>
  );
}
