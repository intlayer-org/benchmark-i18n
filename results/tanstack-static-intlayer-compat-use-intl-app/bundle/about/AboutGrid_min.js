import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var ee = {
	key: "about-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"whyThisExists\":\"Why This Exists\",\"choosingAnI18nLibraryIs\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"methodology\":\"Methodology\",\"theSame10PageApp\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"},\"fr\":{\"whyThisExists\":\"Pourquoi cela existe\",\"choosingAnI18nLibraryIs\":\"Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\",\"methodology\":\"Méthodologie\",\"theSame10PageApp\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.\"},\"es\":{\"whyThisExists\":\"Por qué existe\",\"choosingAnI18nLibraryIs\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo traslada el coste? Este benchmark responde a estas preguntas con datos reales.\",\"methodology\":\"Metodología\",\"theSame10PageApp\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en un hardware consistente para garantizar resultados reproducibles.\"},\"de\":{\"whyThisExists\":\"Warum dieses Projekt existiert\",\"choosingAnI18nLibraryIs\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt sie sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\",\"methodology\":\"Methodik\",\"theSame10PageApp\":\"Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Gebietsschemawechsel zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\"},\"it\":{\"whyThisExists\":\"Perché esiste questo progetto\",\"choosingAnI18nLibraryIs\":\"Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"},\"pt\":{\"whyThisExists\":\"Por que isso existe\",\"choosingAnI18nLibraryIs\":\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento tardio realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"},\"zh\":{\"whyThisExists\":\"为什么存在这个项目\",\"choosingAnI18nLibraryIs\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 的易用性上，但很少有人衡量性能成本：库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。\",\"methodology\":\"方法论\",\"theSame10PageApp\":\"同一个 10 页应用为每个库构建一次。我们衡量生产捆绑包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在硬件一致的 CI 中运行，以确保结果可重现。\"},\"ja\":{\"whyThisExists\":\"なぜこれが存在するのか\",\"choosingAnI18nLibraryIs\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるか？ 数千の翻訳キーがロードされたときにレンダリングにどう影響するか？ 遅延ロードは実際に役立つのか、それともコストを後回しにしているだけなのか？ このベンチマークは、実際のデータを使用してこれらの質問に答えます。\",\"methodology\":\"方法論\",\"theSame10PageApp\":\"同じ10ページのアプリがライブラリごとに1回構築されます。 rollup-plugin-visualizerを通じて生産バンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェアのCIで実行されます。\"},\"ko\":{\"whyThisExists\":\"이것이 존재하는 이유\",\"choosingAnI18nLibraryIs\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 사용 편의성에 중점을 두지만, 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가 아니면 단순히 비용을 나중으로 미루는 것인가? 이 벤치마크는 실제 데이터를 사용하여 이러한 질문에 답합니다.\",\"methodology\":\"방법론\",\"theSame10PageApp\":\"동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. rollup-plugin-visualizer를 통해 프로덕션 번들을 측정하고, 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"},\"ru\":{\"whyThisExists\":\"Почему это существует\",\"choosingAnI18nLibraryIs\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"methodology\":\"Методология\",\"theSame10PageApp\":\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\"}}}")
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
	let e = wt(ee);
	return f("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [f("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [d("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: e("whyThisExists")
			}), d("p", {
				className: "text-sm text-muted-foreground",
				children: e("choosingAnI18nLibraryIs")
			})]
		}), f("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [d("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: e("methodology")
			}), d("p", {
				className: "text-sm text-muted-foreground",
				children: e("theSame10PageApp")
			})]
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
