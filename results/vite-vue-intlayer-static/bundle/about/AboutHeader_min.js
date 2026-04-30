import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, onBeforeMount as u, onMounted as d, openBlock as f, ref as p, shallowRef as m, toDisplayString as h, toValue as g, watch as _ } from "vue";
var v = {
	key: "about-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				b: "About This Benchmark",
				a: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page application where different i18n libraries can be integrated and measured under identical conditions."
			},
			fr: {
				b: "À propos de ce benchmark",
				a: "Il s'agit d'une application de test open-source — pas d'un produit ou d'une entreprise. Son seul but est de fournir une application multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
			},
			es: {
				b: "Acerca de este benchmark",
				a: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n bajo condiciones idénticas."
			},
			de: {
				b: "Über diesen Benchmark",
				a: "Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige Anwendung bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können."
			},
			it: {
				b: "Informazioni su questo benchmark",
				a: "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione multi-pagina realistica in cui diverse librerie i18n possano essere integrate e misurate in condizioni identiche."
			},
			pt: {
				b: "Sobre este Benchmark",
				a: "Este é um aplicativo de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo de várias páginas realista, onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas."
			},
			zh: {
				b: "关于此基准测试",
				a: "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个逼真的多页面应用程序，可以在相同条件下集成和测量不同的 i18n 库。"
			},
			ja: {
				b: "このベンチマークについて",
				a: "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、同一の条件下でさまざまなi18nライブラリを統合および測定できる、現実的なマルチページアプリケーションを提供することです。"
			},
			ko: {
				b: "이 벤치마크에 대하여",
				a: "이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 애플리케이션을 제공하는 것입니다."
			},
			ru: {
				b: "Об этом бенчмарке",
				a: "Это тестовое приложение с открытым исходным кодом — не продукт и не компания. Его единственная цель — предоставить реалистичное многостраничное приложение, в которое можно интегрировать различные библиотеки i18n и измерять их в идентичных условиях."
			}
		}
	}
}, y = ({ value: e, children: t, additionalProps: n = {} }) => {
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
	}), l(o);
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
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : E(e[r], t[r]));
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
		return l(a);
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
}, G = (e, t) => R(e, t, W(t)), K = Symbol("intlayer"), q = (e, t) => t.reduce((e, t) => e?.[t], e), J = (e) => typeof e == "object" && !!e, Y = (e) => typeof e == "function" || J(e) && ("render" in e || "setup" in e), X = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Z = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Y(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
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
}), $ = (e, n) => {
	let r = a() ? s(K) : void 0, i = c(r?.locale) ? r.locale : p(r?.locale ?? w.defaultLocale), o = t(() => (n === void 0 ? void 0 : g(n)) ?? i.value), l = m({});
	_([() => g(e), () => o.value], ([e, t]) => {
		l.value = G(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => q(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Z(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = q(l.value, o);
			if (s === void 0 || J(s) && !Y(s)) return u(o);
			if (X(s)) return Q(t(() => q(l.value, o)));
			let c = t(() => q(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = q(l.value, e);
			return J(t) ? Reflect.ownKeys(t) : [];
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
var te = i({
	__name: "AboutHeader",
	setup(e, { expose: t }) {
		t(), ee("AboutHeader");
		let { b: n, a: r } = $(v), i = {
			title: n,
			description: r
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
}, re = { class: "mb-4 text-3xl font-bold text-foreground" }, ie = { class: "mb-8 max-w-3xl text-muted-foreground" };
function ae(t, i, a, o, s, c) {
	return f(), n(e, null, [r("h1", re, h(o.title), 1), r("p", ie, h(o.description), 1)], 64);
}
var oe = ne(te, [["render", ae], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/about/AboutHeader.vue"]]);
export { oe as default };
