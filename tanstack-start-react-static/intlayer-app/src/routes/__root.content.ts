import { type Dictionary, t } from 'intlayer';

const routeContent = {
  key: 'route',
  content: {
    oopsPageNotFound: t({
      en: "Oops! Page not found",
      fr: "Oups ! Page non trouvée",
      es: "¡Vaya! Página no encontrada",
      de: "Hoppla! Seite nicht gefunden",
      it: "Ops! Pagina non trovata",
      pt: "Ops! Página não encontrada",
      zh: "糟糕！找不到页面",
      ja: "おっと！ページが見つかりません",
      ko: "웁스! 페이지를 찾을 수 없습니다",
      ru: "Упс! Страница не найдена",
    }),

    returnToHome: t({
      en: "Return to Home",
      fr: "Retour à l'Accueil",
      es: "Volver al Inicio",
      de: "Zurück zur Startseite",
      it: "Torna alla Home",
      pt: "Voltar para o Início",
      zh: "返回首页",
      ja: "ホームに戻る",
      ko: "홈으로 돌아가기",
      ru: "Вернуться на главную",
    }),

    couldNotMeasureHydrationDuration: t({
      en: "Could not measure hydration duration:",
      fr: "Impossible de mesurer la durée d'hydratation :",
      es: "No se pudo medir la duración de la hidratación:",
      de: "Hydratisierungsdauer konnte nicht gemessen werden:",
      it: "Impossibile misurare la durata dell'idratazione:",
      pt: "Não foi possível medir a duración da hidratação:",
      zh: "无法测量注水时长：",
      ja: "ハイドレーション時間を測定できませんでした：",
      ko: "하이드레이션 기간을 측정할 수 없습니다:",
      ru: "Не удалось измерить продолжительность гидратации:",
    })
  },
} satisfies Dictionary;

export default routeContent;
