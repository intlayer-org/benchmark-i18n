import { createSignal } from "solid-js";
import { flatten, translator, resolveTemplate } from "@solid-primitives/i18n";

const dicts = {
  en: flatten({ header: { home: "Home" } }),
};

const [locale] = createSignal<"en">("en");
const t = translator(() => dicts[locale()], resolveTemplate);

export default function EmptyComponent() {
  const value = t("header.home" as never);
  void value;
  return null;
}
