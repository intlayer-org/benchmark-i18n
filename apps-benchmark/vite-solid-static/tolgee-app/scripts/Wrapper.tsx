import { ParentProps } from 'solid-js';
import { tolgee } from '../src/i18n';

export default function Wrapper(props: ParentProps) {
  void tolgee;
  return <>{props.children}</>;
}
