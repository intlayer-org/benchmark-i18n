"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "next/navigation";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
import { setLocale } from "../paraglide/runtime";

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
    setLocale(locale as any, { reload: false });
    document.documentElement.lang = locale;
  }, [locale]);

  // Measure time from the inline theme-init script (hydration_start mark) to
  // first client mount, matching the pattern used in the TanStack root document.
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return <>{children}</>;
}
