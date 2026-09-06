"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IntlayerClientProvider } from "next-intlayer";
import type { LocalesValues } from "intlayer";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
import "../i18n/i18n";

// `react-i18next`'s `I18nextProvider` is aliased to the compat adapter, which
// ignores the `i18n` instance and takes no locale. `IntlayerClientProvider` is
// the provider the compat `useTranslation()` reads its locale from, so it takes
// its place here — everything below still calls `useTranslation()` unchanged.
export default function AppProviders({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = (params.locale as string) ?? "en";

  const [renderStart] = useState(() =>
    typeof performance !== "undefined" ? performance.now() : 0
  );

  useLayoutEffect(() => {
    recordRenderTime("AppRoot", renderStart);
  }, [renderStart]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Measure time from the inline theme-init script (hydration_start mark) to
  // first client mount, matching the pattern used in the TanStack root document.
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
      <IntlayerClientProvider locale={locale as LocalesValues}>
        {children}
      </IntlayerClientProvider>
  );
}
