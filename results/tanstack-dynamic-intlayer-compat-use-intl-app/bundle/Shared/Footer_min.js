import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Link as u, useParams as d } from "@tanstack/react-router";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
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
}, v = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && te(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, y = ["en"], b = "\x1B[0m", ne = "\x1B[34m", re = "\x1B[31m", ie = "\x1B[32m", ae = "\x1B[36m", oe = "__intlayerPreloaded", se = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? y,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), ce = (e, t) => !!e && (t ?? g.locales).includes(e), le = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, ue = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, de = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ue(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, fe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, S = (e = x) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!fe) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, C = !1, w, pe = () => typeof window > "u" ? S(x) : (C ||= (w = S(x), !0), w), me = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (C = !1, !fe && _.storage.cookies)) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ue(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, de(r, e, i));
			} catch {}
		}
	}
}, he = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = se(t);
	if (!n || !r) return n;
	let a = h(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ce(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ce(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ge = 50, T = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), _e = (e) => {
	E.has(e) || (E.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ve = {
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
}, ye = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (_e(e), ve[e]);
};
function D(e, t, n) {
	let r = t ?? g?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = T.get(a);
	o || (o = /* @__PURE__ */ new Map(), T.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ge && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var be = (e) => e, xe = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = be(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Se = (e, t) => (n, r) => xe(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), O = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? b : n : b}` : e;
O("✗", re), O("✓", ie), O("⏲", ne);
var Ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = se(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = v(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = he(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return S() ?? t;
}, we, k, Te = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (k === void 0 || we !== e) && (we = e, k = Ce()), k;
}, A = {
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
}, Ee = Te(), De = A[Ee];
typeof window < "u" && typeof De == "function" && De().then((e) => {
	A.__intlayerPreloaded = {
		locale: Ee,
		dictionary: e
	};
}, () => void 0);
var Oe = /* @__PURE__ */ new WeakMap(), ke = 0, Ae = (e) => {
	if (!e) return "base";
	let t = Oe.get(e);
	if (t) return t;
	ke += 1;
	let n = `p${ke}`;
	return Oe.set(e, n), n;
}, je = 256, j = /* @__PURE__ */ new WeakMap(), Me = (e) => typeof e == "object" && !!e, Ne = (e, t, n) => `${e}_${t}_${Ae(n)}`, Pe = (e, t) => {
	if (!Me(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, M = (e, t, n) => {
	if (!Me(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= je && r.clear(), r.set(t, n), n;
}, Fe = "translation", Ie = "enumeration", N = "plural", Le = "condition", P = "insertion", Re = "object", ze = "array", F = "markdown", I = "html", L = "gender", R = "select", z = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), B = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, B);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => B(e, z(t, e, {
		type: ze,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Re,
			key: r
		};
		if (t.eager) {
			n[r] = B(e[r], z(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = B(e[r], z(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Be = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ve = (e, t) => e[Be(e, t) ?? "fallback"], V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), He = (e, t, n) => e[D("PluralRules", n).select(t)] ?? e.other, Ue = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, H = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, We = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !H(e) || !H(t)) return e;
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
}, U = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ke = (e) => {
	if (typeof e == "string") return e;
	if (U(e)) return e.nodeType === "html" ? e[I] : e[F];
}, qe = (e, t) => {
	if (typeof e == "string") return t;
	if (U(e)) {
		let n = e.nodeType === "html" ? I : F;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Je = (e, t, n, r, i) => {
	let a = qe(e, V(Ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, W = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ye = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Xe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? W : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ge(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Fe,
				key: e
			}]
		});
	}
}, Ze = W, Qe = (e) => W, $e = W, et = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: P }], i = e[P], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => Je(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
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
	Ie,
	Le,
	N,
	L,
	R
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
}, rt = (e, t) => typeof t == "function" && tt.includes(e?.nodeType ?? "") ? (n) => nt(e, t, n) : t, it = W, at = W, ot = (e) => W, st = W, ct = (e, t = !0) => [
	Xe(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	Ze,
	Qe(e ?? g.defaultLocale),
	$e,
	et,
	ot(e ?? g.defaultLocale),
	st,
	it,
	at
].filter((e) => e !== W), lt = (e, t, n = []) => B(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), ut = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ne(r ?? g.defaultLocale, "", n), o = Pe(e, a);
	if (o.hit) return o.content;
	let s = n ?? ct(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return lt(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? M(e, a, null) : Array.isArray(c) ? M(e, a, c.map(l)) : M(e, a, l(c));
}, dt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[oe];
	if (n && n.locale === t) return n.dictionary;
}, ft = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", pt = /\{\{\s*(.*?)\s*\}\}/g, mt = (e, t = {}) => {
	if (!Object.values(t).some(ft)) return {
		isSimple: !0,
		parts: e.replace(pt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(pt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ht = (e, t, n = ".") => {
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
}, gt = [
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
}, _t = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? D("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? D("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : D("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return D("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, vt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? _t(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : _t(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return vt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[P], t, n);
	if (r.nodeType === "html") return J(r[I], t, n);
	if (r.nodeType === "plural") {
		let e = r[N];
		return J(He(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Ie], i = gt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) gt.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = D("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[R], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Ue(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[L];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, yt = (e, t = {}, n = "en") => {
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
		}) : o && t.push({
			tag: o,
			children: Y(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, X = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, bt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = bt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? p(t, { children: a(i) }, r) : p(t, { children: i }, r);
}), xt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = xt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), St = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Ct(e, (e) => ht(t, r(e)), r);
}, Ct = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return yt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = X(t), o = r(e, i);
			return o === void 0 ? n(e) : p(f, { children: bt(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = X(t), o = r(e, i);
			return o === void 0 ? n(e) : xt(Y(o), a);
		}
	});
}, wt = (e) => {
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
}, Z = /* @__PURE__ */ new Map(), Tt = (e, t) => (Z.has(e) || Z.set(e, wt(t)), Z.get(e).read()), Et = /* @__PURE__ */ new Map(), Dt = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), Ot = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Et.get(t);
	i || (i = /* @__PURE__ */ new Map(), Et.set(t, i));
	let a = i.get(r);
	return a || (a = Dt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, kt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : p(f, { children: e }),
	value: t,
	...n
}, Ot(t)), At = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => kt({
		value: t.children,
		children: t.children
	})
}, jt = W, Mt = (e, n) => {
	let i = mt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Nt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: P }], i = e[P], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => Je(e, i, n, t.plugins, r);
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
		};
		return rt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Pt = W, Ft = W, Q = /* @__PURE__ */ new Map(), It = (e, t = !0) => {
	let n = `${e ?? g.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		At,
		Xe(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
		Ze,
		Qe(e ?? g.defaultLocale),
		$e,
		ot(e ?? g.defaultLocale),
		st,
		it,
		at,
		jt,
		Nt,
		Pt,
		Ft
	].filter((e) => e !== W);
	return Q.set(n, r), r;
}, Lt = (e, t) => ut(e, t, It(typeof t == "object" && t ? t.locale : t)), Rt = pe, zt = (e, t) => me(e, {
	...x,
	isCookieEnabled: t
}), Bt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = n({
	get locale() {
		return Rt() ?? g?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Vt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: f } = g ?? {}, [m, h] = l(() => e ?? Rt() ?? t ?? f), [_, ee] = l(e);
	e !== _ && (ee(e), e && e !== m && h(e)), s(() => {
		Bt();
	}, []);
	let te = a((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), zt(e, u);
		}
	}, [
		m,
		d,
		u
	]), v = i ?? te, y = le(m), b = c(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: o
	}), [
		y,
		v,
		n,
		o
	]);
	return p($.Provider, {
		value: b,
		children: r
	});
}, Ht = ({ children: e, ...t }) => m(Vt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ut = (e, t, n) => {
	let { locale: r, variant: i } = o($) ?? {}, { locale: a, selector: s } = {
		locale: n,
		selector: void 0
	}, c = a ?? r ?? g.defaultLocale, l = dt(e, c);
	if (l) return Lt(l, c);
	let u = e;
	return Lt(Tt(`${String(t)}.${c}`, u[c]?.()), c);
}, Wt = ((e, t, n) => {
	let { locale: r } = o($) ?? {};
	return St(r, Ut(e, t), n);
}), Gt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Se({ log: ee })(`${O("IntlProvider", ae)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), p(Ht, {
	locale: e,
	children: t
}, String(e)));
function Kt() {
	let e = Wt(A, "footer"), t = d({ strict: !1 }).locale ?? "en", n = [
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
	return p("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: m("div", {
			className: "container py-8",
			children: [m("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					m("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), p("p", {
						className: "text-sm text-muted-foreground",
						children: e("anOpenSourceTestApplication")
					})] }),
					m("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("resources")
					}), p("ul", {
						className: "space-y-1",
						children: n.map((e) => p("li", { children: e.isInternal ? p(u, {
							preload: !1,
							to: e.to,
							params: { locale: t },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : p("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					m("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("contact")
					}), p("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), p("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e("builtWith")
			})]
		})
	});
}
function qt({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(Gt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Jt() {
	return p(qt, { children: p(Kt, {}) });
}
export { Jt as default };
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
