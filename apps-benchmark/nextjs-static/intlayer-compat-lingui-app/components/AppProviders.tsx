"use client";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { I18nProvider } from "@lingui/react";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
import { initLingui, getMessages } from "../i18n/lingui";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = (params.locale as string) ?? "en";

  const messages = useMemo(() => getMessages(locale), [locale]);
  const i18n = useMemo(() => initLingui(locale, messages), [locale, messages]);

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
      <I18nProvider i18n={i18n}>
        {children}
      </I18nProvider>
  );
}
