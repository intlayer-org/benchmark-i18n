import { type Dictionary, t } from 'intlayer';

const notFoundContent = {
  key: 'not-found',
  content: {
    returnToHome: t({
      en: 'Return to Home',
      fr: "Retour à l'accueil",
      es: 'Volver al inicio',
      de: 'Zurück zur Startseite',
      it: 'Torna alla Home',
      pt: 'Voltar para o Início',
      zh: '回到首页',
      ja: 'ホームに戻る',
      ko: '홈으로 돌아가기',
      ru: 'Вернуться на главную',
    }),
    oopsPageNotFound: t({
      en: 'Oops! Page not found',
      fr: 'Oups ! Page non trouvée',
      es: '¡Ups! Página no encontrada',
      de: 'Hoppla! Seite nicht gefunden',
      it: 'Ops! Pagina non trovata',
      pt: 'Ops! Página não encontrada',
      zh: '糟糕！页面未找到',
      ja: 'おっと！ページが見つかりません',
      ko: '이런! 페이지를 찾을 수 없습니다',
      ru: 'Упс! Страница не найдена',
    }),
  },
} satisfies Dictionary;

export default notFoundContent;
