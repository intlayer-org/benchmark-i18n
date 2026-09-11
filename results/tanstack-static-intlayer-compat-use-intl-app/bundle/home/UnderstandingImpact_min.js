import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"understandingTheImpact\":\"Understanding the Impact\",\"whyASingleLargeJson\":\"Why a single large JSON can hurt performance\",\"manyI18nLibrariesStoreTranslations\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"theJsonMustBeParsed\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"contextBasedArchitecturesCanCause\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"duringServerSideRenderingThe\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"theTradeOffsOfDynamic\":\"The trade-offs of dynamic loading\",\"splittingTranslationsIntoPerRoute\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"waterfallRequests\":\"Waterfall requests:\",\"flashOfUntranslatedContentFouc\":\"Flash of untranslated content (FOUC):\",\"cacheInvalidation\":\"Cache invalidation:\",\"whatThisBenchmarkMeasures\":\"What this benchmark measures\",\"thisTestAppProvidesA\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"},\"fr\":{\"understandingTheImpact\":\"Comprendre l'impact\",\"whyASingleLargeJson\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"manyI18nLibrariesStoreTranslations\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"theJsonMustBeParsed\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"contextBasedArchitecturesCanCause\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"duringServerSideRenderingThe\":\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"theTradeOffsOfDynamic\":\"Les compromis du chargement dynamique\",\"splittingTranslationsIntoPerRoute\":\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\",\"waterfallRequests\":\"Requêtes en cascade :\",\"flashOfUntranslatedContentFouc\":\"Flash de contenu non traduit (FOUC) :\",\"cacheInvalidation\":\"Invalidation du cache :\",\"whatThisBenchmarkMeasures\":\"Ce que ce benchmark mesure\",\"thisTestAppProvidesA\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"},\"es\":{\"understandingTheImpact\":\"Entendiendo el impacto\",\"whyASingleLargeJson\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\",\"manyI18nLibrariesStoreTranslations\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"theJsonMustBeParsed\":\"El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\",\"contextBasedArchitecturesCanCause\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\",\"duringServerSideRenderingThe\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\",\"theTradeOffsOfDynamic\":\"Las compensaciones de la carga dinámica\",\"splittingTranslationsIntoPerRoute\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\",\"waterfallRequests\":\"Solicitudes en cascada:\",\"flashOfUntranslatedContentFouc\":\"Parpadeo de contenido no traducido (FOUC):\",\"cacheInvalidation\":\"Invalidación de la caché:\",\"whatThisBenchmarkMeasures\":\"Qué mide este benchmark\",\"thisTestAppProvidesA\":\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"},\"de\":{\"understandingTheImpact\":\"Die Auswirkungen verstehen\",\"whyASingleLargeJson\":\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\",\"manyI18nLibrariesStoreTranslations\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"theJsonMustBeParsed\":\"Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.\",\"contextBasedArchitecturesCanCause\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"duringServerSideRenderingThe\":\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.\",\"theTradeOffsOfDynamic\":\"Die Kompromisse beim dynamischen Laden\",\"splittingTranslationsIntoPerRoute\":\"Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"waterfallRequests\":\"Waterfall-Anfragen:\",\"flashOfUntranslatedContentFouc\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"cacheInvalidation\":\"Cache-Invalidierung:\",\"whatThisBenchmarkMeasures\":\"Was dieser Benchmark misst\",\"thisTestAppProvidesA\":\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"},\"it\":{\"understandingTheImpact\":\"Capire l'impatto\",\"whyASingleLargeJson\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"manyI18nLibrariesStoreTranslations\":\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa :\",\"theJsonMustBeParsed\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"contextBasedArchitecturesCanCause\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"duringServerSideRenderingThe\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.\",\"theTradeOffsOfDynamic\":\"I compromessi del caricamento dinamico\",\"splittingTranslationsIntoPerRoute\":\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"waterfallRequests\":\"Richieste a cascata:\",\"flashOfUntranslatedContentFouc\":\"Flash di contenuti non tradotti (FOUC):\",\"cacheInvalidation\":\"Invalidazione della cache:\",\"whatThisBenchmarkMeasures\":\"Cosa misura questo benchmark\",\"thisTestAppProvidesA\":\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\"},\"pt\":{\"understandingTheImpact\":\"Entendendo o impacto\",\"whyASingleLargeJson\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"manyI18nLibrariesStoreTranslations\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa :\",\"theJsonMustBeParsed\":\"O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.\",\"contextBasedArchitecturesCanCause\":\"As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"duringServerSideRenderingThe\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\",\"theTradeOffsOfDynamic\":\"As compensações do carregamento dinâmico\",\"splittingTranslationsIntoPerRoute\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"waterfallRequests\":\"Pedidos em cascata:\",\"flashOfUntranslatedContentFouc\":\"Flash de conteúdo não traduzido (FOUC):\",\"cacheInvalidation\":\"Invalidação de cache:\",\"whatThisBenchmarkMeasures\":\"O que este benchmark mede\",\"thisTestAppProvidesA\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\"},\"zh\":{\"understandingTheImpact\":\"了解影响\",\"whyASingleLargeJson\":\"为什么单个大型 JSON 会损害性能\",\"manyI18nLibrariesStoreTranslations\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：\",\"theJsonMustBeParsed\":\"必须在每次页面加载时解析 JSON——阻塞主线程。\",\"contextBasedArchitecturesCanCause\":\"基于上下文的架构可能会在语言环境更改时导致级联重新渲染，因为即使特定键未更改，也会通知每个消费者。\",\"duringServerSideRenderingThe\":\"在服务器端渲染期间，整个字典被序列化为 HTML 负载，增加了必须下载和水合的文档大小。\",\"theTradeOffsOfDynamic\":\"动态加载的权衡\",\"splittingTranslationsIntoPerRoute\":\"将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但这引入了新的挑战：\",\"waterfallRequests\":\"瀑布式请求：\",\"flashOfUntranslatedContentFouc\":\"未翻译内容的闪烁 (FOUC)：\",\"cacheInvalidation\":\"缓存失效：\",\"whatThisBenchmarkMeasures\":\"该基准测试测量什么\",\"thisTestAppProvidesA\":\"本测试应用提供了一个受控环境——10 个包含真实内容的页面——以便从三个轴比较 i18n 库：它们为 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和延迟加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。\"},\"ja\":{\"understandingTheImpact\":\"影響を理解する\",\"whyASingleLargeJson\":\"なぜ単一の大きなJSONがパフォーマンスを低下させるのか\",\"manyI18nLibrariesStoreTranslations\":\"多くのi18nライブラリは、Reactコンテキストを通じて提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\",\"theJsonMustBeParsed\":\"JSONはページロードごとに解析される必要があり、メインスレッドをブロックします。\",\"contextBasedArchitecturesCanCause\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されたときに連鎖的なリレンダリングが発生する可能性があります。特定のキーが変更されていなくても、すべてのコンシューマーに通知が届くためです。\",\"duringServerSideRenderingThe\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増大します。\",\"theTradeOffsOfDynamic\":\"動的ロードのトレードオフ\",\"splittingTranslationsIntoPerRoute\":\"翻訳をルート別または名前空間別のチャンクに分割すると、初期ペイロードを大幅に削減できます。しかし、新たな課題が生じます：\",\"waterfallRequests\":\"ウォーターフォールリクエスト：\",\"flashOfUntranslatedContentFouc\":\"翻訳されていないコンテンツのちらつき (FOUC)：\",\"cacheInvalidation\":\"キャッシュの無効化：\",\"whatThisBenchmarkMeasures\":\"このベンチマークが測定するもの\",\"thisTestAppProvidesA\":\"このテストアプリは、現実的なコンテンツを含む10ページ構成の制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延ロード戦略の有効性です。各ライブラリは同じアプリに統合されるため、結果を直接比較できます。\"},\"ko\":{\"understandingTheImpact\":\"영향 이해하기\",\"whyASingleLargeJson\":\"왜 단일 대형 JSON이 성능을 저하시키는 이유\",\"manyI18nLibrariesStoreTranslations\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:\",\"theJsonMustBeParsed\":\"JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.\",\"contextBasedArchitecturesCanCause\":\"컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.\",\"duringServerSideRenderingThe\":\"서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.\",\"theTradeOffsOfDynamic\":\"동적 로딩의 트레이드오프\",\"splittingTranslationsIntoPerRoute\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:\",\"waterfallRequests\":\"워터폴(Waterfall) 요청:\",\"flashOfUntranslatedContentFouc\":\"번역되지 않은 콘텐츠의 깜빡임 (FOUC):\",\"cacheInvalidation\":\"캐시 무효화:\",\"whatThisBenchmarkMeasures\":\"이 벤치마크가 측정하는 것\",\"thisTestAppProvidesA\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\"},\"ru\":{\"understandingTheImpact\":\"Понимание влияния\",\"whyASingleLargeJson\":\"Почему один большой JSON может снизить производительность\",\"manyI18nLibrariesStoreTranslations\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"theJsonMustBeParsed\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"contextBasedArchitecturesCanCause\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"duringServerSideRenderingThe\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"theTradeOffsOfDynamic\":\"Компромиссы динамической загрузки\",\"splittingTranslationsIntoPerRoute\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"waterfallRequests\":\"Каскадные запросы (Waterfall requests):\",\"flashOfUntranslatedContentFouc\":\"Мерцание непереведенного контента (FOUC):\",\"cacheInvalidation\":\"Инвалидация кэша:\",\"whatThisBenchmarkMeasures\":\"Что измеряет этот бенчмарк\",\"thisTestAppProvidesA\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека измеряется в идентичных условиях.\"}}}")
}, h = /* @__PURE__ */ new WeakMap(), ee = 0, te = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	ee += 1;
	let n = `p${ee}`;
	return h.set(e, n), n;
}, ne = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, ie = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, ae = "translation", oe = "enumeration", se = "plural", y = "insertion", ce = "object", le = "array", ue = "markdown", b = "html", de = "gender", fe = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ce,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, pe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, me = (e, t) => e[pe(e, t) ?? "fallback"], he = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", ge = /[^A-Za-z0-9._&=-]/g, _e = /[^A-Za-z0-9._-]/g, ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, C = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, w = (e) => e === void 0 ? S : typeof e == "string" ? C(e, ge) : Object.keys(e).sort().map((t) => `${C(t, _e)}=${C(String(e[t]), _e)}`).join("&"), T = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(w) : [w(e)], ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, xe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ce = (e, t) => {
	if (!xe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : ye(T(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => be(e, n, t, s)).map((t) => Se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, we = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, E = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? T(n).join(",") : String(n)}`;
}).join("|") : "", D = {
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
}, O = {
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
}, Te = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ee = "\x1B[0m", De = "\x1B[34m", Oe = "\x1B[31m", ke = "\x1B[32m", Ae = "\x1B[36m", je = (e) => e, Me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = je(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ne = (e, t) => (n, r) => Me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), k = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? Ee : n : Ee}` : e;
k("✗", Oe), k("✓", ke), k("⏲", De);
var Pe = 50, Fe = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set(), Le = (e) => {
	Ie.has(e) || (Ie.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Re = {
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
}, ze = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Le(e), Re[e]);
};
function A(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Fe.get(a);
	o || (o = /* @__PURE__ */ new Map(), Fe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ze(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Be = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, Ve = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (j(e) && j(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : M(e[r], t[r]));
		return n;
	}
	return e;
}, He = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => M(e, t));
}, N = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ue = (e) => {
	if (typeof e == "string") return e;
	if (N(e)) return e.nodeType === "html" ? e[b] : e[ue];
}, We = (e, t) => {
	if (typeof e == "string") return t;
	if (N(e)) {
		let n = e.nodeType === "html" ? b : ue;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, P = (e, t, n, r, i) => {
	let a = We(e, he(Ue(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return He(o, e, t);
	}
}, L = F, Ge = (e) => F, R = F, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = he(i, e);
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
}, z = F, B = F, V = (e) => F, H = F, qe = (e, t = !0) => [
	I(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	L,
	R,
	Ke,
	V(e ?? D.defaultLocale),
	H,
	z,
	B
], Je = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), Ye = (e, t, n) => {
	let { locale: r, selector: i } = we(t), a = re(r ?? D.defaultLocale, E(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? qe(r), c = Ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Je(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, Xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", U = /\{\{\s*(.*?)\s*\}\}/g, Ze = (e, t = {}) => {
	if (!Object.values(t).some(Xe)) return {
		isSimple: !0,
		parts: e.replace(U, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(U), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Qe = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, W = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, $e = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? A("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? A("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : A("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return A("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? $e(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : $e(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[y], t, n);
	if (r.nodeType === "html") return q(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[se];
		return q(Be(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[oe], i = W.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) W.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? me(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Ve(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[de];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, tt = (e, t = {}, n = "en") => {
	let r = q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, nt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, rt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = rt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Y = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Y(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), it = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return at(e, (e) => Qe(t, r(e)), r);
}, at = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return tt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: rt(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : Y(J(o), a);
		}
	});
}, ot = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
	return new Proxy(r, { get(e, r, i) {
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
}, st = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ot({
		...n,
		value: n.children,
		children: n.children
	})
}, ct = F, lt = (e, n) => {
	let i = Ze(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = lt(i, e);
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
}, dt = F, ft = F, X = /* @__PURE__ */ new Map(), pt = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		I(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		L,
		Ge(e ?? D.defaultLocale),
		R,
		V(e ?? D.defaultLocale),
		H,
		z,
		B,
		st,
		ct,
		ut,
		dt,
		ft
	];
	return X.set(n, r), r;
}, mt = (e, t) => Ye(e, t, pt(typeof t == "object" && t ? t.locale : t)), ht = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, gt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ht(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _t = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, vt = (e = Z) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_t) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, yt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_t && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ht(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, gt(r, e, i));
			} catch {}
		}
	}
}, bt = vt(Z), xt = (e, t) => yt(e, {
	...Z,
	isCookieEnabled: t
}), St = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ct = ({ children: e }) => (St(), e), wt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Tt = ({ children: e }) => (wt(), e), Et = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Dt = (e, t = D?.locales, n = D?.defaultLocale) => {
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
}, Q = n({
	locale: bt ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ot = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = D ?? {}, [f, p] = l(e ?? bt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		Et();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), xt(e, s);
		}
	}), h = Dt(f);
	return d(Q.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, kt = ({ children: e, ...t }) => f(Ot, {
	...t,
	children: [
		d(Ct, {}),
		d(Tt, {}),
		e
	]
}), At = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${E(i)}` : i;
	return s(() => mt(e, i), [e.key, o]);
}, jt = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return it(n, At(e), t);
}), Mt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ne({ log: Te })(`${k("IntlProvider", Ae)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(kt, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/home/UnderstandingImpact.tsx";
function Nt() {
	let e = jt(m);
	return p("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			p("h2", {
				className: "text-2xl font-bold text-foreground",
				children: e("understandingTheImpact")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			p("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					p("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e("whyASingleLargeJson")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 12,
						columnNumber: 9
					}, this),
					p("p", {
						className: "text-sm text-muted-foreground",
						children: e("manyI18nLibrariesStoreTranslations")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 15,
						columnNumber: 9
					}, this),
					p("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							p("li", { children: e("theJsonMustBeParsed") }, void 0, !1, {
								fileName: $,
								lineNumber: 19,
								columnNumber: 11
							}, this),
							p("li", { children: e("contextBasedArchitecturesCanCause") }, void 0, !1, {
								fileName: $,
								lineNumber: 20,
								columnNumber: 11
							}, this),
							p("li", { children: e("duringServerSideRenderingThe") }, void 0, !1, {
								fileName: $,
								lineNumber: 21,
								columnNumber: 11
							}, this)
						]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 18,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			p("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					p("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e("theTradeOffsOfDynamic")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 26,
						columnNumber: 9
					}, this),
					p("p", {
						className: "text-sm text-muted-foreground",
						children: e("splittingTranslationsIntoPerRoute")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 29,
						columnNumber: 9
					}, this),
					p("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							p("li", { children: [p("strong", {
								className: "text-foreground",
								children: e("waterfallRequests")
							}, void 0, !1, {
								fileName: $,
								lineNumber: 34,
								columnNumber: 13
							}, this), " the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."] }, void 0, !0, {
								fileName: $,
								lineNumber: 33,
								columnNumber: 11
							}, this),
							p("li", { children: [p("strong", {
								className: "text-foreground",
								children: e("flashOfUntranslatedContentFouc")
							}, void 0, !1, {
								fileName: $,
								lineNumber: 38,
								columnNumber: 13
							}, this), " users may briefly see translation keys or a fallback language before the chunk arrives."] }, void 0, !0, {
								fileName: $,
								lineNumber: 37,
								columnNumber: 11
							}, this),
							p("li", { children: [p("strong", {
								className: "text-foreground",
								children: e("cacheInvalidation")
							}, void 0, !1, {
								fileName: $,
								lineNumber: 44,
								columnNumber: 13
							}, this), " updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."] }, void 0, !0, {
								fileName: $,
								lineNumber: 43,
								columnNumber: 11
							}, this)
						]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 32,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			p("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [p("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e("whatThisBenchmarkMeasures")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 51,
					columnNumber: 9
				}, this), p("p", {
					className: "text-sm text-muted-foreground",
					children: e("thisTestAppProvidesA")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 54,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 50,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var Pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Ft({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(Mt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Pt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Pt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var It = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/home/UnderstandingImpact.wrapper.tsx";
function Lt() {
	return p(Ft, { children: p(Nt, {}, void 0, !1, {
		fileName: It,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: It,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Lt as default };
