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
}, g = "__intlayerPreloaded", ee = ["en"], _ = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? f?.defaultLocale ?? "en",
	mode: e.mode ?? p?.mode ?? "prefix-no-default",
	locales: e.locales ?? f?.locales ?? ee,
	rewrite: e.rewrite ?? p?.rewrite,
	domains: e.domains ?? p?.domains
}), te = (e, t) => !!e && (t ?? f.locales).includes(e), ne = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, v = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, re = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = v(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var b = {
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
}, ie = (e = b) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!y) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !y && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: v(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, re(r, e, i));
			} catch {}
		}
	}
}, oe = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = _(t);
	if (!n || !r) return n;
	let a = d(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return te(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (te(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, se = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = h(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = oe(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return ie() ?? t;
}, x, S, ce = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (S === void 0 || x !== e) && (x = e, S = se()), S;
}, C = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/de.json").then((e) => e.default),
	en: () => import("./intlayer-ProductsGrid-wrapper-1o3y9l-en-C9GIQdIp.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/zh.json").then((e) => e.default)
}, w = ce(), T = C[w];
typeof window < "u" && typeof T == "function" && T().then((e) => {
	C.__intlayerPreloaded = {
		locale: w,
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
}, E = /* @__PURE__ */ new Map(), ue = (e, t) => (E.has(e) || E.set(e, le(t)), E.get(e).read()), de = ({ children: e, value: t, additionalProps: n }) => {
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
}, D = /* @__PURE__ */ new WeakMap(), O = 0, fe = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, pe = 256, k = /* @__PURE__ */ new WeakMap(), A = (e) => typeof e == "object" && !!e, me = (e, t, n) => `${e}_${t}_${fe(n)}`, he = (e, t) => {
	if (!A(e)) return { hit: !1 };
	let n = k.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, j = (e, t, n) => {
	if (!A(e)) return n;
	let r = k.get(e);
	return r || (r = /* @__PURE__ */ new Map(), k.set(e, r)), r.size >= pe && r.clear(), r.set(t, n), n;
}, ge = "translation", M = "insertion", _e = "object", ve = "array", N = "markdown", P = "html", F = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => F(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => F(e, {
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
			n[r] = F(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = F(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, I = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), L = "default", ye = /[^A-Za-z0-9._&=-]/g, R = /[^A-Za-z0-9._-]/g, be = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, z = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, be);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, B = (e) => e === void 0 ? L : typeof e == "string" ? z(e, ye) : Object.keys(e).sort().map((t) => `${z(t, R)}=${z(String(e[t]), R)}`).join("&"), V = (e) => Array.isArray(e) ? e.length === 0 ? [L] : e.map(B) : [B(e)], xe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? L : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? L : xe(V(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Se(e, n, t, s)).map((t) => we(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ee = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, De = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? V(n).join(",") : String(n)}`;
}).join("|") : "", H = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, U = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (H(e) && H(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : U(e[r], t[r]));
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => U(e, t));
}, W = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ke = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[P] : e[N];
}, Ae = (e, t) => {
	if (typeof e == "string") return t;
	if (W(e)) {
		let n = e.nodeType === "html" ? P : N;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, G = (e, t, n, r, i) => {
	let a = Ae(e, I(ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, q = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
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
}, J = K, je = (e) => K, Y = K, Me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: M }], i = e[M], a = {
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
					let a = I(i, e);
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
}, X = K, Z = K, Ne = (e) => K, Pe = K, Fe = (e, t = !0) => [
	q(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	J,
	Y,
	Me,
	Ne(e ?? f.defaultLocale),
	Pe,
	X,
	Z
], Ie = (e, t, n = []) => F(e, {
	...t,
	plugins: n
}), Le = (e, t, n) => {
	let { locale: r, selector: i } = Ee(t), a = me(r ?? f.defaultLocale, De(i), n), o = he(e, a);
	if (o.hit) return o.content;
	let s = n ?? Fe(r), c = Te(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Ie(e.content, t, s);
	};
	return c === null ? j(e, a, null) : Array.isArray(c) ? j(e, a, c.map(l)) : j(e, a, l(c));
}, Re = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[g];
	if (n && n.locale === t) return n.dictionary;
}, ze = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Be = /\{\{\s*(.*?)\s*\}\}/g, Ve = (e, t = {}) => {
	if (!Object.values(t).some(ze)) return {
		isSimple: !0,
		parts: e.replace(Be, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Be), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, He = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => de({
		...n,
		value: n.children,
		children: n.children
	})
}, Ue = K, We = (t, r) => {
	let i = Ve(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ge = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: M }], i = e[M], a = {
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
					let a = We(i, e);
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
}, Ke = K, qe = K, Q = /* @__PURE__ */ new Map(), Je = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		q(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		J,
		je(e ?? f.defaultLocale),
		Y,
		Ne(e ?? f.defaultLocale),
		Pe,
		X,
		Z,
		He,
		Ue,
		Ge,
		Ke,
		qe
	];
	return Q.set(n, r), r;
}, Ye = (e, t) => Le(e, t, Je(typeof t == "object" && t ? t.locale : t)), Xe = ie(b), Ze = (e, t) => ae(e, {
	...b,
	isCookieEnabled: t
}), Qe = () => {
	let { locale: e } = i($) ?? {}, t = o(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, $e = ({ children: e }) => (Qe(), e), et = () => {
	let { locale: e } = i($) ?? {}, t = o(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, tt = ({ children: e }) => (et(), e), nt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = t({
	locale: Xe ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), rt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: d } = f ?? {}, [p, m] = s(e ?? Xe ?? t ?? d);
	a(() => {
		e && e !== p && m(e);
	}, [e]), a(() => {
		nt();
	}, []);
	let h = i ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Ze(e, c);
		}
	}), g = ne(p);
	return l($.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, it = ({ children: e, ...t }) => u(rt, {
	...t,
	children: [
		l($e, {}),
		l(tt, {}),
		e
	]
}), at = (e, t, n) => {
	let { locale: r, variant: a } = i($) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? f.defaultLocale, l = Re(e, c);
	if (l) return Ye(l, c);
	let u = e;
	return Ye(ue(`${String(t)}.${c}`, u[c]?.()), c);
};
function ot() {
	let e = at(C, "products-grid"), t = [
		{
			name: e.e.value,
			desc: e.r.value,
			price: e.j.value
		},
		{
			name: e.f.value,
			desc: e.c.value,
			price: e.o.value
		},
		{
			name: e.g.value,
			desc: e.m.value,
			price: e.i.value
		},
		{
			name: e.l.value,
			desc: e.a.value,
			price: e.q.value
		},
		{
			name: e.s.value,
			desc: e.d.value,
			price: e.n.value
		},
		{
			name: e.h.value,
			desc: e.b.value,
			price: e.p.value
		}
	];
	return l("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((t) => u("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [u("div", { children: [l("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: t.name
			}), l("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: t.desc
			})] }), u("div", {
				className: "flex items-center justify-between",
				children: [l("span", {
					className: "text-sm font-bold text-primary",
					children: t.price
				}), l("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e.k
				})]
			})]
		}, t.name))
	});
}
function st({ children: e }) {
	return l(it, {
		locale: "en",
		children: e
	});
}
function ct() {
	return l(st, { children: l(ot, {}) });
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
}), n = "products-grid", r = {
	e: "Benchmark CLI",
	r: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	f: "Benchmark Cloud",
	c: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	g: "Benchmark Enterprise",
	m: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	i: "Contact Us",
	l: "Migration Assistant",
	a: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	s: "Translation QA",
	d: "Automated quality checks for missing translations, pluralization issues, and context errors.",
	h: "Bundle Optimizer",
	b: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	k: "Learn More",
	j: "Free",
	o: "$29/mo",
	q: "$99 one-time",
	n: "$19/mo",
	p: "$49/mo"
}, i = {
	key: n,
	content: r
};
export { t };
