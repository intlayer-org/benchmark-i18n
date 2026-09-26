import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
import "svelte/internal/flags/legacy";
var i = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), a = {
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
}, o = {
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
}, s = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, c = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && s(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, l = ["en"], u = "__intlayerPreloaded", d = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? a?.defaultLocale ?? "en",
	mode: e.mode ?? o?.mode ?? "prefix-no-default",
	locales: e.locales ?? a?.locales ?? l,
	rewrite: e.rewrite ?? o?.rewrite,
	domains: e.domains ?? o?.domains
}), f = (e, t) => !!e && (t ?? a.locales).includes(e), p = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, ee = (e = m) => {
	let { locales: t } = a;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!p) for (let t = 0; t < (o.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(o.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, te = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: a } = d(t);
	if (!n || !r) return n;
	let o = i(e), s = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, c = o ? new URL(s) : new URL(s, "http://e.com");
	if (a === "search-params") {
		let e = c.searchParams.get("locale");
		return f(e, r) ? e : n;
	}
	if (a === "no-prefix") return n;
	let l = c.pathname.split("/")[1];
	if (f(l, r)) return l;
	if (a === "prefix-no-default") return n;
}, ne = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = d(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = c(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = te(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return ee() ?? t;
}, h, g, re = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (g === void 0 || h !== e) && (h = e, g = ne()), g;
}, _ = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProductsGrid-hpfrg3-en-BOuG1Y3P.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/zh.json").then((e) => e.default)
}, v = re(), y = _[v];
typeof window < "u" && typeof y == "function" && y().then((e) => {
	_.__intlayerPreloaded = {
		locale: v,
		dictionary: e
	};
}, () => void 0);
var b = a?.defaultLocale, ie = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: b });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: b })
	};
})(), ae = Symbol("intlayer"), oe = () => t(ae), x = /* @__PURE__ */ new Map(), S = (e, t) => Object.create(new Proxy(e, {
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
}), C = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = x.get(t);
	i || (i = /* @__PURE__ */ new Map(), x.set(t, i));
	let a = i.get(r);
	return a || (a = S(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, w = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, se = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[u];
	if (n && n.locale === t) return n.dictionary;
}, ce = "translation", le = "object", ue = "array", T = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, E);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, T(t, e, {
		type: ue,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: le,
			key: r
		};
		if (t.eager) {
			n[r] = E(e[r], T(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = E(e[r], T(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, D = /* @__PURE__ */ new WeakMap(), O = 0, de = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, fe = 256, k = /* @__PURE__ */ new WeakMap(), A = (e) => typeof e == "object" && !!e, pe = (e, t, n) => `${e}_${t}_${de(n)}`, me = (e, t) => {
	if (!A(e)) return { hit: !1 };
	let n = k.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, j = (e, t, n) => {
	if (!A(e)) return n;
	let r = k.get(e);
	return r || (r = /* @__PURE__ */ new Map(), k.set(e, r)), r.size >= fe && r.clear(), r.set(t, n), n;
}, he = (e, t = !0) => [
	R(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	z,
	B(e ?? a.defaultLocale),
	V,
	_e,
	W(e ?? a.defaultLocale),
	G,
	H,
	U
].filter((e) => e !== L), ge = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), M = /* @__PURE__ */ new WeakSet(), N = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = pe(r ?? a.defaultLocale, "", n), s = me(e, o);
	if (s.hit) return s.content;
	let c = n ?? he(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !M.has(e)
		};
		M.add(e);
		try {
			return ge(e.content, t, c);
		} finally {
			t.eager && M.delete(e);
		}
	};
	return l === null ? j(e, o, null) : Array.isArray(l) ? j(e, o, l.map(u)) : j(e, o, u(l));
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !P(e) || !P(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? F(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, I = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => F(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = I(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ce,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, _e = L, H = L, U = L, W = (e) => L, G = L;
function K(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var ve = (e) => {
	let t = !!K.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new K({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => K(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, C(e.value, Function.prototype)), n;
}, q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ve({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, ye = q, be = L, xe = L, Se = L, J = /* @__PURE__ */ new Map(), Ce = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		q,
		R(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		z,
		B(e ?? a.defaultLocale),
		V,
		W(e ?? a.defaultLocale),
		G,
		H,
		U,
		ye,
		be,
		xe,
		Se
	].filter((e) => e !== L);
	return J.set(n, r), r;
}, Y = (e, t) => N(e, t, Ce(typeof t == "object" && t ? t.locale : t)), X = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return X;
	},
	apply: () => X
}), Z = () => new Proxy({
	isLoading: !0,
	error: null
}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : X }), Q = (e) => Array.isArray(e) ? Object.assign(e.slice(), {
	isLoading: !1,
	error: null
}) : e && typeof e == "object" ? {
	...e,
	isLoading: !1,
	error: null
} : {
	isLoading: !1,
	error: null
};
function $(e, t, r) {
	let i = oe();
	w(i?.variant, t);
	let a = r, o = n(ie, (e) => a ?? i?.locale ?? e.locale);
	return n(o, (t, n) => {
		let r = se(e, t);
		if (r) {
			n(Q(Y(r, t)));
			return;
		}
		n(Z());
		let i = !1;
		return (async () => {
			try {
				let r;
				{
					let n = e[t];
					if (!n) return;
					r = Y(await n(), t);
				}
				if (i) return;
				n(Q(r));
			} catch (e) {
				if (i) return;
				console.error(e), n({
					isLoading: !1,
					error: e
				});
			}
		})(), () => {
			i = !0;
		};
	}, Z());
}
var we = e.from_html("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"mb-4 text-sm text-muted-foreground\"> </p></div> <div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"> </span> <button type=\"button\" class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div></div>"), Te = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function Ee(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(o, "$content", i), [i, a] = e.setup_stores(), o = $(_, "products-grid"), s = e.derived(() => [
		{
			name: r().benchmarkCli,
			desc: r().runBenchmarksLocallyFromYour,
			price: r().free
		},
		{
			name: r().benchmarkCloud,
			desc: r().automatedCloudBasedBenchmarkingWith,
			price: "$29/mo"
		},
		{
			name: r().benchmarkEnterprise,
			desc: r().onPremiseDeploymentWithSso,
			price: r().contactUs
		},
		{
			name: r().migrationAssistant,
			desc: r().aiPoweredToolThatHelps,
			price: "$99 one-time"
		},
		{
			name: r().translationQa,
			desc: r().automatedQualityChecksForMissing,
			price: "$19/mo"
		},
		{
			name: r().bundleOptimizer,
			desc: r().analyzesAndOptimizesYourI18n,
			price: "$49/mo"
		}
	]);
	var c = Te();
	e.each(c, 21, () => e.get(s), e.index, (t, n) => {
		var i = we(), a = e.child(i), o = e.child(a), s = e.only_child(o, !0), c = e.sibling(o, 2), l = e.only_child(c, !0);
		e.reset(a);
		var u = e.sibling(a, 2), d = e.child(u), f = e.only_child(d, !0), p = e.sibling(d, 2), m = e.only_child(p, !0);
		e.reset(u), e.reset(i), e.template_effect(() => {
			e.set_text(s, e.get(n).name), e.set_text(l, e.get(n).desc), e.set_text(f, e.get(n).price), e.set_text(m, r().learnMore);
		}), e.append(t, i);
	}), e.reset(c), e.append(t, c), e.pop(), a();
}
export { Ee as default };
var e = Object.defineProperty, t = ((t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
})({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "products-grid", r = {
	learnMore: "Learn More",
	analyzesAndOptimizesYourI18n: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	bundleOptimizer: "Bundle Optimizer",
	automatedQualityChecksForMissing: "Automated quality checks for missing translations, pluralization issues, and context errors.",
	translationQa: "Translation QA",
	aiPoweredToolThatHelps: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	migrationAssistant: "Migration Assistant",
	contactUs: "Contact Us",
	onPremiseDeploymentWithSso: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	benchmarkEnterprise: "Benchmark Enterprise",
	automatedCloudBasedBenchmarkingWith: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	benchmarkCloud: "Benchmark Cloud",
	free: "Free",
	runBenchmarksLocallyFromYour: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	benchmarkCli: "Benchmark CLI"
}, i = {
	key: n,
	content: r
};
export { t };
