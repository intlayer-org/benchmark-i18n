import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Fragment as p, jsxDEV as m } from "react/jsx-dev-runtime";
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
}, re = "__intlayerPreloaded", ie = ["en"], v = "\x1B[0m", ae = "\x1B[34m", oe = "\x1B[31m", se = "\x1B[32m", ce = "\x1B[38;5;3m", le = "\x1B[36m", ue = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? ie,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), de = (e, t) => !!e && (t ?? g.locales).includes(e), fe = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, pe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, me = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = pe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, he = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, ge = (e = y) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!he) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, _e = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !he && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: pe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, me(r, e, i));
			} catch {}
		}
	}
}, ve = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ue(t);
	if (!n || !r) return n;
	let a = h(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return de(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (de(c, r)) return c;
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
function b(e, t, n) {
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
}, x = (e, t) => (n, r) => Ee(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), S = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e, De = (e, t = ce, n = v) => [e].flat().map((e) => S(e, t, n)).join(", ");
S("✗", oe), S("✓", se), S("⏲", ae);
var Oe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = ue(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ve(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return ge() ?? t;
}, C, w, T = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (w === void 0 || C !== e) && (C = e, w = Oe()), w;
}, E = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-BlogHeader-wrapper-102lty-en-CLxdM0Qu.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, D = T(), O = E[D];
typeof window < "u" && typeof O == "function" && O().then((e) => {
	E.__intlayerPreloaded = {
		locale: D,
		dictionary: e
	};
}, () => void 0);
var k = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-BlogHeader-wrapper-102lty-en-CLxdM0Qu.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/zh.json").then((e) => e.default)
}, A = T(), j = k[A];
typeof window < "u" && typeof j == "function" && j().then((e) => {
	k.__intlayerPreloaded = {
		locale: A,
		dictionary: e
	};
}, () => void 0);
var M = /* @__PURE__ */ new WeakMap(), N = 0, ke = (e) => {
	if (!e) return "base";
	let t = M.get(e);
	if (t) return t;
	N += 1;
	let n = `p${N}`;
	return M.set(e, n), n;
}, Ae = 256, P = /* @__PURE__ */ new WeakMap(), F = (e) => typeof e == "object" && !!e, je = (e, t, n) => `${e}_${t}_${ke(n)}`, Me = (e, t) => {
	if (!F(e)) return { hit: !1 };
	let n = P.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!F(e)) return n;
	let r = P.get(e);
	return r || (r = /* @__PURE__ */ new Map(), P.set(e, r)), r.size >= Ae && r.clear(), r.set(t, n), n;
}, Ne = "translation", Pe = "enumeration", Fe = "plural", L = "insertion", Ie = "object", Le = "array", Re = "markdown", R = "html", ze = "gender", Be = "select", z = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => z(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => z(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Ie,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = z(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = z(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, Ve = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, He = (e, t) => e[Ve(e, t) ?? "fallback"], Ue = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), B = "default", We = /[^A-Za-z0-9._&=-]/g, Ge = /[^A-Za-z0-9._-]/g, Ke = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, V = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ke);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, qe = (e) => e === void 0 ? B : typeof e == "string" ? V(e, We) : Object.keys(e).sort().map((t) => `${V(t, Ge)}=${V(String(e[t]), Ge)}`).join("&"), Je = (e) => Array.isArray(e) ? e.length === 0 ? [B] : e.map(qe) : [qe(e)], Ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? B : e[0] ?? "default";
}, Xe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ze = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Qe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, $e = (e, t) => {
	if (!Ze(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? B : Ye(Je(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Xe(e, n, t, s)).map((t) => Qe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, et = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, tt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Je(n).join(",") : String(n)}`;
}).join("|") : "", nt = () => ({}), rt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), it = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : rt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : it(e ? `${e}.${String(n)}` : String(n)) }), at = /* @__PURE__ */ new Set(), H = (e, t, n) => {
	let r = nt()[e];
	return r ? Tt(r, t, n) : (at.has(e) || (x({ log: ee })(typeof window > "u" ? `Dictionary ${De(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), at.add(e)), it(e));
}, ot = (e, t, n) => e[b("PluralRules", n).select(t)] ?? e.other, st = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, ct = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, lt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (ct(e) && ct(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : lt(e[r], t[r]));
		return n;
	}
	return e;
}, ut = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => lt(e, t));
}, U = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, dt = (e) => {
	if (typeof e == "string") return e;
	if (U(e)) return e.nodeType === "html" ? e[R] : e[Re];
}, ft = (e, t) => {
	if (typeof e == "string") return t;
	if (U(e)) {
		let n = e.nodeType === "html" ? R : Re;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, pt = (e, t, n, r, i) => {
	let a = ft(e, Ue(dt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, W = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, mt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? W : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Ne,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ut(o, e, t);
	}
}, ht = W, gt = (e) => W, _t = W, vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: L }], i = e[L], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => pt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ue(i, e);
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
}, yt = W, bt = W, xt = (e) => W, St = W, Ct = (e, t = !0) => [
	mt(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	ht,
	_t,
	vt,
	xt(e ?? g.defaultLocale),
	St,
	yt,
	bt
], wt = (e, t, n = []) => z(e, {
	...t,
	plugins: n
}), Tt = (e, t, n) => {
	let { locale: r, selector: i } = et(t), a = je(r ?? g.defaultLocale, tt(i), n), o = Me(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ct(r), c = $e(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return wt(e.content, t, s);
	};
	return c === null ? I(e, a, null) : Array.isArray(c) ? I(e, a, c.map(l)) : I(e, a, l(c));
}, Et = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
	if (n && n.locale === t) return n.dictionary;
}, Dt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ot = /\{\{\s*(.*?)\s*\}\}/g, kt = (e, t = {}) => {
	if (!Object.values(t).some(Dt)) return {
		isSimple: !0,
		parts: e.replace(Ot, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ot), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, G = (e, t, n = ".") => {
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
}, At = [
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
}, jt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? b("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? b("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : b("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return b("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Mt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? jt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : jt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Mt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[L], t, n);
	if (r.nodeType === "html") return J(r[R], t, n);
	if (r.nodeType === "plural") {
		let e = r[Fe];
		return J(ot(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Pe], i = At.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) At.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = b("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? He(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Be], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(st(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ze];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Nt = (e, t = {}, n = "en") => {
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
}, Pt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Ft = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Ft(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), It = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = It(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Lt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Bt(e, (t) => Rt(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Rt = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = nt();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = G(H(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return G(H(i, e), a);
	} catch {
		return;
	}
}, zt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Bt(e, (e) => G(t, r(e)), r);
}, Bt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Nt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Pt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: Ft(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Pt(t), o = r(e, i);
			return o === void 0 ? n(e) : It(Y(o), a);
		}
	});
}, Vt = (e) => {
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
}, X = /* @__PURE__ */ new Map(), Ht = (e, t) => (X.has(e) || X.set(e, Vt(t)), X.get(e).read()), Ut = ({ children: e, value: t, additionalProps: n }) => {
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
}, Wt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Ut({
		...n,
		value: n.children,
		children: n.children
	})
}, Gt = W, Kt = (e, n) => {
	let i = kt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, qt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: L }], i = e[L], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => pt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Kt(i, e);
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
}, Jt = W, Yt = W, Z = /* @__PURE__ */ new Map(), Xt = (e, t = !0) => {
	let n = `${e ?? g.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		mt(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
		ht,
		gt(e ?? g.defaultLocale),
		_t,
		xt(e ?? g.defaultLocale),
		St,
		yt,
		bt,
		Wt,
		Gt,
		qt,
		Jt,
		Yt
	];
	return Z.set(n, r), r;
}, Zt = (e, t) => Tt(e, t, Xt(typeof t == "object" && t ? t.locale : t)), Qt = ge(y), $t = (e, t) => _e(e, {
	...y,
	isCookieEnabled: t
}), en = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, tn = ({ children: e }) => (en(), e), nn = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, rn = ({ children: e }) => (nn(), e), an = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = n({
	locale: Qt ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), on = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = g ?? {}, [f, p] = l(e ?? Qt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		an();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), $t(e, s);
		}
	}), h = fe(f);
	return d(Q.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, sn = ({ children: e, ...t }) => f(on, {
	...t,
	children: [
		d(tn, {}),
		d(rn, {}),
		e
	]
}), cn = (e, t, n) => {
	let { locale: r, variant: i } = a(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? g.defaultLocale, l = Et(e, c);
	if (l) return Zt(l, c);
	let u = e;
	return Zt(Ht(`${String(t)}.${c}`, u[c]?.()), c);
}, ln = ((e, t, n) => {
	let { locale: r } = a(Q) ?? {};
	return zt(r, cn(e, t), n);
}), un = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && x({ log: ee })(`${S("IntlProvider", le)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(sn, {
	locale: e,
	children: t
}, String(e))), dn = ((e) => {
	let { locale: t } = a(Q) ?? {};
	return s(() => Lt(t, e), [t, e]);
}), fn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/MockBanner.tsx", pn = () => {
	let e = dn();
	return m("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	}, void 0, !1, {
		fileName: fn,
		lineNumber: 6,
		columnNumber: 5
	}, void 0);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/pages/blog/BlogHeader.tsx";
function mn() {
	let e = ln(E, "header"), t = ln(k, "blog-header");
	return m(p, { children: [
		m(pn, {}, void 0, !1, {
			fileName: $,
			lineNumber: 9,
			columnNumber: 7
		}, this),
		m("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("blog")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 10,
			columnNumber: 7
		}, this),
		m("p", {
			className: "mb-10 text-muted-foreground",
			children: t("insightsTutorialsAndAnalysisFrom")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 11,
			columnNumber: 7
		}, this)
	] }, void 0, !0, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var hn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function gn({ children: t }) {
	return m(e.Suspense, {
		fallback: null,
		children: m(un, {
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
var _n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/pages/blog/BlogHeader.wrapper.tsx";
function vn() {
	return m(gn, { children: m(mn, {}, void 0, !1, {
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
}), r = "blog-header", i = { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." }, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "header", c = {
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
}, l = {
	key: s,
	content: c
};
export { n, o as t };
