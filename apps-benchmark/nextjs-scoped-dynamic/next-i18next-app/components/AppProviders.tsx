"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import {
  recordHydrationDuration,
  recordRenderTime,
} from "test-utils/browser-metrics";
import i18n from "../i18n/i18n";
import { locales, getLocaleName } from "../i18n/config";
import type { ResourceLanguage } from "i18next";

export default function AppProviders({
  children,
  initialResources,
}: {
  children: React.ReactNode;
  initialResources?: Record<string, ResourceLanguage>;
}) {
  const params = useParams();
  const locale = (params.locale as string) ?? "en";

  const [renderStart] = useState(() =>
    typeof performance !== "undefined" ? performance.now() : 0,
  );

  // Initialize resources and set language on first render to avoid FOUC
  useState(() => {
    if (initialResources) {
      Object.entries(initialResources).forEach(([ns, bundle]) => {
        if (!i18n.hasResourceBundle(locale, ns)) {
          i18n.addResourceBundle(locale, ns, bundle, true, true);
        }
      });
    }
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  });

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

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
