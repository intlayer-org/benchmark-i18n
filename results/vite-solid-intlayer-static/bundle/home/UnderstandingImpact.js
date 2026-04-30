import { Dynamic, insert, template } from "solid-js/web";
import { createContext, createMemo, useContext } from "solid-js";
var understanding_impact_default = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"k\":\"Understanding the Impact\",\"p\":\"Why a single large JSON can hurt performance\",\"e\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"h\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"b\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"c\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"i\":\"The trade-offs of dynamic loading\",\"f\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"n\":\"Waterfall requests:\",\"g\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"d\":\"Flash of untranslated content (FOUC):\",\"m\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"a\":\"Cache invalidation:\",\"l\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\",\"o\":\"What this benchmark measures\",\"j\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"},\"fr\":{\"k\":\"Comprendre l'impact\",\"p\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"e\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"h\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"b\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"c\":\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"i\":\"Les compromis du chargement dynamique\",\"f\":\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\",\"n\":\"Requêtes en cascade :\",\"g\":\"l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ce qui ajoute des allers-retours sur le réseau.\",\"d\":\"Flash de contenu non traduit (FOUC) :\",\"m\":\"les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de secours avant que le morceau n'arrive.\",\"a\":\"Invalidation du cache :\",\"l\":\"la mise à jour des traductions nécessite des stratégies d'invalidation du cache (cache-busting) pour garantir que les utilisateurs reçoivent un contenu frais sans télécharger à nouveau les morceaux inchangés.\",\"o\":\"Ce que ce benchmark mesure\",\"j\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"},\"es\":{\"k\":\"Entendiendo el impacto\",\"p\":\"Por qué un único JSON grande puede perjudicar el rendimiento\",\"e\":\"Muchas bibliotecas i18n almacenan traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"h\":\"El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\",\"b\":\"Las arquitecturas basadas en el contexto pueden causar re-renderizaciones en cascada cuando cambia la configuración regional, porque cada consumidor es notificado incluso si sus claves específicas no cambiaron.\",\"c\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.\",\"i\":\"Los compromisos de la carga dinámica\",\"f\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"n\":\"Solicitudes en cascada:\",\"g\":\"la aplicación debe cargarse primero, determinar la configuración regional y luego buscar el fragmento correcto, lo que añade recorridos de red.\",\"d\":\"Destello de contenido no traducido (FOUC):\",\"m\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\",\"a\":\"Invalidación de caché:\",\"l\":\"actualizar las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido nuevo sin volver a descargar fragmentos sin cambios.\",\"o\":\"Qué mide este benchmark\",\"j\":\"Esta aplicación de prueba proporciona un entorno controlado (10 páginas con contenido realista) para comparar bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y representar contenido traducido y la efectividad de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"},\"de\":{\"k\":\"Die Auswirkungen verstehen\",\"p\":\"Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\",\"e\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:\",\"h\":\"Das JSON muss bei jedem Laden der Seite geparst werden — was den Haupt-Thread blockiert.\",\"b\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, selbst wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"c\":\"Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Größe des Dokuments erhöht, das heruntergeladen und hydriert werden muss.\",\"i\":\"Die Kompromisse beim dynamischen Laden\",\"f\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Aber es bringt neue Herausforderungen mit sich:\",\"n\":\"Waterfall-Anfragen:\",\"g\":\"die App muss zuerst geladen werden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was Netzwerk-Roundtrips hinzufügt.\",\"d\":\"Flash of untranslated content (FOUC):\",\"m\":\"Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Ersatzsprache, bevor der Chunk eintrifft.\",\"a\":\"Cache-Invalidierung:\",\"l\":\"Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\",\"o\":\"Was dieser Benchmark misst\",\"j\":\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt — um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"},\"it\":{\"k\":\"Comprendere l'impatto\",\"p\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"e\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:\",\"h\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"b\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la lingua cambia, perché ogni consumatore viene informato anche se le sue chiavi specifiche non sono cambiate.\",\"c\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.\",\"i\":\"I compromessi del caricamento dinamico\",\"f\":\"La suddivisione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"n\":\"Richieste waterfall:\",\"g\":\"l'app deve prima caricarsi, determinare la lingua, quindi recuperare il chunk corretto, aggiungendo round-trip di rete.\",\"d\":\"Flash di contenuti non tradotti (FOUC):\",\"m\":\"gli utenti potrebbero vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\",\"a\":\"Invalidazione della cache:\",\"l\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i chunk invariati.\",\"o\":\"Cosa misura questo benchmark\",\"j\":\"Questa app di test fornisce un ambiente controllato (10 pagine con contenuti realistici) per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo speso per l'analisi e il rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\"},\"pt\":{\"k\":\"Entendendo o impacto\",\"p\":\"Por que um único JSON grande pode perjudicar o desempenho\",\"e\":\"Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando esse objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\",\"h\":\"O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\",\"b\":\"Arquiteturas baseadas em contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\",\"c\":\"Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\",\"i\":\"Os trade-offs do carregamento dinâmico\",\"f\":\"Dividir traduções em blocos por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\",\"n\":\"Requisições em cascata:\",\"g\":\"a aplicação deve carregar primeiro, determinar o idioma e depois buscar o bloco correto — adicionando viagens de ida e volta na rede.\",\"d\":\"Flash de conteúdo não traduzido (FOUC):\",\"m\":\"os usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes que o bloco chegue.\",\"a\":\"Invalidação de cache:\",\"l\":\"a atualização das traduções requer estratégias de invalidação de cache para garantir que os usuários recebam conteúdo atualizado sem baixar novamente blocos inalterados.\",\"o\":\"O que este benchmark mede\",\"j\":\"Este aplicativo de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu pacote JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada ao mesmo aplicativo para que os resultados sejam diretamente comparáveis.\"},\"zh\":{\"k\":\"了解影响\",\"p\":\"为什么单个大型 JSON 会损害性能\",\"e\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：\",\"h\":\"JSON 必须在每次页面加载时解析——阻塞主线程。\",\"b\":\"当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使其特定键未更改，每个消费者也会收到通知。\",\"c\":\"在服务器端渲染期间，整个字典被序列化为 HTML 负载，增加了必须下载和水合的文档大小。\",\"i\":\"动态加载的权衡\",\"f\":\"将翻译拆分为每个路由或每个命名空间的块可以显着减少初始负载。但它引入了新的挑战：\",\"n\":\"瀑布请求：\",\"g\":\"应用程序必须首先加载，确定语言环境，然后获取正确的块——这增加了网络往返。\",\"d\":\"未翻译内容的闪烁 (FOUC)：\",\"m\":\"在块到达之前，用户可能会短暂地看到翻译键或回退语言。\",\"a\":\"缓存失效：\",\"l\":\"更新翻译需要缓存失效策略，以确保用户在不重新下载未更改块的情况下获得新鲜内容。\",\"o\":\"此基准测试衡量什么\",\"j\":\"此测试应用程序提供了一个受控环境——包含 10 个具有真实内容的页面——以便从三个维度比较 i18n 库：它们为 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成到同一个应用程序中，因此结果具有直接可比性。\"},\"ja\":{\"k\":\"影響を理解する\",\"p\":\"なぜ単一の大きなJSONがパフォーマンスを低下させるのか\",\"e\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキー）場合、翻訳を消費するすべてのコンポーネントが辞书全体への参照を保持します。これは以下のことを意味します：\",\"h\":\"JSONはページがロードされるたびに解析される必要があり、メインスレッドをブロックします。\",\"b\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的なリレンダリングが発生する可能性があります。\",\"c\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードしてハイドレーションする必要があるドキュメントサイズが増加します。\",\"i\":\"動的ロードのトレードオフ\",\"f\":\"翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを大幅に削減できます。しかし、それは新たな課題をもたらします：\",\"n\":\"ウォーターフォールリクエスト：\",\"g\":\"アプリは最初にロードし、ロケールを決定してから、適切なチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\",\"d\":\"翻訳されていないコンテンツのちらつき（FOUC）：\",\"m\":\"チャンクが到着する前に、ユーザーは翻訳キーやフォールバック言語を一時的に目にすることがあります。\",\"a\":\"キャッシュの無効化：\",\"l\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードすることなく、ユーザーが最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。\",\"o\":\"このベンチマークが測定するもの\",\"j\":\"このテストアプリは、制御された環境（現実的なコンテンツを含む10ページ）を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重み、翻訳されたコンテンツの解析とレンダリングに費やされる時間、およびコード分割と遅延ロード戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\"},\"ko\":{\"k\":\"영향 이해\",\"p\":\"단일 대용량 JSON이 성능을 저하시킬 수 있는 이유\",\"e\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 때(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유합니다. 이는 다음을 의미합니다.\",\"h\":\"JSON은 페이지를 로드할 때마다 파싱되어야 하므로 메인 스レッド을 차단합니다.\",\"b\":\"컨텍스트 기반 아키텍처는 로케일이 변경될 때 계단식 리렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.\",\"c\":\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 수화해야 하는 문서 크기가 커집니다.\",\"i\":\"동적 로드의 트레이드오프\",\"f\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 이는 새로운 과제를 안겨줍니다.\",\"n\":\"워터폴 요청:\",\"g\":\"앱은 먼저 로드되어 로케일을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\",\"d\":\"번역되지 않은 콘텐츠의 플래시(FOUC):\",\"m\":\"청크가 도착하기 전에 사용자는 번역 키나 폴백 언어를 잠시 볼 수 있습니다.\",\"a\":\"캐시 무효화:\",\"l\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고 최신 콘텐츠를 받을 수 있도록 캐시 버스팅 전략이 필요합니다.\",\"o\":\"이 벤치마크가 측정하는 것\",\"j\":\"이 테스트 앱은 10개의 실제 콘텐츠 페이지가 포함된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다. JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 있으므로 결과를 직접 비교할 수 있습니다.\"},\"ru\":{\"k\":\"Понимание влияния\",\"p\":\"Почему один большой JSON может снизить производительность\",\"e\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"h\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"b\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"c\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"i\":\"Компромиссы динамической загрузки\",\"f\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"n\":\"Каскадные запросы (Waterfall requests):\",\"g\":\"приложение должно сначала загрузиться, определить локаль, а затем получить нужный чанк — это добавляет сетевые задержки.\",\"d\":\"Мерцание непереведенного контента (FOUC):\",\"m\":\"пользователи могут на мгновение увидеть ключи перевода или резервный язык до того, как придет чанк.\",\"a\":\"Инвалидация кэша:\",\"l\":\"обновление переводов требует стратегий аннулирования кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных чанков.\",\"o\":\"Что измеряет этот бенчмарк\",\"j\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека измеряется в идентичных условиях.\"}}}")
};
var e = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
};
var t = (n) => {
	if (typeof n == "string") return n;
	let { type: r, props: i } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let n = [], { children: r } = e.props;
			return Object.keys(r ?? {}).forEach((e) => {
				n.push(t(r?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: n
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
	})(n);
	return Dynamic({
		component: r ?? "span",
		...i,
		children: i.children
	});
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
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
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
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
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
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
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
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, S$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { plugins: a, ...o }) => e({
		...o,
		value: o.children,
		children: o.children
	})
}, C = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (a, { plugins: o, ...s }) => e({
		...s,
		value: "[[solid-element]]",
		children: typeof Node < "u" && a instanceof Node ? a : t(a)
	})
}, T = fallbackPlugin, D = fallbackPlugin, O = fallbackPlugin, k = /* @__PURE__ */ new Map(), A = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (k.has(n)) return k.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		S$1,
		C,
		T,
		D,
		O
	];
	return k.set(n, r), r;
};
var n = (n, r) => getDictionary(n, r, A(r));
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
}, localeStorageOptions = {
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
}, a = getLocaleFromStorageClient(localeStorageOptions), y = createContext({
	locale: () => a ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var i = (i, a) => {
	let o = useContext(y) ?? {};
	return createMemo(() => n(i, a ?? o?.locale?.()));
};
var _tmpl$ = template(`<section class="mb-16 mx-auto max-w-3xl space-y-6"><h2 class="text-2xl font-bold text-foreground"></h2><div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground"></p><ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground"><li></li><li></li><li></li></ul></div><div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground"></p><ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground"><li><strong class=text-foreground></strong></li><li><strong class=text-foreground></strong> </li><li><strong class=text-foreground></strong></li></ul></div><div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground">`);
function UnderstandingImpact() {
	const content = i(understanding_impact_default);
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$7 = _el$5.nextSibling.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$8.nextSibling, _el$0 = _el$3.nextSibling, _el$1 = _el$0.firstChild, _el$10 = _el$1.nextSibling, _el$12 = _el$10.nextSibling.firstChild, _el$13 = _el$12.firstChild, _el$14 = _el$12.nextSibling, _el$15 = _el$14.firstChild;
		_el$15.nextSibling;
		var _el$17 = _el$14.nextSibling, _el$18 = _el$17.firstChild, _el$20 = _el$0.nextSibling.firstChild, _el$21 = _el$20.nextSibling;
		insert(_el$2, () => content().understandingTheImpact);
		insert(_el$4, () => content().whyASingleLargeJson);
		insert(_el$5, () => content().manyI18nLibrariesStoreTranslations);
		insert(_el$7, () => content().theJsonMustBeParsed);
		insert(_el$8, () => content().contextBasedArchitecturesCanCause);
		insert(_el$9, () => content().duringServerSideRenderingThe);
		insert(_el$1, () => content().theTradeOffsOfDynamic);
		insert(_el$10, () => content().splittingTranslationsIntoPerRoute);
		insert(_el$13, () => content().waterfallRequests);
		insert(_el$12, () => content().theAppMustFirstLoad, null);
		insert(_el$15, () => content().flashOfUntranslatedContentFouc);
		insert(_el$14, () => content().usersMayBrieflySeeTranslation, null);
		insert(_el$18, () => content().cacheInvalidation);
		insert(_el$17, () => content().updatingTranslationsRequiresCacheBusting, null);
		insert(_el$20, () => content().whatThisBenchmarkMeasures);
		insert(_el$21, () => content().thisTestAppProvidesA);
		return _el$;
	})();
}
export { UnderstandingImpact as default };
