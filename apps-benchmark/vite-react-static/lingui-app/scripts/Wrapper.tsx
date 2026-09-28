import React, { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { initLingui, getMessages } from "../src/i18n/lingui";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const messages = useMemo(() => getMessages("en"), []);
  const i18n = useMemo(() => initLingui("en", messages), [messages]);

  return (
    <I18nProvider i18n={i18n}>
      {children}
    </I18nProvider>
  );
}
