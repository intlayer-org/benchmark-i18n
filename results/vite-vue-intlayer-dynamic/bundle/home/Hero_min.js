import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, isRef as s, markRaw as c, onBeforeMount as l, onMounted as u, openBlock as d, ref as f, shallowRef as p, toDisplayString as m, toValue as h, unref as g, watch as _ } from "vue";
var v = {
	key: "hero",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "i18n Benchmark",
				a: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
				e: "View Results",
				c: "Methodology"
			},
			fr: {
				d: "Benchmark i18n",
				a: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
				e: "Voir les résultats",
				c: "Méthodologie"
			},
			es: {
				d: "i18n Benchmark",
				a: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad del renderizado.",
				e: "Ver resultados",
				c: "Metodología"
			},
			de: {
				d: "i18n Benchmark",
				a: "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.",
				e: "Ergebnisse anzeigen",
				c: "Methodik"
			},
			it: {
				d: "i18n Benchmark",
				a: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
				e: "Visualizza risultati",
				c: "Metodologia"
			},
			pt: {
				d: "i18n Benchmark",
				a: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
				e: "Ver Resultados",
				c: "Metodologia"
			},
			zh: {
				d: "i18n 基准测试",
				a: "一个旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性真实影响的测试应用程序。",
				e: "查看结果",
				c: "方法论"
			},
			ja: {
				d: "i18n ベンチマーク",
				a: "国際化ライブラリがバンドルサイズ、ロードパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
				e: "結果を表示",
				c: "方法論"
			},
			ko: {
				d: "i18n 벤치마크",
				a: "번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
				e: "결과 보기",
				c: "방법론"
			},
			ru: {
				d: "i18n Бенчмарк",
				a: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
				e: "Посмотреть результаты",
				c: "Методология"
			}
		}
	}
}, y = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return y({
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
}, b = "translation", x = "object", S = "array", C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: S,
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
					type: x,
					key: r
				}]
			}, i = C(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, w = {
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
}, T = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, E = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (T(e) && T(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : E(e[r], t[r]));
		return n;
	}
	return e;
}, D = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => E(e, t));
}, O = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, k = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? O : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: b,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return D(o, e, t);
	}
}, A = O, j = O, M = O, N = O, P = (e) => O, F = O, I = (e, t = !0) => [
	k(e ?? w.defaultLocale, t ? w.defaultLocale : void 0),
	A,
	j,
	M,
	P(e ?? w.defaultLocale),
	F,
	N
], L = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), R = (e, t, n = I(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return L(e.content, r, n);
}, z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => y({
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
}, B = O, V = O, H = O, U = /* @__PURE__ */ new Map(), W = (e, t = !0) => {
	let n = `${e ?? w.defaultLocale}_${t}`;
	if (U.has(n)) return U.get(n);
	let r = [
		k(e ?? w.defaultLocale, t ? w.defaultLocale : void 0),
		A,
		j,
		P(e ?? w.defaultLocale),
		F,
		N,
		z,
		B,
		V,
		H
	];
	return U.set(n, r), r;
}, G = (e, t) => R(e, t, W(t)), K = Symbol("intlayer"), q = (e, t) => t.reduce((e, t) => e?.[t], e), J = (e) => typeof e == "object" && !!e, Y = (e) => typeof e == "function" || J(e) && ("render" in e || "setup" in e), X = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Z = (e) => c(r({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Y(t) ? a(t) : Array.isArray(t) ? a("span", t) : t;
		};
	}
})), Q = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Z(() => e.value);
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
}), $ = (t, n) => {
	let r = i() ? o(K) : void 0, a = s(r?.locale) ? r.locale : f(r?.locale ?? w.defaultLocale), c = e(() => (n === void 0 ? void 0 : h(n)) ?? a.value), l = p({});
	_([() => h(t), () => c.value], ([e, t]) => {
		l.value = G(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (t) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = e(() => q(l.value, t));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Z(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = t.concat(r), s = q(l.value, o);
			if (s === void 0 || J(s) && !Y(s)) return u(o);
			if (X(s)) return Q(e(() => q(l.value, o)));
			let c = e(() => q(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = q(l.value, t);
			return J(e) ? Reflect.ownKeys(e) : [];
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
function ee(e) {
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
var te = { class: "mb-16 text-center" }, ne = { class: "mb-4 text-4xl font-bold tracking-tight text-foreground" }, re = { class: "mx-auto max-w-2xl text-lg text-muted-foreground" }, ie = { class: "mt-8 flex justify-center gap-4" }, ae = {
	type: "button",
	class: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
}, oe = {
	type: "button",
	class: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
}, se = r({
	__name: "Hero",
	setup(e) {
		ee("Hero");
		let { d: r, a: i, e: a, c: o } = $(v);
		return (e, s) => (d(), t("section", te, [
			n("h1", ne, m(g(r)), 1),
			n("p", re, m(g(i)), 1),
			n("div", ie, [n("button", ae, m(g(a)), 1), n("button", oe, m(g(o)), 1)])
		]));
	}
});
export { se as default };
