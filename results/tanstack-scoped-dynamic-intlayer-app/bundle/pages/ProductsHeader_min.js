import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
var d = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), f = {
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
}, p = {
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
}, m = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, h = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && m(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ee = "__intlayerPreloaded", te = ["en"], g = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? f?.defaultLocale ?? "en",
	mode: e.mode ?? p?.mode ?? "prefix-no-default",
	locales: e.locales ?? f?.locales ?? te,
	rewrite: e.rewrite ?? p?.rewrite,
	domains: e.domains ?? p?.domains
}), ne = (e, t) => !!e && (t ?? f.locales).includes(e), re = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, oe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _ = {
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
}, v = (e = _) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!oe) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, se = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !oe && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
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
}, ce = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = g(t);
	if (!n || !r) return n;
	let a = d(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ne(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ne(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, le = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = g(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = h(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ce(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return v() ?? t;
}, y, b, x = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (b === void 0 || y !== e) && (y = e, b = le()), b;
}, S = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProductsHeader-wrapper-131uhq-en-Dtef3jty.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/zh.json").then((e) => e.default)
}, C = x(), w = S[C];
typeof window < "u" && typeof w == "function" && w().then((e) => {
	S.__intlayerPreloaded = {
		locale: C,
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
}, T = /* @__PURE__ */ new Map(), de = (e, t) => (T.has(e) || T.set(e, ue(t)), T.get(e).read()), fe = ({ children: e, value: t, additionalProps: n }) => {
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
}, ge = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, _e = (e, t, n) => `${e}_${t}_${he(n)}`, ve = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= ge && r.clear(), r.set(t, n), n;
}, ye = "translation", k = "insertion", be = "object", xe = "array", A = "markdown", j = "html", M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => M(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, {
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
			n[r] = M(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = M(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, N = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), P = "default", Se = /[^A-Za-z0-9._&=-]/g, F = /[^A-Za-z0-9._-]/g, Ce = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, I = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ce);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, L = (e) => e === void 0 ? P : typeof e == "string" ? I(e, Se) : Object.keys(e).sort().map((t) => `${I(t, F)}=${I(String(e[t]), F)}`).join("&"), R = (e) => Array.isArray(e) ? e.length === 0 ? [P] : e.map(L) : [L(e)], we = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? P : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? P : we(R(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Te(e, n, t, s)).map((t) => De(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ke = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ae = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? R(n).join(",") : String(n)}`;
}).join("|") : "", z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (z(e) && z(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : B(e[r], t[r]));
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => B(e, t));
}, V = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Me = (e) => {
	if (typeof e == "string") return e;
	if (V(e)) return e.nodeType === "html" ? e[j] : e[A];
}, Ne = (e, t) => {
	if (typeof e == "string") return t;
	if (V(e)) {
		let n = e.nodeType === "html" ? j : A;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, H = (e, t, n, r, i) => {
	let a = Ne(e, N(Me(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, W = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? U : {
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
}, G = U, Pe = (e) => U, K = U, Fe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => H(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = N(i, e);
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
}, q = U, J = U, Y = (e) => U, X = U, Ie = (e, t = !0) => [
	W(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	G,
	K,
	Fe,
	Y(e ?? f.defaultLocale),
	X,
	q,
	J
], Le = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), Re = (e, t, n) => {
	let { locale: r, selector: i } = ke(t), a = _e(r ?? f.defaultLocale, Ae(i), n), o = ve(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ie(r), c = Oe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Le(e.content, t, s);
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
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
	transform: (e, { plugins: t, ...n }) => fe({
		...n,
		value: n.children,
		children: n.children
	})
}, We = U, Ge = (t, r) => {
	let i = He(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => H(e, i, n, t.plugins, r);
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
}, qe = U, Je = U, Z = /* @__PURE__ */ new Map(), Ye = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		W(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		G,
		Pe(e ?? f.defaultLocale),
		K,
		Y(e ?? f.defaultLocale),
		X,
		q,
		J,
		Ue,
		We,
		Ke,
		qe,
		Je
	];
	return Z.set(n, r), r;
}, Xe = (e, t) => Re(e, t, Ye(typeof t == "object" && t ? t.locale : t)), Ze = v(_), Qe = (e, t) => se(e, {
	..._,
	isCookieEnabled: t
}), $e = () => {
	let { locale: e } = i(Q) ?? {}, t = o(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, et = ({ children: e }) => ($e(), e), tt = () => {
	let { locale: e } = i(Q) ?? {}, t = o(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, nt = ({ children: e }) => (tt(), e), rt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: Ze ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), it = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: d } = f ?? {}, [p, m] = s(e ?? Ze ?? t ?? d);
	a(() => {
		e && e !== p && m(e);
	}, [e]), a(() => {
		rt();
	}, []);
	let h = i ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Qe(e, c);
		}
	}), ee = re(p);
	return l(Q.Provider, {
		value: {
			locale: ee,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, at = ({ children: e, ...t }) => u(it, {
	...t,
	children: [
		l(et, {}),
		l(nt, {}),
		e
	]
}), ot = (e, t, n) => {
	let { locale: r, variant: a } = i(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? f.defaultLocale, l = ze(e, c);
	if (l) return Xe(l, c);
	let u = e;
	return Xe(de(`${String(t)}.${c}`, u[c]?.()), c);
}, $ = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProductsHeader-wrapper-131uhq-en-Dtef3jty.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/zh.json").then((e) => e.default)
}, st = x(), ct = $[st];
typeof window < "u" && typeof ct == "function" && ct().then((e) => {
	$.__intlayerPreloaded = {
		locale: st,
		dictionary: e
	};
}, () => void 0);
var lt = () => {
	let e = ot($, "mock-banner");
	return l("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.a
	});
};
function ut() {
	let e = ot(S, "products-header");
	return u(c, { children: [
		l(lt, {}),
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
function dt({ children: e }) {
	return l(at, {
		locale: "en",
		children: e
	});
}
function ft() {
	return l(dt, { children: l(ut, {}) });
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
}), s = "products-header", c = {
	b: "Tools and services to streamline your internationalization workflow.",
	a: "Products"
}, l = {
	key: s,
	content: c
};
export { n, o as t };
