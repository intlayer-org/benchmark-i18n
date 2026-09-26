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
}, te = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = x(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ne = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ne) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, w = !1, T, re = () => typeof window > "u" ? C(S) : (w ||= (T = C(S), !0), T), ie = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (w = !1, !ne && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: x(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, te(r, e, i));
			} catch {}
		}
	}
}, ae = (e = "/", t) => {
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
}, oe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = y(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = g(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ae(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, E, D, se = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (D === void 0 || E !== e) && (E = e, D = oe()), D;
}, O = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./intlayer-ThemeToggle-wrapper-19gdsj-en-zJ4yElQg.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, k = se(), A = O[k];
typeof window < "u" && typeof A == "function" && A().then((e) => {
	O.__intlayerPreloaded = {
		locale: k,
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
}, j = /* @__PURE__ */ new Map(), le = (e, t) => (j.has(e) || j.set(e, ce(t)), j.get(e).read()), ue = /* @__PURE__ */ new Map(), de = (e, t) => Object.create(new Proxy(e, {
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
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = ue.get(t);
	i || (i = /* @__PURE__ */ new Map(), ue.set(t, i));
	let a = i.get(r);
	return a || (a = de(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, pe = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, fe(t)), me = /* @__PURE__ */ new WeakMap(), he = 0, ge = (e) => {
	if (!e) return "base";
	let t = me.get(e);
	if (t) return t;
	he += 1;
	let n = `p${he}`;
	return me.set(e, n), n;
}, _e = 256, M = /* @__PURE__ */ new WeakMap(), N = (e) => typeof e == "object" && !!e, ve = (e, t, n) => `${e}_${t}_${ge(n)}`, ye = (e, t) => {
	if (!N(e)) return { hit: !1 };
	let n = M.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, P = (e, t, n) => {
	if (!N(e)) return n;
	let r = M.get(e);
	return r || (r = /* @__PURE__ */ new Map(), M.set(e, r)), r.size >= _e && r.clear(), r.set(t, n), n;
}, be = "translation", xe = "enumeration", Se = "plural", Ce = "condition", F = "insertion", we = "object", Te = "array", I = "markdown", L = "html", Ee = "gender", De = "select", R = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), z = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, z);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => z(e, R(t, e, {
		type: Te,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: we,
			key: r
		};
		if (t.eager) {
			n[r] = z(e[r], R(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = z(e[r], R(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, B = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), V = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, H = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !V(e) || !V(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? H(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Oe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => H(e, t));
}, U = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ke = (e) => {
	if (typeof e == "string") return e;
	if (U(e)) return e.nodeType === "html" ? e[L] : e[I];
}, Ae = (e, t) => {
	if (typeof e == "string") return t;
	if (U(e)) {
		let n = e.nodeType === "html" ? L : I;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, W = (e, t, n, r, i) => {
	let a = Ae(e, B(ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, G = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, je = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, K = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? G : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Oe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: be,
				key: e
			}]
		});
	}
}, q = G, J = (e) => G, Y = G, Me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: F }], i = e[F], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => W(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = B(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Fe(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ne = [
	xe,
	Ce,
	Se,
	Ee,
	De
], Pe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Ne.includes(i)) return t;
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
		return !r && je(i) ? i(n) : i;
	};
}, Fe = (e, t) => typeof t == "function" && Ne.includes(e?.nodeType ?? "") ? (n) => Pe(e, t, n) : t, Ie = G, X = G, Le = (e) => G, Re = G, ze = (e, t = !0) => [
	K(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	q,
	J(e ?? p.defaultLocale),
	Y,
	Me,
	Le(e ?? p.defaultLocale),
	Re,
	Ie,
	X
].filter((e) => e !== G), Be = (e, t, n = []) => z(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), Ve = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ve(r ?? p.defaultLocale, "", n), o = ye(e, a);
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
	return c === null ? P(e, a, null) : Array.isArray(c) ? P(e, a, c.map(l)) : P(e, a, l(c));
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
	transform: (e, t) => pe({
		value: t.children,
		children: t.children
	})
}, qe = G, Je = (t, r) => {
	let i = Ge(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ye = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: F }], i = e[F], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => W(e, i, n, t.plugins, r);
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
		return Fe(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Xe = G, Ze = G, Q = /* @__PURE__ */ new Map(), Qe = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Ke,
		K(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		q,
		J(e ?? p.defaultLocale),
		Y,
		Le(e ?? p.defaultLocale),
		Re,
		Ie,
		X,
		qe,
		Ye,
		Xe,
		Ze
	].filter((e) => e !== G);
	return Q.set(n, r), r;
}, $e = (e, t) => Ve(e, t, Qe(typeof t == "object" && t ? t.locale : t)), et = re, tt = (e, t) => ie(e, {
	...S,
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
	]), b = a ?? y, x = ee(h), te = s(() => ({
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
		value: te,
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
	return $e(le(`${String(t)}.${c}`, u[c]?.()), c);
};
function st() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function ct() {
	let e = ot(O, "theme-toggle"), [t, n] = c("auto");
	o(() => {
		let e = st();
		n(e), $(e);
	}, []), o(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let i = t === "auto" ? e.d.value : e.g({ mode: t });
	return u("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? e.a.value : t === "dark" ? e.b.value : e.c.value
	});
}
function lt({ children: e }) {
	return u(at, {
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
}), n = "theme-toggle", r = {
	d: "Theme mode: auto (system). Click to switch to light mode.",
	a: "Theme: Auto",
	b: "Theme: Dark",
	c: "Theme: Light",
	g: {
		fields: ["mode"],
		nodeType: "insertion",
		insertion: "Theme mode: {{mode}}. Click to switch mode."
	}
}, i = {
	key: n,
	content: r
};
export { t };
