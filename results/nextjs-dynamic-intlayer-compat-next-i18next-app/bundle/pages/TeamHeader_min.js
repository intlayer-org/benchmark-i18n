import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { Fragment as d, jsxDEV as f } from "react/jsx-dev-runtime";
import { useParams as p } from "next/navigation";
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
}, _ = "\x1B[0m", ee = "\x1B[34m", te = "\x1B[31m", ne = "\x1B[32m", re = "\x1B[35m", ie = "\x1B[38;5;3m", v = "\x1B[36m", ae = (e) => e, oe = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ae(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, y = (e, t) => (n, r) => oe(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), b = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? _ : n : _}` : e, se = (e, t = ie, n = _) => [e].flat().map((e) => b(e, t, n)).join(", ");
b("✗", te), b("✓", ne), b("⏲", ee);
var ce = /* @__PURE__ */ new WeakMap(), le = 0, ue = (e) => {
	if (!e) return "base";
	let t = ce.get(e);
	if (t) return t;
	le += 1;
	let n = `p${le}`;
	return ce.set(e, n), n;
}, de = 256, x = /* @__PURE__ */ new WeakMap(), fe = (e) => typeof e == "object" && !!e, pe = (e, t, n) => `${e}_${t}_${ue(n)}`, me = (e, t) => {
	if (!fe(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!fe(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= de && r.clear(), r.set(t, n), n;
}, he = "translation", ge = "enumeration", _e = "plural", ve = "insertion", ye = "object", be = "array", xe = "html", Se = "gender", Ce = "select", C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: be,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ye,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = C(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = C(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, we = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Te = (e, t) => e[we(e, t) ?? "fallback"], w = "default", Ee = /[^A-Za-z0-9._&=-]/g, T = /[^A-Za-z0-9._-]/g, De = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, E = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, De);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, D = (e) => e === void 0 ? w : typeof e == "string" ? E(e, Ee) : Object.keys(e).sort().map((t) => `${E(t, T)}=${E(String(e[t]), T)}`).join("&"), O = (e) => Array.isArray(e) ? e.length === 0 ? [w] : e.map(D) : [D(e)], Oe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? w : e[0] ?? "default";
}, ke = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ae = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, je = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Me = (e, t) => {
	if (!Ae(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? w : Oe(O(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ke(e, n, t, s)).map((t) => je(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ne = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Pe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? O(n).join(",") : String(n)}`;
}).join("|") : "", k = () => ({}), Fe = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), A = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Fe.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : A(e ? `${e}.${String(n)}` : String(n)) }), j = /* @__PURE__ */ new Set(), M = (e, t, n) => {
	let r = k()[e];
	return r ? $e(r, t, n) : (j.has(e) || (y({ log: g })(typeof window > "u" ? `Dictionary ${se(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), j.add(e)), A(e));
}, Ie = 50, N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Set(), Le = (e) => {
	P.has(e) || (P.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Re = {
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
}, ze = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Le(e), Re[e]);
};
function F(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = N.get(a);
	o || (o = /* @__PURE__ */ new Map(), N.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ze(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ie && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Be = (e, t, n) => e[F("PluralRules", n).select(t)] ?? e.other, Ve = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (I(e) && I(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : L(e[r], t[r]));
		return n;
	}
	return e;
}, He = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => L(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ue = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: he,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return He(o, e, t);
	}
}, We = R, Ge = R, Ke = R, qe = R, Je = R, Ye = (e) => R, Xe = R, Ze = (e, t = !0) => [
	Ue(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	We,
	Ge,
	Ke,
	Ye(e ?? m.defaultLocale),
	Xe,
	qe,
	Je
], Qe = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), $e = (e, t, n) => {
	let { locale: r, selector: i } = Ne(t), a = pe(r ?? m.defaultLocale, Pe(i), n), o = me(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ze(r), c = Me(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Qe(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, z = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, et = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = z(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, tt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = {
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
}, nt = (e = B) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!tt) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, rt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !tt && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: z(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, et(r, e, i));
			} catch {}
		}
	}
}, it = nt(B), at = (e, t) => rt(e, {
	...B,
	isCookieEnabled: t
}), ot = () => {
	let { locale: e } = r(V) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, st = ({ children: e }) => (ot(), e), ct = () => {
	let { locale: e } = r(V) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, lt = ({ children: e }) => (ct(), e), ut = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, dt = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, ft = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], pt = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return ft.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, V = t({
	locale: it ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), mt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: u, defaultLocale: d } = m ?? {}, [f, p] = c(e ?? it ?? t ?? d);
	i(() => {
		e && e !== f && p(e);
	}, [e]), i(() => {
		ut();
	}, []);
	let h = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), at(e, s);
		}
	}), g = dt(f);
	return l(V.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, ht = ({ children: e, ...t }) => u(mt, {
	...t,
	children: [
		l(st, {}),
		l(lt, {}),
		e
	]
}), { defaultLocale: gt, locales: H } = m ?? {}, _t = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(V) ?? {};
	return {
		locale: i,
		defaultLocale: gt,
		availableLocales: H,
		setLocale: n((n) => {
			if (!H?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), at(n, e ?? o ?? !0), t?.(n);
		}, [
			H,
			t,
			a,
			e
		])
	};
}, vt = (e, t, n = ".") => {
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
}, yt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], U = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, bt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? F("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? F("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : F("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return F("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, xt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = U(t, r);
	return o === void 0 ? e : i ? bt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = U(t, r);
	return o === void 0 ? e : bt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = U(t, n);
	return r === void 0 ? e : String(r);
}), W = (e, t) => e[t] ?? e.count ?? e.n, G = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return xt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return G(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(G(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return G(r[ve], t, n);
	if (r.nodeType === "html") return G(r[xe], t, n);
	if (r.nodeType === "plural") {
		let e = r[_e];
		return G(Be(e, Number(W(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ge], i = yt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) yt.includes(t) || (o[t] = n);
		let s = W(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = F("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Te(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return G(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ce], i = W(t, typeof r.variable == "string" ? r.variable : "value");
		return G(Ve(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Se];
		return G(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, K = (e, t = {}, n = "en") => {
	let r = G(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, St = /* @__PURE__ */ new Set([
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
]), Ct = 5, wt = "index", q = (e, t) => {
	if (e in k()) return M(e, t);
}, Tt = (e, t, n, r, i) => {
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
	for (let [t, r] of Object.entries(e)) St.has(t) || (n[t] = r);
	return n;
}, Y = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = q(c, p), m === void 0 && c === t && c !== wt && (m = q(wt, p)), m === void 0) return;
	let h;
	for (let t of Tt(l, r?.lng ?? e, u, d, f)) {
		let e = vt(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = J(r), _ = K(h, g, r?.lng ?? e);
	return o < Ct && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
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
}, Et = (e) => {
	y({ log: g })(`${b(e, v)}: the ${b("`resources`", v)} option is ignored when using ${b("@intlayer/i18next", re)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${b("`resources`", v)} option to reduce your bundle size.`);
}, X = (e = {}) => {
	e.resources !== void 0 && Et("createInstance");
	let t = m, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
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
		return typeof o == "string" ? K(o, J(i), e) : n;
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
			i.resources !== void 0 && Et("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
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
			return typeof c == "string" ? K(c, J(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
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
			return [
				"ar",
				"he",
				"fa",
				"ur",
				"ps",
				"yi",
				"dv",
				"ug"
			].some((t) => (e ?? n).startsWith(t)) ? "rtl" : "ltr";
		},
		setDefaultNamespace(e) {
			r = e;
		},
		hasLoadedNamespace(e) {
			try {
				return M(Array.isArray(e) ? e[0] : e, n), !0;
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
				return vt(M(t, e), n);
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
var Dt = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
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
		return typeof s == "string" ? K(s, J(i), e) : a[a.length - 1];
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
			dir: (t) => pt(t ?? e) === "rtl" ? "rtl" : "ltr",
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
}, Ot = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = _t(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => Dt({
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
};
e.createContext({ i18n: null });
var kt = {
	type: "3rdParty",
	init: (e) => {}
}, At = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/components/MockBanner.tsx", jt = () => {
	let { t: e } = Ot();
	return f("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("shared.mockBanner.text")
	}, void 0, !1, {
		fileName: At,
		lineNumber: 8,
		columnNumber: 5
	}, void 0);
}, Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/components/pages/team/TeamHeader.tsx";
function Mt() {
	let { t: e } = Ot();
	return f(d, { children: [
		f(jt, {}, void 0, !1, {
			fileName: Q,
			lineNumber: 10,
			columnNumber: 7
		}, this),
		f("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("team.teamHeader.ourTeam")
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 11,
			columnNumber: 7
		}, this),
		f("p", {
			className: "mb-10 text-muted-foreground",
			children: e("team.teamHeader.meetThePeopleBehindI18n")
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 14,
			columnNumber: 7
		}, this)
	] }, void 0, !0, {
		fileName: Q,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var Nt = (e) => l(ht, { ...e });
function Pt() {
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
function Ft(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Z.use(kt).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var It = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/components/AppProviders.tsx";
function Lt({ children: e }) {
	let t = p().locale ?? "en", [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		Ft("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		Pt();
	}, []), f(Nt, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: It,
		lineNumber: 37,
		columnNumber: 7
	}, this);
}
var Rt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/scripts/Wrapper.tsx";
function zt({ children: e }) {
	return f(Lt, { children: e }, void 0, !1, {
		fileName: Rt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/components/pages/team/TeamHeader.wrapper.tsx";
function Bt() {
	return f(zt, { children: f(Mt, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Bt as default };
