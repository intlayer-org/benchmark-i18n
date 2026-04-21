"use client";

import type { Messages } from "@lingui/core";
import { setupI18n } from "@lingui/core";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { I18nProvider, useLingui } from "@lingui/react";

/**
 * Page routes load extra catalogs on the server; this component exposes them to client children
 * without calling `i18n.load` on the layout instance (that updates `I18nProvider` during render
 * or after paint and can show raw message ids / trigger React warnings).
 *
 * A nested `I18nProvider` holds a dedicated instance with `{ ...shell, ...page }` merged synchronously
 * in `useMemo` before children render, so `Trans` always resolves keys on SSR and the client.
 */
export default function LinguiPageCatalog({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Messages;
  children: ReactNode;
}) {
  const { i18n } = useLingui();

  const pageI18n = useMemo(() => {
    if (Object.keys(messages).length === 0) {
      return null;
    }
    const shell = i18n.messages;
    const merged: Messages = { ...shell, ...messages };
    const next = setupI18n();
    next.load(locale, merged);
    next.activate(locale);
    return next;
  }, [i18n, locale, messages]);

  if (!pageI18n) {
    return <>{children}</>;
  }

  return <I18nProvider i18n={pageI18n}>{children}</I18nProvider>;
}
