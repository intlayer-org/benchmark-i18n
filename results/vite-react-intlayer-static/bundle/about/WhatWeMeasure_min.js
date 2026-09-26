import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useMemo as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
var l = {
	key: "what-we-measure",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":\"Bundle size impact\",\"i\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\",\"h\":\"Rendering overhead\",\"d\":\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\",\"e\":\"Hydration cost\",\"b\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\",\"f\":\"Lazy loading effectiveness\",\"k\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\",\"g\":\"Locale switch speed\",\"c\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\",\"j\":\"What We Measure\"},\"fr\":{\"a\":\"Impact sur la taille du bundle\",\"i\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\",\"h\":\"Surcharge de rendu\",\"d\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des rendus inutiles dans tout l'arbre des composants.\",\"e\":\"Coût d'hydratation\",\"b\":\"Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.\",\"f\":\"Efficacité du lazy loading\",\"k\":\"Si diviser les traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).\",\"g\":\"Vitesse de changement de langue\",\"c\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.\",\"j\":\"Ce que nous mesurons\"},\"es\":{\"a\":\"Impacto en el tamaño del bundle\",\"i\":\"Los bytes de JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca de i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\",\"h\":\"Sobrecarga de renderizado\",\"d\":\"¿Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React? Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.\",\"e\":\"Costo de hidratación\",\"b\":\"Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\",\"f\":\"Efectividad del lazy loading\",\"k\":\"Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).\",\"g\":\"Velocidad de cambio de idioma\",\"c\":\"Qué tan rápido puede cambiar la aplicación de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\",\"j\":\"Lo que medimos\"},\"de\":{\"a\":\"Auswirkungen auf die Bundle-Größe\",\"i\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit bei langsamen Netzwerken aus.\",\"h\":\"Rendering-Overhead\",\"d\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzelnen Kontextanbieter injizieren, können unnötige Re-Renders im gesamten Komponentenbaum verursachen.\",\"e\":\"Hydratisierungs-Kosten\",\"b\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydratisierung – den Moment, in dem die Seite interaktiv wird.\",\"f\":\"Effektivität des Lazy Loadings\",\"k\":\"Ob die Aufteilung von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse sie mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität).\",\"g\":\"Geschwindigkeit beim Sprachwechsel\",\"c\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufs neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.\",\"j\":\"Was wir messen\"},\"it\":{\"a\":\"Impatto sulla dimensione del bundle\",\"i\":\"I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sui tempi di download su reti lente.\",\"h\":\"Overhead di rendering\",\"d\":\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che inseriscono traduzioni tramite un singolo provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\",\"e\":\"Costo di idratazione\",\"b\":\"Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.\",\"f\":\"Efficacia del caricamento lento\",\"k\":\"Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache).\",\"g\":\"Velocità di cambio lingua\",\"c\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il nuovo rendering dei componenti e l'aggiornamento del DOM.\",\"j\":\"Cosa misuriamo\"},\"pt\":{\"a\":\"Impacto no tamanho do bundle\",\"i\":\"Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\",\"h\":\"Sobrecarga de renderização\",\"d\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de un único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.\",\"e\":\"Custo de hidratação\",\"b\":\"Durante o SSR, os datos de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.\",\"f\":\"Eficácia do carregamento lento\",\"k\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascata, FOUC, complexidade de cache).\",\"g\":\"Velocidade de troca de idioma\",\"c\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.\",\"j\":\"O que medimos\"},\"zh\":{\"a\":\"包大小影响\",\"i\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。\",\"h\":\"渲染开销\",\"d\":\"库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。\",\"e\":\"注水成本\",\"b\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。\",\"f\":\"延迟加载有效性\",\"k\":\"按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。\",\"g\":\"本地语言切换速度\",\"c\":\"应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。\",\"j\":\"我们测量什么\"},\"ja\":{\"a\":\"バンドルサイズへの影響\",\"i\":\"i18n ライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加の JavaScript バイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\",\"h\":\"レンダリングのオーバーヘッド\",\"d\":\"ライブラリが React のレンダリングサイクルにどれだけの時間を追加するか。単一のコンテキストプロバイダーを介して翻訳を挿入するライブラリは、コンポーネントツリー全体で不必要な再レンダリングを引き起こす可能性があります。\",\"e\":\"ハイドレーションのコスト\",\"b\":\"SSR 中、翻訳データは HTML にシリアル化されます。大規模な辞書は HTML ペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\",\"f\":\"遅延読み込みの有効性\",\"k\":\"ルートや名前空間ごとに翻訳を分割することが実際に初期読み込みを削減するかどうか、そしてどのようなトレードオフを導入するか（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）。\",\"g\":\"ロケール切り替え速度\",\"c\":\"ランタイム時にアプリが言語をどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOM の更新が含まれます。\",\"j\":\"測定対象\"},\"ko\":{\"a\":\"번들 크기 영향\",\"i\":\"i18n 라이브러리 및 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\",\"h\":\"렌더링 오버헤드\",\"d\":\"라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다.\",\"e\":\"하이드레이션 비용\",\"b\":\"SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대규모 사전은 HTML 페이로드를 증가시키고 페이지가 대화식으로 변하는 순간인 하이드레이션 속도를 늦춥니다.\",\"f\":\"지연 로딩 효과\",\"k\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)를 도입하는지 여부입니다.\",\"g\":\"로케일 전환 속도\",\"c\":\"런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지 — 새로운 번역 가져오기, 구성 요소 다시 렌더링 및 DOM 업데이트를 포함합니다.\",\"j\":\"측정 대상\"},\"ru\":{\"a\":\"Влияние на размер бандла\",\"i\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\",\"h\":\"Затраты на рендеринг\",\"d\":\"Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\",\"e\":\"Стоимость гидратации\",\"b\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\",\"f\":\"Эффективность ленивой загрузки\",\"k\":\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).\",\"g\":\"Скорость переключения языка\",\"c\":\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\",\"j\":\"Что мы измеряем\"}}}")
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
}, ee = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var f = {
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
}, p = (e = f) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ee) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, te = !1, m, ne = () => typeof window > "u" ? p(f) : (te ||= (m = p(f), !0), m), h = /* @__PURE__ */ new Map(), re = (e, t) => Object.create(new Proxy(e, {
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
}), g = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = h.get(t);
	i || (i = /* @__PURE__ */ new Map(), h.set(t, i));
	let a = i.get(r);
	return a || (a = re(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ie = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : s(o, { children: e }),
	value: t,
	...n
}, g(t)), _ = /* @__PURE__ */ new WeakMap(), v = 0, ae = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, oe = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, se = (e, t, n) => `${e}_${t}_${ae(n)}`, x = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= oe && r.clear(), r.set(t, n), n;
}, C = "translation", w = "enumeration", ce = "plural", le = "condition", T = "insertion", ue = "object", de = "array", E = "markdown", D = "html", fe = "gender", pe = "select", O = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, k);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, O(t, e, {
		type: de,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ue,
			key: r
		};
		if (t.eager) {
			n[r] = k(e[r], O(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = k(e[r], O(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, A = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !j(e) || !j(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? M(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, N = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, P = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, F = (e) => {
	if (typeof e == "string") return e;
	if (P(e)) return e.nodeType === "html" ? e[D] : e[E];
}, I = (e, t) => {
	if (typeof e == "string") return t;
	if (P(e)) {
		let n = e.nodeType === "html" ? D : E;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, L = (e, t, n, r, i) => {
	let a = I(e, A(F(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: C,
				key: e
			}]
		});
	}
}, V = R, H = (e) => R, U = R, me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: T }], i = e[T], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = A(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	w,
	le,
	ce,
	fe,
	pe
], he = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
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
		return !r && z(i) ? i(n) : i;
	};
}, G = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => he(e, t, n) : t, K = R, q = R, J = (e) => R, Y = R, ge = (e, t = !0) => [
	B(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	V,
	H(e ?? u.defaultLocale),
	U,
	me,
	J(e ?? u.defaultLocale),
	Y,
	K,
	q
].filter((e) => e !== R), _e = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), ve = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = se(r ?? u.defaultLocale, "", n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? ge(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return _e(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, ye = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, be = (e, t = {}) => {
	if (!Object.values(t).some(ye)) return {
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
}, xe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ie({
		value: t.children,
		children: t.children
	})
}, Q = R, Se = (t, r) => {
	let i = be(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ce = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: T }], i = e[T], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Se(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, we = R, Te = R, $ = /* @__PURE__ */ new Map(), Ee = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		xe,
		B(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		V,
		H(e ?? u.defaultLocale),
		U,
		J(e ?? u.defaultLocale),
		Y,
		K,
		q,
		Q,
		Ce,
		we,
		Te
	].filter((e) => e !== R);
	return $.set(n, r), r;
}, De = (e, t) => ve(e, t, Ee(typeof t == "object" && t ? t.locale : t)), Oe = ne, ke = t({
	get locale() {
		return Oe() ?? u?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ae = (e, t) => {
	let { locale: n, variant: r } = i(ke) ?? {}, o = t ?? n, s = o;
	return a(() => De(e, o), [e.key, s]);
};
function je() {
	let e = Ae(l), t = [
		{
			metric: e.a.value,
			desc: e.i.value
		},
		{
			metric: e.h.value,
			desc: e.d.value
		},
		{
			metric: e.e.value,
			desc: e.b.value
		},
		{
			metric: e.f.value,
			desc: e.k.value
		},
		{
			metric: e.g.value,
			desc: e.c.value
		}
	];
	return c("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [s("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: e.j
		}), s("ul", {
			className: "space-y-4",
			children: t.map((e) => c("li", {
				className: "rounded-md border border-border p-4",
				children: [s("span", {
					className: "block text-sm font-bold text-primary",
					children: e.metric
				}), s("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: e.desc
				})]
			}, e.metric))
		})]
	});
}
export { je as default };
