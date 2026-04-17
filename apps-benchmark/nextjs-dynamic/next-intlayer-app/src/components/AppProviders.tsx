"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { IntlayerClientProvider } from "next-intlayer";
import type { LocalesValues } from "intlayer";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";

export default function AppProviders({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale?: LocalesValues;
}) {
  const [renderStart] = useState(() =>
    typeof performance !== "undefined" ? performance.now() : 0
  );

  useLayoutEffect(() => {
    recordRenderTime("AppRoot", renderStart);
  }, [renderStart]);

  useEffect(() => {
    if (locale) document.documentElement.lang = locale;
  }, [locale]);

  // Measure time from the inline theme-init script (hydration_start mark) to
  // first client mount, matching the pattern used in the TanStack root document.
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
      <IntlayerClientProvider locale={locale}>
        {children}
      </IntlayerClientProvider>
  );
}
