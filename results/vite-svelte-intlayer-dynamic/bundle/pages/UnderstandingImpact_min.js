import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
var a = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), o = {
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
}, s = {
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
}, c = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, l = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && c(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, u = ["en"], d = "__intlayerPreloaded", f = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? o?.defaultLocale ?? "en",
	mode: e.mode ?? s?.mode ?? "prefix-no-default",
	locales: e.locales ?? o?.locales ?? u,
	rewrite: e.rewrite ?? s?.rewrite,
	domains: e.domains ?? s?.domains
}), p = (e, t) => !!e && (t ?? o.locales).includes(e), m = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var h = {
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
}, g = (e = h) => {
	let { locales: t } = o;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!m) for (let t = 0; t < (s.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(s.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, _ = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = f(t);
	if (!n || !r) return n;
	let o = a(e), s = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, c = o ? new URL(s) : new URL(s, "http://e.com");
	if (i === "search-params") {
		let e = c.searchParams.get("locale");
		return p(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let l = c.pathname.split("/")[1];
	if (p(l, r)) return l;
	if (i === "prefix-no-default") return n;
}, v = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = f(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = l(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = _(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return g() ?? t;
}, y, b, x = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (b === void 0 || y !== e) && (y = e, b = v()), b;
}, S = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/de.json").then((e) => e.default),
	en: () => import("./intlayer-UnderstandingImpact-1to5eg-en-BJtiu1PX.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/zh.json").then((e) => e.default)
}, C = x(), w = S[C];
typeof window < "u" && typeof w == "function" && w().then((e) => {
	S.__intlayerPreloaded = {
		locale: C,
		dictionary: e
	};
}, () => void 0);
var T = o?.defaultLocale, E = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: T });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: T })
	};
})(), D = Symbol("intlayer"), ee = () => t(D), O = /* @__PURE__ */ new Map(), te = (e, t) => Object.create(new Proxy(e, {
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
}), ne = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = O.get(t);
	i || (i = /* @__PURE__ */ new Map(), O.set(t, i));
	let a = i.get(r);
	return a || (a = te(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, re = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, ie = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[d];
	if (n && n.locale === t) return n.dictionary;
}, ae = "translation", oe = "object", se = "array", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: se,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: oe,
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
}, j = /* @__PURE__ */ new WeakMap(), M = 0, ce = (e) => {
	if (!e) return "base";
	let t = j.get(e);
	if (t) return t;
	M += 1;
	let n = `p${M}`;
	return j.set(e, n), n;
}, le = 256, N = /* @__PURE__ */ new WeakMap(), P = (e) => typeof e == "object" && !!e, ue = (e, t, n) => `${e}_${t}_${ce(n)}`, de = (e, t) => {
	if (!P(e)) return { hit: !1 };
	let n = N.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!P(e)) return n;
	let r = N.get(e);
	return r || (r = /* @__PURE__ */ new Map(), N.set(e, r)), r.size >= le && r.clear(), r.set(t, n), n;
}, fe = (e, t = !0) => [
	B(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	V,
	ge(e ?? o.defaultLocale),
	H,
	_e,
	G(e ?? o.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== z), pe = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), I = /* @__PURE__ */ new WeakSet(), me = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ue(r ?? o.defaultLocale, "", n), s = de(e, a);
	if (s.hit) return s.content;
	let c = n ?? fe(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !I.has(e)
		};
		I.add(e);
		try {
			return pe(e.content, t, c);
		} finally {
			t.eager && I.delete(e);
		}
	};
	return l === null ? F(e, a, null) : Array.isArray(l) ? F(e, a, l.map(u)) : F(e, a, u(l));
}, L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !L(e) || !L(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? R(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, he = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => R(e, t));
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = he(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ae,
				key: e
			}]
		});
	}
}, V = z, ge = (e) => z, H = z, _e = z, U = z, W = z, G = (e) => z, K = z;
function q(t, n) {
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
	let t = !!q.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new q({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => q(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, ne(e.value, Function.prototype)), n;
}, J = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ve({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, ye = J, be = z, xe = z, Se = z, Y = /* @__PURE__ */ new Map(), Ce = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		J,
		B(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		V,
		ge(e ?? o.defaultLocale),
		H,
		G(e ?? o.defaultLocale),
		K,
		U,
		W,
		ye,
		be,
		xe,
		Se
	].filter((e) => e !== z);
	return Y.set(n, r), r;
}, X = (e, t) => me(e, t, Ce(typeof t == "object" && t ? t.locale : t)), Z = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return Z;
	},
	apply: () => Z
}), Q = () => new Proxy({
	isLoading: !0,
	error: null
}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : Z }), $ = (e) => Array.isArray(e) ? Object.assign(e.slice(), {
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
function we(e, t, n) {
	let i = ee();
	re(i?.variant, t);
	let a = n, o = r(E, (e) => a ?? i?.locale ?? e.locale);
	return r(o, (t, n) => {
		let r = ie(e, t);
		if (r) {
			n($(X(r, t)));
			return;
		}
		n(Q());
		let i = !1;
		return (async () => {
			try {
				let r;
				{
					let n = e[t];
					if (!n) return;
					r = X(await n(), t);
				}
				if (i) return;
				n($(r));
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
	}, Q());
}
function Te(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Ee = e.from_html("<li> </li>"), De = e.from_html("<li><strong class=\"text-foreground\"> </strong> </li>"), Oe = e.from_html("<section class=\"mx-auto mb-16 max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"> </h2> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"></ul></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"></ul></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></section>");
function ke(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$content", i), [i, a] = e.setup_stores();
	Te("UnderstandingImpact");
	let o = we(S, "understanding-impact");
	e.init();
	var s = Oe(), c = e.child(s), l = e.only_child(c, !0), u = e.sibling(c, 2), d = e.child(u), f = e.only_child(d, !0), p = e.sibling(d, 2), m = e.only_child(p, !0), h = e.sibling(p, 2);
	e.each(h, 5, () => r().largeJson.points, e.index, (t, n) => {
		var r = Ee(), i = e.only_child(r, !0);
		e.template_effect(() => e.set_text(i, e.get(n))), e.append(t, r);
	}), e.reset(h), e.reset(u);
	var g = e.sibling(u, 2), _ = e.child(g), v = e.only_child(_, !0), y = e.sibling(_, 2), b = e.only_child(y, !0), x = e.sibling(y, 2);
	e.each(x, 5, () => r().dynamicLoading.points, e.index, (t, n) => {
		var r = De(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i);
		e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).label), e.set_text(o, ` ${e.get(n).text ?? ""}`);
		}), e.append(t, r);
	}), e.reset(x), e.reset(g);
	var C = e.sibling(g, 2), w = e.child(C), T = e.only_child(w, !0), E = e.sibling(w, 2), D = e.only_child(E, !0);
	e.reset(C), e.reset(s), e.template_effect(() => {
		e.set_text(l, r().title), e.set_text(f, r().largeJson.title), e.set_text(m, r().largeJson.description), e.set_text(v, r().dynamicLoading.title), e.set_text(b, r().dynamicLoading.description), e.set_text(T, r().benchmarkMeasures.title), e.set_text(D, r().benchmarkMeasures.description);
	}), e.append(t, s), e.pop(), a();
}
export { ke as default };
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
}), n = "understanding-impact", r = {
	title: "Understanding the Impact",
	largeJson: {
		title: "Why a single large JSON can hurt performance",
		description: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		points: [
			"The JSON must be parsed on every page load — blocking the main thread.",
			"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
		]
	},
	dynamicLoading: {
		title: "The trade-offs of dynamic loading",
		description: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		points: [
			{
				label: "Waterfall requests:",
				text: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
			},
			{
				label: "Flash of untranslated content (FOUC):",
				text: "users may briefly see translation keys or a fallback language before the chunk arrives."
			},
			{
				label: "Cache invalidation:",
				text: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
			}
		]
	},
	benchmarkMeasures: {
		title: "What this benchmark measures",
		description: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	}
}, i = {
	key: n,
	content: r
};
export { t };
