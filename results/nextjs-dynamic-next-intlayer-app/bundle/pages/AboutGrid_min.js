import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
var ee = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), d = {
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
}, f = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
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
}, re = "__intlayerPreloaded", ie = ["en"], p = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? d?.defaultLocale ?? "en",
	mode: e.mode ?? f?.mode ?? "prefix-no-default",
	locales: e.locales ?? d?.locales ?? ie,
	rewrite: e.rewrite ?? f?.rewrite,
	domains: e.domains ?? f?.domains
}), m = (e, t) => !!e && (t ?? d.locales).includes(e), ae = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var h = {
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
}, g = (e = h) => {
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ae) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, oe = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = p(t);
	if (!n || !r) return n;
	let a = ee(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return m(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (m(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, se = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = p(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = oe(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return g() ?? t;
}, _, v, ce = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (v === void 0 || _ !== e) && (_ = e, v = se()), v;
}, y = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/de.json").then((e) => e.default),
	en: () => import("./intlayer-AboutGrid-wrapper-1ajunl-en-BWwMu-4Q.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/zh.json").then((e) => e.default)
}, b = ce(), x = y[b];
typeof window < "u" && typeof x == "function" && x().then((e) => {
	y.__intlayerPreloaded = {
		locale: b,
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
}, S = /* @__PURE__ */ new Map(), ue = (e, t) => (S.has(e) || S.set(e, le(t)), S.get(e).read()), de = ({ children: e, value: t, additionalProps: n }) => {
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
}, C = /* @__PURE__ */ new WeakMap(), w = 0, fe = (e) => {
	if (!e) return "base";
	let t = C.get(e);
	if (t) return t;
	w += 1;
	let n = `p${w}`;
	return C.set(e, n), n;
}, pe = 256, T = /* @__PURE__ */ new WeakMap(), E = (e) => typeof e == "object" && !!e, me = (e, t, n) => `${e}_${t}_${fe(n)}`, he = (e, t) => {
	if (!E(e)) return { hit: !1 };
	let n = T.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, D = (e, t, n) => {
	if (!E(e)) return n;
	let r = T.get(e);
	return r || (r = /* @__PURE__ */ new Map(), T.set(e, r)), r.size >= pe && r.clear(), r.set(t, n), n;
}, ge = "translation", O = "insertion", _e = "object", ve = "array", k = "markdown", A = "html", j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => j(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, {
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
			n[r] = j(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = j(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, M = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), N = "default", ye = /[^A-Za-z0-9._&=-]/g, P = /[^A-Za-z0-9._-]/g, be = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, F = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, be);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, I = (e) => e === void 0 ? N : typeof e == "string" ? F(e, ye) : Object.keys(e).sort().map((t) => `${F(t, P)}=${F(String(e[t]), P)}`).join("&"), L = (e) => Array.isArray(e) ? e.length === 0 ? [N] : e.map(I) : [I(e)], xe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? N : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? N : xe(L(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Se(e, n, t, s)).map((t) => we(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ee = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, De = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? L(n).join(",") : String(n)}`;
}).join("|") : "", R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, B = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ke = (e) => {
	if (typeof e == "string") return e;
	if (B(e)) return e.nodeType === "html" ? e[A] : e[k];
}, Ae = (e, t) => {
	if (typeof e == "string") return t;
	if (B(e)) {
		let n = e.nodeType === "html" ? A : k;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, V = (e, t, n, r, i) => {
	let a = Ae(e, M(ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
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
}, W = H, je = (e) => H, G = H, Me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: O }], i = e[O], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || B(e),
			transform: (e, n, r) => {
				if (B(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = M(i, e);
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
}, K = H, q = H, J = (e) => H, Y = H, Ne = (e, t = !0) => [
	U(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	W,
	G,
	Me,
	J(e ?? d.defaultLocale),
	Y,
	K,
	q
], Pe = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), Fe = (e, t, n) => {
	let { locale: r, selector: i } = Ee(t), a = me(r ?? d.defaultLocale, De(i), n), o = he(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ne(r), c = Te(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Pe(e.content, t, s);
	};
	return c === null ? D(e, a, null) : Array.isArray(c) ? D(e, a, c.map(l)) : D(e, a, l(c));
}, Ie = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
	if (n && n.locale === t) return n.dictionary;
}, Le = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, Re = (e, t = {}) => {
	if (!Object.values(t).some(Le)) return {
		isSimple: !0,
		parts: e.replace(X, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(X), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ze = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => de({
		...n,
		value: n.children,
		children: n.children
	})
}, Be = H, Ve = (t, r) => {
	let i = Re(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, He = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: O }], i = e[O], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || B(e),
			transform: (e, n, r) => {
				if (B(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ve(i, e);
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
}, Ue = H, We = H, Z = /* @__PURE__ */ new Map(), Ge = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		U(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		W,
		je(e ?? d.defaultLocale),
		G,
		J(e ?? d.defaultLocale),
		Y,
		K,
		q,
		ze,
		Be,
		He,
		Ue,
		We
	];
	return Z.set(n, r), r;
}, Q = (e, t) => Fe(e, t, Ge(typeof t == "object" && t ? t.locale : t)), Ke = g(h), qe = t({
	locale: Ke ?? d?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Je = (e, t, n) => {
	let { locale: r, variant: a } = i(qe) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? d.defaultLocale, l = Ie(e, c);
	if (l) return Q(l, c);
	let u = e;
	return Q(ue(`${String(t)}.${c}`, u[c]?.()), c);
};
function Ye() {
	let e = Je(y, "about-grid");
	return u("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [u("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [l("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: e.d
			}), l("p", {
				className: "text-sm text-muted-foreground",
				children: e.a
			})]
		}), u("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [l("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: e.b
			}), l("p", {
				className: "text-sm text-muted-foreground",
				children: e.c
			})]
		})]
	});
}
function $() {
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
function Xe(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Ze({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Xe("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		$();
	}, []), e;
}
function Qe({ children: e }) {
	return l(Ze, {
		locale: "en",
		children: e
	});
}
function $e() {
	return l(Qe, { children: l(Ye, {}) });
}
export { $e as default };
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
}), n = "about-grid", r = {
	d: "Why This Exists",
	a: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	b: "Methodology",
	c: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
}, i = {
	key: n,
	content: r
};
export { t };
