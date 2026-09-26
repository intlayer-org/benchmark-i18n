import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useLayoutEffect as c, useMemo as l, useState as u } from "react";
import { Link as d, useNavigate as ee, useParams as f } from "@tanstack/react-router";
import { ChevronDown as p } from "lucide-react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
var te = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), _ = {
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
}, v = {
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
}, y = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, b = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ne = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && b(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, re = ["en"], x = "\x1B[0m", ie = "\x1B[34m", ae = "\x1B[31m", oe = "\x1B[32m", se = "\x1B[36m", ce = "__intlayerPreloaded", le = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? _?.defaultLocale ?? "en",
	mode: e.mode ?? v?.mode ?? "prefix-no-default",
	locales: e.locales ?? _?.locales ?? re,
	rewrite: e.rewrite ?? v?.rewrite,
	domains: e.domains ?? v?.domains
}), ue = (e, t) => !!e && (t ?? _.locales).includes(e), de = (e, t = _?.locales, n = _?.defaultLocale) => {
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
}, fe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, pe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = fe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, me = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = _;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!me) for (let t = 0; t < (v.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(v.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, he = !1, ge, _e = () => typeof window > "u" ? C(S) : (he ||= (ge = C(S), !0), ge), ve = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (he = !1, !me && v.storage.cookies)) for (let n = 0; n < v.storage.cookies.length; n++) {
		let { name: r, attributes: i } = v.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: fe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, pe(r, e, i));
			} catch {}
		}
	}
}, ye = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = le(t);
	if (!n || !r) return n;
	let a = te(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ue(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ue(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, be = 50, xe = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Set(), Ce = (e) => {
	Se.has(e) || (Se.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, we = {
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
}, Te = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ce(e), we[e]);
};
function w(e, t, n) {
	let r = t ?? _?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = xe.get(a);
	o || (o = /* @__PURE__ */ new Map(), xe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > be && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e) => e, De = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ee(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Oe = (e, t) => (n, r) => De(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), T = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? x : n : x}` : e;
T("✗", ae), T("✓", oe), T("⏲", ie);
var ke = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = le(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ye(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, E, D, O = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (D === void 0 || E !== e) && (E = e, D = ke()), D;
}, k = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-wrapper-11qjr8-en-B0_Gz0TC.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, A = O(), j = k[A];
typeof window < "u" && typeof j == "function" && j().then((e) => {
	k.__intlayerPreloaded = {
		locale: A,
		dictionary: e
	};
}, () => void 0);
var M = /* @__PURE__ */ new WeakMap(), N = 0, Ae = (e) => {
	if (!e) return "base";
	let t = M.get(e);
	if (t) return t;
	N += 1;
	let n = `p${N}`;
	return M.set(e, n), n;
}, je = 256, P = /* @__PURE__ */ new WeakMap(), F = (e) => typeof e == "object" && !!e, Me = (e, t, n) => `${e}_${t}_${Ae(n)}`, Ne = (e, t) => {
	if (!F(e)) return { hit: !1 };
	let n = P.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!F(e)) return n;
	let r = P.get(e);
	return r || (r = /* @__PURE__ */ new Map(), P.set(e, r)), r.size >= je && r.clear(), r.set(t, n), n;
}, Pe = "translation", Fe = "enumeration", Ie = "plural", Le = "condition", L = "insertion", Re = "object", ze = "array", Be = "markdown", R = "html", Ve = "gender", He = "select", z = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), B = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, B);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => B(e, z(t, e, {
		type: ze,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Re,
			key: r
		};
		if (t.eager) {
			n[r] = B(e[r], z(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = B(e[r], z(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, We = (e, t) => e[Ue(e, t) ?? "fallback"], Ge = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Ke = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, qe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Je = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ye = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Je(e) || !Je(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? Ye(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Xe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => Ye(e, t));
}, V = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ze = (e) => {
	if (typeof e == "string") return e;
	if (V(e)) return e.nodeType === "html" ? e[R] : e[Be];
}, Qe = (e, t) => {
	if (typeof e == "string") return t;
	if (V(e)) {
		let n = e.nodeType === "html" ? R : Be;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, $e = (e, t, n, r, i) => {
	let a = Qe(e, Ge(Ze(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, et = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, tt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Xe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Pe,
				key: e
			}]
		});
	}
}, nt = H, rt = (e) => H, it = H, at = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: L }], i = e[L], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => $e(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ge(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return ct(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, ot = [
	Fe,
	Le,
	Ie,
	Ve,
	He
], st = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !ot.includes(i)) return t;
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
		return !r && et(i) ? i(n) : i;
	};
}, ct = (e, t) => typeof t == "function" && ot.includes(e?.nodeType ?? "") ? (n) => st(e, t, n) : t, lt = H, ut = H, dt = (e) => H, ft = H, pt = (e, t = !0) => [
	tt(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	nt,
	rt(e ?? _.defaultLocale),
	it,
	at,
	dt(e ?? _.defaultLocale),
	ft,
	lt,
	ut
].filter((e) => e !== H), mt = (e, t, n = []) => B(e, {
	...t,
	plugins: n
}), U = /* @__PURE__ */ new WeakSet(), ht = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Me(r ?? _.defaultLocale, "", n), o = Ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? pt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !U.has(e)
		};
		U.add(e);
		try {
			return mt(e.content, t, s);
		} finally {
			t.eager && U.delete(e);
		}
	};
	return c === null ? I(e, a, null) : Array.isArray(c) ? I(e, a, c.map(l)) : I(e, a, l(c));
}, gt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ce];
	if (n && n.locale === t) return n.dictionary;
}, _t = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", vt = /\{\{\s*(.*?)\s*\}\}/g, yt = (e, t = {}) => {
	if (!Object.values(t).some(_t)) return {
		isSimple: !0,
		parts: e.replace(vt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(vt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, bt = (e, t, n = ".") => {
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
}, xt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], W = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, St = (e, t, n, r) => {
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
}, Ct = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = W(t, r);
	return o === void 0 ? e : i ? St(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = W(t, r);
	return o === void 0 ? e : St(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = W(t, n);
	return r === void 0 ? e : String(r);
}), G = (e, t) => e[t] ?? e.count ?? e.n, K = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ct(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return K(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(K(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return K(r[L], t, n);
	if (r.nodeType === "html") return K(r[R], t, n);
	if (r.nodeType === "plural") {
		let e = r[Ie];
		return K(Ke(e, Number(G(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Fe], i = xt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) xt.includes(t) || (o[t] = n);
		let s = G(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? We(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return K(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[He], i = G(t, typeof r.variable == "string" ? r.variable : "value");
		return K(qe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ve];
		return K(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, wt = (e, t = {}, n = "en") => {
	let r = K(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, q = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: q(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Tt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Et = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Et(e.children, n), a = n[e.tag];
	return typeof a == "function" ? h(t, { children: a(i) }, r) : h(t, { children: i }, r);
}), Dt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Dt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Ot = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return kt(e, (e) => bt(t, r(e)), r);
}, kt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return wt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Tt(t), o = r(e, i);
			return o === void 0 ? n(e) : h(m, { children: Et(q(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Tt(t), o = r(e, i);
			return o === void 0 ? n(e) : Dt(q(o), a);
		}
	});
}, At = (e) => {
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
}, J = /* @__PURE__ */ new Map(), jt = (e, t) => (J.has(e) || J.set(e, At(t)), J.get(e).read()), Mt = /* @__PURE__ */ new Map(), Nt = (e, t) => Object.create(new Proxy(e, {
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
}), Pt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Mt.get(t);
	i || (i = /* @__PURE__ */ new Map(), Mt.set(t, i));
	let a = i.get(r);
	return a || (a = Nt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ft = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : h(m, { children: e }),
	value: t,
	...n
}, Pt(t)), It = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ft({
		value: t.children,
		children: t.children
	})
}, Lt = H, Rt = (e, n) => {
	let i = yt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, zt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: L }], i = e[L], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => $e(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Rt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return ct(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Bt = H, Vt = H, Y = /* @__PURE__ */ new Map(), Ht = (e, t = !0) => {
	let n = `${e ?? _.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		It,
		tt(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
		nt,
		rt(e ?? _.defaultLocale),
		it,
		dt(e ?? _.defaultLocale),
		ft,
		lt,
		ut,
		Lt,
		zt,
		Bt,
		Vt
	].filter((e) => e !== H);
	return Y.set(n, r), r;
}, Ut = (e, t) => ht(e, t, Ht(typeof t == "object" && t ? t.locale : t)), Wt = _e, Gt = (e, t) => ve(e, {
	...S,
	isCookieEnabled: t
}), Kt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, X = n({
	get locale() {
		return Wt() ?? _?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), qt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: d, defaultLocale: ee } = _ ?? {}, [f, p] = u(() => e ?? Wt() ?? t ?? ee), [m, g] = u(e);
	e !== m && (g(e), e && e !== f && p(e)), s(() => {
		Kt();
	}, []);
	let te = a((e) => {
		if (f.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Gt(e, c);
		}
	}, [
		f,
		d,
		c
	]), v = i ?? te, y = de(f), b = l(() => ({
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
	return h(X.Provider, {
		value: b,
		children: r
	});
}, Jt = ({ children: e, ...t }) => g(qt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Yt = (e, t, n) => {
	let { locale: r, variant: i } = o(X) ?? {}, { locale: a, selector: s } = {
		locale: n,
		selector: void 0
	}, c = a ?? r ?? _.defaultLocale, l = gt(e, c);
	if (l) return Ut(l, c);
	let u = e;
	return Ut(jt(`${String(t)}.${c}`, u[c]?.()), c);
}, Z = ((e, t, n) => {
	let { locale: r } = o(X) ?? {};
	return Ot(r, Yt(e, t), n);
}), Xt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Oe({ log: y })(`${T("IntlProvider", se)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), h(Jt, {
	locale: e,
	children: t
}, String(e))), Q = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-wrapper-11qjr8-en-B0_Gz0TC.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, Zt = O(), Qt = Q[Zt];
typeof window < "u" && typeof Qt == "function" && Qt().then((e) => {
	Q.__intlayerPreloaded = {
		locale: Zt,
		dictionary: e
	};
}, () => void 0);
function $t() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function en() {
	let e = Z(Q, "theme-toggle"), [t, n] = u("auto");
	s(() => {
		let e = $t();
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
	return h("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "themeAuto" : t === "dark" ? "themeDark" : "themeLight")
	});
}
var tn = [
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
function nn(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function rn() {
	let e = f({ strict: !1 }).locale ?? "en", t = ee(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return h("div", {
		className: "flex items-center gap-2",
		children: h("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: tn.map((e) => h("option", {
				value: e,
				children: nn(e)
			}, e))
		})
	});
}
function an(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), c(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function on() {
	let e = Z(k, "header");
	an("Header");
	let [t, n] = u(!1), r = f({ strict: !1 }).locale ?? "en", i = [
		{
			to: "/$locale/products",
			label: e("products")
		},
		{
			to: "/$locale/pricing",
			label: e("pricing")
		},
		{
			to: "/$locale/team",
			label: e("team")
		},
		{
			to: "/$locale/blog",
			label: e("blog")
		},
		{
			to: "/$locale/careers",
			label: e("careers")
		},
		{
			to: "/$locale/faq",
			label: e("faq")
		},
		{
			to: "/$locale/contact",
			label: e("contact")
		},
		{
			to: "/$locale/settings",
			label: e("settings")
		}
	];
	return h("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: g("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [g("div", {
				className: "flex items-center gap-8",
				children: [h(d, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), g("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						h(d, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("home")
						}),
						h(d, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("methodology")
						}),
						g("div", {
							className: "relative",
							children: [g("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("mockPages"), h(p, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && h("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: h("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => h(d, {
										preload: !1,
										to: e.to,
										params: { locale: r },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.to))
								})
							})]
						})
					]
				})]
			}), g("div", {
				className: "flex items-center gap-4",
				children: [
					g("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [h("span", {
							className: "sr-only",
							children: e("goToGithub")
						}), h("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: h("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					h(rn, {}),
					h(en, {})
				]
			})]
		})
	});
}
function sn({ children: t }) {
	return h(e.Suspense, {
		fallback: null,
		children: h(Xt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function cn() {
	return h(sn, { children: h(on, {}) });
}
export { cn as default };
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
}), s = "theme-toggle", c = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
}, l = {
	key: s,
	content: c
};
export { n, o as t };
