import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useId as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import l from "../../../.intlayer/dictionary/index.json";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { useParams as f } from "next/navigation";
var p = {
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
}, g = "\x1B[0m", _ = "\x1B[34m", v = "\x1B[31m", ee = "\x1B[32m", y = "\x1B[35m", b = "\x1B[38;5;3m", x = "\x1B[36m", te = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, S = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ne = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = S(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, re = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var C = {
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
}, ie = (e = C) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!re) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = !1, w, oe = () => typeof window > "u" ? ie(C) : (ae ||= (w = ie(C), !0), w), se = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (ae = !1, !re && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: S(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ne(r, e, i));
			} catch {}
		}
	}
}, ce = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], T = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return ce.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, le = 50, E = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Set(), ue = (e) => {
	D.has(e) || (D.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, de = {
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
}, fe = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (ue(e), de[e]);
};
function O(e, t, n) {
	let r = t ?? p?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = E.get(a);
	o || (o = /* @__PURE__ */ new Map(), E.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? fe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > le && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var pe = (e) => e, me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = pe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, k = (e, t) => (n, r) => me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), A = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? g : n : g}` : e, he = (e, t = b, n = g) => [e].flat().map((e) => A(e, t, n)).join(", ");
A("✗", v), A("✓", ee), A("⏲", _);
var ge = "translation", _e = "enumeration", ve = "plural", ye = "insertion", be = "object", xe = "array", Se = "html", Ce = "gender", we = "select", j = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, M);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, j(t, e, {
		type: xe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: be,
			key: r
		};
		if (t.eager) {
			n[r] = M(e[r], j(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = M(e[r], j(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, N = (e, t, n = ".") => {
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
}, Te = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ee = (e, t) => e[Te(e, t) ?? "fallback"], De = (e, t, n) => e[O("PluralRules", n).select(t)] ?? e.other, Oe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, P = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], F = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, I = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? O("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? O("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : O("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return O("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, ke = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = F(t, r);
	return o === void 0 ? e : i ? I(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = F(t, r);
	return o === void 0 ? e : I(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = F(t, n);
	return r === void 0 ? e : String(r);
}), L = (e, t) => e[t] ?? e.count ?? e.n, R = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ke(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return R(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(R(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return R(r[ye], t, n);
	if (r.nodeType === "html") return R(r[Se], t, n);
	if (r.nodeType === "plural") {
		let e = r[ve];
		return R(De(e, Number(L(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[_e], i = P.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) P.includes(t) || (o[t] = n);
		let s = L(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = O("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ee(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return R(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[we], i = L(t, typeof r.variable == "string" ? r.variable : "value");
		return R(Oe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ce];
		return R(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, z = (e, t = {}, n = "en") => {
	let r = R(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, B = /* @__PURE__ */ new WeakMap(), V = 0, Ae = (e) => {
	if (!e) return "base";
	let t = B.get(e);
	if (t) return t;
	V += 1;
	let n = `p${V}`;
	return B.set(e, n), n;
}, je = 256, H = /* @__PURE__ */ new WeakMap(), U = (e) => typeof e == "object" && !!e, Me = (e, t, n) => `${e}_${t}_${Ae(n)}`, Ne = (e, t) => {
	if (!U(e)) return { hit: !1 };
	let n = H.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, W = (e, t, n) => {
	if (!U(e)) return n;
	let r = H.get(e);
	return r || (r = /* @__PURE__ */ new Map(), H.set(e, r)), r.size >= je && r.clear(), r.set(t, n), n;
}, Pe = { index: l }, Fe = () => Pe, Ie = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Le = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ie.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Le(e ? `${e}.${String(n)}` : String(n)) }), Re = /* @__PURE__ */ new Set(), G = (e, t, n) => {
	let r = Fe()[e];
	return r ? $e(r, t, n) : (Re.has(e) || (k({ log: h })(typeof window > "u" ? `Dictionary ${he(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Re.add(e)), Le(e));
}, ze = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Be = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !ze(e) || !ze(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? Be(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ve = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => Be(e, t));
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, He = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ve(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ge,
				key: e
			}]
		});
	}
}, Ue = K, We = (e) => K, Ge = K, Ke = K, qe = K, Je = K;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Ye = (e) => K, Xe = K, Ze = (e, t = !0) => [
	He(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	Ue,
	We(e ?? p.defaultLocale),
	Ge,
	Ke,
	Ye(e ?? p.defaultLocale),
	Xe,
	qe,
	Je
].filter((e) => e !== K), Qe = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), $e = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Me(r ?? p.defaultLocale, "", n), o = Ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ze(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !q.has(e)
		};
		q.add(e);
		try {
			return Qe(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? W(e, a, null) : Array.isArray(c) ? W(e, a, c.map(l)) : W(e, a, l(c));
}, et = /* @__PURE__ */ new Set([
	"defaultValue",
	"ns",
	"lng",
	"lngs",
	"fallbackLng",
	"returnObjects",
	"returnDetails",
	"keySeparator",
	"nsSeparator",
	"ordinal",
	"postProcess",
	"postProcessPassResolved",
	"interpolation",
	"replace",
	"joinArrays",
	"nsMode",
	"keyPrefix"
]), tt = 5, nt = "index", rt = (e, t) => {
	if (e in Fe()) return G(e, t);
}, it = (e, t, n, r, i) => {
	let a = [], o = n === void 0 ? void 0 : new Intl.PluralRules(t, { type: i ? "ordinal" : "cardinal" }).select(n);
	return r && (o && (i && a.push(`${e}_${r}_ordinal_${o}`), a.push(`${e}_${r}_${o}`), n !== 1 && a.push(`${e}_${r}_plural`)), a.push(`${e}_${r}`)), o && (i && a.push(`${e}_ordinal_${o}`), a.push(`${e}_${o}`), n !== 1 && a.push(`${e}_plural`)), a.push(e), a;
}, J = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.replace;
	if (t) {
		let n = { ...t };
		return e.count !== void 0 && (n.count ??= e.count), e.context !== void 0 && (n.context ??= e.context), n;
	}
	let n = {};
	for (let [t, r] of Object.entries(e)) et.has(t) || (n[t] = r);
	return n;
}, Y = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = rt(c, p), m === void 0 && c === t && c !== nt && (m = rt(nt, p)), m === void 0) return;
	let h;
	for (let t of it(l, r?.lng ?? e, u, d, f)) {
		let e = N(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = J(r), _ = z(h, g, r?.lng ?? e);
	return o < tt && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
		let u = Y({
			locale: e,
			namespace: c,
			key: l.trim(),
			options: r,
			keySeparator: i,
			nsSeparator: a,
			depth: o + 1,
			dictionaryContent: c === t ? s : void 0
		});
		return typeof u == "string" ? u : n;
	})), _;
}, at = (e) => {
	k({ log: h })(`${A(e, x)}: the ${A("`resources`", x)} option is ignored when using ${A("@intlayer/i18next", y)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${A("`resources`", x)} option to reduce your bundle size.`);
}, X = (e = {}) => {
	e.resources !== void 0 && at("createInstance");
	let t = p, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
		i.get(e)?.forEach((e) => {
			e(...t);
		});
	}, s = () => ({
		keySeparator: e.keySeparator ?? ".",
		nsSeparator: e.nsSeparator ?? ":"
	}), c = (e, t, n, r) => {
		let i = typeof r == "string" ? { defaultValue: r } : r, a = Y({
			locale: e,
			namespace: t,
			key: n,
			options: i,
			...s()
		});
		if (a !== void 0) return a;
		let o = i?.defaultValue;
		return typeof o == "string" ? z(o, J(i), e) : n;
	}, l = {
		get language() {
			return n;
		},
		get languages() {
			return t?.locales?.map(String) ?? [n];
		},
		get resolvedLanguage() {
			return n;
		},
		get isInitialized() {
			return a;
		},
		isInitializing: !1,
		initializedStoreOnce: !1,
		initializedLanguageOnce: !1,
		options: e,
		modules: {},
		services: {},
		store: {},
		format: ((e) => String(e)),
		async init(e, t) {
			let i = typeof e == "function" ? {} : e ?? {};
			i.resources !== void 0 && at("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
			let s = l.t.bind(l);
			return (typeof e == "function" ? e : t)?.(null, s), s;
		},
		t(e, t, i) {
			let a = typeof t == "string" ? {
				defaultValue: t,
				...i ?? {}
			} : t, o = Array.isArray(e) ? e : [String(e)];
			for (let e of o) {
				let t = Y({
					locale: n,
					namespace: r,
					key: e,
					options: a,
					...s()
				});
				if (t !== void 0) return t;
			}
			let c = a?.defaultValue;
			return typeof c == "string" ? z(c, J(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
		},
		async changeLanguage(e, t) {
			let r = n;
			e && (n = e), o("languageChanged", n, r);
			let i = l.t.bind(l);
			return t?.(null, i), i;
		},
		exists(e, t) {
			return Y({
				locale: n,
				namespace: r,
				key: e,
				options: t,
				...s()
			}) !== void 0;
		},
		getFixedT: ((e, t, i) => {
			let a = Array.isArray(e) ? e[0] ?? n : e ?? n, o = t ?? r;
			return (e, t) => {
				let n = i ? `${i}.${e}` : e;
				return c(a, o, n, t);
			};
		}),
		use(e) {
			return e?.init?.(l), l;
		},
		on(e, t) {
			return i.has(e) || i.set(e, /* @__PURE__ */ new Set()), i.get(e).add(t), l;
		},
		once(e, t) {
			let n = (...r) => {
				t(...r), l.off(e, n);
			};
			return l.on(e, n), l;
		},
		off(e, t) {
			t ? i.get(e)?.delete(t) : i.delete(e);
		},
		emit(e, ...t) {
			o(e, ...t);
		},
		createInstance(t, n) {
			return X({
				...e,
				...t
			});
		},
		cloneInstance(t, n) {
			return X({
				...e,
				...t
			});
		},
		dir(e) {
			return T(e ?? n) === "rtl" ? "rtl" : "ltr";
		},
		setDefaultNamespace(e) {
			r = e;
		},
		hasLoadedNamespace(e) {
			try {
				return G(Array.isArray(e) ? e[0] : e, n), !0;
			} catch {
				return !1;
			}
		},
		async loadNamespaces(e) {},
		async loadLanguages(e) {},
		loadResources(e) {},
		async reloadResources() {},
		getDataByLanguage(e) {},
		getResource(e, t, n) {
			try {
				return N(G(t, e), n);
			} catch {
				return;
			}
		},
		addResource: () => l,
		addResources: () => l,
		addResourceBundle: () => l,
		hasResourceBundle: () => !1,
		getResourceBundle: () => void 0,
		removeResourceBundle: () => l,
		toJSON() {
			return {
				options: e,
				store: {},
				language: n,
				languages: t?.locales?.map(String) ?? [n],
				resolvedLanguage: n
			};
		}
	};
	return l;
}, Z = X();
Z.dir.bind(Z), Z.init.bind(Z), Z.loadResources.bind(Z), Z.reloadResources.bind(Z), Z.use.bind(Z), Z.changeLanguage.bind(Z), Z.getFixedT.bind(Z), Z.t.bind(Z), Z.exists.bind(Z), Z.setDefaultNamespace.bind(Z), Z.hasLoadedNamespace.bind(Z), Z.loadNamespaces.bind(Z), Z.loadLanguages.bind(Z);
var ot = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
	let o = (t, n) => Y({
		locale: e,
		namespace: r,
		key: i ? `${i}.${t}` : t,
		options: n,
		dictionaryContent: a
	}), s = (t, n, r) => {
		let i = typeof n == "string" ? {
			defaultValue: n,
			...r
		} : n ?? {}, a = Array.isArray(t) ? t : [t];
		for (let e of a) {
			let t = o(e, i);
			if (t !== void 0) return t;
		}
		let s = i.defaultValue;
		return typeof s == "string" ? z(s, J(i), e) : a[a.length - 1];
	};
	return {
		translate: s,
		i18n: {
			language: e,
			languages: n ?? [],
			resolvedLanguage: e,
			isInitialized: !0,
			changeLanguage: async (e) => {
				t(e);
			},
			dir: (t) => T(t ?? e) === "rtl" ? "rtl" : "ltr",
			exists: (t, n) => Y({
				locale: e,
				namespace: r,
				key: t,
				options: n,
				dictionaryContent: a
			}) !== void 0,
			t: s,
			getFixedT: (t, n) => (i, o) => {
				let s = Y({
					locale: t ?? e,
					namespace: n ?? r,
					key: i,
					options: o,
					dictionaryContent: (t ?? e) === e && (n ?? r) === r ? a : void 0
				});
				return s === void 0 ? i : s;
			}
		}
	};
}, st = oe, ct = (e, t) => se(e, {
	...C,
	isCookieEnabled: t
}), lt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ut = t({
	get locale() {
		return st() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), dt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: o, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: m } = p ?? {}, [h, g] = c(() => e ?? st() ?? t ?? m), [_, v] = c(e);
	e !== _ && (v(e), e && e !== h && g(e)), i(() => {
		lt();
	}, []);
	let ee = n((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), ct(e, d);
		}
	}, [
		h,
		f,
		d
	]), y = o ?? ee, b = te(h), x = s(() => ({
		locale: b,
		setLocale: y,
		variant: r,
		disableEditor: l
	}), [
		b,
		y,
		r,
		l
	]);
	return u(ut.Provider, {
		value: x,
		children: a
	});
}, ft = ({ children: e, ...t }) => d(dt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: pt, locales: Q } = p ?? {}, mt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(ut) ?? {};
	return {
		locale: i,
		defaultLocale: pt,
		availableLocales: Q,
		setLocale: n((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), ct(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			a,
			e
		])
	};
}, $ = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = mt(), o = t?.keyPrefix, { translate: c, i18n: l } = s(() => ot({
		locale: r,
		setLocale: i,
		availableLocales: a ?? [],
		namespace: n,
		keyPrefix: o
	}), [
		r,
		i,
		a,
		n,
		o
	]);
	return {
		t: c,
		i18n: l,
		ready: !0
	};
}, ht = ({ children: e, i18n: t }) => (t !== void 0 && k({ log: h })(`${A("I18nextProvider", x)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), u(ft, { children: e }));
e.createContext({ i18n: null });
var gt = {
	type: "3rdParty",
	init: (e) => {}
};
function _t() {
	let { t: e } = $(), t = a();
	return d("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [u("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e("settings.apiAccessSection.apiAccess")
		}), d("div", { children: [
			u("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("settings.apiAccessSection.apiKey")
			}),
			d("div", {
				className: "flex gap-2",
				children: [u("input", {
					id: t,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), u("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: e("settings.apiAccessSection.copy")
				})]
			}),
			u("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: e("settings.apiAccessSection.useThisKeyTo")
			})
		] })]
	});
}
function vt() {
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
function yt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Z.use(gt).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var bt = Z;
function xt({ locale: e }) {
	let { i18n: t } = $();
	return i(() => {
		t.language !== e && t.changeLanguage(e);
	}, [t, e]), null;
}
function St({ children: e }) {
	let t = f().locale ?? "en", [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		yt("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		vt();
	}, []), d(ht, {
		i18n: bt,
		children: [u(xt, { locale: t }), e]
	});
}
function Ct({ children: e }) {
	return u(St, { children: e });
}
function wt() {
	return u(Ct, { children: u(_t, {}) });
}
export { wt as default };
