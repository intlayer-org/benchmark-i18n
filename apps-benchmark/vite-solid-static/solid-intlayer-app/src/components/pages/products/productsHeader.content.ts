import { type Dictionary, t } from 'intlayer';

const productsHeaderContent = {
  key: 'products-header',
  content: {
    products: t({
      en: 'Products',
      fr: 'Produits',
      es: 'Productos',
      de: 'Produkte',
      it: 'Prodotti',
      pt: 'Produtos',
      zh: '产品',
      ja: '製品',
      ko: '제품',
      ru: 'Продукты',
    }),

    toolsAndServicesToStreamline: t({
      en: 'Tools and services to streamline your internationalization workflow.',
      fr: "Des outils et services pour rationaliser votre flux de travail d'internationalisation.",
      es: 'Herramientas y servicios para simplificar su flujo de trabajo de internacionalización.',
      de: 'Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.',
      it: 'Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.',
      pt: 'Ferramentas e serviços para simplificar seu fluxo de trabalho de internacionalização.',
      zh: '简化国际化工作流程的工具和服务。',
      ja: '国際化ワークフローを合理化するためのツールとサービス。',
      ko: '국제화 워크플로우를 간소화하는 도구 및 서비스.',
      ru: 'Инструменты и услуги для оптимизации рабочего процесса интернационализации.',
    }),
  },
} satisfies Dictionary;

export default productsHeaderContent;
