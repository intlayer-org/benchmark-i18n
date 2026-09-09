import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { usePathname as m, useRouter as h } from "next/navigation.js";
import ee from "next/link";
import { jsxDEV as g } from "react/jsx-dev-runtime";
import { ChevronDown as te } from "lucide-react";
import { useParams as ne, usePathname as re, useRouter as ie } from "next/navigation";
var _ = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), v = {
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
}, y = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ae = (e, t = v?.locales) => {
	let n = _(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, oe = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, se = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && oe(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ce = (e, t, n) => (n ?? y?.rewrite, e), le = "__intlayerPreloaded", ue = ["en"], b = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? v?.defaultLocale ?? "en",
	mode: e.mode ?? y?.mode ?? "prefix-no-default",
	locales: e.locales ?? v?.locales ?? ue,
	rewrite: e.rewrite ?? y?.rewrite,
	domains: e.domains ?? y?.domains
}), x = (e, t) => !!e && (t ?? v.locales).includes(e), de = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = b(t);
	return !e || !x(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, fe = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), pe = (e, t = v?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = b(n), c = ae(e, a), l = new URL(c, "http://e.com"), u = fe(ce(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = de(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, me = (e, t = v?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = b(n), a = _(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${pe(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, he = (e, t = v?.locales, n = v?.defaultLocale) => {
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
}, ge = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, _e = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ge(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ve = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = v;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ve) for (let t = 0; t < (y.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(y.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ye = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !ve && y.storage.cookies) for (let n = 0; n < y.storage.cookies.length; n++) {
		let { name: r, attributes: i } = y.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ge(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, _e(r, e, i));
			} catch {}
		}
	}
}, be = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = b(t);
	if (!n || !r) return n;
	let a = _(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return x(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (x(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, xe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = b(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = se(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = be(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, w, T, E = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (T === void 0 || w !== e) && (w = e, T = xe()), T;
}, D = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-wrapper-1faojf-en-Cq3hFgJX.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, Se = E(), Ce = D[Se];
typeof window < "u" && typeof Ce == "function" && Ce().then((e) => {
	D.__intlayerPreloaded = {
		locale: Se,
		dictionary: e
	};
}, () => void 0);
var we = (e) => {
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
}, O = /* @__PURE__ */ new Map(), Te = (e, t) => (O.has(e) || O.set(e, we(t)), O.get(e).read()), Ee = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : f(d, { children: e });
	return new Proxy(i, { get(e, r, i) {
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
}, De = /* @__PURE__ */ new WeakMap(), Oe = 0, ke = (e) => {
	if (!e) return "base";
	let t = De.get(e);
	if (t) return t;
	Oe += 1;
	let n = `p${Oe}`;
	return De.set(e, n), n;
}, Ae = 256, k = /* @__PURE__ */ new WeakMap(), je = (e) => typeof e == "object" && !!e, Me = (e, t, n) => `${e}_${t}_${ke(n)}`, Ne = (e, t) => {
	if (!je(e)) return { hit: !1 };
	let n = k.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, A = (e, t, n) => {
	if (!je(e)) return n;
	let r = k.get(e);
	return r || (r = /* @__PURE__ */ new Map(), k.set(e, r)), r.size >= Ae && r.clear(), r.set(t, n), n;
}, Pe = "translation", j = "insertion", Fe = "object", Ie = "array", Le = "markdown", M = "html", N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => N(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, {
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
			n[r] = N(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = N(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, P = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), F = "default", Re = /[^A-Za-z0-9._&=-]/g, I = /[^A-Za-z0-9._-]/g, ze = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, L = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ze);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, R = (e) => e === void 0 ? F : typeof e == "string" ? L(e, Re) : Object.keys(e).sort().map((t) => `${L(t, I)}=${L(String(e[t]), I)}`).join("&"), z = (e) => Array.isArray(e) ? e.length === 0 ? [F] : e.map(R) : [R(e)], Be = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? F : e[0] ?? "default";
}, Ve = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, He = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ue = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, We = (e, t) => {
	if (!He(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? F : Be(z(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ve(e, n, t, s)).map((t) => Ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ge = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ke = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? z(n).join(",") : String(n)}`;
}).join("|") : "", B = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, V = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (B(e) && B(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : V(e[r], t[r]));
		return n;
	}
	return e;
}, qe = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => V(e, t));
}, H = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Je = (e) => {
	if (typeof e == "string") return e;
	if (H(e)) return e.nodeType === "html" ? e[M] : e[Le];
}, Ye = (e, t) => {
	if (typeof e == "string") return t;
	if (H(e)) {
		let n = e.nodeType === "html" ? M : Le;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, U = (e, t, n, r, i) => {
	let a = Ye(e, P(Je(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, W = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, G = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? W : {
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
		return qe(o, e, t);
	}
}, Xe = W, Ze = (e) => W, Qe = W, $e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: j }], i = e[j], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => U(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = P(i, e);
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
}, et = W, tt = W, nt = (e) => W, rt = W, it = (e, t = !0) => [
	G(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
	Xe,
	Qe,
	$e,
	nt(e ?? v.defaultLocale),
	rt,
	et,
	tt
], at = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), ot = (e, t, n) => {
	let { locale: r, selector: i } = Ge(t), a = Me(r ?? v.defaultLocale, Ke(i), n), o = Ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? it(r), c = We(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return at(e.content, t, s);
	};
	return c === null ? A(e, a, null) : Array.isArray(c) ? A(e, a, c.map(l)) : A(e, a, l(c));
}, st = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[le];
	if (n && n.locale === t) return n.dictionary;
}, ct = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", lt = /\{\{\s*(.*?)\s*\}\}/g, ut = (e, t = {}) => {
	if (!Object.values(t).some(ct)) return {
		isSimple: !0,
		parts: e.replace(lt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(lt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, dt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Ee({
		...n,
		value: n.children,
		children: n.children
	})
}, ft = W, pt = (t, r) => {
	let i = ut(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, mt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: j }], i = e[j], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => U(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = pt(i, e);
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
}, ht = W, gt = W, K = /* @__PURE__ */ new Map(), _t = (e, t = !0) => {
	let n = `${e ?? v.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		G(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
		Xe,
		Ze(e ?? v.defaultLocale),
		Qe,
		nt(e ?? v.defaultLocale),
		rt,
		et,
		tt,
		dt,
		ft,
		mt,
		ht,
		gt
	];
	return K.set(n, r), r;
}, vt = (e, t) => ot(e, t, _t(typeof t == "object" && t ? t.locale : t)), yt = C(S), bt = (e, t) => ye(e, {
	...S,
	isCookieEnabled: t
}), xt = () => {
	let { locale: e } = a(q) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, St = ({ children: e }) => (xt(), e), Ct = () => {
	let { locale: e } = a(q) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, wt = ({ children: e }) => (Ct(), e), Tt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, q = t({
	locale: yt ?? v?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Et = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = v ?? {}, [d, p] = u(e ?? yt ?? t ?? l);
	o(() => {
		e && e !== d && p(e);
	}, [e]), o(() => {
		Tt();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), bt(e, s);
		}
	}), h = he(d);
	return f(q.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Dt = ({ children: e, ...t }) => p(Et, {
	...t,
	children: [
		f(St, {}),
		f(wt, {}),
		e
	]
}), J = (e, t, n) => {
	let { locale: r, variant: i } = a(q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? v.defaultLocale, l = st(e, c);
	if (l) return vt(l, c);
	let u = e;
	return vt(Te(`${String(t)}.${c}`, u[c]?.()), c);
}, { defaultLocale: Ot, locales: Y } = v ?? {}, kt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(q) ?? {};
	return {
		locale: n,
		defaultLocale: Ot,
		availableLocales: Y,
		setLocale: i((n) => {
			if (!Y?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), bt(n, e ?? o ?? !0), t?.(n);
		}, [
			Y,
			t,
			r,
			e
		])
	};
}, At = (e) => f(Dt, { ...e }), jt = () => {
	let e = m(), [t, n] = u("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => ae(r), [r]);
}, Mt = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = h(), o = jt();
	return {
		...kt({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = me(o, n, { currentDomain: void 0 });
				if (typeof e == "function") {
					e({
						locale: n,
						path: i
					});
					return;
				}
				e === "replace" && r(i), e === "push" && a(i), t?.(n);
			}, [
				r,
				a,
				o,
				e,
				t
			]),
			isCookieEnabled: n
		}),
		pathWithoutLocale: o
	};
}, Nt = v.locales;
v.requiredLocales, v.defaultLocale;
var Pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/Link.tsx", Ft = (e) => /^https?:\/\//.test(e ?? ""), X = ({ href: e, children: t, ...n }) => {
	let { locale: r } = Mt(), i = Ft(e.toString()), a = e && !i ? me(e.toString(), r) : e;
	return g(ee, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: Pt,
		lineNumber: 26,
		columnNumber: 5
	}, void 0);
}, Z = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-wrapper-1faojf-en-Cq3hFgJX.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, It = E(), Lt = Z[It];
typeof window < "u" && typeof Lt == "function" && Lt().then((e) => {
	Z.__intlayerPreloaded = {
		locale: It,
		dictionary: e
	};
}, () => void 0);
var Rt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/ThemeToggle.tsx";
function zt() {
	let e = J(Z, "theme-toggle");
	return g("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: e.a.value
	}, void 0, !1, {
		fileName: Rt,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/LocaleSwitcher.tsx";
function Bt(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Vt() {
	let e = ne().locale ?? "en", t = re(), n = ie(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return g("div", {
		className: "flex items-center gap-2",
		children: g("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Nt.map((e) => g("option", {
				value: e,
				children: Bt(e)
			}, e, !1, {
				fileName: Q,
				lineNumber: 35,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/Header.tsx";
function Ht() {
	let e = J(D, "header"), t = [
		{
			href: "/products",
			label: e.l
		},
		{
			href: "/pricing",
			label: e.k
		},
		{
			href: "/team",
			label: e.n
		},
		{
			href: "/blog",
			label: e.a
		},
		{
			href: "/careers",
			label: e.b
		},
		{
			href: "/faq",
			label: e.d
		},
		{
			href: "/contact",
			label: e.c
		},
		{
			href: "/settings",
			label: e.m
		}
	];
	return g("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: g("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [g("div", {
				className: "flex items-center gap-8",
				children: [g(X, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.h
				}, void 0, !1, {
					fileName: $,
					lineNumber: 25,
					columnNumber: 11
				}, this), g("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						g(X, {
							href: "/",
							className: "nav-link",
							children: e.g
						}, void 0, !1, {
							fileName: $,
							lineNumber: 33,
							columnNumber: 13
						}, this),
						g(X, {
							href: "/about",
							className: "nav-link",
							children: e.i
						}, void 0, !1, {
							fileName: $,
							lineNumber: 36,
							columnNumber: 13
						}, this),
						g("div", {
							className: "relative group",
							children: [g("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								children: [e.j, g(te, {
									size: 14,
									className: "transition-transform group-hover:rotate-180"
								}, void 0, !1, {
									fileName: $,
									lineNumber: 47,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: $,
								lineNumber: 42,
								columnNumber: 15
							}, this), g("div", {
								className: "absolute left-0 top-full pt-2 w-48 hidden group-hover:block",
								children: g("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: t.map((e) => g(X, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										children: e.label
									}, e.href, !1, {
										fileName: $,
										lineNumber: 56,
										columnNumber: 21
									}, this))
								}, void 0, !1, {
									fileName: $,
									lineNumber: 54,
									columnNumber: 17
								}, this)
							}, void 0, !1, {
								fileName: $,
								lineNumber: 53,
								columnNumber: 15
							}, this)]
						}, void 0, !0, {
							fileName: $,
							lineNumber: 41,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 32,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 24,
				columnNumber: 9
			}, this), g("div", {
				className: "flex items-center gap-4",
				children: [
					g("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [g("span", {
							className: "sr-only",
							children: e.e
						}, void 0, !1, {
							fileName: $,
							lineNumber: 77,
							columnNumber: 13
						}, this), g("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: g("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 79,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: $,
							lineNumber: 78,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 71,
						columnNumber: 11
					}, this),
					g(Vt, {}, void 0, !1, {
						fileName: $,
						lineNumber: 85,
						columnNumber: 11
					}, this),
					g(zt, {}, void 0, !1, {
						fileName: $,
						lineNumber: 86,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 70,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 23,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function Ut() {
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
function Wt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Gt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/AppProviders.tsx";
function Kt({ children: e, locale: t }) {
	let [n] = u(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		Wt("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		Ut();
	}, []), g(At, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: Gt,
		lineNumber: 34,
		columnNumber: 7
	}, this);
}
var qt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/scripts/Wrapper.tsx";
function Jt({ children: e }) {
	return g(Kt, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: qt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var Yt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/Header.wrapper.tsx";
function Xt() {
	return g(Jt, { children: g(Ht, {}, void 0, !1, {
		fileName: Yt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Yt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Xt as default };
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
	g: "Home",
	i: "Methodology",
	j: "Mock Pages",
	l: "Products",
	k: "Pricing",
	n: "Team",
	a: "Blog",
	b: "Careers",
	d: "FAQ",
	c: "Contact",
	m: "Settings",
	e: "Go to GitHub",
	h: "i18n Bench"
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "theme-toggle", c = { a: "Theme: Auto" }, l = {
	key: s,
	content: c
};
export { n, o as t };
