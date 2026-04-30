import { computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, onBeforeMount, onMounted, openBlock, ref, shallowRef, toDisplayString, toValue, watch } from "vue";
var why_it_matters_default = {
	key: "why-it-matters",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"d\":\"Why These Metrics Matter\",\"a\":{\"b\":\"Bundle Size\",\"a\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\"},\"c\":{\"b\":\"Rendering & Hydration\",\"a\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\"},\"b\":{\"b\":\"Dynamic Loading\",\"a\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"}},\"fr\":{\"d\":\"Pourquoi ces mesures sont importantes\",\"a\":{\"b\":\"Taille du Bundle\",\"a\":\"Le bundle est l'ensemble des données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\"},\"c\":{\"b\":\"Rendu et Hydratation\",\"a\":\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Lors de l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\"},\"b\":{\"b\":\"Chargement Dynamique\",\"a\":\"Le chargement de toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy loading) répartit les traductions par itinéraire ou par espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le chargement différé introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de la mise en cache. Il est essentiel de mesurer les deux stratégies.\"}},\"es\":{\"d\":\"Por qué estas métricas importan\",\"a\":{\"b\":\"Tamaño del paquete\",\"a\":\"El paquete son los datos que se envían a todos los usuarios en todo el mundo. Un paquete más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas que son comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.\"},\"c\":{\"b\":\"Renderizado e hidratación\",\"a\":\"Conectar un dictionnaire JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede activar re-renderizaciones en todo el árbol. Durante la hidratación de SSR, el análisis y la vinculación de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva, lo que afecta directamente al tiempo de interacción (TTI).\"},\"b\":{\"b\":\"Carga dinámica\",\"a\":\"Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propios inconvenientes: solicitudes en cascada, destellos de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\"}},\"de\":{\"d\":\"Warum diese Metriken wichtig sind\",\"a\":{\"b\":\"Bundle-Größe\",\"a\":\"Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von wenigen Kilobyte bis zu Zehnern von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\"},\"c\":{\"b\":\"Rendering & Hydrierung\",\"a\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings über den gesamten Baum auslösen. Während der SSR-Hydrierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.\"},\"b\":{\"b\":\"Dynamisches Laden\",\"a\":\"Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Payload. Dynamisches (lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetztem Inhalt und Caching-Komplexität. Das Messen beider Strategien ist unerlässlich.\"}},\"it\":{\"d\":\"Perché queste metriche sono importanti\",\"a\":{\"b\":\"Dimensioni del bundle\",\"a\":\"Il bundle è l'insieme di dati spediti a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi — specialmente su connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\"},\"c\":{\"b\":\"Rendering e idratazione\",\"a\":\"Collegare un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare re-render in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'allegatamento di enormi oggetti di traduzione aggiunge latenza prima che la pagina diventi interattiva — influenzando direttamente il Time to Interactive (TTI).\"},\"b\":{\"b\":\"Caricamento dinamico\",\"a\":\"Caricare tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il caricamento lazy introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità del caching. Misurare entrambe le strategie è essenziale.\"}},\"pt\":{\"d\":\"Por que essas métricas são importantes\",\"a\":{\"b\":\"Tamanho do bundle\",\"a\":\"O bundle são os dados enviados a todos os usuários em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\"},\"c\":{\"b\":\"Renderização e Hidratação\",\"a\":\"Conectar um dicionário JSON grande a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar re-renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\"},\"b\":{\"b\":\"Carregamento Dinâmico\",\"a\":\"Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"}},\"zh\":{\"d\":\"为什么这些指标很重要\",\"a\":{\"b\":\"捆绑包大小\",\"a\":\"捆绑包是发送给全球每个用户的数据。更大的捆绑包意味着更长的下载时间——尤其是在许多地区常见的慢速 3G 连接上。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\"},\"c\":{\"b\":\"渲染与水合\",\"a\":\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 水合过程中，解析和附加海量的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\"},\"b\":{\"b\":\"动态加载\",\"a\":\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"}},\"ja\":{\"d\":\"なぜこれらの指標が重要なのか\",\"a\":{\"b\":\"バンドルサイズ\",\"a\":\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きくなると、ダウンロード時間が長くなります。特に、多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。数キロバイトから数十キロバイトのランタイムコードに加えて、翻訳ファイル自体の重さも加わります。\"},\"c\":{\"b\":\"レンダリングとハイドレーション\",\"a\":\"大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更により、ツリー全体で再レンダリングがトリガーされる可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチにより、ページがインタラクティブになるまでのレイテンシが増加し、Time to Interactive (TTI) に直接影響します。\"},\"b\":{\"b\":\"ダイナミックローディング\",\"a\":\"すべての翻訳を事前にロードすると、初期ペイロードが過負荷になります。ダイナミック（遅延）ローディングは、ルートまたはネームスペースごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延ロードには独自のトレードオフがあります。ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどです。両方の戦略を測定することが不可欠です。\"}},\"ko\":{\"d\":\"이러한 지표가 중요한 이유\",\"a\":{\"b\":\"번들 크기\",\"a\":\"번들은 전 세계 모든 사용자에게 배송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 볼 수 있는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.\"},\"c\":{\"b\":\"렌더링 및 하이드레이션\",\"a\":\"대규모 JSON 사전을 모든 구성 요소에 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 변경은 전체 트리에서 다시 렌더링을 트리거할 수 있습니다. SSR 하이드레이션 중에 거대한 번역 개체를 구문 분석하고 첨부하면 페이지가 상호 작용하기 전에 대기 시간이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.\"},\"b\":{\"b\":\"동적 로딩\",\"a\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 보냅니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"}},\"ru\":{\"d\":\"Почему эти показатели важны\",\"a\":{\"b\":\"Размер бандла\",\"a\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Чем больше бандл, тем дольше время загрузки, особенно при медленном 3G-соединении, распространенном во многих регионах. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт кода во время выполнения, плюс сами файлы переводов.\"},\"c\":{\"b\":\"Рендеринг и гидратация\",\"a\":\"Подключение большого словаря JSON к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода увеличивают задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\"},\"b\":{\"b\":\"Динамическая загрузка\",\"a\":\"Предварительная загрузка всех переводов перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\"}}}}")
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	return Object.setPrototypeOf(l, String.prototype), Object.assign(l, {
		render: c,
		toString: () => String(o.value ?? ""),
		valueOf: () => o.value,
		[Symbol.toPrimitive]: () => o.value,
		toJSON: () => o.value,
		get raw() {
			return o.value;
		},
		set raw(e) {
			o.value = e;
		},
		get value() {
			return o.value;
		},
		use(e) {
			return n$1({
				value: o.value,
				children: () => s(e),
				additionalProps: a
			});
		},
		__update(e) {
			s = e.render, this.raw = e.raw;
		},
		...a
	}), markRaw(l);
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
}), getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, b$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { children: n, ...r }) => {
		let i = (t) => n$1({
			...r,
			value: t,
			children: t
		}), s = i(n);
		if (typeof n != "function") return s;
		let c = (...e) => i(n(...e));
		Object.setPrototypeOf(c, Object.getPrototypeOf(s));
		for (let e of Object.getOwnPropertyNames(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		return markRaw(c);
	}
}, S = fallbackPlugin, w = fallbackPlugin, T = fallbackPlugin, E = /* @__PURE__ */ new Map(), D = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (E.has(n)) return E.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		b$1,
		S,
		w,
		T
	];
	return E.set(n, r), r;
}, n = (n, r) => getDictionary(n, r, D(r)), i = Symbol("intlayer");
var m = (e, t) => t.reduce((e, t) => e?.[t], e), h$1 = (e) => typeof e == "object" && !!e, g = (e) => typeof e == "function" || h$1(e) && ("render" in e || "setup" in e), _ = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, v = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : g(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
})), y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return v(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), b = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, b = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), x = computed(() => (a === void 0 ? void 0 : toValue(a)) ?? b.value), S = shallowRef({});
	watch([() => toValue(r), () => x.value], ([t, n$2]) => {
		S.value = n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let C = (e) => new Proxy({}, {
		get(t, r, i) {
			if (r === "__v_isRef") return !0;
			let a = computed(() => m(S.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return v(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = m(S.value, o);
			if (s === void 0 || h$1(s) && !g(s)) return C(o);
			if (_(s)) return y(computed(() => m(S.value, o)));
			let c = computed(() => m(S.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = m(S.value, e);
			return h$1(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return C([]);
};
function usePerformanceMeasure(name) {
	onBeforeMount(() => {
		if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	});
	onMounted(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	});
}
var WhyItMatters_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "WhyItMatters",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("WhyItMatters");
		const { d: title, a: bundleSize, c: renderingHydration, b: dynamicLoading } = b(why_it_matters_default);
		const __returned__ = {
			title,
			bundleSize,
			renderingHydration,
			dynamicLoading
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "mb-16" };
var _hoisted_2 = { class: "mb-6 text-2xl font-bold text-foreground" };
var _hoisted_3 = { class: "grid gap-6 md:grid-cols-3" };
var _hoisted_4 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_5 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_6 = { class: "text-sm text-muted-foreground" };
var _hoisted_7 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_8 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_9 = { class: "text-sm text-muted-foreground" };
var _hoisted_10 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_11 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_12 = { class: "text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString($setup.title), 1), createElementVNode("div", _hoisted_3, [
		createElementVNode("div", _hoisted_4, [createElementVNode("h3", _hoisted_5, toDisplayString($setup.bundleSize.title), 1), createElementVNode("p", _hoisted_6, toDisplayString($setup.bundleSize.description), 1)]),
		createElementVNode("div", _hoisted_7, [createElementVNode("h3", _hoisted_8, toDisplayString($setup.renderingHydration.title), 1), createElementVNode("p", _hoisted_9, toDisplayString($setup.renderingHydration.description), 1)]),
		createElementVNode("div", _hoisted_10, [createElementVNode("h3", _hoisted_11, toDisplayString($setup.dynamicLoading.title), 1), createElementVNode("p", _hoisted_12, toDisplayString($setup.dynamicLoading.description), 1)])
	])]);
}
var WhyItMatters_default = _plugin_vue_export_helper_default(WhyItMatters_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/home/WhyItMatters.vue"]]);
export { WhyItMatters_default as default };
