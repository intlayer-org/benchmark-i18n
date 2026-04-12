import { type Dictionary, t } from 'intlayer';

const themeToggleContent = {
  key: "theme-toggle",
  content: {
    themeModeAutoSystemClick: t({
      en: "Theme mode: auto (system). Click to switch to light mode.",
      fr: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
      es: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
      de: "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
      it: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
      pt: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
      zh: "主题模式：自动（系统）。点击切换到浅色模式。",
      ja: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
      ko: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
      ru: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
    }),

    themeModeLightClick: t({
      en: "Theme mode: light. Click to switch to dark mode.",
      fr: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
      es: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
      de: "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
      it: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
      pt: "Modo de tema: claro. Clique para mudar para o modo escuro.",
      zh: "主题模式：浅色。点击切换到深色模式。",
      ja: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
      ko: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
      ru: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
    }),

    themeModeDarkClick: t({
      en: "Theme mode: dark. Click to switch to auto (system) mode.",
      fr: "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
      es: "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
      de: "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
      it: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
      pt: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
      zh: "主题模式：深色。点击切换到自动（系统）模式。",
      ja: "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
      ko: "테마 모드: 다크. 자동(시스템) 모드로 전환하려면 클릭하세요.",
      ru: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
    }),

    themeAuto: t({
      en: "Theme: Auto",
      fr: "Thème : Auto",
      es: "Tema: Auto",
      de: "Design: Auto",
      it: "Tema: Auto",
      pt: "Tema: Auto",
      zh: "主题：自动",
      ja: "テーマ：自動",
      ko: "테마: 자동",
      ru: "Тема: Авто",
    }),

    themeDark: t({
      en: "Theme: Dark",
      fr: "Thème : Sombre",
      es: "Tema: Oscuro",
      de: "Design: Dunkel",
      it: "Tema: Scuro",
      pt: "Tema: Escuro",
      zh: "主题：深色",
      ja: "テーマ：ダーク",
      ko: "테마: 다크",
      ru: "Тема: Темная",
    }),

    themeLight: t({
      en: "Theme: Light",
      fr: "Thème : Clair",
      es: "Tema: Claro",
      de: "Design: Hell",
      it: "Tema: Chiaro",
      pt: "Tema: Claro",
      zh: "主题：浅色",
      ja: "テーマ：ライト",
      ko: "테마: 라이트",
      ru: "Тема: Светлая",
    }),
  },
} satisfies Dictionary;

export default themeToggleContent;
