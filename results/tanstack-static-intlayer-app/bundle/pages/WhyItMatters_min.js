import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "why-it-matters",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"g\":\"Why These Metrics Matter\",\"a\":\"Bundle Size\",\"f\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\",\"e\":\"Rendering & Hydration\",\"b\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\",\"c\":\"Dynamic Loading\",\"d\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"},\"fr\":{\"g\":\"Pourquoi ces Métriques Comptent\",\"a\":\"Taille du Bundle\",\"f\":\"Le bundle représente les données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement en poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\",\"e\":\"Rendu & Hydratation\",\"b\":\"Connecter un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\",\"c\":\"Chargement Dynamique\",\"d\":\"Charger toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy) divise les traductions par route ou espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade (waterfall), flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.\"},\"es\":{\"g\":\"Por qué estas métricas son importantes\",\"a\":\"Tamaño del Bundle\",\"f\":\"El bundle es la información que se envía a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas de i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de ejecución, además de los propios archivos de traducción.\",\"e\":\"Renderizado e Hidratación\",\"b\":\"Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la fijación de objetos de traducción masivos agregan latencia antes de que la página se vuelva interactiva, lo que afecta directamente al Tiempo de Interacción (TTI).\",\"c\":\"Carga Dinámica\",\"d\":\"Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que necesita la página actual. Sin embargo, la carga diferida presenta sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de almacenamiento en caché. Medir ambas estrategias es esencial.\"},\"de\":{\"g\":\"Warum diese Metriken wichtig sind\",\"a\":\"Bundle-Größe\",\"f\":\"Das Bundle ist die Datenmenge, die an jeden Benutzer weltweit gesendet wird. Ein größeres Bundle bedeutet längere Downloadzeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.\",\"e\":\"Rendering & Hydratisierung\",\"b\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.\",\"c\":\"Dynamisches Laden\",\"d\":\"Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetztem Inhalt und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.\"},\"it\":{\"g\":\"Perché queste metriche sono importanti\",\"a\":\"Dimensioni del bundle\",\"f\":\"Il bundle rappresenta i dati inviati a ogni utente in tutto il mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\",\"e\":\"Rendering e idratazione\",\"b\":\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare nuovi rendering nell'intero albero. Durante l'idratazione SSR, l'analisi e il collegamento di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\",\"c\":\"Caricamento dinamico\",\"d\":\"Il caricamento preventivo di tutte le traduzioni sovraccarica il payload iniziale. Il caricamento dinamico (lazy) suddivide le traduzioni per percorso o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromis: richieste a cascata (waterfall), flash di contenuti non tradotti e complessità del caching. Misurare entrambe le strategie è essenziale.\"},\"pt\":{\"g\":\"Por que essas métricas são importantes\",\"a\":\"Tamanho do Bundle\",\"f\":\"O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\",\"e\":\"Renderização e Hidratação\",\"b\":\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\",\"c\":\"Carregamento Dinâmico\",\"d\":\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"},\"zh\":{\"g\":\"为什么这些指标很重要\",\"a\":\"包大小\",\"f\":\"Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。\",\"e\":\"渲染与注水\",\"b\":\"将大型 JSON 字典连接 to 每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\",\"c\":\"动态加载\",\"d\":\"预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"},\"ja\":{\"g\":\"これらの指標が重要な理由\",\"a\":\"バンドルサイズ\",\"f\":\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。これは、多くの地域で一般的な低速な 3G 接続では特に顕著です。i18n ライブラリはその重量が劇的に異なります。数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体が含まれます。\",\"e\":\"レンダリングとハイドレーション\",\"b\":\"大きな JSON 辞書を各コンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングをトリガーする可能性があります。SSR ハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチにより、ページがインタラクティブになるまでのレイテンシが増加し、Time to Interactive (TTI) に直接影響します。\",\"c\":\"ダイナミックローディング\",\"d\":\"すべての翻訳を事前読み込みすると、初期ペイロードが過負荷になります。ダイナミック（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。\"},\"ko\":{\"g\":\"이러한 지표가 중요한 이유\",\"a\":\"번들 크기\",\"f\":\"번들은 전 세계 모든 사용자에게 배송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 볼 수 있는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 런타임 코드 몇 킬로바이트에서 수십 킬로바이트까지 무게가 매우 다양하며, 번역 파일 자체도 포함됩니다.\",\"e\":\"렌더링 및 하이드레이션\",\"b\":\"대규모 JSON 사전을 모든 컴포넌트에 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 트리거할 수 있습니다. SSR 하이드레이션 동안 대규모 번역 객체를 파싱하고 첨부하면 페이지가 상호 작용 가능해지기 전에 지연 시간이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.\",\"c\":\"동적 로딩\",\"d\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등 자체적인 트레이드오프를 발생시킵니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"},\"ru\":{\"g\":\"Почему эти показатели важны\",\"a\":\"Размер бандла\",\"f\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.\",\"e\":\"Рендеринг и гидратация\",\"b\":\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).\",\"c\":\"Динамическая загрузка\",\"d\":\"Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.\"}}}")
}, p = {
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
}, m = {
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
}, h = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(l, { children: e });
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
}, g = /* @__PURE__ */ new WeakMap(), _ = 0, ee = (e) => {
	if (!e) return "base";
	let t = g.get(e);
	if (t) return t;
	_ += 1;
	let n = `p${_}`;
	return g.set(e, n), n;
}, te = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, ne = (e, t, n) => `${e}_${t}_${ee(n)}`, re = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= te && r.clear(), r.set(t, n), n;
}, ie = "translation", x = "insertion", ae = "object", oe = "array", S = "markdown", C = "html", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: oe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ae,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = w(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = w(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, T = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = "default", se = /[^A-Za-z0-9._&=-]/g, D = /[^A-Za-z0-9._-]/g, O = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, k = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, O);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, A = (e) => e === void 0 ? E : typeof e == "string" ? k(e, se) : Object.keys(e).sort().map((t) => `${k(t, D)}=${k(String(e[t]), D)}`).join("&"), j = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(A) : [A(e)], M = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, le = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ue = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, de = (e, t) => {
	if (!le(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : M(j(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ce(e, n, t, s)).map((t) => ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, N = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? j(n).join(",") : String(n)}`;
}).join("|") : "", P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (P(e) && P(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : F(e[r], t[r]));
		return n;
	}
	return e;
}, pe = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => F(e, t));
}, I = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, me = (e) => {
	if (typeof e == "string") return e;
	if (I(e)) return e.nodeType === "html" ? e[C] : e[S];
}, he = (e, t) => {
	if (typeof e == "string") return t;
	if (I(e)) {
		let n = e.nodeType === "html" ? C : S;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, L = (e, t, n, r, i) => {
	let a = he(e, T(me(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
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
					type: ie,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return pe(o, e, t);
	}
}, B = R, ge = (e) => R, V = R, _e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || I(e),
			transform: (e, n, r) => {
				if (I(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = T(i, e);
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
}, H = R, U = R, W = (e) => R, G = R, ve = (e, t = !0) => [
	z(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	B,
	V,
	_e,
	W(e ?? p.defaultLocale),
	G,
	H,
	U
], ye = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), be = (e, t, n) => {
	let { locale: r, selector: i } = fe(t), a = ne(r ?? p.defaultLocale, N(i), n), o = re(e, a);
	if (o.hit) return o.content;
	let s = n ?? ve(r), c = de(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ye(e.content, t, s);
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", K = /\{\{\s*(.*?)\s*\}\}/g, Se = (e, t = {}) => {
	if (!Object.values(t).some(xe)) return {
		isSimple: !0,
		parts: e.replace(K, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(K), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ce = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: n.children,
		children: n.children
	})
}, we = R, Te = (t, r) => {
	let i = Se(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ee = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || I(e),
			transform: (e, n, r) => {
				if (I(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Te(i, e);
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
}, De = R, Oe = R, q = /* @__PURE__ */ new Map(), ke = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		B,
		ge(e ?? p.defaultLocale),
		V,
		W(e ?? p.defaultLocale),
		G,
		H,
		U,
		Ce,
		we,
		Ee,
		De,
		Oe
	];
	return q.set(n, r), r;
}, Ae = (e, t) => be(e, t, ke(typeof t == "object" && t ? t.locale : t)), J = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, je = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = J(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var X = {
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
}, Me = (e = X) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Ne = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: J(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, je(r, e, i));
			} catch {}
		}
	}
}, Z = Me(X), Pe = (e, t) => Ne(e, {
	...X,
	isCookieEnabled: t
}), Fe = () => {
	let { locale: e } = i(Q) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ie = ({ children: e }) => (Fe(), e), Le = () => {
	let { locale: e } = i(Q) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Re = ({ children: e }) => (Le(), e), ze = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Be = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, Q = t({
	locale: Z ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ve = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: d } = p ?? {}, [f, m] = c(e ?? Z ?? t ?? d);
	a(() => {
		e && e !== f && m(e);
	}, [e]), a(() => {
		ze();
	}, []);
	let h = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Pe(e, s);
		}
	}), g = Be(f);
	return u(Q.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, $ = ({ children: e, ...t }) => d(Ve, {
	...t,
	children: [
		u(Ie, {}),
		u(Re, {}),
		e
	]
}), He = (e, t) => {
	let { locale: n, variant: r } = i(Q) ?? {}, a = t ?? n, s = typeof a == "object" && a ? `${a.locale ?? ""}|${N(a)}` : a;
	return o(() => Ae(e, a), [e.key, s]);
};
function Ue() {
	let e = He(f);
	return d("section", {
		className: "mb-16",
		children: [u("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: e.g
		}), d("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				d("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [u("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e.a
					}), u("p", {
						className: "text-sm text-muted-foreground",
						children: e.f
					})]
				}),
				d("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [u("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e.e
					}), u("p", {
						className: "text-sm text-muted-foreground",
						children: e.b
					})]
				}),
				d("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [u("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e.c
					}), u("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					})]
				})
			]
		})]
	});
}
function We({ children: e }) {
	return u($, {
		locale: "en",
		children: e
	});
}
function Ge() {
	return u(We, { children: u(Ue, {}) });
}
export { Ge as default };
