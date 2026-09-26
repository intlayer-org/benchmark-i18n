import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { usePathname as ee, useRouter as te } from "next/navigation.js";
import ne from "next/link";
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
}, re = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ie = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && re(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ae = (e, t, n) => (n ?? h?.rewrite, e), oe = ["en"], se = "__intlayerPreloaded", _ = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? oe,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), v = (e, t) => !!e && (t ?? m.locales).includes(e), ce = (e, t = {}) => {
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
}, le = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), ue = (e, t = m?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = _(n), c = g(e, a), l = new URL(c, "http://e.com"), u = le(ae(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = ce(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, y = (e, t = m?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = _(n), a = p(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${ue(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
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
}, pe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	if (!pe) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, S = !1, C, me = () => typeof window > "u" ? x(b) : (S ||= (C = x(b), !0), C), he = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (S = !1, !pe && h.storage.cookies)) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
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
}, ge = (e = "/", t) => {
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
}, _e = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ie(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ge(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return x() ?? t;
}, w, T, ve = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (T === void 0 || w !== e) && (w = e, T = _e()), T;
}, E = {
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
}, D = ve(), O = E[D];
typeof window < "u" && typeof O == "function" && O().then((e) => {
	E.__intlayerPreloaded = {
		locale: D,
		dictionary: e
	};
}, () => void 0);
var ye = (e) => {
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
}, k = /* @__PURE__ */ new Map(), be = (e, t) => (k.has(e) || k.set(e, ye(t)), k.get(e).read()), A = /* @__PURE__ */ new Map(), xe = (e, t) => Object.create(new Proxy(e, {
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
}), Se = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = A.get(t);
	i || (i = /* @__PURE__ */ new Map(), A.set(t, i));
	let a = i.get(r);
	return a || (a = xe(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ce = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, Se(t)), j = /* @__PURE__ */ new WeakMap(), M = 0, we = (e) => {
	if (!e) return "base";
	let t = j.get(e);
	if (t) return t;
	M += 1;
	let n = `p${M}`;
	return j.set(e, n), n;
}, Te = 256, N = /* @__PURE__ */ new WeakMap(), P = (e) => typeof e == "object" && !!e, Ee = (e, t, n) => `${e}_${t}_${we(n)}`, De = (e, t) => {
	if (!P(e)) return { hit: !1 };
	let n = N.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!P(e)) return n;
	let r = N.get(e);
	return r || (r = /* @__PURE__ */ new Map(), N.set(e, r)), r.size >= Te && r.clear(), r.set(t, n), n;
}, Oe = "translation", ke = "enumeration", Ae = "plural", je = "condition", I = "insertion", Me = "object", Ne = "array", L = "markdown", R = "html", Pe = "gender", Fe = "select", z = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), B = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, B);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => B(e, z(t, e, {
		type: Ne,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Me,
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
}, V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, U = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !H(e) || !H(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? U(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ie = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => U(e, t));
}, W = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Le = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[R] : e[L];
}, Re = (e, t) => {
	if (typeof e == "string") return t;
	if (W(e)) {
		let n = e.nodeType === "html" ? R : L;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, G = (e, t, n, r, i) => {
	let a = Re(e, V(Le(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ze = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, q = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ie(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Oe,
				key: e
			}]
		});
	}
}, J = K, Y = (e) => K, X = K, Be = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: I }], i = e[I], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => G(e, i, n, t.plugins, r);
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
		return Ue(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ve = [
	ke,
	je,
	Ae,
	Pe,
	Fe
], He = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Ve.includes(i)) return t;
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
		return !r && ze(i) ? i(n) : i;
	};
}, Ue = (e, t) => typeof t == "function" && Ve.includes(e?.nodeType ?? "") ? (n) => He(e, t, n) : t, We = K, Ge = K, Ke = (e) => K, qe = K, Je = (e, t = !0) => [
	q(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	J,
	Y(e ?? m.defaultLocale),
	X,
	Be,
	Ke(e ?? m.defaultLocale),
	qe,
	We,
	Ge
].filter((e) => e !== K), Ye = (e, t, n = []) => B(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), Xe = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ee(r ?? m.defaultLocale, "", n), o = De(e, a);
	if (o.hit) return o.content;
	let s = n ?? Je(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return Ye(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? F(e, a, null) : Array.isArray(c) ? F(e, a, c.map(l)) : F(e, a, l(c));
}, Ze = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[se];
	if (n && n.locale === t) return n.dictionary;
}, Qe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", $e = /\{\{\s*(.*?)\s*\}\}/g, et = (e, t = {}) => {
	if (!Object.values(t).some(Qe)) return {
		isSimple: !0,
		parts: e.replace($e, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split($e), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, tt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ce({
		value: t.children,
		children: t.children
	})
}, nt = K, rt = (t, r) => {
	let i = et(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, it = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: I }], i = e[I], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => G(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = rt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ue(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, at = K, ot = K, Q = /* @__PURE__ */ new Map(), st = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		tt,
		q(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		J,
		Y(e ?? m.defaultLocale),
		X,
		Ke(e ?? m.defaultLocale),
		qe,
		We,
		Ge,
		nt,
		it,
		at,
		ot
	].filter((e) => e !== K);
	return Q.set(n, r), r;
}, ct = (e, t) => Xe(e, t, st(typeof t == "object" && t ? t.locale : t)), lt = me, ut = (e, t) => he(e, {
	...b,
	isCookieEnabled: t
}), dt = t({
	get locale() {
		return lt() ?? m?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), ft = (e, t, n) => {
	let { locale: r, variant: i } = a(dt) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? m.defaultLocale, l = Ze(e, c);
	if (l) return ct(l, c);
	let u = e;
	return ct(be(`${String(t)}.${c}`, u[c]?.()), c);
}, { defaultLocale: pt, locales: $ } = m ?? {}, mt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(dt) ?? {};
	return {
		locale: n,
		defaultLocale: pt,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), ut(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, ht = () => {
	let e = ee(), [t, n] = l("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => g(r), [r]);
}, gt = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = te(), o = ht();
	return {
		...mt({
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
}, _t = (e) => /^https?:\/\//.test(e ?? ""), vt = ({ href: e, children: t, ...n }) => {
	let { locale: r } = gt(), i = _t(e.toString()), a = e && !i ? y(e.toString(), r) : e;
	return d(ne, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	});
};
function yt() {
	let e = ft(E, "footer"), t = [
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
	return d("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: f("div", {
			className: "container py-8",
			children: [f("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}), d("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					})] }),
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}), d("ul", {
						className: "space-y-1",
						children: t.map((e) => d("li", { children: e.isInternal ? d(vt, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : d("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label.value))
					})] }),
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}), d("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					})] })
				]
			}), d("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			})]
		})
	});
}
function bt() {
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
function xt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function St({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		xt("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		bt();
	}, []), e;
}
function Ct({ children: e }) {
	return d(St, {
		locale: "en",
		children: e
	});
}
function wt() {
	return d(Ct, { children: d(yt, {}) });
}
export { wt as default };
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
