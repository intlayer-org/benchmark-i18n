import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import c from "next/link";
import { useParams as l } from "next/navigation";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import f from "../.intlayer/dictionary/index.json";
var p = (e) => /^https?:\/\//.test(e ?? "");
function m(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var h = ({ href: e, children: t, ...n }) => {
	let r = l().locale ?? "en";
	return e == null || typeof e != "string" || p(e) ? u(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : u(c, {
		href: m(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, g = {
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
}, _ = {
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
}, v = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, y = "\x1B[0m", b = "\x1B[34m", x = "\x1B[31m", S = "\x1B[32m", ee = "\x1B[35m", te = "\x1B[38;5;3m", C = "\x1B[36m", ne = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, w = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, re = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = w(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ie = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var T = {
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
}, E = (e = T) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ie) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, D = !1, ae, oe = () => typeof window > "u" ? E(T) : (D ||= (ae = E(T), !0), ae), se = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (D = !1, !ie && _.storage.cookies)) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: w(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, re(r, e, i));
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
], le = (e) => {
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
}, ue = 50, de = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), pe = (e) => {
	fe.has(e) || (fe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, me = {
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
}, he = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (pe(e), me[e]);
};
function O(e, t, n) {
	let r = t ?? g?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = de.get(a);
	o || (o = /* @__PURE__ */ new Map(), de.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? he(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ue && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ge = (e) => e, _e = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ge(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, k = (e, t) => (n, r) => _e(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), A = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? y : n : y}` : e, ve = (e, t = te, n = y) => [e].flat().map((e) => A(e, t, n)).join(", ");
A("✗", x), A("✓", S), A("⏲", b);
var ye = "translation", be = "enumeration", xe = "plural", Se = "insertion", Ce = "object", we = "array", Te = "html", Ee = "gender", De = "select", j = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, M);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, j(t, e, {
		type: we,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Ce,
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
}, Oe = (e, t, n = ".") => {
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
}, ke = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ae = (e, t) => e[ke(e, t) ?? "fallback"], je = (e, t, n) => e[O("PluralRules", n).select(t)] ?? e.other, Me = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ne = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], N = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Pe = (e, t, n, r) => {
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
}, Fe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = N(t, r);
	return o === void 0 ? e : i ? Pe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = N(t, r);
	return o === void 0 ? e : Pe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = N(t, n);
	return r === void 0 ? e : String(r);
}), P = (e, t) => e[t] ?? e.count ?? e.n, F = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Fe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return F(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(F(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return F(r[Se], t, n);
	if (r.nodeType === "html") return F(r[Te], t, n);
	if (r.nodeType === "plural") {
		let e = r[xe];
		return F(je(e, Number(P(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[be], i = Ne.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ne.includes(t) || (o[t] = n);
		let s = P(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = O("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ae(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return F(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[De], i = P(t, typeof r.variable == "string" ? r.variable : "value");
		return F(Me(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ee];
		return F(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, I = (e, t = {}, n = "en") => {
	let r = F(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, L = /* @__PURE__ */ new WeakMap(), R = 0, Ie = (e) => {
	if (!e) return "base";
	let t = L.get(e);
	if (t) return t;
	R += 1;
	let n = `p${R}`;
	return L.set(e, n), n;
}, Le = 256, z = /* @__PURE__ */ new WeakMap(), B = (e) => typeof e == "object" && !!e, Re = (e, t, n) => `${e}_${t}_${Ie(n)}`, ze = (e, t) => {
	if (!B(e)) return { hit: !1 };
	let n = z.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, V = (e, t, n) => {
	if (!B(e)) return n;
	let r = z.get(e);
	return r || (r = /* @__PURE__ */ new Map(), z.set(e, r)), r.size >= Le && r.clear(), r.set(t, n), n;
}, Be = { index: f }, H = () => Be, Ve = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), U = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ve.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : U(e ? `${e}.${String(n)}` : String(n)) }), W = /* @__PURE__ */ new Set(), G = (e, t, n) => {
	let r = H()[e];
	return r ? tt(r, t, n) : (W.has(e) || (k({ log: v })(typeof window > "u" ? `Dictionary ${ve(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), W.add(e)), U(e));
}, K = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, He = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !K(e) || !K(t)) return e;
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
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, We = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ue(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ye,
				key: e
			}]
		});
	}
}, Ge = q, Ke = (e) => q, qe = q, Je = q, Ye = q, Xe = q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Ze = (e) => q, Qe = q, $e = (e, t = !0) => [
	We(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	Ge,
	Ke(e ?? g.defaultLocale),
	qe,
	Je,
	Ze(e ?? g.defaultLocale),
	Qe,
	Ye,
	Xe
].filter((e) => e !== q), et = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), tt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Re(r ?? g.defaultLocale, "", n), o = ze(e, a);
	if (o.hit) return o.content;
	let s = n ?? $e(r), c = e, l = (e) => {
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
			return et(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return c === null ? V(e, a, null) : Array.isArray(c) ? V(e, a, c.map(l)) : V(e, a, l(c));
}, nt = /* @__PURE__ */ new Set([
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
]), rt = 5, it = "index", at = (e, t) => {
	if (e in H()) return G(e, t);
}, ot = (e, t, n, r, i) => {
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
	for (let [t, r] of Object.entries(e)) nt.has(t) || (n[t] = r);
	return n;
}, X = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = at(c, p), m === void 0 && c === t && c !== it && (m = at(it, p)), m === void 0) return;
	let h;
	for (let t of ot(l, r?.lng ?? e, u, d, f)) {
		let e = Oe(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = Y(r), _ = I(h, g, r?.lng ?? e);
	return o < rt && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
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
}, st = (e) => {
	k({ log: v })(`${A(e, C)}: the ${A("`resources`", C)} option is ignored when using ${A("@intlayer/i18next", ee)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${A("`resources`", C)} option to reduce your bundle size.`);
}, Z = (e = {}) => {
	e.resources !== void 0 && st("createInstance");
	let t = g, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
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
		return typeof o == "string" ? I(o, Y(i), e) : n;
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
			i.resources !== void 0 && st("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
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
			return typeof c == "string" ? I(c, Y(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
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
			return le(e ?? n) === "rtl" ? "rtl" : "ltr";
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
				return Oe(G(t, e), n);
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
var ct = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
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
		return typeof s == "string" ? I(s, Y(i), e) : a[a.length - 1];
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
			dir: (t) => le(t ?? e) === "rtl" ? "rtl" : "ltr",
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
}, lt = oe, ut = (e, t) => se(e, {
	...T,
	isCookieEnabled: t
}), dt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ft = t({
	get locale() {
		return lt() ?? g?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), pt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = g ?? {}, [m, h] = s(() => e ?? lt() ?? t ?? p), [_, v] = s(e);
	e !== _ && (v(e), e && e !== m && h(e)), i(() => {
		dt();
	}, []);
	let y = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), ut(e, d);
		}
	}, [
		m,
		f,
		d
	]), b = c ?? y, x = ne(m), S = o(() => ({
		locale: x,
		setLocale: b,
		variant: r,
		disableEditor: l
	}), [
		x,
		b,
		r,
		l
	]);
	return u(ft.Provider, {
		value: S,
		children: a
	});
}, mt = ({ children: e, ...t }) => d(pt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: ht, locales: $ } = g ?? {}, gt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(ft) ?? {};
	return {
		locale: i,
		defaultLocale: ht,
		availableLocales: $,
		setLocale: n((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), ut(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			a,
			e
		])
	};
}, _t = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = gt(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => ct({
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
}, vt = ({ children: e, i18n: t }) => (t !== void 0 && k({ log: v })(`${A("I18nextProvider", C)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), u(mt, { children: e }));
e.createContext({ i18n: null });
var yt = {
	type: "3rdParty",
	init: (e) => {}
};
function bt() {
	let { t: e } = _t(), t = [
		{
			label: e("shared.footer.github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e("shared.footer.methodology"),
			href: "/about",
			isInternal: !0
		},
		{
			label: e("shared.footer.contributing"),
			href: "/contact",
			isInternal: !0
		}
	];
	return u("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: d("div", {
			className: "container py-8",
			children: [d("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					d("div", { children: [u("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), u("p", {
						className: "text-sm text-muted-foreground",
						children: e("shared.footer.anOpenSourceTestApplication")
					})] }),
					d("div", { children: [u("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("shared.footer.resources")
					}), u("ul", {
						className: "space-y-1",
						children: t.map((e) => u("li", { children: e.isInternal ? u(h, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : u("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					d("div", { children: [u("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("shared.footer.contact")
					}), u("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), u("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e("shared.footer.builtWith")
			})]
		})
	});
}
function xt() {
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
function St(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Q.use(yt).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var Ct = Q;
function wt({ locale: e }) {
	let { i18n: t } = _t();
	return i(() => {
		t.language !== e && t.changeLanguage(e);
	}, [t, e]), null;
}
function Tt({ children: e }) {
	let t = l().locale ?? "en", [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		St("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		xt();
	}, []), d(vt, {
		i18n: Ct,
		children: [u(wt, { locale: t }), e]
	});
}
function Et({ children: e }) {
	return u(Tt, { children: e });
}
function Dt() {
	return u(Et, { children: u(bt, {}) });
}
export { Dt as default };
