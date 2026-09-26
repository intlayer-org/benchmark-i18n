import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { usePathname as ee, useRouter as te } from "next/navigation.js";
import ne from "next/link";
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
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, g = (e, t = m?.locales) => {
	let n = p(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, re = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ie = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && re(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ae = (e, t, n) => (n ?? h?.rewrite, e), oe = "__intlayerPreloaded", se = ["en"], _ = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? se,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), v = (e, t) => !!e && (t ?? m.locales).includes(e), ce = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = _(t);
	return !e || !v(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, le = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), ue = (e, t = m?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = _(n), c = g(e, a), l = new URL(c, "http://e.com"), u = le(ae(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = ce(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, y = (e, t = m?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = _(n), a = p(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${ue(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, de = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, fe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = de(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, pe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, x = (e = b) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!pe) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, me = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !pe && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: de(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, fe(r, e, i));
			} catch {}
		}
	}
}, he = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = _(t);
	if (!n || !r) return n;
	let a = p(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return v(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (v(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ge = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ie(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = he(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return x() ?? t;
}, S, C, _e = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (C === void 0 || S !== e) && (S = e, C = ge()), C;
}, w = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((e) => e.default),
	en: () => import("./intlayer-Footer-wrapper-xghv9t-en-C5Zk03S3.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((e) => e.default)
}, T = _e(), E = w[T];
typeof window < "u" && typeof E == "function" && E().then((e) => {
	w.__intlayerPreloaded = {
		locale: T,
		dictionary: e
	};
}, () => void 0);
var ve = (e) => {
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
}, D = /* @__PURE__ */ new Map(), ye = (e, t) => (D.has(e) || D.set(e, ve(t)), D.get(e).read()), be = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : d(u, { children: e });
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
}, O = /* @__PURE__ */ new WeakMap(), k = 0, xe = (e) => {
	if (!e) return "base";
	let t = O.get(e);
	if (t) return t;
	k += 1;
	let n = `p${k}`;
	return O.set(e, n), n;
}, Se = 256, A = /* @__PURE__ */ new WeakMap(), j = (e) => typeof e == "object" && !!e, Ce = (e, t, n) => `${e}_${t}_${xe(n)}`, we = (e, t) => {
	if (!j(e)) return { hit: !1 };
	let n = A.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, M = (e, t, n) => {
	if (!j(e)) return n;
	let r = A.get(e);
	return r || (r = /* @__PURE__ */ new Map(), A.set(e, r)), r.size >= Se && r.clear(), r.set(t, n), n;
}, Te = "translation", N = "insertion", Ee = "object", De = "array", P = "markdown", F = "html", I = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => I(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => I(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: De,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Ee,
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
}, L = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), R = "default", Oe = /[^A-Za-z0-9._&=-]/g, z = /[^A-Za-z0-9._-]/g, ke = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, B = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ke);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, V = (e) => e === void 0 ? R : typeof e == "string" ? B(e, Oe) : Object.keys(e).sort().map((t) => `${B(t, z)}=${B(String(e[t]), z)}`).join("&"), H = (e) => Array.isArray(e) ? e.length === 0 ? [R] : e.map(V) : [V(e)], Ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? R : e[0] ?? "default";
}, je = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Me = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ne = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Pe = (e, t) => {
	if (!Me(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? R : Ae(H(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => je(e, n, t, s)).map((t) => Ne(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ie = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
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
}, Le = (e, t, n) => {
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
}, Re = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[F] : e[P];
}, ze = (e, t) => {
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
	let a = ze(e, L(Re(e), t));
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
					type: Te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Le(o, e, t);
	}
}, Y = q, Be = (e) => q, X = q, Ve = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
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
}, He = q, Ue = q, We = (e) => q, Ge = q, Ke = (e, t = !0) => [
	J(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Y,
	X,
	Ve,
	We(e ?? m.defaultLocale),
	Ge,
	He,
	Ue
], qe = (e, t, n = []) => I(e, {
	...t,
	plugins: n
}), Je = (e, t, n) => {
	let { locale: r, selector: i } = Fe(t), a = Ce(r ?? m.defaultLocale, Ie(i), n), o = we(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ke(r), c = Pe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return qe(e.content, t, s);
	};
	return c === null ? M(e, a, null) : Array.isArray(c) ? M(e, a, c.map(l)) : M(e, a, l(c));
}, Ye = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[oe];
	if (n && n.locale === t) return n.dictionary;
}, Xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ze = /\{\{\s*(.*?)\s*\}\}/g, Qe = (e, t = {}) => {
	if (!Object.values(t).some(Xe)) return {
		isSimple: !0,
		parts: e.replace(Ze, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ze), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, $e = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => be({
		...n,
		value: n.children,
		children: n.children
	})
}, et = q, tt = (t, r) => {
	let i = Qe(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, nt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
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
					let a = tt(i, e);
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
}, rt = q, it = q, Z = /* @__PURE__ */ new Map(), at = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		J(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		Y,
		Be(e ?? m.defaultLocale),
		X,
		We(e ?? m.defaultLocale),
		Ge,
		He,
		Ue,
		$e,
		et,
		nt,
		rt,
		it
	];
	return Z.set(n, r), r;
}, ot = (e, t) => Je(e, t, at(typeof t == "object" && t ? t.locale : t)), st = x(b), ct = (e, t) => me(e, {
	...b,
	isCookieEnabled: t
}), Q = t({
	locale: st ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), lt = (e, t, n) => {
	let { locale: r, variant: i } = a(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? m.defaultLocale, l = Ye(e, c);
	if (l) return ot(l, c);
	let u = e;
	return ot(ye(`${String(t)}.${c}`, u[c]?.()), c);
}, { defaultLocale: ut, locales: $ } = m ?? {}, dt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Q) ?? {};
	return {
		locale: n,
		defaultLocale: ut,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), ct(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, ft = () => {
	let e = ee(), [t, n] = l("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => g(r), [r]);
}, pt = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = te(), o = ft();
	return {
		...dt({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = y(o, n, { currentDomain: void 0 });
				if (typeof e == "function") {
					e({
						locale: n,
						path: i
					});
					return;
				}
				e === "replace" && r(i), e === "push" && a(i), t?.(n);
			}, [
				r,
				a,
				o,
				e,
				t
			]),
			isCookieEnabled: n
		}),
		pathWithoutLocale: o
	};
}, mt = (e) => /^https?:\/\//.test(e ?? ""), ht = ({ href: e, children: t, ...n }) => {
	let { locale: r } = pt(), i = mt(e.toString()), a = e && !i ? y(e.toString(), r) : e;
	return d(ne, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	});
};
function gt() {
	let e = lt(w, "footer"), t = [
		{
			label: e.f,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e.h,
			href: "/about",
			isInternal: !0
		},
		{
			label: e.e,
			href: "/contact",
			isInternal: !0
		}
	];
	return d("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: f("div", {
			className: "container py-8",
			children: [f("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}), d("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					})] }),
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}), d("ul", {
						className: "space-y-1",
						children: t.map((e) => d("li", { children: e.isInternal ? d(ht, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : d("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label.value))
					})] }),
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}), d("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					})] })
				]
			}), d("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			})]
		})
	});
}
function _t() {
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
function vt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function yt({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		vt("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		_t();
	}, []), e;
}
function bt({ children: e }) {
	return d(yt, {
		locale: "en",
		children: e
	});
}
function xt() {
	return d(bt, { children: d(gt, {}) });
}
export { xt as default };
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
