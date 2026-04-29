import { type Dictionary, t } from 'intlayer';

const notFoundContent = {
  key: 'not-found',
  content: {
    oopsPageNotFound: t({
      en: 'Oops! Page not found',
      fr: 'Oups ! Page non trouvée',
      es: '¡Vaya! Página no encontrada',
      de: 'Hoppla! Seite nicht gefunden',
      it: 'Ops! Pagina non trovata',
      pt: 'Ops! Página não encontrada',
      zh: '糟糕！找不到页面',
      ja: 'おっと！ページが見つかりません',
      ko: '이런! 페이지를 찾을 수 없습니다',
      ru: 'Ой! Страница не найдена',
    }),

    returnToHome: t({
      en: 'Return to Home',
      fr: "Retour à l'accueil",
      es: 'Volver al inicio',
      de: 'Zurück zur Startseite',
      it: 'Torna alla Home',
      pt: 'Voltar ao início',
      zh: '返回首页',
      ja: 'ホームに戻る',
      ko: '홈으로 돌아가기',
      ru: 'Вернуться на главную',
    }),
  },
} satisfies Dictionary;

export default notFoundContent;
