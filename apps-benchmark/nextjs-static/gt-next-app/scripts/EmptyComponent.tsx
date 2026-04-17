import React from "react";
import { GTProvider, useTranslations } from "gt-next";

const TestComponent = () => {
  const t = useTranslations();
  void t;
  return null;
};

export default function EmptyComponent() {
  return (
    <GTProvider>
      <TestComponent />
    </GTProvider>
  );
}
