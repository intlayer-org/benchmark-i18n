import { t, type Dictionary } from "intlayer";

const apiAccessSectionContent: Dictionary = {
  key: "api-access-section",
  content: {
    title: t({
      en: 'API Access',
      fr: 'Accès API',
      es: 'Acceso API',
      de: 'API-Zugriff',
      it: 'Accesso API',
      pt: 'Acesso API',
      zh: 'API 访问',
      ja: 'API アクセス',
      ko: 'API 액세스',
      ru: 'Доступ к API',
    }),
    apiKeyLabel: t({
      en: 'API Key',
      fr: 'Clé API',
      es: 'Clave API',
      de: 'API-Schlüssel',
      it: 'Chiave API',
      pt: 'Chave API',
      zh: 'API 密钥',
      ja: 'API キー',
      ko: 'API 키',
      ru: 'Ключ API',
    }),
    copy: t({
      en: 'Copy',
      fr: 'Copier',
      es: 'Copiar',
      de: 'Kopieren',
      it: 'Copia',
      pt: 'Copiar',
      zh: '复制',
      ja: 'コピー',
      ko: '복사',
      ru: 'Копировать',
    }),
    description: t({
      en: 'Use this key to access the benchmarking API programmatically.',
      fr: "Utilisez cette clé pour appeler l'API de benchmark par programmation.",
      es: 'Utilice esta clave para acceder a la API de benchmarking de forma programada.',
      de: 'Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.',
      it: 'Usa questa chiave per accedere all\'API di benchmarking in modo programmatico.',
      pt: 'Use esta chave para acessar a API de benchmarking programaticamente.',
      zh: '使用此密钥以编程方式访问基准测试 API。',
      ja: 'このキーを使用して、プログラムでベンチマーク API にアクセスします。',
      ko: '이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.',
      ru: 'Используйте этот ключ для программного доступа к API бенчмаркинга.',
    }),
  },
};

export default apiAccessSectionContent;
