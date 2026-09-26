import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
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
	mode: "prefix-no-default",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, g = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && h(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, _ = ["en"], v = "__intlayerPreloaded", y = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? _,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), b = (e, t) => !!e && (t ?? p.locales).includes(e), ee = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, x = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, S = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = x(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, te = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var C = {
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
}, w = (e = C) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!te) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, T = !1, E, ne = () => typeof window > "u" ? w(C) : (T ||= (E = w(C), !0), E), re = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (T = !1, !te && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: x(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, S(r, e, i));
			} catch {}
		}
	}
}, ie = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = y(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return b(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (b(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ae = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = y(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = g(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ie(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return w() ?? t;
}, oe, D, O = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (D === void 0 || oe !== e) && (oe = e, D = ae()), D;
}, k = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-TeamHeader-wrapper-1rqmy5-en-Q6Z5YGLj.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/zh.json").then((e) => e.default)
}, A = O(), j = k[A];
typeof window < "u" && typeof j == "function" && j().then((e) => {
	k.__intlayerPreloaded = {
		locale: A,
		dictionary: e
	};
}, () => void 0);
var se = (e) => {
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
}, M = /* @__PURE__ */ new Map(), ce = (e, t) => (M.has(e) || M.set(e, se(t)), M.get(e).read()), le = /* @__PURE__ */ new Map(), ue = (e, t) => Object.create(new Proxy(e, {
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
}), de = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = le.get(t);
	i || (i = /* @__PURE__ */ new Map(), le.set(t, i));
	let a = i.get(r);
	return a || (a = ue(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, fe = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, de(t)), pe = /* @__PURE__ */ new WeakMap(), N = 0, me = (e) => {
	if (!e) return "base";
	let t = pe.get(e);
	if (t) return t;
	N += 1;
	let n = `p${N}`;
	return pe.set(e, n), n;
}, he = 256, P = /* @__PURE__ */ new WeakMap(), F = (e) => typeof e == "object" && !!e, ge = (e, t, n) => `${e}_${t}_${me(n)}`, _e = (e, t) => {
	if (!F(e)) return { hit: !1 };
	let n = P.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!F(e)) return n;
	let r = P.get(e);
	return r || (r = /* @__PURE__ */ new Map(), P.set(e, r)), r.size >= he && r.clear(), r.set(t, n), n;
}, ve = "translation", ye = "enumeration", be = "plural", xe = "condition", L = "insertion", Se = "object", Ce = "array", R = "markdown", z = "html", we = "gender", Te = "select", B = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), V = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, V);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => V(e, B(t, e, {
		type: Ce,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Se,
			key: r
		};
		if (t.eager) {
			n[r] = V(e[r], B(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = V(e[r], B(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, H = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, W = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !U(e) || !U(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? W(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ee = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => W(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, De = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[z] : e[R];
}, Oe = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? z : R;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, K = (e, t, n, r, i) => {
	let a = Oe(e, H(De(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ke = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, J = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ee(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ve,
				key: e
			}]
		});
	}
}, Ae = q, Y = (e) => q, X = q, je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: L }], i = e[L], a = {
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
					let a = H(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Pe(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Me = [
	ye,
	xe,
	be,
	we,
	Te
], Ne = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Me.includes(i)) return t;
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
		return !r && ke(i) ? i(n) : i;
	};
}, Pe = (e, t) => typeof t == "function" && Me.includes(e?.nodeType ?? "") ? (n) => Ne(e, t, n) : t, Fe = q, Ie = q, Le = (e) => q, Re = q, ze = (e, t = !0) => [
	J(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	Ae,
	Y(e ?? p.defaultLocale),
	X,
	je,
	Le(e ?? p.defaultLocale),
	Re,
	Fe,
	Ie
].filter((e) => e !== q), Be = (e, t, n = []) => V(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), Ve = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ge(r ?? p.defaultLocale, "", n), o = _e(e, a);
	if (o.hit) return o.content;
	let s = n ?? ze(r), c = e, l = (e) => {
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
			return Be(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? I(e, a, null) : Array.isArray(c) ? I(e, a, c.map(l)) : I(e, a, l(c));
}, He = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[v];
	if (n && n.locale === t) return n.dictionary;
}, Ue = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", We = /\{\{\s*(.*?)\s*\}\}/g, Ge = (e, t = {}) => {
	if (!Object.values(t).some(Ue)) return {
		isSimple: !0,
		parts: e.replace(We, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(We), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ke = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => fe({
		value: t.children,
		children: t.children
	})
}, qe = q, Je = (t, r) => {
	let i = Ge(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ye = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: L }], i = e[L], a = {
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
					let a = Je(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Pe(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Xe = q, Ze = q, Q = /* @__PURE__ */ new Map(), Qe = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Ke,
		J(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		Ae,
		Y(e ?? p.defaultLocale),
		X,
		Le(e ?? p.defaultLocale),
		Re,
		Fe,
		Ie,
		qe,
		Ye,
		Xe,
		Ze
	].filter((e) => e !== q);
	return Q.set(n, r), r;
}, $e = (e, t) => Ve(e, t, Qe(typeof t == "object" && t ? t.locale : t)), et = ne, tt = (e, t) => re(e, {
	...C,
	isCookieEnabled: t
}), nt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, rt = t({
	get locale() {
		return et() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), it = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: m } = p ?? {}, [h, g] = c(() => e ?? et() ?? t ?? m), [_, v] = c(e);
	e !== _ && (v(e), e && e !== h && g(e)), o(() => {
		nt();
	}, []);
	let y = i((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), tt(e, d);
		}
	}, [
		h,
		f,
		d
	]), b = a ?? y, x = ee(h), S = s(() => ({
		locale: x,
		setLocale: b,
		variant: n,
		disableEditor: l
	}), [
		x,
		b,
		n,
		l
	]);
	return u(rt.Provider, {
		value: S,
		children: r
	});
}, at = ({ children: e, ...t }) => d(it, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), ot = (e, t, n) => {
	let { locale: r, variant: i } = a(rt) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? p.defaultLocale, l = He(e, c);
	if (l) return $e(l, c);
	let u = e;
	return $e(ce(`${String(t)}.${c}`, u[c]?.()), c);
}, $ = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/de.json").then((e) => e.default),
	en: () => import("./intlayer-TeamHeader-wrapper-1rqmy5-en-Q6Z5YGLj.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/zh.json").then((e) => e.default)
}, st = O(), ct = $[st];
typeof window < "u" && typeof ct == "function" && ct().then((e) => {
	$.__intlayerPreloaded = {
		locale: st,
		dictionary: e
	};
}, () => void 0);
var lt = () => {
	let e = ot($, "mock-banner");
	return u("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.a
	});
};
function ut() {
	let e = ot(k, "team-header");
	return d(l, { children: [
		u(lt, {}),
		u("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e.b
		}),
		u("p", {
			className: "mb-10 text-muted-foreground",
			children: e.a
		})
	] });
}
function dt({ children: e }) {
	return u(at, {
		locale: "en",
		children: e
	});
}
function ft() {
	return u(dt, { children: u(ut, {}) });
}
export { ft as default };
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
}), r = "mock-banner", i = { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "team-header", c = {
	b: "Our Team",
	a: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
}, l = {
	key: s,
	content: c
};
export { n, o as t };
