import { useParams } from '@solidjs/router';
import { createEffect, onMount, type JSX } from 'solid-js';
import { setTolgeeLanguage, tolgee } from '../i18n';
import {
  recordHydrationDuration,
  recordRenderTime,
} from 'test-utils/browser-metrics';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props: { children?: JSX.Element }) {
  const params = useParams<{ locale: string }>();
  const start = typeof performance !== 'undefined' ? performance.now() : 0;

  onMount(() => {
    recordHydrationDuration();
    recordRenderTime('AppRoot', start);
  });

  createEffect(() => {
    const loc = params.locale ?? 'en';
    void tolgee.changeLanguage(loc).then(() => {
      setTolgeeLanguage(loc);
      // Solid patches the DOM synchronously on the signal write, so html[lang]
      // (the reactivity test's end marker) follows the translated text.
      document.documentElement.lang = loc;
    });
  });

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
