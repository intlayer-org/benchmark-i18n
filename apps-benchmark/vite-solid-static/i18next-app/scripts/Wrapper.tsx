import { ParentProps } from "solid-js";
import { i18next } from "../src/i18n";

export default function Wrapper(props: ParentProps) {
  void i18next;
  return <>{props.children}</>;
}
