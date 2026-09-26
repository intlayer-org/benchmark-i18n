import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { usePathname as ee, useRouter as te } from "next/navigation.js";
import ne from "next/link";
import { ChevronDown as re } from "lucide-react";
import { useParams as ie, usePathname as ae, useRouter as oe } from "next/navigation";
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, g = (e, t = m?.locales) => {
	let n = p(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, se = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ce = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && se(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, le = (e, t, n) => (n ?? h?.rewrite, e), ue = ["en"], de = "__intlayerPreloaded", _ = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? ue,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), v = (e, t) => !!e && (t ?? m.locales).includes(e), fe = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = _(t);
	return !e || !v(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, pe = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), me = (e, t = m?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = _(n), c = g(e, a), l = new URL(c, "http://e.com"), u = pe(le(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = fe(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, y = (e, t = m?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = _(n), a = p(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${me(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, he = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ge = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = he(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _e = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var b = {
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
}, x = (e = b) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_e) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, S = !1, C, ve = () => typeof window > "u" ? x(b) : (S ||= (C = x(b), !0), C), ye = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (S = !1, !_e && h.storage.cookies)) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: he(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ge(r, e, i));
			} catch {}
		}
	}
}, be = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = _(t);
	if (!n || !r) return n;
	let a = p(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return v(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (v(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, xe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ce(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = be(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return x() ?? t;
}, Se, w, Ce = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (w === void 0 || Se !== e) && (Se = e, w = xe()), w;
}, T = {
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
}, we = Ce(), Te = T[we];
typeof window < "u" && typeof Te == "function" && Te().then((e) => {
	T.__intlayerPreloaded = {
		locale: we,
		dictionary: e
	};
}, () => void 0);
var Ee = (e) => {
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
}, E = /* @__PURE__ */ new Map(), De = (e, t) => (E.has(e) || E.set(e, Ee(t)), E.get(e).read()), D = /* @__PURE__ */ new Map(), Oe = (e, t) => Object.create(new Proxy(e, {
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
}), ke = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = D.get(t);
	i || (i = /* @__PURE__ */ new Map(), D.set(t, i));
	let a = i.get(r);
	return a || (a = Oe(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ae = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, ke(t)), O = /* @__PURE__ */ new WeakMap(), k = 0, je = (e) => {
	if (!e) return "base";
	let t = O.get(e);
	if (t) return t;
	k += 1;
	let n = `p${k}`;
	return O.set(e, n), n;
}, Me = 256, A = /* @__PURE__ */ new WeakMap(), j = (e) => typeof e == "object" && !!e, Ne = (e, t, n) => `${e}_${t}_${je(n)}`, Pe = (e, t) => {
	if (!j(e)) return { hit: !1 };
	let n = A.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, M = (e, t, n) => {
	if (!j(e)) return n;
	let r = A.get(e);
	return r || (r = /* @__PURE__ */ new Map(), A.set(e, r)), r.size >= Me && r.clear(), r.set(t, n), n;
}, Fe = "translation", Ie = "enumeration", Le = "plural", Re = "condition", N = "insertion", ze = "object", Be = "array", P = "markdown", F = "html", Ve = "gender", He = "select", I = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), L = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, L);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => L(e, I(t, e, {
		type: Be,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ze,
			key: r
		};
		if (t.eager) {
			n[r] = L(e[r], I(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = L(e[r], I(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, R = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !z(e) || !z(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? B(a, i) : a;
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => B(e, t));
}, V = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, We = (e) => {
	if (typeof e == "string") return e;
	if (V(e)) return e.nodeType === "html" ? e[F] : e[P];
}, Ge = (e, t) => {
	if (typeof e == "string") return t;
	if (V(e)) {
		let n = e.nodeType === "html" ? F : P;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, H = (e, t, n, r, i) => {
	let a = Ge(e, R(We(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ke = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, W = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? U : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ue(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Fe,
				key: e
			}]
		});
	}
}, G = U, qe = (e) => U, K = U, Je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: N }], i = e[N], a = {
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
					let a = R(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Xe(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, q = [
	Ie,
	Re,
	Le,
	Ve,
	He
], Ye = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !q.includes(i)) return t;
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
}, Xe = (e, t) => typeof t == "function" && q.includes(e?.nodeType ?? "") ? (n) => Ye(e, t, n) : t, Ze = U, Qe = U, $e = (e) => U, et = U, tt = (e, t = !0) => [
	W(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	G,
	qe(e ?? m.defaultLocale),
	K,
	Je,
	$e(e ?? m.defaultLocale),
	et,
	Ze,
	Qe
].filter((e) => e !== U), nt = (e, t, n = []) => L(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), rt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ne(r ?? m.defaultLocale, "", n), o = Pe(e, a);
	if (o.hit) return o.content;
	let s = n ?? tt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !J.has(e)
		};
		J.add(e);
		try {
			return nt(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return c === null ? M(e, a, null) : Array.isArray(c) ? M(e, a, c.map(l)) : M(e, a, l(c));
}, it = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[de];
	if (n && n.locale === t) return n.dictionary;
}, at = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Y = /\{\{\s*(.*?)\s*\}\}/g, ot = (e, t = {}) => {
	if (!Object.values(t).some(at)) return {
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
}, st = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ae({
		value: t.children,
		children: t.children
	})
}, ct = U, lt = (t, r) => {
	let i = ot(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: N }], i = e[N], a = {
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
					let a = lt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Xe(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, dt = U, ft = U, X = /* @__PURE__ */ new Map(), pt = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		st,
		W(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		G,
		qe(e ?? m.defaultLocale),
		K,
		$e(e ?? m.defaultLocale),
		et,
		Ze,
		Qe,
		ct,
		ut,
		dt,
		ft
	].filter((e) => e !== U);
	return X.set(n, r), r;
}, mt = (e, t) => rt(e, t, pt(typeof t == "object" && t ? t.locale : t)), ht = ve, gt = (e, t) => ye(e, {
	...b,
	isCookieEnabled: t
}), _t = t({
	get locale() {
		return ht() ?? m?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), vt = (e, t, n) => {
	let { locale: r, variant: i } = a(_t) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? m.defaultLocale, l = it(e, c);
	if (l) return mt(l, c);
	let u = e;
	return mt(De(`${String(t)}.${c}`, u[c]?.()), c);
}, { defaultLocale: yt, locales: Z } = m ?? {}, bt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(_t) ?? {};
	return {
		locale: n,
		defaultLocale: yt,
		availableLocales: Z,
		setLocale: i((n) => {
			if (!Z?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), gt(n, e ?? o ?? !0), t?.(n);
		}, [
			Z,
			t,
			r,
			e
		])
	};
}, xt = () => {
	let e = ee(), [t, n] = l("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => g(r), [r]);
}, St = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = te(), o = xt();
	return {
		...bt({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = y(o, n, { currentDomain: void 0 });
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
}, Ct = m.locales;
m.requiredLocales, m.defaultLocale;
var wt = (e) => /^https?:\/\//.test(e ?? ""), Q = ({ href: e, children: t, ...n }) => {
	let { locale: r } = St(), i = wt(e.toString()), a = e && !i ? y(e.toString(), r) : e;
	return d(ne, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	});
}, $ = {
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
}, Tt = Ce(), Et = $[Tt];
typeof window < "u" && typeof Et == "function" && Et().then((e) => {
	$.__intlayerPreloaded = {
		locale: Tt,
		dictionary: e
	};
}, () => void 0);
function Dt() {
	let e = vt($, "theme-toggle");
	return d("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: e.a.value
	});
}
function Ot(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function kt() {
	let e = ie().locale ?? "en", t = ae(), n = oe(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return d("div", {
		className: "flex items-center gap-2",
		children: d("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Ct.map((e) => d("option", {
				value: e,
				children: Ot(e)
			}, e))
		})
	});
}
function At() {
	let e = vt(T, "header"), t = [
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
	return d("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: f("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [f("div", {
				className: "flex items-center gap-8",
				children: [d(Q, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.h
				}), f("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						d(Q, {
							href: "/",
							className: "nav-link",
							children: e.g
						}),
						d(Q, {
							href: "/about",
							className: "nav-link",
							children: e.i
						}),
						f("div", {
							className: "relative group",
							children: [f("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								children: [e.j, d(re, {
									size: 14,
									className: "transition-transform group-hover:rotate-180"
								})]
							}), d("div", {
								className: "absolute left-0 top-full pt-2 w-48 hidden group-hover:block",
								children: d("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: t.map((e) => d(Q, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), f("div", {
				className: "flex items-center gap-4",
				children: [
					f("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [d("span", {
							className: "sr-only",
							children: e.e
						}), d("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: d("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					d(kt, {}),
					d(Dt, {})
				]
			})]
		})
	});
}
function jt() {
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
function Mt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Nt({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		Mt("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		jt();
	}, []), e;
}
function Pt({ children: e }) {
	return d(Nt, {
		locale: "en",
		children: e
	});
}
function Ft() {
	return d(Pt, { children: d(At, {}) });
}
export { Ft as default };
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
