import { ParentProps } from "solid-js";
import { t } from "../src/i18n";

export default function Wrapper(props: ParentProps) {
  void t;
  return <>{props.children}</>;
}
