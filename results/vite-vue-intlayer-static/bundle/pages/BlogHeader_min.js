import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createVNode as i, defineComponent as a, getCurrentInstance as o, h as s, inject as c, isRef as l, markRaw as u, openBlock as d, ref as f, shallowRef as p, toDisplayString as m, toValue as h, watch as g } from "vue";
var _ = {
	key: "blog-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community.",
				blog: "Blog"
			},
			fr: {
				insightsTutorialsAndAnalysisFrom: "Des analyses, tutoriels et points de vue de la communauté i18n.",
				blog: "Blog"
			},
			es: {
				insightsTutorialsAndAnalysisFrom: "Ideas, tutoriales y análisis de la comunidad i18n.",
				blog: "Blog"
			},
			de: {
				insightsTutorialsAndAnalysisFrom: "Einblicke, Tutorials und Analysen aus der i18n-Community.",
				blog: "Blog"
			},
			it: {
				insightsTutorialsAndAnalysisFrom: "Approfondimenti, tutorial e analisi dalla comunità i18n.",
				blog: "Blog"
			},
			pt: {
				insightsTutorialsAndAnalysisFrom: "Insights, tutoriais e análises da comunidade i18n.",
				blog: "Blog"
			},
			zh: {
				insightsTutorialsAndAnalysisFrom: "来自 i18n 社区的见解、教程 and 分析。",
				blog: "博客"
			},
			ja: {
				insightsTutorialsAndAnalysisFrom: "i18nコミュニティからのインサイト、チュートリアル、分析。",
				blog: "ブログ"
			},
			ko: {
				insightsTutorialsAndAnalysisFrom: "i18n 커뮤니티의 인사이트, 튜토리얼 및 분석.",
				blog: "블로그"
			},
			ru: {
				insightsTutorialsAndAnalysisFrom: "Идеи, руководства и аналитика от сообщества i18n.",
				blog: "Блог"
			}
		}
	}
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
	}), u(o);
}, ee = "translation", y = "object", b = "array", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: b,
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
					type: y,
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
}, te = (e, t, n) => {
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
}, T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? T : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ee,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return te(o, e, t);
	}
}, D = T, O = T, k = T, A = T, j = (e) => T, M = T, N = (e, t = !0) => [
	E(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
	D,
	O,
	k,
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
		return u(a);
	}
}, L = T, R = T, z = T, B = /* @__PURE__ */ new Map(), V = (e, t = !0) => {
	let n = `${e ?? S.defaultLocale}_${t}`;
	if (B.has(n)) return B.get(n);
	let r = [
		E(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
		D,
		O,
		j(e ?? S.defaultLocale),
		M,
		A,
		I,
		L,
		R,
		z
	];
	return B.set(n, r), r;
}, H = (e, t) => F(e, t, V(t)), U = Symbol("intlayer"), W = (e, t) => t.reduce((e, t) => e?.[t], e), G = (e) => typeof e == "object" && !!e, K = (e) => typeof e == "function" || G(e) && ("render" in e || "setup" in e), q = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, J = (e) => u(a({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : K(t) ? s(t) : Array.isArray(t) ? s("span", t) : t;
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
}), X = (e, n) => {
	let r = o() ? c(U) : void 0, i = l(r?.locale) ? r.locale : f(r?.locale ?? S.defaultLocale), a = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), s = p({});
	g([() => h(e), () => a.value], ([e, t]) => {
		s.value = H(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => W(s.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return J(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), c = W(s.value, o);
			if (c === void 0 || G(c) && !K(c)) return u(o);
			if (q(c)) return Y(t(() => W(s.value, o)));
			let l = t(() => W(s.value, o));
			return new Proxy(l, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = W(s.value, e);
			return G(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, Z = {
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
}, ne = a({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { a: n } = X(Z), r = { message: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Q = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, re = { class: "mb-8 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-600 dark:text-yellow-400" };
function ie(e, t, r, i, a, o) {
	return d(), n("div", re, m(i.message), 1);
}
var ae = Q(ne, [["render", ie], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/MockBanner.vue"]]), oe = a({
	__name: "BlogHeader",
	setup(e, { expose: t }) {
		t();
		let n = {
			content: X(_),
			MockBanner: ae
		};
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), $ = { class: "mb-2 text-3xl font-bold text-foreground" }, se = { class: "mb-10 text-muted-foreground" };
function ce(t, a, o, s, c, l) {
	return d(), n(e, null, [
		i(s.MockBanner),
		r("h1", $, m(s.content.blog), 1),
		r("p", se, m(s.content.insightsTutorialsAndAnalysisFrom), 1)
	], 64);
}
var le = Q(oe, [["render", ce], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/blog/BlogHeader.vue"]]);
export { le as default };
