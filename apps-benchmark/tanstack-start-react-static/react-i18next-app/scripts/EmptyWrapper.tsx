import React from "react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider, useTranslation } from "react-i18next";

const i18n = i18next.createInstance();
await i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: { en: { translation: {} } },
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
  keySeparator: false,
  nsSeparator: false,
});

const TestComponent = () => {
  const { i18n, t } = useTranslation();

  void t;
  void i18n.language;

  return null;
};

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <TestComponent />
      {children}
    </I18nextProvider>
  );
}
