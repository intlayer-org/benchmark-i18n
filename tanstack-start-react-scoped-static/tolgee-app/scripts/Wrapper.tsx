import React from "react";
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "../src/i18n/tolgee";
import { getMessages } from "../src/i18n/getMessages";

const messages = getMessages("en");

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <TolgeeProvider
      tolgee={tolgee}
      ssr={{
        language: "en",
        staticData: { en: messages },
      }}
    >
      {children}
    </TolgeeProvider>
  );
}
