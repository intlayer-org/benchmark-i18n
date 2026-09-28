import React from "react";
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "../src/i18n/tolgee";
import { messageModules } from "../src/i18n/getMessages";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <TolgeeProvider
      tolgee={tolgee}
      options={{ useSuspense: false }}
      ssr={{
        language: "en",
        staticData: messageModules,
      }}
    >
      {children}
    </TolgeeProvider>
  );
}
