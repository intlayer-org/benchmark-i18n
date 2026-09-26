import { Fragment, createContext, createElement, isValidElement, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var understanding_impact_default = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"cacheInvalidation\":\"Cache invalidation:\",\"contextBasedArchitecturesCanCause\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"duringServerSideRenderingThe\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"flashOfUntranslatedContentFouc\":\"Flash of untranslated content (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"splittingTranslationsIntoPerRoute\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"waterfallRequestsDesc\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"theJsonMustBeParsed\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"theTradeOffsOfDynamic\":\"The trade-offs of dynamic loading\",\"thisTestAppProvidesA\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\",\"understandingTheImpact\":\"Understanding the Impact\",\"cacheInvalidationDesc\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\",\"flashOfUntranslatedContentFoucDesc\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"waterfallRequests\":\"Waterfall requests:\",\"whatThisBenchmarkMeasures\":\"What this benchmark measures\",\"whyASingleLargeJson\":\"Why a single large JSON can hurt performance\"},\"fr\":{\"cacheInvalidation\":\"Invalidation du cache :\",\"contextBasedArchitecturesCanCause\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"duringServerSideRenderingThe\":\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"flashOfUntranslatedContentFouc\":\"Flash de contenu non traduit (FOUC) :\",\"manyI18nLibrariesStoreTranslations\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"splittingTranslationsIntoPerRoute\":\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\",\"waterfallRequestsDesc\":\"Comme l'application doit d'abord se charger et déterminer la langue avant de récupérer le chunk correspondant, vous ajoutez des allers-retours réseau.\",\"theJsonMustBeParsed\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"theTradeOffsOfDynamic\":\"Les compromis du chargement dynamique\",\"thisTestAppProvidesA\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\",\"understandingTheImpact\":\"Comprendre l'impact\",\"cacheInvalidationDesc\":\"La mise à jour des traductions nécessite des stratégies d'invalidation du cache pour garantir que les utilisateurs reçoivent le nouveau contenu sans retélécharger les morceaux non modifiés.\",\"flashOfUntranslatedContentFoucDesc\":\"Les utilisateurs peuvent voir brièvement les clés de traduction ou la langue par défaut avant que le morceau ne soit chargé.\",\"waterfallRequests\":\"Requêtes en cascade :\",\"whatThisBenchmarkMeasures\":\"Ce que ce benchmark mesure\",\"whyASingleLargeJson\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\"},\"es\":{\"cacheInvalidation\":\"Invalidación de la caché:\",\"contextBasedArchitecturesCanCause\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\",\"duringServerSideRenderingThe\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\",\"flashOfUntranslatedContentFouc\":\"Parpadeo de contenido no traducido (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"splittingTranslationsIntoPerRoute\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\",\"waterfallRequestsDesc\":\"la aplicación debe cargar primero, determinar el idioma y luego obtener el fragmento correcto, lo que añade viajes de ida y vuelta a la red.\",\"theJsonMustBeParsed\":\"El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\",\"theTradeOffsOfDynamic\":\"Las compensaciones de la carga dinámica\",\"thisTestAppProvidesA\":\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\",\"understandingTheImpact\":\"Entendiendo el impacto\",\"cacheInvalidationDesc\":\"la actualización de las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.\",\"flashOfUntranslatedContentFoucDesc\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\",\"waterfallRequests\":\"Solicitudes en cascada:\",\"whatThisBenchmarkMeasures\":\"Qué mide este benchmark\",\"whyASingleLargeJson\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\"},\"de\":{\"cacheInvalidation\":\"Cache-Invalidierung:\",\"contextBasedArchitecturesCanCause\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"duringServerSideRenderingThe\":\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.\",\"flashOfUntranslatedContentFouc\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"splittingTranslationsIntoPerRoute\":\"Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"waterfallRequestsDesc\":\"Anfragekaskaden: Da die App zuerst geladen werden und das Gebietsschema bestimmen muss, bevor der entsprechende Chunk abgerufen werden kann, entstehen zusätzliche Netzwerk-Roundtrips.\",\"theJsonMustBeParsed\":\"Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.\",\"theTradeOffsOfDynamic\":\"Die Kompromisse beim dynamischen Laden\",\"thisTestAppProvidesA\":\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\",\"understandingTheImpact\":\"Die Auswirkungen verstehen\",\"cacheInvalidationDesc\":\"Cache-Invalidierung: Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Teilstücke erneut herunterzuladen.\",\"flashOfUntranslatedContentFoucDesc\":\"Flash of Untranslated Content (FOUC): Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Fallback-Sprache, bevor das Teilstück eintrifft.\",\"waterfallRequests\":\"Anfragekaskaden:\",\"whatThisBenchmarkMeasures\":\"Was dieser Benchmark misst\",\"whyASingleLargeJson\":\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\"},\"it\":{\"cacheInvalidation\":\"Invalidazione della cache:\",\"contextBasedArchitecturesCanCause\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"duringServerSideRenderingThe\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.\",\"flashOfUntranslatedContentFouc\":\"Flash di contenuti non tradotti (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\",\"splittingTranslationsIntoPerRoute\":\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"waterfallRequestsDesc\":\"l'app deve prima caricarsi, determinare la localizzazione e quindi recuperare il chunk giusto, aggiungendo round-trip di rete.\",\"theJsonMustBeParsed\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"theTradeOffsOfDynamic\":\"I compromessi del caricamento dinamico\",\"thisTestAppProvidesA\":\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\",\"understandingTheImpact\":\"Capire l'impatto\",\"cacheInvalidationDesc\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente chunk invariati.\",\"flashOfUntranslatedContentFoucDesc\":\"gli utenti possono visualizzare brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\",\"whatThisBenchmarkMeasures\":\"Cosa misura questo benchmark\",\"whyASingleLargeJson\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\"},\"pt\":{\"cacheInvalidation\":\"Invalidação de cache:\",\"contextBasedArchitecturesCanCause\":\"As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"duringServerSideRenderingThe\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\",\"flashOfUntranslatedContentFouc\":\"Flash de conteúdo não traduzido (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\",\"splittingTranslationsIntoPerRoute\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"waterfallRequestsDesc\":\"Como o aplicativo deve primeiro carregar e decidir a localidade antes de buscar o bloco apropriado, você adiciona viagens de ida e volta à rede.\",\"theJsonMustBeParsed\":\"O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.\",\"theTradeOffsOfDynamic\":\"As compensações do carregamento dinâmico\",\"thisTestAppProvidesA\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\",\"understandingTheImpact\":\"Entendendo o impacto\",\"cacheInvalidationDesc\":\"A atualização das traduções requer uma estratégia de invalidação de cache que garanta que os usuários recebam o novo conteúdo sem baixar novamente os blocos inalterados.\",\"flashOfUntranslatedContentFoucDesc\":\"Os usuários podem ver brevemente chaves de tradução ou o idioma de fallback antes que o bloco chegue.\",\"waterfallRequests\":\"Pedidos em cascata:\",\"whatThisBenchmarkMeasures\":\"O que este benchmark mede\",\"whyASingleLargeJson\":\"Por que um único JSON grande pode prejudicar o desempenho\"},\"zh\":{\"cacheInvalidation\":\"缓存失效：\",\"contextBasedArchitecturesCanCause\":\"基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。\",\"duringServerSideRenderingThe\":\"在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\",\"flashOfUntranslatedContentFouc\":\"未翻译内容闪烁 (FOUC)：\",\"manyI18nLibrariesStoreTranslations\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：\",\"splittingTranslationsIntoPerRoute\":\"将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：\",\"waterfallRequestsDesc\":\"由于应用必须先加载并确定语言环境，然后才能获取相应的块，因此您增加了网络往返时间。\",\"theJsonMustBeParsed\":\"JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。\",\"theTradeOffsOfDynamic\":\"动态加载的权衡\",\"thisTestAppProvidesA\":\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\",\"understandingTheImpact\":\"理解影响\",\"cacheInvalidationDesc\":\"更新翻译需要缓存失效策略，以确保用户收到最新内容，而无需重新下载未更改的块。\",\"flashOfUntranslatedContentFoucDesc\":\"用户在块到达之前可能会短暂看到翻译键或回退语言。\",\"waterfallRequests\":\"瀑布流请求：\",\"whatThisBenchmarkMeasures\":\"本基准测试测量什么\",\"whyASingleLargeJson\":\"为什么单个大型 JSON 会损害性能\"},\"ja\":{\"cacheInvalidation\":\"キャッシュの無効化:\",\"contextBasedArchitecturesCanCause\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。\",\"duringServerSideRenderingThe\":\"サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\",\"flashOfUntranslatedContentFouc\":\"未翻訳コンテンツのフラッシュ (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\",\"splittingTranslationsIntoPerRoute\":\"翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：\",\"waterfallRequestsDesc\":\"アプリはまずロードし、ロケールを決定してから、適切なチャンクをフェッチする必要があるため、ネットワークのラウンドトリップが追加されます。\",\"theJsonMustBeParsed\":\"JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。\",\"theTradeOffsOfDynamic\":\"動的読み込みのトレードオフ\",\"thisTestAppProvidesA\":\"このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\",\"understandingTheImpact\":\"影響を理解する\",\"cacheInvalidationDesc\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが新しいコンテンツを確実に取得できるようにするための、キャッシュ無効化戦略が必要です。\",\"flashOfUntranslatedContentFoucDesc\":\"チャンクが到着する前に、ユーザーに翻訳キーやフォールバック言語が一瞬表示されることがあります。\",\"waterfallRequests\":\"ウォーターフォールリクエスト:\",\"whatThisBenchmarkMeasures\":\"このベンチマークが測定するもの\",\"whyASingleLargeJson\":\"ひとつの巨大な JSON がパフォーマンスを低下させる理由\"},\"ko\":{\"cacheInvalidation\":\"캐시 무효화:\",\"contextBasedArchitecturesCanCause\":\"컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.\",\"duringServerSideRenderingThe\":\"서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.\",\"flashOfUntranslatedContentFouc\":\"번역되지 않은 콘텐츠의 깜빡임 (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:\",\"splittingTranslationsIntoPerRoute\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:\",\"waterfallRequestsDesc\":\"앱이 먼저 로드되고 로케일을 결정한 다음 적절한 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\",\"theJsonMustBeParsed\":\"JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.\",\"theTradeOffsOfDynamic\":\"동적 로딩의 트레이드오프\",\"thisTestAppProvidesA\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\",\"understandingTheImpact\":\"영향 이해하기\",\"cacheInvalidationDesc\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고도 최신 콘텐츠를 받을 수 있도록 하는 캐시 무효화 전략이 필요합니다.\",\"flashOfUntranslatedContentFoucDesc\":\"사용자는 청크가 도착하기 전에 번역 키나 폴백 언어를 잠시 볼 수 있습니다.\",\"waterfallRequests\":\"워터폴(Waterfall) 요청:\",\"whatThisBenchmarkMeasures\":\"이 벤치마크가 측정하는 것\",\"whyASingleLargeJson\":\"단일 대형 JSON이 성능을 저하시키는 이유\"},\"ru\":{\"cacheInvalidation\":\"Инвалидация кэша:\",\"contextBasedArchitecturesCanCause\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"duringServerSideRenderingThe\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"flashOfUntranslatedContentFouc\":\"Мерцание непереведенного контента (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"splittingTranslationsIntoPerRoute\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"waterfallRequestsDesc\":\"Поскольку приложение сначала должно загрузиться и определить локаль перед получением соответствующего чанка, вы добавляете сетевые задержки (round-trips).\",\"theJsonMustBeParsed\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"theTradeOffsOfDynamic\":\"Компромиссы динамической загрузки\",\"thisTestAppProvidesA\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\",\"understandingTheImpact\":\"Понимание влияния\",\"cacheInvalidationDesc\":\"Обновление переводов требует стратегии инвалидации кэша, гарантирующей получение пользователями нового контента без повторной загрузки неизмененных чанков.\",\"flashOfUntranslatedContentFoucDesc\":\"Пользователи могут кратковременно видеть ключи перевода или язык по умолчанию до загрузки чанка.\",\"waterfallRequests\":\"Каскадные запросы (Waterfall requests):\",\"whatThisBenchmarkMeasures\":\"Что измеряет этот бенчмарк\",\"whyASingleLargeJson\":\"Почему один большой JSON может снизить производительность\"}}}")
};
var LinguiContext = createContext(null);
var EventEmitter = class {
	_events = /* @__PURE__ */ new Map();
	on(event, listener) {
		if (!this._events.has(event)) this._events.set(event, /* @__PURE__ */ new Set());
		this._events.get(event).add(listener);
		return () => this.removeListener(event, listener);
	}
	removeListener(event, listener) {
		this._events.get(event)?.delete(listener);
	}
	emit(event, ...args) {
		this._events.get(event)?.forEach((listener) => {
			listener(...args);
		});
	}
};
var navigateCatalog = (catalog, id) => {
	if (!id) return catalog;
	if (catalog === null || typeof catalog !== "object") return void 0;
	const flatValue = catalog[id];
	if (flatValue !== void 0) return flatValue;
	if (!id.includes(".")) return void 0;
	let current = catalog;
	for (const part of id.split(".")) {
		if (current === null || current === void 0 || typeof current !== "object") return;
		current = current[part];
	}
	return current;
};
var unwrapLinguiCatalog = (catalog) => {
	if (!catalog || typeof catalog !== "object") return {};
	const wrapped = catalog.messages;
	if (wrapped && typeof wrapped === "object") return wrapped;
	return catalog;
};
var navigateLinguiCatalog = (catalog, id) => {
	const direct = navigateCatalog(catalog, id);
	if (direct !== void 0) return direct;
	if (catalog && typeof catalog === "object") {
		const wrapped = catalog.messages;
		if (wrapped && typeof wrapped === "object") return navigateCatalog(wrapped, id);
	}
};
var tokenToIcu = (token) => {
	if (typeof token === "string") return token;
	if (!Array.isArray(token)) return "";
	const [name, type, format] = token;
	if (type === void 0) return `{${String(name)}}`;
	if (type === "plural" || type === "select" || type === "selectordinal") {
		const options = format ?? {};
		const segments = [];
		let offsetSegment = "";
		for (const [category, value] of Object.entries(options)) {
			if (category === "offset") {
				offsetSegment = `offset:${String(value)} `;
				continue;
			}
			segments.push(`${category} {${linguiMessageToIcu(value)}}`);
		}
		return `{${String(name)}, ${type}, ${offsetSegment}${segments.join(" ")}}`;
	}
	return format !== void 0 ? `{${String(name)}, ${type}, ${String(format)}}` : `{${String(name)}, ${type}}`;
};
var linguiMessageToIcu = (compiled) => {
	if (typeof compiled === "string") return compiled;
	if (!Array.isArray(compiled)) return String(compiled ?? "");
	return compiled.map(tokenToIcu).join("");
};
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var PLURAL = "plural";
var CONDITION = "condition";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
var MARKDOWN = "markdown";
var HTML = "html";
var GENDER = "gender";
var SELECT = "select";
var formatNodeType = (nodeType, content, additionalAttributes) => ({
	...additionalAttributes,
	nodeType,
	[nodeType]: content
});
var getChildProps = (props, children, keyPathSegment) => ({
	...props,
	children,
	keyPath: [...props.keyPath, keyPathSegment]
});
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, deepTransformNode);
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0) return node;
	if (Array.isArray(node)) return node.map((child, index) => deepTransformNode(child, getChildProps(props, child, {
		type: ARRAY,
		key: index
	})));
	const result = {};
	for (const key in node) {
		const keyPathSegment = {
			type: OBJECT,
			key
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
				Object.defineProperty(this, key, {
					value: transformed,
					enumerable: true,
					configurable: true
				});
				return transformed;
			}
		});
	}
	return result;
};
var enumeration = (content) => formatNodeType(ENUMERATION, content);
var gender = (content) => formatNodeType(GENDER, content);
var parseAttributes = (attributesString) => {
	const attributes = {};
	if (!attributesString?.trim()) return attributes;
	[...attributesString.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((match) => {
		const attrName = match[1];
		attributes[attrName] = "string";
	});
	return attributes;
};
var getHTMLCustomComponents = (content) => {
	if (typeof content !== "string") throw new Error("content must be a string");
	const matches = [...content.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)];
	const components = {};
	matches.forEach((match) => {
		const isClosing = !!match[1];
		const tagName = match[2];
		const attributesString = match[3];
		const isSelfClosing = !!match[4];
		if (/^[a-z][a-z0-9]*$/.test(tagName)) {
			components[tagName] = true;
			return;
		}
		if (!components[tagName]) components[tagName] = {};
		if (components[tagName] === true) return;
		if (isClosing) return;
		const attributes = parseAttributes(attributesString);
		const componentDef = components[tagName];
		Object.assign(componentDef, attributes);
		if (!isSelfClosing) componentDef.children = "string";
	});
	return components;
};
var VOID_HTML_ELEMENTS = /* @__PURE__ */ new Set([
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
]);
var TAG_REGEX = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g;
var validateHTML = (content) => {
	const issues = [];
	const stack = [];
	for (const match of content.matchAll(TAG_REGEX)) {
		const isClosing = !!match[1];
		const tagName = match[2];
		const attrs = match[3];
		const isSelfClosing = !!match[4];
		if (attrs.trimStart().startsWith("://") || attrs.trimStart().startsWith(":")) continue;
		if (isClosing) {
			if (stack.length === 0) issues.push({
				type: "error",
				message: `Closing tag </${tagName}> has no matching opening tag`
			});
			else {
				const last = stack[stack.length - 1];
				if (last.tag.toLowerCase() !== tagName.toLowerCase()) issues.push({
					type: "error",
					message: `Mismatched closing tag: expected </${last.tag}> but found </${tagName}>`
				});
				stack.pop();
			}
		} else {
			const isVoidElement = VOID_HTML_ELEMENTS.has(tagName.toLowerCase());
			if (!isSelfClosing && !isVoidElement) stack.push({ tag: tagName });
		}
	}
	for (const unclosed of stack) issues.push({
		type: "error",
		message: `Unclosed HTML tag: <${unclosed.tag}>`
	});
	return {
		valid: issues.filter((i) => i.type === "error").length === 0,
		issues
	};
};
var html = (content, components) => {
	const getComponents = () => {
		if (components) return components;
		if (typeof content === "string") {
			const { issues } = validateHTML(content);
			for (const issue of issues) if (issue.type === "error") console.error(`[intlayer/html] ${issue.message}`);
			else console.warn(`[intlayer/html] ${issue.message}`);
			return getHTMLCustomComponents(content);
		}
		let stringContent;
		if (typeof content === "function") stringContent = content();
		else if (typeof content.then === "function") stringContent = async () => getHTMLCustomComponents(await content);
		if (typeof stringContent === "string") return getHTMLCustomComponents(stringContent);
		try {
			return getHTMLCustomComponents(JSON.stringify(content));
		} catch (_e) {
			return [];
		}
	};
	return formatNodeType(HTML, content, { tags: getComponents() });
};
var getInsertionValues = (content) => {
	const matches = [...content.matchAll(/{{\s*(.*?)\s*}}/g)];
	if (matches.length === 0) return [];
	return [...new Set(matches.map((match) => match[1].trim()))].filter(Boolean);
};
var insertion = (content) => {
	const getInsertions = () => {
		if (typeof content === "string") return getInsertionValues(content);
		let stringContent;
		if (typeof content === "function") stringContent = content();
		else if (typeof content.then === "function") stringContent = async () => getInsertionValues(await content);
		if (typeof stringContent === "string") return getInsertionValues(stringContent);
		try {
			return getInsertionValues(JSON.stringify(content));
		} catch (_e) {
			return [];
		}
	};
	return formatNodeType(INSERTION, content, { fields: getInsertions() });
};
var plural = (content) => formatNodeType(PLURAL, content);
var select = (content, variable) => formatNodeType(SELECT, content, { variable });
var parseICU = (text) => {
	let index = 0;
	const parseNodes = () => {
		const nodes = [];
		let currentText = "";
		while (index < text.length) {
			const char = text[index];
			if (char === "{") {
				if (currentText) {
					nodes.push(currentText);
					currentText = "";
				}
				index++;
				nodes.push(parseArgument());
			} else if (char === "}") break;
			else if (char === "'") {
				if (index + 1 < text.length && text[index + 1] === "'") {
					currentText += "'";
					index += 2;
				} else {
					const nextQuote = text.indexOf("'", index + 1);
					if (nextQuote !== -1) {
						currentText += text.substring(index + 1, nextQuote);
						index = nextQuote + 1;
					} else {
						currentText += "'";
						index++;
					}
				}
			} else {
				currentText += char;
				index++;
			}
		}
		if (currentText) nodes.push(currentText);
		return nodes;
	};
	const parseArgument = () => {
		let name = "";
		while (index < text.length && /[^,}]/.test(text[index])) {
			name += text[index];
			index++;
		}
		name = name.trim();
		if (index >= text.length) throw new Error("Unclosed argument");
		if (text[index] === "}") {
			index++;
			return {
				type: "argument",
				name
			};
		}
		if (text[index] === ",") {
			index++;
			let type = "";
			while (index < text.length && /[^,}]/.test(text[index])) {
				type += text[index];
				index++;
			}
			type = type.trim();
			if (index >= text.length) throw new Error("Unclosed argument");
			if (text[index] === "}") {
				index++;
				return {
					type: "argument",
					name,
					format: { type }
				};
			}
			if (text[index] === ",") {
				index++;
				if (type === "plural" || type === "select" || type === "selectordinal") {
					const options = {};
					while (index < text.length && text[index] !== "}") {
						while (index < text.length && /\s/.test(text[index])) index++;
						let key = "";
						while (index < text.length && /[^{\s]/.test(text[index])) {
							key += text[index];
							index++;
						}
						while (index < text.length && /\s/.test(text[index])) index++;
						if (text[index] !== "{") throw new Error("Expected { after option key");
						index++;
						const value = parseNodes();
						if (text[index] !== "}") throw new Error("Expected } after option value");
						index++;
						options[key] = value;
						while (index < text.length && /\s/.test(text[index])) index++;
					}
					index++;
					if (type === "plural") return {
						type: "plural",
						name,
						options
					};
					else if (type === "select") return {
						type: "select",
						name,
						options
					};
					else if (type === "selectordinal") return {
						type: "selectordinal",
						name,
						options
					};
				} else {
					let style = "";
					while (index < text.length && text[index] !== "}") {
						style += text[index];
						index++;
					}
					if (index >= text.length) throw new Error("Unclosed argument");
					style = style.trim();
					index++;
					return {
						type: "argument",
						name,
						format: {
							type,
							style
						}
					};
				}
			}
		}
		throw new Error("Malformed argument");
	};
	return parseNodes();
};
var icuNodesToIntlayer = (nodes) => {
	if (nodes.length === 0) return "";
	if (nodes.length === 1 && typeof nodes[0] === "string") {
		const node = nodes[0];
		if (/<[a-zA-Z0-9-]+[^>]*>/.test(node)) return html(node);
		return node;
	}
	if (nodes.every((node) => typeof node === "string" || node?.type === "argument")) {
		let str = "";
		for (const node of nodes) if (typeof node === "string") str += node;
		else if (typeof node !== "string" && node?.type === "argument") {
			if (node.format) str += `{${node.name}, ${node.format.type}${node.format.style ? `, ${node.format.style}` : ""}}`;
			else str += `{{${node.name}}}`;
		}
		if (/<[a-zA-Z0-9-]+[^>]*>/.test(str)) return html(str);
		return insertion(str);
	}
	if (nodes.length === 1) {
		const node = nodes[0];
		if (typeof node === "string") {
			if (/<[a-zA-Z0-9-]+[^>]*>/.test(node)) return html(node);
			return node;
		}
		if (node?.type === "argument") {
			if (node.format) return insertion(`{${node.name}, ${node.format.type}${node.format.style ? `, ${node.format.style}` : ""}}`);
			return insertion(`{{${node.name}}}`);
		}
		if (node?.type === "plural") {
			const options = {};
			let hasExactMatch = false;
			for (const key of Object.keys(node.options)) if (key.startsWith("=")) {
				hasExactMatch = true;
				break;
			}
			if (hasExactMatch) {
				for (const [key, val] of Object.entries(node.options)) {
					let newKey = key;
					if (key.startsWith("=")) newKey = key.substring(1);
					else if (key === "one") newKey = "1";
					else if (key === "two") newKey = "2";
					else if (key === "few") newKey = "<=3";
					else if (key === "many") newKey = ">=4";
					else if (key === "other") newKey = "fallback";
					const replacedVal = val.map((v) => {
						if (typeof v === "string") return v.replace(/#/g, `{{${node.name}}}`);
						return v;
					});
					options[newKey] = icuNodesToIntlayer(replacedVal);
				}
				options.__intlayer_icu_var = node.name;
				return enumeration(options);
			} else {
				for (const [key, val] of Object.entries(node.options)) {
					const replacedVal = val?.map((v) => {
						if (typeof v === "string") return v.replace(/#/g, `{{${node.name}}}`);
						return v;
					});
					options[key] = icuNodesToIntlayer(replacedVal);
				}
				return plural(options);
			}
		}
		if (node?.type === "select") {
			const options = {};
			for (const [key, val] of Object.entries(node.options)) options[key === "other" ? "fallback" : key] = icuNodesToIntlayer(val);
			const optionKeys = Object.keys(options);
			if ((options.male || options.female) && optionKeys.every((k) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(k))) return gender({
				fallback: options.fallback,
				male: options.male,
				female: options.female
			});
			return select(options, node.name);
		}
		if (node?.type === "selectordinal") {
			const options = {};
			for (const [key, val] of Object.entries(node.options)) {
				const newKey = key.startsWith("=") ? key.substring(1) : key === "other" ? "fallback" : key;
				options[newKey] = icuNodesToIntlayer(val.map((value) => {
					if (typeof value === "string") return value.replace(/#/g, `{{${node.name}}}`);
					return value;
				}));
			}
			options.__intlayer_icu_var = node.name;
			options.__intlayer_icu_ordinal = true;
			return enumeration(options);
		}
	}
	return nodes.map((node) => icuNodesToIntlayer([node]));
};
var icuToIntlayerPlugin = {
	canHandle: (node) => typeof node === "string" && (node.includes("{") || node.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(node)),
	transform: (node) => {
		try {
			return icuNodesToIntlayer(parseICU(node));
		} catch {
			return node;
		}
	}
};
var icuToIntlayerFormatter = (message) => {
	return deepTransformNode(message, {
		dictionaryKey: "icu",
		keyPath: [],
		plugins: [{
			id: "icu",
			...icuToIntlayerPlugin
		}]
	});
};
var findMatchingCondition = (enumerationContent, quantity) => {
	const numericKeys = Object.keys(enumerationContent);
	for (const key of numericKeys) {
		const isEqual = !key.startsWith(">") && !key.startsWith("<") && !key.startsWith("=") && parseFloat(key) === quantity || key.startsWith("=") && parseFloat(key.slice(1)) === quantity;
		const isSuperior = key.startsWith(">") && quantity > parseFloat(key.slice(1));
		const isSuperiorOrEqual = key.startsWith(">=") && quantity >= parseFloat(key.slice(2));
		const isInferior = key.startsWith("<") && quantity < parseFloat(key.slice(1));
		const isInferiorOrEqual = key.startsWith("<=") && quantity <= parseFloat(key.slice(2));
		if (isEqual || isSuperior || isSuperiorOrEqual || isInferior || isInferiorOrEqual) return key;
	}
};
var getEnumeration = (enumerationContent, quantity) => {
	return enumerationContent[findMatchingCondition(enumerationContent, quantity) ?? "fallback"];
};
var internationalization = {
	"locales": [
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
	"requiredLocales": [
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
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var routing = {
	"mode": "prefix-all",
	"enableProxy": false,
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var log = {
	"mode": "default",
	"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
};
var MAX_CACHE_SIZE = 50;
var cache = /* @__PURE__ */ new Map();
var alreadyWarnedConstructors = /* @__PURE__ */ new Set();
var warnMissingIntlConstructor = (constructorName) => {
	if (alreadyWarnedConstructors.has(constructorName)) return;
	alreadyWarnedConstructors.add(constructorName);
	console.warn(`[intlayer] \`Intl.${constructorName}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${constructorName.toLowerCase()}/polyfill\`) before rendering your app.`);
};
var intlConstructorFallbacks = {
	DisplayNames: class DisplayNamesFallback {
		of(code) {
			return code;
		}
	},
	ListFormat: class ListFormatFallback {
		format(list) {
			return Array.from(list).join(", ");
		}
		formatToParts(list) {
			return Array.from(list).flatMap((value, index) => index === 0 ? [{
				type: "element",
				value
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value
			}]);
		}
	},
	Segmenter: class SegmenterFallback {
		segment(input) {
			let index = 0;
			return Array.from(input).map((segment) => {
				const segmentStart = index;
				index += segment.length;
				return {
					segment,
					index: segmentStart
				};
			});
		}
	}
};
var resolveIntlConstructor = (constructorName) => {
	const nativeConstructor = Intl[constructorName];
	if (typeof nativeConstructor === "function") return nativeConstructor;
	warnMissingIntlConstructor(constructorName);
	return intlConstructorFallbacks[constructorName];
};
function getCachedIntl(intlConstructor, locale, options) {
	const resLoc = locale ?? internationalization?.defaultLocale;
	const key = `${resLoc}|${options ? JSON.stringify(options) : ""}`;
	const cacheKey = intlConstructor;
	let ctorCache = cache.get(cacheKey);
	if (!ctorCache) {
		ctorCache = /* @__PURE__ */ new Map();
		cache.set(cacheKey, ctorCache);
	}
	let instance = ctorCache.get(key);
	if (!instance) {
		const ResolvedConstructor = typeof intlConstructor === "string" ? resolveIntlConstructor(intlConstructor) : intlConstructor;
		if (typeof ResolvedConstructor !== "function") throw new Error(`[intlayer] \`Intl.${String(intlConstructor)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		if (ctorCache.size > MAX_CACHE_SIZE) ctorCache.clear();
		instance = new ResolvedConstructor(resLoc, options);
		ctorCache.set(key, instance);
	}
	return instance;
}
var getPlural = (pluralContent, count, locale) => {
	return pluralContent[getCachedIntl("PluralRules", locale).select(count)] ?? pluralContent.other;
};
var getSelect = (selectContent, value) => {
	const caseList = Object.keys(selectContent);
	const lastCase = caseList[caseList.length - 1];
	return selectContent[value] ?? selectContent.fallback ?? selectContent.other ?? selectContent[lastCase];
};
var ENUMERATION_METADATA_KEYS = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
];
var resolveValuePath = (values, path) => {
	if (path in values) return values[path];
	let current = values;
	for (const part of path.split(".")) {
		if (current === null || current === void 0 || typeof current !== "object") return;
		current = current[part];
	}
	return current;
};
var formatArgument = (value, type, style, locale) => {
	try {
		if (type === "number") {
			const numberValue = Number(value);
			if (style === "percent") return getCachedIntl("NumberFormat", locale, { style: "percent" }).format(numberValue);
			if (style === "integer") return getCachedIntl("NumberFormat", locale, { maximumFractionDigits: 0 }).format(numberValue);
			return getCachedIntl("NumberFormat", locale).format(numberValue);
		}
		if (type === "date" || type === "time") {
			const dateValue = value instanceof Date ? value : new Date(value);
			const dateTimeStyle = [
				"short",
				"medium",
				"long",
				"full"
			].includes(style ?? "") ? style : type === "date" ? "medium" : "short";
			return getCachedIntl("DateTimeFormat", locale, type === "date" ? { dateStyle: dateTimeStyle } : { timeStyle: dateTimeStyle }).format(dateValue);
		}
	} catch {}
	return String(value);
};
var interpolateMessage = (template, values = {}, locale = "en") => template.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (match, path, type, style) => {
	const value = resolveValuePath(values, path);
	if (value === void 0) return match;
	return type ? formatArgument(value, type, style, locale) : String(value);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (match, path, type, style) => {
	const value = resolveValuePath(values, path);
	if (value === void 0) return match;
	return formatArgument(value, type, style, locale);
}).replace(/\{\s*([\w.]+)\s*\}/g, (match, path) => {
	const value = resolveValuePath(values, path);
	return value === void 0 ? match : String(value);
});
var getSelectorValue = (values, variableName) => values[variableName] ?? values.count ?? values.n;
var resolveMessageNode = (node, values = {}, locale = "en") => {
	if (node === null || node === void 0) return node;
	if (typeof node === "string") return interpolateMessage(node, values, locale);
	if (typeof node === "number" || typeof node === "boolean") return String(node);
	if (typeof node === "function") try {
		return resolveMessageNode(node(values), values, locale);
	} catch {
		return;
	}
	if (Array.isArray(node)) return node.map((item) => String(resolveMessageNode(item, values, locale) ?? "")).join("");
	const typedNode = node;
	if (typedNode.nodeType === "insertion") return resolveMessageNode(typedNode[INSERTION], values, locale);
	if (typedNode.nodeType === "html") return resolveMessageNode(typedNode[HTML], values, locale);
	if (typedNode.nodeType === "plural") {
		const pluralState = typedNode[PLURAL];
		return resolveMessageNode(getPlural(pluralState, Number(getSelectorValue(values, "count") ?? 1), locale), values, locale);
	}
	if (typedNode.nodeType === "enumeration") {
		const enumerationState = typedNode[ENUMERATION];
		const variableName = ENUMERATION_METADATA_KEYS.map((metadataKey) => enumerationState[metadataKey]).find((name) => typeof name === "string") ?? "count";
		const isOrdinal = enumerationState.__intlayer_icu_ordinal === true;
		const options = {};
		for (const [key, value] of Object.entries(enumerationState)) if (!ENUMERATION_METADATA_KEYS.includes(key)) options[key] = value;
		const selector = getSelectorValue(values, variableName);
		let selected;
		if (isOrdinal && !Number.isNaN(Number(selector))) {
			const ordinalCount = Number(selector);
			const ordinalCategory = getCachedIntl("PluralRules", locale, { type: "ordinal" }).select(ordinalCount);
			selected = options[String(ordinalCount)] ?? options[ordinalCategory] ?? options.fallback ?? options.other;
		} else if (typeof selector === "number" || !Number.isNaN(Number(selector))) selected = getEnumeration(options, Number(selector));
		else selected = options[String(selector)] ?? options.fallback ?? options.other;
		return resolveMessageNode(selected, values, locale);
	}
	if (typedNode.nodeType === "select") {
		const selectState = typedNode[SELECT];
		const selector = getSelectorValue(values, typeof typedNode.variable === "string" ? typedNode.variable : "value");
		return resolveMessageNode(getSelect(selectState, String(selector ?? "")), values, locale);
	}
	if (typedNode.nodeType === "gender") {
		const genderState = typedNode[GENDER];
		return resolveMessageNode(genderState[String(values.gender ?? "")] ?? genderState.fallback ?? genderState.other, values, locale);
	}
	return node;
};
var resolveMessageNodeToString = (node, values = {}, locale = "en") => {
	const resolved = resolveMessageNode(node, values, locale);
	return typeof resolved === "string" ? resolved : String(resolved ?? "");
};
var createMessageResolver = (formatter) => (message, values = {}, locale = "en") => resolveMessageNodeToString(typeof message === "string" ? formatter(message) : message, values, locale);
var parseTaggedMessage = (message) => {
	const tokens = [];
	const tagRegex = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g;
	let lastIndex = 0;
	let match = tagRegex.exec(message);
	while (match !== null) {
		if (match.index > lastIndex) tokens.push(message.slice(lastIndex, match.index));
		const [, selfClosingTag, tag, inner] = match;
		if (selfClosingTag) tokens.push({
			tag: selfClosingTag,
			children: []
		});
		else if (tag) tokens.push({
			tag,
			children: parseTaggedMessage(inner ?? "")
		});
		lastIndex = match.index + match[0].length;
		match = tagRegex.exec(message);
	}
	if (lastIndex < message.length) tokens.push(message.slice(lastIndex));
	return tokens;
};
var resolveIcuMessage = createMessageResolver(icuToIntlayerFormatter);
var splitMessageId = (id) => {
	const dotPosition = id.indexOf(".");
	if (dotPosition === -1) return {
		dictionaryKey: id,
		remainder: ""
	};
	return {
		dictionaryKey: id.slice(0, dotPosition),
		remainder: id.slice(dotPosition + 1)
	};
};
var I18nClass = class extends EventEmitter {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = false;
	_boundDictionaries = {};
	_registry;
	constructor({ locale = "en", locales, messages, registry } = {}) {
		super();
		this._locale = typeof locale === "string" ? locale : "en";
		this._locales = locales;
		this._registry = registry;
		if (messages) this.mergeAllCatalogs(messages);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		const dictionary = { ...this._registry?.all(this._locale) };
		for (const content of Object.values(this._boundDictionaries)) Object.assign(dictionary, unwrapLinguiCatalog(content));
		return {
			...this._catalogs[this._locale] ?? {},
			...dictionary
		};
	}
	mergeLocaleCatalog(locale, catalog) {
		this._catalogs[locale] = {
			...this._catalogs[locale],
			...catalog
		};
	}
	mergeAllCatalogs(messages) {
		for (const [locale, catalog] of Object.entries(messages)) if (catalog && typeof catalog === "object") this.mergeLocaleCatalog(locale, catalog);
	}
	setMessagesCompiler(_compiler) {
		console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer.");
		return this;
	}
	load(localeOrAll, messages) {
		if (typeof localeOrAll === "string") this.mergeLocaleCatalog(localeOrAll, messages ?? {});
		else this.mergeAllCatalogs(localeOrAll);
		if (!this._loadFallbackWarned) {
			this._loadFallbackWarned = true;
			console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files.");
		}
	}
	loadAndActivate({ locale, locales, messages }) {
		if (messages) this.mergeLocaleCatalog(locale, messages);
		this.activate(locale, locales);
	}
	bindDictionaries(dictionaries) {
		this._boundDictionaries = dictionaries;
		return this;
	}
	activate(locale, locales) {
		this._locale = locale;
		this._locales = locales;
		this.emit("change");
	}
	lookupBoundDictionaries(id) {
		const { dictionaryKey, remainder } = splitMessageId(id);
		const prefixed = this._boundDictionaries[dictionaryKey];
		if (prefixed !== void 0) {
			const value = navigateLinguiCatalog(prefixed, remainder);
			if (value !== void 0) return value;
		}
		for (const content of Object.values(this._boundDictionaries)) {
			const value = navigateLinguiCatalog(content, id);
			if (value !== void 0) return value;
		}
	}
	resolveTemplate(id) {
		const boundNode = this.lookupBoundDictionaries(id);
		if (boundNode !== void 0) return {
			kind: "node",
			node: boundNode
		};
		const registryNode = this._registry?.lookup(id, this._locale);
		if (registryNode !== void 0) return {
			kind: "node",
			node: registryNode
		};
		const catalog = this._catalogs[this._locale];
		if (catalog) {
			const raw = navigateLinguiCatalog(catalog, id);
			if (raw !== void 0) return {
				kind: "icu",
				message: linguiMessageToIcu(raw)
			};
		}
	}
	_(descriptorOrId, values, options) {
		const isDescriptor = typeof descriptorOrId === "object" && descriptorOrId !== null;
		const id = isDescriptor ? descriptorOrId.id : descriptorOrId;
		const defaultMessage = isDescriptor ? descriptorOrId.message ?? options?.message : options?.message;
		const messageValues = isDescriptor ? {
			...descriptorOrId.values ?? {},
			...values ?? {}
		} : values ?? {};
		const locale = this._locale;
		const template = this.resolveTemplate(id) ?? {
			kind: "icu",
			message: defaultMessage ?? id
		};
		return (template.kind === "node" ? resolveMessageNodeToString(template.node, messageValues, locale) : resolveIcuMessage(template.message, messageValues, locale)) ?? id;
	}
	t = (descriptorOrId, values, options) => this._(descriptorOrId, values, options);
	date(value, format) {
		if (value === void 0 || value === null) return "";
		const dateValue = value instanceof Date ? value : new Date(typeof value === "string" ? value : value);
		return new Intl.DateTimeFormat(this._locale, format).format(dateValue);
	}
	number(value, format) {
		return new Intl.NumberFormat(this._locale, format).format(value);
	}
};
var resolveExpiresToTimestamp = (expires) => {
	if (typeof expires === "number") return Date.now() + expires * 1e3;
	if (typeof expires === "string") {
		const time = Date.parse(expires);
		return Number.isNaN(time) ? void 0 : time;
	}
};
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	const expiresTimestamp = resolveExpiresToTimestamp(attributes.expires);
	if (expiresTimestamp !== void 0) parts.push(`Expires=${new Date(expiresTimestamp).toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
var TREE_SHAKE_STORAGE_COOKIES = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
};
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var isStoredLocaleCached = false;
var storedLocale;
var getCachedLocaleFromStorageClient = () => {
	if (typeof window === "undefined") return getLocaleFromStorageClient(localeStorageOptions);
	if (!isStoredLocaleCached) {
		storedLocale = getLocaleFromStorageClient(localeStorageOptions);
		isStoredLocaleCached = true;
	}
	return storedLocale;
};
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	isStoredLocaleCached = false;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: resolveExpiresToTimestamp(attributes.expires)
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
};
var prototypeCache = /* @__PURE__ */ new Map();
var createIntlayerNodePrototype = (basePrototype, valuePrototype) => Object.create(new Proxy(basePrototype, {
	get: (target, property, receiver) => {
		if (typeof property !== "string" || property === "constructor" || property in target) return Reflect.get(target, property, receiver);
		const { value } = receiver;
		if (value === null || value === void 0) return void 0;
		const member = Object(value)[property];
		return typeof member === "function" ? member.bind(value) : member;
	},
	has: (target, property) => property in target || typeof property === "string" && property !== "constructor" && valuePrototype !== null && property in valuePrototype
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
});
var getIntlayerNodePrototype = (value, basePrototype = Object.prototype) => {
	const valueType = typeof value;
	const valueKey = value === null || value === void 0 ? null : valueType === "object" || valueType === "function" ? Object.getPrototypeOf(value) : valueType;
	let prototypes = prototypeCache.get(basePrototype);
	if (!prototypes) {
		prototypes = /* @__PURE__ */ new Map();
		prototypeCache.set(basePrototype, prototypes);
	}
	let prototype = prototypes.get(valueKey);
	if (!prototype) {
		prototype = createIntlayerNodePrototype(basePrototype, valueKey === null ? null : Object.getPrototypeOf(Object(value)));
		prototypes.set(valueKey, prototype);
	}
	return prototype;
};
var renderIntlayerNode = ({ children, value, additionalProps }) => Object.setPrototypeOf({
	...isValidElement(children) ? children : jsx(Fragment$1, { children }),
	value,
	...additionalProps
}, getIntlayerNodePrototype(value));
var pluginsIdentities = /* @__PURE__ */ new WeakMap();
var nextPluginsIdentity = 0;
var getPluginsCacheKey = (plugins) => {
	if (!plugins) return "base";
	const existingIdentity = pluginsIdentities.get(plugins);
	if (existingIdentity) return existingIdentity;
	nextPluginsIdentity += 1;
	const identity = `p${nextPluginsIdentity}`;
	pluginsIdentities.set(plugins, identity);
	return identity;
};
var MAX_ENTRIES_PER_DICTIONARY = 256;
var transformCache = /* @__PURE__ */ new WeakMap();
var isMemoizableDictionary = (value) => value !== null && typeof value === "object";
var getDictionaryTransformCacheKey = (locale, selectorCacheKey, plugins) => `${locale}_${selectorCacheKey}_${getPluginsCacheKey(plugins)}`;
var readTransformCache = (dictionary, cacheKey) => {
	if (!isMemoizableDictionary(dictionary)) return { hit: false };
	const entries = transformCache.get(dictionary);
	if (!entries?.has(cacheKey)) return { hit: false };
	return {
		hit: true,
		content: entries.get(cacheKey)
	};
};
var writeTransformCache = (dictionary, cacheKey, content) => {
	if (!isMemoizableDictionary(dictionary)) return content;
	let entries = transformCache.get(dictionary);
	if (!entries) {
		entries = /* @__PURE__ */ new Map();
		transformCache.set(dictionary, entries);
	}
	if (entries.size >= MAX_ENTRIES_PER_DICTIONARY) entries.clear();
	entries.set(cacheKey, content);
	return content;
};
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
var RESET = "\x1B[0m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var BEIGE = "\x1B[38;5;3m";
var getPrefix = (configPrefix) => {
	return configPrefix;
};
var logger = (content, details) => {
	const config = details?.config ?? {};
	const mode = config.mode ?? "default";
	if (mode === "disabled" || details?.isVerbose && mode !== "verbose") return;
	const prefix = getPrefix(config.prefix);
	const flatContent = prefix ? [prefix, ...[content].flat()] : [content].flat();
	const level = details?.level ?? "info";
	(config[level] ?? console[level] ?? config.log ?? console.log)(...flatContent);
};
var getAppLogger = (configuration, globalDetails) => (content, details) => logger(content, {
	...details ?? {},
	config: {
		...configuration?.log,
		...globalDetails?.config,
		...details?.config ?? {}
	}
});
var colorize = (string, color, reset) => color && typeof window === "undefined" ? `${color}${string}${reset ? typeof reset === "boolean" ? RESET : reset : RESET}` : string;
var colorizeKey = (keyPath, color = BEIGE, reset = RESET) => [keyPath].flat().map((key) => colorize(key, color, reset)).join(`, `);
colorize("✗", RED);
colorize("✓", GREEN);
colorize("⏲", BLUE);
var getDictionaries = () => ({});
var PROTOTYPE_METHOD_NAMES = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]);
var createSafeFallback = (path = "") => {
	return new Proxy((() => path), { get: (target, prop) => {
		if (prop === "toJSON" || prop === Symbol.toPrimitive || prop === "toString" || prop === "valueOf") return () => path;
		if (prop === "then") return;
		if (PROTOTYPE_METHOD_NAMES.has(prop)) return Object.prototype[prop].bind(target);
		if (prop === Symbol.iterator) return function* () {
			yield path;
		};
		return createSafeFallback(path ? `${path}.${String(prop)}` : String(prop));
	} });
};
var warnedMissingDictionaries = /* @__PURE__ */ new Set();
var getIntlayer = (key, localeOrSelector, plugins) => {
	const dictionary = getDictionaries()[key];
	if (!dictionary && true) {
		if (!warnedMissingDictionaries.has(key)) {
			getAppLogger({ log })(typeof window === "undefined" ? `Dictionary ${colorizeKey(key)} was not found. Using fallback proxy.` : `Dictionary ${key} was not found. Using fallback proxy.`, { level: "warn" });
			warnedMissingDictionaries.add(key);
		}
		return createSafeFallback(key);
	}
	return getDictionary$1(dictionary, localeOrSelector, plugins);
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (!isPlainObject(target) || !isPlainObject(source)) return target;
	let result = target;
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		if (key === "__proto__" || key === "constructor" || sourceValue === void 0) continue;
		const targetValue = target[key];
		const merged = targetValue === void 0 ? sourceValue : typeof targetValue === "object" ? deepMerge(targetValue, sourceValue) : targetValue;
		if (merged === targetValue) continue;
		if (result === target) result = { ...target };
		result[key] = merged;
	}
	return result;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (localeEl) => languageContent[localeEl];
	const exactMatch = get(locale);
	if (typeof exactMatch === "string") return exactMatch;
	const candidates = [
		locale,
		locale.split("-")[0],
		fallback,
		fallback?.split("-")[0]
	];
	const results = [];
	for (let index = 0; index < candidates.length; index++) {
		const candidate = candidates[index];
		if (!candidate || candidates.indexOf(candidate) < index) continue;
		const value = get(candidate);
		if (value === void 0) continue;
		if (typeof value === "string") {
			if (results.length === 0) return value;
			continue;
		}
		results.push(value);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var isInterpolableWrapperNode = (node) => {
	if (typeof node !== "object" || node === null || !("nodeType" in node)) return false;
	const { nodeType } = node;
	return false;
};
var getInterpolableContent = (node) => {
	if (typeof node === "string") return node;
	if (isInterpolableWrapperNode(node)) return node.nodeType === "html" ? node[HTML] : node[MARKDOWN];
};
var rebuildInterpolableContent = (node, interpolated) => {
	if (typeof node === "string") return interpolated;
	if (isInterpolableWrapperNode(node)) {
		const key = node.nodeType === "html" ? HTML : MARKDOWN;
		return {
			...node,
			[key]: interpolated
		};
	}
	return node;
};
var transformInterpolableNode = (node, values, subProps, parentPlugins, deepTransformNode) => {
	const children = rebuildInterpolableContent(node, getInsertion(getInterpolableContent(node), values));
	return deepTransformNode(children, {
		...subProps,
		plugins: parentPlugins,
		children
	});
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var isAwaitingValues = (branch) => {
	if (typeof branch !== "function") return false;
	const { value } = branch;
	return value === void 0 || typeof value === "function";
};
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const content = getTranslation(node["translation"] ?? {}, locale, fallback);
		return deepTransformNode(content, {
			...props,
			children: content,
			keyPath: [...props.keyPath, {
				type: TRANSLATION,
				key: locale
			}]
		});
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const children = getInsertion(transformedResult, values);
					return deepTransformNode(children, {
						...subProps,
						plugins: props.plugins,
						children
					});
				};
			}
		};
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
var selectorNodeTypes = [
	ENUMERATION,
	CONDITION,
	PLURAL,
	GENDER,
	SELECT
];
var bindInsertedValues = (children, result, values, areBranchesInterpolated = false) => {
	const nodeType = children?.nodeType;
	if (typeof result !== "function" || !nodeType || !selectorNodeTypes.includes(nodeType)) return result;
	const isCountSelector = nodeType === "plural" || nodeType === "enumeration";
	return (selector) => {
		if (typeof selector === "object" && selector !== null) return result({
			...values,
			...selector
		});
		if (isCountSelector) return result({
			...values,
			count: selector
		});
		const selected = result(selector);
		return !areBranchesInterpolated && isAwaitingValues(selected) ? selected(values) : selected;
	};
};
var resolveInsertedSelector = (children, result) => typeof result === "function" && selectorNodeTypes.includes(children?.nodeType ?? "") ? (values) => bindInsertedValues(children, result, values) : result;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
].filter((plugin) => plugin !== fallbackPlugin);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var transformsInProgress = /* @__PURE__ */ new WeakSet();
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = {
		locale: localeOrSelector,
		selector: void 0
	};
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, "", plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = dictionary;
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries,
			eager: !transformsInProgress.has(resolvedDictionary)
		};
		transformsInProgress.add(resolvedDictionary);
		try {
			return getContent(resolvedDictionary.content, props, appliedPlugins);
		} finally {
			if (props.eager) transformsInProgress.delete(resolvedDictionary);
		}
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
var isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean";
var insertionRegex = /\{\{\s*(.*?)\s*\}\}/g;
var splitInsertionTemplate = (template, values = {}) => {
	if (!Object.values(values).some(isComplexValue)) return {
		isSimple: true,
		parts: template.replace(insertionRegex, (_, key) => (values[key.trim()] ?? "").toString())
	};
	const chunks = template.split(insertionRegex);
	const parts = [];
	for (let i = 0; i < chunks.length; i++) if (i % 2 === 0) {
		if (chunks[i]) parts.push(chunks[i]);
	} else {
		const val = values[chunks[i].trim()];
		if (val != null) parts.push(val);
	}
	return {
		isSimple: false,
		parts
	};
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, props) => {
		return renderIntlayerNode({
			value: props.children,
			children: props.children
		});
	}
};
var reactNodePlugins = fallbackPlugin;
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
var insertionPlugin = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const result = splitAndJoinInsertion(transformedResult, values);
					return deepTransformNode(result, {
						...subProps,
						plugins: props.plugins,
						children: result
					});
				};
			}
		};
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const enabledPlugins = [
		intlayerNodePlugins,
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		reactNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	].filter((plugin) => plugin !== fallbackPlugin);
	pluginsCache.set(cacheKey, enabledPlugins);
	return enabledPlugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var getLocaleInStorage = getCachedLocaleFromStorageClient;
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	if (locales?.includes(selectedLocale)) return selectedLocale;
	const requestedLocales = [selectedLocale].flat();
	const normalize = (locale) => locale.trim().toLowerCase();
	try {
		for (const requested of requestedLocales) {
			const normalizedRequested = normalize(requested);
			const exactMatch = locales.find((locale) => normalize(locale) === normalizedRequested);
			if (exactMatch) return exactMatch;
			const [requestedLang] = normalizedRequested.split("-");
			const partialMatch = locales.find((locale) => normalize(locale).split("-")[0] === requestedLang);
			if (partialMatch) return partialMatch;
		}
	} catch {}
	return defaultLocale;
};
var IntlayerClientContext = createContext({
	get locale() {
		return getLocaleInStorage() ?? internationalization?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: true
});
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, variant, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(() => localeProp ?? getLocaleInStorage() ?? defaultLocaleProp ?? defaultLocaleConfig);
	const [adoptedLocaleProp, setAdoptedLocaleProp] = useState(localeProp);
	if (localeProp !== adoptedLocaleProp) {
		setAdoptedLocaleProp(localeProp);
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = useCallback((newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	}, [
		currentLocale,
		availableLocales,
		isCookieEnabled
	]);
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	const contextValue = useMemo(() => ({
		locale: resolvedLocale,
		setLocale,
		variant,
		disableEditor
	}), [
		resolvedLocale,
		setLocale,
		variant,
		disableEditor
	]);
	return jsx(IntlayerClientContext.Provider, {
		value: contextValue,
		children
	});
};
var IntlayerProvider = ({ children, ...props }) => jsxs(IntlayerProviderContent, {
	...props,
	children: [
		false,
		false,
		children
	]
});
var { defaultLocale, locales: availableLocales } = internationalization ?? {};
var useLocale = ({ isCookieEnabled, onLocaleChange } = {}) => {
	const { locale, setLocale: setLocaleState, isCookieEnabled: isCookieEnabledContext } = useContext(IntlayerClientContext) ?? {};
	return {
		locale,
		defaultLocale,
		availableLocales,
		setLocale: useCallback((locale) => {
			if (!availableLocales?.map(String).includes(locale)) {
				console.error(`Locale ${locale} is not available`);
				return;
			}
			setLocaleState(locale);
			setLocaleInStorage(locale, isCookieEnabled ?? isCookieEnabledContext ?? true);
			onLocaleChange?.(locale);
		}, [
			availableLocales,
			onLocaleChange,
			setLocaleState,
			isCookieEnabled
		])
	};
};
var createBoundLinguiContext = (locale, dictionaries) => {
	const instance = new I18nClass({ locale }).bindDictionaries(dictionaries);
	return {
		i18n: instance,
		_: instance._.bind(instance)
	};
};
var useDictionary = (...dictionaries) => {
	const { locale } = useLocale();
	const dictionaryKeysIdentity = dictionaries.map((dictionary) => dictionary.key).join("\0");
	return useMemo(() => createBoundLinguiContext(locale, Object.fromEntries(dictionaries.map((dictionary) => [dictionary.key, getDictionary(dictionary, locale)]))), [locale, dictionaryKeysIdentity]);
};
var getDictionaryKeys = () => {
	try {
		return Object.keys(getDictionaries());
	} catch {
		return [];
	}
};
var lookupDictionaryMessage = (id, locale) => {
	const dictionaryKeys = getDictionaryKeys();
	const dotPosition = id.indexOf(".");
	const prefix = dotPosition === -1 ? id : id.slice(0, dotPosition);
	const readDictionary = (key) => {
		try {
			return getIntlayer(key, locale);
		} catch {
			return;
		}
	};
	if (dictionaryKeys.includes(prefix)) {
		const value = navigateLinguiCatalog(readDictionary(prefix), dotPosition === -1 ? "" : id.slice(dotPosition + 1));
		if (value !== void 0) return value;
	}
	for (const key of dictionaryKeys) {
		const value = navigateLinguiCatalog(readDictionary(key), id);
		if (value !== void 0) return value;
	}
};
var collectRegistryMessages = (locale) => {
	const merged = {};
	for (const key of getDictionaryKeys()) try {
		Object.assign(merged, unwrapLinguiCatalog(getIntlayer(key, locale)));
	} catch {}
	return merged;
};
var createRegistryResolver = () => ({
	lookup: lookupDictionaryMessage,
	all: collectRegistryMessages
});
var renderTaggedTokens = (tokens, components) => tokens.map((token, tokenIndex) => {
	if (typeof token === "string") return token;
	const children = renderTaggedTokens(token.children, components);
	const component = components[token.tag];
	if (component === void 0) return jsx(Fragment, { children }, tokenIndex);
	if (typeof component === "function") return jsx(Fragment, { children: component(jsx(Fragment$1, { children })) }, tokenIndex);
	if (typeof component === "object" && component !== null && "type" in component) {
		const { type: TagComponent, props: tagProps } = component;
		return jsx(TagComponent, {
			...tagProps,
			children
		}, tokenIndex);
	}
	return jsx(Fragment, { children }, tokenIndex);
});
var renderTrans = ({ id, message, values, components, render, component: WrapperComponent }, i18n, DefaultComponent) => {
	const translation = i18n._(id, values ?? {}, { message });
	const hasComponents = components && Object.keys(components).length > 0;
	let content;
	if (hasComponents) {
		const nodes = renderTaggedTokens(parseTaggedMessage(translation), components);
		content = jsx(Fragment$1, { children: nodes });
	} else content = translation;
	const renderProps = {
		id,
		translation: content,
		children: content,
		message: message ?? null
	};
	if (typeof render === "function") return render(renderProps);
	const Wrapper = WrapperComponent ?? DefaultComponent;
	if (Wrapper) return jsx(Wrapper, {
		...renderProps,
		children: content
	});
	return jsx(Fragment$1, { children: content });
};
var TransDictionary = ({ dictionary, ...props }) => {
	const { i18n } = useDictionary(dictionary);
	const { defaultComponent } = useContext(LinguiContext) ?? {};
	return renderTrans(props, i18n, defaultComponent);
};
var setupI18n = (params) => new I18nClass({
	...params,
	registry: createRegistryResolver()
});
setupI18n({ locale: "en" });
var I18nProvider = ({ i18n, defaultComponent, children }) => {
	const buildContext = (instance) => ({
		i18n: instance,
		_: instance._.bind(instance),
		defaultComponent
	});
	const [linguiContext, setLinguiContext] = useState(() => buildContext(i18n));
	const [locale, setLocale] = useState(i18n.locale);
	useEffect(() => {
		setLinguiContext(buildContext(i18n));
		setLocale(i18n.locale);
		return i18n.on("change", () => {
			setLinguiContext(buildContext(i18n));
			setLocale(i18n.locale);
		});
	}, [i18n]);
	return jsx(LinguiContext.Provider, {
		value: linguiContext,
		children: jsx(IntlayerProvider, {
			locale,
			children
		})
	});
};
function UnderstandingImpact() {
	return jsxs("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			jsx("h2", {
				className: "text-2xl font-bold text-foreground",
				children: jsx(TransDictionary, {
					id: "understanding-impact.understandingTheImpact",
					message: "Understanding the Impact",
					dictionary: understanding_impact_default
				})
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: jsx(TransDictionary, {
							id: "understanding-impact.whyASingleLargeJson",
							message: "Why a single large JSON can hurt performance",
							dictionary: understanding_impact_default
						})
					}),
					jsx("p", {
						className: "text-sm text-muted-foreground",
						children: jsx(TransDictionary, {
							id: "understanding-impact.manyI18nLibrariesStoreTranslations",
							message: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
							dictionary: understanding_impact_default
						})
					}),
					jsxs("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsx("li", { children: jsx(TransDictionary, {
								id: "understanding-impact.theJsonMustBeParsed",
								message: "The JSON must be parsed on every page load — blocking the main thread.",
								dictionary: understanding_impact_default
							}) }),
							jsx("li", { children: jsx(TransDictionary, {
								id: "understanding-impact.contextBasedArchitecturesCanCause",
								message: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
								dictionary: understanding_impact_default
							}) }),
							jsx("li", { children: jsx(TransDictionary, {
								id: "understanding-impact.duringServerSideRenderingThe",
								message: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
								dictionary: understanding_impact_default
							}) })
						]
					})
				]
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: jsx(TransDictionary, {
							id: "understanding-impact.theTradeOffsOfDynamic",
							message: "The trade-offs of dynamic loading",
							dictionary: understanding_impact_default
						})
					}),
					jsx("p", {
						className: "text-sm text-muted-foreground",
						children: jsx(TransDictionary, {
							id: "understanding-impact.splittingTranslationsIntoPerRoute",
							message: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
							dictionary: understanding_impact_default
						})
					}),
					jsxs("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsxs("li", { children: [
								jsx("strong", {
									className: "text-foreground",
									children: jsx(TransDictionary, {
										id: "understanding-impact.waterfallRequests",
										message: "Waterfall requests:",
										dictionary: understanding_impact_default
									})
								}),
								" ",
								jsx(TransDictionary, {
									id: "understanding-impact.waterfallRequestsDesc",
									message: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
									dictionary: understanding_impact_default
								})
							] }),
							jsxs("li", { children: [
								jsx("strong", {
									className: "text-foreground",
									children: jsx(TransDictionary, {
										id: "understanding-impact.flashOfUntranslatedContentFouc",
										message: "Flash of untranslated content (FOUC):",
										dictionary: understanding_impact_default
									})
								}),
								" ",
								jsx(TransDictionary, {
									id: "understanding-impact.flashOfUntranslatedContentFoucDesc",
									message: "users may briefly see translation keys or a fallback language before the chunk arrives.",
									dictionary: understanding_impact_default
								})
							] }),
							jsxs("li", { children: [
								jsx("strong", {
									className: "text-foreground text-nowrap",
									children: jsx(TransDictionary, {
										id: "understanding-impact.cacheInvalidation",
										message: "Cache invalidation:",
										dictionary: understanding_impact_default
									})
								}),
								" ",
								jsx(TransDictionary, {
									id: "understanding-impact.cacheInvalidationDesc",
									message: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
									dictionary: understanding_impact_default
								})
							] })
						]
					})
				]
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [jsx("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: jsx(TransDictionary, {
						id: "understanding-impact.whatThisBenchmarkMeasures",
						message: "What this benchmark measures",
						dictionary: understanding_impact_default
					})
				}), jsx("p", {
					className: "text-sm text-muted-foreground",
					children: jsx(TransDictionary, {
						id: "understanding-impact.thisTestAppProvidesA",
						message: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
						dictionary: understanding_impact_default
					})
				})]
			})
		]
	});
}
function initLingui(locale, _messages) {
	const lingui = setupI18n();
	lingui.activate(locale);
	return lingui;
}
function Wrapper({ children }) {
	const i18n = useMemo(() => initLingui("en"), []);
	return jsx(I18nProvider, {
		i18n,
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(UnderstandingImpact, {}) });
}
export { Wrapped as default };
