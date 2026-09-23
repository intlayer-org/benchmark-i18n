"use client";

import { useMemo } from "react";
import type { TolgeeStaticData } from "@tolgee/react";
import { tolgee } from "@/tolgee/client";
import { mergeMessages, type Messages } from "@/tolgee/namespaces";

/**
 * Hands a page's namespaces to tolgee before the page's components render.
 *
 * It wraps the page rather than sitting beside it, and works during render
 * rather than in an effect, so the namespaces are also there for the server
 * render — the same way TolgeeProvider applies its `ssr.staticData`.
 */
export default function TolgeePageHydrator({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Messages;
  children: React.ReactNode;
}) {
  useMemo(() => {
    tolgee.setEmitterActive(false);
    tolgee.addStaticData({
      [locale]: mergeMessages(locale, messages),
    } as TolgeeStaticData);
    tolgee.setEmitterActive(true);
  }, [locale, messages]);

  return children;
}
