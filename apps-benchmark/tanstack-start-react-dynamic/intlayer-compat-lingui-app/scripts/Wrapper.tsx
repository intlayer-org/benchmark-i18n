import React, { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { initLingui } from "../src/i18n/lingui";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const i18n = useMemo(() => initLingui("en"), []);

  return (
    <I18nProvider i18n={i18n}>
      {children}
    </I18nProvider>
  );
}
