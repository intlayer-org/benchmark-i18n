"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { I18nProviderClient } from "../locales/client";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";

interface Props {
  children: React.ReactNode;
  locale: string;
}

export default function AppProviders({ children, locale }: Props) {
  const [renderStart] = useState(() =>
    typeof performance !== "undefined" ? performance.now() : 0
  );

  useLayoutEffect(() => {
    recordRenderTime("AppRoot", renderStart);
  }, [renderStart]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
      <I18nProviderClient locale={locale}>
        {children}
      </I18nProviderClient>
  );
}
