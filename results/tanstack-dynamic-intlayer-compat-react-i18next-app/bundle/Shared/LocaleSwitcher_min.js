import * as e from "react";
import { createContext as t, useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
import { useNavigate as o, useParams as s } from "@tanstack/react-router";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import u from "../../.intlayer/dictionary/index.json";
var d = [
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
function f(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function p() {
	let e = s({ strict: !1 }).locale ?? "en", t = o(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return c("div", {
		className: "flex items-center gap-2",
		children: c("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: d.map((e) => c("option", {
				value: e,
				children: f(e)
			}, e))
		})
	});
}
var m = {
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
}, _ = "\x1B[0m", ee = "\x1B[34m", te = "\x1B[31m", v = "\x1B[32m", y = "\x1B[35m", b = "\x1B[38;5;3m", x = "\x1B[36m", ne = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, re = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ie = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = re(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, S = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, ae = (e = C) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!S) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, oe = !1, se, ce = () => typeof window > "u" ? ae(C) : (oe ||= (se = ae(C), !0), se), le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (oe = !1, !S && h.storage.cookies)) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: re(i.expires)
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
}, fe = 50, w = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Set(), me = (e) => {
	pe.has(e) || (pe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, he = {
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
}, ge = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (me(e), he[e]);
};
function T(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = w.get(a);
	o || (o = /* @__PURE__ */ new Map(), w.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ge(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > fe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var _e = (e) => e, ve = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = _e(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, E = (e, t) => (n, r) => ve(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), D = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? _ : n : _}` : e, ye = (e, t = b, n = _) => [e].flat().map((e) => D(e, t, n)).join(", ");
D("✗", te), D("✓", v), D("⏲", ee);
var be = "translation", O = "enumeration", k = "plural", xe = "condition", A = "insertion", Se = "object", Ce = "array", j = "markdown", M = "html", N = "gender", P = "select", F = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), I = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, I);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => I(e, F(t, e, {
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
			n[r] = I(e[r], F(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = I(e[r], F(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, L = (e, t, n = ".") => {
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
}, we = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Te = (e, t) => e[we(e, t) ?? "fallback"], Ee = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, De = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, R = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], z = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Oe = (e, t, n, r) => {
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
}, ke = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : i ? Oe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : Oe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = z(t, n);
	return r === void 0 ? e : String(r);
}), B = (e, t) => e[t] ?? e.count ?? e.n, V = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ke(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return V(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(V(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return V(r[A], t, n);
	if (r.nodeType === "html") return V(r[M], t, n);
	if (r.nodeType === "plural") {
		let e = r[k];
		return V(Ee(e, Number(B(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[O], i = R.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) R.includes(t) || (o[t] = n);
		let s = B(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Te(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return V(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[P], i = B(t, typeof r.variable == "string" ? r.variable : "value");
		return V(De(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[N];
		return V(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, H = (e, t = {}, n = "en") => {
	let r = V(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Ae = /* @__PURE__ */ new WeakMap(), je = 0, Me = (e) => {
	if (!e) return "base";
	let t = Ae.get(e);
	if (t) return t;
	je += 1;
	let n = `p${je}`;
	return Ae.set(e, n), n;
}, Ne = 256, U = /* @__PURE__ */ new WeakMap(), Pe = (e) => typeof e == "object" && !!e, Fe = (e, t, n) => `${e}_${t}_${Me(n)}`, Ie = (e, t) => {
	if (!Pe(e)) return { hit: !1 };
	let n = U.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, W = (e, t, n) => {
	if (!Pe(e)) return n;
	let r = U.get(e);
	return r || (r = /* @__PURE__ */ new Map(), U.set(e, r)), r.size >= Ne && r.clear(), r.set(t, n), n;
}, Le = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Re = { index: u }, ze = () => Re, Be = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ve = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Be.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ve(e ? `${e}.${String(n)}` : String(n)) }), He = /* @__PURE__ */ new Set(), G = (e, t, n) => {
	let r = ze()[e];
	return r ? ut(r, t, n) : (He.has(e) || (E({ log: g })(typeof window > "u" ? `Dictionary ${ye(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), He.add(e)), Ve(e));
}, Ue = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, We = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Ue(e) || !Ue(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? We(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ge = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => We(e, t));
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ke = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[M] : e[j];
}, qe = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? M : j;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Je = (e, t, n, r, i) => {
	let a = qe(e, Le(Ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ye = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Xe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ge(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: be,
				key: e
			}]
		});
	}
}, Ze = q, Qe = (e) => q, $e = q, et = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => Je(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Le(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return rt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, tt = [
	O,
	xe,
	k,
	N,
	P
], nt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !tt.includes(i)) return t;
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
		return !r && Ye(i) ? i(n) : i;
	};
}, rt = (e, t) => typeof t == "function" && tt.includes(e?.nodeType ?? "") ? (n) => nt(e, t, n) : t, it = q, at = q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var ot = (e) => q, st = q, ct = (e, t = !0) => [
	Xe(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Ze,
	Qe(e ?? m.defaultLocale),
	$e,
	et,
	ot(e ?? m.defaultLocale),
	st,
	it,
	at
].filter((e) => e !== q), lt = (e, t, n = []) => I(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), ut = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Fe(r ?? m.defaultLocale, "", n), o = Ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? ct(r), c = e, l = (e) => {
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
			return lt(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return c === null ? W(e, a, null) : Array.isArray(c) ? W(e, a, c.map(l)) : W(e, a, l(c));
}, dt = /* @__PURE__ */ new Set([
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
]), ft = 5, pt = "index", mt = (e, t) => {
	if (e in ze()) return G(e, t);
}, ht = (e, t, n, r, i) => {
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
	for (let [t, r] of Object.entries(e)) dt.has(t) || (n[t] = r);
	return n;
}, X = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = mt(c, p), m === void 0 && c === t && c !== pt && (m = mt(pt, p)), m === void 0) return;
	let h;
	for (let t of ht(l, r?.lng ?? e, u, d, f)) {
		let e = L(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = Y(r), _ = H(h, g, r?.lng ?? e);
	return o < ft && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
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
}, gt = (e) => {
	E({ log: g })(`${D(e, x)}: the ${D("`resources`", x)} option is ignored when using ${D("@intlayer/i18next", y)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${D("`resources`", x)} option to reduce your bundle size.`);
}, Z = (e = {}) => {
	e.resources !== void 0 && gt("createInstance");
	let t = m, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
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
		return typeof o == "string" ? H(o, Y(i), e) : n;
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
			i.resources !== void 0 && gt("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
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
			return typeof c == "string" ? H(c, Y(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
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
			return de(e ?? n) === "rtl" ? "rtl" : "ltr";
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
				return L(G(t, e), n);
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
var $ = ce, _t = (e, t) => le(e, {
	...C,
	isCookieEnabled: t
}), vt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, yt = t({
	get locale() {
		return $() ?? m?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), bt = ({ locale: e, defaultLocale: t, variant: o, children: s, setLocale: l, disableEditor: u, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = m ?? {}, [h, g] = a(() => e ?? $() ?? t ?? p), [_, ee] = a(e);
	e !== _ && (ee(e), e && e !== h && g(e)), r(() => {
		vt();
	}, []);
	let te = n((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), _t(e, d);
		}
	}, [
		h,
		f,
		d
	]), v = l ?? te, y = ne(h), b = i(() => ({
		locale: y,
		setLocale: v,
		variant: o,
		disableEditor: u
	}), [
		y,
		v,
		o,
		u
	]);
	return c(yt.Provider, {
		value: b,
		children: s
	});
}, xt = ({ children: e, ...t }) => l(bt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), St = ({ children: e, i18n: t }) => (t !== void 0 && E({ log: g })(`${D("I18nextProvider", x)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), c(xt, { children: e }));
e.createContext({ i18n: null }), Q.use({
	type: "3rdParty",
	init: (e) => {}
}).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 }
});
var Ct = Q;
function wt({ children: e }) {
	return c(St, {
		i18n: Ct,
		children: e
	});
}
function Tt() {
	return c(wt, { children: c(p, {}) });
}
export { Tt as default };
