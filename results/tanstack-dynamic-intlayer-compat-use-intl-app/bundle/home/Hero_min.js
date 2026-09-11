import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useLayoutEffect as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var ee = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), m = {
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
}, te = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ne = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, re = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ne(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ie = "__intlayerPreloaded", ae = ["en"], g = "\x1B[0m", oe = "\x1B[34m", se = "\x1B[31m", ce = "\x1B[32m", le = "\x1B[36m", _ = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? ae,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), ue = (e, t) => !!e && (t ?? m.locales).includes(e), de = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, fe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, pe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = fe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, me = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var v = {
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
}, he = (e = v) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!me) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ge = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !me && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: fe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, pe(r, e, i));
			} catch {}
		}
	}
}, _e = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = _(t);
	if (!n || !r) return n;
	let a = ee(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ue(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ue(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ve = 50, ye = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Set(), xe = (e) => {
	be.has(e) || (be.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Se = {
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
}, Ce = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (xe(e), Se[e]);
};
function y(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ye.get(a);
	o || (o = /* @__PURE__ */ new Map(), ye.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ce(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ve && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var we = (e) => e, Te = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = we(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ee = (e, t) => (n, r) => Te(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), b = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? g : n : g}` : e;
b("✗", se), b("✓", ce), b("⏲", oe);
var De = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = re(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = _e(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return he() ?? t;
}, x, S, C = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (S === void 0 || x !== e) && (x = e, S = De()), S;
}, w = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/de.json").then((e) => e.default),
	en: () => import("./intlayer-Hero-wrapper-ymmi0u-en-B7KoHrmn.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/hero/zh.json").then((e) => e.default)
}, T = C(), E = w[T];
typeof window < "u" && typeof E == "function" && E().then((e) => {
	w.__intlayerPreloaded = {
		locale: T,
		dictionary: e
	};
}, () => void 0);
var D = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-Hero-wrapper-ymmi0u-en-B7KoHrmn.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, O = C(), k = D[O];
typeof window < "u" && typeof k == "function" && k().then((e) => {
	D.__intlayerPreloaded = {
		locale: O,
		dictionary: e
	};
}, () => void 0);
var A = /* @__PURE__ */ new WeakMap(), j = 0, Oe = (e) => {
	if (!e) return "base";
	let t = A.get(e);
	if (t) return t;
	j += 1;
	let n = `p${j}`;
	return A.set(e, n), n;
}, ke = 256, M = /* @__PURE__ */ new WeakMap(), N = (e) => typeof e == "object" && !!e, Ae = (e, t, n) => `${e}_${t}_${Oe(n)}`, je = (e, t) => {
	if (!N(e)) return { hit: !1 };
	let n = M.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, P = (e, t, n) => {
	if (!N(e)) return n;
	let r = M.get(e);
	return r || (r = /* @__PURE__ */ new Map(), M.set(e, r)), r.size >= ke && r.clear(), r.set(t, n), n;
}, Me = "translation", Ne = "enumeration", Pe = "plural", F = "insertion", Fe = "object", Ie = "array", I = "markdown", L = "html", Le = "gender", Re = "select", R = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => R(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => R(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Fe,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = R(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = R(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, ze = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Be = (e, t) => e[ze(e, t) ?? "fallback"], z = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), B = "default", Ve = /[^A-Za-z0-9._&=-]/g, V = /[^A-Za-z0-9._-]/g, He = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, H = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, He);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ue = (e) => e === void 0 ? B : typeof e == "string" ? H(e, Ve) : Object.keys(e).sort().map((t) => `${H(t, V)}=${H(String(e[t]), V)}`).join("&"), We = (e) => Array.isArray(e) ? e.length === 0 ? [B] : e.map(Ue) : [Ue(e)], Ge = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? B : e[0] ?? "default";
}, Ke = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, qe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Je = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ye = (e, t) => {
	if (!qe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? B : Ge(We(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ke(e, n, t, s)).map((t) => Je(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Xe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ze = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? We(n).join(",") : String(n)}`;
}).join("|") : "", Qe = (e, t, n) => e[y("PluralRules", n).select(t)] ?? e.other, $e = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, et = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, tt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (et(e) && et(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : tt(e[r], t[r]));
		return n;
	}
	return e;
}, nt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => tt(e, t));
}, U = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, rt = (e) => {
	if (typeof e == "string") return e;
	if (U(e)) return e.nodeType === "html" ? e[L] : e[I];
}, it = (e, t) => {
	if (typeof e == "string") return t;
	if (U(e)) {
		let n = e.nodeType === "html" ? L : I;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, at = (e, t, n, r, i) => {
	let a = it(e, z(rt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, W = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ot = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? W : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Me,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return nt(o, e, t);
	}
}, st = W, ct = (e) => W, lt = W, ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: F }], i = e[F], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => at(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = z(i, e);
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
}, dt = W, ft = W, pt = (e) => W, mt = W, ht = (e, t = !0) => [
	ot(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	st,
	lt,
	ut,
	pt(e ?? m.defaultLocale),
	mt,
	dt,
	ft
], gt = (e, t, n = []) => R(e, {
	...t,
	plugins: n
}), _t = (e, t, n) => {
	let { locale: r, selector: i } = Xe(t), a = Ae(r ?? m.defaultLocale, Ze(i), n), o = je(e, a);
	if (o.hit) return o.content;
	let s = n ?? ht(r), c = Ye(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return gt(e.content, t, s);
	};
	return c === null ? P(e, a, null) : Array.isArray(c) ? P(e, a, c.map(l)) : P(e, a, l(c));
}, vt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, yt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", bt = /\{\{\s*(.*?)\s*\}\}/g, xt = (e, t = {}) => {
	if (!Object.values(t).some(yt)) return {
		isSimple: !0,
		parts: e.replace(bt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(bt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, St = (e, t, n = ".") => {
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
}, Ct = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, wt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? y("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? y("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : y("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return y("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Tt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? wt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : wt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Tt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[F], t, n);
	if (r.nodeType === "html") return q(r[L], t, n);
	if (r.nodeType === "plural") {
		let e = r[Pe];
		return q(Qe(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Ne], i = Ct.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ct.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = y("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Be(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Re], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q($e(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Le];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Et = (e, t = {}, n = "en") => {
	let r = q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Dt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Ot = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Ot(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), kt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = kt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), At = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return jt(e, (e) => St(t, r(e)), r);
}, jt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Et(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Dt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: Ot(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Dt(t), o = r(e, i);
			return o === void 0 ? n(e) : kt(J(o), a);
		}
	});
}, Mt = (e) => {
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
}, Y = /* @__PURE__ */ new Map(), Nt = (e, t) => (Y.has(e) || Y.set(e, Mt(t)), Y.get(e).read()), Pt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
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
}, Ft = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Pt({
		...n,
		value: n.children,
		children: n.children
	})
}, It = W, Lt = (e, n) => {
	let i = xt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Rt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: F }], i = e[F], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => at(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Lt(i, e);
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
}, zt = W, Bt = W, X = /* @__PURE__ */ new Map(), Vt = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		ot(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		st,
		ct(e ?? m.defaultLocale),
		lt,
		pt(e ?? m.defaultLocale),
		mt,
		dt,
		ft,
		Ft,
		It,
		Rt,
		zt,
		Bt
	];
	return X.set(n, r), r;
}, Z = (e, t) => _t(e, t, Vt(typeof t == "object" && t ? t.locale : t)), Ht = he(v), Ut = (e, t) => ge(e, {
	...v,
	isCookieEnabled: t
}), Wt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Gt = ({ children: e }) => (Wt(), e), Kt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, qt = ({ children: e }) => (Kt(), e), Jt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = n({
	locale: Ht ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Yt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = m ?? {}, [f, p] = l(e ?? Ht ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		Jt();
	}, []);
	let ee = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Ut(e, s);
		}
	}), h = de(f);
	return d(Q.Provider, {
		value: {
			locale: h,
			setLocale: ee,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Xt = ({ children: e, ...t }) => f(Yt, {
	...t,
	children: [
		d(Gt, {}),
		d(qt, {}),
		e
	]
}), Zt = (e, t, n) => {
	let { locale: r, variant: i } = a(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? m.defaultLocale, l = vt(e, c);
	if (l) return Z(l, c);
	let u = e;
	return Z(Nt(`${String(t)}.${c}`, u[c]?.()), c);
}, Qt = ((e, t, n) => {
	let { locale: r } = a(Q) ?? {};
	return At(r, Zt(e, t), n);
}), $t = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ee({ log: te })(`${b("IntlProvider", le)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(Xt, {
	locale: e,
	children: t
}, String(e)));
function en(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/pages/home/Hero.tsx";
function tn() {
	let e = Qt(w, "hero"), t = Qt(D, "header");
	return en("Hero"), p("section", {
		className: "mb-16 text-center",
		children: [
			p("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}, void 0, !1, {
				fileName: $,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			p("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: e("aTestApplicationDesignedTo")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			p("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [p("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e("viewResults")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 17,
					columnNumber: 9
				}, this), p("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: t("methodology")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 23,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 16,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var nn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function rn({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p($t, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: nn,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: nn,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var an = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/pages/home/Hero.wrapper.tsx";
function on() {
	return p(rn, { children: p(tn, {}, void 0, !1, {
		fileName: an,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: an,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { on as default };
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
}), s = "hero", c = {
	aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results"
}, l = {
	key: s,
	content: c
};
export { n, o as t };
