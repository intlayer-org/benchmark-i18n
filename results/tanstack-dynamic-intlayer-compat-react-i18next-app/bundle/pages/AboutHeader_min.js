import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import c from "../../../../.intlayer/dictionary/index.json";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
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
}, h = "\x1B[0m", g = "\x1B[34m", _ = "\x1B[31m", ee = "\x1B[32m", v = "\x1B[35m", y = "\x1B[38;5;3m", b = "\x1B[36m", te = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, w = (e = C) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!S) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, re = !1, ie, ae = () => typeof window > "u" ? w(C) : (re ||= (ie = w(C), !0), ie), oe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (re = !1, !S && p.storage.cookies)) for (let n = 0; n < p.storage.cookies.length; n++) {
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
D("✗", _), D("✓", ee), D("⏲", g);
var ve = "translation", O = "enumeration", k = "plural", ye = "condition", A = "insertion", be = "object", xe = "array", j = "markdown", M = "html", N = "gender", P = "select", F = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), I = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, I);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => I(e, F(t, e, {
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
}, Se = (e, t, n = ".") => {
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
}, Ce = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, we = (e, t) => e[Ce(e, t) ?? "fallback"], Te = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, Ee = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, De = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], L = (e, t) => {
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
	let o = L(t, r);
	return o === void 0 ? e : i ? Oe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : Oe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = L(t, n);
	return r === void 0 ? e : String(r);
}), R = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ke(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[A], t, n);
	if (r.nodeType === "html") return z(r[M], t, n);
	if (r.nodeType === "plural") {
		let e = r[k];
		return z(Te(e, Number(R(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[O], i = De.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) De.includes(t) || (o[t] = n);
		let s = R(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? we(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[P], i = R(t, typeof r.variable == "string" ? r.variable : "value");
		return z(Ee(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[N];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, B = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Ae = /* @__PURE__ */ new WeakMap(), je = 0, Me = (e) => {
	if (!e) return "base";
	let t = Ae.get(e);
	if (t) return t;
	je += 1;
	let n = `p${je}`;
	return Ae.set(e, n), n;
}, Ne = 256, V = /* @__PURE__ */ new WeakMap(), Pe = (e) => typeof e == "object" && !!e, Fe = (e, t, n) => `${e}_${t}_${Me(n)}`, Ie = (e, t) => {
	if (!Pe(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!Pe(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= Ne && r.clear(), r.set(t, n), n;
}, Le = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Re = { index: c }, U = () => Re, ze = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Be = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ze.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Be(e ? `${e}.${String(n)}` : String(n)) }), Ve = /* @__PURE__ */ new Set(), W = (e, t, n) => {
	let r = U()[e];
	return r ? lt(r, t, n) : (Ve.has(e) || (E({ log: m })(typeof window > "u" ? `Dictionary ${_e(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ve.add(e)), Be(e));
}, He = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ue = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !He(e) || !He(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? Ue(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, We = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => Ue(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ge = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[M] : e[j];
}, Ke = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? M : j;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, qe = (e, t, n, r, i) => {
	let a = Ke(e, Le(Ge(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Je = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Ye = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = We(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ve,
				key: e
			}]
		});
	}
}, Xe = K, Ze = (e) => K, Qe = K, $e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => qe(e, i, n, t.plugins, r);
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
		return nt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, et = [
	O,
	ye,
	k,
	N,
	P
], tt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !et.includes(i)) return t;
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
		return !r && Je(i) ? i(n) : i;
	};
}, nt = (e, t) => typeof t == "function" && et.includes(e?.nodeType ?? "") ? (n) => tt(e, t, n) : t, rt = K, it = K;
process.env.INTLAYER_OPTIMIZED_NESTING;
var at = (e) => K, ot = K, st = (e, t = !0) => [
	Ye(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	Xe,
	Ze(e ?? f.defaultLocale),
	Qe,
	$e,
	at(e ?? f.defaultLocale),
	ot,
	rt,
	it
].filter((e) => e !== K), ct = (e, t, n = []) => I(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), lt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Fe(r ?? f.defaultLocale, "", n), o = Ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? st(r), c = e, l = (e) => {
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
			return ct(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, ut = /* @__PURE__ */ new Set([
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
]), dt = 5, ft = "index", pt = (e, t) => {
	if (e in U()) return W(e, t);
}, mt = (e, t, n, r, i) => {
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
	for (let [t, r] of Object.entries(e)) ut.has(t) || (n[t] = r);
	return n;
}, Y = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = pt(c, p), m === void 0 && c === t && c !== ft && (m = pt(ft, p)), m === void 0) return;
	let h;
	for (let t of mt(l, r?.lng ?? e, u, d, f)) {
		let e = Se(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = J(r), _ = B(h, g, r?.lng ?? e);
	return o < dt && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
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
}, ht = (e) => {
	E({ log: m })(`${D(e, b)}: the ${D("`resources`", b)} option is ignored when using ${D("@intlayer/i18next", v)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${D("`resources`", b)} option to reduce your bundle size.`);
}, X = (e = {}) => {
	e.resources !== void 0 && ht("createInstance");
	let t = f, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
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
		return typeof o == "string" ? B(o, J(i), e) : n;
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
			i.resources !== void 0 && ht("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
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
			return typeof c == "string" ? B(c, J(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
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
				return Se(W(t, e), n);
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
var gt = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
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
		return typeof s == "string" ? B(s, J(i), e) : a[a.length - 1];
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
}, _t = ae, vt = (e, t) => oe(e, {
	...C,
	isCookieEnabled: t
}), yt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	get locale() {
		return _t() ?? f?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), bt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: p, defaultLocale: m } = f ?? {}, [h, g] = s(() => e ?? _t() ?? t ?? m), [_, ee] = s(e);
	e !== _ && (ee(e), e && e !== h && g(e)), i(() => {
		yt();
	}, []);
	let v = n((e) => {
		if (h.toString() !== e.toString()) {
			if (!p?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), vt(e, d);
		}
	}, [
		h,
		p,
		d
	]), y = c ?? v, b = te(h), x = o(() => ({
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
	return u(Q.Provider, {
		value: x,
		children: a
	});
}, xt = ({ children: e, ...t }) => d(bt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: St, locales: $ } = f ?? {}, Ct = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(Q) ?? {};
	return {
		locale: i,
		defaultLocale: St,
		availableLocales: $,
		setLocale: n((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), vt(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			a,
			e
		])
	};
}, wt = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = Ct(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => gt({
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
}, Tt = ({ children: e, i18n: t }) => (t !== void 0 && E({ log: m })(`${D("I18nextProvider", b)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), u(xt, { children: e }));
e.createContext({ i18n: null });
var Et = {
	type: "3rdParty",
	init: (e) => {}
};
function Dt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function Ot() {
	let { t: e } = wt();
	return Dt("AboutHeader"), d(l, { children: [u("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: e("aboutHeader.aboutThisBenchmark")
	}), u("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: e("aboutHeader.thisIsAnOpenSource")
	})] });
}
Z.use(Et).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 }
});
var kt = Z;
function At({ children: e }) {
	return u(Tt, {
		i18n: kt,
		children: e
	});
}
function jt() {
	return u(At, { children: u(Ot, {}) });
}
export { jt as default };
