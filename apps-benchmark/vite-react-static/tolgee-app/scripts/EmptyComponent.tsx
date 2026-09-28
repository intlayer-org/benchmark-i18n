import React from "react";
import { TolgeeProvider, useTolgee } from "@tolgee/react";
import { Tolgee, FormatSimple } from "@tolgee/web";
import { useTranslate } from "../src/i18n/config";

const tolgee = Tolgee().use(FormatSimple()).init({ language: "en" });

const TestComponent = () => {
  const tolgee = useTolgee();
  const { t } = useTranslate();

  void t;
  void tolgee.getLanguage();

  return null;
};

export default function EmptyComponent() {
  return (
    <TolgeeProvider tolgee={tolgee} options={{ useSuspense: false }}>
      <TestComponent />
    </TolgeeProvider>
  );
}
