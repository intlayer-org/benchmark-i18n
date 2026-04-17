import React from "react";
import { TolgeeProvider, useTolgee } from "@tolgee/react";
import { Tolgee, FormatSimple } from "@tolgee/web";
import { useTranslate } from "../src/i18n/config";

const tolgeeInstance = Tolgee().use(FormatSimple()).init({ language: "en" });

const TestComponent = () => {
  const tolgee = useTolgee();
  const { t } = useTranslate();

  void t;
  void tolgee.getLanguage();

  return null;
};

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TolgeeProvider tolgee={tolgeeInstance} options={{ useSuspense: false }}>
      <TestComponent />
      {children}
    </TolgeeProvider>
  );
}
