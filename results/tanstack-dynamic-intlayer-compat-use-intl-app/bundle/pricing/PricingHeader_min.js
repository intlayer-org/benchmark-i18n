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
}, ne = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && te(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, g = ["en"], _ = "\x1B[0m", v = "\x1B[34m", re = "\x1B[31m", ie = "\x1B[32m", ae = "\x1B[38;5;3m", oe = "\x1B[36m", se = "__intlayerPreloaded", y = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? g,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), b = (e, t) => !!e && (t ?? p.locales).includes(e), ce = (e, t = p?.locales, n = p?.defaultLocale) => {
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
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!de) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, fe = !1, pe, me = () => typeof window > "u" ? S(x) : (fe ||= (pe = S(x), !0), pe), he = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (fe = !1, !de && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
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
	let { defaultLocale: n, locales: r, mode: i } = y(t);
	if (!n || !r) return n;
	let a = ee(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return b(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (b(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, _e = 50, C = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Set(), ye = (e) => {
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
	let r = t ?? p?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = C.get(a);
	o || (o = /* @__PURE__ */ new Map(), C.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? xe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > _e && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Se = (e) => e, Ce = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Se(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, T = (e, t) => (n, r) => Ce(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), E = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? _ : n : _}` : e, we = (e, t = ae, n = _) => [e].flat().map((e) => E(e, t, n)).join(", ");
E("✗", re), E("✓", ie), E("⏲", v);
var Te = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = y(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ge(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return S() ?? t;
}, D, O, Ee = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (O === void 0 || D !== e) && (D = e, O = Te()), O;
}, k = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-PricingHeader-wrapper-1ivipt-en-BvbFdOrC.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/zh.json").then((e) => e.default)
}, A = Ee(), j = k[A];
typeof window < "u" && typeof j == "function" && j().then((e) => {
	k.__intlayerPreloaded = {
		locale: A,
		dictionary: e
	};
}, () => void 0);
var M = /* @__PURE__ */ new WeakMap(), N = 0, De = (e) => {
	if (!e) return "base";
	let t = M.get(e);
	if (t) return t;
	N += 1;
	let n = `p${N}`;
	return M.set(e, n), n;
}, Oe = 256, P = /* @__PURE__ */ new WeakMap(), F = (e) => typeof e == "object" && !!e, ke = (e, t, n) => `${e}_${t}_${De(n)}`, Ae = (e, t) => {
	if (!F(e)) return { hit: !1 };
	let n = P.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!F(e)) return n;
	let r = P.get(e);
	return r || (r = /* @__PURE__ */ new Map(), P.set(e, r)), r.size >= Oe && r.clear(), r.set(t, n), n;
}, je = "translation", L = "enumeration", R = "plural", Me = "condition", z = "insertion", Ne = "object", Pe = "array", Fe = "markdown", B = "html", Ie = "gender", Le = "select", V = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), H = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, H);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => H(e, V(t, e, {
		type: Pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Ne,
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
}, Re = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ze = (e, t) => e[Re(e, t) ?? "fallback"], Be = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Ve = () => ({}), He = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ue = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : He.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ue(e ? `${e}.${String(n)}` : String(n)) }), We = /* @__PURE__ */ new Set(), Ge = (e, t, n) => {
	let r = Ve()[e];
	return r ? ht(r, t, n) : (We.has(e) || (T({ log: h })(typeof window > "u" ? `Dictionary ${we(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), We.add(e)), Ue(e));
}, Ke = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, qe = (e, t) => {
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
}, U = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ze = (e) => {
	if (typeof e == "string") return e;
	if (U(e)) return e.nodeType === "html" ? e[B] : e[Fe];
}, Qe = (e, t) => {
	if (typeof e == "string") return t;
	if (U(e)) {
		let n = e.nodeType === "html" ? B : Fe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, $e = (e, t, n, r, i) => {
	let a = Qe(e, Be(Ze(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, W = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, et = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, tt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? W : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Xe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: je,
				key: e
			}]
		});
	}
}, nt = W, rt = (e) => W, it = W, at = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => $e(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Be(i, e);
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
	L,
	Me,
	R,
	Ie,
	Le
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
}, ct = (e, t) => typeof t == "function" && ot.includes(e?.nodeType ?? "") ? (n) => st(e, t, n) : t, lt = W, ut = W, dt = (e) => W, ft = W, pt = (e, t = !0) => [
	tt(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	nt,
	rt(e ?? p.defaultLocale),
	it,
	at,
	dt(e ?? p.defaultLocale),
	ft,
	lt,
	ut
].filter((e) => e !== W), mt = (e, t, n = []) => H(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), ht = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ke(r ?? p.defaultLocale, "", n), o = Ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? pt(r), c = e, l = (e) => {
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
			return mt(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? I(e, a, null) : Array.isArray(c) ? I(e, a, c.map(l)) : I(e, a, l(c));
}, gt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[se];
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
}, K = (e, t, n = ".") => {
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
}, bt = [
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
}, xt = (e, t, n, r) => {
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
}, St = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? xt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : xt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), J = (e, t) => e[t] ?? e.count ?? e.n, Y = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return St(e, t, n);
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
		let e = r[R];
		return Y(Ke(e, Number(J(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[L], i = bt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) bt.includes(t) || (o[t] = n);
		let s = J(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ze(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Y(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Le], i = J(t, typeof r.variable == "string" ? r.variable : "value");
		return Y(qe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ie];
		return Y(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ct = (e, t = {}, n = "en") => {
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
}, wt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Tt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Tt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Et = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Et(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Dt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return At(e, (t) => Ot(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Ot = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = Ve();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = K(Ge(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return K(Ge(i, e), a);
	} catch {
		return;
	}
}, kt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return At(e, (e) => K(t, r(e)), r);
}, At = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ct(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = wt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: Tt(X(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = wt(t), o = r(e, i);
			return o === void 0 ? n(e) : Et(X(o), a);
		}
	});
}, jt = (e) => {
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
}, Z = /* @__PURE__ */ new Map(), Mt = (e, t) => (Z.has(e) || Z.set(e, jt(t)), Z.get(e).read()), Nt = /* @__PURE__ */ new Map(), Pt = (e, t) => Object.create(new Proxy(e, {
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
}), Ft = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Nt.get(t);
	i || (i = /* @__PURE__ */ new Map(), Nt.set(t, i));
	let a = i.get(r);
	return a || (a = Pt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, It = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, Ft(t)), Lt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => It({
		value: t.children,
		children: t.children
	})
}, Rt = W, zt = (e, n) => {
	let i = yt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Bt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => $e(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = zt(i, e);
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
}, Vt = W, Ht = W, Q = /* @__PURE__ */ new Map(), Ut = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Lt,
		tt(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		nt,
		rt(e ?? p.defaultLocale),
		it,
		dt(e ?? p.defaultLocale),
		ft,
		lt,
		ut,
		Rt,
		Bt,
		Vt,
		Ht
	].filter((e) => e !== W);
	return Q.set(n, r), r;
}, Wt = (e, t) => ht(e, t, Ut(typeof t == "object" && t ? t.locale : t)), Gt = me, Kt = (e, t) => he(e, {
	...x,
	isCookieEnabled: t
}), qt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = n({
	get locale() {
		return Gt() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Jt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = p ?? {}, [m, h] = l(() => e ?? Gt() ?? t ?? ee), [te, ne] = l(e);
	e !== te && (ne(e), e && e !== m && h(e)), s(() => {
		qt();
	}, []);
	let g = a((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), Kt(e, u);
		}
	}, [
		m,
		f,
		u
	]), _ = i ?? g, v = ce(m), re = c(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: o
	}), [
		v,
		_,
		n,
		o
	]);
	return d($.Provider, {
		value: re,
		children: r
	});
}, Yt = ({ children: e, ...t }) => f(Jt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Xt = (e, t, n) => {
	let { locale: r, variant: i } = o($) ?? {}, { locale: a, selector: s } = {
		locale: n,
		selector: void 0
	}, c = a ?? r ?? p.defaultLocale, l = gt(e, c);
	if (l) return Wt(l, c);
	let u = e;
	return Wt(Mt(`${String(t)}.${c}`, u[c]?.()), c);
}, Zt = ((e, t, n) => {
	let { locale: r } = o($) ?? {};
	return kt(r, Xt(e, t), n);
}), Qt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && T({ log: h })(`${E("IntlProvider", oe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(Yt, {
	locale: e,
	children: t
}, String(e))), $t = ((e) => {
	let { locale: t } = o($) ?? {};
	return c(() => Dt(t, e), [t, e]);
}), en = () => {
	let e = $t();
	return d("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	});
};
function tn() {
	let e = Zt(k, "pricing-header");
	return f(u, { children: [d(en, {}), f("div", {
		className: "mb-12 text-center",
		children: [d("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: e("simpleTransparentPricing")
		}), d("p", {
			className: "text-muted-foreground",
			children: e("chooseThePlanThatFits")
		})]
	})] });
}
function nn({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Qt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function rn() {
	return d(nn, { children: d(tn, {}) });
}
export { rn as default };
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
}), n = "pricing-header", r = {
	simpleTransparentPricing: "Simple, Transparent Pricing",
	chooseThePlanThatFits: "Choose the plan that fits your team. No hidden fees."
}, i = {
	key: n,
	content: r
};
export { t };
