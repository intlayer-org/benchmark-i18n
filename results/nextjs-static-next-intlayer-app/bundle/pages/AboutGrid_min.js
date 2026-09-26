import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var ee = {
	key: "about-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"d\":\"Why This Exists\",\"a\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"b\":\"Methodology\",\"c\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"},\"fr\":{\"d\":\"Pourquoi ce Projet Existe\",\"a\":\"Choisir une bibliothèque i18n est une décision d'architecture aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performance : quel poids la bibliothèque ajoute-t-elle au bundle ? Quel est son impact sur le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement asynchrone aide-t-il vraiment ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\",\"b\":\"Méthodologie\",\"c\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons le React Profiler pour capturer les temps de rendu lors des changements de locale. Tous les tests s'exécutent en CI sur du matériel constant pour garantir des résultats reproductibles.\"},\"es\":{\"d\":\"¿Por Qué Existe Este Proyecto?\",\"a\":\"Elegir una biblioteca de i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el costo de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿El lazy loading realmente ayuda o solo traslada el costo? Este benchmark responde a esas preguntas con datos reales.\",\"b\":\"Metodología\",\"c\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y usamos React Profiler para capturar los tiempos de renderizado durante los cambios de locale. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\"},\"de\":{\"d\":\"Warum dies existiert\",\"a\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie beeinflusst sie das Rendering, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\",\"b\":\"Methodik\",\"c\":\"Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden React Profiler, um die Renderzeiten während des Sprachwechsels zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\"},\"it\":{\"d\":\"Perché esiste questo progetto\",\"a\":\"La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia dell'API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento lento aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\",\"b\":\"Metodologia\",\"c\":\"La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"},\"pt\":{\"d\":\"Por que isso existe\",\"a\":\"Escolher uma biblioteca de i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas muda o custo? Este benchmark responde a essas perguntas com dados reais.\",\"b\":\"Metodologia\",\"c\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar os tempos de renderização durante as trocas de locale. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"},\"zh\":{\"d\":\"为什么存在这个项目\",\"a\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都侧重于 API 的易用性，但很少有人衡量性能成本：该库为包增加了多少权重？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。\",\"b\":\"方法学\",\"c\":\"每个库都构建一次相同的 10 页应用程序。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用 React Profiler 捕获本地切换期间的渲染时间。所有测试都在具有相同硬件的 CI 上运行，以确保结果可重现。\"},\"ja\":{\"d\":\"なぜこれが存在するのか\",\"a\":\"i18n ライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較は API の使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重みを加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでそれらの質問に答えます。\",\"b\":\"方法論\",\"c\":\"同じ 10 ページのアプリがライブラリごとに 1 回構築されます。プロダクションバンドルを測定し（rollup-plugin-visualizer を使用）、読み込みメトリクスの Lighthouse 監査を実行し、React Profiler を使用してロケール切り替え中のレンダリング時間をキャプチャします。再現可能な結果を保証するために、すべてのテストは一貫したハードウェア上の CI で実行されます。\"},\"ko\":{\"d\":\"왜 이것이 존재하는가\",\"a\":\"i18n 라이브러리 선택은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 줍니까? 지연 로딩이 실제로 도움이 됩니까 아니면 단지 비용을 전가합니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.\",\"b\":\"방법론\",\"c\":\"동일한 10페이지 앱이 라이브러리당 한 번씩 구축됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer 사용), 로딩 메트릭에 대한 Lighthouse 감사를 실행하고, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"},\"ru\":{\"d\":\"Почему это существует\",\"a\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"b\":\"Методология\",\"c\":\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\"}}}")
}, f = {
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
}, p = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, te = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var m = {
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
}, h = (e = m) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!te) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ne = !1, g, _ = () => typeof window > "u" ? h(m) : (ne ||= (g = h(m), !0), g), v = /* @__PURE__ */ new Map(), re = (e, t) => Object.create(new Proxy(e, {
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
}), ie = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = v.get(t);
	i || (i = /* @__PURE__ */ new Map(), v.set(t, i));
	let a = i.get(r);
	return a || (a = re(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ae = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, ie(t)), y = /* @__PURE__ */ new WeakMap(), b = 0, oe = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, se = 256, x = /* @__PURE__ */ new WeakMap(), S = (e) => typeof e == "object" && !!e, ce = (e, t, n) => `${e}_${t}_${oe(n)}`, le = (e, t) => {
	if (!S(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!S(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= se && r.clear(), r.set(t, n), n;
}, w = "translation", T = "enumeration", ue = "plural", de = "condition", E = "insertion", fe = "object", pe = "array", D = "markdown", O = "html", me = "gender", he = "select", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: fe,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, j = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !M(e) || !M(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? N(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, P = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, I = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[O] : e[D];
}, L = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? O : D;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = L(e, j(I(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ge = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = P(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: w,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, _e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = j(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return K(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	T,
	de,
	ue,
	me,
	he
], G = (e, t, n, r = !1) => {
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
		return !r && ge(i) ? i(n) : i;
	};
}, K = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => G(e, t, n) : t, q = z, J = z, Y = (e) => z, X = z, ve = (e, t = !0) => [
	B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	V,
	H(e ?? f.defaultLocale),
	U,
	_e,
	Y(e ?? f.defaultLocale),
	X,
	q,
	J
].filter((e) => e !== z), ye = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), be = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ce(r ?? f.defaultLocale, "", n), o = le(e, a);
	if (o.hit) return o.content;
	let s = n ?? ve(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return ye(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Q = /\{\{\s*(.*?)\s*\}\}/g, Se = (e, t = {}) => {
	if (!Object.values(t).some(xe)) return {
		isSimple: !0,
		parts: e.replace(Q, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Q), r = [];
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
	transform: (e, t) => ae({
		value: t.children,
		children: t.children
	})
}, we = z, Te = (t, r) => {
	let i = Se(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ee = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => R(e, i, n, t.plugins, r);
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
		};
		return K(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, De = z, Oe = z, $ = /* @__PURE__ */ new Map(), ke = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Ce,
		B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		V,
		H(e ?? f.defaultLocale),
		U,
		Y(e ?? f.defaultLocale),
		X,
		q,
		J,
		we,
		Ee,
		De,
		Oe
	].filter((e) => e !== z);
	return $.set(n, r), r;
}, Ae = (e, t) => be(e, t, ke(typeof t == "object" && t ? t.locale : t)), je = _, Me = t({
	get locale() {
		return je() ?? f?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ne = (e, t) => {
	let { locale: n, variant: r } = i(Me) ?? {}, a = t ?? n, o = a;
	return s(() => Ae(e, a), [e.key, o]);
};
function Pe() {
	let e = Ne(ee);
	return d("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [d("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [u("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: e.d
			}), u("p", {
				className: "text-sm text-muted-foreground",
				children: e.a
			})]
		}), d("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [u("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: e.b
			}), u("p", {
				className: "text-sm text-muted-foreground",
				children: e.c
			})]
		})]
	});
}
function Fe() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function Ie(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Le({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Ie("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Fe();
	}, []), e;
}
function Re({ children: e }) {
	return u(Le, {
		locale: "en",
		children: e
	});
}
function ze() {
	return u(Re, { children: u(Pe, {}) });
}
export { ze as default };
