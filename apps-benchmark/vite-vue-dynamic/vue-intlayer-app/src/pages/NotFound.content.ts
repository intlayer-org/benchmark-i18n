import { t, type Dictionary } from "intlayer";

const notFoundContent: Dictionary = {
  key: "not-found",
  content: {
    title: t({
      en: '404',
      fr: '404',
      es: '404',
      de: '404',
      it: '404',
      pt: '404',
      zh: '404',
      ja: '404',
      ko: '404',
      ru: '404',
    }),
    description: t({
      en: 'Oops! Page not found',
      fr: 'Oups ! Page introuvable',
      es: '¡Ups! Página no encontrada',
      de: 'Hoppla! Seite nicht gefunden',
      it: 'Oops! Pagina non trovata',
      pt: 'Opa! Página não encontrada',
      zh: '糟糕！页面未找到',
      ja: 'おっと！ページが見つかりません',
      ko: '오 이런! 페이지를 찾을 수 없습니다',
      ru: 'Ой! Страница не найдена',
    }),
    returnHome: t({
      en: 'Return to Home',
      fr: "Retour à l'accueil",
      es: 'Volver al inicio',
      de: 'Zurück zur Startseite',
      it: 'Torna alla home',
      pt: 'Voltar ao Início',
      zh: '返回首页',
      ja: 'ホームに戻る',
      ko: '홈으로 돌아가기',
      ru: 'Вернуться на главную',
    }),
  },
};

export default notFoundContent;
