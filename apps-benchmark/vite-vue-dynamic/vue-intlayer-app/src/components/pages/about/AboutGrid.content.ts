import { t, type Dictionary } from "intlayer";

const aboutGridContent: Dictionary = {
  key: "about-grid",
  content: {
    why: {
      title: t({
        en: 'Why This Exists',
        fr: 'Pourquoi cela existe',
        es: 'Por qué existe esto',
        de: 'Warum dies existiert',
        it: 'Perché questo esiste',
        pt: 'Por que Isso Existe',
        zh: '为什么存在这个项目',
        ja: 'このプロジェクトの目的',
        ko: '이 프로젝트의 존재 이유',
        ru: 'Почему это существует',
      }),
      description: t({
        en: 'Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.',
        fr: "Le choix d'une bibliothèque i18n est une décision architecturale aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment affecte-t-elle le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou ne fait-il que déplacer le coût ? Ce benchmark répond à ces questions avec des données réelles.",
        es: 'Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Ayuda realmente la carga diferida o solo traslada el coste? Este benchmark responde a esas preguntas con datos reales.',
        de: 'Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.',
        it: 'La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull\'ergonomia delle API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.',
        pt: 'A escolha de uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.',
        zh: '选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 的易用性上，但很少有比较衡量性能成本：库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。',
        ja: 'i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を追加するか？数千の翻訳キーがロードされたときにレンダリングにどのように影響するか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでこれらの疑問に答えます。',
        ko: 'i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미칩니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가할 뿐입니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.',
        ru: 'Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточено на эргономике API, но немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.',
      }),
    },
    methodology: {
      title: t({
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
      description: t({
        en: 'The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use performance profiling to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.',
        fr: 'La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les mesures de chargement et utilisons le profilage des performances pour capturer les temps de rendu lors des changements de langue. Tous les tests sont exécutés en CI sur un matériel cohérent pour garantir des résultats reproductibles.',
        es: 'La misma aplicación de 10 páginas se crea una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos perfiles de rendimiento para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.',
        de: 'Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden Performance-Profiling, um die Renderzeiten bei Gebietsumschaltungen zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.',
        it: 'La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiemy audit Lighthouse per le metriche di caricamento e utilizziamo il profiling delle prestazioni per acquisire i tempi di rendering durante i cambi di locale. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.',
        pt: 'O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o perfil de desempenho para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.',
        zh: '同一个包含 10 个页面的应用程序针对每个库构建一次。我们测量生产捆绑包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用性能分析来捕获语言切换期间的渲染时间。所有测试都在具有一致硬件的 CI 中运行，以确保结果可复现。',
        ja: '同じ10ページのアプリがライブラリごとに1回構築されます。プロダクションバンドルを測定し（rollup-plugin-visualizer経由）、ロード指標のLighthouse監査を実行し、パフォーマンスプロファイリングを使用してロケール切り替え中のレンダリング時間を取得します。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェア上のCIで実行されます。',
        ko: '동일한 10페이지 분량의 앱이 라이브러리당 한 번씩 빌드됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer를 통해), 로딩 지표에 대한 Lighthouse 감사를 실행하고, 성능 프로파일링을 사용하여 로캘 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.',
        ru: 'Одно и то же 10-страничное приложение создается по одному разу для каждой библиотеки. Мы измеряем продакшн-бандл (с помощью rollup-plugin-visualizer), проводим аудит Lighthouse для получения метрик загрузки и используем профилирование производительности для фиксации времени рендеринга при переключении языков. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.',
      }),
    },
  },
};

export default aboutGridContent;
