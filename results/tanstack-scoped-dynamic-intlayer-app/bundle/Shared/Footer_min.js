import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
import { Link as f, useParams as p } from "@tanstack/react-router";
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
}, ee = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, te = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ee(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, _ = ["en"], v = "__intlayerPreloaded", y = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? h?.defaultLocale ?? "en",
	mode: e.mode ?? g?.mode ?? "prefix-no-default",
	locales: e.locales ?? h?.locales ?? _,
	rewrite: e.rewrite ?? g?.rewrite,
	domains: e.domains ?? g?.domains
}), b = (e, t) => !!e && (t ?? h.locales).includes(e), ne = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, re = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ie = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = re(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, x = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!x) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, w = !1, T, ae = () => typeof window > "u" ? C(S) : (w ||= (T = C(S), !0), T), oe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (w = !1, !x && g.storage.cookies)) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: re(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ie(r, e, i));
			} catch {}
		}
	}
}, se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = y(t);
	if (!n || !r) return n;
	let a = m(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return b(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (b(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = y(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, E, D, le = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (D === void 0 || E !== e) && (E = e, D = ce()), D;
}, O = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((e) => e.default),
	en: () => import("./intlayer-Footer-wrapper-1puwrl-en-C5Zk03S3.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((e) => e.default)
}, ue = le(), de = O[ue];
typeof window < "u" && typeof de == "function" && de().then((e) => {
	O.__intlayerPreloaded = {
		locale: ue,
		dictionary: e
	};
}, () => void 0);
var fe = (e) => {
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
}, k = /* @__PURE__ */ new Map(), pe = (e, t) => (k.has(e) || k.set(e, fe(t)), k.get(e).read()), A = /* @__PURE__ */ new Map(), me = (e, t) => Object.create(new Proxy(e, {
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
}), he = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = A.get(t);
	i || (i = /* @__PURE__ */ new Map(), A.set(t, i));
	let a = i.get(r);
	return a || (a = me(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ge = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, he(t)), j = /* @__PURE__ */ new WeakMap(), M = 0, _e = (e) => {
	if (!e) return "base";
	let t = j.get(e);
	if (t) return t;
	M += 1;
	let n = `p${M}`;
	return j.set(e, n), n;
}, ve = 256, N = /* @__PURE__ */ new WeakMap(), P = (e) => typeof e == "object" && !!e, ye = (e, t, n) => `${e}_${t}_${_e(n)}`, be = (e, t) => {
	if (!P(e)) return { hit: !1 };
	let n = N.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!P(e)) return n;
	let r = N.get(e);
	return r || (r = /* @__PURE__ */ new Map(), N.set(e, r)), r.size >= ve && r.clear(), r.set(t, n), n;
}, xe = "translation", Se = "enumeration", Ce = "plural", we = "condition", I = "insertion", Te = "object", Ee = "array", L = "markdown", R = "html", De = "gender", Oe = "select", z = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), B = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, B);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => B(e, z(t, e, {
		type: Ee,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Te,
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
}, ke = (e, t, n) => {
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
}, Ae = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[R] : e[L];
}, je = (e, t) => {
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
	let a = je(e, V(Ae(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Me = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, q = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ke(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: xe,
				key: e
			}]
		});
	}
}, J = K, Y = (e) => K, X = K, Ne = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
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
		return Ie(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Pe = [
	Se,
	we,
	Ce,
	De,
	Oe
], Fe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Pe.includes(i)) return t;
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
		return !r && Me(i) ? i(n) : i;
	};
}, Ie = (e, t) => typeof t == "function" && Pe.includes(e?.nodeType ?? "") ? (n) => Fe(e, t, n) : t, Le = K, Re = K, ze = (e) => K, Z = K, Be = (e, t = !0) => [
	q(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	J,
	Y(e ?? h.defaultLocale),
	X,
	Ne,
	ze(e ?? h.defaultLocale),
	Z,
	Le,
	Re
].filter((e) => e !== K), Ve = (e, t, n = []) => B(e, {
	...t,
	plugins: n
}), Q = /* @__PURE__ */ new WeakSet(), He = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ye(r ?? h.defaultLocale, "", n), o = be(e, a);
	if (o.hit) return o.content;
	let s = n ?? Be(r), c = e, l = (e) => {
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
			return Ve(e.content, t, s);
		} finally {
			t.eager && Q.delete(e);
		}
	};
	return c === null ? F(e, a, null) : Array.isArray(c) ? F(e, a, c.map(l)) : F(e, a, l(c));
}, Ue = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[v];
	if (n && n.locale === t) return n.dictionary;
}, We = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ge = /\{\{\s*(.*?)\s*\}\}/g, Ke = (e, t = {}) => {
	if (!Object.values(t).some(We)) return {
		isSimple: !0,
		parts: e.replace(Ge, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ge), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, qe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ge({
		value: t.children,
		children: t.children
	})
}, Je = K, Ye = (t, r) => {
	let i = Ke(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Xe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
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
					let a = Ye(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ie(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ze = K, Qe = K, $ = /* @__PURE__ */ new Map(), $e = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		qe,
		q(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		J,
		Y(e ?? h.defaultLocale),
		X,
		ze(e ?? h.defaultLocale),
		Z,
		Le,
		Re,
		Je,
		Xe,
		Ze,
		Qe
	].filter((e) => e !== K);
	return $.set(n, r), r;
}, et = (e, t) => He(e, t, $e(typeof t == "object" && t ? t.locale : t)), tt = ae, nt = (e, t) => oe(e, {
	...S,
	isCookieEnabled: t
}), rt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, it = t({
	get locale() {
		return tt() ?? h?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), at = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = h ?? {}, [m, g] = c(() => e ?? tt() ?? t ?? p), [ee, te] = c(e);
	e !== ee && (te(e), e && e !== m && g(e)), o(() => {
		rt();
	}, []);
	let _ = i((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), nt(e, d);
		}
	}, [
		m,
		f,
		d
	]), v = a ?? _, y = ne(m), b = s(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: l
	}), [
		y,
		v,
		n,
		l
	]);
	return u(it.Provider, {
		value: b,
		children: r
	});
}, ot = ({ children: e, ...t }) => d(at, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), st = (e, t, n) => {
	let { locale: r, variant: i } = a(it) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? h.defaultLocale, l = Ue(e, c);
	if (l) return et(l, c);
	let u = e;
	return et(pe(`${String(t)}.${c}`, u[c]?.()), c);
};
function ct() {
	let e = st(O, "footer"), t = p({ strict: !1 }).locale ?? "en", n = [
		{
			label: e.f,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e.h,
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: e.e,
			to: "/$locale/contact",
			isInternal: !0
		}
	];
	return u("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: d("div", {
			className: "container py-8",
			children: [d("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					d("div", { children: [u("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}), u("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					})] }),
					d("div", { children: [u("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}), u("ul", {
						className: "space-y-1",
						children: n.map((e) => u("li", { children: e.isInternal ? u(f, {
							preload: !1,
							to: e.to,
							params: { locale: t },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : u("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label.value))
					})] }),
					d("div", { children: [u("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}), u("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					})] })
				]
			}), u("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			})]
		})
	});
}
function lt({ children: e }) {
	return u(ot, {
		locale: "en",
		children: e
	});
}
function ut() {
	return u(lt, { children: u(ct, {}) });
}
export { ut as default };
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
