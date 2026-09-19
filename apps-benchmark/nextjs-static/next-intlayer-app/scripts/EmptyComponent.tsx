import React from "react";
import { IntlayerProvider, useIntlayer } from "next-intlayer";

const TestComponent = () => {
  const content = useIntlayer("header" as never);
  void content;
  return null;
};

export default function EmptyComponent() {
  return (
    <IntlayerProvider locale="en">
      <TestComponent />
    </IntlayerProvider>
  );
}
