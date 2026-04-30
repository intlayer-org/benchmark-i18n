import { Dynamic as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, useContext as a } from "solid-js";
var o = {
	key: "about-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"d\":\"Why This Exists\",\"a\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"b\":\"Methodology\",\"c\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"},\"fr\":{\"d\":\"Pourquoi cela existe\",\"a\":\"Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\",\"b\":\"Méthodologie\",\"c\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.\"},\"es\":{\"d\":\"Por qué existe esto\",\"a\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al paquete? ¿Cómo afecta a la renderización cuando se cargan miles de claves de traducción? ¿La carga diferida ayuda realmente o simplemente traslada el coste? Este benchmark responde a esas preguntas con datos reales.\",\"b\":\"Metodología\",\"c\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\"},\"de\":{\"d\":\"Warum dies existiert\",\"a\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\",\"b\":\"Methodik\",\"c\":\"Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktionsbundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten bei Gebietschemata-Wechseln zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\"},\"it\":{\"d\":\"Perché esiste questo\",\"a\":\"Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il lazy loading aiuta davvero o sposta semplicemente il costo? Questo benchmark risponde a queste domande con dati reali.\",\"b\":\"Metodologia\",\"c\":\"La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"},\"pt\":{\"d\":\"Por que isso existe\",\"a\":\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\",\"b\":\"Metodologia\",\"c\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar os tempos de renderização durante as trocas de idioma. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"},\"zh\":{\"d\":\"为什么存在这个\",\"a\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都侧重于 API 的人体工程学，但很少有人衡量性能成本：库向捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？该基准测试用真实数据回答了这些问题。\",\"b\":\"方法论\",\"c\":\"相同的 10 页应用程序每个库构建一次。我们衡量生产捆绑包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核加载指标，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致的硬件上的 CI 中运行，以确保结果可复现。\"},\"ja\":{\"d\":\"なぜこれが存在するのか\",\"a\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの人間工学に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重みを追加するのか？数千の翻訳キーがロードされたときにレンダリングにどのような影響を与えるのか？遅延ロードは実際に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでそれらの質問に答えます。\",\"b\":\"方法論\",\"c\":\"同じ10ページのアプリが、ライブラリごとに1回構築されます。本番バンドルを（rollup-plugin-visualizer経由で）測定し、ロードメトリクスのためにLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェア上のCIで実行されます。\"},\"ko\":{\"d\":\"이것이 존재하는 이유\",\"a\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 초점을 맞추고 있지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미칩니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가합니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답변합니다.\",\"b\":\"방법론\",\"c\":\"동일한 10페이지 앱이 라이브러리당 한 번씩 빌드됩니다. (rollup-plugin-visualizer를 통해) 프로덕션 번들을 측정하고 로딩 메트릭에 대한 Lighthouse 감사를 실행하며 React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 재현 가능한 결과를 보장하기 위해 모든 테스트는 일관된 하드웨어의 CI에서 실행됩니다.\"},\"ru\":{\"d\":\"Зачем это нужно\",\"a\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют влияние на производительность: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли ленивая загрузка помогает или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"b\":\"Методология\",\"c\":\"Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшен-бандл (с помощью rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при переключении локалей. Все тесты запускаются в CI на одинаковом оборудовании для обеспечения воспроизводимости результатов.\"}}}")
}, s = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, c = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(c(n?.[e]));
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, d = "translation", f = "object", p = "array", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: p,
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
					type: f,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, y = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? v : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _(o, e, t);
	}
}, b = v, x = v, S = v, C = v, w = (e) => v, T = v, E = (e, t = !0) => [
	y(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
	b,
	x,
	S,
	w(e ?? l.defaultLocale),
	T,
	C
], D = (e, t, n = []) => m(e, {
	...t,
	plugins: n
}), O = (e, t, n = E(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return D(e.content, r, n);
}, k = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => s({
		...n,
		value: n.children,
		children: n.children
	})
}, A = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? v : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => s({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : c(e)
	})
}, j = v, M = v, N = v, P = /* @__PURE__ */ new Map(), F = (e, t = !0) => {
	let n = `${e ?? l.defaultLocale}_${t}`;
	if (P.has(n)) return P.get(n);
	let r = [
		y(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
		b,
		x,
		w(e ?? l.defaultLocale),
		T,
		C,
		k,
		A,
		j,
		M,
		N
	];
	return P.set(n, r), r;
}, I = (e, t) => O(e, t, F(t)), L = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var R = (e = z) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!L) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, z = {
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
}, B = R(z), V = r({
	locale: () => B ?? l?.defaultLocale,
	setLocale: () => null
}), H = (e, t) => {
	let n = a(V) ?? {};
	return i(() => I(e, t ?? n?.locale?.()));
}, U = n("<div class=\"grid gap-8 md:grid-cols-2\"><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"></h2><p class=\"text-sm text-muted-foreground\"></p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"></h2><p class=\"text-sm text-muted-foreground\">");
function W() {
	let e = H(o);
	return (() => {
		var n = U(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = r.nextSibling.firstChild, s = o.nextSibling;
		return t(i, () => e().whyThisExists), t(a, () => e().choosingAnI18nLibraryIs), t(o, () => e().methodology), t(s, () => e().theSame10PageApp), n;
	})();
}
export { W as default };
