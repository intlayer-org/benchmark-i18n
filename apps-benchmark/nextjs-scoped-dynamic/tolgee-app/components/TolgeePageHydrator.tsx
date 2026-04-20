"use client";

import { useTolgee } from "@tolgee/react";
import { useLayoutEffect } from "react";

export default function TolgeePageHydrator({
  locale,
  messages,
}: {
  locale: string;
  messages: Record<string, any>;
}) {
  const tolgee = useTolgee();

  // useLayoutEffect to ensure messages are added before components render
  useLayoutEffect(() => {
    tolgee.addStaticData({ [locale]: messages });
  }, [tolgee, locale, messages]);

  return null;
}
