import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { jsxDEV as d } from "react/jsx-dev-runtime";
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
	defaultLocale: p?.defaultLocale ?? "en",
	mode: m?.mode ?? "prefix-no-default",
	locales: p?.locales ?? te,
	rewrite: m?.rewrite,
	domains: m?.domains,
	...e
}), ne = (e, t) => !!e && (t ?? p.locales).includes(e), re = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, ie = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ae = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ie(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, v = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var y = {
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
}, b = (e = y) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!v) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, oe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !v && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ie(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ae(r, e, i));
			} catch {}
		}
	}
}, se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = _(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ne(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ne(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = g(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return b() ?? t;
}, x, S, le = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (S === void 0 || x !== e) && (x = e, S = ce()), S;
}, C = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/de.json").then((e) => e.default),
	en: () => import("./intlayer-PricingTiers-wrapper-100xuj-en-B2Z8CWox.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/zh.json").then((e) => e.default)
}, w = le(), T = C[w];
typeof window < "u" && typeof T == "function" && T().then((e) => {
	C.__intlayerPreloaded = {
		locale: w,
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
}, E = /* @__PURE__ */ new Map(), de = (e, t) => (E.has(e) || E.set(e, ue(t)), E.get(e).read()), fe = ({ children: e, value: t, additionalProps: n }) => {
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
}, pe = /* @__PURE__ */ new WeakMap(), me = 0, he = (e) => {
	if (!e) return "base";
	let t = pe.get(e);
	if (t) return t;
	me += 1;
	let n = `p${me}`;
	return pe.set(e, n), n;
}, ge = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, _e = (e, t, n) => `${e}_${t}_${he(n)}`, ve = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= ge && r.clear(), r.set(t, n), n;
}, ye = "translation", A = "insertion", be = "object", xe = "array", j = "markdown", M = "html", N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => N(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: xe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: be,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = N(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = N(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, P = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), F = "default", Se = /[^A-Za-z0-9._&=-]/g, I = /[^A-Za-z0-9._-]/g, Ce = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, L = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ce);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, R = (e) => e === void 0 ? F : typeof e == "string" ? L(e, Se) : Object.keys(e).sort().map((t) => `${L(t, I)}=${L(String(e[t]), I)}`).join("&"), z = (e) => Array.isArray(e) ? e.length === 0 ? [F] : e.map(R) : [R(e)], we = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? F : e[0] ?? "default";
}, Te = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ee = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, De = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Oe = (e, t) => {
	if (!Ee(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? F : we(z(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Te(e, n, t, s)).map((t) => De(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ke = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ae = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? z(n).join(",") : String(n)}`;
}).join("|") : "", B = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, V = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (B(e) && B(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : V(e[r], t[r]));
		return n;
	}
	return e;
}, je = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => V(e, t));
}, H = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Me = (e) => {
	if (typeof e == "string") return e;
	if (H(e)) return e.nodeType === "html" ? e[M] : e[j];
}, Ne = (e, t) => {
	if (typeof e == "string") return t;
	if (H(e)) {
		let n = e.nodeType === "html" ? M : j;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, U = (e, t, n, r, i) => {
	let a = Ne(e, P(Me(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, W = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, G = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? W : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ye,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return je(o, e, t);
	}
}, K = W, Pe = (e) => W, q = W, Fe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => U(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = P(i, e);
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
}, J = W, Y = W, X = (e) => W, Ie = W, Le = (e, t = !0) => [
	G(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	K,
	q,
	Fe,
	X(e ?? p.defaultLocale),
	Ie,
	J,
	Y
], Re = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), ze = (e, t, n) => {
	let { locale: r, selector: i } = ke(t), a = _e(r ?? p.defaultLocale, Ae(i), n), o = ve(e, a);
	if (o.hit) return o.content;
	let s = n ?? Le(r), c = Oe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Re(e.content, t, s);
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, Be = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ee];
	if (n && n.locale === t) return n.dictionary;
}, Ve = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", He = /\{\{\s*(.*?)\s*\}\}/g, Ue = (e, t = {}) => {
	if (!Object.values(t).some(Ve)) return {
		isSimple: !0,
		parts: e.replace(He, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(He), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, We = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => fe({
		...n,
		value: n.children,
		children: n.children
	})
}, Ge = W, Ke = (t, r) => {
	let i = Ue(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, qe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => U(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ke(i, e);
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
}, Je = W, Ye = W, Z = /* @__PURE__ */ new Map(), Xe = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		G(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		K,
		Pe(e ?? p.defaultLocale),
		q,
		X(e ?? p.defaultLocale),
		Ie,
		J,
		Y,
		We,
		Ge,
		qe,
		Je,
		Ye
	];
	return Z.set(n, r), r;
}, Ze = (e, t) => ze(e, t, Xe(typeof t == "object" && t ? t.locale : t)), Qe = b(y), $e = (e, t) => oe(e, {
	...y,
	isCookieEnabled: t
}), et = () => {
	let { locale: e } = i(Q) ?? {}, t = o(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, tt = ({ children: e }) => (et(), e), nt = () => {
	let { locale: e } = i(Q) ?? {}, t = o(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, rt = ({ children: e }) => (nt(), e), it = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: Qe ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), at = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: d } = p ?? {}, [f, m] = s(e ?? Qe ?? t ?? d);
	a(() => {
		e && e !== f && m(e);
	}, [e]), a(() => {
		it();
	}, []);
	let h = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), $e(e, c);
		}
	}), g = re(f);
	return l(Q.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, ot = ({ children: e, ...t }) => u(at, {
	...t,
	children: [
		l(tt, {}),
		l(rt, {}),
		e
	]
}), st = (e, t, n) => {
	let { locale: r, variant: a } = i(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? p.defaultLocale, l = Be(e, c);
	if (l) return Ze(l, c);
	let u = e;
	return Ze(de(`${String(t)}.${c}`, u[c]?.()), c);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/intlayer-app/src/components/pages/pricing/PricingTiers.tsx";
function ct() {
	let e = st(C, "pricing-tiers"), t = [
		{
			name: e.y,
			price: e.r,
			period: e.l,
			features: [
				e.c({ runs: "5" }),
				e.o({ libs: "3" }),
				e.e,
				e.w
			]
		},
		{
			name: e.v,
			price: e.s,
			period: e.p,
			features: [
				e.aa,
				e.a,
				e.t,
				e.u,
				e.d,
				e.n
			],
			highlighted: !0
		},
		{
			name: e.j,
			price: e.g,
			period: "",
			features: [
				e.k,
				e.q,
				e.x,
				e.i,
				e.h,
				e.b,
				e.z
			]
		}
	];
	return d("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: t.map((t) => d("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				d("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}, void 0, !1, {
					fileName: $,
					lineNumber: 60,
					columnNumber: 11
				}, this),
				d("div", {
					className: "my-4",
					children: [d("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}, void 0, !1, {
						fileName: $,
						lineNumber: 62,
						columnNumber: 13
					}, this), d("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					}, void 0, !1, {
						fileName: $,
						lineNumber: 65,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 61,
					columnNumber: 11
				}, this),
				d("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((e, t) => d("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							d("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 73,
								columnNumber: 17
							}, this),
							" ",
							e
						]
					}, t, !0, {
						fileName: $,
						lineNumber: 69,
						columnNumber: 15
					}, this))
				}, void 0, !1, {
					fileName: $,
					lineNumber: 67,
					columnNumber: 11
				}, this),
				d("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === e.j ? e.f : e.m
				}, void 0, !1, {
					fileName: $,
					lineNumber: 77,
					columnNumber: 11
				}, this)
			]
		}, t.name.value, !0, {
			fileName: $,
			lineNumber: 52,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 50,
		columnNumber: 5
	}, this);
}
var lt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/intlayer-app/scripts/Wrapper.tsx";
function ut({ children: e }) {
	return d(ot, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: lt,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var dt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/intlayer-app/src/components/pages/pricing/PricingTiers.wrapper.tsx";
function ft() {
	return d(ut, { children: d(ct, {}, void 0, !1, {
		fileName: dt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: dt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { ft as default };
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
}), n = "pricing-tiers", r = {
	y: "Starter",
	r: "$0",
	l: "forever",
	c: {
		fields: [],
		nodeType: "insertion",
		insertion: "{runs} benchmark runs/day"
	},
	o: {
		fields: [],
		nodeType: "insertion",
		insertion: "{libs} libraries"
	},
	e: "Community support",
	w: "Public results",
	v: "Pro",
	s: "$29",
	p: "/month",
	aa: "Unlimited runs",
	a: "All libraries",
	t: "Priority support",
	u: "Private results",
	d: "CI integration",
	n: "Historical data",
	j: "Enterprise",
	g: "Custom",
	k: "Everything in Pro",
	q: "On-premise option",
	x: "SSO & SAML",
	i: "Dedicated account manager",
	h: "Custom SLAs",
	b: "Audit logs",
	z: "Training sessions",
	f: "Contact Sales",
	m: "Get Started"
}, i = {
	key: n,
	content: r
};
export { t };
