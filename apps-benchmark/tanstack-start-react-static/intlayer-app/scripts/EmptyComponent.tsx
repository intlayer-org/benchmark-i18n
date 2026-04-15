import React from "react";
import { useIntlayer, useLocale } from "react-intlayer";

export default function EmptyComponent() {
  const content = useIntlayer("route" as never);
  const { locale } = useLocale();

  void content;
  void locale;

  return <></>;
}
