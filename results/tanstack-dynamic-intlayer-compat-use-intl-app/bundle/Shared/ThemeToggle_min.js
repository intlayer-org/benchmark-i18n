import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var p = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), m = {
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
}, h = {
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
}, g = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, _ = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ee = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && _(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, te = ["en"], v = "\x1B[0m", y = "\x1B[34m", b = "\x1B[31m", ne = "\x1B[32m", re = "\x1B[36m", ie = "__intlayerPreloaded", x = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? te,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), ae = (e, t) => !!e && (t ?? m.locales).includes(e), oe = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, se = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ce = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = se(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, le = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!le) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ue = !1, de, fe = () => typeof window > "u" ? C(S) : (ue ||= (de = C(S), !0), de), pe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (ue = !1, !le && h.storage.cookies)) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: se(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ce(r, e, i));
			} catch {}
		}
	}
}, me = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = x(t);
	if (!n || !r) return n;
	let a = p(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ae(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ae(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, he = 50, ge = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Set(), ve = (e) => {
	_e.has(e) || (_e.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ye = {
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
}, be = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (ve(e), ye[e]);
};
function w(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ge.get(a);
	o || (o = /* @__PURE__ */ new Map(), ge.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? be(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > he && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var xe = (e) => e, Se = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = xe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ce = (e, t) => (n, r) => Se(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), T = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e;
T("✗", b), T("✓", ne), T("⏲", y);
var we = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = x(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ee(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = me(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, E, D, Te = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (D === void 0 || E !== e) && (E = e, D = we()), D;
}, O = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./intlayer-ThemeToggle-wrapper-vrjz2m-en-BACDCSom.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, k = Te(), A = O[k];
typeof window < "u" && typeof A == "function" && A().then((e) => {
	O.__intlayerPreloaded = {
		locale: k,
		dictionary: e
	};
}, () => void 0);
var j = /* @__PURE__ */ new WeakMap(), M = 0, Ee = (e) => {
	if (!e) return "base";
	let t = j.get(e);
	if (t) return t;
	M += 1;
	let n = `p${M}`;
	return j.set(e, n), n;
}, De = 256, N = /* @__PURE__ */ new WeakMap(), P = (e) => typeof e == "object" && !!e, Oe = (e, t, n) => `${e}_${t}_${Ee(n)}`, ke = (e, t) => {
	if (!P(e)) return { hit: !1 };
	let n = N.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!P(e)) return n;
	let r = N.get(e);
	return r || (r = /* @__PURE__ */ new Map(), N.set(e, r)), r.size >= De && r.clear(), r.set(t, n), n;
}, Ae = "translation", I = "enumeration", L = "plural", je = "condition", R = "insertion", Me = "object", Ne = "array", Pe = "markdown", z = "html", Fe = "gender", Ie = "select", B = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), V = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, V);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => V(e, B(t, e, {
		type: Ne,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Me,
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
}, Le = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Re = (e, t) => e[Le(e, t) ?? "fallback"], ze = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Be = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, Ve = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, H = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, He = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !H(e) || !H(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? He(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ue = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => He(e, t));
}, U = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, We = (e) => {
	if (typeof e == "string") return e;
	if (U(e)) return e.nodeType === "html" ? e[z] : e[Pe];
}, Ge = (e, t) => {
	if (typeof e == "string") return t;
	if (U(e)) {
		let n = e.nodeType === "html" ? z : Pe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ke = (e, t, n, r, i) => {
	let a = Ge(e, ze(We(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, W = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, qe = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Je = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? W : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ue(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Ae,
				key: e
			}]
		});
	}
}, Ye = W, Xe = (e) => W, Ze = W, Qe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: R }], i = e[R], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => Ke(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ze(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return tt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, $e = [
	I,
	je,
	L,
	Fe,
	Ie
], et = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !$e.includes(i)) return t;
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
		return !r && qe(i) ? i(n) : i;
	};
}, tt = (e, t) => typeof t == "function" && $e.includes(e?.nodeType ?? "") ? (n) => et(e, t, n) : t, nt = W, rt = W, it = (e) => W, at = W, ot = (e, t = !0) => [
	Je(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Ye,
	Xe(e ?? m.defaultLocale),
	Ze,
	Qe,
	it(e ?? m.defaultLocale),
	at,
	nt,
	rt
].filter((e) => e !== W), st = (e, t, n = []) => V(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), ct = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Oe(r ?? m.defaultLocale, "", n), o = ke(e, a);
	if (o.hit) return o.content;
	let s = n ?? ot(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return st(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? F(e, a, null) : Array.isArray(c) ? F(e, a, c.map(l)) : F(e, a, l(c));
}, lt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, ut = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", dt = /\{\{\s*(.*?)\s*\}\}/g, ft = (e, t = {}) => {
	if (!Object.values(t).some(ut)) return {
		isSimple: !0,
		parts: e.replace(dt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(dt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, pt = (e, t, n = ".") => {
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
}, mt = [
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
}, ht = (e, t, n, r) => {
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
}, gt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? ht(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : ht(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return gt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[R], t, n);
	if (r.nodeType === "html") return J(r[z], t, n);
	if (r.nodeType === "plural") {
		let e = r[L];
		return J(Be(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[I], i = mt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) mt.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Re(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ie], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Ve(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Fe];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, _t = (e, t = {}, n = "en") => {
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
}, vt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, yt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = yt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), bt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = bt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), xt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return St(e, (e) => pt(t, r(e)), r);
}, St = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return _t(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = vt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: yt(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = vt(t), o = r(e, i);
			return o === void 0 ? n(e) : bt(Y(o), a);
		}
	});
}, Ct = (e) => {
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
}, X = /* @__PURE__ */ new Map(), wt = (e, t) => (X.has(e) || X.set(e, Ct(t)), X.get(e).read()), Tt = /* @__PURE__ */ new Map(), Et = (e, t) => Object.create(new Proxy(e, {
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
}), Dt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Tt.get(t);
	i || (i = /* @__PURE__ */ new Map(), Tt.set(t, i));
	let a = i.get(r);
	return a || (a = Et(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ot = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, Dt(t)), kt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ot({
		value: t.children,
		children: t.children
	})
}, At = W, jt = (e, n) => {
	let i = ft(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Mt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: R }], i = e[R], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => Ke(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = jt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return tt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Nt = W, Pt = W, Z = /* @__PURE__ */ new Map(), Ft = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		kt,
		Je(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		Ye,
		Xe(e ?? m.defaultLocale),
		Ze,
		it(e ?? m.defaultLocale),
		at,
		nt,
		rt,
		At,
		Mt,
		Nt,
		Pt
	].filter((e) => e !== W);
	return Z.set(n, r), r;
}, It = (e, t) => ct(e, t, Ft(typeof t == "object" && t ? t.locale : t)), Lt = fe, Rt = (e, t) => pe(e, {
	...S,
	isCookieEnabled: t
}), zt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = n({
	get locale() {
		return Lt() ?? m?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Bt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: p } = m ?? {}, [h, g] = l(() => e ?? Lt() ?? t ?? p), [_, ee] = l(e);
	e !== _ && (ee(e), e && e !== h && g(e)), s(() => {
		zt();
	}, []);
	let te = a((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Rt(e, u);
		}
	}, [
		h,
		f,
		u
	]), v = i ?? te, y = oe(h), b = c(() => ({
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
	return d(Q.Provider, {
		value: b,
		children: r
	});
}, Vt = ({ children: e, ...t }) => f(Bt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ht = (e, t, n) => {
	let { locale: r, variant: i } = o(Q) ?? {}, { locale: a, selector: s } = {
		locale: n,
		selector: void 0
	}, c = a ?? r ?? m.defaultLocale, l = lt(e, c);
	if (l) return It(l, c);
	let u = e;
	return It(wt(`${String(t)}.${c}`, u[c]?.()), c);
}, Ut = ((e, t, n) => {
	let { locale: r } = o(Q) ?? {};
	return xt(r, Ht(e, t), n);
}), Wt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ce({ log: g })(`${T("IntlProvider", re)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(Vt, {
	locale: e,
	children: t
}, String(e)));
function Gt() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Kt() {
	let e = Ut(O, "theme-toggle"), [t, n] = l("auto");
	s(() => {
		let e = Gt();
		n(e), $(e);
	}, []), s(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let i = e(t === "auto" ? "themeModeAutoSystemClick" : t === "light" ? "themeModeLightClick" : "themeModeDarkClick");
	return d("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "themeAuto" : t === "dark" ? "themeDark" : "themeLight")
	});
}
function qt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Wt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Jt() {
	return d(qt, { children: d(Kt, {}) });
}
export { Jt as default };
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
}), n = "theme-toggle", r = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
}, i = {
	key: n,
	content: r
};
export { t };
