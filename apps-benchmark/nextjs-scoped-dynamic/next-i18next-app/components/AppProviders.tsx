"use client";

import { Profiler, useEffect } from "react";
import { useParams } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import { onRenderCallback, recordHydrationDuration } from "test-utils/browser-metrics";
import i18n, { namespaces, preloadNamespaces } from "../i18n/i18n";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = (params.locale as string) ?? "en";

  useEffect(() => {
    let cancelled = false;
    (async () => {
      await preloadNamespaces(locale, namespaces);
      if (!cancelled && i18n.language !== locale) {
        await i18n.changeLanguage(locale);
      }
    })();
    return () => {
      cancelled = true;
    };
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
    <Profiler id="AppRoot" onRender={onRenderCallback}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </Profiler>
  );
}
