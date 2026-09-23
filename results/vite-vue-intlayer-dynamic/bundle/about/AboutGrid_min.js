import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, isRef as s, markRaw as c, onBeforeMount as l, onMounted as u, openBlock as d, ref as f, shallowRef as p, toDisplayString as m, toValue as h, watch as g } from "vue";
var _ = {
	key: "about-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"b\":{\"b\":\"Why This Exists\",\"a\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\"},\"a\":{\"b\":\"Methodology\",\"a\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use performance profiling to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"}},\"fr\":{\"b\":{\"b\":\"Pourquoi cela existe\",\"a\":\"Le choix d'une bibliothèque i18n est une décision architecturale aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment affecte-t-elle le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou ne fait-il que déplacer le coût ? Ce benchmark répond à ces questions avec des données réelles.\"},\"a\":{\"b\":\"Méthodologie\",\"a\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les mesures de chargement et utilisons le profilage des performances pour capturer les temps de rendu lors des changements de langue. Tous les tests sont exécutés en CI sur un matériel cohérent pour garantir des résultats reproductibles.\"}},\"es\":{\"b\":{\"b\":\"Por qué existe esto\",\"a\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Ayuda realmente la carga diferida o solo traslada el coste? Este benchmark responde a esas preguntas con datos reales.\"},\"a\":{\"b\":\"Metodología\",\"a\":\"La misma aplicación de 10 páginas se crea una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos perfiles de rendimiento para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\"}},\"de\":{\"b\":{\"b\":\"Warum dies existiert\",\"a\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\"},\"a\":{\"b\":\"Methodik\",\"a\":\"Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden Performance-Profiling, um die Renderzeiten bei Gebietsumschaltungen zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\"}},\"it\":{\"b\":{\"b\":\"Perché questo esiste\",\"a\":\"La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\"},\"a\":{\"b\":\"Metodologia\",\"a\":\"La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiemy audit Lighthouse per le metriche di caricamento e utilizziamo il profiling delle prestazioni per acquisire i tempi di rendering durante i cambi di locale. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"}},\"pt\":{\"b\":{\"b\":\"Por que Isso Existe\",\"a\":\"A escolha de uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\"},\"a\":{\"b\":\"Metodologia\",\"a\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o perfil de desempenho para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"}},\"zh\":{\"b\":{\"b\":\"为什么存在这个项目\",\"a\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 的易用性上，但很少有比较衡量性能成本：库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。\"},\"a\":{\"b\":\"方法论\",\"a\":\"同一个包含 10 个页面的应用程序针对每个库构建一次。我们测量生产捆绑包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用性能分析来捕获语言切换期间的渲染时间。所有测试都在具有一致硬件的 CI 中运行，以确保结果可复现。\"}},\"ja\":{\"b\":{\"b\":\"このプロジェクトの目的\",\"a\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を追加するか？数千の翻訳キーがロードされたときにレンダリングにどのように影響するか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでこれらの疑問に答えます。\"},\"a\":{\"b\":\"方法論\",\"a\":\"同じ10ページのアプリがライブラリごとに1回構築されます。プロダクションバンドルを測定し（rollup-plugin-visualizer経由）、ロード指標のLighthouse監査を実行し、パフォーマンスプロファイリングを使用してロケール切り替え中のレンダリング時間を取得します。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェア上のCIで実行されます。\"}},\"ko\":{\"b\":{\"b\":\"이 프로젝트의 존재 이유\",\"a\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미칩니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가할 뿐입니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.\"},\"a\":{\"b\":\"방법론\",\"a\":\"동일한 10페이지 분량의 앱이 라이브러리당 한 번씩 빌드됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer를 통해), 로딩 지표에 대한 Lighthouse 감사를 실행하고, 성능 프로파일링을 사용하여 로캘 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"}},\"ru\":{\"b\":{\"b\":\"Почему это существует\",\"a\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточено на эргономике API, но немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\"},\"a\":{\"b\":\"Методология\",\"a\":\"Одно и то же 10-страничное приложение создается по одному разу для каждой библиотеки. Мы измеряем продакшн-бандл (с помощью rollup-plugin-visualizer), проводим аудит Lighthouse для получения метрик загрузки и используем профилирование производительности для фиксации времени рендеринга при переключении языков. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\"}}}}")
}, v = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = f(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
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
			return v({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), c(o);
}, y = "translation", b = "object", ee = "array", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ee,
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
					type: b,
					key: r
				}]
			}, i = x(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, S = {
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
}, C = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, w = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (C(e) && C(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : w(e[r], t[r]));
		return n;
	}
	return e;
}, T = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => w(e, t));
}, E = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, D = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? E : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: y,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return T(o, e, t);
	}
}, O = E, k = E, te = E, A = E, j = (e) => E, M = E, N = (e, t = !0) => [
	D(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
	O,
	k,
	te,
	j(e ?? S.defaultLocale),
	M,
	A
], P = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), F = (e, t, n = N(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return P(e.content, r, n);
}, I = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => v({
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
		return c(a);
	}
}, L = E, R = E, z = E, B = /* @__PURE__ */ new Map(), V = (e, t = !0) => {
	let n = `${e ?? S.defaultLocale}_${t}`;
	if (B.has(n)) return B.get(n);
	let r = [
		D(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
		O,
		k,
		j(e ?? S.defaultLocale),
		M,
		A,
		I,
		L,
		R,
		z
	];
	return B.set(n, r), r;
}, H = (e, t) => F(e, t, V(t)), U = Symbol("intlayer"), W = (e, t) => t.reduce((e, t) => e?.[t], e), G = (e) => typeof e == "object" && !!e, K = (e) => typeof e == "function" || G(e) && ("render" in e || "setup" in e), q = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, J = (e) => c(r({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : K(t) ? a(t) : Array.isArray(t) ? a("span", t) : t;
		};
	}
})), Y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return J(() => e.value);
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
}), X = (t, n) => {
	let r = i() ? o(U) : void 0, a = s(r?.locale) ? r.locale : f(r?.locale ?? S.defaultLocale), c = e(() => (n === void 0 ? void 0 : h(n)) ?? a.value), l = p({});
	g([() => h(t), () => c.value], ([e, t]) => {
		l.value = H(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (t) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = e(() => W(l.value, t));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return J(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = t.concat(r), s = W(l.value, o);
			if (s === void 0 || G(s) && !K(s)) return u(o);
			if (q(s)) return Y(e(() => W(l.value, o)));
			let c = e(() => W(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = W(l.value, t);
			return G(e) ? Reflect.ownKeys(e) : [];
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
function Z(e) {
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
var Q = r({
	__name: "AboutGrid",
	setup(e, { expose: t }) {
		t(), Z("AboutGrid");
		let { b: n, a: r } = X(_), i = {
			why: n,
			methodology: r
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), ne = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, re = { class: "grid gap-8 md:grid-cols-2" }, ie = { class: "rounded-lg border border-border bg-card p-6" }, ae = { class: "mb-3 text-xl font-semibold text-foreground" }, oe = { class: "text-sm text-muted-foreground" }, $ = { class: "rounded-lg border border-border bg-card p-6" }, se = { class: "mb-3 text-xl font-semibold text-foreground" }, ce = { class: "text-sm text-muted-foreground" };
function le(e, r, i, a, o, s) {
	return d(), t("div", re, [n("div", ie, [n("h2", ae, m(a.why.title), 1), n("p", oe, m(a.why.description), 1)]), n("div", $, [n("h2", se, m(a.methodology.title), 1), n("p", ce, m(a.methodology.description), 1)])]);
}
var ue = ne(Q, [["render", le], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/src/components/pages/about/AboutGrid.vue"]]);
export { ue as default };
