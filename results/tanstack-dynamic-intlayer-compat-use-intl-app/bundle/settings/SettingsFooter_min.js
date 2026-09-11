import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useRef as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as ee } from "react/jsx-runtime";
import { jsxDEV as d } from "react/jsx-dev-runtime";
var f = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), p = {
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
}, m = {
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
}, ie = "__intlayerPreloaded", ae = ["en"], h = "\x1B[0m", oe = "\x1B[34m", se = "\x1B[31m", ce = "\x1B[32m", le = "\x1B[36m", g = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? ae,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), _ = (e, t) => !!e && (t ?? p.locales).includes(e), ue = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, v = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, de = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = v(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, fe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var y = {
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
}, pe = (e = y) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!fe) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, me = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !fe && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: v(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, de(r, e, i));
			} catch {}
		}
	}
}, he = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = g(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return _(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (_(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ge = 50, _e = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(), ve = (e) => {
	b.has(e) || (b.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ye = {
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
}, be = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (ve(e), ye[e]);
};
function x(e, t, n) {
	let r = t ?? p?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = _e.get(a);
	o || (o = /* @__PURE__ */ new Map(), _e.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? be(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ge && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var xe = (e) => e, Se = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = xe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ce = (e, t) => (n, r) => Se(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), S = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? h : n : h}` : e;
S("✗", se), S("✓", ce), S("⏲", oe);
var we = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = g(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = re(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = he(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return pe() ?? t;
}, Te, C, Ee = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (C === void 0 || Te !== e) && (Te = e, C = we()), C;
}, w = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/de.json").then((e) => e.default),
	en: () => import("./intlayer-SettingsFooter-wrapper-mozfc-en-Ciyy9DS1.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/zh.json").then((e) => e.default)
}, De = Ee(), T = w[De];
typeof window < "u" && typeof T == "function" && T().then((e) => {
	w.__intlayerPreloaded = {
		locale: De,
		dictionary: e
	};
}, () => void 0);
var E = /* @__PURE__ */ new WeakMap(), Oe = 0, ke = (e) => {
	if (!e) return "base";
	let t = E.get(e);
	if (t) return t;
	Oe += 1;
	let n = `p${Oe}`;
	return E.set(e, n), n;
}, Ae = 256, D = /* @__PURE__ */ new WeakMap(), je = (e) => typeof e == "object" && !!e, Me = (e, t, n) => `${e}_${t}_${ke(n)}`, Ne = (e, t) => {
	if (!je(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!je(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= Ae && r.clear(), r.set(t, n), n;
}, Pe = "translation", Fe = "enumeration", Ie = "plural", k = "insertion", Le = "object", Re = "array", ze = "markdown", A = "html", Be = "gender", Ve = "select", j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => j(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Re,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Le,
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
}, He = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ue = (e, t) => e[He(e, t) ?? "fallback"], M = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), N = "default", We = /[^A-Za-z0-9._&=-]/g, P = /[^A-Za-z0-9._-]/g, Ge = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, F = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ge);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, I = (e) => e === void 0 ? N : typeof e == "string" ? F(e, We) : Object.keys(e).sort().map((t) => `${F(t, P)}=${F(String(e[t]), P)}`).join("&"), L = (e) => Array.isArray(e) ? e.length === 0 ? [N] : e.map(I) : [I(e)], Ke = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? N : e[0] ?? "default";
}, qe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Je = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ye = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Xe = (e, t) => {
	if (!Je(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? N : Ke(L(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => qe(e, n, t, s)).map((t) => Ye(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ze = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Qe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? L(n).join(",") : String(n)}`;
}).join("|") : "", $e = (e, t, n) => e[x("PluralRules", n).select(t)] ?? e.other, et = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, tt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, B = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, nt = (e) => {
	if (typeof e == "string") return e;
	if (B(e)) return e.nodeType === "html" ? e[A] : e[ze];
}, rt = (e, t) => {
	if (typeof e == "string") return t;
	if (B(e)) {
		let n = e.nodeType === "html" ? A : ze;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, V = (e, t, n, r, i) => {
	let a = rt(e, M(nt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Pe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return tt(o, e, t);
	}
}, W = H, it = (e) => H, G = H, at = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || B(e),
			transform: (e, n, r) => {
				if (B(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = M(i, e);
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
}, ot = H, st = H, ct = (e) => H, lt = H, ut = (e, t = !0) => [
	U(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	W,
	G,
	at,
	ct(e ?? p.defaultLocale),
	lt,
	ot,
	st
], dt = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), ft = (e, t, n) => {
	let { locale: r, selector: i } = Ze(t), a = Me(r ?? p.defaultLocale, Qe(i), n), o = Ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? ut(r), c = Xe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return dt(e.content, t, s);
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, pt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, mt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", ht = /\{\{\s*(.*?)\s*\}\}/g, gt = (e, t = {}) => {
	if (!Object.values(t).some(mt)) return {
		isSimple: !0,
		parts: e.replace(ht, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(ht), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, _t = (e, t, n = ".") => {
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
}, vt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, yt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? x("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? x("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : x("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return x("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, bt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? yt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : yt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return bt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[k], t, n);
	if (r.nodeType === "html") return J(r[A], t, n);
	if (r.nodeType === "plural") {
		let e = r[Ie];
		return J($e(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Fe], i = vt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) vt.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = x("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ue(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ve], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(et(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Be];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, xt = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: Y(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, St = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Ct = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Ct(e.children, n), a = n[e.tag];
	return typeof a == "function" ? u(t, { children: a(i) }, r) : u(t, { children: i }, r);
}), wt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = wt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Tt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Et(e, (e) => _t(t, r(e)), r);
}, Et = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return xt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = St(t), o = r(e, i);
			return o === void 0 ? n(e) : u(l, { children: Ct(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = St(t), o = r(e, i);
			return o === void 0 ? n(e) : wt(Y(o), a);
		}
	});
}, Dt = (e) => {
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
}, X = /* @__PURE__ */ new Map(), Ot = (e, t) => (X.has(e) || X.set(e, Dt(t)), X.get(e).read()), kt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : u(l, { children: e });
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
}, At = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => kt({
		...n,
		value: n.children,
		children: n.children
	})
}, jt = H, Mt = (e, n) => {
	let i = gt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Nt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || B(e),
			transform: (e, n, r) => {
				if (B(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Mt(i, e);
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
}, Pt = H, Ft = H, Z = /* @__PURE__ */ new Map(), It = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		U(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		W,
		it(e ?? p.defaultLocale),
		G,
		ct(e ?? p.defaultLocale),
		lt,
		ot,
		st,
		At,
		jt,
		Nt,
		Pt,
		Ft
	];
	return Z.set(n, r), r;
}, Lt = (e, t) => ft(e, t, It(typeof t == "object" && t ? t.locale : t)), Rt = pe(y), zt = (e, t) => me(e, {
	...y,
	isCookieEnabled: t
}), Bt = () => {
	let { locale: e } = a(Q) ?? {}, t = s(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Vt = ({ children: e }) => (Bt(), e), Ht = () => {
	let { locale: e } = a(Q) ?? {}, t = s(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Ut = ({ children: e }) => (Ht(), e), Wt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = n({
	locale: Rt ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Gt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: ee } = p ?? {}, [d, f] = c(e ?? Rt ?? t ?? ee);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		Wt();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), zt(e, s);
		}
	}), te = ue(d);
	return u(Q.Provider, {
		value: {
			locale: te,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Kt = ({ children: e, ...t }) => ee(Gt, {
	...t,
	children: [
		u(Vt, {}),
		u(Ut, {}),
		e
	]
}), qt = (e, t, n) => {
	let { locale: r, variant: i } = a(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? p.defaultLocale, l = pt(e, c);
	if (l) return Lt(l, c);
	let u = e;
	return Lt(Ot(`${String(t)}.${c}`, u[c]?.()), c);
}, Jt = ((e, t, n) => {
	let { locale: r } = a(Q) ?? {};
	return Tt(r, qt(e, t), n);
}), Yt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ce({ log: te })(`${S("IntlProvider", le)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), u(Kt, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/pages/settings/SettingsFooter.tsx";
function Xt() {
	let e = Jt(w, "settings-footer");
	return d("div", {
		className: "flex justify-end gap-3",
		children: [d("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: e("cancel")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 7,
			columnNumber: 7
		}, this), d("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: e("saveChanges")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 13,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var Zt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Qt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Yt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Zt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Zt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var $t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/pages/settings/SettingsFooter.wrapper.tsx";
function en() {
	return d(Qt, { children: d(Xt, {}, void 0, !1, {
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
var e = Object.defineProperty, t = ((t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
})({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "settings-footer", r = {
	saveChanges: "Save Changes",
	cancel: "Cancel"
}, i = {
	key: n,
	content: r
};
export { t };
