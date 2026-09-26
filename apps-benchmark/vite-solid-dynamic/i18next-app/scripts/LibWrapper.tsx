import { ParentProps } from "solid-js";
import i18next from "i18next";

i18next.init({
  fallbackLng: "en",
  resources: {
    en: { translation: { header: { home: "Home" } } },
  },
});

export default function LibWrapper(props: ParentProps) {
  void i18next;
  return <>{props.children}</>;
}
