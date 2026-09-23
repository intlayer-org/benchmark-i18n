import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, onBeforeMount as u, onMounted as d, openBlock as f, ref as p, renderList as m, shallowRef as h, toDisplayString as g, toValue as _, watch as v } from "vue";
var y = {
	key: "what-we-measure",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"b\":\"What We Measure\",\"a\":[{\"metric\":\"Bundle size impact\",\"desc\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\"},{\"metric\":\"Rendering overhead\",\"desc\":\"How much extra time the library adds to the render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\"},{\"metric\":\"Hydration cost\",\"desc\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\"},{\"metric\":\"Lazy loading effectiveness\",\"desc\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\"},{\"metric\":\"Locale switch speed\",\"desc\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\"}]},\"fr\":{\"b\":\"Ce que nous mesurons\",\"a\":[{\"metric\":\"Impact sur la taille du bundle\",\"desc\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\"},{\"metric\":\"Surcharge de rendu\",\"desc\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arborescence des composants.\"},{\"metric\":\"Coût d'hydratation\",\"desc\":\"Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.\"},{\"metric\":\"Efficacité du chargement différé\",\"desc\":\"Si le fractionnement des traductions par itinéraire ou par espace de noms réduit réellement la charge initiale, et quels compromis il introduit (requêtes en cascade, FOUC, complexité du cache).\"},{\"metric\":\"Vitesse de changement de langue\",\"desc\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le re-rendu des composants et la mise à jour du DOM.\"}]},\"es\":{\"b\":\"Lo que medimos\",\"a\":[{\"metric\":\"Impacto en el tamaño del bundle\",\"desc\":\"Los bytes adicionales de JavaScript que se envían a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\"},{\"metric\":\"Sobrecarga de renderizado\",\"desc\":\"Cuánto tiempo adicional agrega la biblioteca al ciclo de renderizado. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\"},{\"metric\":\"Coste de hidratación\",\"desc\":\"Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\"},{\"metric\":\"Efectividad de la carga perezosa\",\"desc\":\"Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad del caché).\"},{\"metric\":\"Velocidad de cambio de idioma\",\"desc\":\"Qué tan rápido la aplicación puede cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el re-renderizado de componentes y la actualización del DOM.\"}]},\"de\":{\"b\":\"Was wir messen\",\"a\":[{\"metric\":\"Auswirkungen auf die Bundle-Größe\",\"desc\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\"},{\"metric\":\"Rendering-Overhead\",\"desc\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\"},{\"metric\":\"Hydratationskosten\",\"desc\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydratation – den Moment, in dem die Seite interaktiv wird.\"},{\"metric\":\"Effektivität von Lazy Loading\",\"desc\":\"Ob die Aufteilung von Übersetzungen nach Route oder Namensraum die Erstbelastung tatsächlich reduziert und welche Kompromisse sie mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität).\"},{\"metric\":\"Sprachumschaltgeschwindigkeit\",\"desc\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.\"}]},\"it\":{\"b\":\"Cosa misuriamo\",\"a\":[{\"metric\":\"Impatto sulle dimensioni del bundle\",\"desc\":\"I byte JavaScript aggiuntivi inviati agli utenti quando sono incluse la libreria i18n e i relativi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\"},{\"metric\":\"Sovraccarico di rendering\",\"desc\":\"Quanto tempo extra aggiunge la libreria al ciclo di rendering. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare re-rendering non necessari in tutto l'albero dei componenti.\"},{\"metric\":\"Costo dell'idratazione\",\"desc\":\"Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, ovvero il momento in care la pagina diventa interattiva.\"},{\"metric\":\"Efficacia del caricamento pigro\",\"desc\":\"Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache).\"},{\"metric\":\"Velocità di cambio della lingua\",\"desc\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.\"}]},\"pt\":{\"b\":\"O Que Medimos\",\"a\":[{\"metric\":\"Impacto no tamanho do bundle\",\"desc\":\"Os bytes adicionais de JavaScript enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\"},{\"metric\":\"Sobrecarga de renderização\",\"desc\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.\"},{\"metric\":\"Custo de hidratação\",\"desc\":\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga útil do HTML e retardam a hidratação — o momento em que a página se torna interativa.\"},{\"metric\":\"Eficácia do carregamento lento\",\"desc\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações isso introduz (solicitações em cascata, FOUC, complexidade de cache).\"},{\"metric\":\"Velocidade de troca de idioma\",\"desc\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\"}]},\"zh\":{\"b\":\"我们的测量指标\",\"a\":[{\"metric\":\"对捆绑包大小的影响\",\"desc\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这会直接影响慢速网络上的下载时间。\"},{\"metric\":\"渲染开销\",\"desc\":\"库为渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。\"},{\"metric\":\"注水（Hydration）成本\",\"desc\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。\"},{\"metric\":\"延迟加载的有效性\",\"desc\":\"按路由或命名空间拆分翻译是否真的减少了初始加载量，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。\"},{\"metric\":\"语言切换速度\",\"desc\":\"应用程序在运行时从一种语言切换到另一种语言的速度有多快——包括获取新翻译、重新渲染组件和更新 DOM。\"}]},\"ja\":{\"b\":\"測定内容\",\"a\":[{\"metric\":\"バンドルサイズへの影響\",\"desc\":\"i18nライブラリとその翻訳ファイルが含まれている場合にユーザーに送信される追加のJavaScriptバイト。これは、低速ネットワークでのダウンロード時間に直接影響します。\"},{\"metric\":\"レンダリングのオーバーヘッド\",\"desc\":\"ライブラリがレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\"},{\"metric\":\"ハイドレーションのコスト\",\"desc\":\"SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\"},{\"metric\":\"遅延読み込みの有効性\",\"desc\":\"ルートや名前空間ごとに翻訳を分割することが実際に初期ロードを削減するかどうか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）を導入するか。\"},{\"metric\":\"言語切り替え速度\",\"desc\":\"ランタイムにアプリが言語を切り替える速度。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\"}]},\"ko\":{\"b\":\"측정 항목\",\"a\":[{\"metric\":\"번들 크기 영향\",\"desc\":\"i18n 라이브러리 및 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\"},{\"metric\":\"렌더링 오버헤드\",\"desc\":\"라이브러리가 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 삽입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다.\"},{\"metric\":\"하이드레이션 비용\",\"desc\":\"SSR 기간 동안 번역 데이터는 HTML로 직렬화됩니다. 대규모 사전은 HTML 페이로드를 증가시키고 페이지가 대화형이 되는 순간인 하이드레이션 속도를 늦춥니다.\"},{\"metric\":\"지연 로딩의 효과성\",\"desc\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지 여부와 도입되는 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)는 무엇인지 확인합니다.\"},{\"metric\":\"언어 전환 속도\",\"desc\":\"런타임에 앱이 한 언어에서 다른 언어로 전환되는 속도(새 번역 가져오기, 구성 요소 재렌더링, DOM 업데이트 포함)입니다.\"}]},\"ru\":{\"b\":\"Что мы измеряем\",\"a\":[{\"metric\":\"Влияние на размер бандла\",\"desc\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\"},{\"metric\":\"Издержки на рендеринг\",\"desc\":\"Сколько дополнительного времени библиотека добавляет к циклу рендеринга. Библиотеки, внедряющие переводы через один контекстный провайдер, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\"},{\"metric\":\"Стоимость гидратации\",\"desc\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML-кода и замедляют гидратацию — момент, когда страница становится интерактивной.\"},{\"metric\":\"Эффективность ленивой загрузки\",\"desc\":\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы это влечет за собой (каскадные запросы, FOUC, сложность кэширования).\"},{\"metric\":\"Скорость переключения языка\",\"desc\":\"Насколько быстро приложение может переключаться с одного языка на другой во время выполнения, включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\"}]}}}")
}, b = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = p(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
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
			return b({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), l(o);
}, x = "translation", S = "object", C = "array", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: C,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: S,
					key: r
				}]
			}, i = w(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, T = {
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
}, E = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, D = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (E(e) && E(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : D(e[r], t[r]));
		return n;
	}
	return e;
}, O = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => D(e, t));
}, k = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, A = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? k : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: x,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return O(o, e, t);
	}
}, j = k, M = k, N = k, P = k, F = (e) => k, I = k, L = (e, t = !0) => [
	A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
	j,
	M,
	N,
	F(e ?? T.defaultLocale),
	I,
	P
], R = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), z = (e, t, n = L(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return R(e.content, r, n);
}, B = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => b({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return l(a);
	}
}, V = k, H = k, U = k, W = /* @__PURE__ */ new Map(), G = (e, t = !0) => {
	let n = `${e ?? T.defaultLocale}_${t}`;
	if (W.has(n)) return W.get(n);
	let r = [
		A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
		j,
		M,
		F(e ?? T.defaultLocale),
		I,
		P,
		B,
		V,
		H,
		U
	];
	return W.set(n, r), r;
}, K = (e, t) => z(e, t, G(t)), q = Symbol("intlayer"), J = (e, t) => t.reduce((e, t) => e?.[t], e), Y = (e) => typeof e == "object" && !!e, X = (e) => typeof e == "function" || Y(e) && ("render" in e || "setup" in e), Z = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : X(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), $ = (e) => new Proxy({}, {
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
}), ee = (e, n) => {
	let r = a() ? s(q) : void 0, i = c(r?.locale) ? r.locale : p(r?.locale ?? T.defaultLocale), o = t(() => (n === void 0 ? void 0 : _(n)) ?? i.value), l = h({});
	v([() => _(e), () => o.value], ([e, t]) => {
		l.value = K(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => J(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = J(l.value, o);
			if (s === void 0 || Y(s) && !X(s)) return u(o);
			if (Z(s)) return $(t(() => J(l.value, o)));
			let c = t(() => J(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = J(l.value, e);
			return Y(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
};
function te(e) {
	u(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), d(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var ne = i({
	__name: "WhatWeMeasure",
	setup(e, { expose: t }) {
		t(), te("WhatWeMeasure");
		let { b: n, a: r } = ee(y), i = {
			title: n,
			metrics: r
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), re = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ie = { class: "mt-12 mx-auto max-w-3xl" }, ae = { class: "mb-4 text-2xl font-bold text-foreground" }, oe = { class: "space-y-4" }, se = { class: "block text-sm font-bold text-primary" }, ce = { class: "block mt-1 text-sm text-muted-foreground" };
function le(t, i, a, o, s, c) {
	return f(), n("section", ie, [r("h2", ae, g(o.title), 1), r("ul", oe, [(f(!0), n(e, null, m(o.metrics, (e) => (f(), n("li", {
		key: e.metric,
		class: "rounded-md border border-border p-4"
	}, [r("span", se, g(e.metric), 1), r("span", ce, g(e.desc), 1)]))), 128))])]);
}
var ue = re(ne, [["render", le], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/src/components/pages/about/WhatWeMeasure.vue"]]);
export { ue as default };
