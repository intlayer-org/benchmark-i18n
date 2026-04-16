import React from "react";
import { I18nProviderClient } from "../locales/client";

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nProviderClient locale="en">
      {children}
    </I18nProviderClient>
  );
}
