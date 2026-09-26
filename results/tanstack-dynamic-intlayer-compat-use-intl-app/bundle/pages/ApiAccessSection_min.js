import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useId as c, useMemo as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
var m = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), h = {
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
}, g = {
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
}, _ = ["en"], v = "\x1B[0m", re = "\x1B[34m", ie = "\x1B[31m", ae = "\x1B[32m", oe = "\x1B[36m", se = "__intlayerPreloaded", y = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? h?.defaultLocale ?? "en",
	mode: e.mode ?? g?.mode ?? "prefix-no-default",
	locales: e.locales ?? h?.locales ?? _,
	rewrite: e.rewrite ?? g?.rewrite,
	domains: e.domains ?? g?.domains
}), ce = (e, t) => !!e && (t ?? h.locales).includes(e), le = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, b = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ue = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = b(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, de = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!de) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, C = !1, w, fe = () => typeof window > "u" ? S(x) : (C ||= (w = S(x), !0), w), pe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (C = !1, !de && g.storage.cookies)) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: b(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ue(r, e, i));
			} catch {}
		}
	}
}, me = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = y(t);
	if (!n || !r) return n;
	let a = m(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ce(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ce(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, he = 50, T = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Set(), _e = (e) => {
	ge.has(e) || (ge.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function E(e, t, n) {
	let r = t ?? h?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = T.get(a);
	o || (o = /* @__PURE__ */ new Map(), T.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > he && o.clear(), s = new t(r, n), o.set(i, s);
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
}), D = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e;
D("✗", ie), D("✓", ae), D("⏲", re);
var Ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = y(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = me(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return S() ?? t;
}, we, O, Te = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (O === void 0 || we !== e) && (we = e, O = Ce()), O;
}, k = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/de.json").then((e) => e.default),
	en: () => import("./intlayer-ApiAccessSection-wrapper-6pgly1-en-FjaLEaqb.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/zh.json").then((e) => e.default)
}, Ee = Te(), De = k[Ee];
typeof window < "u" && typeof De == "function" && De().then((e) => {
	k.__intlayerPreloaded = {
		locale: Ee,
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
}, Me = "translation", F = "enumeration", I = "plural", Ne = "condition", L = "insertion", Pe = "object", Fe = "array", R = "markdown", z = "html", B = "gender", V = "select", H = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), U = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, U);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => U(e, H(t, e, {
		type: Fe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Pe,
			key: r
		};
		if (t.eager) {
			n[r] = U(e[r], H(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = U(e[r], H(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Ie = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Le = (e, t) => e[Ie(e, t) ?? "fallback"], Re = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), ze = (e, t, n) => e[E("PluralRules", n).select(t)] ?? e.other, Be = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ve = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, He = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Ve(e) || !Ve(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? He(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ue = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => He(e, t));
}, W = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, We = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[z] : e[R];
}, Ge = (e, t) => {
	if (typeof e == "string") return t;
	if (W(e)) {
		let n = e.nodeType === "html" ? z : R;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ke = (e, t, n, r, i) => {
	let a = Ge(e, Re(We(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, G = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, qe = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Je = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? G : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ue(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Me,
				key: e
			}]
		});
	}
}, Ye = G, Xe = (e) => G, Ze = G, Qe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: L }], i = e[L], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => Ke(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Re(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return tt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, $e = [
	F,
	Ne,
	I,
	B,
	V
], et = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !$e.includes(i)) return t;
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
		return !r && qe(i) ? i(n) : i;
	};
}, tt = (e, t) => typeof t == "function" && $e.includes(e?.nodeType ?? "") ? (n) => et(e, t, n) : t, nt = G, rt = G, it = (e) => G, at = G, ot = (e, t = !0) => [
	Je(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	Ye,
	Xe(e ?? h.defaultLocale),
	Ze,
	Qe,
	it(e ?? h.defaultLocale),
	at,
	nt,
	rt
].filter((e) => e !== G), st = (e, t, n = []) => U(e, {
	...t,
	plugins: n
}), K = /* @__PURE__ */ new WeakSet(), ct = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ae(r ?? h.defaultLocale, "", n), o = je(e, a);
	if (o.hit) return o.content;
	let s = n ?? ot(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !K.has(e)
		};
		K.add(e);
		try {
			return st(e.content, t, s);
		} finally {
			t.eager && K.delete(e);
		}
	};
	return c === null ? P(e, a, null) : Array.isArray(c) ? P(e, a, c.map(l)) : P(e, a, l(c));
}, lt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[se];
	if (n && n.locale === t) return n.dictionary;
}, ut = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", dt = /\{\{\s*(.*?)\s*\}\}/g, ft = (e, t = {}) => {
	if (!Object.values(t).some(ut)) return {
		isSimple: !0,
		parts: e.replace(dt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(dt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, pt = (e, t, n = ".") => {
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
}, mt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], q = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, ht = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? E("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? E("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : E("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return E("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, gt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? ht(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : ht(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), J = (e, t) => e[t] ?? e.count ?? e.n, Y = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return gt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Y(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Y(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Y(r[L], t, n);
	if (r.nodeType === "html") return Y(r[z], t, n);
	if (r.nodeType === "plural") {
		let e = r[I];
		return Y(ze(e, Number(J(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[F], i = mt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) mt.includes(t) || (o[t] = n);
		let s = J(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = E("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Le(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Y(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[V], i = J(t, typeof r.variable == "string" ? r.variable : "value");
		return Y(Be(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[B];
		return Y(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, _t = (e, t = {}, n = "en") => {
	let r = Y(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, X = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: X(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, vt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, yt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = yt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? f(t, { children: a(i) }, r) : f(t, { children: i }, r);
}), bt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = bt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), xt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return St(e, (e) => pt(t, r(e)), r);
}, St = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return _t(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = vt(t), o = r(e, i);
			return o === void 0 ? n(e) : f(d, { children: yt(X(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = vt(t), o = r(e, i);
			return o === void 0 ? n(e) : bt(X(o), a);
		}
	});
}, Ct = (e) => {
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
}, Z = /* @__PURE__ */ new Map(), wt = (e, t) => (Z.has(e) || Z.set(e, Ct(t)), Z.get(e).read()), Tt = /* @__PURE__ */ new Map(), Et = (e, t) => Object.create(new Proxy(e, {
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
}), Dt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Tt.get(t);
	i || (i = /* @__PURE__ */ new Map(), Tt.set(t, i));
	let a = i.get(r);
	return a || (a = Et(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ot = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : f(d, { children: e }),
	value: t,
	...n
}, Dt(t)), kt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ot({
		value: t.children,
		children: t.children
	})
}, At = G, jt = (e, n) => {
	let i = ft(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Mt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: L }], i = e[L], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => Ke(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = jt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return tt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Nt = G, Pt = G, Q = /* @__PURE__ */ new Map(), Ft = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		kt,
		Je(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		Ye,
		Xe(e ?? h.defaultLocale),
		Ze,
		it(e ?? h.defaultLocale),
		at,
		nt,
		rt,
		At,
		Mt,
		Nt,
		Pt
	].filter((e) => e !== G);
	return Q.set(n, r), r;
}, It = (e, t) => ct(e, t, Ft(typeof t == "object" && t ? t.locale : t)), Lt = fe, Rt = (e, t) => pe(e, {
	...x,
	isCookieEnabled: t
}), zt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = n({
	get locale() {
		return Lt() ?? h?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Bt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: d, defaultLocale: p } = h ?? {}, [m, g] = u(() => e ?? Lt() ?? t ?? p), [ee, te] = u(e);
	e !== ee && (te(e), e && e !== m && g(e)), s(() => {
		zt();
	}, []);
	let ne = a((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Rt(e, c);
		}
	}, [
		m,
		d,
		c
	]), _ = i ?? ne, v = le(m), re = l(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: o
	}), [
		v,
		_,
		n,
		o
	]);
	return f($.Provider, {
		value: re,
		children: r
	});
}, Vt = ({ children: e, ...t }) => p(Bt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ht = (e, t, n) => {
	let { locale: r, variant: i } = o($) ?? {}, { locale: a, selector: s } = {
		locale: n,
		selector: void 0
	}, c = a ?? r ?? h.defaultLocale, l = lt(e, c);
	if (l) return It(l, c);
	let u = e;
	return It(wt(`${String(t)}.${c}`, u[c]?.()), c);
}, Ut = ((e, t, n) => {
	let { locale: r } = o($) ?? {};
	return xt(r, Ht(e, t), n);
}), Wt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Se({ log: ee })(`${D("IntlProvider", oe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), f(Vt, {
	locale: e,
	children: t
}, String(e)));
function Gt() {
	let e = Ut(k, "api-access-section"), t = c();
	return p("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [f("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e("apiAccess")
		}), p("div", { children: [
			f("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("apiKey")
			}),
			p("div", {
				className: "flex gap-2",
				children: [f("input", {
					id: t,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), f("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Copy"
				})]
			}),
			f("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: e("useThisKeyToAccess")
			})
		] })]
	});
}
function Kt({ children: t }) {
	return f(e.Suspense, {
		fallback: null,
		children: f(Wt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function qt() {
	return f(Kt, { children: f(Gt, {}) });
}
export { qt as default };
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
}), n = "api-access-section", r = {
	apiAccess: "API Access",
	apiKey: "API Key",
	useThisKeyToAccess: "Use this key to access the benchmarking API programmatically."
}, i = {
	key: n,
	content: r
};
export { t };
