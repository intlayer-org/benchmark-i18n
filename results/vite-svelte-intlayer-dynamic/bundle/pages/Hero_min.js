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
}, ee = (e = "/", t) => {
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
}, te = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = f(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = l(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ee(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return g() ?? t;
}, _, v, ne = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (v === void 0 || _ !== e) && (_ = e, v = te()), v;
}, y = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/de.json").then((e) => e.default),
	en: () => import("./intlayer-Hero-t3jdto-en-Dh6P803Y.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/zh.json").then((e) => e.default)
}, b = ne(), x = y[b];
typeof window < "u" && typeof x == "function" && x().then((e) => {
	y.__intlayerPreloaded = {
		locale: b,
		dictionary: e
	};
}, () => void 0);
var S = o?.defaultLocale, re = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: S });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: S })
	};
})(), C = Symbol("intlayer"), ie = () => t(C), w = /* @__PURE__ */ new Map(), ae = (e, t) => Object.create(new Proxy(e, {
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
}), oe = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = w.get(t);
	i || (i = /* @__PURE__ */ new Map(), w.set(t, i));
	let a = i.get(r);
	return a || (a = ae(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, se = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, ce = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[d];
	if (n && n.locale === t) return n.dictionary;
}, le = "translation", T = "object", E = "array", D = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, O);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, D(t, e, {
		type: E,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: T,
			key: r
		};
		if (t.eager) {
			n[r] = O(e[r], D(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = O(e[r], D(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, k = /* @__PURE__ */ new WeakMap(), A = 0, ue = (e) => {
	if (!e) return "base";
	let t = k.get(e);
	if (t) return t;
	A += 1;
	let n = `p${A}`;
	return k.set(e, n), n;
}, de = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, fe = (e, t, n) => `${e}_${t}_${ue(n)}`, pe = (e, t) => {
	if (!M(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, N = (e, t, n) => {
	if (!M(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= de && r.clear(), r.set(t, n), n;
}, me = (e, t = !0) => [
	z(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	B,
	V(e ?? o.defaultLocale),
	H,
	_e,
	G(e ?? o.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== R), he = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), P = /* @__PURE__ */ new WeakSet(), ge = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = fe(r ?? o.defaultLocale, "", n), s = pe(e, a);
	if (s.hit) return s.content;
	let c = n ?? me(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !P.has(e)
		};
		P.add(e);
		try {
			return he(e.content, t, c);
		} finally {
			t.eager && P.delete(e);
		}
	};
	return l === null ? N(e, a, null) : Array.isArray(l) ? N(e, a, l.map(u)) : N(e, a, u(l));
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !F(e) || !F(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? I(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, L = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => I(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = L(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: le,
				key: e
			}]
		});
	}
}, B = R, V = (e) => R, H = R, _e = R, U = R, W = R, G = (e) => R, K = R;
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
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, oe(e.value, Function.prototype)), n;
}, J = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ve({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, ye = J, be = R, xe = R, Se = R, Y = /* @__PURE__ */ new Map(), Ce = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		J,
		z(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		B,
		V(e ?? o.defaultLocale),
		H,
		G(e ?? o.defaultLocale),
		K,
		U,
		W,
		ye,
		be,
		xe,
		Se
	].filter((e) => e !== R);
	return Y.set(n, r), r;
}, X = (e, t) => ge(e, t, Ce(typeof t == "object" && t ? t.locale : t)), Z = new Proxy(() => {}, {
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
	let i = ie();
	se(i?.variant, t);
	let a = n, o = r(re, (e) => a ?? i?.locale ?? e.locale);
	return r(o, (t, n) => {
		let r = ce(e, t);
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
var Ee = e.from_html("<section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"> </h1> <p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"> </p> <div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button> <button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button></div></section>");
function De(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$content", i), [i, a] = e.setup_stores(), o = we(y, "hero");
	Te("Hero"), e.init();
	var s = Ee(), c = e.child(s), l = e.only_child(c, !0), u = e.sibling(c, 2), d = e.only_child(u, !0), f = e.sibling(u, 2), p = e.child(f), m = e.only_child(p, !0), h = e.sibling(p, 2), g = e.only_child(h, !0);
	e.reset(f), e.reset(s), e.template_effect(() => {
		e.set_text(l, r().title), e.set_text(d, r().description), e.set_text(m, r().viewResults), e.set_text(g, r().methodology);
	}), e.append(t, s), e.pop(), a();
}
export { De as default };
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
}), n = "hero", r = {
	title: "i18n Benchmark",
	description: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results",
	methodology: "Methodology"
}, i = {
	key: n,
	content: r
};
export { t };
