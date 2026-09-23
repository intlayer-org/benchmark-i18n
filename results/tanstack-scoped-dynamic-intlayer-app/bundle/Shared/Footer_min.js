import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { Link as d, useParams as f } from "@tanstack/react-router";
import { jsxDEV as p } from "react/jsx-dev-runtime";
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
}, ne = "__intlayerPreloaded", re = ["en"], _ = (e = {}) => ({
	defaultLocale: h?.defaultLocale ?? "en",
	mode: g?.mode ?? "prefix-no-default",
	locales: h?.locales ?? re,
	rewrite: g?.rewrite,
	domains: g?.domains,
	...e
}), ie = (e, t) => !!e && (t ?? h.locales).includes(e), ae = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, oe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, se = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = oe(n.expires);
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
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!v) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ce = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !v && g.storage.cookies) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: oe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, se(r, e, i));
			} catch {}
		}
	}
}, le = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = _(t);
	if (!n || !r) return n;
	let a = m(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ie(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ie(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ue = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = le(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return b() ?? t;
}, x, S, de = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (S === void 0 || x !== e) && (x = e, S = ue()), S;
}, C = {
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
}, w = de(), T = C[w];
typeof window < "u" && typeof T == "function" && T().then((e) => {
	C.__intlayerPreloaded = {
		locale: w,
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
}, E = /* @__PURE__ */ new Map(), pe = (e, t) => (E.has(e) || E.set(e, fe(t)), E.get(e).read()), me = ({ children: e, value: t, additionalProps: n }) => {
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
}, he = /* @__PURE__ */ new WeakMap(), ge = 0, _e = (e) => {
	if (!e) return "base";
	let t = he.get(e);
	if (t) return t;
	ge += 1;
	let n = `p${ge}`;
	return he.set(e, n), n;
}, ve = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, ye = (e, t, n) => `${e}_${t}_${_e(n)}`, be = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= ve && r.clear(), r.set(t, n), n;
}, xe = "translation", A = "insertion", Se = "object", Ce = "array", j = "markdown", M = "html", N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => N(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Ce,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Se,
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
}, P = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), F = "default", we = /[^A-Za-z0-9._&=-]/g, I = /[^A-Za-z0-9._-]/g, Te = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, L = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Te);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, R = (e) => e === void 0 ? F : typeof e == "string" ? L(e, we) : Object.keys(e).sort().map((t) => `${L(t, I)}=${L(String(e[t]), I)}`).join("&"), z = (e) => Array.isArray(e) ? e.length === 0 ? [F] : e.map(R) : [R(e)], Ee = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? F : e[0] ?? "default";
}, De = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Oe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ke = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ae = (e, t) => {
	if (!Oe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? F : Ee(z(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => De(e, n, t, s)).map((t) => ke(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, je = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Me = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
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
}, Ne = (e, t, n) => {
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
}, Pe = (e) => {
	if (typeof e == "string") return e;
	if (H(e)) return e.nodeType === "html" ? e[M] : e[j];
}, Fe = (e, t) => {
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
	let a = Fe(e, P(Pe(e), t));
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
					type: xe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ne(o, e, t);
	}
}, K = W, Ie = (e) => W, q = W, Le = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
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
}, J = W, Y = W, X = (e) => W, Re = W, ze = (e, t = !0) => [
	G(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	K,
	q,
	Le,
	X(e ?? h.defaultLocale),
	Re,
	J,
	Y
], Be = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), Ve = (e, t, n) => {
	let { locale: r, selector: i } = je(t), a = ye(r ?? h.defaultLocale, Me(i), n), o = be(e, a);
	if (o.hit) return o.content;
	let s = n ?? ze(r), c = Ae(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Be(e.content, t, s);
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, He = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ne];
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
	transform: (e, { plugins: t, ...n }) => me({
		...n,
		value: n.children,
		children: n.children
	})
}, qe = W, Je = (t, r) => {
	let i = Ge(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ye = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
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
					let a = Je(i, e);
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
}, Xe = W, Ze = W, Z = /* @__PURE__ */ new Map(), Qe = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		G(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		K,
		Ie(e ?? h.defaultLocale),
		q,
		X(e ?? h.defaultLocale),
		Re,
		J,
		Y,
		Ke,
		qe,
		Ye,
		Xe,
		Ze
	];
	return Z.set(n, r), r;
}, $e = (e, t) => Ve(e, t, Qe(typeof t == "object" && t ? t.locale : t)), et = b(y), tt = (e, t) => ce(e, {
	...y,
	isCookieEnabled: t
}), nt = () => {
	let { locale: e } = i(Q) ?? {}, t = o(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, rt = ({ children: e }) => (nt(), e), it = () => {
	let { locale: e } = i(Q) ?? {}, t = o(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, at = ({ children: e }) => (it(), e), ot = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: et ?? h?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), st = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: d } = h ?? {}, [f, p] = s(e ?? et ?? t ?? d);
	a(() => {
		e && e !== f && p(e);
	}, [e]), a(() => {
		ot();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), tt(e, c);
		}
	}), g = ae(f);
	return l(Q.Provider, {
		value: {
			locale: g,
			setLocale: m,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, ct = ({ children: e, ...t }) => u(st, {
	...t,
	children: [
		l(rt, {}),
		l(at, {}),
		e
	]
}), lt = (e, t, n) => {
	let { locale: r, variant: a } = i(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? h.defaultLocale, l = He(e, c);
	if (l) return $e(l, c);
	let u = e;
	return $e(pe(`${String(t)}.${c}`, u[c]?.()), c);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/intlayer-app/src/components/Footer.tsx";
function ut() {
	let e = lt(C, "footer"), t = f({ strict: !1 }).locale ?? "en", n = [
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
	return p("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: p("div", {
			className: "container py-8",
			children: [p("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					p("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}, void 0, !1, {
						fileName: $,
						lineNumber: 33,
						columnNumber: 13
					}, this), p("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					}, void 0, !1, {
						fileName: $,
						lineNumber: 36,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 32,
						columnNumber: 11
					}, this),
					p("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}, void 0, !1, {
						fileName: $,
						lineNumber: 41,
						columnNumber: 13
					}, this), p("ul", {
						className: "space-y-1",
						children: n.map((e) => p("li", { children: e.isInternal ? p(d, {
							preload: !1,
							to: e.to,
							params: { locale: t },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 48,
							columnNumber: 21
						}, this) : p("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 57,
							columnNumber: 21
						}, this) }, e.label.value, !1, {
							fileName: $,
							lineNumber: 46,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: $,
						lineNumber: 44,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 40,
						columnNumber: 11
					}, this),
					p("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}, void 0, !1, {
						fileName: $,
						lineNumber: 71,
						columnNumber: 13
					}, this), p("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					}, void 0, !1, {
						fileName: $,
						lineNumber: 74,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 70,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 31,
				columnNumber: 9
			}, this), p("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			}, void 0, !1, {
				fileName: $,
				lineNumber: 79,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var dt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/intlayer-app/scripts/Wrapper.tsx";
function ft({ children: e }) {
	return p(ct, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: dt,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/intlayer-app/src/components/Footer.wrapper.tsx";
function mt() {
	return p(ft, { children: p(ut, {}, void 0, !1, {
		fileName: pt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: pt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { mt as default };
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
