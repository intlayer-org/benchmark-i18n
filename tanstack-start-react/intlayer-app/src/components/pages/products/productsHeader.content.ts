import { type Dictionary, t } from 'intlayer';

const productsHeaderContent = {
  key: 'products-header',
  content: {
    toolsAndServicesToStreamline: t({
      en: "Tools and services to streamline your internationalization workflow.",
      fr: "Outils et services pour rationaliser votre flux de travail d'internationalisation.",
      es: "Herramientas y servicios para simplificar su flujo de trabajo de internacionalización.",
      de: "Tools und Dienste zur Optimierung Ihres Internationalisierungs-Worflows.",
      it: "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.",
      pt: "Ferramentas e serviços para otimizar seu fluxo de trabalho de internacionalización.",
      zh: "简化国际化工作流程的工具和服务。",
      ja: "国際化ワークフローを合理化するためのツールとサービス。",
      ko: "국제화 워크플로우를 합리화하기 위한 도구 및 서비스입니다.",
      ru: "Инструменты и услуги для оптимизации рабочего процесса интернационализации.",
    })
  },
} satisfies Dictionary;

export default productsHeaderContent;
