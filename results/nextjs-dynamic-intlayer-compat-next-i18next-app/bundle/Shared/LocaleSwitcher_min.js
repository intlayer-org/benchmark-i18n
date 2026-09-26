import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import { useParams as c, usePathname as l, useRouter as u } from "next/navigation";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import p from "../.intlayer/dictionary/index.json";
var m = [
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
function h(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function g() {
	let e = c().locale ?? "en", t = l(), n = u(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return d("div", {
		className: "flex items-center gap-2",
		children: d("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: m.map((e) => d("option", {
				value: e,
				children: h(e)
			}, e))
		})
	});
}
var _ = {
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
}, b = "\x1B[0m", x = "\x1B[34m", ee = "\x1B[31m", te = "\x1B[32m", ne = "\x1B[35m", re = "\x1B[38;5;3m", S = "\x1B[36m", ie = (e, t = _?.locales, n = _?.defaultLocale) => {
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
}, ae = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, oe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ae(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, se = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, ce = (e = C) => {
	let { locales: t } = _;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!se) for (let t = 0; t < (v.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(v.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, w = !1, T, le = () => typeof window > "u" ? ce(C) : (w ||= (T = ce(C), !0), T), ue = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (w = !1, !se && v.storage.cookies)) for (let n = 0; n < v.storage.cookies.length; n++) {
		let { name: r, attributes: i } = v.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ae(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, oe(r, e, i));
			} catch {}
		}
	}
}, de = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], E = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return de.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, fe = 50, D = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Set(), me = (e) => {
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
function O(e, t, n) {
	let r = t ?? _?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = D.get(a);
	o || (o = /* @__PURE__ */ new Map(), D.set(a, o));
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
}, k = (e, t) => (n, r) => ve(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), A = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? b : n : b}` : e, ye = (e, t = re, n = b) => [e].flat().map((e) => A(e, t, n)).join(", ");
A("✗", ee), A("✓", te), A("⏲", x);
var be = "translation", xe = "enumeration", Se = "plural", Ce = "insertion", we = "object", Te = "array", Ee = "html", De = "gender", Oe = "select", j = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, M);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, j(t, e, {
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
], P = (e, t) => {
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
	let o = P(t, r);
	return o === void 0 ? e : i ? Pe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = P(t, r);
	return o === void 0 ? e : Pe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = P(t, n);
	return r === void 0 ? e : String(r);
}), F = (e, t) => e[t] ?? e.count ?? e.n, I = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Fe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return I(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(I(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return I(r[Ce], t, n);
	if (r.nodeType === "html") return I(r[Ee], t, n);
	if (r.nodeType === "plural") {
		let e = r[Se];
		return I(je(e, Number(F(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[xe], i = Ne.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ne.includes(t) || (o[t] = n);
		let s = F(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = O("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ae(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return I(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Oe], i = F(t, typeof r.variable == "string" ? r.variable : "value");
		return I(Me(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[De];
		return I(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, L = (e, t = {}, n = "en") => {
	let r = I(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, R = /* @__PURE__ */ new WeakMap(), z = 0, Ie = (e) => {
	if (!e) return "base";
	let t = R.get(e);
	if (t) return t;
	z += 1;
	let n = `p${z}`;
	return R.set(e, n), n;
}, Le = 256, B = /* @__PURE__ */ new WeakMap(), V = (e) => typeof e == "object" && !!e, Re = (e, t, n) => `${e}_${t}_${Ie(n)}`, ze = (e, t) => {
	if (!V(e)) return { hit: !1 };
	let n = B.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!V(e)) return n;
	let r = B.get(e);
	return r || (r = /* @__PURE__ */ new Map(), B.set(e, r)), r.size >= Le && r.clear(), r.set(t, n), n;
}, Be = { index: p }, U = () => Be, Ve = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), W = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ve.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : W(e ? `${e}.${String(n)}` : String(n)) }), G = /* @__PURE__ */ new Set(), K = (e, t, n) => {
	let r = U()[e];
	return r ? nt(r, t, n) : (G.has(e) || (k({ log: y })(typeof window > "u" ? `Dictionary ${ye(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), G.add(e)), W(e));
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
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ge = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = We(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: be,
				key: e
			}]
		});
	}
}, Ke = q, qe = (e) => q, Je = q, Ye = q, Xe = q, Ze = q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Qe = (e) => q, $e = q, et = (e, t = !0) => [
	Ge(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	Ke,
	qe(e ?? _.defaultLocale),
	Je,
	Ye,
	Qe(e ?? _.defaultLocale),
	$e,
	Xe,
	Ze
].filter((e) => e !== q), tt = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), nt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Re(r ?? _.defaultLocale, "", n), o = ze(e, a);
	if (o.hit) return o.content;
	let s = n ?? et(r), c = e, l = (e) => {
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
			return tt(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, rt = /* @__PURE__ */ new Set([
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
]), it = 5, at = "index", ot = (e, t) => {
	if (e in U()) return K(e, t);
}, st = (e, t, n, r, i) => {
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
	for (let [t, r] of Object.entries(e)) rt.has(t) || (n[t] = r);
	return n;
}, X = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = ot(c, p), m === void 0 && c === t && c !== at && (m = ot(at, p)), m === void 0) return;
	let h;
	for (let t of st(l, r?.lng ?? e, u, d, f)) {
		let e = N(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = Y(r), _ = L(h, g, r?.lng ?? e);
	return o < it && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
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
}, ct = (e) => {
	k({ log: y })(`${A(e, S)}: the ${A("`resources`", S)} option is ignored when using ${A("@intlayer/i18next", ne)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${A("`resources`", S)} option to reduce your bundle size.`);
}, Z = (e = {}) => {
	e.resources !== void 0 && ct("createInstance");
	let t = _, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
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
		return typeof o == "string" ? L(o, Y(i), e) : n;
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
			i.resources !== void 0 && ct("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
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
			return typeof c == "string" ? L(c, Y(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
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
			return E(e ?? n) === "rtl" ? "rtl" : "ltr";
		},
		setDefaultNamespace(e) {
			r = e;
		},
		hasLoadedNamespace(e) {
			try {
				return K(Array.isArray(e) ? e[0] : e, n), !0;
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
				return N(K(t, e), n);
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
var lt = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
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
		return typeof s == "string" ? L(s, Y(i), e) : a[a.length - 1];
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
			dir: (t) => E(t ?? e) === "rtl" ? "rtl" : "ltr",
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
}, ut = le, dt = (e, t) => ue(e, {
	...C,
	isCookieEnabled: t
}), ft = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, pt = t({
	get locale() {
		return ut() ?? _?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), mt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: l, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: p } = _ ?? {}, [m, h] = s(() => e ?? ut() ?? t ?? p), [g, v] = s(e);
	e !== g && (v(e), e && e !== m && h(e)), i(() => {
		ft();
	}, []);
	let y = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), dt(e, u);
		}
	}, [
		m,
		f,
		u
	]), b = c ?? y, x = ie(m), ee = o(() => ({
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
	return d(pt.Provider, {
		value: ee,
		children: a
	});
}, ht = ({ children: e, ...t }) => f(mt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: gt, locales: $ } = _ ?? {}, _t = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(pt) ?? {};
	return {
		locale: i,
		defaultLocale: gt,
		availableLocales: $,
		setLocale: n((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), dt(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			a,
			e
		])
	};
}, vt = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = _t(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => lt({
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
}, yt = ({ children: e, i18n: t }) => (t !== void 0 && k({ log: y })(`${A("I18nextProvider", S)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), d(ht, { children: e }));
e.createContext({ i18n: null });
var bt = {
	type: "3rdParty",
	init: (e) => {}
};
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
Q.use(bt).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var Ct = Q;
function wt({ locale: e }) {
	let { i18n: t } = vt();
	return i(() => {
		t.language !== e && t.changeLanguage(e);
	}, [t, e]), null;
}
function Tt({ children: e }) {
	let t = c().locale ?? "en", [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		St("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		xt();
	}, []), f(yt, {
		i18n: Ct,
		children: [d(wt, { locale: t }), e]
	});
}
function Et({ children: e }) {
	return d(Tt, { children: e });
}
function Dt() {
	return d(Et, { children: d(g, {}) });
}
export { Dt as default };
