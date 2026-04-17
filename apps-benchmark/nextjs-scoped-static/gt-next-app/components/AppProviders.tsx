"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";

export default function AppProviders({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  // Keep html[lang] in sync with the active locale so the reactivity test can
  // observe it via MutationObserver (mirrors the TanStack RootDocument behavior).
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

  return <>{children}</>;
}
