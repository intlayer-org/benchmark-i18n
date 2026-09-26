import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var p = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), m = {
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
}, _ = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ee = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && _(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, te = ["en"], v = "\x1B[0m", y = "\x1B[34m", b = "\x1B[31m", ne = "\x1B[32m", re = "\x1B[36m", ie = "__intlayerPreloaded", x = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? te,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), ae = (e, t) => !!e && (t ?? m.locales).includes(e), oe = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, se = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ce = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = se(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, le = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, C = (e = S) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!le) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ue = !1, de, fe = () => typeof window > "u" ? C(S) : (ue ||= (de = C(S), !0), de), pe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (ue = !1, !le && h.storage.cookies)) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: se(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ce(r, e, i));
			} catch {}
		}
	}
}, me = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = x(t);
	if (!n || !r) return n;
	let a = p(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ae(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ae(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, he = 50, w = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Set(), _e = (e) => {
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
function T(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = w.get(a);
	o || (o = /* @__PURE__ */ new Map(), w.set(a, o));
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
}), E = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e;
E("✗", b), E("✓", ne), E("⏲", y);
var Ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = x(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ee(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = me(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, D, O, we = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (O === void 0 || D !== e) && (D = e, O = Ce()), O;
}, k = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/de.json").then((e) => e.default),
	en: () => import("./intlayer-TeamGrid-wrapper-nh0krf-en-86GknGPF.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/zh.json").then((e) => e.default)
}, A = we(), j = k[A];
typeof window < "u" && typeof j == "function" && j().then((e) => {
	k.__intlayerPreloaded = {
		locale: A,
		dictionary: e
	};
}, () => void 0);
var M = /* @__PURE__ */ new WeakMap(), N = 0, Te = (e) => {
	if (!e) return "base";
	let t = M.get(e);
	if (t) return t;
	N += 1;
	let n = `p${N}`;
	return M.set(e, n), n;
}, Ee = 256, P = /* @__PURE__ */ new WeakMap(), F = (e) => typeof e == "object" && !!e, De = (e, t, n) => `${e}_${t}_${Te(n)}`, Oe = (e, t) => {
	if (!F(e)) return { hit: !1 };
	let n = P.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!F(e)) return n;
	let r = P.get(e);
	return r || (r = /* @__PURE__ */ new Map(), P.set(e, r)), r.size >= Ee && r.clear(), r.set(t, n), n;
}, ke = "translation", L = "enumeration", R = "plural", Ae = "condition", z = "insertion", je = "object", Me = "array", Ne = "markdown", B = "html", Pe = "gender", Fe = "select", V = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), H = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, H);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => H(e, V(t, e, {
		type: Me,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: je,
			key: r
		};
		if (t.eager) {
			n[r] = H(e[r], V(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = H(e[r], V(t, e[r], i));
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
}, Le = (e, t) => e[Ie(e, t) ?? "fallback"], Re = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), ze = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, Be = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, U = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ve = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !U(e) || !U(t)) return e;
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
}, W = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ue = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[B] : e[Ne];
}, We = (e, t) => {
	if (typeof e == "string") return t;
	if (W(e)) {
		let n = e.nodeType === "html" ? B : Ne;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ge = (e, t, n, r, i) => {
	let a = We(e, Re(Ue(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, G = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ke = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, qe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? G : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = He(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ke,
				key: e
			}]
		});
	}
}, Je = G, Ye = (e) => G, Xe = G, Ze = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => Ge(e, i, n, t.plugins, r);
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
		return et(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Qe = [
	L,
	Ae,
	R,
	Pe,
	Fe
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
}, et = (e, t) => typeof t == "function" && Qe.includes(e?.nodeType ?? "") ? (n) => $e(e, t, n) : t, tt = G, nt = G, rt = (e) => G, it = G, at = (e, t = !0) => [
	qe(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Je,
	Ye(e ?? m.defaultLocale),
	Xe,
	Ze,
	rt(e ?? m.defaultLocale),
	it,
	tt,
	nt
].filter((e) => e !== G), ot = (e, t, n = []) => H(e, {
	...t,
	plugins: n
}), K = /* @__PURE__ */ new WeakSet(), st = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = De(r ?? m.defaultLocale, "", n), o = Oe(e, a);
	if (o.hit) return o.content;
	let s = n ?? at(r), c = e, l = (e) => {
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
			return ot(e.content, t, s);
		} finally {
			t.eager && K.delete(e);
		}
	};
	return c === null ? I(e, a, null) : Array.isArray(c) ? I(e, a, c.map(l)) : I(e, a, l(c));
}, ct = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, lt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", ut = /\{\{\s*(.*?)\s*\}\}/g, dt = (e, t = {}) => {
	if (!Object.values(t).some(lt)) return {
		isSimple: !0,
		parts: e.replace(ut, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(ut), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ft = (e, t, n = ".") => {
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
}, pt = [
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
}, mt = (e, t, n, r) => {
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
}, ht = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? mt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : mt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), J = (e, t) => e[t] ?? e.count ?? e.n, Y = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ht(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Y(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Y(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Y(r[z], t, n);
	if (r.nodeType === "html") return Y(r[B], t, n);
	if (r.nodeType === "plural") {
		let e = r[R];
		return Y(ze(e, Number(J(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[L], i = pt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) pt.includes(t) || (o[t] = n);
		let s = J(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Le(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Y(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Fe], i = J(t, typeof r.variable == "string" ? r.variable : "value");
		return Y(Be(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Pe];
		return Y(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, gt = (e, t = {}, n = "en") => {
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
}, _t = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, vt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = vt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), yt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = yt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), bt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return xt(e, (e) => ft(t, r(e)), r);
}, xt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return gt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = _t(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: vt(X(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = _t(t), o = r(e, i);
			return o === void 0 ? n(e) : yt(X(o), a);
		}
	});
}, St = (e) => {
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
}, Z = /* @__PURE__ */ new Map(), Ct = (e, t) => (Z.has(e) || Z.set(e, St(t)), Z.get(e).read()), wt = /* @__PURE__ */ new Map(), Tt = (e, t) => Object.create(new Proxy(e, {
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
}), Et = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = wt.get(t);
	i || (i = /* @__PURE__ */ new Map(), wt.set(t, i));
	let a = i.get(r);
	return a || (a = Tt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Dt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, Et(t)), Ot = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Dt({
		value: t.children,
		children: t.children
	})
}, kt = G, At = (e, n) => {
	let i = dt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, jt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => Ge(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = At(i, e);
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
}, Mt = G, Nt = G, Q = /* @__PURE__ */ new Map(), Pt = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Ot,
		qe(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		Je,
		Ye(e ?? m.defaultLocale),
		Xe,
		rt(e ?? m.defaultLocale),
		it,
		tt,
		nt,
		kt,
		jt,
		Mt,
		Nt
	].filter((e) => e !== G);
	return Q.set(n, r), r;
}, Ft = (e, t) => st(e, t, Pt(typeof t == "object" && t ? t.locale : t)), It = fe, Lt = (e, t) => pe(e, {
	...S,
	isCookieEnabled: t
}), Rt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = n({
	get locale() {
		return It() ?? m?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), zt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: p } = m ?? {}, [h, g] = l(() => e ?? It() ?? t ?? p), [_, ee] = l(e);
	e !== _ && (ee(e), e && e !== h && g(e)), s(() => {
		Rt();
	}, []);
	let te = a((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Lt(e, u);
		}
	}, [
		h,
		f,
		u
	]), v = i ?? te, y = oe(h), b = c(() => ({
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
	return d($.Provider, {
		value: b,
		children: r
	});
}, Bt = ({ children: e, ...t }) => f(zt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Vt = (e, t, n) => {
	let { locale: r, variant: i } = o($) ?? {}, { locale: a, selector: s } = {
		locale: n,
		selector: void 0
	}, c = a ?? r ?? m.defaultLocale, l = ct(e, c);
	if (l) return Ft(l, c);
	let u = e;
	return Ft(Ct(`${String(t)}.${c}`, u[c]?.()), c);
}, Ht = ((e, t, n) => {
	let { locale: r } = o($) ?? {};
	return bt(r, Vt(e, t), n);
}), Ut = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Se({ log: g })(`${E("IntlProvider", re)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(Bt, {
	locale: e,
	children: t
}, String(e)));
function Wt() {
	let e = Ht(k, "team-grid"), t = [
		{
			name: e("sarahChen"),
			role: e("founderLeadEngineer"),
			bio: e("formerGoogleEngineerWith10")
		},
		{
			name: e("marcusWeber"),
			role: e("performanceEngineer"),
			bio: e("specializesInJavascriptPerformanceOptimization")
		},
		{
			name: e("aishaPatel"),
			role: e("developerAdvocate"),
			bio: e("passionateAboutDeveloperExperienceAnd")
		},
		{
			name: e("tomasRodriguez"),
			role: e("fullStackDeveloper"),
			bio: e("maintainsTheBenchmarkingInfrastructureAnd")
		},
		{
			name: e("yukiTanaka"),
			role: e("dataAnalyst"),
			bio: e("ensuresStatisticalRigorInAll")
		},
		{
			name: e("elenaKowalski"),
			role: e("communityManager"),
			bio: e("managesCommunityContributionsPartnershipsAnd")
		}
	];
	return d("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((e) => f("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				d("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				d("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				d("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				d("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
}
function Gt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Ut, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Kt() {
	return d(Gt, { children: d(Wt, {}) });
}
export { Kt as default };
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
}), n = "team-grid", r = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "Founder & Lead Engineer",
	formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "Performance Engineer",
	specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "Developer Advocate",
	passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "Data Analyst",
	ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	elenaKowalski: "Elena Kowalski",
	communityManager: "Community Manager",
	managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance."
}, i = {
	key: n,
	content: r
};
export { t };
