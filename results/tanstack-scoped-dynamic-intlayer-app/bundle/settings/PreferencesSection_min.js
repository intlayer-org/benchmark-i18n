import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useId as s, useMemo as c, useState as l } from "react";
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
}, g = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, _ = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && g(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, v = ["en"], y = "__intlayerPreloaded", b = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? v,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), x = (e, t) => !!e && (t ?? m.locales).includes(e), ee = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, S = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, te = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = S(n.expires);
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
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!C) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, E = !1, D, ne = () => typeof window > "u" ? T(w) : (E ||= (D = T(w), !0), D), re = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (E = !1, !C && h.storage.cookies)) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: S(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, te(r, e, i));
			} catch {}
		}
	}
}, ie = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = b(t);
	if (!n || !r) return n;
	let a = p(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return x(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (x(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ae = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = b(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = _(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ie(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return T() ?? t;
}, O, k, oe = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (k === void 0 || O !== e) && (O = e, k = ae()), k;
}, A = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/de.json").then((e) => e.default),
	en: () => import("./intlayer-PreferencesSection-wrapper-7l35jv-en-cOJO_GGY.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/zh.json").then((e) => e.default)
}, se = oe(), j = A[se];
typeof window < "u" && typeof j == "function" && j().then((e) => {
	A.__intlayerPreloaded = {
		locale: se,
		dictionary: e
	};
}, () => void 0);
var ce = (e) => {
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
}, M = /* @__PURE__ */ new Map(), le = (e, t) => (M.has(e) || M.set(e, ce(t)), M.get(e).read()), N = /* @__PURE__ */ new Map(), ue = (e, t) => Object.create(new Proxy(e, {
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
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = N.get(t);
	i || (i = /* @__PURE__ */ new Map(), N.set(t, i));
	let a = i.get(r);
	return a || (a = ue(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, fe = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, de(t)), P = /* @__PURE__ */ new WeakMap(), F = 0, pe = (e) => {
	if (!e) return "base";
	let t = P.get(e);
	if (t) return t;
	F += 1;
	let n = `p${F}`;
	return P.set(e, n), n;
}, me = 256, I = /* @__PURE__ */ new WeakMap(), L = (e) => typeof e == "object" && !!e, he = (e, t, n) => `${e}_${t}_${pe(n)}`, ge = (e, t) => {
	if (!L(e)) return { hit: !1 };
	let n = I.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, R = (e, t, n) => {
	if (!L(e)) return n;
	let r = I.get(e);
	return r || (r = /* @__PURE__ */ new Map(), I.set(e, r)), r.size >= me && r.clear(), r.set(t, n), n;
}, _e = "translation", ve = "enumeration", ye = "plural", be = "condition", z = "insertion", xe = "object", Se = "array", B = "markdown", V = "html", Ce = "gender", we = "select", H = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), U = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, U);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => U(e, H(t, e, {
		type: Se,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: xe,
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
}, W = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, K = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !G(e) || !G(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? K(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Te = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => K(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ee = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[V] : e[B];
}, De = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? V : B;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, J = (e, t, n, r, i) => {
	let a = De(e, W(Ee(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Oe = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, X = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Te(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: _e,
				key: e
			}]
		});
	}
}, Z = Y, ke = (e) => Y, Ae = Y, je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => J(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = W(i, e);
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
	ve,
	be,
	ye,
	Ce,
	we
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
		return !r && Oe(i) ? i(n) : i;
	};
}, Pe = (e, t) => typeof t == "function" && Me.includes(e?.nodeType ?? "") ? (n) => Ne(e, t, n) : t, Fe = Y, Ie = Y, Le = (e) => Y, Re = Y, ze = (e, t = !0) => [
	X(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Z,
	ke(e ?? m.defaultLocale),
	Ae,
	je,
	Le(e ?? m.defaultLocale),
	Re,
	Fe,
	Ie
].filter((e) => e !== Y), Be = (e, t, n = []) => U(e, {
	...t,
	plugins: n
}), Q = /* @__PURE__ */ new WeakSet(), Ve = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = he(r ?? m.defaultLocale, "", n), o = ge(e, a);
	if (o.hit) return o.content;
	let s = n ?? ze(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Q.has(e)
		};
		Q.add(e);
		try {
			return Be(e.content, t, s);
		} finally {
			t.eager && Q.delete(e);
		}
	};
	return c === null ? R(e, a, null) : Array.isArray(c) ? R(e, a, c.map(l)) : R(e, a, l(c));
}, He = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[y];
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
}, qe = Y, Je = (t, r) => {
	let i = Ge(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ye = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => J(e, i, n, t.plugins, r);
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
}, Xe = Y, Ze = Y, $ = /* @__PURE__ */ new Map(), Qe = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Ke,
		X(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		Z,
		ke(e ?? m.defaultLocale),
		Ae,
		Le(e ?? m.defaultLocale),
		Re,
		Fe,
		Ie,
		qe,
		Ye,
		Xe,
		Ze
	].filter((e) => e !== Y);
	return $.set(n, r), r;
}, $e = (e, t) => Ve(e, t, Qe(typeof t == "object" && t ? t.locale : t)), et = ne, tt = (e, t) => re(e, {
	...w,
	isCookieEnabled: t
}), nt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, rt = t({
	get locale() {
		return et() ?? m?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), it = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: s, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: p } = m ?? {}, [h, g] = l(() => e ?? et() ?? t ?? p), [_, v] = l(e);
	e !== _ && (v(e), e && e !== h && g(e)), o(() => {
		nt();
	}, []);
	let y = i((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), tt(e, u);
		}
	}, [
		h,
		f,
		u
	]), b = a ?? y, x = ee(h), S = c(() => ({
		locale: x,
		setLocale: b,
		variant: n,
		disableEditor: s
	}), [
		x,
		b,
		n,
		s
	]);
	return d(rt.Provider, {
		value: S,
		children: r
	});
}, at = ({ children: e, ...t }) => f(it, {
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
	}, c = o ?? r ?? m.defaultLocale, l = He(e, c);
	if (l) return $e(l, c);
	let u = e;
	return $e(le(`${String(t)}.${c}`, u[c]?.()), c);
};
function st() {
	let e = ot(A, "preferences-section"), t = s();
	return f("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [d("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e.j
		}), f("div", {
			className: "space-y-4",
			children: [
				f("div", {
					className: "flex items-center justify-between",
					children: [f("div", { children: [d("p", {
						className: "text-sm font-medium text-foreground",
						children: e.e
					}), d("p", {
						className: "text-xs text-muted-foreground",
						children: e.k
					})] }), d("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": e.n.value,
						children: d("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				f("div", {
					className: "flex items-center justify-between",
					children: [f("div", { children: [d("p", {
						className: "text-sm font-medium text-foreground",
						children: e.c
					}), d("p", {
						className: "text-xs text-muted-foreground",
						children: e.o
					})] }), d("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": e.m.value,
						children: d("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				f("div", { children: [d("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e.d
				}), f("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						d("option", { children: e.f }),
						d("option", { children: e.g }),
						d("option", { children: e.h }),
						d("option", { children: e.l }),
						d("option", { children: e.i }),
						d("option", { children: e.b }),
						d("option", { children: e.a })
					]
				})] })
			]
		})]
	});
}
function ct({ children: e }) {
	return d(at, {
		locale: "en",
		children: e
	});
}
function lt() {
	return d(ct, { children: d(st, {}) });
}
export { lt as default };
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
}), n = "preferences-section", r = {
	e: "Email Notifications",
	k: "Receive weekly benchmark reports",
	n: "Toggle notifications",
	c: "Dark Mode",
	o: "Use dark color scheme",
	m: "Toggle dark mode",
	d: "Default Language",
	f: "English (en)",
	g: "French (fr)",
	h: "German (de)",
	l: "Spanish (es)",
	i: "Japanese (ja)",
	b: "Chinese Simplified (zh-CN)",
	a: "Arabic (ar)",
	j: "Preferences"
}, i = {
	key: n,
	content: r
};
export { t };
