"use client";

import { useLingui, I18nProvider } from "@lingui/react";
import { useMemo } from "react";
import { initLingui } from "../i18n/lingui";

export default function PageI18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: any;
  children: React.ReactNode;
}) {
  const { i18n: rootI18n } = useLingui();

  const mergedI18n = useMemo(() => {
    // Combine root messages (shared/route) with page-specific messages
    const allMessages = { ...rootI18n.messages, ...messages };
    return initLingui(locale, allMessages);
  }, [rootI18n.messages, messages, locale]);

  return <I18nProvider i18n={mergedI18n}>{children}</I18nProvider>;
}
