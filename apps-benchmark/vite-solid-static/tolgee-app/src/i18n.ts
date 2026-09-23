import { FormatSimple, Tolgee } from '@tolgee/web';
import { createSignal } from 'solid-js';
import de from '../locales/de.json';
import en from '../locales/en.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import it from '../locales/it.json';
import ja from '../locales/ja.json';
import ko from '../locales/ko.json';
import pt from '../locales/pt.json';
import ru from '../locales/ru.json';
import zh from '../locales/zh.json';

export const tolgee = Tolgee().use(FormatSimple()).init({
  language: 'en',
  staticData: { en, fr, es, de, it, pt, zh, ja, ko, ru },
});

tolgee.run();

export const [tolgeeLanguage, setTolgeeLanguage] = createSignal(
  tolgee.getLanguage() || 'en'
);

tolgee.on('language', (lang) => {
  setTolgeeLanguage(lang.value);
});

export function t(...args: Parameters<typeof tolgee.t>): any {
  tolgeeLanguage();
  if (args.length === 0) {
    return (...inner: Parameters<typeof tolgee.t>) => {
      tolgeeLanguage();
      return tolgee.t(...inner);
    };
  }
  return tolgee.t(...args);
}

export const trans = t;
