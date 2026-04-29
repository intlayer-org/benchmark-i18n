import { type Dictionary, t } from 'intlayer';

const aboutGridContent = {
  key: 'about-grid',
  content: {
    whyThisExists: t({
      en: 'Why This Exists',
      fr: 'Pourquoi cela existe',
      es: 'Por qué existe esto',
      de: 'Warum dies existiert',
      it: 'Perché esiste questo',
      pt: 'Por que isso existe',
      zh: '为什么存在这个',
      ja: 'なぜこれが存在するのか',
      ko: '이것이 존재하는 이유',
      ru: 'Зачем это нужно',
    }),

    choosingAnI18nLibraryIs: t({
      en: 'Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.',
      fr: "Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.",
      es: 'Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al paquete? ¿Cómo afecta a la renderización cuando se cargan miles de claves de traducción? ¿La carga diferida ayuda realmente o simplemente traslada el coste? Este benchmark responde a esas preguntas con datos reales.',
      de: 'Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.',
      it: "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il lazy loading aiuta davvero o sposta semplicemente il costo? Questo benchmark risponde a queste domande con dati reali.",
      pt: 'Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.',
      zh: '选择 i18n 库是一个具有长期影响的架构决策。大多数比较都侧重于 API 的人体工程学，但很少有人衡量性能成本：库向捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？该基准测试用真实数据回答了这些问题。',
      ja: 'i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの人間工学に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重みを追加するのか？数千の翻訳キーがロードされたときにレンダリングにどのような影響を与えるのか？遅延ロードは実際に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでそれらの質問に答えます。',
      ko: 'i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 초점을 맞추고 있지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미칩니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가합니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답변합니다.',
      ru: 'Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют влияние на производительность: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли ленивая загрузка помогает или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.',
    }),

    methodology: t({
      en: 'Methodology',
      fr: 'Méthodologie',
      es: 'Metodología',
      de: 'Methodik',
      it: 'Metodologia',
      pt: 'Metodologia',
      zh: '方法论',
      ja: '方法論',
      ko: '방법론',
      ru: 'Методология',
    }),

    theSame10PageApp: t({
      en: 'The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.',
      fr: "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.",
      es: 'La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.',
      de: 'Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktionsbundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten bei Gebietschemata-Wechseln zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.',
      it: 'La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.',
      pt: 'O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar os tempos de renderização durante as trocas de idioma. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.',
      zh: '相同的 10 页应用程序每个库构建一次。我们衡量生产捆绑包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核加载指标，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致的硬件上的 CI 中运行，以确保结果可复现。',
      ja: '同じ10ページのアプリが、ライブラリごとに1回構築されます。本番バンドルを（rollup-plugin-visualizer経由で）測定し、ロードメトリクスのためにLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェア上のCIで実行されます。',
      ko: '동일한 10페이지 앱이 라이브러리당 한 번씩 빌드됩니다. (rollup-plugin-visualizer를 통해) 프로덕션 번들을 측정하고 로딩 메트릭에 대한 Lighthouse 감사를 실행하며 React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 재현 가능한 결과를 보장하기 위해 모든 테스트는 일관된 하드웨어의 CI에서 실행됩니다.',
      ru: 'Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшен-бандл (с помощью rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при переключении локалей. Все тесты запускаются в CI на одинаковом оборудовании для обеспечения воспроизводимости результатов.',
    }),
  },
} satisfies Dictionary;

export default aboutGridContent;
