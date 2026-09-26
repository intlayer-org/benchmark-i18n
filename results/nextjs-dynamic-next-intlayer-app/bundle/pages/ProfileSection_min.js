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
}, oe = !1, _, se = () => typeof window > "u" ? g(h) : (oe ||= (_ = g(h), !0), _), ce = (e = "/", t) => {
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
}, le = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = p(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ce(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return g() ?? t;
}, v, y, ue = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (y === void 0 || v !== e) && (v = e, y = le()), y;
}, b = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProfileSection-wrapper-1ro3od-en-CmZBFZ6X.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/zh.json").then((e) => e.default)
}, x = ue(), S = b[x];
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
}, me(t)), T = /* @__PURE__ */ new WeakMap(), E = 0, ge = (e) => {
	if (!e) return "base";
	let t = T.get(e);
	if (t) return t;
	E += 1;
	let n = `p${E}`;
	return T.set(e, n), n;
}, _e = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, ve = (e, t, n) => `${e}_${t}_${ge(n)}`, ye = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= _e && r.clear(), r.set(t, n), n;
}, be = "translation", xe = "enumeration", Se = "plural", Ce = "condition", A = "insertion", we = "object", Te = "array", j = "markdown", M = "html", Ee = "gender", De = "select", N = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), P = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, P);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => P(e, N(t, e, {
		type: Te,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: we,
			key: r
		};
		if (t.eager) {
			n[r] = P(e[r], N(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = P(e[r], N(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, F = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !I(e) || !I(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? L(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Oe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => L(e, t));
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ke = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[M] : e[j];
}, Ae = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? M : j;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, z = (e, t, n, r, i) => {
	let a = Ae(e, F(ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, je = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Oe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: be,
				key: e
			}]
		});
	}
}, H = B, U = (e) => B, W = B, Me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? B : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => z(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = F(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return K(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, G = [
	xe,
	Ce,
	Se,
	Ee,
	De
], Ne = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !G.includes(i)) return t;
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
		return !r && je(i) ? i(n) : i;
	};
}, K = (e, t) => typeof t == "function" && G.includes(e?.nodeType ?? "") ? (n) => Ne(e, t, n) : t, q = B, J = B, Y = (e) => B, X = B, Pe = (e, t = !0) => [
	V(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	H,
	U(e ?? d.defaultLocale),
	W,
	Me,
	Y(e ?? d.defaultLocale),
	X,
	q,
	J
].filter((e) => e !== B), Fe = (e, t, n = []) => P(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), Ie = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ve(r ?? d.defaultLocale, "", n), o = ye(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pe(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return Fe(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, Le = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, Re = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Q = /\{\{\s*(.*?)\s*\}\}/g, ze = (e, t = {}) => {
	if (!Object.values(t).some(Re)) return {
		isSimple: !0,
		parts: e.replace(Q, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Q), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Be = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => he({
		value: t.children,
		children: t.children
	})
}, Ve = B, He = (t, r) => {
	let i = ze(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ue = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? B : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => z(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = He(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return K(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, We = B, Ge = B, $ = /* @__PURE__ */ new Map(), Ke = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Be,
		V(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		H,
		U(e ?? d.defaultLocale),
		W,
		Y(e ?? d.defaultLocale),
		X,
		q,
		J,
		Ve,
		Ue,
		We,
		Ge
	].filter((e) => e !== B);
	return $.set(n, r), r;
}, qe = (e, t) => Ie(e, t, Ke(typeof t == "object" && t ? t.locale : t)), Je = se, Ye = t({
	get locale() {
		return Je() ?? d?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Xe = (e, t, n) => {
	let { locale: r, variant: a } = i(Ye) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? d.defaultLocale, l = Le(e, c);
	if (l) return qe(l, c);
	let u = e;
	return qe(fe(`${String(t)}.${c}`, u[c]?.()), c);
};
function Ze() {
	let e = Xe(b, "profile-section"), t = "display-name", n = "email";
	return u("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [l("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e.c
		}), u("div", {
			className: "space-y-4",
			children: [u("div", { children: [l("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e.a
			}), l("input", {
				id: t,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), u("div", { children: [l("label", {
				htmlFor: n,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e.b
			}), l("input", {
				id: n,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
function Qe() {
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
function $e(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function et({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		$e("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Qe();
	}, []), e;
}
function tt({ children: e }) {
	return l(et, {
		locale: "en",
		children: e
	});
}
function nt() {
	return l(tt, { children: l(Ze, {}) });
}
export { nt as default };
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
}), n = "profile-section", r = {
	a: "Display Name",
	c: "Profile",
	b: "Email"
}, i = {
	key: n,
	content: r
};
export { t };
