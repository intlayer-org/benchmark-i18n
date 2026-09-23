import { FormatSimple, Tolgee } from '@tolgee/web';

const tolgee = Tolgee()
  .use(FormatSimple())
  .init({
    language: 'en',
    staticData: { en: {} },
  });

tolgee.run();

export default function EmptyComponent() {
  const value = tolgee.t('header.home');
  void value;
  return null;
}
