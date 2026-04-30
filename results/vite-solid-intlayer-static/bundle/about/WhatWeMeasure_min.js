import { Dynamic as e, createComponent as t, insert as n, template as r } from "solid-js/web";
import { For as i, createContext as a, createMemo as o, useContext as s } from "solid-js";
var c = {
	key: "what-we-measure",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":\"Bundle size impact\",\"i\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\",\"h\":\"Rendering overhead\",\"d\":\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\",\"e\":\"Hydration cost\",\"b\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\",\"f\":\"Lazy loading effectiveness\",\"k\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\",\"g\":\"Locale switch speed\",\"c\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\",\"j\":\"What We Measure\"},\"fr\":{\"a\":\"Impact sur la taille du bundle\",\"i\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\",\"h\":\"Surcharge de rendu\",\"d\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.\",\"e\":\"Coût d'hydratation\",\"b\":\"Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.\",\"f\":\"Efficacité du chargement différé\",\"k\":\"Si la division des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis elle introduit (requêtes en cascade, FOUC, complexité du cache).\",\"g\":\"Vitesse de changement de langue\",\"c\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.\",\"j\":\"Ce que nous mesurons\"},\"es\":{\"a\":\"Impacto en el tamaño del paquete\",\"i\":\"Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\",\"h\":\"Sobrecarga de renderizado\",\"d\":\"Cuánto tiempo adicional añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizaciones innecesarias en todo el árbol de componentes.\",\"e\":\"Coste de hidratación\",\"b\":\"Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\",\"f\":\"Efectividad de la carga diferida\",\"k\":\"Si la división de las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).\",\"g\":\"Velocidad de cambio de idioma\",\"c\":\"Qué tan rápido la aplicación puede cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, la re-renderización de componentes y la actualización del DOM.\",\"j\":\"Qué medimos\"},\"de\":{\"a\":\"Auswirkungen auf die Bundle-Größe\",\"i\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\",\"h\":\"Rendering-Overhead\",\"d\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\",\"e\":\"Hydrierungskosten\",\"b\":\"Während SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.\",\"f\":\"Effektivität von Lazy Loading\",\"k\":\"Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\",\"g\":\"Geschwindigkeit beim Gebietschemata-Wechsel\",\"c\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des Re-Renderings von Komponenten und der Aktualisierung des DOM.\",\"j\":\"Was wir messen\"},\"it\":{\"a\":\"Impatto sulla dimensione del bundle\",\"i\":\"I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\",\"h\":\"Overhead di rendering\",\"d\":\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un singolo fornitore di contesto possono causare re-rendering non necessari nell'albero dei componenti.\",\"e\":\"Costo di idratazione\",\"b\":\"Durante il SSR, i dati di traduzione vengono serializzati in HTML. I dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.\",\"f\":\"Efficacia del lazy loading\",\"k\":\"Se la suddivisione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste waterfall, FOUC, complessità della cache).\",\"g\":\"Velocità di cambio lingua\",\"c\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di runtime, inclusi il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.\",\"j\":\"Cosa misuriamo\"},\"pt\":{\"a\":\"Impacto no tamanho do pacote\",\"i\":\"Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\",\"h\":\"Sobrecarga de renderização\",\"d\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.\",\"e\":\"Custo de hidratação\",\"b\":\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentano o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.\",\"f\":\"Eficácia do carregamento lento\",\"k\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs ela introduz (requisições em cascata, FOUC, complexità de cache).\",\"g\":\"Velocidade de troca de idioma\",\"c\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\",\"j\":\"O que medimos\"},\"zh\":{\"a\":\"捆绑包大小影响\",\"i\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。\",\"h\":\"渲染开销\",\"d\":\"库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树发生不必要的重新渲染。\",\"e\":\"水合成本\",\"b\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型字典会增加 HTML 负载并减慢水合过程（即页面变得可交互的时刻）。\",\"f\":\"延迟加载效果\",\"k\":\"按路由或命名空间拆分翻译是否真的减少了初始加载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。\",\"g\":\"语言环境切换速度\",\"c\":\"应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。\",\"j\":\"我们测量什么\"},\"ja\":{\"a\":\"バンドルサイズの影響\",\"i\":\"i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速ネットワークでのダウンロード時間に直接影響します。\",\"h\":\"レンダリングオーバーヘッド\",\"d\":\"ライブラリがReactのレンダリングサイクルにどれだけの時間を追加するか。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要なリレンダリングを引き起こす可能性があります。\",\"e\":\"ハイドレーションコスト\",\"b\":\"SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。\",\"f\":\"遅延ロードの有効性\",\"k\":\"ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するかどうか、およびどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。\",\"g\":\"ロケール切り替え速度\",\"c\":\"新しい翻訳の取得、コンポーネントのリレンダリング、DOMの更新を含め、実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。\",\"j\":\"測定内容\"},\"ko\":{\"a\":\"번들 크기 영향\",\"i\":\"i18n 라이브러리 및 해당 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\",\"h\":\"렌더링 오버헤드\",\"d\":\"라이브러리가 React의 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 삽입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 유발할 수 있습니다.\",\"e\":\"수화 비용\",\"b\":\"SSR 중에는 번역 데이터가 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 대화형이 되는 순간인 수화를 늦춥니다.\",\"f\":\"지연 로딩 효과\",\"k\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 여부입니다.\",\"g\":\"로케일 전환 속도\",\"c\":\"새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트를 포함하여 런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지입니다.\",\"j\":\"측정 항목\"},\"ru\":{\"a\":\"Влияние на размер бандла\",\"i\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и её файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\",\"h\":\"Накладные расходы на рендеринг\",\"d\":\"Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\",\"e\":\"Стоимость гидратации\",\"b\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают размер HTML-пейлоада и замедляют гидратацию — момент, когда страница становится интерактивной.\",\"f\":\"Эффективность ленивой загрузки\",\"k\":\"Действительно ли разделение переводов по маршрутам или пространствам имен уменьшает начальную загрузку, и какие компромиссы оно привносит (каскадные запросы, FOUC, сложность кэширования).\",\"g\":\"Скорость переключения локали\",\"c\":\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\",\"j\":\"Что мы измеряем\"}}}")
}, l = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, u = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(u(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
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
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
}, d = {
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
}, f = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, p = "translation", m = "object", h = "array", g = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => g(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => g(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: h,
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
					type: m,
					key: r
				}]
			}, i = g(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, _ = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, v = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (_(e) && _(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : v(e[r], t[r]));
		return n;
	}
	return e;
}, y = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => v(e, t));
}, b = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, x = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? b : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: p,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return y(o, e, t);
	}
}, S = b, C = b, w = b, T = b, E = (e) => b, D = b, O = (e, t = !0) => [
	x(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	S,
	C,
	w,
	E(e ?? d.defaultLocale),
	D,
	T
], k = (e, t, n = []) => g(e, {
	...t,
	plugins: n
}), A = (e, t, n = O(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return k(e.content, r, n);
}, j = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => l({
		...n,
		value: n.children,
		children: n.children
	})
}, M = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? b : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => l({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : u(e)
	})
}, N = b, P = b, F = b, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		x(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		S,
		C,
		E(e ?? d.defaultLocale),
		D,
		T,
		j,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => A(e, t, L(t)), z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = (e = V) => {
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!z) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, V = {
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
}, H = B(V), U = a({
	locale: () => H ?? d?.defaultLocale,
	setLocale: () => null
}), W = (e, t) => {
	let n = s(U) ?? {};
	return o(() => R(e, t ?? n?.locale?.()));
}, G = r("<section class=\"mx-auto mt-12 max-w-3xl\"><h2 class=\"mb-4 text-2xl font-bold text-foreground\"></h2><ul class=space-y-4>"), K = r("<li class=\"rounded-md border border-border p-4\"><span class=\"block text-sm font-bold text-primary\"></span><span class=\"mt-1 block text-sm text-muted-foreground\">");
function q() {
	let e = W(c), r = [
		{
			metric: e().bundleSizeImpact.value,
			desc: e().theAdditionalJavascriptBytesSent.value
		},
		{
			metric: e().renderingOverhead.value,
			desc: e().howMuchExtraTimeThe.value
		},
		{
			metric: e().hydrationCost.value,
			desc: e().duringSsrTranslationDataIs.value
		},
		{
			metric: e().lazyLoadingEffectiveness.value,
			desc: e().whetherSplittingTranslationsByRoute.value
		},
		{
			metric: e().localeSwitchSpeed.value,
			desc: e().howFastTheAppCan.value
		}
	];
	return (() => {
		var a = G(), o = a.firstChild, s = o.nextSibling;
		return n(o, () => e().whatWeMeasure), n(s, t(i, {
			each: r,
			children: (e) => (() => {
				var t = K(), r = t.firstChild, i = r.nextSibling;
				return n(r, () => e.metric), n(i, () => e.desc), t;
			})()
		})), a;
	})();
}
export { q as default };
