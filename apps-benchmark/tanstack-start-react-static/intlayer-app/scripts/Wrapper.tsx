import React from "react";
import { IntlayerProvider } from "react-intlayer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <IntlayerProvider locale="en">
      {children}
    </IntlayerProvider>
  );
}
