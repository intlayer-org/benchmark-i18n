"use client";

import React, { useEffect, useState } from "react";
import I18nProvider from "next-translate/I18nProvider";
import i18nConfig from "../i18n.mjs";
import AppProviders from "../components/AppProviders";

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "en";
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const trans = await i18nConfig.loadLocaleFrom?.(locale, "common");
        setTranslations(trans ?? {});
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load translations:", error);
        setIsLoaded(true);
      }
    };
    loadTranslations();
  }, [locale]);

  if (!isLoaded) {
    return null;
  }

  return (
    <I18nProvider lang={locale} namespaces={{ common: translations }}>
      <AppProviders locale={locale}>{children}</AppProviders>
    </I18nProvider>
  );
}
