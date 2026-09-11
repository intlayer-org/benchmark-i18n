import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useRef as s, useState as c } from "react";
import { Link as l, useParams as u } from "@tanstack/react-router";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { jsxDEV as m } from "react/jsx-dev-runtime";
var h = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), g = {
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
}, ee = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, te = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ne = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && te(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, re = "__intlayerPreloaded", ie = ["en"], ae = "\x1B[0m", oe = "\x1B[34m", se = "\x1B[31m", ce = "\x1B[32m", le = "\x1B[36m", v = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? ie,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), y = (e, t) => !!e && (t ?? g.locales).includes(e), ue = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, b = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, de = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = b(n.expires);
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
}, fe = (e = S) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!x) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, pe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !x && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: b(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, de(r, e, i));
			} catch {}
		}
	}
}, me = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = v(t);
	if (!n || !r) return n;
	let a = h(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return y(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (y(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, he = 50, ge = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Set(), ve = (e) => {
	_e.has(e) || (_e.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function C(e, t, n) {
	let r = t ?? g?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ge.get(a);
	o || (o = /* @__PURE__ */ new Map(), ge.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? be(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > he && o.clear(), s = new t(r, n), o.set(i, s);
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
}), w = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? ae : n : ae}` : e;
w("✗", se), w("✓", ce), w("⏲", oe);
var we = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = v(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = me(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return fe() ?? t;
}, Te, T, Ee = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (T === void 0 || Te !== e) && (Te = e, T = we()), T;
}, E = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((e) => e.default),
	en: () => import("./intlayer-Footer-wrapper-jwd32g-en-BoEIM9Gx.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((e) => e.default)
}, De = Ee(), Oe = E[De];
typeof window < "u" && typeof Oe == "function" && Oe().then((e) => {
	E.__intlayerPreloaded = {
		locale: De,
		dictionary: e
	};
}, () => void 0);
var D = /* @__PURE__ */ new WeakMap(), ke = 0, Ae = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	ke += 1;
	let n = `p${ke}`;
	return D.set(e, n), n;
}, je = 256, O = /* @__PURE__ */ new WeakMap(), Me = (e) => typeof e == "object" && !!e, Ne = (e, t, n) => `${e}_${t}_${Ae(n)}`, Pe = (e, t) => {
	if (!Me(e)) return { hit: !1 };
	let n = O.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!Me(e)) return n;
	let r = O.get(e);
	return r || (r = /* @__PURE__ */ new Map(), O.set(e, r)), r.size >= je && r.clear(), r.set(t, n), n;
}, Fe = "translation", Ie = "enumeration", Le = "plural", A = "insertion", Re = "object", ze = "array", Be = "markdown", j = "html", Ve = "gender", He = "select", M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => M(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ze,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Re,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = M(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = M(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, Ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, We = (e, t) => e[Ue(e, t) ?? "fallback"], N = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), P = "default", Ge = /[^A-Za-z0-9._&=-]/g, F = /[^A-Za-z0-9._-]/g, Ke = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, I = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ke);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, L = (e) => e === void 0 ? P : typeof e == "string" ? I(e, Ge) : Object.keys(e).sort().map((t) => `${I(t, F)}=${I(String(e[t]), F)}`).join("&"), R = (e) => Array.isArray(e) ? e.length === 0 ? [P] : e.map(L) : [L(e)], qe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? P : e[0] ?? "default";
}, Je = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ye = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Xe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ze = (e, t) => {
	if (!Ye(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? P : qe(R(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Je(e, n, t, s)).map((t) => Xe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Qe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, $e = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? R(n).join(",") : String(n)}`;
}).join("|") : "", et = (e, t, n) => e[C("PluralRules", n).select(t)] ?? e.other, tt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (z(e) && z(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : B(e[r], t[r]));
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => B(e, t));
}, V = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, rt = (e) => {
	if (typeof e == "string") return e;
	if (V(e)) return e.nodeType === "html" ? e[j] : e[Be];
}, it = (e, t) => {
	if (typeof e == "string") return t;
	if (V(e)) {
		let n = e.nodeType === "html" ? j : Be;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, H = (e, t, n, r, i) => {
	let a = it(e, N(rt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, W = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? U : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Fe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return nt(o, e, t);
	}
}, G = U, at = (e) => U, ot = U, st = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => H(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = N(i, e);
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
}, ct = U, lt = U, ut = (e) => U, dt = U, ft = (e, t = !0) => [
	W(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	G,
	ot,
	st,
	ut(e ?? g.defaultLocale),
	dt,
	ct,
	lt
], pt = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), mt = (e, t, n) => {
	let { locale: r, selector: i } = Qe(t), a = Ne(r ?? g.defaultLocale, $e(i), n), o = Pe(e, a);
	if (o.hit) return o.content;
	let s = n ?? ft(r), c = Ze(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return pt(e.content, t, s);
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, ht = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
	if (n && n.locale === t) return n.dictionary;
}, gt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", _t = /\{\{\s*(.*?)\s*\}\}/g, vt = (e, t = {}) => {
	if (!Object.values(t).some(gt)) return {
		isSimple: !0,
		parts: e.replace(_t, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(_t), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, yt = (e, t, n = ".") => {
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
}, bt = [
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
}, xt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? C("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? C("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : C("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return C("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, St = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? xt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : xt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return St(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[A], t, n);
	if (r.nodeType === "html") return J(r[j], t, n);
	if (r.nodeType === "plural") {
		let e = r[Le];
		return J(et(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Ie], i = bt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) bt.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = C("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? We(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[He], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(tt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ve];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ct = (e, t = {}, n = "en") => {
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
}, wt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Tt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Tt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? f(t, { children: a(i) }, r) : f(t, { children: i }, r);
}), Et = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Et(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Dt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Ot(e, (e) => yt(t, r(e)), r);
}, Ot = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ct(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = wt(t), o = r(e, i);
			return o === void 0 ? n(e) : f(d, { children: Tt(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = wt(t), o = r(e, i);
			return o === void 0 ? n(e) : Et(Y(o), a);
		}
	});
}, kt = (e) => {
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
}, X = /* @__PURE__ */ new Map(), At = (e, t) => (X.has(e) || X.set(e, kt(t)), X.get(e).read()), jt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : f(d, { children: e });
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
}, Mt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => jt({
		...n,
		value: n.children,
		children: n.children
	})
}, Nt = U, Pt = (e, n) => {
	let i = vt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Ft = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => H(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Pt(i, e);
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
}, It = U, Lt = U, Z = /* @__PURE__ */ new Map(), Rt = (e, t = !0) => {
	let n = `${e ?? g.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		W(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
		G,
		at(e ?? g.defaultLocale),
		ot,
		ut(e ?? g.defaultLocale),
		dt,
		ct,
		lt,
		Mt,
		Nt,
		Ft,
		It,
		Lt
	];
	return Z.set(n, r), r;
}, zt = (e, t) => mt(e, t, Rt(typeof t == "object" && t ? t.locale : t)), Bt = fe(S), Vt = (e, t) => pe(e, {
	...S,
	isCookieEnabled: t
}), Ht = () => {
	let { locale: e } = a(Q) ?? {}, t = s(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ut = ({ children: e }) => (Ht(), e), Wt = () => {
	let { locale: e } = a(Q) ?? {}, t = s(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Gt = ({ children: e }) => (Wt(), e), Kt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = n({
	locale: Bt ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), qt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: u } = g ?? {}, [d, p] = c(e ?? Bt ?? t ?? u);
	o(() => {
		e && e !== d && p(e);
	}, [e]), o(() => {
		Kt();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Vt(e, s);
		}
	}), h = ue(d);
	return f(Q.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Jt = ({ children: e, ...t }) => p(qt, {
	...t,
	children: [
		f(Ut, {}),
		f(Gt, {}),
		e
	]
}), Yt = (e, t, n) => {
	let { locale: r, variant: i } = a(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? g.defaultLocale, l = ht(e, c);
	if (l) return zt(l, c);
	let u = e;
	return zt(At(`${String(t)}.${c}`, u[c]?.()), c);
}, Xt = ((e, t, n) => {
	let { locale: r } = a(Q) ?? {};
	return Dt(r, Yt(e, t), n);
}), Zt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ce({ log: ee })(`${w("IntlProvider", le)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), f(Jt, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/Footer.tsx";
function Qt() {
	let e = Xt(E, "footer"), t = u({ strict: !1 }).locale ?? "en", n = [
		{
			label: e("github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e("methodology"),
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: e("contributing"),
			to: "/$locale/contact",
			isInternal: !0
		}
	];
	return m("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: m("div", {
			className: "container py-8",
			children: [m("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					m("div", { children: [m("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 32,
						columnNumber: 13
					}, this), m("p", {
						className: "text-sm text-muted-foreground",
						children: e("anOpenSourceTestApplication")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 35,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 31,
						columnNumber: 11
					}, this),
					m("div", { children: [m("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("resources")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 40,
						columnNumber: 13
					}, this), m("ul", {
						className: "space-y-1",
						children: n.map((e) => m("li", { children: e.isInternal ? m(l, {
							preload: !1,
							to: e.to,
							params: { locale: t },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 47,
							columnNumber: 21
						}, this) : m("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 56,
							columnNumber: 21
						}, this) }, e.label, !1, {
							fileName: $,
							lineNumber: 45,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: $,
						lineNumber: 43,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 39,
						columnNumber: 11
					}, this),
					m("div", { children: [m("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("contact")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 70,
						columnNumber: 13
					}, this), m("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 73,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 69,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 30,
				columnNumber: 9
			}, this), m("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e("builtWith")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 78,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var $t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function en({ children: t }) {
	return m(e.Suspense, {
		fallback: null,
		children: m(Zt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: $t,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $t,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var tn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/Footer.wrapper.tsx";
function nn() {
	return m(en, { children: m(Qt, {}, void 0, !1, {
		fileName: tn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: tn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { nn as default };
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
}), n = "footer", r = {
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
}, i = {
	key: n,
	content: r
};
export { t };
