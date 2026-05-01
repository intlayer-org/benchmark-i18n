import { ParentProps, createSignal } from "solid-js";
import { flatten, translator, resolveTemplate } from "@solid-primitives/i18n";

const dict = flatten({
  header: { home: "Home" },
});

const [locale] = createSignal("en");
const t = translator(() => dict, resolveTemplate);

export default function LibWrapper(props: ParentProps) {
  void t("header.home");
  return <>{props.children}</>;
}
