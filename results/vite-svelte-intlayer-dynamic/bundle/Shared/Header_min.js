import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, get as n, writable as r } from "svelte/store";
import i from "lucide-svelte/icons/chevron-down";
import { getContext as a, onMount as o } from "svelte";
import "svelte/internal/flags/legacy";
var s = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), c = {
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
}, l = {
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
}, u = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, d = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && u(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, f = ["en"], p = "__intlayerPreloaded", m = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? c?.defaultLocale ?? "en",
	mode: e.mode ?? l?.mode ?? "prefix-no-default",
	locales: e.locales ?? c?.locales ?? f,
	rewrite: e.rewrite ?? l?.rewrite,
	domains: e.domains ?? l?.domains
}), h = (e, t) => !!e && (t ?? c.locales).includes(e), g = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _ = {
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
}, v = (e = _) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!g) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, y = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = m(t);
	if (!n || !r) return n;
	let a = s(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, c = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = c.searchParams.get("locale");
		return h(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let l = c.pathname.split("/")[1];
	if (h(l, r)) return l;
	if (i === "prefix-no-default") return n;
}, b = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = m(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = d(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = y(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return v() ?? t;
}, x, S, C = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (S === void 0 || x !== e) && (x = e, S = b()), S;
}, w = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-11hj08-en-yj0seUZ2.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, T = C(), E = w[T];
typeof window < "u" && typeof E == "function" && E().then((e) => {
	w.__intlayerPreloaded = {
		locale: T,
		dictionary: e
	};
}, () => void 0);
var D = c?.defaultLocale, O = (() => {
	let { subscribe: e, set: n, update: i } = r({ locale: D });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => t({ subscribe: e }, (e) => e.locale),
		reset: () => n({ locale: D })
	};
})(), k = Symbol("intlayer"), A = () => a(k), j = /* @__PURE__ */ new Map(), M = (e, t) => Object.create(new Proxy(e, {
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
}), N = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = j.get(t);
	i || (i = /* @__PURE__ */ new Map(), j.set(t, i));
	let a = i.get(r);
	return a || (a = M(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, P = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, F = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[p];
	if (n && n.locale === t) return n.dictionary;
}, ee = "translation", I = "object", L = "array", R = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), z = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, z);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => z(e, R(t, e, {
		type: L,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: I,
			key: r
		};
		if (t.eager) {
			n[r] = z(e[r], R(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = z(e[r], R(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, te = /* @__PURE__ */ new WeakMap(), ne = 0, re = (e) => {
	if (!e) return "base";
	let t = te.get(e);
	if (t) return t;
	ne += 1;
	let n = `p${ne}`;
	return te.set(e, n), n;
}, ie = 256, B = /* @__PURE__ */ new WeakMap(), ae = (e) => typeof e == "object" && !!e, oe = (e, t, n) => `${e}_${t}_${re(n)}`, se = (e, t) => {
	if (!ae(e)) return { hit: !1 };
	let n = B.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, V = (e, t, n) => {
	if (!ae(e)) return n;
	let r = B.get(e);
	return r || (r = /* @__PURE__ */ new Map(), B.set(e, r)), r.size >= ie && r.clear(), r.set(t, n), n;
}, ce = (e, t = !0) => [
	K(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	q,
	fe(e ?? c.defaultLocale),
	pe,
	me,
	_e(e ?? c.defaultLocale),
	ve,
	he,
	ge
].filter((e) => e !== G), le = (e, t, n = []) => z(e, {
	...t,
	plugins: n
}), H = /* @__PURE__ */ new WeakSet(), ue = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = oe(r ?? c.defaultLocale, "", n), o = se(e, a);
	if (o.hit) return o.content;
	let s = n ?? ce(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !H.has(e)
		};
		H.add(e);
		try {
			return le(e.content, t, s);
		} finally {
			t.eager && H.delete(e);
		}
	};
	return l === null ? V(e, a, null) : Array.isArray(l) ? V(e, a, l.map(u)) : V(e, a, u(l));
}, U = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, W = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !U(e) || !U(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? W(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, de = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => W(e, t));
}, G = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, K = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? G : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = de(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ee,
				key: e
			}]
		});
	}
}, q = G, fe = (e) => G, pe = G, me = G, he = G, ge = G, _e = (e) => G, ve = G;
function J(t, n) {
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
var ye = (e) => {
	let t = !!J.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new J({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => J(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, N(e.value, Function.prototype)), n;
}, be = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ye({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, xe = be, Se = G, Ce = G, we = G, Y = /* @__PURE__ */ new Map(), Te = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		be,
		K(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		q,
		fe(e ?? c.defaultLocale),
		pe,
		_e(e ?? c.defaultLocale),
		ve,
		he,
		ge,
		xe,
		Se,
		Ce,
		we
	].filter((e) => e !== G);
	return Y.set(n, r), r;
}, Ee = (e, t) => ue(e, t, Te(typeof t == "object" && t ? t.locale : t)), X = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return X;
	},
	apply: () => X
}), De = () => new Proxy({
	isLoading: !0,
	error: null
}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : X }), Oe = (e) => Array.isArray(e) ? Object.assign(e.slice(), {
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
function ke(e, n, r) {
	let i = A();
	P(i?.variant, n);
	let a = r, o = t(O, (e) => a ?? i?.locale ?? e.locale);
	return t(o, (t, n) => {
		let r = F(e, t);
		if (r) {
			n(Oe(Ee(r, t)));
			return;
		}
		n(De());
		let i = !1;
		return (async () => {
			try {
				let r;
				{
					let n = e[t];
					if (!n) return;
					r = Ee(await n(), t);
				}
				if (i) return;
				n(Oe(r));
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
	}, De());
}
function Ae(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), o(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var je = [
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
function Me(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Ne(e) {
	return je.includes(e);
}
var Pe = /* @__PURE__ */ new Set([
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
function Fe(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!Ne(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Pe.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Z = r(typeof window < "u" ? window.location.pathname : "/en"), Ie = t(Z, (e) => Fe(e));
function Le(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), Z.set(window.location.pathname));
}
var Re = c.locales;
c.requiredLocales, c.defaultLocale;
var ze = e.from_html("<option> </option>"), Be = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function Ve(t, r) {
	e.push(r, !1);
	let i = () => e.store_get(Z, "$pathname", a), [a, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		Le(n(Z).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = Be(), l = e.child(c);
	e.each(l, 5, () => Re, (e) => e, (t, n) => {
		var r = ze(), i = e.only_child(r, !0), a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = a) ?? "");
		}, [() => Me(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = u) ?? "", e.select_option(l, u));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var Q = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-11hj08-en-yj0seUZ2.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, He = C(), $ = Q[He];
typeof window < "u" && typeof $ == "function" && $().then((e) => {
	Q.__intlayerPreloaded = {
		locale: He,
		dictionary: e
	};
}, () => void 0);
var Ue = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function We(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$tt", i), [i, a] = e.setup_stores(), s = ke(Q, "theme-toggle");
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
	o(() => {
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
	let f = e.derived(() => e.get(u) === "auto" ? r().ariaLabelAuto : e.get(u) === "light" ? r().ariaLabelLight : r().ariaLabelDark), p = e.derived(() => e.get(u) === "auto" ? r().auto : e.get(u) === "dark" ? r().dark : r().light);
	var m = Ue(), h = e.only_child(m, !0);
	e.template_effect(() => {
		e.set_attribute(m, "aria-label", e.get(f)), e.set_attribute(m, "title", e.get(f)), e.set_text(h, e.get(p));
	}), e.delegated("click", m, d), e.append(t, m), e.pop(), a();
}
e.delegate(["click"]);
var Ge = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), Ke = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), qe = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function Je(t, r) {
	e.push(r, !0);
	let a = () => e.store_get(Ie, "$route", s), o = () => e.store_get(l, "$header", s), [s, c] = e.setup_stores(), l = ke(w, "header");
	Ae(n(l).header);
	let u = e.state(!1), d = e.derived(() => a().kind === "ok" ? a().locale : "en"), f = e.derived(() => [
		{
			to: `/${e.get(d)}/products`,
			label: o().products
		},
		{
			to: `/${e.get(d)}/pricing`,
			label: o().pricing
		},
		{
			to: `/${e.get(d)}/team`,
			label: o().team
		},
		{
			to: `/${e.get(d)}/blog`,
			label: o().blog
		},
		{
			to: `/${e.get(d)}/careers`,
			label: o().careers
		},
		{
			to: `/${e.get(d)}/faq`,
			label: o().faq
		},
		{
			to: `/${e.get(d)}/contact`,
			label: o().contact
		},
		{
			to: `/${e.get(d)}/settings`,
			label: o().settings
		}
	]), p = e.derived(() => a().kind === "ok" && a().page === ""), m = e.derived(() => a().kind === "ok" && a().page === "about");
	var h = qe(), g = e.child(h), _ = e.child(g), v = e.child(_), y = e.only_child(v, !0), b = e.sibling(v, 2), x = e.child(b);
	let S;
	var C = e.only_child(x, !0), T = e.sibling(x, 2);
	let E;
	var D = e.only_child(T, !0), O = e.sibling(T, 2), k = e.child(O), A = e.child(k), j = e.sibling(A);
	{
		let t = e.derived(() => e.get(u) ? "transition-transform rotate-180" : "transition-transform");
		i(j, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(k);
	var M = e.sibling(k, 2), N = (t) => {
		var n = Ke(), r = e.child(n);
		e.each(r, 21, () => e.get(f), (e) => e.to, (t, n) => {
			var r = Ge(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(u, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(u, !0)), e.event("mouseleave", n, () => e.set(u, !1)), e.append(t, n);
	};
	e.if(M, (t) => {
		e.get(u) && t(N);
	}), e.reset(O), e.reset(b), e.reset(_);
	var P = e.sibling(_, 2), F = e.child(P), ee = e.child(F), I = e.only_child(ee, !0);
	e.next(2), e.reset(F);
	var L = e.sibling(F, 2);
	Ve(L, {}), We(e.sibling(L, 2), {}), e.reset(P), e.reset(g), e.reset(h), e.template_effect(() => {
		e.set_attribute(v, "href", `/${e.get(d)}`), e.set_text(y, o().appName), e.set_attribute(x, "href", `/${e.get(d)}`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(p) }), e.set_text(C, o().home), e.set_attribute(T, "href", `/${e.get(d)}/about`), E = e.set_class(T, 1, "nav-link", null, E, { "is-active": e.get(m) }), e.set_text(D, o().methodology), e.set_text(A, `${o().mockPages ?? ""} `), e.set_text(I, o().goToGithub);
	}), e.event("mouseenter", k, () => e.set(u, !0)), e.event("mouseleave", k, () => e.set(u, !1)), e.delegated("click", k, () => e.set(u, !e.get(u))), e.append(t, h), e.pop(), c();
}
e.delegate(["click"]);
export { Je as default };
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
}), r = "header", i = {
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
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "theme-toggle", c = {
	auto: "Theme: Auto",
	dark: "Theme: Dark",
	light: "Theme: Light",
	ariaLabelAuto: "Theme mode: auto (system). Click to switch to light mode.",
	ariaLabelLight: "Theme mode: light. Click to switch to dark mode.",
	ariaLabelDark: "Theme mode: dark. Click to switch to auto mode."
}, l = {
	key: s,
	content: c
};
export { n, o as t };
