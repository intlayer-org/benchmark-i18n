import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext, onMount } from "svelte";
import { derived, writable } from "svelte/store";
var understanding_impact_default = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"title\":\"Understanding the Impact\",\"largeJson\":{\"title\":\"Why a single large JSON can hurt performance\",\"description\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"points\":[\"The JSON must be parsed on every page load — blocking the main thread.\",\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\"]},\"dynamicLoading\":{\"title\":\"The trade-offs of dynamic loading\",\"description\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"points\":[{\"label\":\"Waterfall requests:\",\"text\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\"},{\"label\":\"Flash of untranslated content (FOUC):\",\"text\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\"},{\"label\":\"Cache invalidation:\",\"text\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\"}]},\"benchmarkMeasures\":{\"title\":\"What this benchmark measures\",\"description\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"}},\"fr\":{\"title\":\"Comprendre l'impact\",\"largeJson\":{\"title\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"description\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"points\":[\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\"]},\"dynamicLoading\":{\"title\":\"Les compromis du chargement dynamique\",\"description\":\"La répartition des traductions en morceaux par itinéraire ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :\",\"points\":[{\"label\":\"Requêtes en cascade :\",\"text\":\"l'application doit d'abord charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.\"},{\"label\":\"Flash de contenu non traduit (FOUC) :\",\"text\":\"les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de repli avant l'arrivée du morceau.\"},{\"label\":\"Invalidation du cache :\",\"text\":\"la mise à jour des traductions nécessite des stratégies de cassage de cache pour garantir que les utilisateurs reçoivent du contenu frais sans re-télécharger les morceaux inchangés.\"}]},\"benchmarkMeasures\":{\"title\":\"Ce que ce benchmark mesure\",\"description\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"}},\"es\":{\"title\":\"Comprender el impacto\",\"largeJson\":{\"title\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\",\"description\":\"Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"points\":[\"El JSON debe analizarse en cada carga de página, lo que bloquea el hilo principal.\",\"Las arquitecturas basadas en contexto pueden causar re-renderizados en cascada cuando cambia el idioma, porque se notifica a cada consumidor incluso si sus claves específicas no han cambiado.\",\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.\"]},\"dynamicLoading\":{\"title\":\"Las compensaciones de la carga dinámica\",\"description\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"points\":[{\"label\":\"Solicitudes en cascada:\",\"text\":\"la aplicación debe cargarse primero, determinar el idioma y luego buscar el fragmento correcto, lo que añade viajes de ida y vuelta a la red.\"},{\"label\":\"Destello de contenido no traducido (FOUC):\",\"text\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\"},{\"label\":\"Invalidación de caché:\",\"text\":\"actualizar las traducciones requiere estrategias de eliminación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.\"}]},\"benchmarkMeasures\":{\"title\":\"Qué mide este benchmark\",\"description\":\"Esta aplicación de prueba proporciona un entorno controlado (10 páginas con contenido realista) para comparar las bibliotecas i18n en tres ejes: el peso que agregan a su paquete JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la efectividad de sus estrategias de división de código y carga perezosa. Cada biblioteca está integrada en la misma aplicación para que los resultados sean directamente comparables.\"}},\"de\":{\"title\":\"Den Einfluss verstehen\",\"largeJson\":{\"title\":\"Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\",\"description\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen konsumiert, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"points\":[\"Das JSON muss bei jedem Laden der Seite analysiert werden – das blockiert den Haupt-Thread.\",\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"Beim serverseitigen Rendering wird das vollständige Wörterbuch in die HTML-Nutzlast serialisiert, was die Größe des Dokuments erhöht, das heruntergeladen und hydriert werden muss.\"]},\"dynamicLoading\":{\"title\":\"Die Kompromisse des dynamischen Ladens\",\"description\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder Namensraum kann die anfängliche Nutzlast drastisch reduzieren. Aber es bringt neue Herausforderungen mit sich:\",\"points\":[{\"label\":\"Wasserfall-Anfragen:\",\"text\":\"Die App muss zuerst geladen werden, die Sprache bestimmen und dann den richtigen Chunk abrufen – das führt zu zusätzlichen Netzwerk-Rundreisen.\"},{\"label\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"text\":\"Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Ersatzsprache, bevor der Chunk eintrifft.\"},{\"label\":\"Cache-Invalidierung:\",\"text\":\"Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer aktuelle Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\"}]},\"benchmarkMeasures\":{\"title\":\"Was dieser Benchmark misst\",\"description\":\"Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischem Inhalt –, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit für das Parsen und Rendern übersetzter Inhalte und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"}},\"it\":{\"title\":\"Comprendere l'impatto\",\"largeJson\":{\"title\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"description\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che utilizza le traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:\",\"points\":[\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"Le architetture basate sul contesto possono causare rendering a cascata quando la lingua cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.\"]},\"dynamicLoading\":{\"title\":\"I compromessi del caricamento dinamico\",\"description\":\"La suddivisione delle traduzioni in blocchi per percorso o per spazio dei nomi può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"points\":[{\"label\":\"Richieste a cascata:\",\"text\":\"l'app deve prima caricarsi, determinare la lingua, quindi recuperare il blocco giusto, aggiungendo round-trip di rete.\"},{\"label\":\"Flash di contenuti non tradotti (FOUC):\",\"text\":\"gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il blocco.\"},{\"label\":\"Invalidazione della cache:\",\"text\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i blocchi invariati.\"}]},\"benchmarkMeasures\":{\"title\":\"Cosa misura questo benchmark\",\"description\":\"Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al bundle JavaScript, il tempo speso per analizzare e renderizzare i contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente comparabili.\"}},\"pt\":{\"title\":\"Compreendendo o Impacto\",\"largeJson\":{\"title\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"description\":\"Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido por meio do contexto React. Quando esse objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\",\"points\":[\"O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\",\"Arquiteturas baseadas em contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\",\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil do HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\"]},\"dynamicLoading\":{\"title\":\"As compensações do carregamento dinâmico\",\"description\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas apresenta novos desafios:\",\"points\":[{\"label\":\"Solicitações em cascata:\",\"text\":\"o aplicativo deve primeiro carregar, determinar o idioma e depois buscar a parte correta — adicionando idas e vindas de rede.\"},{\"label\":\"Flash de conteúdo não traduzido (FOUC):\",\"text\":\"os usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes que a parte chegue.\"},{\"label\":\"Invalidação de cache:\",\"text\":\"a atualização de traduções requer estratégias de quebra de cache para garantir que os usuários obtenham conteúdo novo sem baixar novamente as partes inalteradas.\"}]},\"benchmarkMeasures\":{\"title\":\"O que este benchmark mede\",\"description\":\"Este aplicativo de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu pacote JavaScript, o tempo gasto analisando e renderizando o conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada ao mesmo aplicativo para que os resultados sejam diretamente comparáveis.\"}},\"zh\":{\"title\":\"了解其影响\",\"largeJson\":{\"title\":\"为什么单个大型 JSON 会损害性能\",\"description\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都持有对整个词典的引用。这意味着：\",\"points\":[\"JSON 必须在每次页面加载时进行解析——阻塞主线程。\",\"当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键没有更改，也会通知每个消费者。\",\"在服务器端渲染期间，完整的词典被序列化为 HTML 负载，增加了必须下载和注水的文档大小。\"]},\"dynamicLoading\":{\"title\":\"动态加载的权衡\",\"description\":\"将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它也带来了新的挑战：\",\"points\":[{\"label\":\"瀑布请求：\",\"text\":\"应用程序必须首先加载，确定语言环境，然后获取正确的块——增加了网络往返。\"},{\"label\":\"未翻译内容的闪烁 (FOUC)：\",\"text\":\"用户可能会在块到达之前短暂看到翻译键或回退语言。\"},{\"label\":\"缓存失效：\",\"text\":\"更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。\"}]},\"benchmarkMeasures\":{\"title\":\"此基准测试衡量什么\",\"description\":\"此测试应用程序提供了一个受控环境——包含 10 个具有真实内容的页面——从三个维度比较 i18n 库：它们为 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成到同一个应用程序中，因此结果具有直接可比性。\"}},\"ja\":{\"title\":\"影響を理解する\",\"largeJson\":{\"title\":\"単一の大きなJSONがパフォーマンスを低下させる理由\",\"description\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが巨大な場合（数千のキー）、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。これは以下を意味します：\",\"points\":[\"ページをロードするたびにJSONを解析する必要があり、メインスレッドをブロックします。\",\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。\",\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードしてハイドレーションする必要があるドキュメントのサイズが増加します。\"]},\"dynamicLoading\":{\"title\":\"動的ロードのトレードオフ\",\"description\":\"翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、それは新しい課題をもたらします：\",\"points\":[{\"label\":\"ウォーターフォールリクエスト：\",\"text\":\"アプリはまずロードし、ロケールを特定してから、適切なチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\"},{\"label\":\"翻訳されていないコンテンツのフラッシュ（FOUC）：\",\"text\":\"チャンクが到着する前に、ユーザーは翻訳キーやフォールバック言語を一時的に目にする可能性があります。\"},{\"label\":\"キャッシュの無効化：\",\"text\":\"翻訳の更新には、変更されていないチャンクを再ダウンロードすることなく、ユーザーが最新のコンテンツを確実に取得できるようにするためのキャッシュ無効化戦略が必要です。\"}]},\"benchmarkMeasures\":{\"title\":\"このベンチマークが測定するもの\",\"description\":\"このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します。それは、JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、およびコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果は直接比較可能です。\"}},\"ko\":{\"title\":\"영향 이해하기\",\"largeJson\":{\"title\":\"단일 대형 JSON이 성능을 저하시킬 수 있는 이유\",\"description\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 크면(수천 개의 키) 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다.\",\"points\":[\"페이지를 로드할 때마다 JSON을 구문 분석해야 하므로 메인 스레드가 차단됩니다.\",\"컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 재렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않더라도 모든 소비자가 알림을 받기 때문입니다.\",\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 커집니다.\"]},\"dynamicLoading\":{\"title\":\"동적 로딩의 트레이드오프\",\"description\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 다음과 같은 새로운 과제가 발생합니다.\",\"points\":[{\"label\":\"폭포수 요청:\",\"text\":\"앱이 먼저 로드되어 로캘을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\"},{\"label\":\"번역되지 않은 콘텐츠의 플래시(FOUC):\",\"text\":\"청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠시 볼 수 있습니다.\"},{\"label\":\"캐시 무효화:\",\"text\":\"번역을 업데이트하려면 변경되지 않은 청크를 다시 다운로드하지 않고도 사용자가 최신 콘텐츠를 받을 수 있도록 캐시 무효화 전략이 필요합니다.\"}]},\"benchmarkMeasures\":{\"title\":\"이 벤치마크가 측정하는 항목\",\"description\":\"이 테스트 앱은 10페이지의 현실적인 콘텐츠가 포함된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다. JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과성입니다. 각 라이브러리는 동일한 앱에 통합되어 있으므로 결과를 직접 비교할 수 있습니다.\"}},\"ru\":{\"title\":\"Понимание влияния\",\"largeJson\":{\"title\":\"Почему один большой JSON может снизить производительность\",\"description\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект велик (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"points\":[\"JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\",\"Архитектура на основе контекста может вызывать каскадные повторные рендеринги при изменении локали, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\",\"При серверном рендеринге весь словарь сериализуется в HTML-код, что увеличивает размер документа, который необходимо загрузить и гидратировать.\"]},\"dynamicLoading\":{\"title\":\"Компромиссы динамической загрузки\",\"description\":\"Разделение переводов на фрагменты по маршрутам или пространствам имен может значительно сократить начальный объем данных. Но это создает новые проблемы:\",\"points\":[{\"label\":\"Каскадные запросы:\",\"text\":\"приложение должно сначала загрузиться, определить локаль, а затем получить нужный фрагмент, что добавляет сетевые задержки.\"},{\"label\":\"Вспышка непереведенного контента (FOUC):\",\"text\":\"пользователи могут ненадолго увидеть ключи перевода или резервный язык до того, как фрагмент будет получен.\"},{\"label\":\"Инвалидация кэша:\",\"text\":\"обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных фрагментов.\"}]},\"benchmarkMeasures\":{\"title\":\"Что измеряет этот бенчмарк\",\"description\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\"}}}}")
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
var defaultLocale = internationalization?.defaultLocale;
var createIntlayerStore = () => {
	const { subscribe, set, update } = writable({ locale: defaultLocale });
	return {
		subscribe,
		setLocale: (locale) => update((store) => ({
			...store,
			locale
		})),
		getLocale: () => derived({ subscribe }, ($store) => $store.locale),
		reset: () => set({ locale: defaultLocale })
	};
};
var intlayerStore = createIntlayerStore();
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
var DEFAULT_VARIANT_ID = "default";
var SEGMENT_UNSAFE_CHARS = /[^A-Za-z0-9._&=-]/g;
var COMPONENT_UNSAFE_CHARS = /[^A-Za-z0-9._-]/g;
var percentEncodeChar = (char) => `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
var encodeSegmentText = (raw, unsafeChars) => {
	if (raw === "") return "%";
	const encoded = raw.replace(unsafeChars, percentEncodeChar);
	if (encoded === "." || encoded === "..") return encoded.replace(/\./g, "%002E");
	return encoded;
};
var serializeVariant = (variant) => {
	if (variant === void 0) return DEFAULT_VARIANT_ID;
	if (typeof variant === "string") return encodeSegmentText(variant, SEGMENT_UNSAFE_CHARS);
	return Object.keys(variant).sort().map((field) => `${encodeSegmentText(field, COMPONENT_UNSAFE_CHARS)}=${encodeSegmentText(String(variant[field]), COMPONENT_UNSAFE_CHARS)}`).join("&");
};
var serializeVariantChain = (variant) => {
	if (!Array.isArray(variant)) return [serializeVariant(variant)];
	if (variant.length === 0) return [DEFAULT_VARIANT_ID];
	return variant.map(serializeVariant);
};
var resolveEffectiveVariantId = (requestedVariantIds, isVariantIdDeclared) => {
	for (const requestedVariantId of requestedVariantIds) if (isVariantIdDeclared(requestedVariantId)) return requestedVariantId;
	return isVariantIdDeclared("default") ? DEFAULT_VARIANT_ID : requestedVariantIds[0] ?? "default";
};
var compositeIdMatchesSelector = (compositeId, qualifierTypes, selector, effectiveVariantId) => {
	const segments = compositeId.split("/");
	return qualifierTypes.every((qualifierType, index) => {
		if (qualifierType === "variant") return segments[index] === effectiveVariantId;
		return selector?.item === void 0 || segments[index] === String(selector.item);
	});
};
var isQualifiedDictionaryGroup = (value) => typeof value === "object" && value !== null && "qualifierTypes" in value && Array.isArray(value.qualifierTypes) && "content" in value;
var reconstructQualifiedEntry = (group, compositeId) => {
	const segments = compositeId.split("/");
	const entry = {
		key: group.key,
		content: group.content[compositeId]
	};
	group.qualifierTypes.forEach((qualifierType, index) => {
		if (qualifierType === "variant") entry.variant = segments[index];
		else if (qualifierType === "item") entry.item = Number(segments[index]);
	});
	return entry;
};
var resolveQualifiedDictionary = (dictionaryOrGroup, selector) => {
	if (!isQualifiedDictionaryGroup(dictionaryOrGroup)) return dictionaryOrGroup;
	const { qualifierTypes, content } = dictionaryOrGroup;
	const itemAxisOpen = qualifierTypes.includes("item") && selector?.item === void 0;
	const compositeIds = Object.keys(content);
	const variantIndex = qualifierTypes.indexOf("variant");
	const effectiveVariantId = variantIndex === -1 ? DEFAULT_VARIANT_ID : resolveEffectiveVariantId(serializeVariantChain(selector?.variant), (variantId) => compositeIds.some((compositeId) => compositeId.split("/")[variantIndex] === variantId));
	const matchedEntries = compositeIds.filter((compositeId) => compositeIdMatchesSelector(compositeId, qualifierTypes, selector, effectiveVariantId)).map((compositeId) => reconstructQualifiedEntry(dictionaryOrGroup, compositeId));
	if (itemAxisOpen) return matchedEntries.sort((left, right) => (left.item ?? 0) - (right.item ?? 0));
	return matchedEntries[0] ?? null;
};
var parseDictionarySelector = (localeOrSelector) => {
	if (typeof localeOrSelector === "object" && localeOrSelector !== null) return {
		locale: localeOrSelector.locale,
		selector: localeOrSelector
	};
	return { locale: localeOrSelector };
};
var getDictionarySelectorCacheKey = (selector) => {
	if (!selector) return "";
	return Object.keys(selector).filter((selectorKey) => selectorKey !== "locale").sort().map((selectorKey) => {
		const value = selector[selectorKey];
		return `${selectorKey}:${selectorKey === "variant" ? serializeVariantChain(value).join(",") : String(value)}`;
	}).join("|");
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], childProps);
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], childProps);
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
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = parseDictionarySelector(localeOrSelector);
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, getDictionarySelectorCacheKey(selector), plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = resolveQualifiedDictionary(dictionary, selector);
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries
		};
		return getContent(resolvedDictionary.content, props, appliedPlugins);
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
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
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
function IntlayerNodeWrapper($$anchor, $$props) {
	$.push($$props, false);
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	let ResolvedRenderer = $.mutable_source();
	let isAwaitingRenderer = $.mutable_source(false);
	$.legacy_pre_effect(() => $.deep_read_state(Renderer()), () => {
		if (typeof Renderer()?.then === "function") {
			$.set(isAwaitingRenderer, true);
			Renderer().then((component) => {
				$.set(ResolvedRenderer, component);
				$.set(isAwaitingRenderer, false);
			});
		} else {
			$.set(ResolvedRenderer, Renderer());
			$.set(isAwaitingRenderer, false);
		}
	});
	$.legacy_pre_effect_reset();
	$.init();
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {};
	var consequent_1 = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, () => $.get(ResolvedRenderer), false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_2 = ($$anchor) => {
		$.get(ResolvedRenderer)($$anchor, $.spread_props(rendererProps, {
			children: ($$anchor, $$slotProps) => {
				$.next();
				var text_1 = $.text();
				$.template_effect(() => $.set_text(text_1, value()));
				$.append($$anchor, text_1);
			},
			$$slots: { default: true }
		}));
	};
	var alternate = ($$anchor) => {
		var text_2 = $.text();
		$.template_effect(() => $.set_text(text_2, value()));
		$.append($$anchor, text_2);
	};
	$.if(node, ($$render) => {
		if ($.get(isAwaitingRenderer)) $$render(consequent);
		else if (typeof $.get(ResolvedRenderer) === "string") $$render(consequent_1, 1);
		else if (typeof $.get(ResolvedRenderer) === "function") $$render(consequent_2, 2);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
	$.pop();
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = class extends IntlayerNodeWrapper {
		constructor(options) {
			super({
				...options,
				props: {
					...options.props,
					Renderer: args.component,
					rendererProps: args.props,
					value: args.value
				}
			});
		}
	};
	else Node = (props) => {
		return IntlayerNodeWrapper(props, {
			Renderer: args.component,
			rendererProps: args.props,
			value: args.value
		});
	};
	Object.defineProperty(Node, "value", {
		value: args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "toString", {
		value: () => String(args.value ?? ""),
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "valueOf", {
		value: () => args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, Symbol.toPrimitive, {
		value: () => args.value ?? "",
		writable: true,
		configurable: true
	});
	if (args.value !== null && args.value !== void 0) {
		const valObj = Object(args.value);
		const proto = Object.getPrototypeOf(valObj);
		for (const prop of Object.getOwnPropertyNames(proto)) {
			if (prop === "constructor" || prop in Node) continue;
			const valProp = valObj[prop];
			if (typeof valProp === "function") Object.defineProperty(Node, prop, {
				value: valProp.bind(args.value),
				writable: true,
				configurable: true
			});
		}
	}
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, { children, ...rest }) => {
		return renderIntlayerNode({
			value: children ?? node,
			component: void 0,
			props: rest
		});
	}
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		intlayerNodePlugins,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var useDictionary = (dictionary, localeOrSelector) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		const contextLocale = context?.locale ?? $store.locale;
		return getDictionary(dictionary, localeOrSelector ?? contextLocale);
	});
};
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	onMount(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch {}
		}
	});
}
var root = $.from_html(`<li> </li>`);
var root_1 = $.from_html(`<li><strong class="text-foreground"> </strong> </li>`);
var root_2 = $.from_html(`<section class="mx-auto mb-16 max-w-3xl space-y-6"><h2 class="text-2xl font-bold text-foreground"> </h2> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground"></ul></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground"></ul></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></section>`);
function UnderstandingImpact($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	usePerformanceMeasure("UnderstandingImpact");
	const content = useDictionary(understanding_impact_default);
	$.init();
	var section = root_2();
	var h2 = $.child(section);
	var text = $.only_child(h2, true);
	var div = $.sibling(h2, 2);
	var h3 = $.child(div);
	var text_1 = $.only_child(h3, true);
	var p = $.sibling(h3, 2);
	var text_2 = $.only_child(p, true);
	var ul = $.sibling(p, 2);
	$.each(ul, 5, () => $content().largeJson.points, $.index, ($$anchor, point) => {
		var li = root();
		var text_3 = $.only_child(li, true);
		$.template_effect(() => $.set_text(text_3, $.get(point)));
		$.append($$anchor, li);
	});
	$.reset(ul);
	$.reset(div);
	var div_1 = $.sibling(div, 2);
	var h3_1 = $.child(div_1);
	var text_4 = $.only_child(h3_1, true);
	var p_1 = $.sibling(h3_1, 2);
	var text_5 = $.only_child(p_1, true);
	var ul_1 = $.sibling(p_1, 2);
	$.each(ul_1, 5, () => $content().dynamicLoading.points, $.index, ($$anchor, point) => {
		var li_1 = root_1();
		var strong = $.child(li_1);
		var text_6 = $.only_child(strong, true);
		var text_7 = $.sibling(strong);
		$.reset(li_1);
		$.template_effect(() => {
			$.set_text(text_6, $.get(point).label);
			$.set_text(text_7, ` ${$.get(point).text ?? ""}`);
		});
		$.append($$anchor, li_1);
	});
	$.reset(ul_1);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h3_2 = $.child(div_2);
	var text_8 = $.only_child(h3_2, true);
	var p_2 = $.sibling(h3_2, 2);
	var text_9 = $.only_child(p_2, true);
	$.reset(div_2);
	$.reset(section);
	$.template_effect(() => {
		$.set_text(text, $content().title);
		$.set_text(text_1, $content().largeJson.title);
		$.set_text(text_2, $content().largeJson.description);
		$.set_text(text_4, $content().dynamicLoading.title);
		$.set_text(text_5, $content().dynamicLoading.description);
		$.set_text(text_8, $content().benchmarkMeasures.title);
		$.set_text(text_9, $content().benchmarkMeasures.description);
	});
	$.append($$anchor, section);
	$.pop();
	$$cleanup();
}
export { UnderstandingImpact as default };
