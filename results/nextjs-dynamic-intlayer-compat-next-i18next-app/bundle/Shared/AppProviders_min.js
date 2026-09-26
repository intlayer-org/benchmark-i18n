import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import { useParams as c } from "next/navigation";
import l from "../.intlayer/dictionary/index.json";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
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
}, p = {
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
}, m = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, h = "\x1B[0m", g = "\x1B[34m", _ = "\x1B[31m", v = "\x1B[32m", ee = "\x1B[35m", y = "\x1B[38;5;3m", b = "\x1B[36m", te = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, x = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ne = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = x(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, re = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!re) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, w = !1, ie, ae = () => typeof window > "u" ? C(S) : (w ||= (ie = C(S), !0), ie), oe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (w = !1, !re && p.storage.cookies)) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: x(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ne(r, e, i));
			} catch {}
		}
	}
}, se = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], ce = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return se.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, le = 50, ue = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), fe = (e) => {
	de.has(e) || (de.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, pe = {
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
}, me = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (fe(e), pe[e]);
};
function T(e, t, n) {
	let r = t ?? f?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ue.get(a);
	o || (o = /* @__PURE__ */ new Map(), ue.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? me(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > le && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var he = (e) => e, ge = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = he(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, E = (e, t) => (n, r) => ge(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), D = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? h : n : h}` : e, _e = (e, t = y, n = h) => [e].flat().map((e) => D(e, t, n)).join(", ");
D("✗", _), D("✓", v), D("⏲", g);
var ve = "translation", ye = "enumeration", be = "plural", xe = "insertion", Se = "object", Ce = "array", we = "html", Te = "gender", Ee = "select", O = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, k);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, O(t, e, {
		type: Ce,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Se,
			key: r
		};
		if (t.eager) {
			n[r] = k(e[r], O(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = k(e[r], O(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, A = (e, t, n = ".") => {
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
}, De = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Oe = (e, t) => e[De(e, t) ?? "fallback"], ke = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, Ae = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, j = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], M = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, je = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? T("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? T("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : T("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return T("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Me = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : i ? je(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : je(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = M(t, n);
	return r === void 0 ? e : String(r);
}), N = (e, t) => e[t] ?? e.count ?? e.n, P = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Me(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return P(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(P(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return P(r[xe], t, n);
	if (r.nodeType === "html") return P(r[we], t, n);
	if (r.nodeType === "plural") {
		let e = r[be];
		return P(ke(e, Number(N(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ye], i = j.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) j.includes(t) || (o[t] = n);
		let s = N(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Oe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return P(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ee], i = N(t, typeof r.variable == "string" ? r.variable : "value");
		return P(Ae(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Te];
		return P(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, F = (e, t = {}, n = "en") => {
	let r = P(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, I = /* @__PURE__ */ new WeakMap(), L = 0, Ne = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	L += 1;
	let n = `p${L}`;
	return I.set(e, n), n;
}, Pe = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, Fe = (e, t, n) => `${e}_${t}_${Ne(n)}`, Ie = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= Pe && r.clear(), r.set(t, n), n;
}, Le = { index: l }, V = () => Le, Re = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), H = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Re.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : H(e ? `${e}.${String(n)}` : String(n)) }), U = /* @__PURE__ */ new Set(), W = (e, t, n) => {
	let r = V()[e];
	return r ? Ze(r, t, n) : (U.has(e) || (E({ log: m })(typeof window > "u" ? `Dictionary ${_e(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), U.add(e)), H(e));
}, G = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, K = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !G(e) || !G(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? K(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ze = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => K(e, t));
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Be = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ze(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ve,
				key: e
			}]
		});
	}
}, Ve = q, He = (e) => q, Ue = q, We = q, Ge = q, Ke = q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var qe = (e) => q, Je = q, Ye = (e, t = !0) => [
	Be(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	Ve,
	He(e ?? f.defaultLocale),
	Ue,
	We,
	qe(e ?? f.defaultLocale),
	Je,
	Ge,
	Ke
].filter((e) => e !== q), Xe = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), Ze = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Fe(r ?? f.defaultLocale, "", n), o = Ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ye(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !J.has(e)
		};
		J.add(e);
		try {
			return Xe(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, Qe = /* @__PURE__ */ new Set([
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
]), $e = 5, et = "index", tt = (e, t) => {
	if (e in V()) return W(e, t);
}, nt = (e, t, n, r, i) => {
	let a = [], o = n === void 0 ? void 0 : new Intl.PluralRules(t, { type: i ? "ordinal" : "cardinal" }).select(n);
	return r && (o && (i && a.push(`${e}_${r}_ordinal_${o}`), a.push(`${e}_${r}_${o}`), n !== 1 && a.push(`${e}_${r}_plural`)), a.push(`${e}_${r}`)), o && (i && a.push(`${e}_ordinal_${o}`), a.push(`${e}_${o}`), n !== 1 && a.push(`${e}_plural`)), a.push(e), a;
}, Y = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.replace;
	if (t) {
		let n = { ...t };
		return e.count !== void 0 && (n.count ??= e.count), e.context !== void 0 && (n.context ??= e.context), n;
	}
	let n = {};
	for (let [t, r] of Object.entries(e)) Qe.has(t) || (n[t] = r);
	return n;
}, X = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = tt(c, p), m === void 0 && c === t && c !== et && (m = tt(et, p)), m === void 0) return;
	let h;
	for (let t of nt(l, r?.lng ?? e, u, d, f)) {
		let e = A(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = Y(r), _ = F(h, g, r?.lng ?? e);
	return o < $e && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
		let u = X({
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
}, rt = (e) => {
	E({ log: m })(`${D(e, b)}: the ${D("`resources`", b)} option is ignored when using ${D("@intlayer/i18next", ee)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${D("`resources`", b)} option to reduce your bundle size.`);
}, Z = (e = {}) => {
	e.resources !== void 0 && rt("createInstance");
	let t = f, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
		i.get(e)?.forEach((e) => {
			e(...t);
		});
	}, s = () => ({
		keySeparator: e.keySeparator ?? ".",
		nsSeparator: e.nsSeparator ?? ":"
	}), c = (e, t, n, r) => {
		let i = typeof r == "string" ? { defaultValue: r } : r, a = X({
			locale: e,
			namespace: t,
			key: n,
			options: i,
			...s()
		});
		if (a !== void 0) return a;
		let o = i?.defaultValue;
		return typeof o == "string" ? F(o, Y(i), e) : n;
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
			i.resources !== void 0 && rt("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
			let s = l.t.bind(l);
			return (typeof e == "function" ? e : t)?.(null, s), s;
		},
		t(e, t, i) {
			let a = typeof t == "string" ? {
				defaultValue: t,
				...i ?? {}
			} : t, o = Array.isArray(e) ? e : [String(e)];
			for (let e of o) {
				let t = X({
					locale: n,
					namespace: r,
					key: e,
					options: a,
					...s()
				});
				if (t !== void 0) return t;
			}
			let c = a?.defaultValue;
			return typeof c == "string" ? F(c, Y(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
		},
		async changeLanguage(e, t) {
			let r = n;
			e && (n = e), o("languageChanged", n, r);
			let i = l.t.bind(l);
			return t?.(null, i), i;
		},
		exists(e, t) {
			return X({
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
			return Z({
				...e,
				...t
			});
		},
		cloneInstance(t, n) {
			return Z({
				...e,
				...t
			});
		},
		dir(e) {
			return ce(e ?? n) === "rtl" ? "rtl" : "ltr";
		},
		setDefaultNamespace(e) {
			r = e;
		},
		hasLoadedNamespace(e) {
			try {
				return W(Array.isArray(e) ? e[0] : e, n), !0;
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
				return A(W(t, e), n);
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
}, Q = Z();
Q.dir.bind(Q), Q.init.bind(Q), Q.loadResources.bind(Q), Q.reloadResources.bind(Q), Q.use.bind(Q), Q.changeLanguage.bind(Q), Q.getFixedT.bind(Q), Q.t.bind(Q), Q.exists.bind(Q), Q.setDefaultNamespace.bind(Q), Q.hasLoadedNamespace.bind(Q), Q.loadNamespaces.bind(Q), Q.loadLanguages.bind(Q);
var it = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
	let o = (t, n) => X({
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
		return typeof s == "string" ? F(s, Y(i), e) : a[a.length - 1];
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
			dir: (t) => ce(t ?? e) === "rtl" ? "rtl" : "ltr",
			exists: (t, n) => X({
				locale: e,
				namespace: r,
				key: t,
				options: n,
				dictionaryContent: a
			}) !== void 0,
			t: s,
			getFixedT: (t, n) => (i, o) => {
				let s = X({
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
}, at = ae, ot = (e, t) => oe(e, {
	...S,
	isCookieEnabled: t
}), st = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ct = t({
	get locale() {
		return at() ?? f?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), lt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: p, defaultLocale: m } = f ?? {}, [h, g] = s(() => e ?? at() ?? t ?? m), [_, v] = s(e);
	e !== _ && (v(e), e && e !== h && g(e)), i(() => {
		st();
	}, []);
	let ee = n((e) => {
		if (h.toString() !== e.toString()) {
			if (!p?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), ot(e, d);
		}
	}, [
		h,
		p,
		d
	]), y = c ?? ee, b = te(h), x = o(() => ({
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
	return u(ct.Provider, {
		value: x,
		children: a
	});
}, ut = ({ children: e, ...t }) => d(lt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: dt, locales: $ } = f ?? {}, ft = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(ct) ?? {};
	return {
		locale: i,
		defaultLocale: dt,
		availableLocales: $,
		setLocale: n((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), ot(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			a,
			e
		])
	};
}, pt = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = ft(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => it({
		locale: r,
		setLocale: i,
		availableLocales: a ?? [],
		namespace: n,
		keyPrefix: s
	}), [
		r,
		i,
		a,
		n,
		s
	]);
	return {
		t: c,
		i18n: l,
		ready: !0
	};
}, mt = ({ children: e, i18n: t }) => (t !== void 0 && E({ log: m })(`${D("I18nextProvider", b)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), u(ut, { children: e }));
e.createContext({ i18n: null });
var ht = {
	type: "3rdParty",
	init: (e) => {}
};
function gt() {
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
function _t(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Q.use(ht).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var vt = Q;
function yt({ locale: e }) {
	let { i18n: t } = pt();
	return i(() => {
		t.language !== e && t.changeLanguage(e);
	}, [t, e]), null;
}
function bt({ children: e }) {
	let t = c().locale ?? "en", [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		_t("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		gt();
	}, []), d(mt, {
		i18n: vt,
		children: [u(yt, { locale: t }), e]
	});
}
function xt({ children: e }) {
	return u(bt, { children: e });
}
function St() {
	return u(xt, { children: u(bt, {}) });
}
export { St as default };
