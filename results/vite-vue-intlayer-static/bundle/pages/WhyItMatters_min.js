import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, isRef as s, markRaw as c, onBeforeMount as l, onMounted as u, openBlock as d, ref as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h } from "vue";
var g = {
	key: "why-it-matters",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"d\":\"Why These Metrics Matter\",\"a\":{\"b\":\"Bundle Size\",\"a\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\"},\"c\":{\"b\":\"Rendering & Hydration\",\"a\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\"},\"b\":{\"b\":\"Dynamic Loading\",\"a\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"}},\"fr\":{\"d\":\"Pourquoi ces mesures sont importantes\",\"a\":{\"b\":\"Taille du Bundle\",\"a\":\"Le bundle est l'ensemble des données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\"},\"c\":{\"b\":\"Rendu et Hydratation\",\"a\":\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Lors de l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\"},\"b\":{\"b\":\"Chargement Dynamique\",\"a\":\"Le chargement de toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy loading) répartit les traductions par itinéraire ou par espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le chargement différé introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de la mise en cache. Il est essentiel de mesurer les deux stratégies.\"}},\"es\":{\"d\":\"Por qué estas métricas importan\",\"a\":{\"b\":\"Tamaño del paquete\",\"a\":\"El paquete son los datos que se envían a todos los usuarios en todo el mundo. Un paquete más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas que son comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.\"},\"c\":{\"b\":\"Renderizado e hidratación\",\"a\":\"Conectar un dictionnaire JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede activar re-renderizaciones en todo el árbol. Durante la hidratación de SSR, el análisis y la vinculación de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva, lo que afecta directamente al tiempo de interacción (TTI).\"},\"b\":{\"b\":\"Carga dinámica\",\"a\":\"Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propios inconvenientes: solicitudes en cascada, destellos de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\"}},\"de\":{\"d\":\"Warum diese Metriken wichtig sind\",\"a\":{\"b\":\"Bundle-Größe\",\"a\":\"Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von wenigen Kilobyte bis zu Zehnern von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\"},\"c\":{\"b\":\"Rendering & Hydrierung\",\"a\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings über den gesamten Baum auslösen. Während der SSR-Hydrierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.\"},\"b\":{\"b\":\"Dynamisches Laden\",\"a\":\"Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Payload. Dynamisches (lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetztem Inhalt und Caching-Komplexität. Das Messen beider Strategien ist unerlässlich.\"}},\"it\":{\"d\":\"Perché queste metriche sono importanti\",\"a\":{\"b\":\"Dimensioni del bundle\",\"a\":\"Il bundle è l'insieme di dati spediti a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi — specialmente su connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\"},\"c\":{\"b\":\"Rendering e idratazione\",\"a\":\"Collegare un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare re-render in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'allegatamento di enormi oggetti di traduzione aggiunge latenza prima che la pagina diventi interattiva — influenzando direttamente il Time to Interactive (TTI).\"},\"b\":{\"b\":\"Caricamento dinamico\",\"a\":\"Caricare tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il caricamento lazy introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità del caching. Misurare entrambe le strategie è essenziale.\"}},\"pt\":{\"d\":\"Por que essas métricas são importantes\",\"a\":{\"b\":\"Tamanho do bundle\",\"a\":\"O bundle são os dados enviados a todos os usuários em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\"},\"c\":{\"b\":\"Renderização e Hidratação\",\"a\":\"Conectar um dicionário JSON grande a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar re-renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\"},\"b\":{\"b\":\"Carregamento Dinâmico\",\"a\":\"Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"}},\"zh\":{\"d\":\"为什么这些指标很重要\",\"a\":{\"b\":\"捆绑包大小\",\"a\":\"捆绑包是发送给全球每个用户的数据。更大的捆绑包意味着更长的下载时间——尤其是在许多地区常见的慢速 3G 连接上。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\"},\"c\":{\"b\":\"渲染与水合\",\"a\":\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 水合过程中，解析和附加海量的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\"},\"b\":{\"b\":\"动态加载\",\"a\":\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"}},\"ja\":{\"d\":\"なぜこれらの指標が重要なのか\",\"a\":{\"b\":\"バンドルサイズ\",\"a\":\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きくなると、ダウンロード時間が長くなります。特に、多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。数キロバイトから数十キロバイトのランタイムコードに加えて、翻訳ファイル自体の重さも加わります。\"},\"c\":{\"b\":\"レンダリングとハイドレーション\",\"a\":\"大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更により、ツリー全体で再レンダリングがトリガーされる可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチにより、ページがインタラクティブになるまでのレイテンシが増加し、Time to Interactive (TTI) に直接影響します。\"},\"b\":{\"b\":\"ダイナミックローディング\",\"a\":\"すべての翻訳を事前にロードすると、初期ペイロードが過負荷になります。ダイナミック（遅延）ローディングは、ルートまたはネームスペースごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延ロードには独自のトレードオフがあります。ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどです。両方の戦略を測定することが不可欠です。\"}},\"ko\":{\"d\":\"이러한 지표가 중요한 이유\",\"a\":{\"b\":\"번들 크기\",\"a\":\"번들은 전 세계 모든 사용자에게 배송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 볼 수 있는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.\"},\"c\":{\"b\":\"렌더링 및 하이드레이션\",\"a\":\"대규모 JSON 사전을 모든 구성 요소에 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 변경은 전체 트리에서 다시 렌더링을 트리거할 수 있습니다. SSR 하이드레이션 중에 거대한 번역 개체를 구문 분석하고 첨부하면 페이지가 상호 작용하기 전에 대기 시간이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.\"},\"b\":{\"b\":\"동적 로딩\",\"a\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 보냅니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"}},\"ru\":{\"d\":\"Почему эти показатели важны\",\"a\":{\"b\":\"Размер бандла\",\"a\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Чем больше бандл, тем дольше время загрузки, особенно при медленном 3G-соединении, распространенном во многих регионах. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт кода во время выполнения, плюс сами файлы переводов.\"},\"c\":{\"b\":\"Рендеринг и гидратация\",\"a\":\"Подключение большого словаря JSON к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода увеличивают задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\"},\"b\":{\"b\":\"Динамическая загрузка\",\"a\":\"Предварительная загрузка всех переводов перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\"}}}}")
}, _ = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = f(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return _({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return c(o);
}, v = /* @__PURE__ */ new WeakMap(), y = 0, te = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ne = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, S = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, w = "translation", T = "object", ie = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: T,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, oe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ae(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => oe(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, de = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", P = {
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
}, F = (e) => {
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
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, fe = R, U = R, W = R, G = (e) => R, K = R, pe = (e, t = !0) => [
	z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	B,
	H,
	fe,
	G(e ?? P.defaultLocale),
	K,
	U,
	W
], me = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = re(r ?? P.defaultLocale, de(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => _({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return c(a);
	}
}, _e = R, ve = R, ye = R, q = /* @__PURE__ */ new Map(), be = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		B,
		V(e ?? P.defaultLocale),
		H,
		G(e ?? P.defaultLocale),
		K,
		U,
		W,
		ge,
		_e,
		ve,
		ye
	];
	return q.set(n, r), r;
}, J = (e, t) => he(e, t, be(typeof t == "object" && t ? t.locale : t)), xe = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Se = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => c(r({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? a(t) : Array.isArray(t) ? a("span", t) : t;
		};
	}
})), Ce = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
}), we = (t, n) => {
	let r = i() ? o(xe) : void 0, a = s(r?.locale) ? r.locale : f(r?.locale ?? P.defaultLocale), c = e(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = e(() => c.value.locale ?? a.value), u = ee({});
	h([
		() => m(t),
		() => l.value,
		() => c.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let d = (t) => new Proxy({}, {
		get(n, r, i) {
			let a = e(() => Y(u.value, t));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = t.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return d(o);
			if (Se(s)) return Ce(e(() => Y(u.value, o)));
			if (typeof s == "function") {
				let e = Y(u.value, t);
				return e != null && !Object.hasOwn(e, r) ? s.bind(e) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = e(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = Y(u.value, t);
			return X(e) ? Reflect.ownKeys(e) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return d([]);
};
function Te(e) {
	l(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), u(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Ee = r({
	__name: "WhyItMatters",
	setup(e, { expose: t }) {
		t(), Te("WhyItMatters");
		let { d: n, a: r, c: i, b: a } = we(g), o = {
			title: n,
			bundleSize: r,
			renderingHydration: i,
			dynamicLoading: a
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), De = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Oe = { class: "mb-16" }, ke = { class: "mb-6 text-2xl font-bold text-foreground" }, Ae = { class: "grid gap-6 md:grid-cols-3" }, $ = { class: "rounded-lg border border-border bg-card p-6" }, je = { class: "mb-2 text-lg font-semibold text-foreground" }, Me = { class: "text-sm text-muted-foreground" }, Ne = { class: "rounded-lg border border-border bg-card p-6" }, Pe = { class: "mb-2 text-lg font-semibold text-foreground" }, Fe = { class: "text-sm text-muted-foreground" }, Ie = { class: "rounded-lg border border-border bg-card p-6" }, Le = { class: "mb-2 text-lg font-semibold text-foreground" }, Re = { class: "text-sm text-muted-foreground" };
function ze(e, r, i, a, o, s) {
	return d(), t("section", Oe, [n("h2", ke, p(a.title), 1), n("div", Ae, [
		n("div", $, [n("h3", je, p(a.bundleSize.title), 1), n("p", Me, p(a.bundleSize.description), 1)]),
		n("div", Ne, [n("h3", Pe, p(a.renderingHydration.title), 1), n("p", Fe, p(a.renderingHydration.description), 1)]),
		n("div", Ie, [n("h3", Le, p(a.dynamicLoading.title), 1), n("p", Re, p(a.dynamicLoading.description), 1)])
	])]);
}
var Be = De(Ee, [["render", ze], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/home/WhyItMatters.vue"]]);
export { Be as default };
