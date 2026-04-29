import { type Dictionary, t } from 'intlayer';

const settingsHeaderContent = {
  key: 'settings-header',
  content: {
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

    manageYourAccountPreferencesAnd: t({
      en: 'Manage your account preferences and configuration.',
      fr: 'Gérez vos préférences de compte et votre configuration.',
      es: 'Gestione las preferencias y la configuración de su cuenta.',
      de: 'Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen.',
      it: 'Gestisci le preferenze e la configurazione del tuo account.',
      pt: 'Gerencie suas preferências de conta e configuração.',
      zh: '管理您的帐户首选项和配置。',
      ja: 'アカウント設定と構成を管理します。',
      ko: '계정 환경 설정 및 구성을 관리하세요.',
      ru: 'Управляйте настройками и конфигурацией вашего аккаунта.',
    }),
  },
} satisfies Dictionary;

export default settingsHeaderContent;
