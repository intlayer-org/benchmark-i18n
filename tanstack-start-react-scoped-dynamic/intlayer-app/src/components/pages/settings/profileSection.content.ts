import { type Dictionary, t } from 'intlayer';

const profileSectionContent = {
  key: 'profile-section',
  content: {
    displayName: t({
      en: "Display Name",
      fr: "Nom d'affichage",
      es: "Nombre de pantalla",
      de: "Anzeigename",
      it: "Nome visualizzato",
      pt: "Nome de exibição",
      zh: "显示名称",
      ja: "表示名",
      ko: "표시 이름",
      ru: "Отображаемое имя",
    }),

    profile: t({
      en: "Profile",
      fr: "Profil",
      es: "Perfil",
      de: "Profil",
      it: "Profilo",
      pt: "Perfil",
      zh: "个人资料",
      ja: "プロフィール",
      ko: "프로필",
      ru: "Профиль",
    }),

    email: t({
      en: "Email",
      fr: "Email",
      es: "Correo electrónico",
      de: "E-Mail",
      it: "Email",
      pt: "E-mail",
      zh: "电子邮件",
      ja: "メールアドレス",
      ko: "이메일",
      ru: "Email",
    })
  },
} satisfies Dictionary;

export default profileSectionContent;
