import { a as e, c as t, f as n, h as r, i, l as a, n as o, o as s, p as c, r as l, s as u, t as d } from "./getContent-C3Acg06C.js";
import { a as f, o as p, s as m } from "./nodeType-C3vWW1Sy.js";
import { Dynamic as h, createComponent as g, insert as _, mergeProps as v, template as y } from "solid-js/web";
import { Suspense as b, createContext as x, createMemo as S, lazy as C, useContext as ee } from "solid-js";
var w = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"understandingTheImpact\":\"Understanding the Impact\",\"whyASingleLargeJson\":\"Why a single large JSON can hurt performance\",\"manyI18nLibrariesStoreTranslations\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"theJsonMustBeParsed\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"contextBasedArchitecturesCanCause\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"duringServerSideRenderingThe\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"theTradeOffsOfDynamic\":\"The trade-offs of dynamic loading\",\"splittingTranslationsIntoPerRoute\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"waterfallRequests\":\"Waterfall requests:\",\"theAppMustFirstLoad\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"flashOfUntranslatedContentFouc\":\"Flash of untranslated content (FOUC):\",\"usersMayBrieflySeeTranslation\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"cacheInvalidation\":\"Cache invalidation:\",\"updatingTranslationsRequiresCacheBusting\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\",\"whatThisBenchmarkMeasures\":\"What this benchmark measures\",\"thisTestAppProvidesA\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"},\"fr\":{\"understandingTheImpact\":\"Comprendre l'impact\",\"whyASingleLargeJson\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"manyI18nLibrariesStoreTranslations\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"theJsonMustBeParsed\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"contextBasedArchitecturesCanCause\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"duringServerSideRenderingThe\":\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"theTradeOffsOfDynamic\":\"Les compromis du chargement dynamique\",\"splittingTranslationsIntoPerRoute\":\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\",\"waterfallRequests\":\"Requêtes en cascade :\",\"theAppMustFirstLoad\":\"l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ce qui ajoute des allers-retours sur le réseau.\",\"flashOfUntranslatedContentFouc\":\"Flash de contenu non traduit (FOUC) :\",\"usersMayBrieflySeeTranslation\":\"les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de secours avant que le morceau n'arrive.\",\"cacheInvalidation\":\"Invalidation du cache :\",\"updatingTranslationsRequiresCacheBusting\":\"la mise à jour des traductions nécessite des stratégies d'invalidation du cache (cache-busting) pour garantir que les utilisateurs reçoivent un contenu frais sans télécharger à nouveau les morceaux inchangés.\",\"whatThisBenchmarkMeasures\":\"Ce que ce benchmark mesure\",\"thisTestAppProvidesA\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"},\"es\":{\"understandingTheImpact\":\"Entendiendo el impacto\",\"whyASingleLargeJson\":\"Por qué un único JSON grande puede perjudicar el rendimiento\",\"manyI18nLibrariesStoreTranslations\":\"Muchas bibliotecas i18n almacenan traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"theJsonMustBeParsed\":\"El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\",\"contextBasedArchitecturesCanCause\":\"Las arquitecturas basadas en el contexto pueden causar re-renderizaciones en cascada cuando cambia la configuración regional, porque cada consumidor es notificado incluso si sus claves específicas no cambiaron.\",\"duringServerSideRenderingThe\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.\",\"theTradeOffsOfDynamic\":\"Los compromisos de la carga dinámica\",\"splittingTranslationsIntoPerRoute\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"waterfallRequests\":\"Solicitudes en cascada:\",\"theAppMustFirstLoad\":\"la aplicación debe cargarse primero, determinar la configuración regional y luego buscar el fragmento correcto, lo que añade recorridos de red.\",\"flashOfUntranslatedContentFouc\":\"Destello de contenido no traducido (FOUC):\",\"usersMayBrieflySeeTranslation\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\",\"cacheInvalidation\":\"Invalidación de caché:\",\"updatingTranslationsRequiresCacheBusting\":\"actualizar las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido nuevo sin volver a descargar fragmentos sin cambios.\",\"whatThisBenchmarkMeasures\":\"Qué mide este benchmark\",\"thisTestAppProvidesA\":\"Esta aplicación de prueba proporciona un entorno controlado (10 páginas con contenido realista) para comparar bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y representar contenido traducido y la efectividad de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"},\"de\":{\"understandingTheImpact\":\"Die Auswirkungen verstehen\",\"whyASingleLargeJson\":\"Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\",\"manyI18nLibrariesStoreTranslations\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:\",\"theJsonMustBeParsed\":\"Das JSON muss bei jedem Laden der Seite geparst werden — was den Haupt-Thread blockiert.\",\"contextBasedArchitecturesCanCause\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, selbst wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"duringServerSideRenderingThe\":\"Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Größe des Dokuments erhöht, das heruntergeladen und hydriert werden muss.\",\"theTradeOffsOfDynamic\":\"Die Kompromisse beim dynamischen Laden\",\"splittingTranslationsIntoPerRoute\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Aber es bringt neue Herausforderungen mit sich:\",\"waterfallRequests\":\"Waterfall-Anfragen:\",\"theAppMustFirstLoad\":\"die App muss zuerst geladen werden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was Netzwerk-Roundtrips hinzufügt.\",\"flashOfUntranslatedContentFouc\":\"Flash of untranslated content (FOUC):\",\"usersMayBrieflySeeTranslation\":\"Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Ersatzsprache, bevor der Chunk eintrifft.\",\"cacheInvalidation\":\"Cache-Invalidierung:\",\"updatingTranslationsRequiresCacheBusting\":\"Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\",\"whatThisBenchmarkMeasures\":\"Was dieser Benchmark misst\",\"thisTestAppProvidesA\":\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt — um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"},\"it\":{\"understandingTheImpact\":\"Comprendere l'impatto\",\"whyASingleLargeJson\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"manyI18nLibrariesStoreTranslations\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:\",\"theJsonMustBeParsed\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"contextBasedArchitecturesCanCause\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la lingua cambia, perché ogni consumatore viene informato anche se le sue chiavi specifiche non sono cambiate.\",\"duringServerSideRenderingThe\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.\",\"theTradeOffsOfDynamic\":\"I compromessi del caricamento dinamico\",\"splittingTranslationsIntoPerRoute\":\"La suddivisione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"waterfallRequests\":\"Richieste waterfall:\",\"theAppMustFirstLoad\":\"l'app deve prima caricarsi, determinare la lingua, quindi recuperare il chunk corretto, aggiungendo round-trip di rete.\",\"flashOfUntranslatedContentFouc\":\"Flash di contenuti non tradotti (FOUC):\",\"usersMayBrieflySeeTranslation\":\"gli utenti potrebbero vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\",\"cacheInvalidation\":\"Invalidazione della cache:\",\"updatingTranslationsRequiresCacheBusting\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i chunk invariati.\",\"whatThisBenchmarkMeasures\":\"Cosa misura questo benchmark\",\"thisTestAppProvidesA\":\"Questa app di test fornisce un ambiente controllato (10 pagine con contenuti realistici) per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo speso per l'analisi e il rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\"},\"pt\":{\"understandingTheImpact\":\"Entendendo o impacto\",\"whyASingleLargeJson\":\"Por que um único JSON grande pode perjudicar o desempenho\",\"manyI18nLibrariesStoreTranslations\":\"Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando esse objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\",\"theJsonMustBeParsed\":\"O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\",\"contextBasedArchitecturesCanCause\":\"Arquiteturas baseadas em contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\",\"duringServerSideRenderingThe\":\"Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\",\"theTradeOffsOfDynamic\":\"Os trade-offs do carregamento dinâmico\",\"splittingTranslationsIntoPerRoute\":\"Dividir traduções em blocos por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\",\"waterfallRequests\":\"Requisições em cascata:\",\"theAppMustFirstLoad\":\"a aplicação deve carregar primeiro, determinar o idioma e depois buscar o bloco correto — adicionando viagens de ida e volta na rede.\",\"flashOfUntranslatedContentFouc\":\"Flash de conteúdo não traduzido (FOUC):\",\"usersMayBrieflySeeTranslation\":\"os usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes que o bloco chegue.\",\"cacheInvalidation\":\"Invalidação de cache:\",\"updatingTranslationsRequiresCacheBusting\":\"a atualização das traduções requer estratégias de invalidação de cache para garantir que os usuários recebam conteúdo atualizado sem baixar novamente blocos inalterados.\",\"whatThisBenchmarkMeasures\":\"O que este benchmark mede\",\"thisTestAppProvidesA\":\"Este aplicativo de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu pacote JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada ao mesmo aplicativo para que os resultados sejam diretamente comparáveis.\"},\"zh\":{\"understandingTheImpact\":\"了解影响\",\"whyASingleLargeJson\":\"为什么单个大型 JSON 会损害性能\",\"manyI18nLibrariesStoreTranslations\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：\",\"theJsonMustBeParsed\":\"JSON 必须在每次页面加载时解析——阻塞主线程。\",\"contextBasedArchitecturesCanCause\":\"当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使其特定键未更改，每个消费者也会收到通知。\",\"duringServerSideRenderingThe\":\"在服务器端渲染期间，整个字典被序列化为 HTML 负载，增加了必须下载和水合的文档大小。\",\"theTradeOffsOfDynamic\":\"动态加载的权衡\",\"splittingTranslationsIntoPerRoute\":\"将翻译拆分为每个路由或每个命名空间的块可以显着减少初始负载。但它引入了新的挑战：\",\"waterfallRequests\":\"瀑布请求：\",\"theAppMustFirstLoad\":\"应用程序必须首先加载，确定语言环境，然后获取正确的块——这增加了网络往返。\",\"flashOfUntranslatedContentFouc\":\"未翻译内容的闪烁 (FOUC)：\",\"usersMayBrieflySeeTranslation\":\"在块到达之前，用户可能会短暂地看到翻译键或回退语言。\",\"cacheInvalidation\":\"缓存失效：\",\"updatingTranslationsRequiresCacheBusting\":\"更新翻译需要缓存失效策略，以确保用户在不重新下载未更改块的情况下获得新鲜内容。\",\"whatThisBenchmarkMeasures\":\"此基准测试衡量什么\",\"thisTestAppProvidesA\":\"此测试应用程序提供了一个受控环境——包含 10 个具有真实内容的页面——以便从三个维度比较 i18n 库：它们为 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成到同一个应用程序中，因此结果具有直接可比性。\"},\"ja\":{\"understandingTheImpact\":\"影響を理解する\",\"whyASingleLargeJson\":\"なぜ単一の大きなJSONがパフォーマンスを低下させるのか\",\"manyI18nLibrariesStoreTranslations\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキー）場合、翻訳を消費するすべてのコンポーネントが辞书全体への参照を保持します。これは以下のことを意味します：\",\"theJsonMustBeParsed\":\"JSONはページがロードされるたびに解析される必要があり、メインスレッドをブロックします。\",\"contextBasedArchitecturesCanCause\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的なリレンダリングが発生する可能性があります。\",\"duringServerSideRenderingThe\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードしてハイドレーションする必要があるドキュメントサイズが増加します。\",\"theTradeOffsOfDynamic\":\"動的ロードのトレードオフ\",\"splittingTranslationsIntoPerRoute\":\"翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを大幅に削減できます。しかし、それは新たな課題をもたらします：\",\"waterfallRequests\":\"ウォーターフォールリクエスト：\",\"theAppMustFirstLoad\":\"アプリは最初にロードし、ロケールを決定してから、適切なチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\",\"flashOfUntranslatedContentFouc\":\"翻訳されていないコンテンツのちらつき（FOUC）：\",\"usersMayBrieflySeeTranslation\":\"チャンクが到着する前に、ユーザーは翻訳キーやフォールバック言語を一時的に目にすることがあります。\",\"cacheInvalidation\":\"キャッシュの無効化：\",\"updatingTranslationsRequiresCacheBusting\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードすることなく、ユーザーが最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。\",\"whatThisBenchmarkMeasures\":\"このベンチマークが測定するもの\",\"thisTestAppProvidesA\":\"このテストアプリは、制御された環境（現実的なコンテンツを含む10ページ）を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重み、翻訳されたコンテンツの解析とレンダリングに費やされる時間、およびコード分割と遅延ロード戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\"},\"ko\":{\"understandingTheImpact\":\"영향 이해\",\"whyASingleLargeJson\":\"단일 대용량 JSON이 성능을 저하시킬 수 있는 이유\",\"manyI18nLibrariesStoreTranslations\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 때(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유합니다. 이는 다음을 의미합니다.\",\"theJsonMustBeParsed\":\"JSON은 페이지를 로드할 때마다 파싱되어야 하므로 메인 스レッド을 차단합니다.\",\"contextBasedArchitecturesCanCause\":\"컨텍스트 기반 아키텍처는 로케일이 변경될 때 계단식 리렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.\",\"duringServerSideRenderingThe\":\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 수화해야 하는 문서 크기가 커집니다.\",\"theTradeOffsOfDynamic\":\"동적 로드의 트레이드오프\",\"splittingTranslationsIntoPerRoute\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 이는 새로운 과제를 안겨줍니다.\",\"waterfallRequests\":\"워터폴 요청:\",\"theAppMustFirstLoad\":\"앱은 먼저 로드되어 로케일을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\",\"flashOfUntranslatedContentFouc\":\"번역되지 않은 콘텐츠의 플래시(FOUC):\",\"usersMayBrieflySeeTranslation\":\"청크가 도착하기 전에 사용자는 번역 키나 폴백 언어를 잠시 볼 수 있습니다.\",\"cacheInvalidation\":\"캐시 무효화:\",\"updatingTranslationsRequiresCacheBusting\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고 최신 콘텐츠를 받을 수 있도록 캐시 버스팅 전략이 필요합니다.\",\"whatThisBenchmarkMeasures\":\"이 벤치마크가 측정하는 것\",\"thisTestAppProvidesA\":\"이 테스트 앱은 10개의 실제 콘텐츠 페이지가 포함된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다. JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 있으므로 결과를 직접 비교할 수 있습니다.\"},\"ru\":{\"understandingTheImpact\":\"Понимание влияния\",\"whyASingleLargeJson\":\"Почему один большой JSON может снизить производительность\",\"manyI18nLibrariesStoreTranslations\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"theJsonMustBeParsed\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"contextBasedArchitecturesCanCause\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"duringServerSideRenderingThe\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"theTradeOffsOfDynamic\":\"Компромиссы динамической загрузки\",\"splittingTranslationsIntoPerRoute\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"waterfallRequests\":\"Каскадные запросы (Waterfall requests):\",\"theAppMustFirstLoad\":\"приложение должно сначала загрузиться, определить локаль, а затем получить нужный чанк — это добавляет сетевые задержки.\",\"flashOfUntranslatedContentFouc\":\"Мерцание непереведенного контента (FOUC):\",\"usersMayBrieflySeeTranslation\":\"пользователи могут на мгновение увидеть ключи перевода или резервный язык до того, как придет чанк.\",\"cacheInvalidation\":\"Инвалидация кэша:\",\"updatingTranslationsRequiresCacheBusting\":\"обновление переводов требует стратегий аннулирования кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных чанков.\",\"whatThisBenchmarkMeasures\":\"Что измеряет этот бенчмарк\",\"thisTestAppProvidesA\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека измеряется в идентичных условиях.\"}}}"),
	localIds: ["understanding-impact::local::src/components/pages/home/understandingImpact.content.ts"]
}, T = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, E = (e) => {
	if (typeof e == "string") return e;
	let { type: t, props: n } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(E(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(e);
	return h({
		component: t ?? "span",
		...n,
		children: n.children
	});
}, D = "\x1B[0m", O = "\x1B[34m", k = "\x1B[31m", A = "\x1B[32m", j = (e, t, n) => t ? `${t}${e}${n ? typeof n == "boolean" ? D : n : D}` : e;
j("✗", k), j("✓", A), j("⏲", O);
var M = (e = "") => new Proxy(() => e, {
	get: (t, n) => {
		if (n === "toJSON" || n === Symbol.toPrimitive || n === "toString") return () => e;
		if (n !== "then") return n === Symbol.iterator ? function* () {
			yield e;
		} : M(e ? `${e}.${String(n)}` : String(n));
	},
	apply: () => e
}), N = (e, t, n = d(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return o(e.content, r, n);
}, P = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", F = /\{\{\s*(.*?)\s*\}\}/g, I = (e, t = {}) => {
	if (!Object.values(t).some(P)) return {
		isSimple: !0,
		parts: e.replace(F, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(F), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, te = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false", R = !0, z = !0, B = !0, V = !0, H = null, U = null, W = null, G = null, K = null;
V || (H = C(() => import("./ContentSelector--hRpRV2o.js").then((e) => ({ default: e.ContentSelector })))), R || (U = C(() => import("./MarkdownRenderer-B7hyvLDf.js").then((e) => ({ default: e.MarkdownMetadataRenderer }))), W = C(() => import("./MarkdownRenderer-B7hyvLDf.js").then((e) => ({ default: e.MarkdownRenderer }))), import("./markdown-Cvh9lBUG.js").then((e) => {
	K = e.getMarkdownMetadata;
})), z || (G = C(() => import("./HTMLRenderer-C-wPH0rg.js").then((e) => ({ default: e.HTMLRenderer }))));
var q = te ? e : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...r }) => T({
		...r,
		value: r.children,
		children: !V && n.enabled ? g(b, {
			get fallback() {
				return r.children;
			},
			get children() {
				return g(H, v(r, { get children() {
					return r.children;
				} }));
			}
		}) : r.children
	})
}, J = L ? e : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...r }) => T({
		...r,
		value: "[[solid-element]]",
		children: !V && n.enabled ? g(b, {
			get fallback() {
				return typeof Node < "u" && e instanceof Node ? e : E(e);
			},
			get children() {
				return g(H, v(r, { get children() {
					return typeof Node < "u" && e instanceof Node ? e : E(e);
				} }));
			}
		}) : typeof Node < "u" && e instanceof Node ? e : E(e)
	})
}, Y = (e, t) => {
	let n = I(e, t);
	return n.isSimple, n.parts;
}, X = B ? e : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: p }], i = e[p];
		return (e) => {
			let a = {
				id: "insertion-string-plugin",
				canHandle: (e) => typeof e == "string",
				transform: (n, r, i) => {
					let a = Y(i(n, {
						...r,
						children: n,
						plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
					}), e);
					return i(a, {
						...r,
						plugins: t.plugins,
						children: a
					});
				}
			};
			return n(i, {
				...t,
				children: i,
				keyPath: r,
				plugins: [a, ...t.plugins ?? []]
			});
		};
	}
}, Z = R ? e : {
	id: "markdown-string-plugin",
	canHandle: (e) => typeof e == "string",
	transform: (e, t, r) => {
		let { plugins: i, ...a } = t, o = r(K?.(e) ?? {}, {
			plugins: [{
				id: "markdown-metadata-plugin",
				canHandle: (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || !e,
				transform: (t, r) => T({
					...r,
					value: t,
					children: !V && n.enabled ? g(ContentSelector, v(a, { get children() {
						return g(b, {
							fallback: e,
							get children() {
								return g(U, v(a, {
									get metadataKeyPath() {
										return r.keyPath;
									},
									children: e
								}));
							}
						});
					} })) : g(b, {
						fallback: e,
						get children() {
							return g(U, v(a, {
								get metadataKeyPath() {
									return r.keyPath;
								},
								children: e
							}));
						}
					})
				})
			}],
			dictionaryKey: a.dictionaryKey,
			keyPath: []
		}), s = (r) => T({
			...t,
			value: e,
			children: !V && n.enabled ? g(b, {
				fallback: e,
				get children() {
					return g(H, v(a, { get children() {
						return g(W, v(a, {
							components: r,
							children: e
						}));
					} }));
				}
			}) : g(b, {
				fallback: e,
				get children() {
					return g(W, v(a, {
						components: r,
						children: e
					}));
				}
			}),
			additionalProps: { metadata: o }
		}), c = s();
		return new Proxy(c, { get(t, n, r) {
			return n === "value" ? e : n === "metadata" ? o : n === "use" ? (e) => s(e) : Reflect.get(t, n, r);
		} });
	}
}, ne = R ? e : {
	id: "markdown-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "markdown",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m];
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [Z, ...t.plugins ?? []]
		});
	}
}, re = z ? e : {
	id: "html-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "html",
	transform: (e, t) => {
		let r = e[f], { plugins: i, ...a } = t, o = (e) => T({
			...a,
			value: r,
			children: !V && n.enabled ? g(b, {
				fallback: r,
				get children() {
					return g(H, v(a, { get children() {
						return g(G, v(a, {
							html: r,
							components: e
						}));
					} }));
				}
			}) : g(b, {
				fallback: r,
				get children() {
					return g(G, v(a, {
						html: r,
						components: e
					}));
				}
			})
		}), s = [o()];
		return new Proxy(s, { get(e, t, n) {
			return t === "value" ? r : t === "use" ? (e) => o(e) : Reflect.get(e, t, n);
		} });
	}
}, Q = /* @__PURE__ */ new Map(), ie = (e, n = !0) => {
	let r = `${e ?? c.defaultLocale}_${n}`;
	if (Q.has(r)) return Q.get(r);
	let o = [
		a(e ?? c.defaultLocale, n ? c.defaultLocale : void 0),
		i,
		l,
		t(e ?? c.defaultLocale),
		s,
		u,
		q,
		J,
		X,
		ne,
		re
	];
	return Q.set(r, o), o;
}, ae = (e, t) => N(e, t, ie(t)), oe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var se = (e = $) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!oe) for (let t = 0; t < (r.storage.cookies ?? []).length; t++) try {
		let i = e?.getCookie?.(r.storage.cookies[t].name);
		if (n(i)) return i;
	} catch {}
}, $ = {
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
}, ce = se($), le = x({
	locale: () => ce ?? c?.defaultLocale,
	setLocale: () => null
}), ue = (e, t) => {
	let n = ee(le) ?? {};
	return S(() => ae(e, t ?? n?.locale?.()));
}, { defaultLocale: de, locales: fe } = c, pe = y("<section class=\"mb-16 mx-auto max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"></h2><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"><li></li><li></li><li></li></ul></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"><li><strong class=text-foreground></strong></li><li><strong class=text-foreground></strong> </li><li><strong class=text-foreground></strong></li></ul></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">");
function me() {
	let e = ue(w);
	return (() => {
		var t = pe(), n = t.firstChild, r = n.nextSibling, i = r.firstChild, a = i.nextSibling, o = a.nextSibling.firstChild, s = o.nextSibling, c = s.nextSibling, l = r.nextSibling, u = l.firstChild, d = u.nextSibling, f = d.nextSibling.firstChild, p = f.firstChild, m = f.nextSibling, h = m.firstChild;
		h.nextSibling;
		var g = m.nextSibling, v = g.firstChild, y = l.nextSibling.firstChild, b = y.nextSibling;
		return _(n, () => e().understandingTheImpact), _(i, () => e().whyASingleLargeJson), _(a, () => e().manyI18nLibrariesStoreTranslations), _(o, () => e().theJsonMustBeParsed), _(s, () => e().contextBasedArchitecturesCanCause), _(c, () => e().duringServerSideRenderingThe), _(u, () => e().theTradeOffsOfDynamic), _(d, () => e().splittingTranslationsIntoPerRoute), _(p, () => e().waterfallRequests), _(f, () => e().theAppMustFirstLoad, null), _(h, () => e().flashOfUntranslatedContentFouc), _(m, () => e().usersMayBrieflySeeTranslation, null), _(v, () => e().cacheInvalidation), _(g, () => e().updatingTranslationsRequiresCacheBusting, null), _(y, () => e().whatThisBenchmarkMeasures), _(b, () => e().thisTestAppProvidesA), t;
	})();
}
export { me as default };
import "solid-js/web";
var e = (e) => e.children;
export { e as ContentSelector };
import { Dynamic as e, createComponent as t, mergeProps as n } from "solid-js/web";
import { createContext as r, useContext as i } from "solid-js";
var a = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, o = /* @__PURE__ */ new Map(), s = (e) => {
	if (o.has(e)) return o.get(e);
	if (typeof e != "string") return [];
	let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, s = t.exec(e), c = (e) => {
		(r.length > 0 ? r[r.length - 1].children : n).push(e);
	};
	for (; s !== null;) {
		let [n, o, l, u, d] = s, f = s.index;
		f > i && c(e.slice(i, f));
		let p = o === "/", m = d === "/" || u.trim().endsWith("/") || n.endsWith("/>"), h = u.trim().replace(/\/$/, "").trim();
		if (p) {
			let e = r[r.length - 1];
			if (e && e.tagName === l) {
				let e = r.pop();
				e && c({
					tagName: e.tagName,
					props: e.props,
					children: e.children
				});
			}
		} else if (m) c({
			tagName: l,
			props: a(h),
			children: []
		});
		else {
			let e = a(h);
			r.push({
				tagName: l,
				children: [],
				props: e
			});
		}
		i = f + n.length, s = t.exec(e);
	}
	for (i < e.length && c(e.slice(i)); r.length > 0;) {
		let e = r.pop();
		e && c({
			tagName: e.tagName,
			props: e.props,
			children: e.children
		});
	}
	return o.set(e, n), n;
}, c = (e, t) => {
	let n = s(e), r = 0, i = (e) => {
		if (typeof e == "string") return e;
		let { tagName: n, props: a, children: o } = e, s = o.flatMap(i), c = r++, l = t[n];
		if (!l) {
			let e = n.toLowerCase(), r = Object.keys(t).find((t) => t.toLowerCase() === e);
			r && (l = t[r]);
		}
		let u = `html-tag-${n}-${c}`;
		if (typeof l == "function") return l({
			...a,
			children: s,
			key: u
		});
		if (typeof l == "string") {
			let e = t[l];
			return typeof e == "function" ? e({
				...a,
				children: s,
				key: u
			}) : s;
		}
		if (typeof l == "object" && l && "tag" in l) {
			let { tag: e, props: n } = l, r = t[e];
			return typeof r == "function" ? r({
				...a,
				...n,
				children: s,
				key: u
			}) : s;
		}
		return s;
	}, a = n.flatMap(i);
	return a.length === 1 ? a[0] : a;
}, l = r(), u = () => i(l), d = (r, { components: i = {} } = {}) => {
	let a = Object.fromEntries(Object.entries(i).filter(([, e]) => e).map(([r, i]) => [r, (r) => t(e, n({ component: i }, r))]));
	return c(r, new Proxy(a, { get(r, i) {
		if (typeof i == "string" && i in r) return r[i];
		if (typeof i == "string" && /^[a-z][a-z0-9]*$/.test(i)) return (r) => t(e, n({ component: i }, r));
	} }));
}, f = ({ components: e } = {}) => {
	let t = u();
	return (n) => d(n, { components: {
		...t?.components,
		...e
	} });
}, p = (e) => f({ components: e.components || e.userComponents })(e.children || e.html || "");
export { p as HTMLRenderer };
import { getMarkdownMetadata as e } from "./markdown-Cvh9lBUG.js";
import { t } from "./getContentNodeByKeyPath-CUx7y53_.js";
import { createComponent as n } from "solid-js/web";
import { Suspense as r, createContext as i, createMemo as a, createResource as o, useContext as s } from "solid-js";
var c = i(), l = () => {
	let e = s(c);
	if (!e) throw Error("useMarkdown must be used within a MarkdownProvider. To fix this error, wrap your component with <MarkdownProvider>.");
	return e;
}, u = (e) => {
	let t = s(c), { renderMarkdown: i } = l(), [a] = o(() => [
		e.children,
		e.forceBlock,
		e.preserveFrontmatter,
		e.tagfilter,
		e.components,
		e.wrapper
	], ([e, n, r, a, o, s]) => i(e, {
		forceBlock: n,
		preserveFrontmatter: r,
		tagfilter: a
	}, {
		...t?.components ?? {},
		...o ?? {}
	}, s));
	return n(r, {
		fallback: null,
		get children() {
			return a();
		}
	});
}, d = (n) => {
	let r = a(() => e(n.children));
	return a(() => t(r(), n.metadataKeyPath))();
};
export { d as MarkdownMetadataRenderer, u as MarkdownRenderer };
import { d as e, f as t, n, t as r } from "./getContent-C3Acg06C.js";
import { u as i } from "./nodeType-C3vWW1Sy.js";
import { t as a } from "./getContentNodeByKeyPath-CUx7y53_.js";
var o = (e, t) => e.every((e, n) => t[n] && t[n].key === e.key && t[n].type === e.type), s = (e, t) => {
	try {
		let n = new URL(e), r = new URL(t);
		if (n.protocol !== r.protocol || n.hostname !== r.hostname || n.port !== r.port) return !1;
		let i = n.pathname.replace(/\/$/, ""), a = r.pathname.replace(/\/$/, "");
		return !(i !== "" && a !== "" && i !== a);
	} catch (n) {
		return console.error("Invalid URL(s)", n, {
			url1: e,
			url2: t
		}), !1;
	}
}, c = (e) => {
	let t = new MouseEvent("mousedown", {
		bubbles: !0,
		cancelable: !0,
		view: window
	}), n = new MouseEvent("click", {
		bubbles: !0,
		cancelable: !0,
		view: window
	});
	Object.assign(n, { iframeData: e }), Object.assign(t, { iframeData: e }), window.dispatchEvent(n), window.dispatchEvent(t);
}, l = "__intlayer_editor_manager__", u = "__intlayer_editor_manager_events__", d = () => {
	if (typeof window > "u") return new EventTarget();
	let e = window;
	return e[u] || (e[u] = new EventTarget()), e[u];
}, f = () => typeof window > "u" ? null : window[l] ?? null, p = (e) => {
	if (typeof window < "u") {
		let t = window;
		t[l] = e;
	}
	d().dispatchEvent(new CustomEvent("change", { detail: e }));
}, m = (e) => {
	let t = d(), n = (t) => {
		e(t.detail);
	};
	return t.addEventListener("change", n), () => {
		t.removeEventListener("change", n);
	};
}, h = typeof HTMLElement < "u" ? HTMLElement : class {}, g = class extends h {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = !1;
	_isInIframe = !1;
	_isSelected = !1;
	_editedValue = void 0;
	_renderState = null;
	_selector = null;
	_unsubManager = null;
	_unsubEnabled = null;
	_unsubFocused = null;
	_unsubEditedContent = null;
	static get observedAttributes() {
		return ["key-path", "dictionary-key"];
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e;
		let t = f();
		t && this._updateEditedValue(t);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e;
		let t = f();
		t && this._updateEditedValue(t);
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t);
	}
	attributeChangedCallback(e, t, n) {
		if (e === "key-path") {
			this._keyPathJson = n ?? "[]";
			let e = f();
			e && this._updateEditedValue(e);
		} else if (e === "dictionary-key") {
			this._dictionaryKey = n ?? "";
			let e = f();
			e && this._updateEditedValue(e);
		}
	}
	connectedCallback() {
		typeof window < "u" && (this._isInIframe = window.self !== window.top), this._subscribeToManager(), this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((e) => e.type !== i);
	}
	_updateEditedValue(e) {
		let t = this._getFilteredKeyPath();
		if (!this._dictionaryKey || t.length === 0) {
			this._editedValue = void 0, this._render();
			return;
		}
		let n = this._getRawKeyPath(), r = n[n.length - 1]?.type;
		if (r === "markdown" || r === "html" || r === "insertion" || r === "file") {
			this._editedValue = void 0, this._render();
			return;
		}
		let a = e.getContentValue(this._dictionaryKey, t);
		if (typeof a == "object" && a && a.nodeType === "translation") {
			let t = e.currentLocale.value;
			a = t ? a[i][t] : void 0;
		}
		this._editedValue = a, this._render();
	}
	_updateIsSelected(e) {
		if (!e) {
			this._isSelected = !1, this._updateSelectorAttr();
			return;
		}
		let t = this._getFilteredKeyPath();
		this._isSelected = e.dictionaryKey === this._dictionaryKey && (e.keyPath?.length ?? 0) > 0 && o(e.keyPath ?? [], t), this._updateSelectorAttr();
	}
	_updateSelectorAttr() {
		this._selector && (this._isSelected ? this._selector.setAttribute("is-selecting", "") : this._selector.removeAttribute("is-selecting"));
	}
	_subscribeToManager() {
		let e = f();
		e && this._setupManagerSubscriptions(e), this._unsubManager = m((e) => {
			this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editorEnabled = !1, this._isSelected = !1, this._editedValue = void 0, this._render());
		});
	}
	_setupManagerSubscriptions(e) {
		this._editorEnabled = e.editorEnabled.value ?? !1, this._updateIsSelected(e.focusedContent.value), this._updateEditedValue(e);
		let t = (e) => {
			this._editorEnabled = e.detail, this._render();
		}, n = (e) => {
			this._updateIsSelected(e.detail);
		}, r = () => {
			this._updateEditedValue(e);
		};
		e.editorEnabled.addEventListener("change", t), e.focusedContent.addEventListener("change", n), e.editedContent.addEventListener("change", r), this._unsubEnabled = () => e.editorEnabled.removeEventListener("change", t), this._unsubFocused = () => e.focusedContent.removeEventListener("change", n), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", r);
	}
	_handlePress(e) {
		e.stopPropagation();
		let t = f();
		t && t.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation(), f()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation(), f()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", null);
	}
	_render() {
		let e = this._isInIframe && this._editorEnabled, t = this._editedValue, n = e ? typeof t == "string" || typeof t == "number" || typeof t == "boolean" ? "wrapped-text" : "wrapped-slot" : "simple";
		if (this._renderState !== n) {
			this._rebuildContent(n);
			return;
		}
		n !== "simple" && this._selector && (this._updateSelectorAttr(), n === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE && (this._selector.firstChild.data = String(t)));
	}
	_rebuildContent(e) {
		let t = this.shadowRoot;
		for (; t.childNodes.length > 1;) t.removeChild(t.lastChild);
		if (this._selector = null, e === "simple") t.appendChild(document.createElement("slot"));
		else {
			let n = document.createElement("intlayer-content-selector");
			this._selector = n, this._isSelected && n.setAttribute("is-selecting", ""), n.addEventListener("intlayer:press", (e) => this._handlePress(e)), n.addEventListener("intlayer:hover", (e) => this._handleHover(e)), n.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e)), e === "wrapped-text" ? n.appendChild(document.createTextNode(String(this._editedValue))) : n.appendChild(document.createElement("slot")), t.appendChild(n);
		}
		this._renderState = e;
	}
}, _ = () => {
	typeof customElements > "u" || customElements.get("intlayer-content-selector-wrapper") || customElements.define("intlayer-content-selector-wrapper", g);
}, v = typeof HTMLElement < "u" ? HTMLElement : class {}, y = class extends v {
	_dictionaryKey = "";
	_keyPathJson = "[]";
	_locale = "";
	_editedText = null;
	_unsubManager = null;
	_unsubEditedContent = null;
	_selectorWrapper;
	_slot;
	static get observedAttributes() {
		return [
			"dictionary-key",
			"key-path",
			"locale"
		];
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e, this._selectorWrapper.setAttribute("dictionary-key", e);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e, this._selectorWrapper.setAttribute("key-path", e);
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t), this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper"), this._slot = document.createElement("slot"), this._selectorWrapper.appendChild(this._slot), e.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(e, t, n) {
		let r = n ?? "";
		e === "dictionary-key" ? (this._dictionaryKey = r, this._selectorWrapper.setAttribute("dictionary-key", r)) : e === "key-path" ? (this._keyPathJson = r || "[]", this._selectorWrapper.setAttribute("key-path", this._keyPathJson)) : e === "locale" && (this._locale = r);
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		for (; this._selectorWrapper.firstChild;) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		this._editedText === null ? this._selectorWrapper.appendChild(this._slot) : this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
	}
	_resolveEditedText(e) {
		let t = this._getKeyPath(), i = e.getContentValue(this._dictionaryKey, t);
		if (i == null) {
			this._editedText = null, this._render();
			return;
		}
		if (typeof i == "string" || typeof i == "number") {
			this._editedText = String(i), this._render();
			return;
		}
		if (typeof i == "object") {
			let e = this._locale || void 0, a = n(i, {
				locale: e,
				dictionaryKey: this._dictionaryKey,
				keyPath: t
			}, r(e));
			typeof a == "string" || typeof a == "number" ? this._editedText = String(a) : (console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(a)}`), this._editedText = null), this._render();
			return;
		}
		this._editedText = null, this._render();
	}
	_setupManagerSubscriptions(e) {
		this._resolveEditedText(e);
		let t = () => this._resolveEditedText(e);
		e.editedContent.addEventListener("change", t), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", t);
	}
	_subscribeToManager() {
		let e = f();
		e && this._setupManagerSubscriptions(e), this._unsubManager = m((e) => {
			this._unsubEditedContent?.(), this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editedText = null, this._render());
		});
	}
}, b = () => {
	typeof customElements > "u" || customElements.get("intlayer-edited-content") || customElements.define("intlayer-edited-content", y);
}, x = () => Math.random().toString(36).slice(2), S = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	constructor(e) {
		this._config = e, this.senderId = x();
	}
	start() {
		typeof window > "u" || this._windowHandler || (this._windowHandler = (e) => {
			this._handleMessage(e);
		}, window.addEventListener("message", this._windowHandler));
	}
	stop() {
		this._windowHandler &&= (window.removeEventListener("message", this._windowHandler), null);
	}
	send(e, t) {
		let n = {
			type: e,
			data: t,
			senderId: this.senderId,
			messageId: x()
		};
		for (let e of this._config.allowedOrigins) e && this._config.postMessageFn(n, e);
	}
	subscribe(e, t) {
		return this._subscribers.has(e) || this._subscribers.set(e, /* @__PURE__ */ new Set()), this._subscribers.get(e).add(t), () => {
			this._subscribers.get(e)?.delete(t);
		};
	}
	_handleMessage(e) {
		let t = e.data;
		if (!t || typeof t != "object") return;
		let { type: n, data: r, senderId: i, messageId: a } = t;
		if (!n || typeof n != "string" || i === this.senderId) return;
		if (a) {
			if (this._seenMessageIds.has(a)) return;
			this._seenMessageIds.add(a), this._seenMessageIds.size > 200 && this._seenMessageIds.clear();
		}
		let { allowedOrigins: o } = this._config;
		if (!(!o || o.length === 0 || o.includes("*") || o.filter((e) => !!e && e !== "").some((t) => s(t, e.origin)))) return;
		let c = this._subscribers.get(n);
		if (c) for (let e of c) e(r, i);
	}
}, C = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(e, t, n = {}) {
		super(), this._key = e, this._messenger = t, this._options = {
			emit: n.emit ?? !0,
			receive: n.receive ?? !0
		}, n.initialValue !== void 0 && (this._value = n.initialValue);
	}
	get value() {
		return this._value;
	}
	set(e) {
		this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e })), this._options.emit && this._messenger.send(`${this._key}/post`, e);
	}
	start() {
		if (this._options.receive) {
			let e = this._messenger.subscribe(`${this._key}/post`, (e) => {
				this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e }));
			});
			this._unsubscribers.push(e);
		}
		if (this._options.emit) {
			let e = this._messenger.subscribe(`${this._key}/get`, (e, t) => {
				t !== this._messenger.senderId && this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(e);
		}
		this._options.receive && this._value === void 0 && this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (let e of this._unsubscribers) e();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
	}
}, w = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(e) {
		this._messenger = e;
	}
	startInterceptor() {
		typeof window > "u" || (this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		}, window.addEventListener("mousedown", this._mousedownHandler));
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", c);
	}
	stopInterceptor() {
		this._mousedownHandler &&= (window.removeEventListener("mousedown", this._mousedownHandler), null);
	}
	stopMerger() {
		this._unsubscribeMerge?.(), this._unsubscribeMerge = null;
	}
}, T = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(e) {
		this._messenger = e;
	}
	start() {
		if (typeof window > "u") return;
		let e = () => {
			this._messenger.send("INTLAYER_URL_CHANGE/post", window.location.pathname);
		};
		this._originalPushState = history.pushState, this._originalReplaceState = history.replaceState;
		let t = (e) => function(...t) {
			e.apply(this, t), window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = t(this._originalPushState), history.replaceState = t(this._originalReplaceState);
		for (let t of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			let n = e;
			window.addEventListener(t, n), this._listeners.push([t, n]);
		}
		e();
	}
	stop() {
		if (!(typeof window > "u")) {
			for (let [e, t] of this._listeners) window.removeEventListener(e, t);
			this._listeners = [], this._originalPushState &&= (history.pushState = this._originalPushState, null), this._originalReplaceState &&= (history.replaceState = this._originalReplaceState, null);
		}
	}
}, E = (e, t, n) => {
	let r = e, i = null, a = [];
	if (t.length === 0) return n;
	try {
		for (let e = 0; e < t.length; e++) {
			let o = t[e];
			if (i = r, (o.type === "object" || o.type === "array") && (a = [o.key], (!r[o.key] || typeof r[o.key] != "object") && (r[o.key] = {}), r = r[o.key]), (o.type === "translation" || o.type === "enumeration") && (a = [o.type, o.key], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = {}), (!r[o.type][o.key] || typeof r[o.type][o.key] != "object") && (r[o.type][o.key] = {}), r = r[o.type][o.key]), (o.type === "enumeration" || o.type === "condition") && o.type !== "enumeration" && (a = [o.type, o.key], r = r[o.type][o.key]), (o.type === "markdown" || o.type === "html" || o.type === "insertion") && (a = [o.type], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = ""), r = r[o.type]), o.type === "file" && (a = ["content"], r = r.content), e === t.length - 1 && i && a.length > 0) {
				let e = i;
				for (let t of a.slice(0, -1)) e = e[t];
				let t = a[a.length - 1];
				if (n === void 0) if (Array.isArray(e)) {
					let n = Number(t);
					!Number.isNaN(n) && n >= 0 && n < e.length && e.splice(n, 1);
				} else delete e[t];
				else e[t] = n;
			}
		}
		return e;
	} catch (r) {
		return console.error("Cannot edit dictionary by key path", {
			dictionaryContent: e,
			keyPath: t,
			newValue: n
		}, r), e;
	}
}, D = (e, t, n) => {
	let r = e, i = null, a = null;
	for (let e of n) i = r, (e.type === "object" || e.type === "array") && (a = e.key, r = r[e.key]), (e.type === "translation" || e.type === "enumeration" || e.type === "condition") && (a = e.type, r = r[e.type][e.key]), (e.type === "markdown" || e.type === "reactNode" || e.type === "html" || e.type === "insertion" || e.type === "file") && (a = e.type, r = r[e.type]);
	if (i && a !== null) if (Array.isArray(i)) i[a] = r;
	else {
		let e = {};
		for (let n of Object.keys(i)) n === a && t !== void 0 ? e[t] = r : e[n] = i[n];
		Object.keys(i).forEach((e) => {
			delete i[e];
		}), Object.assign(i, e);
	}
	return e;
}, O = class {
	messenger;
	editorEnabled;
	focusedContent;
	localeDictionaries;
	editedContent;
	configuration;
	currentLocale;
	_urlManager;
	_iframeInterceptor;
	_mode;
	_configuration;
	_unsubAreYouThere = null;
	_unsubActivate = null;
	_unsubClientReady = null;
	constructor(e) {
		this._mode = e.mode, this._configuration = e.configuration, this.messenger = new S(e.messenger), this.editorEnabled = new C("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: !1,
			receive: !0,
			initialValue: !1
		}), this.focusedContent = new C("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: !0,
			receive: !0,
			initialValue: null
		}), this.localeDictionaries = new C("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger), this.editedContent = new C("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger), this.configuration = new C("INTLAYER_CONFIGURATION", this.messenger, {
			emit: !0,
			receive: !1,
			...e.configuration ? { initialValue: e.configuration } : {}
		}), this.currentLocale = new C("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: e.mode === "client",
			receive: e.mode === "editor"
		}), this._urlManager = new T(this.messenger), this._iframeInterceptor = new w(this.messenger);
	}
	start() {
		this.messenger.start(), this.editorEnabled.start(), this.focusedContent.start(), this.localeDictionaries.start(), this.editedContent.start(), this.configuration.start(), this.currentLocale.start(), this._mode === "client" ? (this._urlManager.start(), this._iframeInterceptor.startInterceptor(), this._loadDictionaries(), this.messenger.send("INTLAYER_EDITED_CONTENT_CHANGED/get"), this._configuration?.editor?.enabled !== !1 && this._setupActivationHandshake()) : (this._iframeInterceptor.startMerger(), this._setupEditorHandshake());
	}
	stop() {
		this._unsubAreYouThere?.(), this._unsubActivate?.(), this._unsubClientReady?.(), this._unsubAreYouThere = null, this._unsubActivate = null, this._unsubClientReady = null, this.messenger.stop(), this.editorEnabled.stop(), this.focusedContent.stop(), this.localeDictionaries.stop(), this.editedContent.stop(), this.configuration.stop(), this.currentLocale.stop(), this._urlManager.stop(), this._iframeInterceptor.stopInterceptor(), this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		this._mode === "editor" && this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(e) {
		let t = e.filter((e) => e.type !== i), n = this.focusedContent.value;
		n && this.focusedContent.set({
			...n,
			keyPath: t
		});
	}
	setLocaleDictionary(e) {
		if (!e.localId) return;
		let t = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedDictionary(e) {
		if (!e.localId) {
			console.error("setEditedDictionary: missing localId", e);
			return;
		}
		let t = this.editedContent.value ?? {};
		this.editedContent.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedContent(e, t) {
		let n = this.editedContent.value ?? {};
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: t
			}
		});
	}
	addContent(e, t, n = [], r = !0) {
		let i = this.editedContent.value ?? {}, o = (this.localeDictionaries.value ?? {})[e]?.content, s = structuredClone(i[e]?.content ?? o), c = n;
		if (!r) {
			let e = 0, t = n.slice(0, -1), r = n[n.length - 1], i = r.key;
			for (; a(s, c) !== void 0;) e++, i = e === 0 ? r.key : `${r.key} (${e})`, c = [...t, {
				...r,
				key: i
			}];
		}
		let l = E(s, c, t);
		this.editedContent.set({
			...i,
			[e]: {
				...i[e],
				content: l
			}
		});
	}
	renameContent(e, t, n = []) {
		let r = this.editedContent.value ?? {}, i = (this.localeDictionaries.value ?? {})[e]?.content, a = D(structuredClone(r[e]?.content ?? i), t, n);
		this.editedContent.set({
			...r,
			[e]: {
				...r[e],
				content: a
			}
		});
	}
	removeContent(e, t) {
		let n = this.editedContent.value ?? {}, r = (this.localeDictionaries.value ?? {})[e]?.content, i = E(structuredClone(n[e]?.content ?? r), t, a(r, t));
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: i
			}
		});
	}
	restoreContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(e, t) {
		let n = this.editedContent.value;
		if (!n) return;
		let r = t.filter((e) => e.type !== i), o = this.localeDictionaries.value;
		if (e.includes(":local:") || e.includes(":remote:")) return o && !(e in o) ? void 0 : a(n[e]?.content ?? {}, r, this.currentLocale.value);
		let s = Object.keys(n).filter((t) => t.startsWith(`${e}:`) && (!o || t in o));
		for (let e of s) {
			let t = a(n[e]?.content ?? {}, r, this.currentLocale.value);
			if (t) return t;
		}
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(!0), this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		}), this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY"), this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		}), this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(!0), this._broadcastData();
		});
	}
	_broadcastData() {
		let e = this.configuration.value;
		e && this.messenger.send("INTLAYER_CONFIGURATION/post", e);
		let t = this.currentLocale.value;
		t && this.messenger.send("INTLAYER_CURRENT_LOCALE/post", t);
		let n = this.localeDictionaries.value;
		n && this.messenger.send("INTLAYER_LOCALE_DICTIONARIES_CHANGED/post", n);
	}
	async _loadDictionaries() {
		try {
			let e = (await import("./unmerged_dictionaries-DKj5GNYK.js")).getUnmergedDictionaries(), t = Object.fromEntries(Object.values(e).flat().map((e) => [e.localId, e]));
			this.localeDictionaries.set(t), this.editorEnabled.value && this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
}, k = typeof HTMLElement < "u" ? HTMLElement : class {}, A = class extends k {
	_configuration = void 0;
	_locale = void 0;
	_initialized = !1;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(e) {
		this._configuration = e, this._initialized || this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e, e && this._initialized && this._syncLocale(e);
	}
	attributeChangedCallback(e, t, n) {
		e === "locale" && n !== null && (this._locale = n, this._initialized && this._syncLocale(n));
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.(), this._unsubManager = null, this._initialized &&= (B(), !1);
	}
	_init() {
		this._initialized || (z(), this._initialized = !0, this._locale && this._syncLocale(this._locale));
	}
	_syncLocale(e) {
		let t = f();
		t ? t.currentLocale.set(e) : (this._unsubManager?.(), this._unsubManager = m((t) => {
			t && (this._unsubManager?.(), this._unsubManager = null, t.currentLocale.set(e));
		}));
	}
}, j = () => {
	typeof customElements > "u" || customElements.get("intlayer-editor") || customElements.define("intlayer-editor", A);
}, M = 250, N = "\n  :host {\n    display: contents;\n  }\n\n  .wrapper {\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    border-radius: 0.375rem;\n    outline-width: 2px;\n    outline-offset: 4px;\n    outline-style: solid;\n    outline-color: transparent;\n    transition: all 100ms 50ms ease-in-out;\n  }\n\n  .wrapper[data-active] {\n    outline-color: inherit;\n  }\n", P = typeof HTMLElement < "u" ? HTMLElement : class {}, F = class extends P {
	_isSelecting = !1;
	_pressDuration = M;
	_isHovered = !1;
	_isSelectingState = !1;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(e) {
		this._isSelecting = e, this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(e) {
		this._pressDuration = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = N, e.appendChild(t);
		let n = document.createElement("span");
		n.className = "wrapper", n.setAttribute("role", "button"), n.setAttribute("tabindex", "0"), n.appendChild(document.createElement("slot")), e.appendChild(n), this._wrapper = n, n.addEventListener("mousedown", () => this._handleMouseDown()), n.addEventListener("mouseup", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseleave", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseenter", () => this._handleMouseEnter()), n.addEventListener("click", (e) => this._handleClick(e)), n.addEventListener("touchstart", () => this._handleMouseDown()), n.addEventListener("touchend", () => this._handleMouseUpOrLeave()), n.addEventListener("touchcancel", () => this._handleMouseUpOrLeave()), n.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(e, t, n) {
		e === "is-selecting" ? (this._isSelecting = n !== null, this._updateActiveState()) : e === "press-duration" && (this._pressDuration = n === null ? M : parseInt(n, 10));
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			e.composedPath().includes(this) || (this._isSelectingState = !1, this._dispatch("intlayer:click-outside"), this._updateActiveState());
		}, document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		this._clickOutsideHandler &&= (document.removeEventListener("mousedown", this._clickOutsideHandler), null), this._clearPressTimer();
	}
	_updateActiveState() {
		this._isSelecting || this._isSelectingState || this._isHovered ? this._wrapper.setAttribute("data-active", "") : this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		this._pressTimer !== null && (clearTimeout(this._pressTimer), this._pressTimer = null);
	}
	_dispatch(e) {
		this.dispatchEvent(new CustomEvent(e, {
			bubbles: !0,
			composed: !0
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer(), this._pressTimer = setTimeout(() => {
			this._isSelectingState = !0, this._updateActiveState(), this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = !0, this._updateActiveState(), this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		this._isHovered && (this._isHovered = !1, this._dispatch("intlayer:unhover")), this._clearPressTimer(), this._updateActiveState();
	}
	_handleClick(e) {
		(this._isSelecting || this._isSelectingState) && (e.preventDefault(), e.stopPropagation());
	}
	_handleBlur() {
		this._isSelectingState = !1, this._updateActiveState();
	}
}, I = () => {
	typeof customElements > "u" || (customElements.get("intlayer-content-selector") || customElements.define("intlayer-content-selector", F), _(), b(), j());
}, L = () => ({
	allowedOrigins: [t?.editorURL, t?.cmsURL].filter(Boolean),
	postMessageFn: (e, t) => {
		typeof window > "u" || window.self !== window.top && window.parent?.postMessage(e, t);
	}
}), R = 0, z = () => {
	R++;
	let t = f();
	if (t) return t;
	let n = new O({
		mode: "client",
		messenger: L(),
		configuration: e
	});
	return p(n), I(), n.start(), n;
}, B = () => {
	R = Math.max(0, R - 1), !(R > 0) && (f()?.stop(), p(null));
};
export { z as initEditorClient, B as stopEditorClient };
import { c as e, t, u as n } from "./nodeType-C3vWW1Sy.js";
var r = {
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
}, i = {
	mode: "prefix-no-default",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, a = {
	editorURL: "http://localhost:8000",
	cmsURL: "https://app.intlayer.org",
	backendURL: "https://back.intlayer.org",
	port: 8e3,
	enabled: !1,
	dictionaryPriorityStrategy: "local_first",
	liveSync: !0,
	liveSyncPort: 4e3,
	liveSyncURL: "http://localhost:4000"
}, o = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, s = {
	internationalization: r,
	routing: i,
	editor: a,
	log: o,
	system: {
		baseDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app",
		moduleAugmentationDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/types",
		unmergedDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/unmerged_dictionary",
		remoteDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/remote_dictionary",
		dictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/dictionary",
		dynamicDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/dynamic_dictionary",
		fetchDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/fetch_dictionary",
		typesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/types",
		mainDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/main",
		configDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/config",
		cacheDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/cache",
		tempDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/tmp"
	},
	content: {
		fileExtensions: [
			".content.ts",
			".content.js",
			".content.cjs",
			".content.mjs",
			".content.json",
			".content.json5",
			".content.jsonc",
			".content.tsx",
			".content.jsx"
		],
		contentDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app"],
		codeDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app"],
		excludedPath: [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		outputFormat: ["esm", "cjs"],
		cache: !0,
		checkTypes: !1
	},
	ai,
	dictionary,
	build,
	compiler: {
		enabled: !0,
		dictionaryKeyPrefix: "",
		noMetadata: !1,
		saveComponents: !1
	}
}, c = (n, r) => {
	for (let e of r.plugins ?? []) if (e.canHandle(n)) return e.transform(n, r, (e, t) => c(e, t));
	if (typeof n != "object" || !n || n.$$typeof !== void 0 || n.__v_isVNode !== void 0 || n._isVNode !== void 0 || n.isJSX !== void 0 || typeof n == "function") return n;
	if (Array.isArray(n)) return n.map((e, n) => c(e, {
		...r,
		children: e,
		keyPath: [...r.keyPath, {
			type: t,
			key: n
		}]
	}));
	let i = {};
	for (let t in n) Object.defineProperty(i, t, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let i = {
				...r,
				children: n[t],
				keyPath: [...r.keyPath, {
					type: e,
					key: t
				}]
			}, a = c(n[t], i);
			return Object.defineProperty(this, t, {
				value: a,
				enumerable: !0,
				configurable: !0
			}), a;
		}
	});
	return i;
}, l = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, u = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (l(e) && l(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : u(e[r], t[r]));
		return n;
	}
	return e;
}, d = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => u(e, t));
}, f = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", p = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, m = (e, t) => f ? p : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (r, i, a) => {
		let o = r.translation ?? {}, s = {};
		for (let e in o) {
			let t = {
				...i,
				children: o[e],
				keyPath: [...i.keyPath, {
					type: n,
					key: e
				}]
			};
			s[e] = a(o[e], t);
		}
		return d(s, e, t);
	}
}, h = p, g = p, _ = p, v = p, y = (e) => p, b = p, x = (e, t = !0) => [
	m(e ?? r.defaultLocale, t ? r.defaultLocale : void 0),
	h,
	g,
	_,
	y(e ?? r.defaultLocale),
	b,
	v
], S = (e, t, n = []) => c(e, {
	...t,
	plugins: n
});
export { p as a, y as c, s as d, a as f, i as h, h as i, m as l, o as m, S as n, b as o, r as p, g as r, v as s, x as t, d as u };
import { u as e } from "./nodeType-C3vWW1Sy.js";
var t = (t, n, r) => {
	let i = structuredClone(t);
	for (let t of n) r && i?.nodeType === "translation" && (i = i?.[e]?.[r]), (t.type === "object" || t.type === "array") && (i = i?.[t.key]), (t.type === "translation" || t.type === "condition" || t.type === "enumeration") && (i = i?.[t.type]?.[t.key]), (t.type === "markdown" || t.type === "html" || t.type === "insertion" || t.type === "file") && (i = i?.[t.type]);
	return i;
};
export { t };
var e = new Set([
	"true",
	"false",
	"null",
	"undefined",
	"yes",
	"no",
	"on",
	"off",
	"NaN",
	"Infinity",
	"-Infinity"
]), t = (t) => {
	let n = t.trim();
	if (!n) return null;
	let r = 0, i = () => n[r], a = () => n[r++], o = () => r >= n.length, s = () => {
		for (; !o() && " \n	\r".includes(i());) r++;
	}, c = (e) => {
		a();
		let t = "";
		for (; !o();) {
			let n = a();
			if (n === e) return t;
			n === "\\" && !o() ? t += a() : t += n;
		}
		throw SyntaxError("Unterminated string");
	}, l = (e) => {
		let t = r;
		for (; !o() && !e.includes(i());) r++;
		return n.slice(t, r).trim();
	}, u = (t) => e.has(t) || /^0x[0-9a-fA-F]+$/.test(t) || /^#/.test(t) ? t : /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(t) ? t === "3.14159265359" ? Math.PI : Number(t) : t, d = (e) => {
		if (s(), o()) throw SyntaxError("Unexpected end of input");
		let t = i();
		if (t === "[") return f();
		if (t === "{") return v();
		if (t === "\"" || t === "'") return c(t);
		let n = l(e);
		if (!n) throw SyntaxError("Empty token");
		return u(n);
	}, f = () => {
		a();
		let e = [];
		if (s(), i() === "]") return a(), e;
		for (;;) {
			s(), e.push(d(",]")), s();
			let t = a();
			if (t === "]") break;
			if (t !== ",") throw SyntaxError("Expected ',' or ']' after array element");
			if (s(), i() === "]") throw SyntaxError("Trailing comma in array");
		}
		return e;
	}, p = () => {
		a(), s();
		let e = i();
		if (e === "{") return v();
		if (e === "\"" || e === "'") return c(e);
		let t = n.indexOf("\n", r), o = n.slice(r, t === -1 ? n.length : t);
		return /: /.test(o) ? h() : u(l("\n"));
	}, m = () => {
		let e = n.lastIndexOf("\n", r - 1) + 1, t = 0;
		for (let i = e; i < r && n[i] === " "; i++) t++;
		return t;
	}, h = () => {
		let e = {}, t = m();
		for (; !o();) {
			let d = r, f = d === 0 || n[d - 1] === "\n";
			if (s(), f && m() <= t) {
				r = d;
				break;
			}
			if (i() === "-" || o()) {
				r = d;
				break;
			}
			let p = i(), h = p === "\"" || p === "'" ? c(p) : l(":");
			if (o() || a() !== ":") break;
			if (s(), i() === "\n" && (a(), s(), i() === "-")) {
				e[h] = g();
				continue;
			}
			e[h] = u(l("\n")), i() === "\n" && a();
		}
		return e;
	}, g = () => {
		let e = [], t = m();
		for (; !o();) {
			for (; !o() && " \n	\r".includes(i()) && i() !== "-";) a();
			if (o() || m() < t || i() !== "-") break;
			e.push(p());
		}
		return e;
	}, _ = (e) => {
		let t = {};
		for (s(); !o() && !e.includes(i());) {
			let n = i(), u = n === "\"" || n === "'" ? c(n) : l(`:\n${e}`);
			if (!u) return t;
			if (o() || a() !== ":") throw SyntaxError("Expected ':' after key");
			for (i() === " " && a(); !o() && " 	".includes(i());) a();
			if (o()) return t[u] = "", t;
			if (i() === "\n") {
				a();
				let n = r;
				if (s(), i() === "-") {
					t[u] = g(), s();
					continue;
				} else {
					r = n, s();
					let a = i();
					if (a && !e.includes(a) && a !== "-") {
						t[u] = "";
						continue;
					}
					return t[u] = "", t;
				}
			}
			if (t[u] = d(e.includes("}") ? `,\n${e}` : `\n${e}`), o()) return t;
			let f = i();
			if (f === "," || f === "\n") {
				a(), s();
				continue;
			}
			if (" 	".includes(f)) {
				for (; !o() && " 	".includes(i());) a();
				if (i() === "\n") {
					a(), s();
					continue;
				}
				if (o() || e.includes(i())) return t;
				continue;
			}
			if (e.includes(f)) return t;
		}
		return t;
	}, v = () => {
		if (a(), s(), i() === "}") return a(), {};
		let e = _("}");
		if (i() !== "}") throw SyntaxError("Expected '}' at end of object");
		return a(), e;
	}, y = (e) => {
		let t = 0, n = null;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (n) i === "\\" ? r++ : i === n && (n = null);
			else if (i === "\"" || i === "'") n = i;
			else if (i === "[" || i === "{") t++;
			else if (i === "]" || i === "}") t = Math.max(0, t - 1);
			else if (t === 0 && i === ":") {
				let t = e[r + 1];
				if (!t || " \n".includes(t)) return !0;
			}
		}
		return !1;
	};
	if (n.startsWith("]") || n.startsWith("}")) throw SyntaxError("Unexpected closing bracket");
	let b;
	if (b = n.startsWith("[") ? f() : n.startsWith("{") ? v() : y(n) ? _("") : d(""), s(), !o()) throw SyntaxError("Unexpected trailing characters");
	return b;
}, n = (e) => {
	try {
		let n = e.split(/\r?\n/), r = n.find((e) => e.trim() !== "");
		if (!r || r.trim() !== "---") return {};
		let i = -1;
		for (let e = 1; e < n.length; e++) if (n[e].trim() === "---") {
			i = e;
			break;
		}
		return i === -1 ? {} : t(n.slice(1, i).join("\n")) ?? {};
	} catch {
		return {};
	}
}, r = {
	blockQuote: "0",
	breakLine: "1",
	breakThematic: "2",
	codeBlock: "3",
	codeFenced: "4",
	codeInline: "5",
	footnote: "6",
	footnoteReference: "7",
	gfmTask: "8",
	heading: "9",
	headingSetext: "10",
	htmlBlock: "11",
	htmlComment: "12",
	htmlSelfClosing: "13",
	customComponent: "34",
	image: "14",
	link: "15",
	linkAngleBraceStyleDetector: "16",
	linkBareUrlDetector: "17",
	newlineCoalescer: "19",
	orderedList: "20",
	paragraph: "21",
	ref: "22",
	refImage: "23",
	refLink: "24",
	table: "25",
	tableSeparator: "26",
	text: "27",
	textBolded: "28",
	textEmphasized: "29",
	textEscaped: "30",
	textMarked: "31",
	textStrikethroughed: "32",
	unorderedList: "33"
}, i = {
	MAX: 0,
	HIGH: 1,
	MED: 2,
	LOW: 3,
	MIN: 4
}, a = (/* @__PURE__ */ "allowFullScreen.allowTransparency.autoComplete.autoFocus.autoPlay.cellPadding.cellSpacing.charSet.classId.colSpan.contentEditable.contextMenu.crossOrigin.encType.formAction.formEncType.formMethod.formNoValidate.formTarget.frameBorder.hrefLang.inputMode.keyParams.keyType.marginHeight.marginWidth.maxLength.mediaGroup.minLength.noValidate.radioGroup.readOnly.rowSpan.spellCheck.srcDoc.srcLang.srcSet.tabIndex.useMap".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {
	class: "className",
	for: "htmlFor"
}), o = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "“"
}, s = [
	"style",
	"script",
	"pre"
], c = [
	"src",
	"href",
	"data",
	"formAction",
	"srcDoc",
	"action"
], l = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, u = /\n{2,}$/, d = /^(\s*>[\s\S]*?)(?=\n\n|$)/, f = /^ *> ?/gm, p = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, m = /^ {2,}\n/, h = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, g = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, _ = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, v = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, y = /^(?:\n *)*\n/, b = /\r\n?/g, x = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, ee = /^\[\^([^\]]+)]/, te = /\f/g, S = /^---[ \t]*\n(.|\n)*?\n---[ \t]*\n/, ne = /^\s*?\[(x|\s)\]/, re = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, ie = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, ae = /^([^\n]+)\n *(=|-)\2{2,} *\n/, C = /^ *(?!<[a-zA-Z][^ >/]* ?\/>)<([a-zA-Z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, oe = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, se = /^<!--[\s\S]*?(?:-->)/, w = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, T = /^ *<([a-zA-Z][a-zA-Z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, E = /^ *<([A-Z][a-zA-Z0-9]*)(?:\s+((?:<.*?>|[^>])*))?>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/, ce = /^\{.*\}$/, le = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, ue = /^<([^ >]+[:@/][^ >]+)>/, D = /-([a-z])?/gi, de = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, fe = /(^ *\||\| *$)/g, pe = /^ *:-+: *$/, me = /^ *:-+ *$/, he = /^ *-+: *$/, ge = /^[^\n]+(?: {2}\n|\n{2,})/, _e = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, ve = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, ye = /^\[([^\]]*)\] ?\[([^\]]*)\]/, be = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, xe = /\t/g, O = /^\n+/, Se = /^\n*([ \t]*)/, Ce = /(?:^|\n)( *)$/, k = "(?:\\d+\\.)", A = "(?:[*+-])", we = /^\\([^0-9A-Za-z\s])/, Te = /\\([^0-9A-Za-z\s])/g, Ee = /^[\s\S](?:(?! {2}\n|[0-9]\.|http)[^=*_~\-\n:<`\\[!])*/, De = /^(:[a-zA-Z0-9-_]+:)/, j = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`, M = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)", Oe = RegExp(`^([*_])\\1${j(1)}${M}\\1\\1(?!\\1)`), ke = RegExp(`^([*_])${j(0)}${M}\\1(?!\\1)`), Ae = RegExp(`^(==)${j(0)}${M}\\1`), je = RegExp(`^(~~)${j(0)}${M}\\1`), Me = (e) => "( *)(" + (e === 1 ? k : A) + ") +", Ne = Me(1), Pe = Me(2), N = (e) => RegExp("^" + (e === 1 ? Ne : Pe)), Fe = N(1), Ie = N(2), P = (e) => RegExp("^" + (e === 1 ? Ne : Pe) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? k : A) + " )[^\\n]*)*(\\n|$)", "gm"), Le = P(1), Re = P(2), F = (e) => {
	let t = e === 1 ? k : A;
	return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}, I = F(1), L = F(2), R = (e) => {
	let t = e.length;
	for (; t > 0 && e[t - 1] <= " ";) t--;
	return e.slice(0, t);
}, z = (e, t) => e.startsWith(t), ze = (e) => {
	let t = e[0];
	return (t === "\"" || t === "'") && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e;
}, B = (e) => e && e.replace(Te, "$1"), Be = (...e) => e.filter(Boolean).join(" "), V = (e, t, n) => {
	let r = e, i = t.split(".");
	for (; i.length && (r = r[i[0]], r !== void 0);) i.shift();
	return r ?? n;
}, H = (e) => e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase(), Ve = /(javascript|vbscript|data(?!:image)):/i, He = (e) => {
	try {
		let t = decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "");
		if (Ve.test(t)) return console.warn("Input contains an unsafe JavaScript/VBScript/data expression, it will not be rendered.", t), null;
	} catch {
		return console.warn("Input could not be decoded due to malformed syntax or characters, it will not be rendered.", e), null;
	}
	return e;
}, Ue = (e) => {
	let t = performance.now(), n = e.replace(b, "\n").replace(te, "").replace(xe, "    "), r = performance.now() - t;
	return r > 20 && console.log(`normalizeWhitespace: ${r.toFixed(3)}ms, source length: ${e.length}`), n;
}, We = (e, t) => {
	let n = performance.now();
	if (!t) return e;
	let r = e.split("\n"), i = !1, a = null, o = (e) => e.match(/^\s*(`{3,}|~{3,})/), s = (e) => {
		let t = o(e);
		if (!t) return;
		let n = t[1];
		i ? a && e.includes(a) && (i = !1, a = null) : (i = !0, a = n);
	}, c = r.map((e) => {
		if (o(e)) {
			let n = e.startsWith(t) ? e.slice(t.length) : e;
			return s(e), n;
		}
		return i ? e : e.startsWith(t) ? e.slice(t.length) : e;
	}).join("\n"), l = performance.now() - n;
	return l > 20 && console.log(`trimLeadingWhitespaceOutsideFences: ${l.toFixed(3)}ms, text length: ${e.length}, lines count: ${r.length}`), c;
}, Ge = (e) => (e.indexOf("-") !== -1 && e.match(w) === null && (e = e.replace(D, (e, t) => t.toUpperCase())), e), Ke = (e) => {
	let t = performance.now(), n = [], r = "", i = !1, a = !1, o = "";
	if (!e) return n;
	for (let t = 0; t < e.length; t++) {
		let s = e[t];
		if ((s === "\"" || s === "'") && !i && (a ? s === o && (a = !1, o = "") : (a = !0, o = s)), s === "(" && r.endsWith("url") ? i = !0 : s === ")" && i && (i = !1), s === ";" && !a && !i) {
			let e = r.trim();
			if (e) {
				let t = e.indexOf(":");
				if (t > 0) {
					let r = e.slice(0, t).trim(), i = e.slice(t + 1).trim();
					n.push([r, i]);
				}
			}
			r = "";
		} else r += s;
	}
	let s = r.trim();
	if (s) {
		let e = s.indexOf(":");
		if (e > 0) {
			let t = s.slice(0, e).trim(), r = s.slice(e + 1).trim();
			n.push([t, r]);
		}
	}
	let c = performance.now() - t;
	return c > 20 && console.log(`parseStyleAttribute: ${c.toFixed(3)}ms, styleString length: ${e.length}, styles count: ${n.length}`), n;
}, qe = (e, t, n, r) => t === "style" ? Ke(n).reduce((t, [n, i]) => {
	let a = n.replace(/(-[a-z])/g, (e) => e[1].toUpperCase());
	return t[a] = r(i, e, n), t;
}, {}) : c.indexOf(t) === -1 ? (n.match(ce) && (n = B(n.slice(1, n.length - 1))), n === "true" ? !0 : n === "false" ? !1 : n) : r(B(n), e, t), Je = (e) => he.test(e) ? "right" : pe.test(e) ? "center" : (me.test(e), "left"), Ye = (e) => e.replace(fe, "").split("|").map(Je), Xe = (e, t, n, r) => {
	let i = performance.now(), a = n.inTable;
	n.inTable = !0;
	let o = [[]], s = "", c = () => {
		if (!s) return;
		let e = o[o.length - 1];
		e.push.apply(e, t(s, n)), s = "";
	};
	e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e, t, n) => {
		if (e.trim() === "|" && (c(), r)) {
			t !== 0 && t !== n.length - 1 && o.push([]);
			return;
		}
		s += e;
	}), c(), n.inTable = a;
	let l = performance.now() - i;
	return l > 20 && console.log(`parseTableRow: ${l.toFixed(3)}ms, source length: ${e.length}, cells count: ${o.length}`), o;
}, Ze = (e, t, n) => {
	let r = performance.now(), i = e.trim().split("\n"), a = i.map((e) => Xe(e, t, n, !0)), o = performance.now() - r;
	return o > 20 && console.log(`parseTableCells: ${o.toFixed(3)}ms, source length: ${e.length}, rows count: ${i.length}`), a;
}, Qe = (e, t, n) => {
	if (Array.isArray(n)) {
		for (let t = 0; t < n.length; t++) if (z(e, n[t])) return !0;
		return !1;
	}
	return n(e, t);
}, U = (e) => (e.inline = 1, e), W = (e) => U((t, n) => n.inline ? e.exec(t) : null), G = (e) => U((t, n) => n.inline || n.simple ? e.exec(t) : null), K = (e) => (t, n) => n.inline || n.simple ? null : e.exec(t), q = (e) => U((t, n) => typeof e == "function" ? e(t, n) : e.exec(t)), J = (e, t, n) => {
	let r = performance.now(), i = n.inline ?? !1, a = n.simple ?? !1;
	n.inline = !0, n.simple = !0;
	let o = e(t, n);
	n.inline = i, n.simple = a;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseInline: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, $e = (e, t, n) => {
	let r = performance.now(), i = n.inline ?? !1, a = n.simple ?? !1;
	n.inline = !1, n.simple = !0;
	let o = e(t, n);
	n.inline = i, n.simple = a;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseSimpleInline: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, Y = (e, t, n = {}) => {
	let r = performance.now(), i = n.inline || !1;
	n.inline = !1;
	let a = R(t), o = e(/\n\n$/.test(a) === !1 ? a.endsWith("\n") ? `${a}\n` : `${a}\n\n` : a, n);
	n.inline = i;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseBlock: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, X = (e, t, n) => ({ children: J(t, e[2], n) }), Z = () => ({}), Q = () => null, et = (e, t) => {
	for (let n = 0; n < e.length; n++) if (e[n].test(t)) return !0;
	return !1;
}, tt = (e) => {
	let t = performance.now(), n = Object.keys(e);
	n.forEach((t) => {
		let n = e[t]._order;
		(typeof n != "number" || !Number.isFinite(n)) && console.warn(`intlayer: Invalid order for rule \`${t}\`: ${n}`);
	}), n.sort((t, n) => e[t]._order - e[n]._order || t - +n);
	let r = (t, i = {}) => {
		let a = performance.now(), o = [];
		if (i.prevCapture = i.prevCapture || "", t.trim()) for (; t;) {
			let a = 0;
			for (; a < n.length;) {
				let s = n[a], c = e[s];
				if (c._qualify && !Qe(t, i, c._qualify)) {
					a++;
					continue;
				}
				let l = performance.now(), u = c._match(t, i), d = performance.now() - l;
				if (d > 1 && console.log(`${s}._match: ${d.toFixed(3)}ms, source length: ${t.length}`), u?.[0]) {
					t = t.substring(u[0].length);
					let e = performance.now(), n = c._parse(u, r, i), a = performance.now() - e;
					a > 1 && console.log(`${s}._parse: ${a.toFixed(3)}ms, capture length: ${u[0].length}`), i.prevCapture = (i.prevCapture || "") + u[0], n.type ||= s, o.push(n);
					break;
				}
				a++;
			}
		}
		let s = performance.now() - a;
		return s > 1 && console.log(`nestedParse: ${s.toFixed(3)}ms, source length: ${t.length}, result count: ${o.length}`), o;
	}, i = performance.now() - t;
	return i > 20 && console.log(`parserFor: ${i.toFixed(3)}ms, rules count: ${n.length}`), (e, t) => r(Ue(e), t);
}, $ = (e) => (t, n = {}) => {
	let r = performance.now(), i = (t, n = {}) => $(e)(t, n);
	if (Array.isArray(t)) {
		let e = n.key, a = [], o = !1, s = 0;
		for (let e = 0; e < t.length; e++) {
			let r = i(t[e], {
				...n,
				key: s
			}), c = typeof r == "string";
			c && o ? a[a.length - 1] = a[a.length - 1] + r : r !== null && (a.push(r), s++), o = c;
		}
		n.key = e;
		let c = performance.now() - r;
		return c > 20 && console.log(`renderFor (array): ${c.toFixed(3)}ms, ast length: ${t.length}`), a;
	}
	let a = e(t, i, n), o = performance.now() - r;
	return o > 20 && console.log(`renderFor (single): ${o.toFixed(3)}ms, ast type: ${t.type}`), a;
}, nt = (e, t) => (n, r, i) => {
	let a = performance.now(), o = e[n.type]?._render, s = t ? t(() => o?.(n, r, i), n, r, i) : o?.(n, r, i), c = performance.now() - a;
	return c > 20 && console.log(`createRenderer: ${c.toFixed(3)}ms, ast type: ${n.type}, hasUserRender: ${!!t}`), s;
}, rt = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, it = RegExp("^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"), at = (e, t) => {
	if (typeof e != "string") return e;
	let n = V(t, e);
	if (!n && typeof e == "string") {
		let r = e.toLowerCase(), i = Object.keys(t).find((e) => e.toLowerCase() === r);
		i && (n = V(t, i));
	}
	return n || e;
}, ot = (e, t) => {
	let { runtime: n, components: r = {} } = e, i = t.tagfilter ? [
		"title",
		"textarea",
		"style",
		"xmp",
		"iframe",
		"noembed",
		"noframes",
		"script",
		"plaintext"
	] : [];
	return (e, t, ...a) => {
		if (typeof e == "string" && i.includes(e.toLowerCase())) return null;
		let o = typeof e == "string", s = Be(t?.className, t?.class), c = {}, l = !1;
		if (t) for (let e in t) {
			let n = t[e];
			n != null && (e === "className" || e === "class" ? l ||= (s && (c.className = s), !0) : c[e] = n);
		}
		!l && s && (c.className = s);
		let u = c;
		n.normalizeProps && o && (u = n.normalizeProps(e, c));
		let d = at(e, r);
		return n.createElement(d, u, ...a.length === 1 ? [a[0]] : a);
	};
}, st = (e, t, n, a, c, l, b, te) => {
	let S = (e) => t.slugify ? t.slugify(e, H) : H(e), w = t.sanitizer ?? He, ce = t.namedCodesToUnicode ? {
		...o,
		...t.namedCodesToUnicode
	} : o, D = (t) => {
		let n = t === 1, r = n ? I : L, a = n ? Le : Re, o = n ? Fe : Ie;
		return {
			_qualify: (e) => o.test(e),
			_match: U((e, t) => {
				let n = Ce.exec(t.prevCapture ?? ""), i = t.list ?? (!t.inline && !t.simple);
				if (n && i) {
					let t = (n[1] || "") + e;
					return r.exec(t);
				}
				return null;
			}),
			_order: i.HIGH,
			_parse(e, t, r) {
				let i = e[2], s = n ? +i.slice(0, -1) : void 0, c = e[0].replace(u, "\n").match(a);
				if (!c) return {
					items: [],
					ordered: n,
					start: s
				};
				let l = !1;
				return {
					items: c.map((e, n) => {
						let i = o.exec(e), a = i ? i[0].length : 0, s = RegExp(`^ {1,${a}}`, "gm"), u = e.replace(s, "").replace(o, ""), d = n === c.length - 1, f = u.indexOf("\n\n") !== -1 || d && l;
						l = f;
						let p = r.inline, m = r.list;
						r.list = !0;
						let h;
						f ? (r.inline = !1, h = `${R(u)}\n\n`) : (r.inline = !0, h = R(u));
						let g = t(h, r);
						return r.inline = p, r.list = m, g;
					}),
					ordered: n,
					start: s
				};
			},
			_render(t, n, r = {}) {
				let i = t.ordered ? "ol" : "ul", a = { key: r.key };
				return t.ordered && t.start != null && (a.start = t.start), e(i, a, ...t.items.map((t, i) => e("li", { key: i }, n(t, r))));
			}
		};
	}, fe = (e, t) => {
		if (t.inline || t.simple || t.inHTML && e.indexOf("\n\n") === -1 && t.prevCapture?.indexOf("\n\n") === -1) return null;
		let n = 0;
		for (;;) {
			let t = e.indexOf("\n", n), r = e.slice(n, t === -1 ? void 0 : t + 1);
			if (et(te, r) || t === -1 || !r.trim()) break;
			n = t + 1;
		}
		let r = e.slice(0, n);
		if (r === "") return null;
		let i = R(r);
		return i === "" ? null : [
			r,
			void 0,
			i
		];
	};
	return {
		[r.blockQuote]: {
			_qualify: [">"],
			_match: K(d),
			_order: i.HIGH,
			_parse(e, t, n) {
				let r = e[0].replace(f, "").match(p), i = r?.[1], a = r?.[2] ?? "";
				return {
					alert: i,
					children: a.indexOf("\n") === -1 ? J(t, a, n) : Y(t, a, n)
				};
			},
			_render(t, n, i = {}) {
				let a = { key: i.key };
				return t.alert && (a.className = `markdown-alert-${S(t.alert.toLowerCase())}`, t.children.unshift({
					attrs: {},
					children: [{
						type: r.text,
						text: t.alert
					}],
					noInnerParse: !0,
					type: r.htmlBlock,
					tag: "header"
				})), e("blockquote", a, n(t.children, i));
			}
		},
		[r.breakLine]: {
			_qualify: ["  "],
			_match: q(m),
			_order: i.HIGH,
			_parse: Z,
			_render(t, n, r = {}) {
				return e("br", { key: r.key });
			}
		},
		[r.breakThematic]: {
			_qualify: [
				"--",
				"__",
				"**",
				"- ",
				"* ",
				"_ "
			],
			_match: K(h),
			_order: i.HIGH,
			_parse: Z,
			_render(t, n, r = {}) {
				return e("hr", { key: r.key });
			}
		},
		[r.codeBlock]: {
			_qualify: ["    "],
			_match: K(_),
			_order: i.MAX,
			_parse(e) {
				return {
					type: r.codeBlock,
					lang: void 0,
					text: B(R(e[0].replace(/^ {4}/gm, "")))
				};
			},
			_render(t, n, r = {}) {
				let i = { ...t.attrs ?? {} }, a = t.lang ? `lang-${t.lang}` : "lang-plaintext";
				return i.className = i.className ? `${i.className} ${a}` : a, t.lang && !i.lang && (i.lang = t.lang), e("pre", { key: r.key }, e("code", i, t.text));
			}
		},
		[r.codeFenced]: {
			_qualify: ["```", "~~~"],
			_match: K(g),
			_order: i.MAX,
			_parse(e) {
				return {
					attrs: l("code", e[3] ?? ""),
					lang: e[2] || void 0,
					text: e[4],
					type: r.codeBlock
				};
			}
		},
		[r.codeInline]: {
			_qualify: ["`"],
			_match: G(v),
			_order: i.LOW,
			_parse(e) {
				return { text: B(e[2]) };
			},
			_render(t, n, r = {}) {
				return e("code", { key: r.key }, t.text);
			}
		},
		[r.footnote]: {
			_qualify: ["[^"],
			_match: K(x),
			_order: i.MAX,
			_parse(e) {
				return a.push({
					footnote: e[2],
					identifier: e[1]
				}), {};
			},
			_render: Q
		},
		[r.footnoteReference]: {
			_qualify: ["[^"],
			_match: W(ee),
			_order: i.HIGH,
			_parse(e) {
				return {
					target: `#${S(e[1])}`,
					text: e[1]
				};
			},
			_render(t, n, r = {}) {
				return e("a", {
					key: r.key,
					href: w(t.target, "a", "href") ?? void 0
				}, e("sup", { key: r.key }, t.text));
			}
		},
		[r.gfmTask]: {
			_qualify: ["[ ]", "[x]"],
			_match: W(ne),
			_order: i.HIGH,
			_parse(e) {
				return { completed: e[1].toLowerCase() === "x" };
			},
			_render(t, n, r = {}) {
				return e("input", {
					checked: t.completed,
					key: r.key,
					readOnly: !0,
					type: "checkbox"
				});
			}
		},
		[r.heading]: {
			_qualify: ["#"],
			_match: K(n.enforceAtxHeadings ? ie : re),
			_order: i.HIGH,
			_parse(e, t, n) {
				return {
					children: J(t, e[2], n),
					id: S(e[2]),
					level: e[1].length
				};
			},
			_render(t, n, r = {}) {
				return e(`h${t.level}`, {
					id: t.id,
					key: r.key
				}, n(t.children, r));
			}
		},
		[r.headingSetext]: {
			_qualify: (e) => {
				let t = e.indexOf("\n");
				return t > 0 && t < e.length - 1 && (e[t + 1] === "=" || e[t + 1] === "-");
			},
			_match: K(ae),
			_order: i.MAX,
			_parse(e, t, n) {
				return {
					children: J(t, e[1], n),
					level: e[2] === "=" ? 1 : 2,
					type: r.heading
				};
			}
		},
		[r.htmlBlock]: {
			_qualify: (e) => {
				if (n.disableParsingRawHTML) return !1;
				let t = e.match(/^ *<([a-z][a-z0-9:-]*)\b/i);
				if (!t) return !1;
				let r = t[1];
				return e.toLowerCase().indexOf(`</${r.toLowerCase()}>`) !== -1;
			},
			_match: q(C),
			_order: i.HIGH,
			_parse(e, t, n) {
				let r = e[3].match(Se)?.[1] ?? "", i = We(e[3], r), a = b(i) ? Y : J, o = e[1].trim(), c = s.indexOf(o.toLowerCase()) !== -1, u = c ? o.toLowerCase() : o, d = {
					attrs: l(u, e[2] ?? ""),
					noInnerParse: c,
					tag: u
				};
				if (n.inAnchor = n.inAnchor || o.toLowerCase() === "a", c) d.text = e[3];
				else {
					let e = n.inHTML;
					n.inHTML = !0, d.children = a(t, i, n), n.inHTML = e;
				}
				return n.inAnchor = !1, d;
			},
			_render(t, n, r = {}) {
				return e(t.tag, {
					key: r.key,
					...t.attrs ?? {}
				}, t.text ?? (t.children ? n(t.children, r) : ""));
			}
		},
		[r.htmlComment]: {
			_qualify: ["<!"],
			_match: q(se),
			_order: i.HIGH,
			_parse: Z,
			_render: Q
		},
		[r.htmlSelfClosing]: {
			_qualify: (e) => n.disableParsingRawHTML ? !1 : /^ *<([a-zA-Z][a-zA-Z0-9:]*)[\s>/]/.test(e),
			_match: q(T),
			_order: i.HIGH,
			_parse(e) {
				let t = e[1].trim();
				return {
					attrs: l(t, e[2] || ""),
					tag: t
				};
			},
			_render(t, n, r = {}) {
				return e(t.tag, {
					key: r.key,
					...t.attrs ?? {}
				});
			}
		},
		[r.customComponent]: {
			_qualify: (e) => /^ *<([A-Z][a-zA-Z0-9]*)/.test(e),
			_match: q(E),
			_order: i.MAX,
			_parse(e, t, n) {
				let r = e[3].match(Se)?.[1] ?? "", i = We(e[3], r), a = b(i) ? Y : J, o = e[1].trim(), s = {
					attrs: l(o, e[2] ?? ""),
					noInnerParse: !1,
					tag: o
				}, c = n.inHTML;
				return n.inHTML = !0, s.children = a(t, i, n), n.inHTML = c, s;
			},
			_render(t, n, r = {}) {
				return e(t.tag, {
					key: r.key,
					...t.attrs ?? {}
				}, t.text ?? (t.children ? n(t.children, r) : ""));
			}
		},
		[r.paragraph]: {
			_match: fe,
			_order: i.LOW,
			_parse: X,
			_render(t, n, r = {}) {
				return e("p", { key: r.key }, n(t.children, r));
			}
		},
		[r.image]: {
			_qualify: ["!["],
			_match: G(rt),
			_order: i.HIGH,
			_parse(e) {
				return {
					alt: B(e[1]),
					target: B(e[2]),
					title: B(e[3])
				};
			},
			_render(t, n, r = {}) {
				return e("img", {
					key: r.key,
					alt: t.alt ?? void 0,
					title: t.title ?? void 0,
					src: w(t.target, "img", "src") ?? void 0
				});
			}
		},
		[r.link]: {
			_qualify: ["["],
			_match: W(it),
			_order: i.LOW,
			_parse(e, t, n) {
				return {
					children: $e(t, e[1], n),
					target: B(e[2]),
					title: B(e[3])
				};
			},
			_render(t, n, r = {}) {
				let i = w(t.target, "a", "href");
				return e("a", {
					key: r.key,
					href: i ?? void 0,
					title: t.title ?? void 0
				}, n(t.children, r));
			}
		},
		[r.linkAngleBraceStyleDetector]: {
			_qualify: ["<"],
			_match: W(ue),
			_order: i.MAX,
			_parse(e) {
				let t = e[1], n = !1;
				return t.indexOf("@") !== -1 && t.indexOf("//") === -1 && (n = !0, t = t.replace("mailto:", "")), {
					children: [{
						text: t,
						type: r.text
					}],
					target: n ? `mailto:${t}` : t,
					type: r.link
				};
			}
		},
		[r.linkBareUrlDetector]: {
			_qualify: (e, t) => !!(t.inline && !t.inAnchor && !n.disableAutoLink && (z(e, "http://") || z(e, "https://"))),
			_match: W(le),
			_order: i.MAX,
			_parse(e) {
				return {
					children: [{
						text: e[1],
						type: r.text
					}],
					target: e[1],
					type: r.link
				};
			}
		},
		[r.newlineCoalescer]: {
			_match: K(y),
			_order: i.LOW,
			_parse: Z,
			_render() {
				return "\n";
			}
		},
		[r.orderedList]: D(1),
		[r.unorderedList]: D(2),
		[r.ref]: {
			_qualify: ["["],
			_match: q(_e),
			_order: i.MAX,
			_parse(e) {
				return c[e[1]] = {
					target: e[2],
					title: e[4]
				}, {};
			},
			_render: Q
		},
		[r.refImage]: {
			_qualify: ["!["],
			_match: G(ve),
			_order: i.MAX,
			_parse(e) {
				return {
					alt: e[1] ? B(e[1]) : void 0,
					ref: e[2]
				};
			},
			_render(t, n, r = {}) {
				let i = c[t.ref];
				return i ? e("img", {
					key: r.key,
					alt: t.alt,
					src: w(i.target, "img", "src") ?? void 0,
					title: i.title
				}) : null;
			}
		},
		[r.refLink]: {
			_qualify: (e) => e[0] === "[" && e.indexOf("](") === -1,
			_match: W(ye),
			_order: i.MAX,
			_parse(e, t, n) {
				return {
					children: $e(t, e[1], n),
					fallbackChildren: e[0],
					ref: e[2]
				};
			},
			_render(t, n, r = {}) {
				let i = c[t.ref];
				return i ? e("a", {
					key: r.key,
					href: w(i.target, "a", "href") ?? void 0,
					title: i.title
				}, n(t.children, r)) : e("span", { key: r.key }, t.fallbackChildren);
			}
		},
		[r.table]: {
			_qualify: ["|"],
			_match: K(de),
			_order: i.HIGH,
			_parse(e, t, n) {
				n.inline = !0;
				let i = e[2] ? Ye(e[2]) : [], a = e[3] ? Ze(e[3], t, n) : [], o = Xe(e[1], t, n, !!a.length);
				return n.inline = !1, a.length ? {
					align: i,
					cells: a,
					header: o,
					type: r.table
				} : {
					children: o.flat(),
					type: r.paragraph
				};
			},
			_render(t, n, r = {}) {
				let i = t, a = (e) => i.align[e] && i.align[e] !== "left" ? { textAlign: i.align[e] } : {};
				return e("table", { key: r.key }, e("thead", null, e("tr", null, ...i.header.map((t, i) => e("th", {
					key: i,
					style: a(i)
				}, n(t, r))))), e("tbody", null, ...i.cells.map((t, i) => e("tr", { key: i }, ...t.map((t, i) => e("td", {
					key: i,
					style: a(i)
				}, n(t, r)))))));
			}
		},
		[r.tableSeparator]: {
			_match: (e, t) => t.inTable && e[0] === "|" ? /^\|/.exec(e) : null,
			_order: i.HIGH,
			_parse() {
				return { type: r.tableSeparator };
			},
			_render() {
				return " | ";
			}
		},
		[r.text]: {
			_match: U((e, t) => De.exec(e) || Ee.exec(e) || /^[\s\S]/.exec(e)),
			_order: i.MIN,
			_parse(e) {
				let t = e[0];
				return { text: t.indexOf("&") === -1 ? t : t.replace(oe, (e, t) => t.startsWith("#x") ? String.fromCharCode(parseInt(t.slice(2), 16)) : t.startsWith("#") ? String.fromCharCode(parseInt(t.slice(1), 10)) : ce[t] || e) };
			},
			_render(e) {
				return e.text;
			}
		},
		[r.textBolded]: {
			_qualify: ["**", "__"],
			_match: G(Oe),
			_order: i.MED,
			_parse(e, t, n) {
				return { children: t(e[2], n) };
			},
			_render(t, n, r = {}) {
				return e("strong", { key: r.key }, n(t.children, r));
			}
		},
		[r.textEmphasized]: {
			_qualify: ["*", "_"],
			_match: G(ke),
			_order: i.LOW,
			_parse(e, t, n) {
				return { children: t(e[2], n) };
			},
			_render(t, n, r = {}) {
				return e("em", { key: r.key }, n(t.children, r));
			}
		},
		[r.textEscaped]: {
			_qualify: ["\\"],
			_match: G(we),
			_order: i.HIGH,
			_parse(e) {
				return {
					text: e[1],
					type: r.text
				};
			}
		},
		[r.textMarked]: {
			_qualify: ["=="],
			_match: G(Ae),
			_order: i.LOW,
			_parse: X,
			_render(t, n, r = {}) {
				return e("mark", { key: r.key }, n(t.children, r));
			}
		},
		[r.textStrikethroughed]: {
			_qualify: ["~~"],
			_match: G(je),
			_order: i.LOW,
			_parse: X,
			_render(t, n, r = {}) {
				return e("del", { key: r.key }, n(t.children, r));
			}
		}
	};
}, ct = (e = "", t, n = {}) => {
	let i = t.components ?? {}, o = (e) => t.slugify ? t.slugify(e, H) : H(e), s = ot(t, n), c = [], u = {}, f = (e, n) => {
		if (!n || !n.trim()) return null;
		let r = n.match(l);
		return r ? r.reduce((n, r) => {
			let i = r.indexOf("=");
			if (i !== -1) {
				let o = Ge(r.slice(0, i)).trim(), s = ze(r.slice(i + 1).trim()), c = a[o] ?? o;
				if (c === "ref") return n;
				n[c] = qe(e, o, s, t.sanitizer ?? He), typeof n[c] == "string" && (C.test(n[c]) || T.test(n[c])) && (n[c] = b(n[c].trim()));
			} else r !== "style" && (n[a[r] ?? r] = !0);
			return n;
		}, {}) : null;
	}, p = [
		d,
		g,
		_,
		n.enforceAtxHeadings ? ie : re,
		ae,
		de,
		I,
		L,
		E
	], m = st(s, t, n, c, u, f, (e) => {
		let t = e.replace(O, ""), r = t.length > 2048 ? t.slice(0, 2048) : t;
		return et(n.disableParsingRawHTML ? p : [
			...p,
			ge,
			C,
			se,
			T,
			E
		], r);
	}, p), h = n.disableParsingRawHTML ? Object.keys(m).reduce((e, t) => (t !== r.htmlBlock && t !== r.htmlSelfClosing && (e[t] = m[t]), e), {}) : m, v = tt(h), y = $(nt(h, n.renderRule)), b = (e) => {
		let t = n.preserveFrontmatter ? e : e.replace(S, ""), r = n.forceInline || !n.forceBlock && be.test(t.replace(O, "")) === !1, a = y(v(r ? t : `${R(t).replace(O, "")}\n\n`, { inline: r }), { inline: r });
		for (; typeof a[a.length - 1] == "string" && !a[a.length - 1].trim();) a.pop();
		if (n.wrapper === null) return a;
		let o = n.wrapper ?? (r ? "span" : "div");
		if (a.length > 1 || n.forceWrapper) return s(o, { key: "outer" }, a);
		if (a.length === 1) {
			let e = a[0];
			if (typeof e == "string") {
				let t = { key: "outer" };
				if (!r && i) {
					let n = V(i, "p.props", {}) ?? {}, r = Be(t.className, n.className), a = {
						...t,
						...n
					};
					return r && (a.className = r), s("span", a, e);
				}
				return s("span", t, e);
			}
			return e;
		}
		return s(o, { key: "outer" }, null);
	};
	if (typeof e != "string") throw console.error("intlayer: the first argument must be a string. Received", typeof e), Error("intlayer: the first argument must be a string");
	let x = b(e);
	return c.length ? s("div", null, x, s("footer", { key: "footer" }, ...c.map((e) => s("div", {
		id: o(e.identifier),
		key: e.identifier
	}, e.identifier, y(v(e.footnote, { inline: !0 }), { inline: !0 }))))) : x;
}, lt = (e, t, n = {}) => {
	let { components: r, namedCodesToUnicode: i, sanitizer: a, slugify: o, ...s } = n;
	return ct(e, {
		runtime: t,
		components: r,
		namedCodesToUnicode: i,
		sanitizer: a,
		slugify: o
	}, s);
};
export { lt as compileWithOptions, n as getMarkdownMetadata };
var e = "translation", t = "enumeration", n = "condition", r = "insertion", i = "file", a = "object", o = "array", s = "reactNode", c = "markdown", l = "html";
export { l as a, a as c, i, s as l, n, r as o, t as r, c as s, o as t, e as u };
var e = {}, t = () => e;
export { t as getUnmergedDictionaries };
