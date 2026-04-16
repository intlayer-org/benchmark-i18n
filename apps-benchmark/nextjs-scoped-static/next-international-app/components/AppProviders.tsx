"use client";

import { Profiler, useEffect } from "react";
import { I18nProviderClient } from "../locales/client";
import {
  onRenderCallback,
  recordHydrationDuration,
} from "test-utils/browser-metrics";

interface Props {
  children: React.ReactNode;
  locale: string;
}

export default function AppProviders({ children, locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  return (
    <Profiler id="AppRoot" onRender={onRenderCallback}>
      <I18nProviderClient locale={locale}>
        {children}
      </I18nProviderClient>
    </Profiler>
  );
}
