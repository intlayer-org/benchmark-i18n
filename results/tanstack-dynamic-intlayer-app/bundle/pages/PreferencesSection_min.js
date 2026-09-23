import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useId as o, useRef as s, useState as c } from "react";
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
}, ee = "__intlayerPreloaded", te = ["en"], _ = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? te,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), v = (e, t) => !!e && (t ?? p.locales).includes(e), ne = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, y = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, re = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = y(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, b = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	if (!b) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ie = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !b && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: y(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, re(r, e, i));
			} catch {}
		}
	}
}, ae = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = _(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return v(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (v(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, oe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = g(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ae(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return S() ?? t;
}, se, C, ce = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (C === void 0 || se !== e) && (se = e, C = oe()), C;
}, w = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/de.json").then((e) => e.default),
	en: () => import("./intlayer-PreferencesSection-wrapper-zlm2ds-en-B5ecZg0s.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/zh.json").then((e) => e.default)
}, T = ce(), E = w[T];
typeof window < "u" && typeof E == "function" && E().then((e) => {
	w.__intlayerPreloaded = {
		locale: T,
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
}, D = /* @__PURE__ */ new Map(), ue = (e, t) => (D.has(e) || D.set(e, le(t)), D.get(e).read()), de = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(l, { children: e });
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
}, O = /* @__PURE__ */ new WeakMap(), k = 0, fe = (e) => {
	if (!e) return "base";
	let t = O.get(e);
	if (t) return t;
	k += 1;
	let n = `p${k}`;
	return O.set(e, n), n;
}, pe = 256, A = /* @__PURE__ */ new WeakMap(), j = (e) => typeof e == "object" && !!e, me = (e, t, n) => `${e}_${t}_${fe(n)}`, he = (e, t) => {
	if (!j(e)) return { hit: !1 };
	let n = A.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, M = (e, t, n) => {
	if (!j(e)) return n;
	let r = A.get(e);
	return r || (r = /* @__PURE__ */ new Map(), A.set(e, r)), r.size >= pe && r.clear(), r.set(t, n), n;
}, ge = "translation", N = "insertion", _e = "object", ve = "array", P = "markdown", F = "html", I = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => I(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => I(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ve,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: _e,
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
}, L = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), R = "default", ye = /[^A-Za-z0-9._&=-]/g, z = /[^A-Za-z0-9._-]/g, be = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, B = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, be);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, V = (e) => e === void 0 ? R : typeof e == "string" ? B(e, ye) : Object.keys(e).sort().map((t) => `${B(t, z)}=${B(String(e[t]), z)}`).join("&"), H = (e) => Array.isArray(e) ? e.length === 0 ? [R] : e.map(V) : [V(e)], xe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? R : e[0] ?? "default";
}, Se = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ce = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, we = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Te = (e, t) => {
	if (!Ce(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? R : xe(H(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Se(e, n, t, s)).map((t) => we(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ee = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, De = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
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
}, Oe = (e, t, n) => {
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
}, ke = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[F] : e[P];
}, Ae = (e, t) => {
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
	let a = Ae(e, L(ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, J = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ge,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Oe(o, e, t);
	}
}, Y = q, je = (e) => q, X = q, Me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
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
}, Z = q, Ne = q, Pe = (e) => q, Fe = q, Ie = (e, t = !0) => [
	J(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	Y,
	X,
	Me,
	Pe(e ?? p.defaultLocale),
	Fe,
	Z,
	Ne
], Le = (e, t, n = []) => I(e, {
	...t,
	plugins: n
}), Re = (e, t, n) => {
	let { locale: r, selector: i } = Ee(t), a = me(r ?? p.defaultLocale, De(i), n), o = he(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ie(r), c = Te(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Le(e.content, t, s);
	};
	return c === null ? M(e, a, null) : Array.isArray(c) ? M(e, a, c.map(l)) : M(e, a, l(c));
}, ze = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ee];
	if (n && n.locale === t) return n.dictionary;
}, Be = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ve = /\{\{\s*(.*?)\s*\}\}/g, He = (e, t = {}) => {
	if (!Object.values(t).some(Be)) return {
		isSimple: !0,
		parts: e.replace(Ve, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ve), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ue = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => de({
		...n,
		value: n.children,
		children: n.children
	})
}, We = q, Ge = (t, r) => {
	let i = He(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
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
					let a = Ge(i, e);
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
}, qe = q, Je = q, Q = /* @__PURE__ */ new Map(), Ye = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		J(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		Y,
		je(e ?? p.defaultLocale),
		X,
		Pe(e ?? p.defaultLocale),
		Fe,
		Z,
		Ne,
		Ue,
		We,
		Ke,
		qe,
		Je
	];
	return Q.set(n, r), r;
}, Xe = (e, t) => Re(e, t, Ye(typeof t == "object" && t ? t.locale : t)), Ze = S(x), Qe = (e, t) => ie(e, {
	...x,
	isCookieEnabled: t
}), $e = () => {
	let { locale: e } = i($) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, et = ({ children: e }) => ($e(), e), tt = () => {
	let { locale: e } = i($) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, nt = ({ children: e }) => (tt(), e), rt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = t({
	locale: Ze ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), it = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: d } = p ?? {}, [f, m] = c(e ?? Ze ?? t ?? d);
	a(() => {
		e && e !== f && m(e);
	}, [e]), a(() => {
		rt();
	}, []);
	let h = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Qe(e, s);
		}
	}), g = ne(f);
	return u($.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, at = ({ children: e, ...t }) => d(it, {
	...t,
	children: [
		u(et, {}),
		u(nt, {}),
		e
	]
}), ot = (e, t, n) => {
	let { locale: r, variant: a } = i($) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? p.defaultLocale, l = ze(e, c);
	if (l) return Xe(l, c);
	let u = e;
	return Xe(ue(`${String(t)}.${c}`, u[c]?.()), c);
};
function st() {
	let e = ot(w, "preferences-section"), t = o();
	return d("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [u("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e.j
		}), d("div", {
			className: "space-y-4",
			children: [
				d("div", {
					className: "flex items-center justify-between",
					children: [d("div", { children: [u("p", {
						className: "text-sm font-medium text-foreground",
						children: e.e
					}), u("p", {
						className: "text-xs text-muted-foreground",
						children: e.k
					})] }), u("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": e.n.value,
						children: u("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				d("div", {
					className: "flex items-center justify-between",
					children: [d("div", { children: [u("p", {
						className: "text-sm font-medium text-foreground",
						children: e.c
					}), u("p", {
						className: "text-xs text-muted-foreground",
						children: e.o
					})] }), u("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": e.m.value,
						children: u("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				d("div", { children: [u("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e.d
				}), d("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						u("option", { children: e.f }),
						u("option", { children: e.g }),
						u("option", { children: e.h }),
						u("option", { children: e.l }),
						u("option", { children: e.i }),
						u("option", { children: e.b }),
						u("option", { children: e.a })
					]
				})] })
			]
		})]
	});
}
function ct({ children: e }) {
	return u(at, {
		locale: "en",
		children: e
	});
}
function lt() {
	return u(ct, { children: u(st, {}) });
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
	b: "Chinese Simplified (zh)",
	a: "Arabic (ar)",
	j: "Preferences"
}, i = {
	key: n,
	content: r
};
export { t };
