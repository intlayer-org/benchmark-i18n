import { type Dictionary, t } from 'intlayer';

const settingsHeaderContent = {
  key: 'settings-header',
  content: {
    manageYourAccountPreferencesAnd: t({
      en: "Manage your account preferences and configuration.",
      fr: "Gérez vos préférences de compte et votre configuration.",
      es: "Gestione sus preferencias de cuenta y configuración.",
      de: "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.",
      it: "Gestisci le preferenze del tuo account e la configurazione.",
      pt: "Gerencie as preferências e configurações de sua conta.",
      zh: "管理您的账户偏好和配置。",
      ja: "アカウント設定と構成を管理します。",
      ko: "계정 기본 설정 및 구성을 관리하십시오.",
      ru: "Управляйте настройками и конфигурацией своего аккаунта.",
    }),

    settings: t({
      en: "Settings",
      fr: "Paramètres",
      es: "Ajustes",
      de: "Einstellungen",
      it: "Impostazioni",
      pt: "Configurações",
      zh: "设置",
      ja: "設定",
      ko: "설정",
      ru: "Настройки",
    })
  },
} satisfies Dictionary;

export default settingsHeaderContent;
