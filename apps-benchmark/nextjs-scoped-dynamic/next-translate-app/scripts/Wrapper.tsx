"use client";

import React, { useEffect, useState } from "react";
import type { I18nDictionary } from "next-translate";
import I18nProvider from "next-translate/I18nProvider";
import i18nConfig from "../i18n.mjs";
import AppProviders from "../components/AppProviders";

const MEASURE_NAMESPACES = [
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "home",
  "pricing",
  "products",
  "route",
  "settings",
  "shared",
  "team",
] as const;

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "en";
  const [namespaces, setNamespaces] = useState<Record<string, I18nDictionary>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const entries = await Promise.all(
          MEASURE_NAMESPACES.map(async (ns) => {
            const data = await i18nConfig.loadLocaleFrom?.(locale, ns);
            return [ns, data ?? {}] as const;
          }),
        );
        setNamespaces(Object.fromEntries(entries));
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
    <I18nProvider lang={locale} namespaces={namespaces}>
      <AppProviders locale={locale}>{children}</AppProviders>
    </I18nProvider>
  );
}
