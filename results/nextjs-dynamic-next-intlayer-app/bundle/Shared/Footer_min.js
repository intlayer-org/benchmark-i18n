import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { usePathname as m, useRouter as h } from "next/navigation.js";
import ee from "next/link";
import { jsxDEV as g } from "react/jsx-dev-runtime";
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
}, b = (e, t = v?.locales) => {
	let n = _(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
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
}, re = (e, t, n) => (n ?? y?.rewrite, e), ie = "__intlayerPreloaded", ae = ["en"], x = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? v?.defaultLocale ?? "en",
	mode: e.mode ?? y?.mode ?? "prefix-no-default",
	locales: e.locales ?? v?.locales ?? ae,
	rewrite: e.rewrite ?? y?.rewrite,
	domains: e.domains ?? y?.domains
}), S = (e, t) => !!e && (t ?? v.locales).includes(e), oe = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = x(t);
	return !e || !S(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, se = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), ce = (e, t = v?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = x(n), c = b(e, a), l = new URL(c, "http://e.com"), u = se(re(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = oe(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, le = (e, t = v?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = x(n), a = _(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${ce(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, ue = (e, t = v?.locales, n = v?.defaultLocale) => {
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
}, de = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, fe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = de(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, C = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var w = {
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
}, T = (e = w) => {
	let { locales: t } = v;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!C) for (let t = 0; t < (y.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(y.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, pe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !C && y.storage.cookies) for (let n = 0; n < y.storage.cookies.length; n++) {
		let { name: r, attributes: i } = y.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: de(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, fe(r, e, i));
			} catch {}
		}
	}
}, me = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = x(t);
	if (!n || !r) return n;
	let a = _(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return S(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (S(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, he = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = x(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = me(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return T() ?? t;
}, E, D, ge = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (D === void 0 || E !== e) && (E = e, D = he()), D;
}, O = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((e) => e.default),
	en: () => import("./intlayer-Footer-wrapper-xghv9t-en-C5Zk03S3.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((e) => e.default)
}, k = ge(), _e = O[k];
typeof window < "u" && typeof _e == "function" && _e().then((e) => {
	O.__intlayerPreloaded = {
		locale: k,
		dictionary: e
	};
}, () => void 0);
var ve = (e) => {
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
}, A = /* @__PURE__ */ new Map(), ye = (e, t) => (A.has(e) || A.set(e, ve(t)), A.get(e).read()), be = ({ children: e, value: t, additionalProps: n }) => {
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
}, xe = /* @__PURE__ */ new WeakMap(), Se = 0, Ce = (e) => {
	if (!e) return "base";
	let t = xe.get(e);
	if (t) return t;
	Se += 1;
	let n = `p${Se}`;
	return xe.set(e, n), n;
}, we = 256, j = /* @__PURE__ */ new WeakMap(), Te = (e) => typeof e == "object" && !!e, Ee = (e, t, n) => `${e}_${t}_${Ce(n)}`, De = (e, t) => {
	if (!Te(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, M = (e, t, n) => {
	if (!Te(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= we && r.clear(), r.set(t, n), n;
}, Oe = "translation", N = "insertion", ke = "object", Ae = "array", P = "markdown", F = "html", I = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => I(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => I(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Ae,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ke,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = I(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = I(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, L = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), R = "default", je = /[^A-Za-z0-9._&=-]/g, z = /[^A-Za-z0-9._-]/g, Me = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, B = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Me);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, V = (e) => e === void 0 ? R : typeof e == "string" ? B(e, je) : Object.keys(e).sort().map((t) => `${B(t, z)}=${B(String(e[t]), z)}`).join("&"), H = (e) => Array.isArray(e) ? e.length === 0 ? [R] : e.map(V) : [V(e)], Ne = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? R : e[0] ?? "default";
}, Pe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Fe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ie = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Le = (e, t) => {
	if (!Fe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? R : Ne(H(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Pe(e, n, t, s)).map((t) => Ie(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Re = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ze = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? H(n).join(",") : String(n)}`;
}).join("|") : "", U = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, W = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (U(e) && U(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : W(e[r], t[r]));
		return n;
	}
	return e;
}, Be = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => W(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ve = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[F] : e[P];
}, He = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? F : P;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, K = (e, t, n, r, i) => {
	let a = He(e, L(Ve(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ue = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Oe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Be(o, e, t);
	}
}, J = q, We = (e) => q, Ge = q, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: N }], i = e[N], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => K(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = L(i, e);
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
}, qe = q, Je = q, Ye = (e) => q, Xe = q, Ze = (e, t = !0) => [
	Ue(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
	J,
	Ge,
	Ke,
	Ye(e ?? v.defaultLocale),
	Xe,
	qe,
	Je
], Qe = (e, t, n = []) => I(e, {
	...t,
	plugins: n
}), $e = (e, t, n) => {
	let { locale: r, selector: i } = Re(t), a = Ee(r ?? v.defaultLocale, ze(i), n), o = De(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ze(r), c = Le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Qe(e.content, t, s);
	};
	return c === null ? M(e, a, null) : Array.isArray(c) ? M(e, a, c.map(l)) : M(e, a, l(c));
}, et = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, tt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Y = /\{\{\s*(.*?)\s*\}\}/g, nt = (e, t = {}) => {
	if (!Object.values(t).some(tt)) return {
		isSimple: !0,
		parts: e.replace(Y, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Y), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, rt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => be({
		...n,
		value: n.children,
		children: n.children
	})
}, it = q, at = (t, r) => {
	let i = nt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, ot = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: N }], i = e[N], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => K(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = at(i, e);
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
}, st = q, ct = q, X = /* @__PURE__ */ new Map(), lt = (e, t = !0) => {
	let n = `${e ?? v.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Ue(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
		J,
		We(e ?? v.defaultLocale),
		Ge,
		Ye(e ?? v.defaultLocale),
		Xe,
		qe,
		Je,
		rt,
		it,
		ot,
		st,
		ct
	];
	return X.set(n, r), r;
}, ut = (e, t) => $e(e, t, lt(typeof t == "object" && t ? t.locale : t)), dt = T(w), ft = (e, t) => pe(e, {
	...w,
	isCookieEnabled: t
}), pt = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, mt = ({ children: e }) => (pt(), e), ht = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, gt = ({ children: e }) => (ht(), e), _t = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: dt ?? v?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), vt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = v ?? {}, [d, p] = u(e ?? dt ?? t ?? l);
	o(() => {
		e && e !== d && p(e);
	}, [e]), o(() => {
		_t();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), ft(e, s);
		}
	}), h = ue(d);
	return f(Z.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, yt = ({ children: e, ...t }) => p(vt, {
	...t,
	children: [
		f(mt, {}),
		f(gt, {}),
		e
	]
}), bt = (e, t, n) => {
	let { locale: r, variant: i } = a(Z) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? v.defaultLocale, l = et(e, c);
	if (l) return ut(l, c);
	let u = e;
	return ut(ye(`${String(t)}.${c}`, u[c]?.()), c);
}, { defaultLocale: xt, locales: Q } = v ?? {}, St = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: xt,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), ft(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, Ct = (e) => f(yt, { ...e }), wt = () => {
	let e = m(), [t, n] = u("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => b(r), [r]);
}, Tt = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = h(), o = wt();
	return {
		...St({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = le(o, n, { currentDomain: void 0 });
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
}, Et = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/Link.tsx", Dt = (e) => /^https?:\/\//.test(e ?? ""), Ot = ({ href: e, children: t, ...n }) => {
	let { locale: r } = Tt(), i = Dt(e.toString()), a = e && !i ? le(e.toString(), r) : e;
	return g(ee, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: Et,
		lineNumber: 26,
		columnNumber: 5
	}, void 0);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/Footer.tsx";
function kt() {
	let e = bt(O, "footer"), t = [
		{
			label: e.f,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e.h,
			href: "/about",
			isInternal: !0
		},
		{
			label: e.e,
			href: "/contact",
			isInternal: !0
		}
	];
	return g("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: g("div", {
			className: "container py-8",
			children: [g("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					g("div", { children: [g("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}, void 0, !1, {
						fileName: $,
						lineNumber: 30,
						columnNumber: 13
					}, this), g("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					}, void 0, !1, {
						fileName: $,
						lineNumber: 33,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					g("div", { children: [g("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}, void 0, !1, {
						fileName: $,
						lineNumber: 38,
						columnNumber: 13
					}, this), g("ul", {
						className: "space-y-1",
						children: t.map((e) => g("li", { children: e.isInternal ? g(Ot, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 45,
							columnNumber: 21
						}, this) : g("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 52,
							columnNumber: 21
						}, this) }, e.label.value, !1, {
							fileName: $,
							lineNumber: 43,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: $,
						lineNumber: 41,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 37,
						columnNumber: 11
					}, this),
					g("div", { children: [g("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}, void 0, !1, {
						fileName: $,
						lineNumber: 66,
						columnNumber: 13
					}, this), g("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					}, void 0, !1, {
						fileName: $,
						lineNumber: 69,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 65,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 28,
				columnNumber: 9
			}, this), g("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			}, void 0, !1, {
				fileName: $,
				lineNumber: 74,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 27,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 26,
		columnNumber: 5
	}, this);
}
function At() {
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
function jt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Mt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/AppProviders.tsx";
function Nt({ children: e, locale: t }) {
	let [n] = u(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		jt("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		At();
	}, []), g(Ct, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: Mt,
		lineNumber: 34,
		columnNumber: 7
	}, this);
}
var Pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/scripts/Wrapper.tsx";
function Ft({ children: e }) {
	return g(Nt, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: Pt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var It = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/Footer.wrapper.tsx";
function Lt() {
	return g(Ft, { children: g(kt, {}, void 0, !1, {
		fileName: It,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: It,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Lt as default };
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
	i: "Resources",
	c: "Contact",
	f: "GitHub",
	h: "Methodology",
	e: "Contributing",
	b: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	a: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	d: "contact@intlayer.org",
	g: "i18n Benchmark"
}, i = {
	key: n,
	content: r
};
export { t };
