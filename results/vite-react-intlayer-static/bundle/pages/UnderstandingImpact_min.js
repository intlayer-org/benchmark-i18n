import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useMemo as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
var l = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"o\":\"Understanding the Impact\",\"t\":\"Why a single large JSON can hurt performance\",\"g\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"l\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"c\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"d\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"m\":\"The trade-offs of dynamic loading\",\"j\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"r\":\"Waterfall requests:\",\"e\":\"Flash of untranslated content (FOUC):\",\"a\":\"Cache invalidation:\",\"s\":\"What this benchmark measures\",\"n\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\",\"k\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"q\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"p\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\"},\"fr\":{\"o\":\"Comprendre l'impact\",\"t\":\"Pourquoi un seul grand JSON peut nuire aux performances\",\"g\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"l\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"c\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la locale change, car chaque consommateur est averti même si ses clés spécifiques n'ont pas changé.\",\"d\":\"Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"m\":\"Les compromis du chargement dynamique\",\"j\":\"Diviser les traductions en fragments par itinéraire ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :\",\"r\":\"Requêtes en cascade :\",\"e\":\"Flash de contenu non traduit (FOUC) :\",\"a\":\"Invalidation du cache :\",\"s\":\"Ce que ce benchmark mesure\",\"n\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement paresseux. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\",\"k\":\"l'application doit d'abord se charger, déterminer la locale, puis récupérer le bon fragment — ce qui ajoute des allers-retours réseau.\",\"q\":\"les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de repli avant l'arrivée du fragment.\",\"p\":\"la mise à jour des traductions nécessite des stratégies d'invalidation du cache pour garantir que les utilisateurs reçoivent un contenu frais sans télécharger à nouveau les fragments inchangés.\"},\"es\":{\"o\":\"Comprender el impacto\",\"t\":\"¿Por qué un solo JSON grande puede perjudicar el rendimiento?\",\"g\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"l\":\"El JSON debe analizarse en cada carga de página, lo que bloquea el hilo principal.\",\"c\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia la configuración regional, porque se notifica a cada consumidor incluso si sus claves específicas no cambiaron.\",\"d\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.\",\"m\":\"Las ventajas y desventajas de la carga dinámica\",\"j\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"r\":\"Solicitudes en cascada:\",\"e\":\"Flash de contenido no traducido (FOUC):\",\"a\":\"Invalidación de caché:\",\"s\":\"Qué mide este benchmark\",\"n\":\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que agregan a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar contenido traducido y la efectividad de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\",\"k\":\"la aplicación primero debe cargarse, determinar la configuración regional y luego obtener el fragmento correcto, lo que agrega viajes de ida y vuelta de red.\",\"q\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de reserva antes de que llegue el fragmento.\",\"p\":\"la actualización de las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido nuevo sin volver a descargar los fragmentos que no han cambiado.\"},\"de\":{\"o\":\"Die Auswirkungen verstehen\",\"t\":\"Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\",\"g\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"l\":\"Das JSON muss bei jedem Laden der Seite analysiert werden – was den Hauptthread blockiert.\",\"c\":\"Kontextbasierte Architekturen können kaskadierende Re-Renders verursachen, wenn sich die Locale ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"d\":\"Beim serverseitigen Rendering wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Größe des Dokuments erhöht, das heruntergeladen und hydriert werden muss.\",\"m\":\"Die Kompromisse beim dynamischen Laden\",\"j\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann den anfänglichen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"r\":\"Wasserfall-Anfragen:\",\"e\":\"Flash von unübersetzten Inhalten (FOUC):\",\"a\":\"Cache-Invalidierung:\",\"s\":\"Was dieser Benchmark misst\",\"n\":\"Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischem Inhalt –, um i18n-Bibliotheken anhand von drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Analysieren und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\",\"k\":\"die App muss zuerst geladen werden, die Locale bestimmen und dann das richtige Chunk abrufen – was zusätzliche Netzwerk-Roundtrips bedeutet.\",\"q\":\"Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Fallback-Sprache, bevor das Chunk eintrifft.\",\"p\":\"das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\"},\"it\":{\"o\":\"Comprendere l'impatto\",\"t\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"g\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:\",\"l\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"c\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la locale cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"d\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.\",\"m\":\"I compromessi del caricamento dinamico\",\"j\":\"La suddivisione delle traduzioni in blocchi per percorso o per spazio dei nomi può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"r\":\"Richieste a cascata:\",\"e\":\"Flash di contenuti non tradotti (FOUC):\",\"a\":\"Invalidazione della cache:\",\"s\":\"Cosa misura questo benchmark\",\"n\":\"Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo speso per analizzare e renderizzare i contenuti tradotti e l'efficacia delle loro strategie di suddivisione del codice e caricamento lento. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente comparabili.\",\"k\":\"l'app deve prima caricarsi, determinare la locale, quindi recuperare il blocco giusto, aggiungendo round-trip di rete.\",\"q\":\"gli utenti potrebbero visualizzare brevemente le chiavi di traduzione o una lingua di fallback prima dell'arrivo del blocco.\",\"p\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i blocchi invariati.\"},\"pt\":{\"o\":\"Entendendo o impacto\",\"t\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"g\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\",\"l\":\"O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.\",\"c\":\"As arquitecturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"d\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.\",\"m\":\"As compensações do carregamento dinâmico\",\"j\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"r\":\"Pedidos em cascata:\",\"e\":\"Flash de conteúdo não traduzido (FOUC):\",\"a\":\"Invalidação da cache:\",\"s\":\"O que este benchmark mede\",\"n\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\",\"k\":\"a aplicação deve primeiro carregar, determinar a localidade e, em seguida, procurar a parte certa, adicionando viagens de ida e volta na rede.\",\"q\":\"os utilizadores podem ver brevemente as chaves de tradução ou um idioma de reserva antes da parte chegar.\",\"p\":\"a atualização das traduções requer estratégias de destruição da cache para garantir que os utilizadores recebam novos conteúdos sem voltarem a descarregar as partes inalteradas.\"},\"zh\":{\"o\":\"理解影响\",\"t\":\"为什么单个大型 JSON 会损害性能\",\"g\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：\",\"l\":\"JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。\",\"c\":\"当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。\",\"d\":\"在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。\",\"m\":\"动态加载的权衡\",\"j\":\"将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：\",\"r\":\"瀑布请求：\",\"e\":\"未翻译内容闪烁 (FOUC)：\",\"a\":\"缓存失效：\",\"s\":\"此基准测试测量什么\",\"n\":\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。\",\"k\":\"应用必须首先加载，确定语言区域，然后获取正确的块 —— 增加了网络往返。\",\"q\":\"在块到达之前，用户可能会短暂地看到翻译键或回退语言。\",\"p\":\"更新翻译需要缓存失效策略，以确保用户获得新鲜内容，而无需重新下载未更改的块。\"},\"ja\":{\"o\":\"影響を理解する\",\"t\":\"なぜ1つの大きなJSONがパフォーマンスを低下させるのか\",\"g\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：\",\"l\":\"JSONはページを読み込むたびに解析する必要があり、メインスレッドをブロックします。\",\"c\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されるとカスケード再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。\",\"d\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードしてシリアライズする必要があるドキュメントサイズが増加します。\",\"m\":\"動的読み込みのトレードオフ\",\"j\":\"翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、それは新たな課題をもたらします：\",\"r\":\"ウォーターフォールリクエスト：\",\"e\":\"未翻訳コンテンツのフラッシュ(FOUC)：\",\"a\":\"キャッシュの無効化：\",\"s\":\"このベンチマークが測定するもの\",\"n\":\"このテストアプリは、10ページの現実的なコンテンツで制御された環境を提供し、18nライブラリを3つの軸で比較します。JavaScriptバンドルに追加される重み、翻訳されたコンテンツの解析とレンダリングに費やされる時間、およびコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\",\"k\":\"アプリはまず読み込み、ロケールを決定してから、正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\",\"q\":\"チャンクが到着する前に、ユーザーは翻訳キーやフォールバック言語を一時的に目にする可能性があります。\",\"p\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが最新のコンテンツを確実に取得できるようにするためのキャッシュバスティング戦略が必要です。\"},\"ko\":{\"o\":\"영향 이해\",\"t\":\"단일 대용량 JSON이 성능을 저하시키는 이유\",\"g\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 개체에 번역을 저장합니다. 이 개체가 크면(수천 개의 키) 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유합니다. 이는 다음을 의미합니다.\",\"l\":\"JSON은 모든 페이지 로드 시 구문 분석되어야 하므로 메인 스レッド가 차단됩니다.\",\"c\":\"컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.\",\"d\":\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.\",\"m\":\"동적 로딩의 트레이드오프\",\"j\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다.\",\"r\":\"워터폴 요청:\",\"e\":\"번역되지 않은 콘텐츠의 플래시 (FOUC):\",\"a\":\"캐시 무효화:\",\"s\":\"이 벤치마크가 측정하는 것\",\"n\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\",\"k\":\"앱이 먼저 로드되고 로캘을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\",\"q\":\"청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠시 볼 수 있습니다.\",\"p\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고도 최신 콘텐츠를 받을 수 있도록 캐시 무효화 전략이 필요합니다.\"},\"ru\":{\"o\":\"Понимание влияния\",\"t\":\"Почему один большой JSON может снизить производительность\",\"g\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"l\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"c\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"d\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"m\":\"Компромиссы динамической загрузки\",\"j\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"r\":\"Каскадные запросы (Waterfall requests):\",\"e\":\"Мерцание непереведенного контента (FOUC):\",\"a\":\"Инвалидация кэша:\",\"s\":\"Что измеряет этот бенчмарк\",\"n\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\",\"k\":\"сначала приложение должно загрузиться, определить локаль, а затем получить нужный чанк — это добавляет сетевые задержки.\",\"q\":\"пользователи могут на мгновение увидеть ключи перевода или резервный язык до того, как чанк будет загружен.\",\"p\":\"обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных чанков.\"}}}")
}, u = {
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
}, d = {
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
}, f = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : s(o, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, p = /* @__PURE__ */ new WeakMap(), m = 0, h = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${h(n)}`, ee = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
}, te = "translation", x = "insertion", ne = "object", S = "array", C = "markdown", w = "html", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: S,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ne,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), D = "default", re = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? D : typeof e == "string" ? A(e, re) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(j) : [j(e)], N = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, ie = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ae = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, oe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, se = (e, t) => {
	if (!ae(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : N(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ie(e, n, t, s)).map((t) => oe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ce = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, z = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[w] : e[C];
}, B = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, V = (e, t, n, r, i) => {
	let a = B(e, E(z(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, W = H, G = (e) => H, K = H, le = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = E(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, q = H, J = H, Y = (e) => H, X = H, ue = (e, t = !0) => [
	U(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	W,
	K,
	le,
	Y(e ?? u.defaultLocale),
	X,
	q,
	J
], de = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), fe = (e, t, n) => {
	let { locale: r, selector: i } = ce(t), a = y(r ?? u.defaultLocale, P(i), n), o = ee(e, a);
	if (o.hit) return o.content;
	let s = n ?? ue(r), c = se(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return de(e.content, t, s);
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, pe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, me = (e, t = {}) => {
	if (!Object.values(t).some(pe)) return {
		isSimple: !0,
		parts: e.replace(Z, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Z), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, he = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: n.children,
		children: n.children
	})
}, ge = H, _e = (t, r) => {
	let i = me(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, ve = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = _e(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, ye = H, be = H, Q = /* @__PURE__ */ new Map(), xe = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		U(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		W,
		G(e ?? u.defaultLocale),
		K,
		Y(e ?? u.defaultLocale),
		X,
		q,
		J,
		he,
		ge,
		ve,
		ye,
		be
	];
	return Q.set(n, r), r;
}, Se = (e, t) => fe(e, t, xe(typeof t == "object" && t ? t.locale : t)), Ce = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, we = ((e = $) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Ce) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), Te = t({
	locale: we ?? u?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ee = (e, t) => {
	let { locale: n, variant: r } = i(Te) ?? {}, o = t ?? n, s = typeof o == "object" && o ? `${o.locale ?? ""}|${P(o)}` : o;
	return a(() => Se(e, o), [e.key, s]);
};
function De() {
	let e = Ee(l);
	return c("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			s("h2", {
				className: "text-2xl font-bold text-foreground",
				children: e.o
			}),
			c("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					s("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e.t
					}),
					s("p", {
						className: "text-sm text-muted-foreground",
						children: e.g
					}),
					c("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							s("li", { children: e.l }),
							s("li", { children: e.c }),
							s("li", { children: e.d })
						]
					})
				]
			}),
			c("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					s("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e.m
					}),
					s("p", {
						className: "text-sm text-muted-foreground",
						children: e.j
					}),
					c("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							c("li", { children: [s("strong", {
								className: "text-foreground",
								children: e.r
							}), e.k] }),
							c("li", { children: [
								s("strong", {
									className: "text-foreground",
									children: e.e
								}),
								" ",
								e.q
							] }),
							c("li", { children: [
								s("strong", {
									className: "text-foreground",
									children: e.a
								}),
								" ",
								e.p
							] })
						]
					})
				]
			}),
			c("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [s("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e.s
				}), s("p", {
					className: "text-sm text-muted-foreground",
					children: e.n
				})]
			})
		]
	});
}
export { De as default };
