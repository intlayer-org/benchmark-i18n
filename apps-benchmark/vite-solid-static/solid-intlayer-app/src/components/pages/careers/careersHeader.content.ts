import { type Dictionary, t } from 'intlayer';

const careersHeaderContent = {
  key: 'careers-header',
  content: {
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

    joinOurMissionToImprove: t({
      en: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
      fr: "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe en télétravail qui valorise l'impact, la transparence et l'apprentissage continu.",
      es: 'Únase a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo que prioriza el trabajo remoto que valora el impacto, la transparencia y el aprendizaje continuo.',
      de: 'Schließen Sie sich unserer Mission an, das Ökosystem der Internationalisierung zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.',
      it: "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che valorizza l'impatto, la trasparenza e l'apprendimento continuo.",
      pt: 'Junte-se à nossa missão para melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo.',
      zh: '加入我们的使命，改善国际化生态系统。我们是一支远程优先的团队，重视影响力、透明度和持续学习。',
      ja: '国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、インパクト、透明性、そして継続的な学習を大切にするリモートファーストのチームです。',
      ko: '국제화 생태계를 개선하려는 우리의 사명에 동참하십시오. 우리는 영향력, 투명성 및 지속적인 학습을 가치 있게 여기는 원격 우선 팀입니다.',
      ru: 'Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — команда, ориентированная на удаленную работу, которая ценит вклад, прозрачность и непрерывное обучение.',
    }),
  },
} satisfies Dictionary;

export default careersHeaderContent;
