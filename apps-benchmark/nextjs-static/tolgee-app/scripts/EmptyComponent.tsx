"use client";

import React from "react";
import { TolgeeProvider, useTolgee, useTranslate } from "@tolgee/react";
import { Tolgee, FormatSimple } from "@tolgee/web";

const tolgeeInstance = Tolgee().use(FormatSimple()).init({ language: "en" });

const TestComponent = () => {
  const tolgee = useTolgee();
  const { t } = useTranslate();

  void t;
  void tolgee.getLanguage();

  return null;
};

export default function EmptyComponent() {
  return (
    <TolgeeProvider tolgee={tolgeeInstance} options={{ useSuspense: false }}>
      <TestComponent />
    </TolgeeProvider>
  );
}
