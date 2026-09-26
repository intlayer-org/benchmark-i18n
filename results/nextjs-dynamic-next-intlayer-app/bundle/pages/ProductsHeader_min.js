import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
var ee = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), d = {
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
}, f = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, te = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ne = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && te(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, re = ["en"], ie = "__intlayerPreloaded", p = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? d?.defaultLocale ?? "en",
	mode: e.mode ?? f?.mode ?? "prefix-no-default",
	locales: e.locales ?? d?.locales ?? re,
	rewrite: e.rewrite ?? f?.rewrite,
	domains: e.domains ?? f?.domains
}), m = (e, t) => !!e && (t ?? d.locales).includes(e), ae = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ae) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, oe = !1, se, ce = () => typeof window > "u" ? g(h) : (oe ||= (se = g(h), !0), se), le = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = p(t);
	if (!n || !r) return n;
	let a = ee(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return m(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (m(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ue = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = p(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = le(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return g() ?? t;
}, _, v, y = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (v === void 0 || _ !== e) && (_ = e, v = ue()), v;
}, b = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProductsHeader-wrapper-iahoxt-en-Dtef3jty.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/zh.json").then((e) => e.default)
}, x = y(), S = b[x];
typeof window < "u" && typeof S == "function" && S().then((e) => {
	b.__intlayerPreloaded = {
		locale: x,
		dictionary: e
	};
}, () => void 0);
var de = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return {
		settled: r,
		read() {
			if (t === "pending") throw r;
			if (t === "error") throw n;
			return n;
		}
	};
}, C = /* @__PURE__ */ new Map(), fe = (e, t) => (C.has(e) || C.set(e, de(t)), C.get(e).read()), w = /* @__PURE__ */ new Map(), pe = (e, t) => Object.create(new Proxy(e, {
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
}), me = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = w.get(t);
	i || (i = /* @__PURE__ */ new Map(), w.set(t, i));
	let a = i.get(r);
	return a || (a = pe(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, he = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : l(c, { children: e }),
	value: t,
	...n
}, me(t)), T = /* @__PURE__ */ new WeakMap(), ge = 0, _e = (e) => {
	if (!e) return "base";
	let t = T.get(e);
	if (t) return t;
	ge += 1;
	let n = `p${ge}`;
	return T.set(e, n), n;
}, ve = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, ye = (e, t, n) => `${e}_${t}_${_e(n)}`, be = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= ve && r.clear(), r.set(t, n), n;
}, xe = "translation", Se = "enumeration", Ce = "plural", we = "condition", k = "insertion", Te = "object", Ee = "array", A = "markdown", j = "html", De = "gender", Oe = "select", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
		type: Ee,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Te,
			key: r
		};
		if (t.eager) {
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), F = (e) => {
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
}, ke = (e, t, n) => {
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
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ae = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[j] : e[A];
}, je = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? j : A;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = je(e, P(Ae(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Me = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ke(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: xe,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, Ne = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = P(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	Se,
	we,
	Ce,
	De,
	Oe
], Pe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && Me(i) ? i(n) : i;
	};
}, G = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => Pe(e, t, n) : t, K = z, q = z, J = (e) => z, Y = z, Fe = (e, t = !0) => [
	B(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	V,
	H(e ?? d.defaultLocale),
	U,
	Ne,
	J(e ?? d.defaultLocale),
	Y,
	K,
	q
].filter((e) => e !== z), Ie = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), Le = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ye(r ?? d.defaultLocale, "", n), o = be(e, a);
	if (o.hit) return o.content;
	let s = n ?? Fe(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return Ie(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, Re = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, ze = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, Be = (e, t = {}) => {
	if (!Object.values(t).some(ze)) return {
		isSimple: !0,
		parts: e.replace(Z, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Z), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ve = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => he({
		value: t.children,
		children: t.children
	})
}, He = z, Ue = (t, r) => {
	let i = Be(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, We = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ue(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ge = z, Ke = z, Q = /* @__PURE__ */ new Map(), qe = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Ve,
		B(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		V,
		H(e ?? d.defaultLocale),
		U,
		J(e ?? d.defaultLocale),
		Y,
		K,
		q,
		He,
		We,
		Ge,
		Ke
	].filter((e) => e !== z);
	return Q.set(n, r), r;
}, Je = (e, t) => Le(e, t, qe(typeof t == "object" && t ? t.locale : t)), Ye = ce, Xe = t({
	get locale() {
		return Ye() ?? d?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ze = (e, t, n) => {
	let { locale: r, variant: a } = i(Xe) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? d.defaultLocale, l = Re(e, c);
	if (l) return Je(l, c);
	let u = e;
	return Je(fe(`${String(t)}.${c}`, u[c]?.()), c);
}, $ = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProductsHeader-wrapper-iahoxt-en-Dtef3jty.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/zh.json").then((e) => e.default)
}, Qe = y(), $e = $[Qe];
typeof window < "u" && typeof $e == "function" && $e().then((e) => {
	$.__intlayerPreloaded = {
		locale: Qe,
		dictionary: e
	};
}, () => void 0);
var et = () => {
	let e = Ze($, "mock-banner");
	return l("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.a
	});
};
function tt() {
	let e = Ze(b, "products-header");
	return u(c, { children: [
		l(et, {}),
		l("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e.a
		}),
		l("p", {
			className: "mb-10 text-muted-foreground",
			children: e.b
		})
	] });
}
function nt() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function rt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function it({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		rt("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		nt();
	}, []), e;
}
function at({ children: e }) {
	return l(it, {
		locale: "en",
		children: e
	});
}
function ot() {
	return l(at, { children: l(tt, {}) });
}
export { ot as default };
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
}), r = "mock-banner", i = { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "products-header", c = {
	b: "Tools and services to streamline your internationalization workflow.",
	a: "Products"
}, l = {
	key: s,
	content: c
};
export { n, o as t };
