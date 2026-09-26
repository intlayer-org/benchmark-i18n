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
}, h = (e = m) => {
	let { locales: t } = a;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!p) for (let t = 0; t < (o.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(o.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, g = (e = "/", t) => {
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
}, _ = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = d(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = c(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = g(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return h() ?? t;
}, v, y, b = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (y === void 0 || v !== e) && (v = e, y = _()), y;
}, x = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((e) => e.default),
	en: () => import("./intlayer-Footer-pyxtuu-en-OW5crLxA.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((e) => e.default)
}, S = b(), C = x[S];
typeof window < "u" && typeof C == "function" && C().then((e) => {
	x.__intlayerPreloaded = {
		locale: S,
		dictionary: e
	};
}, () => void 0);
var w = a?.defaultLocale, T = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: w });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: w })
	};
})(), E = Symbol("intlayer"), D = () => t(E), O = /* @__PURE__ */ new Map(), k = (e, t) => Object.create(new Proxy(e, {
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
}), ee = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = O.get(t);
	i || (i = /* @__PURE__ */ new Map(), O.set(t, i));
	let a = i.get(r);
	return a || (a = k(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, te = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, ne = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[u];
	if (n && n.locale === t) return n.dictionary;
}, re = "translation", ie = "object", ae = "array", A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
		type: ae,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ie,
			key: r
		};
		if (t.eager) {
			n[r] = j(e[r], A(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = j(e[r], A(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, oe = /* @__PURE__ */ new WeakMap(), M = 0, se = (e) => {
	if (!e) return "base";
	let t = oe.get(e);
	if (t) return t;
	M += 1;
	let n = `p${M}`;
	return oe.set(e, n), n;
}, ce = 256, N = /* @__PURE__ */ new WeakMap(), P = (e) => typeof e == "object" && !!e, le = (e, t, n) => `${e}_${t}_${se(n)}`, ue = (e, t) => {
	if (!P(e)) return { hit: !1 };
	let n = N.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!P(e)) return n;
	let r = N.get(e);
	return r || (r = /* @__PURE__ */ new Map(), N.set(e, r)), r.size >= ce && r.clear(), r.set(t, n), n;
}, de = (e, t = !0) => [
	B(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	V,
	H(e ?? a.defaultLocale),
	U,
	he,
	K(e ?? a.defaultLocale),
	q,
	W,
	G
].filter((e) => e !== z), fe = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), I = /* @__PURE__ */ new WeakSet(), pe = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = le(r ?? a.defaultLocale, "", n), s = ue(e, o);
	if (s.hit) return s.content;
	let c = n ?? de(r), l = e, u = (e) => {
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
			return fe(e.content, t, c);
		} finally {
			t.eager && I.delete(e);
		}
	};
	return l === null ? F(e, o, null) : Array.isArray(l) ? F(e, o, l.map(u)) : F(e, o, u(l));
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
}, me = (e, t, n) => {
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
		let a = me(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: re,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, he = z, W = z, G = z, K = (e) => z, q = z;
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
var ge = (e) => {
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
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, ee(e.value, Function.prototype)), n;
}, Y = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ge({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, _e = Y, ve = z, ye = z, be = z, X = /* @__PURE__ */ new Map(), xe = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Y,
		B(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		V,
		H(e ?? a.defaultLocale),
		U,
		K(e ?? a.defaultLocale),
		q,
		W,
		G,
		_e,
		ve,
		ye,
		be
	].filter((e) => e !== z);
	return X.set(n, r), r;
}, Z = (e, t) => pe(e, t, xe(typeof t == "object" && t ? t.locale : t)), Q = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return Q;
	},
	apply: () => Q
}), $ = () => new Proxy({
	isLoading: !0,
	error: null
}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : Q }), Se = (e) => Array.isArray(e) ? Object.assign(e.slice(), {
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
function Ce(e, t, r) {
	let i = D();
	te(i?.variant, t);
	let a = r, o = n(T, (e) => a ?? i?.locale ?? e.locale);
	return n(o, (t, n) => {
		let r = ne(e, t);
		if (r) {
			n(Se(Z(r, t)));
			return;
		}
		n($());
		let i = !1;
		return (async () => {
			try {
				let r;
				{
					let n = e[t];
					if (!n) return;
					r = Z(await n(), t);
				}
				if (i) return;
				n(Se(r));
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
	}, $());
}
var we = [
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
function Te(e) {
	return we.includes(e);
}
var Ee = /* @__PURE__ */ new Set([
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
function De(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!Te(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Ee.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Oe = r(typeof window < "u" ? window.location.pathname : "/en"), ke = n(Oe, (e) => De(e)), Ae = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), je = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), Me = e.from_html("<li><!></li>"), Ne = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function Pe(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(ke, "$route", a), i = () => e.store_get(s, "$footer", a), [a, o] = e.setup_stores(), s = Ce(x, "footer"), c = e.derived(() => r().kind === "ok" ? r().locale : "en"), l = e.derived(() => [
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
	var u = Ne(), d = e.child(u), f = e.child(d), p = e.child(f), m = e.child(p), h = e.only_child(m, !0), g = e.sibling(m, 2), _ = e.only_child(g, !0);
	e.reset(p);
	var v = e.sibling(p, 2), y = e.child(v), b = e.only_child(y, !0), S = e.sibling(y, 2);
	e.each(S, 21, () => e.get(l), e.index, (t, n) => {
		var r = Me(), i = e.child(r), a = (t) => {
			var r = Ae(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = je(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(S), e.reset(v);
	var C = e.sibling(v, 2), w = e.child(C), T = e.only_child(w, !0), E = e.sibling(w, 2), D = e.only_child(E, !0);
	e.reset(C), e.reset(f);
	var O = e.sibling(f, 2), k = e.only_child(O, !0);
	e.reset(d), e.reset(u), e.template_effect(() => {
		e.set_text(h, i().appName), e.set_text(_, i().description), e.set_text(b, i().resources), e.set_text(T, i().contact), e.set_text(D, i().contactEmail), e.set_text(k, i().footerText);
	}), e.append(t, u), e.pop(), o();
}
export { Pe as default };
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
}), n = "footer", r = {
	description: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	footerText: "i18n Benchmark — Open-source project. Built with Svelte, Vite, and a client-side router.",
	appName: "i18n Benchmark",
	contactEmail: "contact@intlayer.org"
}, i = {
	key: n,
	content: r
};
export { t };
