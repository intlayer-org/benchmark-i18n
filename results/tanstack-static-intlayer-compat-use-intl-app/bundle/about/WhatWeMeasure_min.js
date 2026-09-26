import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var ee = {
	key: "what-we-measure",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"bundleSizeImpact\":\"Bundle size impact\",\"theAdditionalJavascriptBytesSent\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\",\"renderingOverhead\":\"Rendering overhead\",\"howMuchExtraTimeThe\":\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\",\"hydrationCost\":\"Hydration cost\",\"duringSsrTranslationDataIs\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\",\"lazyLoadingEffectiveness\":\"Lazy loading effectiveness\",\"whetherSplittingTranslationsByRoute\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\",\"localeSwitchSpeed\":\"Locale switch speed\",\"howFastTheAppCan\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\",\"whatWeMeasure\":\"What We Measure\"},\"fr\":{\"bundleSizeImpact\":\"Impact sur la taille du bundle\",\"theAdditionalJavascriptBytesSent\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\",\"renderingOverhead\":\"Surcharge de rendu\",\"howMuchExtraTimeThe\":\"Combien de temps supplémentaire la bibliothèque ajoute au suite de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.\",\"hydrationCost\":\"Coût d'hydratation\",\"duringSsrTranslationDataIs\":\"Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.\",\"lazyLoadingEffectiveness\":\"Efficacité du chargement différé\",\"whetherSplittingTranslationsByRoute\":\"Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).\",\"localeSwitchSpeed\":\"Vitesse de changement de langue\",\"howFastTheAppCan\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.\",\"whatWeMeasure\":\"Ce que nous mesurons\"},\"es\":{\"bundleSizeImpact\":\"Impacto en el tamaño del bundle\",\"theAdditionalJavascriptBytesSent\":\"Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\",\"renderingOverhead\":\"Sobrecarga de renderizado\",\"howMuchExtraTimeThe\":\"Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.\",\"hydrationCost\":\"Coste de hidratación\",\"duringSsrTranslationDataIs\":\"Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\",\"lazyLoadingEffectiveness\":\"Eficacia de la carga diferida\",\"whetherSplittingTranslationsByRoute\":\"Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\",\"localeSwitchSpeed\":\"Velocidad de cambio de idioma\",\"howFastTheAppCan\":\"Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\",\"whatWeMeasure\":\"Qué medimos\"},\"de\":{\"bundleSizeImpact\":\"Auswirkung auf die Bundle-Größe\",\"theAdditionalJavascriptBytesSent\":\"Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.\",\"renderingOverhead\":\"Rendering-Overhead\",\"howMuchExtraTimeThe\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\",\"hydrationCost\":\"Hydratisierungskosten\",\"duringSsrTranslationDataIs\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.\",\"lazyLoadingEffectiveness\":\"Effektivität von Lazy Loading\",\"whetherSplittingTranslationsByRoute\":\"Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\",\"localeSwitchSpeed\":\"Geschwindigkeit des Gebietsschemawechsels\",\"howFastTheAppCan\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\",\"whatWeMeasure\":\"Was wir messen\"},\"it\":{\"bundleSizeImpact\":\"Impatto sulla dimensione del bundle\",\"theAdditionalJavascriptBytesSent\":\"I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.\",\"renderingOverhead\":\"Sovrapprezzo di rendering\",\"howMuchExtraTimeThe\":\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\",\"hydrationCost\":\"Costo di idratazione\",\"duringSsrTranslationDataIs\":\"Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\",\"lazyLoadingEffectiveness\":\"Efficacia del caricamento pigro\",\"whetherSplittingTranslationsByRoute\":\"Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\",\"localeSwitchSpeed\":\"Velocità di cambio lingua\",\"howFastTheAppCan\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\",\"whatWeMeasure\":\"Cosa misuriamo\"},\"pt\":{\"bundleSizeImpact\":\"Impacto no tamanho do bundle\",\"theAdditionalJavascriptBytesSent\":\"Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\",\"renderingOverhead\":\"Sobrecarga de renderização\",\"howMuchExtraTimeThe\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\",\"hydrationCost\":\"Costo de hidratação\",\"duringSsrTranslationDataIs\":\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.\",\"lazyLoadingEffectiveness\":\"Eficácia do carregamento lento\",\"whetherSplittingTranslationsByRoute\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).\",\"localeSwitchSpeed\":\"Velocidade de troca de idioma\",\"howFastTheAppCan\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.\",\"whatWeMeasure\":\"O que medimos\"},\"zh\":{\"bundleSizeImpact\":\"捆绑包大小影响\",\"theAdditionalJavascriptBytesSent\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。\",\"renderingOverhead\":\"渲染开销\",\"howMuchExtraTimeThe\":\"库为 React 的渲染循环增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树不必要的重新渲染。\",\"hydrationCost\":\"水合成本\",\"duringSsrTranslationDataIs\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型字典会增加 HTML 负载并减慢水合速度——即页面变得可交互的瞬间。\",\"lazyLoadingEffectiveness\":\"延迟加载有效性\",\"whetherSplittingTranslationsByRoute\":\"按路由或命名空间拆分翻译是否真的减少了初始加载，以及它引入了哪些权衡（瀑布式请求、FOUC、缓存复杂性）。\",\"localeSwitchSpeed\":\"语言环境切换速度\",\"howFastTheAppCan\":\"应用程序在运行时从一种语言切换到另一种语言的速度——包括提取新翻译、重新渲染组件和更新 DOM。\",\"whatWeMeasure\":\"衡量指标\"},\"ja\":{\"bundleSizeImpact\":\"バンドルサイズへの影響\",\"theAdditionalJavascriptBytesSent\":\"i18nライブラリと翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト数です。これは、低速なネットワークでのダウンロード時間に直接影響します。\",\"renderingOverhead\":\"レンダリングオーバーヘッド\",\"howMuchExtraTimeThe\":\"ライブラリがReactのレンダリングサイクルに追加する時間です。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要なリレンダリングを引き起こす可能性があります。\",\"hydrationCost\":\"ハイドレーションコスト\",\"duringSsrTranslationDataIs\":\"SSR中、翻訳データはHTMLにシリアル化されます。大規模な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\",\"lazyLoadingEffectiveness\":\"遅延ロードの有効性\",\"whetherSplittingTranslationsByRoute\":\"ルートや名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのかを測定します。\",\"localeSwitchSpeed\":\"ロケール切り替え速度\",\"howFastTheAppCan\":\"実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるかを測定します。これには、新しい翻訳の取得、コンポーネントのリレンダリング、DOMの更新が含まれます。\",\"whatWeMeasure\":\"測定項目\"},\"ko\":{\"bundleSizeImpact\":\"번들 크기 영향\",\"theAdditionalJavascriptBytesSent\":\"i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\",\"renderingOverhead\":\"렌더링 오버헤드\",\"howMuchExtraTimeThe\":\"라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.\",\"hydrationCost\":\"수화 비용\",\"duringSsrTranslationDataIs\":\"SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.\",\"lazyLoadingEffectiveness\":\"지연 로딩 효과\",\"whetherSplittingTranslationsByRoute\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.\",\"localeSwitchSpeed\":\"로케일 전환 속도\",\"howFastTheAppCan\":\"실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.\",\"whatWeMeasure\":\"측정 항목\"},\"ru\":{\"bundleSizeImpact\":\"Влияние на размер бандла\",\"theAdditionalJavascriptBytesSent\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\",\"renderingOverhead\":\"Затраты на рендеринг\",\"howMuchExtraTimeThe\":\"Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\",\"hydrationCost\":\"Стоимость гидратации\",\"duringSsrTranslationDataIs\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\",\"lazyLoadingEffectiveness\":\"Эффективность ленивой загрузки\",\"whetherSplittingTranslationsByRoute\":\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).\",\"localeSwitchSpeed\":\"Скорость переключения языка\",\"howFastTheAppCan\":\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\",\"whatWeMeasure\":\"Что мы измеряем\"}}}")
}, p = /* @__PURE__ */ new WeakMap(), m = 0, te = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, h = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, v = (e, t, n) => `${e}_${t}_${te(n)}`, ne = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= h && r.clear(), r.set(t, n), n;
}, re = "translation", ie = "enumeration", ae = "plural", oe = "condition", b = "insertion", se = "object", ce = "array", x = "markdown", S = "html", C = "gender", le = "select", w = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, T);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, w(t, e, {
		type: ce,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: se,
			key: r
		};
		if (t.eager) {
			n[r] = T(e[r], w(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = T(e[r], w(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, de = (e, t) => e[ue(e, t) ?? "fallback"], fe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = {
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
}, D = {
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
}, pe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, me = "\x1B[0m", he = "\x1B[34m", ge = "\x1B[31m", _e = "\x1B[32m", ve = "\x1B[36m", ye = (e) => e, be = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ye(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, xe = (e, t) => (n, r) => be(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), O = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? me : n : me}` : e;
O("✗", ge), O("✓", _e), O("⏲", he);
var Se = 50, Ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set(), Te = (e) => {
	we.has(e) || (we.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
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
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function k(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e, t, n) => e[k("PluralRules", n).select(t)] ?? e.other, ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, A = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !A(e) || !A(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? j(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ae = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => j(e, t));
}, M = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, je = (e) => {
	if (typeof e == "string") return e;
	if (M(e)) return e.nodeType === "html" ? e[S] : e[x];
}, Me = (e, t) => {
	if (typeof e == "string") return t;
	if (M(e)) {
		let n = e.nodeType === "html" ? S : x;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, N = (e, t, n, r, i) => {
	let a = Me(e, fe(je(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ne = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ae(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: re,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, Pe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = fe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, z = [
	ie,
	oe,
	ae,
	C,
	le
], Fe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !z.includes(i)) return t;
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
		return !r && Ne(i) ? i(n) : i;
	};
}, B = (e, t) => typeof t == "function" && z.includes(e?.nodeType ?? "") ? (n) => Fe(e, t, n) : t, V = P, H = P, U = (e) => P, W = P, Ie = (e, t = !0) => [
	F(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	I,
	L(e ?? E.defaultLocale),
	R,
	Pe,
	U(e ?? E.defaultLocale),
	W,
	V,
	H
].filter((e) => e !== P), Le = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), Re = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = v(r ?? E.defaultLocale, "", n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ie(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return Le(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, ze = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Be = /\{\{\s*(.*?)\s*\}\}/g, Ve = (e, t = {}) => {
	if (!Object.values(t).some(ze)) return {
		isSimple: !0,
		parts: e.replace(Be, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Be), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, He = (e, t, n = ".") => {
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
}, Ue = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, We = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? k("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? k("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : k("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return k("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ge = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? We(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : We(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ge(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[b], t, n);
	if (r.nodeType === "html") return J(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[ae];
		return J(Oe(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ie], i = Ue.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ue.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = k("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[C];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ke = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Y(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, qe = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Je = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Je(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Ye = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Ye(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Xe = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Ze(e, (e) => He(t, r(e)), r);
}, Ze = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ke(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = qe(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: Je(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = qe(t), o = r(e, i);
			return o === void 0 ? n(e) : Ye(Y(o), a);
		}
	});
}, Qe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, $e = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Qe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, et = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, tt = (e = X) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!et) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, nt = !1, Z, rt = () => typeof window > "u" ? tt(X) : (nt ||= (Z = tt(X), !0), Z), it = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (nt = !1, !et && D.storage.cookies)) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Qe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, $e(r, e, i));
			} catch {}
		}
	}
}, at = /* @__PURE__ */ new Map(), ot = (e, t) => Object.create(new Proxy(e, {
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
}), st = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = at.get(t);
	i || (i = /* @__PURE__ */ new Map(), at.set(t, i));
	let a = i.get(r);
	return a || (a = ot(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ct = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, st(t)), lt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ct({
		value: t.children,
		children: t.children
	})
}, ut = P, dt = (e, n) => {
	let i = Ve(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ft = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = dt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, pt = P, mt = P, Q = /* @__PURE__ */ new Map(), ht = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		lt,
		F(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		I,
		L(e ?? E.defaultLocale),
		R,
		U(e ?? E.defaultLocale),
		W,
		V,
		H,
		ut,
		ft,
		pt,
		mt
	].filter((e) => e !== P);
	return Q.set(n, r), r;
}, gt = (e, t) => Re(e, t, ht(typeof t == "object" && t ? t.locale : t)), _t = rt, vt = (e, t) => it(e, {
	...X,
	isCookieEnabled: t
}), yt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, bt = (e, t = E?.locales, n = E?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, $ = n({
	get locale() {
		return _t() ?? E?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), xt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = E ?? {}, [p, m] = l(() => e ?? _t() ?? t ?? ee), [te, h] = l(e);
	e !== te && (h(e), e && e !== p && m(e)), s(() => {
		yt();
	}, []);
	let g = a((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), vt(e, u);
		}
	}, [
		p,
		f,
		u
	]), _ = i ?? g, v = bt(p), ne = c(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: o
	}), [
		v,
		_,
		n,
		o
	]);
	return d($.Provider, {
		value: ne,
		children: r
	});
}, St = ({ children: e, ...t }) => f(xt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ct = (e, t) => {
	let { locale: n, variant: r } = o($) ?? {}, i = t ?? n, a = i;
	return c(() => gt(e, i), [e.key, a]);
}, wt = ((e, t) => {
	let { locale: n } = o($) ?? {};
	return Xe(n, Ct(e), t);
}), Tt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && xe({ log: pe })(`${O("IntlProvider", ve)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(St, {
	locale: e,
	children: t
}, String(e)));
function Et() {
	let e = wt(ee), t = [
		{
			metric: e("bundleSizeImpact"),
			desc: e("theAdditionalJavascriptBytesSent")
		},
		{
			metric: e("renderingOverhead"),
			desc: e("howMuchExtraTimeThe")
		},
		{
			metric: e("hydrationCost"),
			desc: e("duringSsrTranslationDataIs")
		},
		{
			metric: e("lazyLoadingEffectiveness"),
			desc: e("whetherSplittingTranslationsByRoute")
		},
		{
			metric: e("localeSwitchSpeed"),
			desc: e("howFastTheAppCan")
		}
	];
	return f("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [d("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: e("whatWeMeasure")
		}), d("ul", {
			className: "space-y-4",
			children: t.map((e) => f("li", {
				className: "rounded-md border border-border p-4",
				children: [d("span", {
					className: "block text-sm font-bold text-primary",
					children: e.metric
				}), d("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: e.desc
				})]
			}, e.metric))
		})]
	});
}
function Dt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Tt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Ot() {
	return d(Dt, { children: d(Et, {}) });
}
export { Ot as default };
