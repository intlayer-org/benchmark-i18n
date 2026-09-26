import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as ee } from "react/jsx-runtime";
var te = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), u = {
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
}, d = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ne = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, re = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ne(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ie = "__intlayerPreloaded", ae = ["en"], f = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? u?.defaultLocale ?? "en",
	mode: e.mode ?? d?.mode ?? "prefix-no-default",
	locales: e.locales ?? u?.locales ?? ae,
	rewrite: e.rewrite ?? d?.rewrite,
	domains: e.domains ?? d?.domains
}), p = (e, t) => !!e && (t ?? u.locales).includes(e), oe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var m = {
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
}, h = (e = m) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!oe) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = f(t);
	if (!n || !r) return n;
	let a = te(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return p(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (p(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = f(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = re(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return h() ?? t;
}, le, g, _ = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (g === void 0 || le !== e) && (le = e, g = ce()), g;
}, v = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProductsHeader-wrapper-iahoxt-en-Dtef3jty.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/zh.json").then((e) => e.default)
}, y = _(), b = v[y];
typeof window < "u" && typeof b == "function" && b().then((e) => {
	v.__intlayerPreloaded = {
		locale: y,
		dictionary: e
	};
}, () => void 0);
var ue = (e) => {
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
}, x = /* @__PURE__ */ new Map(), de = (e, t) => (x.has(e) || x.set(e, ue(t)), x.get(e).read()), fe = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : l(c, { children: e });
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
}, S = /* @__PURE__ */ new WeakMap(), C = 0, pe = (e) => {
	if (!e) return "base";
	let t = S.get(e);
	if (t) return t;
	C += 1;
	let n = `p${C}`;
	return S.set(e, n), n;
}, me = 256, w = /* @__PURE__ */ new WeakMap(), T = (e) => typeof e == "object" && !!e, he = (e, t, n) => `${e}_${t}_${pe(n)}`, ge = (e, t) => {
	if (!T(e)) return { hit: !1 };
	let n = w.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!T(e)) return n;
	let r = w.get(e);
	return r || (r = /* @__PURE__ */ new Map(), w.set(e, r)), r.size >= me && r.clear(), r.set(t, n), n;
}, _e = "translation", D = "insertion", ve = "object", ye = "array", O = "markdown", k = "html", A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => A(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ye,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ve,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = A(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = A(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, j = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), M = "default", be = /[^A-Za-z0-9._&=-]/g, N = /[^A-Za-z0-9._-]/g, xe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, P = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, xe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, F = (e) => e === void 0 ? M : typeof e == "string" ? P(e, be) : Object.keys(e).sort().map((t) => `${P(t, N)}=${P(String(e[t]), N)}`).join("&"), I = (e) => Array.isArray(e) ? e.length === 0 ? [M] : e.map(F) : [F(e)], Se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? M : e[0] ?? "default";
}, Ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, we = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Te = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ee = (e, t) => {
	if (!we(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? M : Se(I(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ce(e, n, t, s)).map((t) => Te(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, De = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Oe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? I(n).join(",") : String(n)}`;
}).join("|") : "", L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, ke = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
}, z = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ae = (e) => {
	if (typeof e == "string") return e;
	if (z(e)) return e.nodeType === "html" ? e[k] : e[O];
}, je = (e, t) => {
	if (typeof e == "string") return t;
	if (z(e)) {
		let n = e.nodeType === "html" ? k : O;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, B = (e, t, n, r, i) => {
	let a = je(e, j(Ae(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, H = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: _e,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ke(o, e, t);
	}
}, U = V, Me = (e) => V, W = V, Ne = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: D }], i = e[D], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || z(e),
			transform: (e, n, r) => {
				if (z(e)) return (i) => B(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = j(i, e);
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
}, G = V, K = V, q = (e) => V, J = V, Pe = (e, t = !0) => [
	H(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	U,
	W,
	Ne,
	q(e ?? u.defaultLocale),
	J,
	G,
	K
], Fe = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), Ie = (e, t, n) => {
	let { locale: r, selector: i } = De(t), a = he(r ?? u.defaultLocale, Oe(i), n), o = ge(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pe(r), c = Ee(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Fe(e.content, t, s);
	};
	return c === null ? E(e, a, null) : Array.isArray(c) ? E(e, a, c.map(l)) : E(e, a, l(c));
}, Le = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, Re = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Y = /\{\{\s*(.*?)\s*\}\}/g, ze = (e, t = {}) => {
	if (!Object.values(t).some(Re)) return {
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
}, Be = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => fe({
		...n,
		value: n.children,
		children: n.children
	})
}, Ve = V, He = (t, r) => {
	let i = ze(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ue = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: D }], i = e[D], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || z(e),
			transform: (e, n, r) => {
				if (z(e)) return (i) => B(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = He(i, e);
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
}, We = V, Ge = V, X = /* @__PURE__ */ new Map(), Ke = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		H(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		U,
		Me(e ?? u.defaultLocale),
		W,
		q(e ?? u.defaultLocale),
		J,
		G,
		K,
		Be,
		Ve,
		Ue,
		We,
		Ge
	];
	return X.set(n, r), r;
}, Z = (e, t) => Ie(e, t, Ke(typeof t == "object" && t ? t.locale : t)), qe = h(m), Je = t({
	locale: qe ?? u?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Q = (e, t, n) => {
	let { locale: r, variant: a } = i(Je) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? u.defaultLocale, l = Le(e, c);
	if (l) return Z(l, c);
	let ee = e;
	return Z(de(`${String(t)}.${c}`, ee[c]?.()), c);
}, $ = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProductsHeader-wrapper-iahoxt-en-Dtef3jty.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/zh.json").then((e) => e.default)
}, Ye = _(), Xe = $[Ye];
typeof window < "u" && typeof Xe == "function" && Xe().then((e) => {
	$.__intlayerPreloaded = {
		locale: Ye,
		dictionary: e
	};
}, () => void 0);
var Ze = () => {
	let e = Q($, "mock-banner");
	return l("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.a
	});
};
function Qe() {
	let e = Q(v, "products-header");
	return ee(c, { children: [
		l(Ze, {}),
		l("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e.a
		}),
		l("p", {
			className: "mb-10 text-muted-foreground",
			children: e.b
		})
	] });
}
function $e() {
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
function et(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function tt({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		et("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		$e();
	}, []), e;
}
function nt({ children: e }) {
	return l(tt, {
		locale: "en",
		children: e
	});
}
function rt() {
	return l(nt, { children: l(Qe, {}) });
}
export { rt as default };
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
}), s = "products-header", c = {
	b: "Tools and services to streamline your internationalization workflow.",
	a: "Products"
}, l = {
	key: s,
	content: c
};
export { n, o as t };
