import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var ee = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), p = {
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
}, m = {
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
}, h = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, te = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, g = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && te(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, _ = ["en"], v = "\x1B[0m", y = "\x1B[34m", ne = "\x1B[31m", re = "\x1B[32m", ie = "\x1B[38;5;3m", ae = "\x1B[36m", oe = "__intlayerPreloaded", se = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? _,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), ce = (e, t) => !!e && (t ?? p.locales).includes(e), le = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, b = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ue = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = b(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, x = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var S = {
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
}, C = (e = S) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!x) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, de = !1, fe, pe = () => typeof window > "u" ? C(S) : (de ||= (fe = C(S), !0), fe), me = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (de = !1, !x && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: b(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ue(r, e, i));
			} catch {}
		}
	}
}, he = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = se(t);
	if (!n || !r) return n;
	let a = ee(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ce(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ce(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ge = 50, _e = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Set(), ye = (e) => {
	ve.has(e) || (ve.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, be = {
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
}, xe = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (ye(e), be[e]);
};
function w(e, t, n) {
	let r = t ?? p?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = _e.get(a);
	o || (o = /* @__PURE__ */ new Map(), _e.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? xe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ge && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Se = (e) => e, Ce = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Se(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, we = (e, t) => (n, r) => Ce(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), T = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e, Te = (e, t = ie, n = v) => [e].flat().map((e) => T(e, t, n)).join(", ");
T("✗", ne), T("✓", re), T("⏲", y);
var Ee = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = se(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = g(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = he(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, De, E, Oe = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (E === void 0 || De !== e) && (De = e, E = Ee()), E;
}, D = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-SettingsHeader-wrapper-igvnle-en-CBtZMyQu.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, ke = Oe(), Ae = D[ke];
typeof window < "u" && typeof Ae == "function" && Ae().then((e) => {
	D.__intlayerPreloaded = {
		locale: ke,
		dictionary: e
	};
}, () => void 0);
var O = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-SettingsHeader-wrapper-igvnle-en-CBtZMyQu.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/zh.json").then((e) => e.default)
}, je = Oe(), Me = O[je];
typeof window < "u" && typeof Me == "function" && Me().then((e) => {
	O.__intlayerPreloaded = {
		locale: je,
		dictionary: e
	};
}, () => void 0);
var k = /* @__PURE__ */ new WeakMap(), A = 0, Ne = (e) => {
	if (!e) return "base";
	let t = k.get(e);
	if (t) return t;
	A += 1;
	let n = `p${A}`;
	return k.set(e, n), n;
}, Pe = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, Fe = (e, t, n) => `${e}_${t}_${Ne(n)}`, Ie = (e, t) => {
	if (!M(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, N = (e, t, n) => {
	if (!M(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= Pe && r.clear(), r.set(t, n), n;
}, Le = "translation", P = "enumeration", F = "plural", Re = "condition", I = "insertion", ze = "object", Be = "array", L = "markdown", R = "html", z = "gender", Ve = "select", B = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), V = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, V);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => V(e, B(t, e, {
		type: Be,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ze,
			key: r
		};
		if (t.eager) {
			n[r] = V(e[r], B(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = V(e[r], B(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, He = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ue = (e, t) => e[He(e, t) ?? "fallback"], We = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Ge = () => ({}), Ke = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), qe = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ke.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : qe(e ? `${e}.${String(n)}` : String(n)) }), Je = /* @__PURE__ */ new Set(), Ye = (e, t, n) => {
	let r = Ge()[e];
	return r ? yt(r, t, n) : (Je.has(e) || (we({ log: h })(typeof window > "u" ? `Dictionary ${Te(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Je.add(e)), qe(e));
}, Xe = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, Ze = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Qe = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, $e = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Qe(e) || !Qe(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? $e(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, et = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => $e(e, t));
}, H = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, tt = (e) => {
	if (typeof e == "string") return e;
	if (H(e)) return e.nodeType === "html" ? e[R] : e[L];
}, nt = (e, t) => {
	if (typeof e == "string") return t;
	if (H(e)) {
		let n = e.nodeType === "html" ? R : L;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, rt = (e, t, n, r, i) => {
	let a = nt(e, We(tt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, it = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, at = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? U : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = et(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Le,
				key: e
			}]
		});
	}
}, ot = U, st = (e) => U, ct = U, lt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: I }], i = e[I], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => rt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = We(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return ft(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, ut = [
	P,
	Re,
	F,
	z,
	Ve
], dt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !ut.includes(i)) return t;
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
		return !r && it(i) ? i(n) : i;
	};
}, ft = (e, t) => typeof t == "function" && ut.includes(e?.nodeType ?? "") ? (n) => dt(e, t, n) : t, pt = U, mt = U, ht = (e) => U, gt = U, _t = (e, t = !0) => [
	at(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	ot,
	st(e ?? p.defaultLocale),
	ct,
	lt,
	ht(e ?? p.defaultLocale),
	gt,
	pt,
	mt
].filter((e) => e !== U), vt = (e, t, n = []) => V(e, {
	...t,
	plugins: n
}), W = /* @__PURE__ */ new WeakSet(), yt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Fe(r ?? p.defaultLocale, "", n), o = Ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? _t(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !W.has(e)
		};
		W.add(e);
		try {
			return vt(e.content, t, s);
		} finally {
			t.eager && W.delete(e);
		}
	};
	return c === null ? N(e, a, null) : Array.isArray(c) ? N(e, a, c.map(l)) : N(e, a, l(c));
}, bt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[oe];
	if (n && n.locale === t) return n.dictionary;
}, xt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", St = /\{\{\s*(.*?)\s*\}\}/g, Ct = (e, t = {}) => {
	if (!Object.values(t).some(xt)) return {
		isSimple: !0,
		parts: e.replace(St, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(St), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, G = (e, t, n = ".") => {
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
}, wt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Tt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? w("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? w("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : w("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return w("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? Tt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : Tt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[I], t, n);
	if (r.nodeType === "html") return J(r[R], t, n);
	if (r.nodeType === "plural") {
		let e = r[F];
		return J(Xe(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[P], i = wt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) wt.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ue(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ve], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Ze(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[z];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Dt = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Y(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, X = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Ot = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Ot(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), kt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = kt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), At = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Nt(e, (t) => jt(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, jt = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = Ge();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = G(Ye(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return G(Ye(i, e), a);
	} catch {
		return;
	}
}, Mt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Nt(e, (e) => G(t, r(e)), r);
}, Nt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Dt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = X(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: Ot(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = X(t), o = r(e, i);
			return o === void 0 ? n(e) : kt(Y(o), a);
		}
	});
}, Pt = (e) => {
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
}, Z = /* @__PURE__ */ new Map(), Ft = (e, t) => (Z.has(e) || Z.set(e, Pt(t)), Z.get(e).read()), It = /* @__PURE__ */ new Map(), Lt = (e, t) => Object.create(new Proxy(e, {
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
}), Rt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = It.get(t);
	i || (i = /* @__PURE__ */ new Map(), It.set(t, i));
	let a = i.get(r);
	return a || (a = Lt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, zt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, Rt(t)), Bt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => zt({
		value: t.children,
		children: t.children
	})
}, Vt = U, Ht = (e, n) => {
	let i = Ct(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: I }], i = e[I], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => rt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ht(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return ft(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Wt = U, Gt = U, Q = /* @__PURE__ */ new Map(), Kt = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Bt,
		at(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		ot,
		st(e ?? p.defaultLocale),
		ct,
		ht(e ?? p.defaultLocale),
		gt,
		pt,
		mt,
		Vt,
		Ut,
		Wt,
		Gt
	].filter((e) => e !== U);
	return Q.set(n, r), r;
}, qt = (e, t) => yt(e, t, Kt(typeof t == "object" && t ? t.locale : t)), Jt = pe, Yt = (e, t) => me(e, {
	...S,
	isCookieEnabled: t
}), Xt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = n({
	get locale() {
		return Jt() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Zt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = p ?? {}, [m, h] = l(() => e ?? Jt() ?? t ?? ee), [te, g] = l(e);
	e !== te && (g(e), e && e !== m && h(e)), s(() => {
		Xt();
	}, []);
	let _ = a((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), Yt(e, u);
		}
	}, [
		m,
		f,
		u
	]), v = i ?? _, y = le(m), ne = c(() => ({
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
	return d($.Provider, {
		value: ne,
		children: r
	});
}, Qt = ({ children: e, ...t }) => f(Zt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), $t = (e, t, n) => {
	let { locale: r, variant: i } = o($) ?? {}, { locale: a, selector: s } = {
		locale: n,
		selector: void 0
	}, c = a ?? r ?? p.defaultLocale, l = bt(e, c);
	if (l) return qt(l, c);
	let u = e;
	return qt(Ft(`${String(t)}.${c}`, u[c]?.()), c);
}, en = ((e, t, n) => {
	let { locale: r } = o($) ?? {};
	return Mt(r, $t(e, t), n);
}), tn = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && we({ log: h })(`${T("IntlProvider", ae)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(Qt, {
	locale: e,
	children: t
}, String(e))), nn = ((e) => {
	let { locale: t } = o($) ?? {};
	return c(() => At(t, e), [t, e]);
}), rn = () => {
	let e = nn();
	return d("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	});
};
function an() {
	let e = en(D, "header"), t = en(O, "settings-header");
	return f(u, { children: [
		d(rn, {}),
		d("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("settings")
		}),
		d("p", {
			className: "mb-8 text-muted-foreground",
			children: t("manageYourAccountPreferencesAnd")
		})
	] });
}
function on({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(tn, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function sn() {
	return d(on, { children: d(an, {}) });
}
export { sn as default };
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
}), s = "settings-header", c = { manageYourAccountPreferencesAnd: "Manage your account preferences and configuration." }, l = {
	key: s,
	content: c
};
export { n, o as t };
