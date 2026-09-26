import i18next from "i18next";
import { createSignal } from "solid-js";

const i18n = i18next.createInstance();
i18n.init({
  lng: "en",
  fallbackLng: "en",
  resources: { en: { translation: {} } },
  interpolation: { escapeValue: false },
});

const [t] = createSignal(i18n.t.bind(i18n));

export default function EmptyComponent() {
  const value = t()("header.home");
  void value;
  return null;
}
