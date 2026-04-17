"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { IntlayerClientProvider } from "next-intlayer";
import type { LocalesValues } from "intlayer";
import {
  recordRenderTime,
  recordHydrationDuration,
} from "test-utils/browser-metrics";

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

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
    <IntlayerClientProvider locale={locale}>
      {children}
    </IntlayerClientProvider>
  );
}
