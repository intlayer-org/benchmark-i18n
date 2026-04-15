import React from "react";
import { useIntl } from "react-intl";

export default function EmptyComponent() {
  const intl = useIntl();

  void intl.locale;

  return <></>;
}
