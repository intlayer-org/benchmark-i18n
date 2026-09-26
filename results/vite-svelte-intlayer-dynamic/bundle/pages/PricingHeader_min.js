import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
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
var ee = {
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
}, te = (e = ee) => {
	let { locales: t } = a;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!p) for (let t = 0; t < (o.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(o.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ne = (e = "/", t) => {
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
}, re = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = d(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = c(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ne(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return te() ?? t;
}, m, h, g = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (h === void 0 || m !== e) && (m = e, h = re()), h;
}, _ = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-PricingHeader-qxnn8m-en-mw2-ZKO8.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/zh.json").then((e) => e.default)
}, v = g(), y = _[v];
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
})(), ae = Symbol("intlayer"), oe = () => t(ae), x = /* @__PURE__ */ new Map(), se = (e, t) => Object.create(new Proxy(e, {
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
}), ce = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = x.get(t);
	i || (i = /* @__PURE__ */ new Map(), x.set(t, i));
	let a = i.get(r);
	return a || (a = se(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, le = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, ue = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[u];
	if (n && n.locale === t) return n.dictionary;
}, de = "translation", fe = "object", pe = "array", S = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, C);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, S(t, e, {
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
			n[r] = C(e[r], S(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = C(e[r], S(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, w = /* @__PURE__ */ new WeakMap(), T = 0, me = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, he = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, ge = (e, t, n) => `${e}_${t}_${me(n)}`, _e = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= he && r.clear(), r.set(t, n), n;
}, ve = (e, t = !0) => [
	P(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	F,
	I(e ?? a.defaultLocale),
	L,
	xe,
	B(e ?? a.defaultLocale),
	V,
	R,
	z
].filter((e) => e !== N), ye = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), k = /* @__PURE__ */ new WeakSet(), be = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = ge(r ?? a.defaultLocale, "", n), s = _e(e, o);
	if (s.hit) return s.content;
	let c = n ?? ve(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !k.has(e)
		};
		k.add(e);
		try {
			return ye(e.content, t, c);
		} finally {
			t.eager && k.delete(e);
		}
	};
	return l === null ? O(e, o, null) : Array.isArray(l) ? O(e, o, l.map(u)) : O(e, o, u(l));
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
}, M = (e, t, n) => {
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
}, N = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, P = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? N : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = M(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: de,
				key: e
			}]
		});
	}
}, F = N, I = (e) => N, L = N, xe = N, R = N, z = N, B = (e) => N, V = N;
function H(t, n) {
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
var Se = (e) => {
	let t = !!H.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new H({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => H(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, ce(e.value, Function.prototype)), n;
}, U = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Se({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, Ce = U, W = N, we = N, Te = N, G = /* @__PURE__ */ new Map(), Ee = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		U,
		P(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		F,
		I(e ?? a.defaultLocale),
		L,
		B(e ?? a.defaultLocale),
		V,
		R,
		z,
		Ce,
		W,
		we,
		Te
	].filter((e) => e !== N);
	return G.set(n, r), r;
}, K = (e, t) => be(e, t, Ee(typeof t == "object" && t ? t.locale : t)), q = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return q;
	},
	apply: () => q
}), J = () => new Proxy({
	isLoading: !0,
	error: null
}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : q }), Y = (e) => Array.isArray(e) ? Object.assign(e.slice(), {
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
function X(e, t, r) {
	let i = oe();
	le(i?.variant, t);
	let a = r, o = n(ie, (e) => a ?? i?.locale ?? e.locale);
	return n(o, (t, n) => {
		let r = ue(e, t);
		if (r) {
			n(Y(K(r, t)));
			return;
		}
		n(J());
		let i = !1;
		return (async () => {
			try {
				let r;
				{
					let n = e[t];
					if (!n) return;
					r = K(await n(), t);
				}
				if (i) return;
				n(Y(r));
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
	}, J());
}
var Z = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/de.json").then((e) => e.default),
	en: () => import("./intlayer-PricingHeader-qxnn8m-en-mw2-ZKO8.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/zh.json").then((e) => e.default)
}, Q = g(), $ = Z[Q];
typeof window < "u" && typeof $ == "function" && $().then((e) => {
	Z.__intlayerPreloaded = {
		locale: Q,
		dictionary: e
	};
}, () => void 0);
var De = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function Oe(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$banner", i), [i, a] = e.setup_stores(), o = X(Z, "mock-banner");
	e.init();
	var s = De(), c = e.only_child(s, !0);
	e.template_effect(() => e.set_text(c, r().message)), e.append(t, s), e.pop(), a();
}
var ke = e.from_html("<!> <div class=\"mb-12 text-center\"><h1 class=\"mb-3 text-3xl font-bold text-foreground\"> </h1> <p class=\"text-muted-foreground\"> </p></div>", 1);
function Ae(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$content", i), [i, a] = e.setup_stores(), o = X(_, "pricing-header");
	e.init();
	var s = ke(), c = e.first_child(s);
	Oe(c, {});
	var l = e.sibling(c, 2), u = e.child(l), d = e.only_child(u, !0), f = e.sibling(u, 2), p = e.only_child(f, !0);
	e.reset(l), e.template_effect(() => {
		e.set_text(d, r().simpleTransparentPricing), e.set_text(p, r().chooseThePlanThatFits);
	}), e.append(t, s), e.pop(), a();
}
export { Ae as default };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = t({
	content: () => i,
	default: () => a,
	key: () => r
}), r = "mock-banner", i = { message: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "pricing-header", c = {
	chooseThePlanThatFits: "Choose the plan that fits your team. No hidden fees.",
	simpleTransparentPricing: "Simple, Transparent Pricing"
}, l = {
	key: s,
	content: c
};
export { n, o as t };
