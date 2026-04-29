import { type Dictionary, t } from 'intlayer';

const themeToggleContent = {
  key: 'theme-toggle',
  content: {
    themeModeAutoSystemClick: t({
      en: 'Theme mode: auto (system). Click to switch to light mode.',
      fr: 'Mode thématique : auto (système). Cliquez pour passer en mode clair.',
      es: 'Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.',
      de: 'Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.',
      it: 'Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.',
      pt: 'Modo de tema: automático (sistema). Clique para mudar para o modo claro.',
      zh: '主题模式：自动（系统）。点击切换到亮色模式。',
      ja: 'テーマモード：自動（システム）。クリックしてライトモードに切り替えます。',
      ko: '테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.',
      ru: 'Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.',
    }),

    themeAuto: t({
      en: 'Theme: Auto',
      fr: 'Thème : Auto',
      es: 'Tema: Automático',
      de: 'Design: Auto',
      it: 'Tema: Auto',
      pt: 'Tema: Automático',
      zh: '主题：自动',
      ja: 'テーマ：自動',
      ko: '테마: 자동',
      ru: 'Тема: Авто',
    }),

    themeDark: t({
      en: 'Theme: Dark',
      fr: 'Thème : Sombre',
      es: 'Tema: Oscuro',
      de: 'Design: Dunkel',
      it: 'Tema: Scuro',
      pt: 'Tema: Escuro',
      zh: '主题：深色',
      ja: 'テーマ：ダーク',
      ko: '테마: 다크',
      ru: 'Тема: Темная',
    }),

    themeLight: t({
      en: 'Theme: Light',
      fr: 'Thème : Clair',
      es: 'Tema: Claro',
      de: 'Design: Hell',
      it: 'Tema: Chiaro',
      pt: 'Tema: Claro',
      zh: '主题：亮色',
      ja: 'テーマ：ライト',
      ko: '테마: 라이트',
      ru: 'Тема: Светлая',
    }),
  },
} satisfies Dictionary;

export default themeToggleContent;
