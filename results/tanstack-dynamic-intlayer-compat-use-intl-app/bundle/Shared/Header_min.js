import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useLayoutEffect as s, useRef as c, useState as l } from "react";
import { Link as u, useNavigate as d, useParams as f } from "@tanstack/react-router";
import { ChevronDown as ee } from "lucide-react";
import { Fragment as p, jsx as m, jsxs as te } from "react/jsx-runtime";
import { jsxDEV as h } from "react/jsx-dev-runtime";
var ne = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), g = {
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
}, re = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ie = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ae = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ie(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, oe = "__intlayerPreloaded", se = ["en"], ce = "\x1B[0m", le = "\x1B[34m", ue = "\x1B[31m", de = "\x1B[32m", fe = "\x1B[36m", pe = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? se,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), v = (e, t) => !!e && (t ?? g.locales).includes(e), me = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, he = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = y(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, b = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var x = {
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
}, ge = (e = x) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!b) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, _e = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !b && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: y(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, he(r, e, i));
			} catch {}
		}
	}
}, ve = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = pe(t);
	if (!n || !r) return n;
	let a = ne(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return v(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (v(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ye = 50, be = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Set(), Se = (e) => {
	xe.has(e) || (xe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ce = {
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
}, we = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Se(e), Ce[e]);
};
function S(e, t, n) {
	let r = t ?? g?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = be.get(a);
	o || (o = /* @__PURE__ */ new Map(), be.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? we(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ye && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Te = (e) => e, Ee = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Te(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, De = (e, t) => (n, r) => Ee(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), C = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? ce : n : ce}` : e;
C("✗", ue), C("✓", de), C("⏲", le);
var Oe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = pe(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ae(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ve(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return ge() ?? t;
}, ke, w, Ae = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (w === void 0 || ke !== e) && (ke = e, w = Oe()), w;
}, T = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-wrapper-11qjr8-en-B0_Gz0TC.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, je = Ae(), Me = T[je];
typeof window < "u" && typeof Me == "function" && Me().then((e) => {
	T.__intlayerPreloaded = {
		locale: je,
		dictionary: e
	};
}, () => void 0);
var E = /* @__PURE__ */ new WeakMap(), Ne = 0, Pe = (e) => {
	if (!e) return "base";
	let t = E.get(e);
	if (t) return t;
	Ne += 1;
	let n = `p${Ne}`;
	return E.set(e, n), n;
}, Fe = 256, D = /* @__PURE__ */ new WeakMap(), Ie = (e) => typeof e == "object" && !!e, Le = (e, t, n) => `${e}_${t}_${Pe(n)}`, Re = (e, t) => {
	if (!Ie(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!Ie(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= Fe && r.clear(), r.set(t, n), n;
}, ze = "translation", Be = "enumeration", Ve = "plural", k = "insertion", He = "object", Ue = "array", We = "markdown", A = "html", Ge = "gender", Ke = "select", j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => j(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Ue,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: He,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = j(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = j(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, qe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Je = (e, t) => e[qe(e, t) ?? "fallback"], Ye = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), M = "default", Xe = /[^A-Za-z0-9._&=-]/g, N = /[^A-Za-z0-9._-]/g, Ze = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, P = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ze);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, F = (e) => e === void 0 ? M : typeof e == "string" ? P(e, Xe) : Object.keys(e).sort().map((t) => `${P(t, N)}=${P(String(e[t]), N)}`).join("&"), I = (e) => Array.isArray(e) ? e.length === 0 ? [M] : e.map(F) : [F(e)], Qe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? M : e[0] ?? "default";
}, $e = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, et = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, tt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, nt = (e, t) => {
	if (!et(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? M : Qe(I(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => $e(e, n, t, s)).map((t) => tt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, rt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, it = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? I(n).join(",") : String(n)}`;
}).join("|") : "", at = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, ot = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, st = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
}, z = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ct = (e) => {
	if (typeof e == "string") return e;
	if (z(e)) return e.nodeType === "html" ? e[A] : e[We];
}, lt = (e, t) => {
	if (typeof e == "string") return t;
	if (z(e)) {
		let n = e.nodeType === "html" ? A : We;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, B = (e, t, n, r, i) => {
	let a = lt(e, Ye(ct(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ut = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ze,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return st(o, e, t);
	}
}, dt = V, ft = (e) => V, pt = V, mt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || z(e),
			transform: (e, n, r) => {
				if (z(e)) return (i) => B(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ye(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, ht = V, gt = V, _t = (e) => V, vt = V, yt = (e, t = !0) => [
	ut(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	dt,
	pt,
	mt,
	_t(e ?? g.defaultLocale),
	vt,
	ht,
	gt
], bt = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), xt = (e, t, n) => {
	let { locale: r, selector: i } = rt(t), a = Le(r ?? g.defaultLocale, it(i), n), o = Re(e, a);
	if (o.hit) return o.content;
	let s = n ?? yt(r), c = nt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return bt(e.content, t, s);
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, St = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[oe];
	if (n && n.locale === t) return n.dictionary;
}, Ct = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", wt = /\{\{\s*(.*?)\s*\}\}/g, Tt = (e, t = {}) => {
	if (!Object.values(t).some(Ct)) return {
		isSimple: !0,
		parts: e.replace(wt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(wt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
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
			return n === "percent" ? S("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? S("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : S("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return S("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
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
	if (r.nodeType === "insertion") return W(r[k], t, n);
	if (r.nodeType === "html") return W(r[A], t, n);
	if (r.nodeType === "plural") {
		let e = r[Ve];
		return W(at(e, Number(U(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Be], i = Dt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Dt.includes(t) || (o[t] = n);
		let s = U(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Je(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return W(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ke], i = U(t, typeof r.variable == "string" ? r.variable : "value");
		return W(ot(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ge];
		return W(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, At = (e, t = {}, n = "en") => {
	let r = W(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, G = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: G(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, jt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Mt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Mt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? m(t, { children: a(i) }, r) : m(t, { children: i }, r);
}), Nt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Nt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Pt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Ft(e, (e) => Et(t, r(e)), r);
}, Ft = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return At(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = jt(t), o = r(e, i);
			return o === void 0 ? n(e) : m(p, { children: Mt(G(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = jt(t), o = r(e, i);
			return o === void 0 ? n(e) : Nt(G(o), a);
		}
	});
}, It = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return {
		settled: r,
		read() {
			if (t === "pending") throw r;
			if (t === "error") throw n;
			return n;
		}
	};
}, K = /* @__PURE__ */ new Map(), Lt = (e, t) => (K.has(e) || K.set(e, It(t)), K.get(e).read()), Rt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : m(p, { children: e });
	return new Proxy(r, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, zt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Rt({
		...n,
		value: n.children,
		children: n.children
	})
}, Bt = V, Vt = (e, n) => {
	let i = Tt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Ht = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || z(e),
			transform: (e, n, r) => {
				if (z(e)) return (i) => B(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Vt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, Ut = V, Wt = V, q = /* @__PURE__ */ new Map(), Gt = (e, t = !0) => {
	let n = `${e ?? g.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		ut(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
		dt,
		ft(e ?? g.defaultLocale),
		pt,
		_t(e ?? g.defaultLocale),
		vt,
		ht,
		gt,
		zt,
		Bt,
		Ht,
		Ut,
		Wt
	];
	return q.set(n, r), r;
}, Kt = (e, t) => xt(e, t, Gt(typeof t == "object" && t ? t.locale : t)), qt = ge(x), Jt = (e, t) => _e(e, {
	...x,
	isCookieEnabled: t
}), Yt = () => {
	let { locale: e } = a(J) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Xt = ({ children: e }) => (Yt(), e), Zt = () => {
	let { locale: e } = a(J) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Qt = ({ children: e }) => (Zt(), e), $t = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, J = n({
	locale: qt ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), en = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = g ?? {}, [d, f] = l(e ?? qt ?? t ?? u);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		$t();
	}, []);
	let ee = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), Jt(e, s);
		}
	}), p = me(d);
	return m(J.Provider, {
		value: {
			locale: p,
			setLocale: ee,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, tn = ({ children: e, ...t }) => te(en, {
	...t,
	children: [
		m(Xt, {}),
		m(Qt, {}),
		e
	]
}), nn = (e, t, n) => {
	let { locale: r, variant: i } = a(J) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? g.defaultLocale, l = St(e, c);
	if (l) return Kt(l, c);
	let u = e;
	return Kt(Lt(`${String(t)}.${c}`, u[c]?.()), c);
}, Y = ((e, t, n) => {
	let { locale: r } = a(J) ?? {};
	return Pt(r, nn(e, t), n);
}), rn = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && De({ log: re })(`${C("IntlProvider", fe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), m(tn, {
	locale: e,
	children: t
}, String(e))), X = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-wrapper-11qjr8-en-B0_Gz0TC.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, an = Ae(), on = X[an];
typeof window < "u" && typeof on == "function" && on().then((e) => {
	X.__intlayerPreloaded = {
		locale: an,
		dictionary: e
	};
}, () => void 0);
var sn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/ThemeToggle.tsx";
function cn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Z(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function ln() {
	let e = Y(X, "theme-toggle"), [t, n] = l("auto");
	o(() => {
		let e = cn();
		n(e), Z(e);
	}, []), o(() => {
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
	let i = e(t === "auto" ? "themeModeAutoSystemClick" : t === "light" ? "themeModeLightClick" : "themeModeDarkClick");
	return h("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "themeAuto" : t === "dark" ? "themeDark" : "themeLight")
	}, void 0, !1, {
		fileName: sn,
		lineNumber: 75,
		columnNumber: 5
	}, this);
}
var un = [
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
function dn(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/LocaleSwitcher.tsx";
function fn() {
	let e = f({ strict: !1 }).locale ?? "en", t = d(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return h("div", {
		className: "flex items-center gap-2",
		children: h("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: un.map((e) => h("option", {
				value: e,
				children: dn(e)
			}, e, !1, {
				fileName: Q,
				lineNumber: 24,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
function pn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/Header.tsx";
function mn() {
	let e = Y(T, "header");
	pn("Header");
	let [t, n] = l(!1), r = f({ strict: !1 }).locale ?? "en", i = [
		{
			to: "/$locale/products",
			label: e("products")
		},
		{
			to: "/$locale/pricing",
			label: e("pricing")
		},
		{
			to: "/$locale/team",
			label: e("team")
		},
		{
			to: "/$locale/blog",
			label: e("blog")
		},
		{
			to: "/$locale/careers",
			label: e("careers")
		},
		{
			to: "/$locale/faq",
			label: e("faq")
		},
		{
			to: "/$locale/contact",
			label: e("contact")
		},
		{
			to: "/$locale/settings",
			label: e("settings")
		}
	];
	return h("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: h("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [h("div", {
				className: "flex items-center gap-8",
				children: [h(u, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 32,
					columnNumber: 11
				}, this), h("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						h(u, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("home")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						h(u, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("methodology")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 52,
							columnNumber: 13
						}, this),
						h("div", {
							className: "relative",
							children: [h("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("mockPages"), h(ee, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: $,
									lineNumber: 72,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: $,
								lineNumber: 64,
								columnNumber: 15
							}, this), t && h("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: h("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => h(u, {
										preload: !1,
										to: e.to,
										params: { locale: r },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.to, !1, {
										fileName: $,
										lineNumber: 86,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: $,
									lineNumber: 84,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: $,
								lineNumber: 79,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: $,
							lineNumber: 63,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 41,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 31,
				columnNumber: 9
			}, this), h("div", {
				className: "flex items-center gap-4",
				children: [
					h("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [h("span", {
							className: "sr-only",
							children: e("goToGithub")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 111,
							columnNumber: 13
						}, this), h("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: h("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 113,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: $,
							lineNumber: 112,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 105,
						columnNumber: 11
					}, this),
					h(fn, {}, void 0, !1, {
						fileName: $,
						lineNumber: 119,
						columnNumber: 11
					}, this),
					h(ln, {}, void 0, !1, {
						fileName: $,
						lineNumber: 120,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 104,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var hn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function gn({ children: t }) {
	return h(e.Suspense, {
		fallback: null,
		children: h(rn, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: hn,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: hn,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var _n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/Header.wrapper.tsx";
function vn() {
	return h(gn, { children: h(mn, {}, void 0, !1, {
		fileName: _n,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: _n,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { vn as default };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = t({
	content: () => i,
	default: () => a,
	key: () => r
}), r = "header", i = {
	home: "Home",
	methodology: "Methodology",
	mockPages: "Mock Pages",
	products: "Products",
	pricing: "Pricing",
	team: "Team",
	blog: "Blog",
	careers: "Careers",
	faq: "FAQ",
	contact: "Contact",
	settings: "Settings",
	goToGithub: "Go to GitHub"
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "theme-toggle", c = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
}, l = {
	key: s,
	content: c
};
export { n, o as t };
