import { type Dictionary, t } from 'intlayer';

const careersHeaderContent = {
  key: 'careers-header',
  content: {
    joinOurMissionToImprove: t({
      en: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
      fr: "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe en télétravail qui valorise l'impact, la transparence et l'apprentissage continu.",
      es: 'Únase a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo remoto que valora el impacto, la transparencia y el aprendizaje continuo.',
      de: 'Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.',
      it: 'Unisciti alla nostra missione per migliorare l\'ecosistema dell\'internazionalizzazione. Siamo un team remote-first che valorizza l\'impatto, la trasparenza e l\'apprendimento continuo.',
      pt: 'Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo.',
      zh: '加入我们改进国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。',
      ja: '国際化エコシステムを改善するという私たちのミッションに参加してください。私たちは、インパクト、透明性、継続的な学習を重視するリモートファーストのチームです。',
      ko: '국제화 에코시스템을 개선하려는 우리의 미션에 동참하세요. 우리는 영향력, 투명성 및 지속적인 학습을 가치 있게 여기는 원격 우선 팀입니다.',
      ru: 'Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — команда, работающая удаленно, которая ценит результат, прозрачность и непрерывное обучение.',
    }),

    careers: t({
      en: 'Careers',
      fr: 'Carrières',
      es: 'Carreras',
      de: 'Karriere',
      it: 'Carriere',
      pt: 'Carreiras',
      zh: '职业生涯',
      ja: '採用情報',
      ko: '채용',
      ru: 'Вакансии',
    }),
  },
} satisfies Dictionary;

export default careersHeaderContent;
