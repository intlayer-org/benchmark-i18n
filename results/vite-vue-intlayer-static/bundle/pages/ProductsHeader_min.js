import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createVNode as i, defineComponent as a, getCurrentInstance as o, h as s, inject as c, isRef as l, markRaw as u, openBlock as d, ref as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h } from "vue";
var g = {
	key: "products-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				toolsAndServicesToStreamline: "Tools and services to streamline your internationalization workflow.",
				products: "Products"
			},
			fr: {
				toolsAndServicesToStreamline: "Des outils et services pour rationaliser votre flux de travail d'internationalisation.",
				products: "Produits"
			},
			es: {
				toolsAndServicesToStreamline: "Herramientas y servicios para simplificar su flujo de trabajo de internacionalización.",
				products: "Productos"
			},
			de: {
				toolsAndServicesToStreamline: "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.",
				products: "Produkte"
			},
			it: {
				toolsAndServicesToStreamline: "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.",
				products: "Prodotti"
			},
			pt: {
				toolsAndServicesToStreamline: "Ferramentas e serviços para simplificar seu fluxo de trabalho de internacionalização.",
				products: "Produtos"
			},
			zh: {
				toolsAndServicesToStreamline: "简化国际化工作流程的工具和服务。",
				products: "产品"
			},
			ja: {
				toolsAndServicesToStreamline: "国際化ワークフローを合理化するためのツールとサービス。",
				products: "製品"
			},
			ko: {
				toolsAndServicesToStreamline: "국제화 워크플로우를 간소화하는 도구 및 서비스.",
				products: "제품"
			},
			ru: {
				toolsAndServicesToStreamline: "Инструменты и услуги для оптимизации рабочего процесса интернационализации.",
				products: "Продукты"
			}
		}
	}
}, _ = ({ value: e, children: t, additionalProps: n = {} }) => {
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
	}), u(o);
}, te = "translation", v = "object", y = "array", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: y,
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
					type: v,
					key: r
				}]
			}, i = b(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, x = {
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
}, S = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, C = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (S(e) && S(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : C(e[r], t[r]));
		return n;
	}
	return e;
}, w = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => C(e, t));
}, T = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", E = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, D = (e, t) => T ? E : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return w(o, e, t);
	}
}, O = E, k = E, A = E, j = E, M = (e) => E, N = E, P = (e, t = !0) => [
	D(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	O,
	k,
	A,
	M(e ?? x.defaultLocale),
	N,
	j
], F = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), I = (e, t, n = P(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return F(e.content, r, n);
}, L = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => _({
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
		return u(a);
	}
}, R = E, z = E, B = E, V = /* @__PURE__ */ new Map(), H = (e, t = !0) => {
	let n = `${e ?? x.defaultLocale}_${t}`;
	if (V.has(n)) return V.get(n);
	let r = [
		D(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
		O,
		k,
		M(e ?? x.defaultLocale),
		N,
		j,
		L,
		R,
		z,
		B
	];
	return V.set(n, r), r;
}, U = (e, t) => I(e, t, H(t)), W = Symbol("intlayer"), G = (e, t) => t.reduce((e, t) => e?.[t], e), K = (e) => typeof e == "object" && !!e, q = (e) => typeof e == "function" || K(e) && ("render" in e || "setup" in e), J = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Y = (e) => u(a({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : q(t) ? s(t) : Array.isArray(t) ? s("span", t) : t;
		};
	}
})), X = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Y(() => e.value);
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
}), Z = (e, n) => {
	let r = o() ? c(W) : void 0, i = l(r?.locale) ? r.locale : f(r?.locale ?? x.defaultLocale), a = t(() => (n === void 0 ? void 0 : m(n)) ?? i.value), s = ee({});
	h([() => m(e), () => a.value], ([e, t]) => {
		s.value = U(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => G(s.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Y(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), c = G(s.value, o);
			if (c === void 0 || K(c) && !q(c)) return u(o);
			if (J(c)) return X(t(() => G(s.value, o)));
			let l = t(() => G(s.value, o));
			return new Proxy(l, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = G(s.value, e);
			return K(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, ne = {
	key: "mock-banner",
	content: {
		nodeType: "translation",
		translation: {
			en: { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." },
			fr: { a: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." },
			es: { a: "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." },
			de: { a: "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." },
			it: { a: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." },
			pt: { a: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." },
			zh: { a: "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务 or 服务无关。" },
			ja: { a: "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" },
			ko: { a: "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." },
			ru: { a: "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }
		}
	}
}, re = a({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { a: n } = Z(ne), r = { message: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Q = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ie = { class: "mb-8 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-600 dark:text-yellow-400" };
function ae(e, t, r, i, a, o) {
	return d(), n("div", ie, p(i.message), 1);
}
var oe = Q(re, [["render", ae], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/MockBanner.vue"]]), se = a({
	__name: "ProductsHeader",
	setup(e, { expose: t }) {
		t();
		let n = {
			content: Z(g),
			MockBanner: oe
		};
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), ce = { class: "mb-2 text-3xl font-bold text-foreground" }, le = { class: "mb-10 text-muted-foreground" };
function $(t, a, o, s, c, l) {
	return d(), n(e, null, [
		i(s.MockBanner),
		r("h1", ce, p(s.content.products), 1),
		r("p", le, p(s.content.toolsAndServicesToStreamline), 1)
	], 64);
}
var ue = Q(se, [["render", $], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/products/ProductsHeader.vue"]]);
export { ue as default };
