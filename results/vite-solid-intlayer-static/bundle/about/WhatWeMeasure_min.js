import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r, createContext as i, createMemo as a, lazy as o, useContext as s } from "solid-js";
var c = {
	key: "what-we-measure",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":\"Bundle size impact\",\"i\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\",\"h\":\"Rendering overhead\",\"d\":\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\",\"e\":\"Hydration cost\",\"b\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\",\"f\":\"Lazy loading effectiveness\",\"k\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\",\"g\":\"Locale switch speed\",\"c\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\",\"j\":\"What We Measure\"},\"fr\":{\"a\":\"Impact sur la taille du bundle\",\"i\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\",\"h\":\"Surcharge de rendu\",\"d\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.\",\"e\":\"Coût d'hydratation\",\"b\":\"Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.\",\"f\":\"Efficacité du chargement différé\",\"k\":\"Si la division des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis elle introduit (requêtes en cascade, FOUC, complexité du cache).\",\"g\":\"Vitesse de changement de langue\",\"c\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.\",\"j\":\"Ce que nous mesurons\"},\"es\":{\"a\":\"Impacto en el tamaño del paquete\",\"i\":\"Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\",\"h\":\"Sobrecarga de renderizado\",\"d\":\"Cuánto tiempo adicional añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizaciones innecesarias en todo el árbol de componentes.\",\"e\":\"Coste de hidratación\",\"b\":\"Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\",\"f\":\"Efectividad de la carga diferida\",\"k\":\"Si la división de las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).\",\"g\":\"Velocidad de cambio de idioma\",\"c\":\"Qué tan rápido la aplicación puede cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, la re-renderización de componentes y la actualización del DOM.\",\"j\":\"Qué medimos\"},\"de\":{\"a\":\"Auswirkungen auf die Bundle-Größe\",\"i\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\",\"h\":\"Rendering-Overhead\",\"d\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\",\"e\":\"Hydrierungskosten\",\"b\":\"Während SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.\",\"f\":\"Effektivität von Lazy Loading\",\"k\":\"Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\",\"g\":\"Geschwindigkeit beim Gebietschemata-Wechsel\",\"c\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des Re-Renderings von Komponenten und der Aktualisierung des DOM.\",\"j\":\"Was wir messen\"},\"it\":{\"a\":\"Impatto sulla dimensione del bundle\",\"i\":\"I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\",\"h\":\"Overhead di rendering\",\"d\":\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un singolo fornitore di contesto possono causare re-rendering non necessari nell'albero dei componenti.\",\"e\":\"Costo di idratazione\",\"b\":\"Durante il SSR, i dati di traduzione vengono serializzati in HTML. I dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.\",\"f\":\"Efficacia del lazy loading\",\"k\":\"Se la suddivisione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste waterfall, FOUC, complessità della cache).\",\"g\":\"Velocità di cambio lingua\",\"c\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di runtime, inclusi il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.\",\"j\":\"Cosa misuriamo\"},\"pt\":{\"a\":\"Impacto no tamanho do pacote\",\"i\":\"Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\",\"h\":\"Sobrecarga de renderização\",\"d\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.\",\"e\":\"Custo de hidratação\",\"b\":\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentano o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.\",\"f\":\"Eficácia do carregamento lento\",\"k\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs ela introduz (requisições em cascata, FOUC, complexità de cache).\",\"g\":\"Velocidade de troca de idioma\",\"c\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\",\"j\":\"O que medimos\"},\"zh\":{\"a\":\"捆绑包大小影响\",\"i\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。\",\"h\":\"渲染开销\",\"d\":\"库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树发生不必要的重新渲染。\",\"e\":\"水合成本\",\"b\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型字典会增加 HTML 负载并减慢水合过程（即页面变得可交互的时刻）。\",\"f\":\"延迟加载效果\",\"k\":\"按路由或命名空间拆分翻译是否真的减少了初始加载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。\",\"g\":\"语言环境切换速度\",\"c\":\"应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。\",\"j\":\"我们测量什么\"},\"ja\":{\"a\":\"バンドルサイズの影響\",\"i\":\"i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速ネットワークでのダウンロード時間に直接影響します。\",\"h\":\"レンダリングオーバーヘッド\",\"d\":\"ライブラリがReactのレンダリングサイクルにどれだけの時間を追加するか。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要なリレンダリングを引き起こす可能性があります。\",\"e\":\"ハイドレーションコスト\",\"b\":\"SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。\",\"f\":\"遅延ロードの有効性\",\"k\":\"ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するかどうか、およびどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。\",\"g\":\"ロケール切り替え速度\",\"c\":\"新しい翻訳の取得、コンポーネントのリレンダリング、DOMの更新を含め、実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。\",\"j\":\"測定内容\"},\"ko\":{\"a\":\"번들 크기 영향\",\"i\":\"i18n 라이브러리 및 해당 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\",\"h\":\"렌더링 오버헤드\",\"d\":\"라이브러리가 React의 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 삽입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 유발할 수 있습니다.\",\"e\":\"수화 비용\",\"b\":\"SSR 중에는 번역 데이터가 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 대화형이 되는 순간인 수화를 늦춥니다.\",\"f\":\"지연 로딩 효과\",\"k\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 여부입니다.\",\"g\":\"로케일 전환 속도\",\"c\":\"새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트를 포함하여 런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지입니다.\",\"j\":\"측정 항목\"},\"ru\":{\"a\":\"Влияние на размер бандла\",\"i\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и её файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\",\"h\":\"Накладные расходы на рендеринг\",\"d\":\"Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\",\"e\":\"Стоимость гидратации\",\"b\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают размер HTML-пейлоада и замедляют гидратацию — момент, когда страница становится интерактивной.\",\"f\":\"Эффективность ленивой загрузки\",\"k\":\"Действительно ли разделение переводов по маршрутам или пространствам имен уменьшает начальную загрузку, и какие компромиссы оно привносит (каскадные запросы, FOUC, сложность кэширования).\",\"g\":\"Скорость переключения локали\",\"c\":\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\",\"j\":\"Что мы измеряем\"}}}")
}, l = {
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
}, u = {
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
}, d = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!d) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, m = !1, h, g = () => typeof window > "u" ? p(f) : (m ||= (h = p(f), !0), h), _ = /* @__PURE__ */ new Map(), v = (e, t) => Object.create(new Proxy(e, {
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
}), y = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = _.get(t);
	i || (i = /* @__PURE__ */ new Map(), _.set(t, i));
	let a = i.get(r);
	return a || (a = v(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ee = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, y(t, Array.prototype)), r;
}, b = /* @__PURE__ */ new WeakMap(), x = 0, S = (e) => {
	if (!e) return "base";
	let t = b.get(e);
	if (t) return t;
	x += 1;
	let n = `p${x}`;
	return b.set(e, n), n;
}, C = 256, w = /* @__PURE__ */ new WeakMap(), T = (e) => typeof e == "object" && !!e, E = (e, t, n) => `${e}_${t}_${S(n)}`, D = (e, t) => {
	if (!T(e)) return { hit: !1 };
	let n = w.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!T(e)) return n;
	let r = w.get(e);
	return r || (r = /* @__PURE__ */ new Map(), w.set(e, r)), r.size >= C && r.clear(), r.set(t, n), n;
}, k = "translation", A = "object", j = "array", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
		type: j,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: A,
			key: r
		};
		if (t.eager) {
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !P(e) || !P(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? F(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, I = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => F(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = I(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: k,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, H = L, U = L, W = L, G = (e) => L, K = L, q = (e, t = !0) => [
	R(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
	z,
	B(e ?? l.defaultLocale),
	V,
	H,
	G(e ?? l.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== L), J = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), X = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = E(r ?? l.defaultLocale, "", n), o = D(e, a);
	if (o.hit) return o.content;
	let s = n ?? q(r), c = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return J(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(u)) : O(e, a, u(c));
}, Z = null, Q = null;
Z?.catch(() => {}), Q?.catch(() => {});
var te = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ee({
		value: t.children,
		children: t.children
	})
}, ne = L, re = L;
o(() => Z.then((e) => ({ default: e.MarkdownRenderer }))), o(() => Z.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ie = L;
o(() => Q.then((e) => ({ default: e })));
var ae = L, $ = /* @__PURE__ */ new Map(), oe = (e, t = !0) => {
	let n = `${e ?? l.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		te,
		R(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
		z,
		B(e ?? l.defaultLocale),
		V,
		G(e ?? l.defaultLocale),
		K,
		U,
		W,
		ne,
		re,
		ie,
		ae
	].filter((e) => e !== L);
	return $.set(n, r), r;
}, se = (e, t) => X(e, t, oe(typeof t == "object" && t ? t.locale : t)), ce = g, le = i({
	locale: () => ce() ?? l?.defaultLocale,
	setLocale: () => null
}), ue = Symbol("LOADABLE_SETTLED_VALUE"), de = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[ue];
}, fe = (e, t) => {
	let n = s(le) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return se(de(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, pe = n("<section class=\"mx-auto mt-12 max-w-3xl\"><h2 class=\"mb-4 text-2xl font-bold text-foreground\"></h2><ul class=space-y-4>"), me = n("<li class=\"rounded-md border border-border p-4\"><span class=\"block text-sm font-bold text-primary\"></span><span class=\"mt-1 block text-sm text-muted-foreground\">");
function he() {
	let n = fe(c), i = () => [
		{
			metric: n().a.value,
			desc: n().i.value
		},
		{
			metric: n().h.value,
			desc: n().d.value
		},
		{
			metric: n().e.value,
			desc: n().b.value
		},
		{
			metric: n().f.value,
			desc: n().k.value
		},
		{
			metric: n().g.value,
			desc: n().c.value
		}
	];
	return (() => {
		var a = pe(), o = a.firstChild, s = o.nextSibling;
		return t(o, () => n().j), t(s, e(r, {
			get each() {
				return i();
			},
			children: (e) => (() => {
				var n = me(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.metric), t(i, () => e.desc), n;
			})()
		})), a;
	})();
}
export { he as default };
