"use client";

import { useEffect, useLayoutEffect, useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
import { initLingui } from "../i18n/lingui";

export default function AppProviders({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}) {
  const i18n = useMemo(
    () => initLingui(locale, messages),
    [locale, messages],
  );

  const renderStart =
    typeof performance !== "undefined" ? performance.now() : 0;
  useLayoutEffect(() => {
    recordRenderTime("AppRoot", renderStart);
  });

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
      <I18nProvider i18n={i18n}>
        {children}
      </I18nProvider>
  );
}
