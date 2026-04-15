import React from "react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const i18n = i18next.createInstance();
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: { en: { translation: {} } },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    keySeparator: false,
    nsSeparator: false,
  });
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
