import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useLayoutEffect as c, useMemo as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
var m = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), h = {
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
}, g = {
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
}, ee = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, _ = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, te = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && _(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, v = ["en"], y = "\x1B[0m", b = "\x1B[34m", ne = "\x1B[31m", re = "\x1B[32m", ie = "\x1B[36m", ae = "__intlayerPreloaded", oe = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? h?.defaultLocale ?? "en",
	mode: e.mode ?? g?.mode ?? "prefix-no-default",
	locales: e.locales ?? h?.locales ?? v,
	rewrite: e.rewrite ?? g?.rewrite,
	domains: e.domains ?? g?.domains
}), se = (e, t) => !!e && (t ?? h.locales).includes(e), ce = (e, t = h?.locales, n = h?.defaultLocale) => {
	if (t?.includes(e)) return e;
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, le = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ue = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = le(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, de = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var x = {
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
}, S = (e = x) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!de) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, fe = !1, pe, me = () => typeof window > "u" ? S(x) : (fe ||= (pe = S(x), !0), pe), he = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (fe = !1, !de && g.storage.cookies)) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: le(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ue(r, e, i));
			} catch {}
		}
	}
}, ge = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = oe(t);
	if (!n || !r) return n;
	let a = m(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return se(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (se(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, _e = 50, ve = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Set(), be = (e) => {
	ye.has(e) || (ye.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, xe = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, Se = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (be(e), xe[e]);
};
function C(e, t, n) {
	let r = t ?? h?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ve.get(a);
	o || (o = /* @__PURE__ */ new Map(), ve.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Se(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > _e && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ce = (e) => e, we = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ce(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Te = (e, t) => (n, r) => we(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), w = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? y : n : y}` : e;
w("✗", ne), w("✓", re), w("⏲", b);
var Ee = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = oe(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ge(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return S() ?? t;
}, T, E, D = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (E === void 0 || T !== e) && (T = e, E = Ee()), E;
}, O = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/de.json").then((e) => e.default),
	en: () => import("./intlayer-Hero-wrapper-ymmi0u-en-B7KoHrmn.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/zh.json").then((e) => e.default)
}, k = D(), A = O[k];
typeof window < "u" && typeof A == "function" && A().then((e) => {
	O.__intlayerPreloaded = {
		locale: k,
		dictionary: e
	};
}, () => void 0);
var j = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-Hero-wrapper-ymmi0u-en-B7KoHrmn.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, M = D(), N = j[M];
typeof window < "u" && typeof N == "function" && N().then((e) => {
	j.__intlayerPreloaded = {
		locale: M,
		dictionary: e
	};
}, () => void 0);
var P = /* @__PURE__ */ new WeakMap(), F = 0, De = (e) => {
	if (!e) return "base";
	let t = P.get(e);
	if (t) return t;
	F += 1;
	let n = `p${F}`;
	return P.set(e, n), n;
}, Oe = 256, I = /* @__PURE__ */ new WeakMap(), L = (e) => typeof e == "object" && !!e, ke = (e, t, n) => `${e}_${t}_${De(n)}`, Ae = (e, t) => {
	if (!L(e)) return { hit: !1 };
	let n = I.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, R = (e, t, n) => {
	if (!L(e)) return n;
	let r = I.get(e);
	return r || (r = /* @__PURE__ */ new Map(), I.set(e, r)), r.size >= Oe && r.clear(), r.set(t, n), n;
}, je = "translation", Me = "enumeration", Ne = "plural", Pe = "condition", z = "insertion", Fe = "object", Ie = "array", Le = "markdown", B = "html", Re = "gender", ze = "select", V = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), H = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, H);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => H(e, V(t, e, {
		type: Ie,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Fe,
			key: r
		};
		if (t.eager) {
			n[r] = H(e[r], V(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = H(e[r], V(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Be = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ve = (e, t) => e[Be(e, t) ?? "fallback"], He = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Ue = (e, t, n) => e[C("PluralRules", n).select(t)] ?? e.other, We = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, U = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ge = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !U(e) || !U(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? Ge(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ke = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => Ge(e, t));
}, W = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, qe = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[B] : e[Le];
}, Je = (e, t) => {
	if (typeof e == "string") return t;
	if (W(e)) {
		let n = e.nodeType === "html" ? B : Le;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ye = (e, t, n, r, i) => {
	let a = Je(e, He(qe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, G = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Xe = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Ze = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? G : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ke(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: je,
				key: e
			}]
		});
	}
}, Qe = G, $e = (e) => G, et = G, tt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => Ye(e, i, n, t.plugins, r);
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
		return it(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, nt = [
	Me,
	Pe,
	Ne,
	Re,
	ze
], rt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !nt.includes(i)) return t;
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
		return !r && Xe(i) ? i(n) : i;
	};
}, it = (e, t) => typeof t == "function" && nt.includes(e?.nodeType ?? "") ? (n) => rt(e, t, n) : t, at = G, ot = G, st = (e) => G, ct = G, lt = (e, t = !0) => [
	Ze(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	Qe,
	$e(e ?? h.defaultLocale),
	et,
	tt,
	st(e ?? h.defaultLocale),
	ct,
	at,
	ot
].filter((e) => e !== G), ut = (e, t, n = []) => H(e, {
	...t,
	plugins: n
}), K = /* @__PURE__ */ new WeakSet(), dt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ke(r ?? h.defaultLocale, "", n), o = Ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? lt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !K.has(e)
		};
		K.add(e);
		try {
			return ut(e.content, t, s);
		} finally {
			t.eager && K.delete(e);
		}
	};
	return c === null ? R(e, a, null) : Array.isArray(c) ? R(e, a, c.map(l)) : R(e, a, l(c));
}, ft = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ae];
	if (n && n.locale === t) return n.dictionary;
}, pt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", mt = /\{\{\s*(.*?)\s*\}\}/g, ht = (e, t = {}) => {
	if (!Object.values(t).some(pt)) return {
		isSimple: !0,
		parts: e.replace(mt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(mt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, gt = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, _t = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], q = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, vt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? C("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? C("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : C("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return C("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, yt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? vt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : vt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), J = (e, t) => e[t] ?? e.count ?? e.n, Y = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return yt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Y(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Y(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Y(r[z], t, n);
	if (r.nodeType === "html") return Y(r[B], t, n);
	if (r.nodeType === "plural") {
		let e = r[Ne];
		return Y(Ue(e, Number(J(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Me], i = _t.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) _t.includes(t) || (o[t] = n);
		let s = J(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = C("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Y(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ze], i = J(t, typeof r.variable == "string" ? r.variable : "value");
		return Y(We(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Re];
		return Y(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, bt = (e, t = {}, n = "en") => {
	let r = Y(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, X = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: X(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, xt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, St = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = St(e.children, n), a = n[e.tag];
	return typeof a == "function" ? f(t, { children: a(i) }, r) : f(t, { children: i }, r);
}), Ct = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Ct(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), wt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Tt(e, (e) => gt(t, r(e)), r);
}, Tt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return bt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = xt(t), o = r(e, i);
			return o === void 0 ? n(e) : f(d, { children: St(X(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = xt(t), o = r(e, i);
			return o === void 0 ? n(e) : Ct(X(o), a);
		}
	});
}, Et = (e) => {
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
}, Z = /* @__PURE__ */ new Map(), Dt = (e, t) => (Z.has(e) || Z.set(e, Et(t)), Z.get(e).read()), Ot = /* @__PURE__ */ new Map(), kt = (e, t) => Object.create(new Proxy(e, {
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
}), At = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Ot.get(t);
	i || (i = /* @__PURE__ */ new Map(), Ot.set(t, i));
	let a = i.get(r);
	return a || (a = kt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, jt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : f(d, { children: e }),
	value: t,
	...n
}, At(t)), Mt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => jt({
		value: t.children,
		children: t.children
	})
}, Nt = G, Pt = (e, n) => {
	let i = ht(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Ft = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => Ye(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Pt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return it(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, It = G, Lt = G, Q = /* @__PURE__ */ new Map(), Rt = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Mt,
		Ze(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		Qe,
		$e(e ?? h.defaultLocale),
		et,
		st(e ?? h.defaultLocale),
		ct,
		at,
		ot,
		Nt,
		Ft,
		It,
		Lt
	].filter((e) => e !== G);
	return Q.set(n, r), r;
}, zt = (e, t) => dt(e, t, Rt(typeof t == "object" && t ? t.locale : t)), Bt = me, Vt = (e, t) => he(e, {
	...x,
	isCookieEnabled: t
}), Ht = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = n({
	get locale() {
		return Bt() ?? h?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ut = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: d, defaultLocale: p } = h ?? {}, [m, g] = u(() => e ?? Bt() ?? t ?? p), [ee, _] = u(e);
	e !== ee && (_(e), e && e !== m && g(e)), s(() => {
		Ht();
	}, []);
	let te = a((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Vt(e, c);
		}
	}, [
		m,
		d,
		c
	]), v = i ?? te, y = ce(m), b = l(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: o
	}), [
		y,
		v,
		n,
		o
	]);
	return f($.Provider, {
		value: b,
		children: r
	});
}, Wt = ({ children: e, ...t }) => p(Ut, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Gt = (e, t, n) => {
	let { locale: r, variant: i } = o($) ?? {}, { locale: a, selector: s } = {
		locale: n,
		selector: void 0
	}, c = a ?? r ?? h.defaultLocale, l = ft(e, c);
	if (l) return zt(l, c);
	let u = e;
	return zt(Dt(`${String(t)}.${c}`, u[c]?.()), c);
}, Kt = ((e, t, n) => {
	let { locale: r } = o($) ?? {};
	return wt(r, Gt(e, t), n);
}), qt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Te({ log: ee })(`${w("IntlProvider", ie)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), f(Wt, {
	locale: e,
	children: t
}, String(e)));
function Jt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), c(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function Yt() {
	let e = Kt(O, "hero"), t = Kt(j, "header");
	return Jt("Hero"), p("section", {
		className: "mb-16 text-center",
		children: [
			f("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			f("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: e("aTestApplicationDesignedTo")
			}),
			p("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [f("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e("viewResults")
				}), f("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: t("methodology")
				})]
			})
		]
	});
}
function Xt({ children: t }) {
	return f(e.Suspense, {
		fallback: null,
		children: f(qt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Zt() {
	return f(Xt, { children: f(Yt, {}) });
}
export { Zt as default };
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
	goToGithub: "Go to GitHub"
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "hero", c = {
	aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results"
}, l = {
	key: s,
	content: c
};
export { n, o as t };
