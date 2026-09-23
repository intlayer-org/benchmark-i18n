import React from "react";
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "../src/i18n/tolgee";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <TolgeeProvider tolgee={tolgee} options={{ useSuspense: false }}>
      {children}
    </TolgeeProvider>
  );
}
