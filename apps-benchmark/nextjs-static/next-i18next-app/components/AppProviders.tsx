"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
import i18n from "../i18n/i18n";

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
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Measure time from the inline theme-init script (hydration_start mark) to
  // first client mount, matching the pattern used in the TanStack root document.
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
  );
}
