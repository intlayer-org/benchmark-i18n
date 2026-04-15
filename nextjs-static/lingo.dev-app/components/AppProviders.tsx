"use client";

import { Profiler, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  onRenderCallback,
  recordHydrationDuration,
} from "test-utils/browser-metrics";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const locale = (params.locale as string) ?? "en";

  // Keep html[lang] in sync with the active locale so the reactivity test can
  // observe it via MutationObserver (mirrors the TanStack RootDocument behavior).
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Measure time from the inline theme-init script (hydration_start mark) to
  // first client mount, matching the pattern used in the TanStack root document.
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
    <Profiler id="AppRoot" onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
}
