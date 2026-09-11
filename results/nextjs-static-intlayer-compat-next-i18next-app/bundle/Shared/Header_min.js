import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import l from "next/link";
import { useParams as u, usePathname as d, useRouter as f } from "next/navigation";
import { jsxDEV as p } from "react/jsx-dev-runtime";
import { ChevronDown as m } from "lucide-react";
import { jsx as h, jsxs as ee } from "react/jsx-runtime";
var g = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/Link.tsx", te = (e) => /^https?:\/\//.test(e ?? "");
function _(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var v = ({ href: e, children: t, ...n }) => {
	let r = u().locale ?? "en";
	return e == null || typeof e != "string" ? p(l, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: g,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : te(e) ? p(l, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: g,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : p(l, {
		href: _(e, r),
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: g,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
}, y = {
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
}, b = {
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
}, ne = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, x = "\x1B[0m", re = "\x1B[34m", ie = "\x1B[31m", ae = "\x1B[32m", oe = "\x1B[35m", se = "\x1B[38;5;3m", S = "\x1B[36m", ce = (e) => e, le = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ce(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, C = (e, t) => (n, r) => le(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), w = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? x : n : x}` : e, ue = (e, t = se, n = x) => [e].flat().map((e) => w(e, t, n)).join(", ");
w("✗", ie), w("✓", ae), w("⏲", re);
var de = /* @__PURE__ */ new WeakMap(), fe = 0, pe = (e) => {
	if (!e) return "base";
	let t = de.get(e);
	if (t) return t;
	fe += 1;
	let n = `p${fe}`;
	return de.set(e, n), n;
}, me = 256, T = /* @__PURE__ */ new WeakMap(), he = (e) => typeof e == "object" && !!e, ge = (e, t, n) => `${e}_${t}_${pe(n)}`, _e = (e, t) => {
	if (!he(e)) return { hit: !1 };
	let n = T.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!he(e)) return n;
	let r = T.get(e);
	return r || (r = /* @__PURE__ */ new Map(), T.set(e, r)), r.size >= me && r.clear(), r.set(t, n), n;
}, ve = "translation", ye = "enumeration", be = "plural", xe = "insertion", Se = "object", Ce = "array", we = "html", Te = "gender", Ee = "select", D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => D(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Ce,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Se,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = D(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = D(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, De = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Oe = (e, t) => e[De(e, t) ?? "fallback"], O = "default", ke = /[^A-Za-z0-9._&=-]/g, Ae = /[^A-Za-z0-9._-]/g, je = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, k = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, je);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Me = (e) => e === void 0 ? O : typeof e == "string" ? k(e, ke) : Object.keys(e).sort().map((t) => `${k(t, Ae)}=${k(String(e[t]), Ae)}`).join("&"), Ne = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(Me) : [Me(e)], Pe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, Fe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ie = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Le = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Re = (e, t) => {
	if (!Ie(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : Pe(Ne(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Fe(e, n, t, s)).map((t) => Le(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ze = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Be = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ne(n).join(",") : String(n)}`;
}).join("|") : "", Ve = () => ({}), He = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), A = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : He.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : A(e ? `${e}.${String(n)}` : String(n)) }), j = /* @__PURE__ */ new Set(), M = (e, t, n) => {
	let r = Ve()[e];
	return r ? ut(r, t, n) : (j.has(e) || (C({ log: ne })(typeof window > "u" ? `Dictionary ${ue(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), j.add(e)), A(e));
}, Ue = 50, We = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Set(), Ke = (e) => {
	Ge.has(e) || (Ge.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, qe = {
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
}, Je = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ke(e), qe[e]);
};
function N(e, t, n) {
	let r = t ?? y?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = We.get(a);
	o || (o = /* @__PURE__ */ new Map(), We.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Je(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ue && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ye = (e, t, n) => e[N("PluralRules", n).select(t)] ?? e.other, Xe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ze = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Qe = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ze(e) && Ze(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Qe(e[r], t[r]));
		return n;
	}
	return e;
}, $e = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Qe(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, et = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ve,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return $e(o, e, t);
	}
}, tt = P, nt = P, rt = P, it = P, at = P, ot = (e) => P, st = P, ct = (e, t = !0) => [
	et(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	tt,
	nt,
	rt,
	ot(e ?? y.defaultLocale),
	st,
	it,
	at
], lt = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), ut = (e, t, n) => {
	let { locale: r, selector: i } = ze(t), a = ge(r ?? y.defaultLocale, Be(i), n), o = _e(e, a);
	if (o.hit) return o.content;
	let s = n ?? ct(r), c = Re(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return lt(e.content, t, s);
	};
	return c === null ? E(e, a, null) : Array.isArray(c) ? E(e, a, c.map(l)) : E(e, a, l(c));
}, F = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, dt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = F(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, I = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var L = {
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
}, ft = (e = L) => {
	let { locales: t } = y;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!I) for (let t = 0; t < (b.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(b.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, pt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !I && b.storage.cookies) for (let n = 0; n < b.storage.cookies.length; n++) {
		let { name: r, attributes: i } = b.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: F(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, dt(r, e, i));
			} catch {}
		}
	}
}, R = ft(L), z = (e, t) => pt(e, {
	...L,
	isCookieEnabled: t
}), mt = () => {
	let { locale: e } = r(B) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, ht = ({ children: e }) => (mt(), e), gt = () => {
	let { locale: e } = r(B) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, _t = ({ children: e }) => (gt(), e), vt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, yt = (e, t = y?.locales, n = y?.defaultLocale) => {
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
}, bt = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], xt = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return bt.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, B = t({
	locale: R ?? y?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), St = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: u } = y ?? {}, [d, f] = c(e ?? R ?? t ?? u);
	i(() => {
		e && e !== d && f(e);
	}, [e]), i(() => {
		vt();
	}, []);
	let p = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), z(e, s);
		}
	}), m = yt(d);
	return h(B.Provider, {
		value: {
			locale: m,
			setLocale: p,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, Ct = ({ children: e, ...t }) => ee(St, {
	...t,
	children: [
		h(ht, {}),
		h(_t, {}),
		e
	]
}), { defaultLocale: wt, locales: V } = y ?? {}, Tt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(B) ?? {};
	return {
		locale: i,
		defaultLocale: wt,
		availableLocales: V,
		setLocale: n((n) => {
			if (!V?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), z(n, e ?? o ?? !0), t?.(n);
		}, [
			V,
			t,
			a,
			e
		])
	};
}, Et = (e, t, n = ".") => {
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
}, Dt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], H = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ot = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? N("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? N("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : N("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return N("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, kt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = H(t, r);
	return o === void 0 ? e : i ? Ot(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = H(t, r);
	return o === void 0 ? e : Ot(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = H(t, n);
	return r === void 0 ? e : String(r);
}), U = (e, t) => e[t] ?? e.count ?? e.n, W = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return kt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return W(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(W(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return W(r[xe], t, n);
	if (r.nodeType === "html") return W(r[we], t, n);
	if (r.nodeType === "plural") {
		let e = r[be];
		return W(Ye(e, Number(U(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ye], i = Dt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Dt.includes(t) || (o[t] = n);
		let s = U(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = N("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Oe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return W(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ee], i = U(t, typeof r.variable == "string" ? r.variable : "value");
		return W(Xe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Te];
		return W(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, G = (e, t = {}, n = "en") => {
	let r = W(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, At = /* @__PURE__ */ new Set([
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
]), jt = 5, Mt = "index", Nt = (e, t) => {
	if (e in Ve()) return M(e, t);
}, Pt = (e, t, n, r, i) => {
	let a = [], o = n === void 0 ? void 0 : new Intl.PluralRules(t, { type: i ? "ordinal" : "cardinal" }).select(n);
	return r && (o && (i && a.push(`${e}_${r}_ordinal_${o}`), a.push(`${e}_${r}_${o}`), n !== 1 && a.push(`${e}_${r}_plural`)), a.push(`${e}_${r}`)), o && (i && a.push(`${e}_ordinal_${o}`), a.push(`${e}_${o}`), n !== 1 && a.push(`${e}_plural`)), a.push(e), a;
}, K = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.replace;
	if (t) {
		let n = { ...t };
		return e.count !== void 0 && (n.count ??= e.count), e.context !== void 0 && (n.context ??= e.context), n;
	}
	let n = {};
	for (let [t, r] of Object.entries(e)) At.has(t) || (n[t] = r);
	return n;
}, q = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = Nt(c, p), m === void 0 && c === t && c !== Mt && (m = Nt(Mt, p)), m === void 0) return;
	let h;
	for (let t of Pt(l, r?.lng ?? e, u, d, f)) {
		let e = Et(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let ee = K(r), g = G(h, ee, r?.lng ?? e);
	return o < jt && g.includes("$t(") && (g = g.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
		let u = q({
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
	})), g;
}, Ft = (e) => {
	C({ log: ne })(`${w(e, S)}: the ${w("`resources`", S)} option is ignored when using ${w("@intlayer/i18next", oe)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${w("`resources`", S)} option to reduce your bundle size.`);
}, J = (e = {}) => {
	e.resources !== void 0 && Ft("createInstance");
	let t = y, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
		i.get(e)?.forEach((e) => {
			e(...t);
		});
	}, s = () => ({
		keySeparator: e.keySeparator ?? ".",
		nsSeparator: e.nsSeparator ?? ":"
	}), c = (e, t, n, r) => {
		let i = typeof r == "string" ? { defaultValue: r } : r, a = q({
			locale: e,
			namespace: t,
			key: n,
			options: i,
			...s()
		});
		if (a !== void 0) return a;
		let o = i?.defaultValue;
		return typeof o == "string" ? G(o, K(i), e) : n;
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
			i.resources !== void 0 && Ft("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
			let s = l.t.bind(l);
			return (typeof e == "function" ? e : t)?.(null, s), s;
		},
		t(e, t, i) {
			let a = typeof t == "string" ? {
				defaultValue: t,
				...i ?? {}
			} : t, o = Array.isArray(e) ? e : [String(e)];
			for (let e of o) {
				let t = q({
					locale: n,
					namespace: r,
					key: e,
					options: a,
					...s()
				});
				if (t !== void 0) return t;
			}
			let c = a?.defaultValue;
			return typeof c == "string" ? G(c, K(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
		},
		async changeLanguage(e, t) {
			let r = n;
			e && (n = e), o("languageChanged", n, r);
			let i = l.t.bind(l);
			return t?.(null, i), i;
		},
		exists(e, t) {
			return q({
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
			return J({
				...e,
				...t
			});
		},
		cloneInstance(t, n) {
			return J({
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
				return Et(M(t, e), n);
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
}, Y = J();
Y.dir.bind(Y), Y.init.bind(Y), Y.loadResources.bind(Y), Y.reloadResources.bind(Y), Y.use.bind(Y), Y.changeLanguage.bind(Y), Y.getFixedT.bind(Y), Y.t.bind(Y), Y.exists.bind(Y), Y.setDefaultNamespace.bind(Y), Y.hasLoadedNamespace.bind(Y), Y.loadNamespaces.bind(Y), Y.loadLanguages.bind(Y);
var It = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
	let o = (t, n) => q({
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
		return typeof s == "string" ? G(s, K(i), e) : a[a.length - 1];
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
			dir: (t) => xt(t ?? e) === "rtl" ? "rtl" : "ltr",
			exists: (t, n) => q({
				locale: e,
				namespace: r,
				key: t,
				options: n,
				dictionaryContent: a
			}) !== void 0,
			t: s,
			getFixedT: (t, n) => (i, o) => {
				let s = q({
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
}, X = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = Tt(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => It({
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
var Lt = {
	type: "3rdParty",
	init: (e) => {}
}, Rt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/ThemeToggle.tsx";
function zt() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Z(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Bt() {
	let { t: e } = X(), [t, n] = c("auto");
	i(() => {
		let e = zt();
		n(e), Z(e);
	}, []), i(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => Z("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), Z(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "shared.themeToggle.themeModeAutoSystemClick" : t === "light" ? "shared.themeToggle.themeModeLightClick" : "shared.themeToggle.themeModeDarkClick");
	return p("button", {
		type: "button",
		onClick: r,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "shared.themeToggle.themeAuto" : t === "dark" ? "shared.themeToggle.themeDark" : "shared.themeToggle.themeLight")
	}, void 0, !1, {
		fileName: Rt,
		lineNumber: 77,
		columnNumber: 5
	}, this);
}
var Vt = [
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
function Ht(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/LocaleSwitcher.tsx";
function Ut() {
	let e = u().locale ?? "en", t = d(), n = f(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return p("div", {
		className: "flex items-center gap-2",
		children: p("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Vt.map((e) => p("option", {
				value: e,
				children: Ht(e)
			}, e, !1, {
				fileName: Q,
				lineNumber: 25,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
function Wt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/Header.tsx";
function Gt() {
	let { t: e } = X();
	Wt("Header");
	let [t, n] = c(!1), r = u(), i = d(), a = r.locale ?? "en", o = [
		{
			href: "/products",
			label: e("shared.header.products")
		},
		{
			href: "/pricing",
			label: e("shared.header.pricing")
		},
		{
			href: "/team",
			label: e("shared.header.team")
		},
		{
			href: "/blog",
			label: e("shared.header.blog")
		},
		{
			href: "/careers",
			label: e("shared.header.careers")
		},
		{
			href: "/faq",
			label: e("shared.header.faq")
		},
		{
			href: "/contact",
			label: e("shared.header.contact")
		},
		{
			href: "/settings",
			label: e("shared.header.settings")
		}
	];
	return p("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: p("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [p("div", {
				className: "flex items-center gap-8",
				children: [p(v, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 45,
					columnNumber: 11
				}, this), p("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						p(v, {
							href: "/",
							className: `nav-link${((e) => i === _(e, a))("/") ? " is-active" : ""}`,
							children: e("shared.header.home")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						p(v, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = _(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e("shared.header.methodology")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						p("div", {
							className: "relative",
							children: [p("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("shared.header.mockPages"), p(m, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: $,
									lineNumber: 76,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: $,
								lineNumber: 68,
								columnNumber: 15
							}, this), t && p("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: p("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: o.map((e) => p(v, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.href, !1, {
										fileName: $,
										lineNumber: 90,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: $,
									lineNumber: 88,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: $,
								lineNumber: 83,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: $,
							lineNumber: 67,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 52,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 44,
				columnNumber: 9
			}, this), p("div", {
				className: "flex items-center gap-4",
				children: [
					p("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [p("span", {
							className: "sr-only",
							children: e("shared.header.goToGithub")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 113,
							columnNumber: 13
						}, this), p("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: p("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 115,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: $,
							lineNumber: 114,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					p(Ut, {}, void 0, !1, {
						fileName: $,
						lineNumber: 121,
						columnNumber: 11
					}, this),
					p(Bt, {}, void 0, !1, {
						fileName: $,
						lineNumber: 122,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 106,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 43,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
var Kt = (e) => h(Ct, { ...e });
function qt() {
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
function Jt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Y.use(Lt).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var Yt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/AppProviders.tsx";
function Xt({ children: e }) {
	let t = u().locale ?? "en", [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		Jt("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		qt();
	}, []), p(Kt, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: Yt,
		lineNumber: 37,
		columnNumber: 7
	}, this);
}
var Zt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/scripts/Wrapper.tsx";
function Qt({ children: e }) {
	return p(Xt, { children: e }, void 0, !1, {
		fileName: Zt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/Header.wrapper.tsx";
function en() {
	return p(Qt, { children: p(Gt, {}, void 0, !1, {
		fileName: $t,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $t,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { en as default };
