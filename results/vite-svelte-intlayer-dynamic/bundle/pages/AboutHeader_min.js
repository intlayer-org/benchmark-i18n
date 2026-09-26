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
	let { locales: t } = o;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!m) for (let t = 0; t < (s.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(s.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ne = (e = "/", t) => {
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
}, re = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = f(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = l(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ne(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return te() ?? t;
}, h, g, ie = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (g === void 0 || h !== e) && (h = e, g = re()), g;
}, _ = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-AboutHeader-15aksu-en-Di73qyka.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/zh.json").then((e) => e.default)
}, v = ie(), y = _[v];
typeof window < "u" && typeof y == "function" && y().then((e) => {
	_.__intlayerPreloaded = {
		locale: v,
		dictionary: e
	};
}, () => void 0);
var b = o?.defaultLocale, x = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: b });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: b })
	};
})(), ae = Symbol("intlayer"), oe = () => t(ae), S = /* @__PURE__ */ new Map(), se = (e, t) => Object.create(new Proxy(e, {
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
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = S.get(t);
	i || (i = /* @__PURE__ */ new Map(), S.set(t, i));
	let a = i.get(r);
	return a || (a = se(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, le = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, C = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[d];
	if (n && n.locale === t) return n.dictionary;
}, w = "translation", ue = "object", de = "array", T = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, E);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, T(t, e, {
		type: de,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ue,
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
}, D = /* @__PURE__ */ new WeakMap(), O = 0, fe = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, pe = 256, k = /* @__PURE__ */ new WeakMap(), A = (e) => typeof e == "object" && !!e, me = (e, t, n) => `${e}_${t}_${fe(n)}`, he = (e, t) => {
	if (!A(e)) return { hit: !1 };
	let n = k.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, j = (e, t, n) => {
	if (!A(e)) return n;
	let r = k.get(e);
	return r || (r = /* @__PURE__ */ new Map(), k.set(e, r)), r.size >= pe && r.clear(), r.set(t, n), n;
}, ge = (e, t = !0) => [
	z(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	B,
	V(e ?? o.defaultLocale),
	H,
	_e,
	G(e ?? o.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== R), M = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), N = /* @__PURE__ */ new WeakSet(), P = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = me(r ?? o.defaultLocale, "", n), s = he(e, a);
	if (s.hit) return s.content;
	let c = n ?? ge(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !N.has(e)
		};
		N.add(e);
		try {
			return M(e.content, t, c);
		} finally {
			t.eager && N.delete(e);
		}
	};
	return l === null ? j(e, a, null) : Array.isArray(l) ? j(e, a, l.map(u)) : j(e, a, u(l));
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
				type: w,
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
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, ce(e.value, Function.prototype)), n;
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
}, X = (e, t) => P(e, t, Ce(typeof t == "object" && t ? t.locale : t)), Z = new Proxy(() => {}, {
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
	let i = oe();
	le(i?.variant, t);
	let a = n, o = r(x, (e) => a ?? i?.locale ?? e.locale);
	return r(o, (t, n) => {
		let r = C(e, t);
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
var Ee = e.from_html("<h1 class=\"mb-4 text-3xl font-bold text-foreground\"> </h1> <p class=\"mb-8 max-w-3xl text-muted-foreground\"> </p>", 1);
function De(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$content", i), [i, a] = e.setup_stores();
	Te("AboutHeader");
	let o = we(_, "about-header");
	e.init();
	var s = Ee(), c = e.first_child(s), l = e.only_child(c, !0), u = e.sibling(c, 2), d = e.only_child(u, !0);
	e.template_effect(() => {
		e.set_text(l, r().title), e.set_text(d, r().description);
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
}), n = "about-header", r = {
	title: "About This Benchmark",
	description: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page application where different i18n libraries can be integrated and measured under identical conditions."
}, i = {
	key: n,
	content: r
};
export { t };
