import { ParentProps } from 'solid-js';
import { FormatSimple, Tolgee } from '@tolgee/web';

const tolgee = Tolgee()
  .use(FormatSimple())
  .init({
    language: 'en',
    staticData: {
      en: { header: { home: 'Home' } },
    },
  });

tolgee.run();

export default function LibWrapper(props: ParentProps) {
  void tolgee.t('header.home');
  return <>{props.children}</>;
}
