import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"cacheInvalidation\":\"Cache invalidation:\",\"contextBasedArchitecturesCanCause\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"duringServerSideRenderingThe\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"flashOfUntranslatedContentFouc\":\"Flash of untranslated content (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"splittingTranslationsIntoPerRoute\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"waterfallRequestsDesc\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"theJsonMustBeParsed\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"theTradeOffsOfDynamic\":\"The trade-offs of dynamic loading\",\"thisTestAppProvidesA\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\",\"understandingTheImpact\":\"Understanding the Impact\",\"cacheInvalidationDesc\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\",\"flashOfUntranslatedContentFoucDesc\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"waterfallRequests\":\"Waterfall requests:\",\"whatThisBenchmarkMeasures\":\"What this benchmark measures\",\"whyASingleLargeJson\":\"Why a single large JSON can hurt performance\"},\"fr\":{\"cacheInvalidation\":\"Invalidation du cache :\",\"contextBasedArchitecturesCanCause\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"duringServerSideRenderingThe\":\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"flashOfUntranslatedContentFouc\":\"Flash de contenu non traduit (FOUC) :\",\"manyI18nLibrariesStoreTranslations\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"splittingTranslationsIntoPerRoute\":\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\",\"waterfallRequestsDesc\":\"Comme l'application doit d'abord se charger et déterminer la langue avant de récupérer le chunk correspondant, vous ajoutez des allers-retours réseau.\",\"theJsonMustBeParsed\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"theTradeOffsOfDynamic\":\"Les compromis du chargement dynamique\",\"thisTestAppProvidesA\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\",\"understandingTheImpact\":\"Comprendre l'impact\",\"cacheInvalidationDesc\":\"La mise à jour des traductions nécessite des stratégies d'invalidation du cache pour garantir que les utilisateurs reçoivent le nouveau contenu sans retélécharger les morceaux non modifiés.\",\"flashOfUntranslatedContentFoucDesc\":\"Les utilisateurs peuvent voir brièvement les clés de traduction ou la langue par défaut avant que le morceau ne soit chargé.\",\"waterfallRequests\":\"Requêtes en cascade :\",\"whatThisBenchmarkMeasures\":\"Ce que ce benchmark mesure\",\"whyASingleLargeJson\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\"},\"es\":{\"cacheInvalidation\":\"Invalidación de la caché:\",\"contextBasedArchitecturesCanCause\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\",\"duringServerSideRenderingThe\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\",\"flashOfUntranslatedContentFouc\":\"Parpadeo de contenido no traducido (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"splittingTranslationsIntoPerRoute\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\",\"waterfallRequestsDesc\":\"la aplicación debe cargar primero, determinar el idioma y luego obtener el fragmento correcto, lo que añade viajes de ida y vuelta a la red.\",\"theJsonMustBeParsed\":\"El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\",\"theTradeOffsOfDynamic\":\"Las compensaciones de la carga dinámica\",\"thisTestAppProvidesA\":\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\",\"understandingTheImpact\":\"Entendiendo el impacto\",\"cacheInvalidationDesc\":\"la actualización de las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.\",\"flashOfUntranslatedContentFoucDesc\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\",\"waterfallRequests\":\"Solicitudes en cascada:\",\"whatThisBenchmarkMeasures\":\"Qué mide este benchmark\",\"whyASingleLargeJson\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\"},\"de\":{\"cacheInvalidation\":\"Cache-Invalidierung:\",\"contextBasedArchitecturesCanCause\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"duringServerSideRenderingThe\":\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.\",\"flashOfUntranslatedContentFouc\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"splittingTranslationsIntoPerRoute\":\"Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"waterfallRequestsDesc\":\"Anfragekaskaden: Da die App zuerst geladen werden und das Gebietsschema bestimmen muss, bevor der entsprechende Chunk abgerufen werden kann, entstehen zusätzliche Netzwerk-Roundtrips.\",\"theJsonMustBeParsed\":\"Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.\",\"theTradeOffsOfDynamic\":\"Die Kompromisse beim dynamischen Laden\",\"thisTestAppProvidesA\":\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\",\"understandingTheImpact\":\"Die Auswirkungen verstehen\",\"cacheInvalidationDesc\":\"Cache-Invalidierung: Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Teilstücke erneut herunterzuladen.\",\"flashOfUntranslatedContentFoucDesc\":\"Flash of Untranslated Content (FOUC): Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Fallback-Sprache, bevor das Teilstück eintrifft.\",\"waterfallRequests\":\"Anfragekaskaden:\",\"whatThisBenchmarkMeasures\":\"Was dieser Benchmark misst\",\"whyASingleLargeJson\":\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\"},\"it\":{\"cacheInvalidation\":\"Invalidazione della cache:\",\"contextBasedArchitecturesCanCause\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"duringServerSideRenderingThe\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.\",\"flashOfUntranslatedContentFouc\":\"Flash di contenuti non tradotti (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\",\"splittingTranslationsIntoPerRoute\":\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"waterfallRequestsDesc\":\"l'app deve prima caricarsi, determinare la localizzazione e quindi recuperare il chunk giusto, aggiungendo round-trip di rete.\",\"theJsonMustBeParsed\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"theTradeOffsOfDynamic\":\"I compromessi del caricamento dinamico\",\"thisTestAppProvidesA\":\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\",\"understandingTheImpact\":\"Capire l'impatto\",\"cacheInvalidationDesc\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente chunk invariati.\",\"flashOfUntranslatedContentFoucDesc\":\"gli utenti possono visualizzare brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\",\"whatThisBenchmarkMeasures\":\"Cosa misura questo benchmark\",\"whyASingleLargeJson\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\"},\"pt\":{\"cacheInvalidation\":\"Invalidação de cache:\",\"contextBasedArchitecturesCanCause\":\"As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"duringServerSideRenderingThe\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\",\"flashOfUntranslatedContentFouc\":\"Flash de conteúdo não traduzido (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\",\"splittingTranslationsIntoPerRoute\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"waterfallRequestsDesc\":\"Como o aplicativo deve primeiro carregar e decidir a localidade antes de buscar o bloco apropriado, você adiciona viagens de ida e volta à rede.\",\"theJsonMustBeParsed\":\"O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.\",\"theTradeOffsOfDynamic\":\"As compensações do carregamento dinâmico\",\"thisTestAppProvidesA\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\",\"understandingTheImpact\":\"Entendendo o impacto\",\"cacheInvalidationDesc\":\"A atualização das traduções requer uma estratégia de invalidação de cache que garanta que os usuários recebam o novo conteúdo sem baixar novamente os blocos inalterados.\",\"flashOfUntranslatedContentFoucDesc\":\"Os usuários podem ver brevemente chaves de tradução ou o idioma de fallback antes que o bloco chegue.\",\"waterfallRequests\":\"Pedidos em cascata:\",\"whatThisBenchmarkMeasures\":\"O que este benchmark mede\",\"whyASingleLargeJson\":\"Por que um único JSON grande pode prejudicar o desempenho\"},\"zh\":{\"cacheInvalidation\":\"缓存失效：\",\"contextBasedArchitecturesCanCause\":\"基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。\",\"duringServerSideRenderingThe\":\"在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\",\"flashOfUntranslatedContentFouc\":\"未翻译内容闪烁 (FOUC)：\",\"manyI18nLibrariesStoreTranslations\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：\",\"splittingTranslationsIntoPerRoute\":\"将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：\",\"waterfallRequestsDesc\":\"由于应用必须先加载并确定语言环境，然后才能获取相应的块，因此您增加了网络往返时间。\",\"theJsonMustBeParsed\":\"JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。\",\"theTradeOffsOfDynamic\":\"动态加载的权衡\",\"thisTestAppProvidesA\":\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\",\"understandingTheImpact\":\"理解影响\",\"cacheInvalidationDesc\":\"更新翻译需要缓存失效策略，以确保用户收到最新内容，而无需重新下载未更改的块。\",\"flashOfUntranslatedContentFoucDesc\":\"用户在块到达之前可能会短暂看到翻译键或回退语言。\",\"waterfallRequests\":\"瀑布流请求：\",\"whatThisBenchmarkMeasures\":\"本基准测试测量什么\",\"whyASingleLargeJson\":\"为什么单个大型 JSON 会损害性能\"},\"ja\":{\"cacheInvalidation\":\"キャッシュの無効化:\",\"contextBasedArchitecturesCanCause\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。\",\"duringServerSideRenderingThe\":\"サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\",\"flashOfUntranslatedContentFouc\":\"未翻訳コンテンツのフラッシュ (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\",\"splittingTranslationsIntoPerRoute\":\"翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：\",\"waterfallRequestsDesc\":\"アプリはまずロードし、ロケールを決定してから、適切なチャンクをフェッチする必要があるため、ネットワークのラウンドトリップが追加されます。\",\"theJsonMustBeParsed\":\"JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。\",\"theTradeOffsOfDynamic\":\"動的読み込みのトレードオフ\",\"thisTestAppProvidesA\":\"このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\",\"understandingTheImpact\":\"影響を理解する\",\"cacheInvalidationDesc\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが新しいコンテンツを確実に取得できるようにするための、キャッシュ無効化戦略が必要です。\",\"flashOfUntranslatedContentFoucDesc\":\"チャンクが到着する前に、ユーザーに翻訳キーやフォールバック言語が一瞬表示されることがあります。\",\"waterfallRequests\":\"ウォーターフォールリクエスト:\",\"whatThisBenchmarkMeasures\":\"このベンチマークが測定するもの\",\"whyASingleLargeJson\":\"ひとつの巨大な JSON がパフォーマンスを低下させる理由\"},\"ko\":{\"cacheInvalidation\":\"캐시 무효화:\",\"contextBasedArchitecturesCanCause\":\"컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.\",\"duringServerSideRenderingThe\":\"서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.\",\"flashOfUntranslatedContentFouc\":\"번역되지 않은 콘텐츠의 깜빡임 (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:\",\"splittingTranslationsIntoPerRoute\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:\",\"waterfallRequestsDesc\":\"앱이 먼저 로드되고 로케일을 결정한 다음 적절한 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\",\"theJsonMustBeParsed\":\"JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.\",\"theTradeOffsOfDynamic\":\"동적 로딩의 트레이드오프\",\"thisTestAppProvidesA\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\",\"understandingTheImpact\":\"영향 이해하기\",\"cacheInvalidationDesc\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고도 최신 콘텐츠를 받을 수 있도록 하는 캐시 무효화 전략이 필요합니다.\",\"flashOfUntranslatedContentFoucDesc\":\"사용자는 청크가 도착하기 전에 번역 키나 폴백 언어를 잠시 볼 수 있습니다.\",\"waterfallRequests\":\"워터폴(Waterfall) 요청:\",\"whatThisBenchmarkMeasures\":\"이 벤치마크가 측정하는 것\",\"whyASingleLargeJson\":\"단일 대형 JSON이 성능을 저하시키는 이유\"},\"ru\":{\"cacheInvalidation\":\"Инвалидация кэша:\",\"contextBasedArchitecturesCanCause\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"duringServerSideRenderingThe\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"flashOfUntranslatedContentFouc\":\"Мерцание непереведенного контента (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"splittingTranslationsIntoPerRoute\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"waterfallRequestsDesc\":\"Поскольку приложение сначала должно загрузиться и определить локаль перед получением соответствующего чанка, вы добавляете сетевые задержки (round-trips).\",\"theJsonMustBeParsed\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"theTradeOffsOfDynamic\":\"Компромиссы динамической загрузки\",\"thisTestAppProvidesA\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\",\"understandingTheImpact\":\"Понимание влияния\",\"cacheInvalidationDesc\":\"Обновление переводов требует стратегии инвалидации кэша, гарантирующей получение пользователями нового контента без повторной загрузки неизмененных чанков.\",\"flashOfUntranslatedContentFoucDesc\":\"Пользователи могут кратковременно видеть ключи перевода или язык по умолчанию до загрузки чанка.\",\"waterfallRequests\":\"Каскадные запросы (Waterfall requests):\",\"whatThisBenchmarkMeasures\":\"Что измеряет этот бенчмарк\",\"whyASingleLargeJson\":\"Почему один большой JSON может снизить производительность\"}}}")
}, p = t(null), m = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, h = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, g = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, _ = (e, t) => {
	let n = h(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return h(n, t);
	}
}, ee = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${v(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, v = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ee).join("") : String(e ?? ""), y = "translation", b = "enumeration", x = "plural", te = "condition", S = "insertion", ne = "object", re = "array", ie = "markdown", C = "html", w = "gender", T = "select", E = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), D = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, O);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, D(t, e, {
		type: re,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ne,
			key: r
		};
		if (t.eager) {
			n[r] = O(e[r], D(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = O(e[r], D(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ae = (e) => E(b, e), oe = (e) => E(w, e), se = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, k = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = se(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, ce = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), le = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ue = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(le)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = ce.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, A = (e, t) => E(C, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ue(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return k(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => k(await e)), typeof n == "string") return k(n);
	try {
		return k(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), j = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, M = (e) => E(S, e, { fields: (() => {
	if (typeof e == "string") return j(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => j(await e)), typeof t == "string") return j(t);
	try {
		return j(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), de = (e) => E(x, e), fe = (e, t) => E(T, e, { variable: t }), pe = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, N = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : M(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : t;
		if (t?.type === "argument") return t.format ? M(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : M(`{{${t.name}}}`);
		if (t?.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = N(a);
				}
				return e.__intlayer_icu_var = t.name, ae(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = N(i);
			}
			return de(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = N(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? oe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : fe(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = N(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, ae(e);
		}
	}
	return e.map((e) => N([e]));
}, me = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return N(pe(e));
		} catch {
			return e;
		}
	}
}, he = (e) => O(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...me
	}]
}), ge = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, _e = (e, t) => e[ge(e, t) ?? "fallback"], P = {
	locales: [
		"en",
		"fr",
		"es",
		"de",
		"it",
		"pt",
		"zh",
		"ja",
		"ko",
		"ru"
	],
	requiredLocales: [
		"en",
		"fr",
		"es",
		"de",
		"it",
		"pt",
		"zh",
		"ja",
		"ko",
		"ru"
	],
	strictMode: "inclusive",
	defaultLocale: "en"
}, F = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ve = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ye = 50, be = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Set(), Se = (e) => {
	xe.has(e) || (xe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ce = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, we = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Se(e), Ce[e]);
};
function I(e, t, n) {
	let r = t ?? P?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = be.get(a);
	o || (o = /* @__PURE__ */ new Map(), be.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? we(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ye && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Te = (e, t, n) => e[I("PluralRules", n).select(t)] ?? e.other, Ee = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, De = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], L = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Oe = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? I("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? I("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : I("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return I("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, ke = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : i ? Oe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : Oe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = L(t, n);
	return r === void 0 ? e : String(r);
}), R = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ke(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[S], t, n);
	if (r.nodeType === "html") return z(r[C], t, n);
	if (r.nodeType === "plural") {
		let e = r[x];
		return z(Te(e, Number(R(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[b], i = De.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) De.includes(t) || (o[t] = n);
		let s = R(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = I("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? _e(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[T], i = R(t, typeof r.variable == "string" ? r.variable : "value");
		return z(Ee(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[w];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ae = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, je = (e) => (t, n = {}, r = "en") => Ae(typeof t == "string" ? e(t) : t, n, r), Me = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Me(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Ne = je(he), Pe = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Fe = class extends m {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, g(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = Pe(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = _(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = _(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = _(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: v(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? Ae(c.node, o, s) : Ne(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, Ie = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Le = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Ie(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Re = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, ze = (e = B) => {
	let { locales: t } = P;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Re) for (let t = 0; t < (F.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(F.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, V = !1, H, Be = () => typeof window > "u" ? ze(B) : (V ||= (H = ze(B), !0), H), Ve = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (V = !1, !Re && F.storage.cookies)) for (let n = 0; n < F.storage.cookies.length; n++) {
		let { name: r, attributes: i } = F.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Ie(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Le(r, e, i));
			} catch {}
		}
	}
}, He = /* @__PURE__ */ new Map(), Ue = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), We = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = He.get(t);
	i || (i = /* @__PURE__ */ new Map(), He.set(t, i));
	let a = i.get(r);
	return a || (a = Ue(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ge = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, We(t)), Ke = /* @__PURE__ */ new WeakMap(), qe = 0, Je = (e) => {
	if (!e) return "base";
	let t = Ke.get(e);
	if (t) return t;
	qe += 1;
	let n = `p${qe}`;
	return Ke.set(e, n), n;
}, Ye = 256, U = /* @__PURE__ */ new WeakMap(), Xe = (e) => typeof e == "object" && !!e, Ze = (e, t, n) => `${e}_${t}_${Je(n)}`, Qe = (e, t) => {
	if (!Xe(e)) return { hit: !1 };
	let n = U.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, W = (e, t, n) => {
	if (!Xe(e)) return n;
	let r = U.get(e);
	return r || (r = /* @__PURE__ */ new Map(), U.set(e, r)), r.size >= Ye && r.clear(), r.set(t, n), n;
}, $e = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = "\x1B[0m", et = "\x1B[34m", tt = "\x1B[31m", nt = "\x1B[32m", rt = "\x1B[38;5;3m", it = (e) => e, at = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = it(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, ot = (e, t) => (n, r) => at(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, st = (e, t = rt, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", tt), K("✓", nt), K("⏲", et);
var ct = () => ({}), lt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ut = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : lt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ut(e ? `${e}.${String(n)}` : String(n)) }), dt = /* @__PURE__ */ new Set(), ft = (e, t, n) => {
	let r = ct()[e];
	return r ? Pt(r, t, n) : (dt.has(e) || (ot({ log: ve })(typeof window > "u" ? `Dictionary ${st(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), dt.add(e)), ut(e));
}, pt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, mt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !pt(e) || !pt(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? mt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ht = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => mt(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, gt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[C] : e[ie];
}, _t = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? C : ie;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, vt = (e, t, n, r, i) => {
	let a = _t(e, $e(gt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, yt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, bt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ht(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: y,
				key: e
			}]
		});
	}
}, xt = J, St = (e) => J, Ct = J, wt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => vt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = $e(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Dt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Tt = [
	b,
	te,
	x,
	w,
	T
], Et = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Tt.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && yt(i) ? i(n) : i;
	};
}, Dt = (e, t) => typeof t == "function" && Tt.includes(e?.nodeType ?? "") ? (n) => Et(e, t, n) : t, Ot = J, kt = J, At = (e) => J, jt = J, Mt = (e, t = !0) => [
	bt(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	xt,
	St(e ?? P.defaultLocale),
	Ct,
	wt,
	At(e ?? P.defaultLocale),
	jt,
	Ot,
	kt
].filter((e) => e !== J), Nt = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), Pt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ze(r ?? P.defaultLocale, "", n), o = Qe(e, a);
	if (o.hit) return o.content;
	let s = n ?? Mt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return Nt(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? W(e, a, null) : Array.isArray(c) ? W(e, a, c.map(l)) : W(e, a, l(c));
}, Ft = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", It = /\{\{\s*(.*?)\s*\}\}/g, Lt = (e, t = {}) => {
	if (!Object.values(t).some(Ft)) return {
		isSimple: !0,
		parts: e.replace(It, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(It), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Rt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ge({
		value: t.children,
		children: t.children
	})
}, zt = J, Bt = (t, r) => {
	let i = Lt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => vt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Bt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Dt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ht = J, Ut = J, X = /* @__PURE__ */ new Map(), Wt = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Rt,
		bt(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		xt,
		St(e ?? P.defaultLocale),
		Ct,
		At(e ?? P.defaultLocale),
		jt,
		Ot,
		kt,
		zt,
		Vt,
		Ht,
		Ut
	].filter((e) => e !== J);
	return X.set(n, r), r;
}, Gt = (e, t) => Pt(e, t, Wt(typeof t == "object" && t ? t.locale : t)), Kt = Be, Z = (e, t) => Ve(e, {
	...B,
	isCookieEnabled: t
}), qt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Jt = (e, t = P?.locales, n = P?.defaultLocale) => {
	if (t?.includes(e)) return e;
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, Yt = t({
	get locale() {
		return Kt() ?? P?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Xt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = P ?? {}, [m, h] = c(() => e ?? Kt() ?? t ?? p), [g, _] = c(e);
	e !== g && (_(e), e && e !== m && h(e)), o(() => {
		qt();
	}, []);
	let ee = i((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), Z(e, d);
		}
	}, [
		m,
		f,
		d
	]), v = a ?? ee, y = Jt(m), b = s(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: l
	}), [
		y,
		v,
		n,
		l
	]);
	return u(Yt.Provider, {
		value: b,
		children: r
	});
}, Zt = ({ children: e, ...t }) => d(Xt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: Qt, locales: Q } = P ?? {}, $t = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Yt) ?? {};
	return {
		locale: n,
		defaultLocale: Qt,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Z(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, en = (e, t) => {
	let n = new Fe({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, tn = (...e) => {
	let { locale: t } = $t(), n = e.map((e) => e.key).join("\0");
	return s(() => en(t, Object.fromEntries(e.map((e) => [e.key, Gt(e, t)]))), [t, n]);
}, nn = () => {
	try {
		return Object.keys(ct());
	} catch {
		return [];
	}
}, rn = (e, t) => {
	let n = nn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return ft(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = _(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = _(a(t), e);
		if (n !== void 0) return n;
	}
}, an = (e) => {
	let t = {};
	for (let n of nn()) try {
		Object.assign(t, g(ft(n, e)));
	} catch {}
	return t;
}, on = () => ({
	lookup: rn,
	all: an
}), sn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = sn(t.children, n), a = n[t.tag];
	if (a === void 0) return u(e, { children: i }, r);
	if (typeof a == "function") return u(e, { children: a(u(l, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return u(e, {
			...t,
			children: i
		}, r);
	}
	return u(e, { children: i }, r);
}), cn = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), d = r && Object.keys(r).length > 0, f;
	if (d) {
		let e = sn(Me(c), r);
		f = u(l, { children: e });
	} else f = c;
	let p = {
		id: e,
		translation: f,
		children: f,
		message: t ?? null
	};
	if (typeof i == "function") return i(p);
	let m = a ?? s;
	return m ? u(m, {
		...p,
		children: f
	}) : u(l, { children: f });
}, $ = ({ dictionary: e, ...t }) => {
	let { i18n: n } = tn(e), { defaultComponent: r } = a(p) ?? {};
	return cn(t, n, r);
}, ln = (e) => new Fe({
	...e,
	registry: on()
});
ln({ locale: "en" });
var un = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = c(() => r(e)), [s, l] = c(e.locale);
	return o(() => (a(r(e)), l(e.locale), e.on("change", () => {
		a(r(e)), l(e.locale);
	})), [e]), u(p.Provider, {
		value: i,
		children: u(Zt, {
			locale: s,
			children: n
		})
	});
};
function dn() {
	return d("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			u("h2", {
				className: "text-2xl font-bold text-foreground",
				children: u($, {
					id: "understanding-impact.understandingTheImpact",
					message: "Understanding the Impact",
					dictionary: f
				})
			}),
			d("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					u("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: u($, {
							id: "understanding-impact.whyASingleLargeJson",
							message: "Why a single large JSON can hurt performance",
							dictionary: f
						})
					}),
					u("p", {
						className: "text-sm text-muted-foreground",
						children: u($, {
							id: "understanding-impact.manyI18nLibrariesStoreTranslations",
							message: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
							dictionary: f
						})
					}),
					d("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							u("li", { children: u($, {
								id: "understanding-impact.theJsonMustBeParsed",
								message: "The JSON must be parsed on every page load — blocking the main thread.",
								dictionary: f
							}) }),
							u("li", { children: u($, {
								id: "understanding-impact.contextBasedArchitecturesCanCause",
								message: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
								dictionary: f
							}) }),
							u("li", { children: u($, {
								id: "understanding-impact.duringServerSideRenderingThe",
								message: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
								dictionary: f
							}) })
						]
					})
				]
			}),
			d("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					u("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: u($, {
							id: "understanding-impact.theTradeOffsOfDynamic",
							message: "The trade-offs of dynamic loading",
							dictionary: f
						})
					}),
					u("p", {
						className: "text-sm text-muted-foreground",
						children: u($, {
							id: "understanding-impact.splittingTranslationsIntoPerRoute",
							message: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
							dictionary: f
						})
					}),
					d("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							d("li", { children: [
								u("strong", {
									className: "text-foreground",
									children: u($, {
										id: "understanding-impact.waterfallRequests",
										message: "Waterfall requests:",
										dictionary: f
									})
								}),
								" ",
								u($, {
									id: "understanding-impact.waterfallRequestsDesc",
									message: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
									dictionary: f
								})
							] }),
							d("li", { children: [
								u("strong", {
									className: "text-foreground",
									children: u($, {
										id: "understanding-impact.flashOfUntranslatedContentFouc",
										message: "Flash of untranslated content (FOUC):",
										dictionary: f
									})
								}),
								" ",
								u($, {
									id: "understanding-impact.flashOfUntranslatedContentFoucDesc",
									message: "users may briefly see translation keys or a fallback language before the chunk arrives.",
									dictionary: f
								})
							] }),
							d("li", { children: [
								u("strong", {
									className: "text-foreground text-nowrap",
									children: u($, {
										id: "understanding-impact.cacheInvalidation",
										message: "Cache invalidation:",
										dictionary: f
									})
								}),
								" ",
								u($, {
									id: "understanding-impact.cacheInvalidationDesc",
									message: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
									dictionary: f
								})
							] })
						]
					})
				]
			}),
			d("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [u("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: u($, {
						id: "understanding-impact.whatThisBenchmarkMeasures",
						message: "What this benchmark measures",
						dictionary: f
					})
				}), u("p", {
					className: "text-sm text-muted-foreground",
					children: u($, {
						id: "understanding-impact.thisTestAppProvidesA",
						message: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
						dictionary: f
					})
				})]
			})
		]
	});
}
function fn(e, t) {
	let n = ln();
	return n.activate(e), n;
}
function pn({ children: e }) {
	let t = s(() => fn("en"), []);
	return u(un, {
		i18n: t,
		children: e
	});
}
function mn() {
	return u(pn, { children: u(dn, {}) });
}
export { mn as default };
