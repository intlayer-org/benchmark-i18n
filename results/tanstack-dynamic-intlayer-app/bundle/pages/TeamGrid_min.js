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
}, ee = ["en"], _ = "__intlayerPreloaded", v = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? ee,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), y = (e, t) => !!e && (t ?? p.locales).includes(e), te = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, ne = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = b(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, re = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!re) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, C = !1, w, ie = () => typeof window > "u" ? S(x) : (C ||= (w = S(x), !0), w), ae = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (C = !1, !re && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: b(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ne(r, e, i));
			} catch {}
		}
	}
}, oe = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = v(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return y(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (y(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, se = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = v(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = g(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = oe(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return S() ?? t;
}, T, E, ce = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (E === void 0 || T !== e) && (T = e, E = se()), E;
}, D = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/de.json").then((e) => e.default),
	en: () => import("./intlayer-TeamGrid-wrapper-1nvet8-en-gPvSFFpR.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/zh.json").then((e) => e.default)
}, O = ce(), k = D[O];
typeof window < "u" && typeof k == "function" && k().then((e) => {
	D.__intlayerPreloaded = {
		locale: O,
		dictionary: e
	};
}, () => void 0);
var le = (e) => {
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
}, A = /* @__PURE__ */ new Map(), ue = (e, t) => (A.has(e) || A.set(e, le(t)), A.get(e).read()), j = /* @__PURE__ */ new Map(), de = (e, t) => Object.create(new Proxy(e, {
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
}), fe = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = j.get(t);
	i || (i = /* @__PURE__ */ new Map(), j.set(t, i));
	let a = i.get(r);
	return a || (a = de(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, pe = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, fe(t)), me = /* @__PURE__ */ new WeakMap(), M = 0, he = (e) => {
	if (!e) return "base";
	let t = me.get(e);
	if (t) return t;
	M += 1;
	let n = `p${M}`;
	return me.set(e, n), n;
}, ge = 256, N = /* @__PURE__ */ new WeakMap(), P = (e) => typeof e == "object" && !!e, _e = (e, t, n) => `${e}_${t}_${he(n)}`, ve = (e, t) => {
	if (!P(e)) return { hit: !1 };
	let n = N.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!P(e)) return n;
	let r = N.get(e);
	return r || (r = /* @__PURE__ */ new Map(), N.set(e, r)), r.size >= ge && r.clear(), r.set(t, n), n;
}, ye = "translation", be = "enumeration", xe = "plural", Se = "condition", I = "insertion", Ce = "object", we = "array", L = "markdown", R = "html", Te = "gender", Ee = "select", z = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), B = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, B);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => B(e, z(t, e, {
		type: we,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Ce,
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
}, De = (e, t, n) => {
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
}, Oe = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[R] : e[L];
}, ke = (e, t) => {
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
	let a = ke(e, V(Oe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ae = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, q = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = De(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ye,
				key: e
			}]
		});
	}
}, J = K, Y = (e) => K, X = K, je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
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
		return Pe(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Me = [
	be,
	Se,
	xe,
	Te,
	Ee
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
		return !r && Ae(i) ? i(n) : i;
	};
}, Pe = (e, t) => typeof t == "function" && Me.includes(e?.nodeType ?? "") ? (n) => Ne(e, t, n) : t, Fe = K, Ie = K, Z = (e) => K, Le = K, Re = (e, t = !0) => [
	q(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	J,
	Y(e ?? p.defaultLocale),
	X,
	je,
	Z(e ?? p.defaultLocale),
	Le,
	Fe,
	Ie
].filter((e) => e !== K), ze = (e, t, n = []) => B(e, {
	...t,
	plugins: n
}), Q = /* @__PURE__ */ new WeakSet(), Be = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = _e(r ?? p.defaultLocale, "", n), o = ve(e, a);
	if (o.hit) return o.content;
	let s = n ?? Re(r), c = e, l = (e) => {
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
			return ze(e.content, t, s);
		} finally {
			t.eager && Q.delete(e);
		}
	};
	return c === null ? F(e, a, null) : Array.isArray(c) ? F(e, a, c.map(l)) : F(e, a, l(c));
}, Ve = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[_];
	if (n && n.locale === t) return n.dictionary;
}, He = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ue = /\{\{\s*(.*?)\s*\}\}/g, We = (e, t = {}) => {
	if (!Object.values(t).some(He)) return {
		isSimple: !0,
		parts: e.replace(Ue, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ue), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => pe({
		value: t.children,
		children: t.children
	})
}, Ke = K, qe = (t, r) => {
	let i = We(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
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
					let a = qe(i, e);
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
}, Ye = K, Xe = K, $ = /* @__PURE__ */ new Map(), Ze = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Ge,
		q(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		J,
		Y(e ?? p.defaultLocale),
		X,
		Z(e ?? p.defaultLocale),
		Le,
		Fe,
		Ie,
		Ke,
		Je,
		Ye,
		Xe
	].filter((e) => e !== K);
	return $.set(n, r), r;
}, Qe = (e, t) => Be(e, t, Ze(typeof t == "object" && t ? t.locale : t)), $e = ie, et = (e, t) => ae(e, {
	...x,
	isCookieEnabled: t
}), tt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, nt = t({
	get locale() {
		return $e() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), rt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: m } = p ?? {}, [h, g] = c(() => e ?? $e() ?? t ?? m), [ee, _] = c(e);
	e !== ee && (_(e), e && e !== h && g(e)), o(() => {
		tt();
	}, []);
	let v = i((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), et(e, d);
		}
	}, [
		h,
		f,
		d
	]), y = a ?? v, b = te(h), ne = s(() => ({
		locale: b,
		setLocale: y,
		variant: n,
		disableEditor: l
	}), [
		b,
		y,
		n,
		l
	]);
	return u(nt.Provider, {
		value: ne,
		children: r
	});
}, it = ({ children: e, ...t }) => d(rt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), at = (e, t, n) => {
	let { locale: r, variant: i } = a(nt) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? p.defaultLocale, l = Ve(e, c);
	if (l) return Qe(l, c);
	let u = e;
	return Qe(ue(`${String(t)}.${c}`, u[c]?.()), c);
};
function ot() {
	let e = at(D, "team-grid"), t = [
		{
			name: e.o.value,
			role: e.h.value,
			bio: e.g.value
		},
		{
			name: e.l.value,
			role: e.n.value,
			bio: e.p.value
		},
		{
			name: e.a.value,
			role: e.d.value,
			bio: e.m.value
		},
		{
			name: e.q.value,
			role: e.i.value,
			bio: e.j.value
		},
		{
			name: e.r.value,
			role: e.c.value,
			bio: e.f.value
		},
		{
			name: e.e.value,
			role: e.b.value,
			bio: e.k.value
		}
	];
	return u("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((e) => d("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				u("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				u("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				u("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				u("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
}
function st({ children: e }) {
	return u(it, {
		locale: "en",
		children: e
	});
}
function ct() {
	return u(st, { children: u(ot, {}) });
}
export { ct as default };
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
	o: "Sarah Chen",
	h: "Founder & Lead Engineer",
	g: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	l: "Marcus Weber",
	n: "Performance Engineer",
	p: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	a: "Aisha Patel",
	d: "Developer Advocate",
	m: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	q: "Tomás Rodríguez",
	i: "Full-Stack Developer",
	j: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	r: "Yuki Tanaka",
	c: "Data Analyst",
	f: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	e: "Elena Kowalski",
	b: "Community Manager",
	k: "Manages community contributions, partnerships, and events. Background in open source governance."
}, i = {
	key: n,
	content: r
};
export { t };
