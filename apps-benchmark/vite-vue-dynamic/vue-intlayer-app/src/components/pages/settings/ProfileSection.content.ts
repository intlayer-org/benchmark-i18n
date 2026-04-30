import { t, type Dictionary } from "intlayer";

const profileSectionContent: Dictionary = {
  key: "profile-section",
  content: {
    title: t({
      en: 'Profile',
      fr: 'Profil',
      es: 'Perfil',
      de: 'Profil',
      it: 'Profilo',
      pt: 'Perfil',
      zh: '个人资料',
      ja: 'プロフィール',
      ko: '프로필',
      ru: 'Профиль',
    }),
    displayNameLabel: t({
      en: 'Display Name',
      fr: 'Nom affiché',
      es: 'Nombre a mostrar',
      de: 'Anzeigename',
      it: 'Nome visualizzato',
      pt: 'Nome de exibição',
      zh: '显示名称',
      ja: '表示名',
      ko: '표시 이름',
      ru: 'Отображаемое имя',
    }),
    emailLabel: t({
      en: 'Email',
      fr: 'E-mail',
      es: 'Correo electrónico',
      de: 'E-Mail',
      it: 'E-mail',
      pt: 'E-mail',
      zh: '电子邮件',
      ja: 'メールアドレス',
      ko: '이메일',
      ru: 'Электронная почта',
    }),
  },
};

export default profileSectionContent;
