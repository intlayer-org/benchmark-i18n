import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import { Link as c, useNavigate as l, useParams as u } from "@tanstack/react-router";
import { ChevronDown as d } from "lucide-react";
import f from "../../.intlayer/dictionary/index.json";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
var h = {
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
}, _ = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, v = "\x1B[0m", ee = "\x1B[34m", y = "\x1B[31m", b = "\x1B[32m", te = "\x1B[35m", ne = "\x1B[38;5;3m", x = "\x1B[36m", re = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, ie = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = S(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ae = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, oe = (e = C) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ae) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, se = !1, w, ce = () => typeof window > "u" ? oe(C) : (se ||= (w = oe(C), !0), w), le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (se = !1, !ae && g.storage.cookies)) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: S(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ie(r, e, i));
			} catch {}
		}
	}
}, ue = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], de = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return ue.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, fe = 50, pe = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Set(), he = (e) => {
	me.has(e) || (me.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ge = {
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
}, _e = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (he(e), ge[e]);
};
function T(e, t, n) {
	let r = t ?? h?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = pe.get(a);
	o || (o = /* @__PURE__ */ new Map(), pe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? _e(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > fe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ve = (e) => e, ye = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ve(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, E = (e, t) => (n, r) => ye(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), D = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e, be = (e, t = ne, n = v) => [e].flat().map((e) => D(e, t, n)).join(", ");
D("✗", y), D("✓", b), D("⏲", ee);
var xe = "translation", Se = "enumeration", O = "plural", Ce = "condition", k = "insertion", we = "object", Te = "array", Ee = "markdown", A = "html", j = "gender", M = "select", N = (e, t, n) => ({
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
}, De = (e, t, n = ".") => {
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
}, Oe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ke = (e, t) => e[Oe(e, t) ?? "fallback"], Ae = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, je = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Me = [
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
}, Ne = (e, t, n, r) => {
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
}, Pe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = F(t, r);
	return o === void 0 ? e : i ? Ne(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = F(t, r);
	return o === void 0 ? e : Ne(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = F(t, n);
	return r === void 0 ? e : String(r);
}), I = (e, t) => e[t] ?? e.count ?? e.n, L = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Pe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return L(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(L(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return L(r[k], t, n);
	if (r.nodeType === "html") return L(r[A], t, n);
	if (r.nodeType === "plural") {
		let e = r[O];
		return L(Ae(e, Number(I(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Se], i = Me.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Me.includes(t) || (o[t] = n);
		let s = I(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ke(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return L(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[M], i = I(t, typeof r.variable == "string" ? r.variable : "value");
		return L(je(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[j];
		return L(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, R = (e, t = {}, n = "en") => {
	let r = L(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, z = /* @__PURE__ */ new WeakMap(), B = 0, Fe = (e) => {
	if (!e) return "base";
	let t = z.get(e);
	if (t) return t;
	B += 1;
	let n = `p${B}`;
	return z.set(e, n), n;
}, Ie = 256, V = /* @__PURE__ */ new WeakMap(), H = (e) => typeof e == "object" && !!e, Le = (e, t, n) => `${e}_${t}_${Fe(n)}`, Re = (e, t) => {
	if (!H(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, U = (e, t, n) => {
	if (!H(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= Ie && r.clear(), r.set(t, n), n;
}, ze = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Be = { index: f }, Ve = () => Be, He = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ue = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : He.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ue(e ? `${e}.${String(n)}` : String(n)) }), We = /* @__PURE__ */ new Set(), W = (e, t, n) => {
	let r = Ve()[e];
	return r ? ft(r, t, n) : (We.has(e) || (E({ log: _ })(typeof window > "u" ? `Dictionary ${be(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), We.add(e)), Ue(e));
}, Ge = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ke = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Ge(e) || !Ge(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? Ke(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, qe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => Ke(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Je = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[A] : e[Ee];
}, Ye = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? A : Ee;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Xe = (e, t, n, r, i) => {
	let a = Ye(e, ze(Je(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ze = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Qe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = qe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: xe,
				key: e
			}]
		});
	}
}, $e = K, et = (e) => K, tt = K, nt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => Xe(e, i, n, t.plugins, r);
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
		return at(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, rt = [
	Se,
	Ce,
	O,
	j,
	M
], it = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !rt.includes(i)) return t;
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
		return !r && Ze(i) ? i(n) : i;
	};
}, at = (e, t) => typeof t == "function" && rt.includes(e?.nodeType ?? "") ? (n) => it(e, t, n) : t, ot = K, st = K;
process.env.INTLAYER_OPTIMIZED_NESTING;
var ct = (e) => K, lt = K, ut = (e, t = !0) => [
	Qe(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	$e,
	et(e ?? h.defaultLocale),
	tt,
	nt,
	ct(e ?? h.defaultLocale),
	lt,
	ot,
	st
].filter((e) => e !== K), dt = (e, t, n = []) => P(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), ft = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Le(r ?? h.defaultLocale, "", n), o = Re(e, a);
	if (o.hit) return o.content;
	let s = n ?? ut(r), c = e, l = (e) => {
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
			return dt(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? U(e, a, null) : Array.isArray(c) ? U(e, a, c.map(l)) : U(e, a, l(c));
}, pt = /* @__PURE__ */ new Set([
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
]), mt = 5, ht = "index", gt = (e, t) => {
	if (e in Ve()) return W(e, t);
}, _t = (e, t, n, r, i) => {
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
	for (let [t, r] of Object.entries(e)) pt.has(t) || (n[t] = r);
	return n;
}, Y = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = gt(c, p), m === void 0 && c === t && c !== ht && (m = gt(ht, p)), m === void 0) return;
	let h;
	for (let t of _t(l, r?.lng ?? e, u, d, f)) {
		let e = De(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = J(r), _ = R(h, g, r?.lng ?? e);
	return o < mt && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
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
}, vt = (e) => {
	E({ log: _ })(`${D(e, x)}: the ${D("`resources`", x)} option is ignored when using ${D("@intlayer/i18next", te)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${D("`resources`", x)} option to reduce your bundle size.`);
}, X = (e = {}) => {
	e.resources !== void 0 && vt("createInstance");
	let t = h, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
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
		return typeof o == "string" ? R(o, J(i), e) : n;
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
			i.resources !== void 0 && vt("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
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
			return typeof c == "string" ? R(c, J(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
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
			return de(e ?? n) === "rtl" ? "rtl" : "ltr";
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
				return De(W(t, e), n);
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
var yt = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
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
		return typeof s == "string" ? R(s, J(i), e) : a[a.length - 1];
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
			dir: (t) => de(t ?? e) === "rtl" ? "rtl" : "ltr",
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
}, bt = ce, xt = (e, t) => le(e, {
	...C,
	isCookieEnabled: t
}), St = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Ct = t({
	get locale() {
		return bt() ?? h?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), wt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: l, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: f } = h ?? {}, [m, g] = s(() => e ?? bt() ?? t ?? f), [_, v] = s(e);
	e !== _ && (v(e), e && e !== m && g(e)), i(() => {
		St();
	}, []);
	let ee = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), xt(e, u);
		}
	}, [
		m,
		d,
		u
	]), y = c ?? ee, b = re(m), te = o(() => ({
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
	return p(Ct.Provider, {
		value: te,
		children: a
	});
}, Tt = ({ children: e, ...t }) => m(wt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: Et, locales: Q } = h ?? {}, Dt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(Ct) ?? {};
	return {
		locale: i,
		defaultLocale: Et,
		availableLocales: Q,
		setLocale: n((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), xt(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			a,
			e
		])
	};
}, Ot = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = Dt(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => yt({
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
}, kt = ({ children: e, i18n: t }) => (t !== void 0 && E({ log: _ })(`${D("I18nextProvider", x)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), p(Tt, { children: e }));
e.createContext({ i18n: null });
var At = {
	type: "3rdParty",
	init: (e) => {}
};
function jt() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Mt() {
	let { t: e } = Ot(), [t, n] = s("auto");
	i(() => {
		let e = jt();
		n(e), $(e);
	}, []), i(() => {
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
	let a = e(t === "auto" ? "themeToggle.themeModeAutoSystemClick" : t === "light" ? "themeToggle.themeModeLightClick" : "themeToggle.themeModeDarkClick");
	return p("button", {
		type: "button",
		onClick: r,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "themeToggle.themeAuto" : t === "dark" ? "themeToggle.themeDark" : "themeToggle.themeLight")
	});
}
var Nt = [
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
function Pt(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Ft() {
	let e = u({ strict: !1 }).locale ?? "en", t = l(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return p("div", {
		className: "flex items-center gap-2",
		children: p("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Nt.map((e) => p("option", {
				value: e,
				children: Pt(e)
			}, e))
		})
	});
}
function It(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function Lt() {
	let { t: e } = Ot();
	It("Header");
	let [t, n] = s(!1), r = u({ strict: !1 }).locale ?? "en", i = [
		{
			to: "/$locale/products",
			label: e("header.products")
		},
		{
			to: "/$locale/pricing",
			label: e("header.pricing")
		},
		{
			to: "/$locale/team",
			label: e("header.team")
		},
		{
			to: "/$locale/blog",
			label: e("header.blog")
		},
		{
			to: "/$locale/careers",
			label: e("header.careers")
		},
		{
			to: "/$locale/faq",
			label: e("header.faq")
		},
		{
			to: "/$locale/contact",
			label: e("header.contact")
		},
		{
			to: "/$locale/settings",
			label: e("header.settings")
		}
	];
	return p("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: m("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [m("div", {
				className: "flex items-center gap-8",
				children: [p(c, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), m("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						p(c, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("header.home")
						}),
						p(c, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("header.methodology")
						}),
						m("div", {
							className: "relative",
							children: [m("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("header.mockPages"), p(d, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && p("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: p("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => p(c, {
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
			}), m("div", {
				className: "flex items-center gap-4",
				children: [
					m("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [p("span", {
							className: "sr-only",
							children: e("header.goToGithub")
						}), p("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: p("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					p(Ft, {}),
					p(Mt, {})
				]
			})]
		})
	});
}
Z.use(At).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 }
});
var Rt = Z;
function zt({ children: e }) {
	return p(kt, {
		i18n: Rt,
		children: e
	});
}
function Bt() {
	return p(zt, { children: p(Lt, {}) });
}
export { Bt as default };
