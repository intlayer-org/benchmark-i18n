"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "next/navigation";
import { I18nextProvider, useTranslation } from "react-i18next";
import {
  recordHydrationDuration,
  recordRenderTime,
} from "test-utils/browser-metrics";
import i18n from "../i18n/i18n";

// `react-i18next` is aliased to the compat adapter, whose `I18nextProvider`
// takes no locale. The `i18n` handed back by `useTranslation()` is bound to
// the provider's `setLocale`, so `changeLanguage()` on it is what drives the
// tree — the module-level `i18n.changeLanguage()` only updates the standalone
// instance, which nothing renders from.
function LocaleSync({ locale }: { locale: string }) {
  const { i18n: providerI18n } = useTranslation();

  useEffect(() => {
    if (providerI18n.language !== locale) {
      providerI18n.changeLanguage(locale);
    }
  }, [providerI18n, locale]);

  return null;
}

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const locale = (params.locale as string) ?? "en";

  const [renderStart] = useState(() =>
    typeof performance !== "undefined" ? performance.now() : 0,
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
    <I18nextProvider i18n={i18n}>
      <LocaleSync locale={locale} />
      {children}
    </I18nextProvider>
  );
}
