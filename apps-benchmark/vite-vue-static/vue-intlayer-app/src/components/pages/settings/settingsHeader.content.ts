import { type Dictionary, t } from 'intlayer';

const settingsHeaderContent = {
  key: 'settings-header',
  content: {
    manageYourAccountPreferencesAnd: t({
      en: 'Manage your account preferences and configuration.',
      fr: 'Gérez vos préférences de compte et votre configuration.',
      es: 'Administre sus preferencias y configuración de cuenta.',
      de: 'Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.',
      it: 'Gestisci le preferenze e la configurazione del tuo account.',
      pt: 'Gerencie suas preferências e configurações de conta.',
      zh: '管理您的帐户偏好和配置。',
      ja: 'アカウントの設定と構成を管理します。',
      ko: '계정 기본 설정 및 구성을 관리합니다.',
      ru: 'Управление настройками и конфигурацией вашего аккаунта.',
    }),

    settings: t({
      en: 'Settings',
      fr: 'Paramètres',
      es: 'Ajustes',
      de: 'Einstellungen',
      it: 'Impostazioni',
      pt: 'Configurações',
      zh: '设置',
      ja: '設定',
      ko: '설정',
      ru: 'Настройки',
    }),
  },
} satisfies Dictionary;

export default settingsHeaderContent;
