import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, isRef as s, markRaw as c, onBeforeMount as l, onMounted as u, openBlock as d, ref as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h } from "vue";
var g = {
	key: "about-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"b\":{\"b\":\"Why This Exists\",\"a\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\"},\"a\":{\"b\":\"Methodology\",\"a\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use performance profiling to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"}},\"fr\":{\"b\":{\"b\":\"Pourquoi cela existe\",\"a\":\"Le choix d'une bibliothèque i18n est une décision architecturale aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment affecte-t-elle le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou ne fait-il que déplacer le coût ? Ce benchmark répond à ces questions avec des données réelles.\"},\"a\":{\"b\":\"Méthodologie\",\"a\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les mesures de chargement et utilisons le profilage des performances pour capturer les temps de rendu lors des changements de langue. Tous les tests sont exécutés en CI sur un matériel cohérent pour garantir des résultats reproductibles.\"}},\"es\":{\"b\":{\"b\":\"Por qué existe esto\",\"a\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Ayuda realmente la carga diferida o solo traslada el coste? Este benchmark responde a esas preguntas con datos reales.\"},\"a\":{\"b\":\"Metodología\",\"a\":\"La misma aplicación de 10 páginas se crea una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos perfiles de rendimiento para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\"}},\"de\":{\"b\":{\"b\":\"Warum dies existiert\",\"a\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\"},\"a\":{\"b\":\"Methodik\",\"a\":\"Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden Performance-Profiling, um die Renderzeiten bei Gebietsumschaltungen zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\"}},\"it\":{\"b\":{\"b\":\"Perché questo esiste\",\"a\":\"La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\"},\"a\":{\"b\":\"Metodologia\",\"a\":\"La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiemy audit Lighthouse per le metriche di caricamento e utilizziamo il profiling delle prestazioni per acquisire i tempi di rendering durante i cambi di locale. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"}},\"pt\":{\"b\":{\"b\":\"Por que Isso Existe\",\"a\":\"A escolha de uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\"},\"a\":{\"b\":\"Metodologia\",\"a\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o perfil de desempenho para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"}},\"zh\":{\"b\":{\"b\":\"为什么存在这个项目\",\"a\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 的易用性上，但很少有比较衡量性能成本：库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。\"},\"a\":{\"b\":\"方法论\",\"a\":\"同一个包含 10 个页面的应用程序针对每个库构建一次。我们测量生产捆绑包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用性能分析来捕获语言切换期间的渲染时间。所有测试都在具有一致硬件的 CI 中运行，以确保结果可复现。\"}},\"ja\":{\"b\":{\"b\":\"このプロジェクトの目的\",\"a\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を追加するか？数千の翻訳キーがロードされたときにレンダリングにどのように影響するか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでこれらの疑問に答えます。\"},\"a\":{\"b\":\"方法論\",\"a\":\"同じ10ページのアプリがライブラリごとに1回構築されます。プロダクションバンドルを測定し（rollup-plugin-visualizer経由）、ロード指標のLighthouse監査を実行し、パフォーマンスプロファイリングを使用してロケール切り替え中のレンダリング時間を取得します。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェア上のCIで実行されます。\"}},\"ko\":{\"b\":{\"b\":\"이 프로젝트의 존재 이유\",\"a\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미칩니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가할 뿐입니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.\"},\"a\":{\"b\":\"방법론\",\"a\":\"동일한 10페이지 분량의 앱이 라이브러리당 한 번씩 빌드됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer를 통해), 로딩 지표에 대한 Lighthouse 감사를 실행하고, 성능 프로파일링을 사용하여 로캘 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"}},\"ru\":{\"b\":{\"b\":\"Почему это существует\",\"a\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточено на эргономике API, но немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\"},\"a\":{\"b\":\"Методология\",\"a\":\"Одно и то же 10-страничное приложение создается по одному разу для каждой библиотеки. Мы измеряем продакшн-бандл (с помощью rollup-plugin-visualizer), проводим аудит Lighthouse для получения метрик загрузки и используем профилирование производительности для фиксации времени рендеринга при переключении языков. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\"}}}}")
}, _ = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = f(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
			return _({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return c(o);
}, v = /* @__PURE__ */ new WeakMap(), y = 0, te = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ne = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, S = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, w = "translation", T = "object", ie = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: T,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, oe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ae(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => oe(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, de = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", P = {
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
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
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
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, fe = R, U = R, W = R, G = (e) => R, K = R, pe = (e, t = !0) => [
	z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	B,
	H,
	fe,
	G(e ?? P.defaultLocale),
	K,
	U,
	W
], me = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = re(r ?? P.defaultLocale, de(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => _({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, _e = R, ve = R, ye = R, q = /* @__PURE__ */ new Map(), be = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		B,
		V(e ?? P.defaultLocale),
		H,
		G(e ?? P.defaultLocale),
		K,
		U,
		W,
		ge,
		_e,
		ve,
		ye
	];
	return q.set(n, r), r;
}, J = (e, t) => he(e, t, be(typeof t == "object" && t ? t.locale : t)), xe = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Se = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => c(r({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? a(t) : Array.isArray(t) ? a("span", t) : t;
		};
	}
})), Ce = (e) => new Proxy({}, {
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
}), we = (t, n) => {
	let r = i() ? o(xe) : void 0, a = s(r?.locale) ? r.locale : f(r?.locale ?? P.defaultLocale), c = e(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = e(() => c.value.locale ?? a.value), u = ee({});
	h([
		() => m(t),
		() => l.value,
		() => c.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let d = (t) => new Proxy({}, {
		get(n, r, i) {
			let a = e(() => Y(u.value, t));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = t.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return d(o);
			if (Se(s)) return Ce(e(() => Y(u.value, o)));
			if (typeof s == "function") {
				let e = Y(u.value, t);
				return e != null && !Object.hasOwn(e, r) ? s.bind(e) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = e(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = Y(u.value, t);
			return X(e) ? Reflect.ownKeys(e) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return d([]);
};
function Te(e) {
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
var Ee = r({
	__name: "AboutGrid",
	setup(e, { expose: t }) {
		t(), Te("AboutGrid");
		let { b: n, a: r } = we(g), i = {
			why: n,
			methodology: r
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), De = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Oe = { class: "grid gap-8 md:grid-cols-2" }, ke = { class: "rounded-lg border border-border bg-card p-6" }, Ae = { class: "mb-3 text-xl font-semibold text-foreground" }, $ = { class: "text-sm text-muted-foreground" }, je = { class: "rounded-lg border border-border bg-card p-6" }, Me = { class: "mb-3 text-xl font-semibold text-foreground" }, Ne = { class: "text-sm text-muted-foreground" };
function Pe(e, r, i, a, o, s) {
	return d(), t("div", Oe, [n("div", ke, [n("h2", Ae, p(a.why.title), 1), n("p", $, p(a.why.description), 1)]), n("div", je, [n("h2", Me, p(a.methodology.title), 1), n("p", Ne, p(a.methodology.description), 1)])]);
}
var Fe = De(Ee, [["render", Pe], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/about/AboutGrid.vue"]]);
export { Fe as default };
