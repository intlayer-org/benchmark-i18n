import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n, setContext as r } from "svelte";
import { derived as i, get as a, writable as o } from "svelte/store";
import "svelte/internal/flags/legacy";
import { recordHydrationDuration as s, recordRenderTime as c } from "test-utils/browser-metrics";
import l from "lucide-svelte/icons/chevron-down";
var u = {
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
}, d = {
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
}, f = /* @__PURE__ */ new WeakMap(), p = 0, m = (e) => {
	if (!e) return "base";
	let t = f.get(e);
	if (t) return t;
	p += 1;
	let n = `p${p}`;
	return f.set(e, n), n;
}, h = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, v = (e, t, n) => `${e}_${t}_${m(n)}`, y = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= h && r.clear(), r.set(t, n), n;
}, x = "translation", S = "object", C = "array", w = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, T);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, w(t, e, {
		type: C,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: S,
			key: r
		};
		if (t.eager) {
			n[r] = T(e[r], w(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = T(e[r], w(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, E = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, D = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, O = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !D(e) || !D(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? O(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, k = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => O(e, t));
}, A = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, j = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? A : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = k(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: x,
				key: e
			}]
		});
	}
}, M = A, N = (e) => A, P = A, ee = A, F = A, I = A, L = (e) => A, te = A, ne = (e, t = !0) => [
	j(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	M,
	N(e ?? u.defaultLocale),
	P,
	ee,
	L(e ?? u.defaultLocale),
	te,
	F,
	I
].filter((e) => e !== A), re = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), R = /* @__PURE__ */ new WeakSet(), ie = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = v(r ?? u.defaultLocale, "", n), o = y(e, a);
	if (o.hit) return o.content;
	let s = n ?? ne(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !R.has(e)
		};
		R.add(e);
		try {
			return re(e.content, t, s);
		} finally {
			t.eager && R.delete(e);
		}
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, ae = ["en"], oe = "__intlayerPreloaded", se = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[oe];
	if (n && n.locale === t) return n.dictionary;
}, ce = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), le = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ue = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && le(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, de = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? u?.defaultLocale ?? "en",
	mode: e.mode ?? d?.mode ?? "prefix-no-default",
	locales: e.locales ?? u?.locales ?? ae,
	rewrite: e.rewrite ?? d?.rewrite,
	domains: e.domains ?? d?.domains
}), fe = (e, t) => !!e && (t ?? u.locales).includes(e), pe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var z = {
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
}, B = (e = z) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!pe) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, me = !1, V, he = () => typeof window > "u" ? B(z) : (me ||= (V = B(z), !0), V), ge = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = de(t);
	if (!n || !r) return n;
	let a = ce(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return fe(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (fe(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, _e = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = de(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ue(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ge(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return B() ?? t;
}, ve, H, U = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (H === void 0 || ve !== e) && (ve = e, H = _e()), H;
}, ye = /* @__PURE__ */ new Map(), be = (e, t) => Object.create(new Proxy(e, {
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
}), xe = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = ye.get(t);
	i || (i = /* @__PURE__ */ new Map(), ye.set(t, i));
	let a = i.get(r);
	return a || (a = be(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Se = u.locales;
u.requiredLocales, u.defaultLocale;
var Ce = u?.defaultLocale, W = (() => {
	let { subscribe: e, set: t, update: n } = o({ locale: Ce });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => i({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: Ce })
	};
})(), we = Symbol("intlayer"), Te = (e) => {
	r(we, e);
}, Ee = () => t(we), De = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Oe = he, ke = (t, n) => {
	let r = t ?? Oe();
	De();
	let i = e.state(e.proxy(r)), a = e.state(e.proxy(n));
	r && W.setLocale(r);
	let o = {
		get locale() {
			return e.get(i) ?? u.defaultLocale;
		},
		setLocale: (t) => {
			e.set(i, t, !0), W.setLocale(t);
		},
		get variant() {
			return e.get(a);
		},
		setVariant: (t) => {
			e.set(a, t, !0);
		}
	};
	return Te(o), o;
};
function G(t, n) {
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
var Ae = (e) => {
	let t = !!G.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new G({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => G(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, xe(e.value, Function.prototype)), n;
}, je = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ae({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, Me = je, Ne = A, Pe = A, Fe = A, K = /* @__PURE__ */ new Map(), Ie = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		je,
		j(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		M,
		N(e ?? u.defaultLocale),
		P,
		L(e ?? u.defaultLocale),
		te,
		F,
		I,
		Me,
		Ne,
		Pe,
		Fe
	].filter((e) => e !== A);
	return K.set(n, r), r;
}, Le = (e, t) => ie(e, t, Ie(typeof t == "object" && t ? t.locale : t)), q = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return q;
	},
	apply: () => q
}), Re = () => new Proxy({
	isLoading: !0,
	error: null
}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : q }), ze = (e) => Array.isArray(e) ? Object.assign(e.slice(), {
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
function J(e, t, n) {
	let r = Ee();
	E(r?.variant, t);
	let a = n, o = i(W, (e) => a ?? r?.locale ?? e.locale);
	return i(o, (t, n) => {
		let r = se(e, t);
		if (r) {
			n(ze(Le(r, t)));
			return;
		}
		n(Re());
		let i = !1;
		return (async () => {
			try {
				let r;
				{
					let n = e[t];
					if (!n) return;
					r = Le(await n(), t);
				}
				if (i) return;
				n(ze(r));
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
	}, Re());
}
var Y = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((e) => e.default),
	en: () => import("./intlayer-Layout-1l7x80-en-BtrYBHxl.js").then((e) => e.r).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((e) => e.default)
}, Be = U(), Ve = Y[Be];
typeof window < "u" && typeof Ve == "function" && Ve().then((e) => {
	Y.__intlayerPreloaded = {
		locale: Be,
		dictionary: e
	};
}, () => void 0);
var He = [
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
];
function Ue(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function We(e) {
	return He.includes(e);
}
var Ge = /* @__PURE__ */ new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function Ke(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!We(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Ge.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var X = o(typeof window < "u" ? window.location.pathname : "/en"), qe = i(X, (e) => Ke(e));
function Je(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), X.set(window.location.pathname));
}
var Ye = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), Xe = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), Ze = e.from_html("<li><!></li>"), Qe = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function $e(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(qe, "$route", a), i = () => e.store_get(s, "$footer", a), [a, o] = e.setup_stores(), s = J(Y, "footer"), c = e.derived(() => r().kind === "ok" ? r().locale : "en"), l = e.derived(() => [
		{
			label: i().github,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: i().methodology,
			to: `/${e.get(c)}/about`,
			isInternal: !0
		},
		{
			label: i().contributing,
			to: `/${e.get(c)}/contact`,
			isInternal: !0
		}
	]);
	var u = Qe(), d = e.child(u), f = e.child(d), p = e.child(f), m = e.child(p), h = e.only_child(m, !0), g = e.sibling(m, 2), _ = e.only_child(g, !0);
	e.reset(p);
	var v = e.sibling(p, 2), y = e.child(v), b = e.only_child(y, !0), x = e.sibling(y, 2);
	e.each(x, 21, () => e.get(l), e.index, (t, n) => {
		var r = Ze(), i = e.child(r), a = (t) => {
			var r = Ye(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = Xe(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(x), e.reset(v);
	var S = e.sibling(v, 2), C = e.child(S), w = e.only_child(C, !0), T = e.sibling(C, 2), E = e.only_child(T, !0);
	e.reset(S), e.reset(f);
	var D = e.sibling(f, 2), O = e.only_child(D, !0);
	e.reset(d), e.reset(u), e.template_effect(() => {
		e.set_text(h, i().appName), e.set_text(_, i().description), e.set_text(b, i().resources), e.set_text(w, i().contact), e.set_text(E, i().contactEmail), e.set_text(O, i().footerText);
	}), e.append(t, u), e.pop(), o();
}
var Z = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-Layout-1l7x80-en-BtrYBHxl.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, et = U(), tt = Z[et];
typeof window < "u" && typeof tt == "function" && tt().then((e) => {
	Z.__intlayerPreloaded = {
		locale: et,
		dictionary: e
	};
}, () => void 0);
function nt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var rt = e.from_html("<option> </option>"), it = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function at(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(X, "$pathname", i), [i, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		Je(a(X).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = it(), l = e.child(c);
	e.each(l, 5, () => Se, (e) => e, (t, n) => {
		var r = rt(), i = e.only_child(r, !0), a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = a) ?? "");
		}, [() => Ue(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = u) ?? "", e.select_option(l, u));
	}, [() => r().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var Q = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./intlayer-Layout-1l7x80-en-BtrYBHxl.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, ot = U(), $ = Q[ot];
typeof window < "u" && typeof $ == "function" && $().then((e) => {
	Q.__intlayerPreloaded = {
		locale: ot,
		dictionary: e
	};
}, () => void 0);
var st = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function ct(t, r) {
	e.push(r, !0);
	let i = () => e.store_get(s, "$tt", a), [a, o] = e.setup_stores(), s = J(Q, "theme-toggle");
	function c() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function l(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let u = e.state("auto");
	n(() => {
		let t = c();
		e.set(u, t, !0), l(t);
	}), e.user_effect(() => {
		if (e.get(u) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => l("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function d() {
		let t = e.get(u) === "light" ? "dark" : e.get(u) === "dark" ? "auto" : "light";
		e.set(u, t, !0), l(t), window.localStorage.setItem("theme", t);
	}
	let f = e.derived(() => e.get(u) === "auto" ? i().ariaLabelAuto : e.get(u) === "light" ? i().ariaLabelLight : i().ariaLabelDark), p = e.derived(() => e.get(u) === "auto" ? i().auto : e.get(u) === "dark" ? i().dark : i().light);
	var m = st(), h = e.only_child(m, !0);
	e.template_effect(() => {
		e.set_attribute(m, "aria-label", e.get(f)), e.set_attribute(m, "title", e.get(f)), e.set_text(h, e.get(p));
	}), e.delegated("click", m, d), e.append(t, m), e.pop(), o();
}
e.delegate(["click"]);
var lt = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), ut = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), dt = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function ft(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(qe, "$route", o), i = () => e.store_get(c, "$header", o), [o, s] = e.setup_stores(), c = J(Z, "header");
	nt(a(c).header);
	let u = e.state(!1), d = e.derived(() => r().kind === "ok" ? r().locale : "en"), f = e.derived(() => [
		{
			to: `/${e.get(d)}/products`,
			label: i().products
		},
		{
			to: `/${e.get(d)}/pricing`,
			label: i().pricing
		},
		{
			to: `/${e.get(d)}/team`,
			label: i().team
		},
		{
			to: `/${e.get(d)}/blog`,
			label: i().blog
		},
		{
			to: `/${e.get(d)}/careers`,
			label: i().careers
		},
		{
			to: `/${e.get(d)}/faq`,
			label: i().faq
		},
		{
			to: `/${e.get(d)}/contact`,
			label: i().contact
		},
		{
			to: `/${e.get(d)}/settings`,
			label: i().settings
		}
	]), p = e.derived(() => r().kind === "ok" && r().page === ""), m = e.derived(() => r().kind === "ok" && r().page === "about");
	var h = dt(), g = e.child(h), _ = e.child(g), v = e.child(_), y = e.only_child(v, !0), b = e.sibling(v, 2), x = e.child(b);
	let S;
	var C = e.only_child(x, !0), w = e.sibling(x, 2);
	let T;
	var E = e.only_child(w, !0), D = e.sibling(w, 2), O = e.child(D), k = e.child(O), A = e.sibling(k);
	{
		let t = e.derived(() => e.get(u) ? "transition-transform rotate-180" : "transition-transform");
		l(A, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(O);
	var j = e.sibling(O, 2), M = (t) => {
		var n = ut(), r = e.child(n);
		e.each(r, 21, () => e.get(f), (e) => e.to, (t, n) => {
			var r = lt(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(u, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(u, !0)), e.event("mouseleave", n, () => e.set(u, !1)), e.append(t, n);
	};
	e.if(j, (t) => {
		e.get(u) && t(M);
	}), e.reset(D), e.reset(b), e.reset(_);
	var N = e.sibling(_, 2), P = e.child(N), ee = e.child(P), F = e.only_child(ee, !0);
	e.next(2), e.reset(P);
	var I = e.sibling(P, 2);
	at(I, {}), ct(e.sibling(I, 2), {}), e.reset(N), e.reset(g), e.reset(h), e.template_effect(() => {
		e.set_attribute(v, "href", `/${e.get(d)}`), e.set_text(y, i().appName), e.set_attribute(x, "href", `/${e.get(d)}`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(p) }), e.set_text(C, i().home), e.set_attribute(w, "href", `/${e.get(d)}/about`), T = e.set_class(w, 1, "nav-link", null, T, { "is-active": e.get(m) }), e.set_text(E, i().methodology), e.set_text(k, `${i().mockPages ?? ""} `), e.set_text(F, i().goToGithub);
	}), e.event("mouseenter", O, () => e.set(u, !0)), e.event("mouseleave", O, () => e.set(u, !1)), e.delegated("click", O, () => e.set(u, !e.get(u))), e.append(t, h), e.pop(), s();
}
e.delegate(["click"]);
var pt = e.from_html("<!> <!> <!>", 1);
function mt(t, r) {
	e.push(r, !0);
	let i = ke("en"), a = typeof performance < "u" ? performance.now() : 0;
	n(() => {
		s(), c("AppRoot", a);
	}), e.user_effect(() => {
		i.setLocale(r.locale), document.documentElement.lang = r.locale;
	});
	var o = pt(), l = e.first_child(o);
	ft(l, {});
	var u = e.sibling(l, 2);
	e.snippet(u, () => r.children), $e(e.sibling(u, 2), {}), e.append(t, o), e.pop();
}
export { mt as default };
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
}), r = "footer", i = {
	description: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	footerText: "i18n Benchmark — Open-source project. Built with Svelte, Vite, and a client-side router.",
	appName: "i18n Benchmark",
	contactEmail: "contact@intlayer.org"
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "header", c = {
	home: "Home",
	methodology: "Methodology",
	mockPages: "Mock Pages",
	products: "Products",
	pricing: "Pricing",
	team: "Team",
	blog: "Blog",
	careers: "Careers",
	faq: "FAQ",
	contact: "Contact",
	settings: "Settings",
	appName: "i18n Bench",
	goToGithub: "Go to GitHub",
	header: "Header"
}, l = {
	key: s,
	content: c
}, u = t({
	content: () => f,
	default: () => p,
	key: () => d
}), d = "theme-toggle", f = {
	auto: "Theme: Auto",
	dark: "Theme: Dark",
	light: "Theme: Light",
	ariaLabelAuto: "Theme mode: auto (system). Click to switch to light mode.",
	ariaLabelLight: "Theme mode: light. Click to switch to dark mode.",
	ariaLabelDark: "Theme mode: dark. Click to switch to auto mode."
}, p = {
	key: d,
	content: f
};
export { o as n, n as r, u as t };
