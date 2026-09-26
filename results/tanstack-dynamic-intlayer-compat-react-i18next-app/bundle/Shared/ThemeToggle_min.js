import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useMemo as a, useState as o } from "react";
import s from "../../.intlayer/dictionary/index.json";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
var u = {
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
}, d = {
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
}, f = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, p = "\x1B[0m", m = "\x1B[34m", h = "\x1B[31m", g = "\x1B[32m", _ = "\x1B[35m", ee = "\x1B[38;5;3m", v = "\x1B[36m", te = (e, t = u?.locales, n = u?.defaultLocale) => {
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
}, y = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, b = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = y(n.expires);
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
}, ne = (e = S) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!x) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, C = !1, w, re = () => typeof window > "u" ? ne(S) : (C ||= (w = ne(S), !0), w), ie = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (C = !1, !x && d.storage.cookies)) for (let n = 0; n < d.storage.cookies.length; n++) {
		let { name: r, attributes: i } = d.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: y(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, b(r, e, i));
			} catch {}
		}
	}
}, ae = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], oe = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return ae.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, se = 50, ce = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Set(), ue = (e) => {
	le.has(e) || (le.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function T(e, t, n) {
	let r = t ?? u?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? fe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var pe = (e) => e, me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = pe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, E = (e, t) => (n, r) => me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), D = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? p : n : p}` : e, he = (e, t = ee, n = p) => [e].flat().map((e) => D(e, t, n)).join(", ");
D("✗", h), D("✓", g), D("⏲", m);
var ge = "translation", _e = "enumeration", ve = "plural", ye = "condition", O = "insertion", be = "object", xe = "array", Se = "markdown", k = "html", A = "gender", j = "select", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
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
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e, t, n = ".") => {
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
}, F = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], I = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, L = (e, t, n, r) => {
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
}, De = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = I(t, r);
	return o === void 0 ? e : i ? L(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = I(t, r);
	return o === void 0 ? e : L(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = I(t, n);
	return r === void 0 ? e : String(r);
}), R = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return De(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[O], t, n);
	if (r.nodeType === "html") return z(r[k], t, n);
	if (r.nodeType === "plural") {
		let e = r[ve];
		return z(Te(e, Number(R(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[_e], i = F.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) F.includes(t) || (o[t] = n);
		let s = R(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? we(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[j], i = R(t, typeof r.variable == "string" ? r.variable : "value");
		return z(Ee(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[A];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, B = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Oe = /* @__PURE__ */ new WeakMap(), ke = 0, Ae = (e) => {
	if (!e) return "base";
	let t = Oe.get(e);
	if (t) return t;
	ke += 1;
	let n = `p${ke}`;
	return Oe.set(e, n), n;
}, je = 256, V = /* @__PURE__ */ new WeakMap(), Me = (e) => typeof e == "object" && !!e, Ne = (e, t, n) => `${e}_${t}_${Ae(n)}`, Pe = (e, t) => {
	if (!Me(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!Me(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= je && r.clear(), r.set(t, n), n;
}, Fe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Ie = { index: s }, Le = () => Ie, Re = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), U = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Re.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : U(e ? `${e}.${String(n)}` : String(n)) }), ze = /* @__PURE__ */ new Set(), W = (e, t, n) => {
	let r = Le()[e];
	return r ? st(r, t, n) : (ze.has(e) || (E({ log: f })(typeof window > "u" ? `Dictionary ${he(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), ze.add(e)), U(e));
}, Be = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ve = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Be(e) || !Be(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? Ve(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, He = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => Ve(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ue = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[k] : e[Se];
}, We = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? k : Se;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ge = (e, t, n, r, i) => {
	let a = We(e, Fe(Ue(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ke = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, qe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = He(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ge,
				key: e
			}]
		});
	}
}, Je = K, Ye = (e) => K, Xe = K, Ze = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: O }], i = e[O], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => Ge(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Fe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return et(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Qe = [
	_e,
	ye,
	ve,
	A,
	j
], $e = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Qe.includes(i)) return t;
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
		return !r && Ke(i) ? i(n) : i;
	};
}, et = (e, t) => typeof t == "function" && Qe.includes(e?.nodeType ?? "") ? (n) => $e(e, t, n) : t, tt = K, nt = K;
process.env.INTLAYER_OPTIMIZED_NESTING;
var rt = (e) => K, it = K, at = (e, t = !0) => [
	qe(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	Je,
	Ye(e ?? u.defaultLocale),
	Xe,
	Ze,
	rt(e ?? u.defaultLocale),
	it,
	tt,
	nt
].filter((e) => e !== K), ot = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), st = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ne(r ?? u.defaultLocale, "", n), o = Pe(e, a);
	if (o.hit) return o.content;
	let s = n ?? at(r), c = e, l = (e) => {
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
			return ot(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, ct = /* @__PURE__ */ new Set([
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
]), lt = 5, ut = "index", dt = (e, t) => {
	if (e in Le()) return W(e, t);
}, ft = (e, t, n, r, i) => {
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
	for (let [t, r] of Object.entries(e)) ct.has(t) || (n[t] = r);
	return n;
}, Y = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = dt(c, p), m === void 0 && c === t && c !== ut && (m = dt(ut, p)), m === void 0) return;
	let h;
	for (let t of ft(l, r?.lng ?? e, u, d, f)) {
		let e = P(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = J(r), _ = B(h, g, r?.lng ?? e);
	return o < lt && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
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
}, pt = (e) => {
	E({ log: f })(`${D(e, v)}: the ${D("`resources`", v)} option is ignored when using ${D("@intlayer/i18next", _)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${D("`resources`", v)} option to reduce your bundle size.`);
}, X = (e = {}) => {
	e.resources !== void 0 && pt("createInstance");
	let t = u, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
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
			i.resources !== void 0 && pt("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
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
			return oe(e ?? n) === "rtl" ? "rtl" : "ltr";
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
				return P(W(t, e), n);
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
var mt = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
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
			dir: (t) => oe(t ?? e) === "rtl" ? "rtl" : "ltr",
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
}, ht = re, gt = (e, t) => ie(e, {
	...S,
	isCookieEnabled: t
}), _t = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, vt = t({
	get locale() {
		return ht() ?? u?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), yt = ({ locale: e, defaultLocale: t, variant: r, children: s, setLocale: l, disableEditor: d, isCookieEnabled: f }) => {
	let { locales: p, defaultLocale: m } = u ?? {}, [h, g] = o(() => e ?? ht() ?? t ?? m), [_, ee] = o(e);
	e !== _ && (ee(e), e && e !== h && g(e)), i(() => {
		_t();
	}, []);
	let v = n((e) => {
		if (h.toString() !== e.toString()) {
			if (!p?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), gt(e, f);
		}
	}, [
		h,
		p,
		f
	]), y = l ?? v, b = te(h), x = a(() => ({
		locale: b,
		setLocale: y,
		variant: r,
		disableEditor: d
	}), [
		b,
		y,
		r,
		d
	]);
	return c(vt.Provider, {
		value: x,
		children: s
	});
}, bt = ({ children: e, ...t }) => l(yt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: xt, locales: Q } = u ?? {}, St = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(vt) ?? {};
	return {
		locale: i,
		defaultLocale: xt,
		availableLocales: Q,
		setLocale: n((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), gt(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			a,
			e
		])
	};
}, Ct = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: o } = St(), s = t?.keyPrefix, { translate: c, i18n: l } = a(() => mt({
		locale: r,
		setLocale: i,
		availableLocales: o ?? [],
		namespace: n,
		keyPrefix: s
	}), [
		r,
		i,
		o,
		n,
		s
	]);
	return {
		t: c,
		i18n: l,
		ready: !0
	};
}, wt = ({ children: e, i18n: t }) => (t !== void 0 && E({ log: f })(`${D("I18nextProvider", v)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), c(bt, { children: e }));
e.createContext({ i18n: null });
var Tt = {
	type: "3rdParty",
	init: (e) => {}
};
function Et() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Dt() {
	let { t: e } = Ct(), [t, n] = o("auto");
	i(() => {
		let e = Et();
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
	return c("button", {
		type: "button",
		onClick: r,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "themeToggle.themeAuto" : t === "dark" ? "themeToggle.themeDark" : "themeToggle.themeLight")
	});
}
Z.use(Tt).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 }
});
var Ot = Z;
function kt({ children: e }) {
	return c(wt, {
		i18n: Ot,
		children: e
	});
}
function At() {
	return c(kt, { children: c(Dt, {}) });
}
export { At as default };
