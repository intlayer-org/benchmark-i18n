import React from "react";
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "../src/i18n/tolgee";
import en from "../src/i18n/locales/en.json";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <TolgeeProvider
      tolgee={tolgee}
      ssr={{
        language: "en",
        staticData: { en },
      }}
    >
      {children}
    </TolgeeProvider>
  );
}
