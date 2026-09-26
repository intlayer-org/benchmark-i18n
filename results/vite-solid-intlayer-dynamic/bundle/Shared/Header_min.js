import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, setAttribute as a, template as o } from "solid-js/web";
import { For as s, createContext as c, createEffect as l, createMemo as u, createRenderEffect as d, createResource as f, createSignal as p, lazy as m, onMount as h, untrack as ee, useContext as g } from "solid-js";
import { A as _, useLocation as te, useNavigate as ne, useParams as v } from "@solidjs/router";
var re = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), y = {
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
}, b = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ie = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ae = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ie(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, oe = ["en"], se = "__intlayerPreloaded", ce = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? y?.defaultLocale ?? "en",
	mode: e.mode ?? b?.mode ?? "prefix-no-default",
	locales: e.locales ?? y?.locales ?? oe,
	rewrite: e.rewrite ?? b?.rewrite,
	domains: e.domains ?? b?.domains
}), le = (e, t) => !!e && (t ?? y.locales).includes(e), ue = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = y;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ue) for (let t = 0; t < (b.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(b.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, de = !1, fe, pe = () => typeof window > "u" ? S(x) : (de ||= (fe = S(x), !0), fe), me = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ce(t);
	if (!n || !r) return n;
	let a = re(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return le(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (le(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, he = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = ce(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ae(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = me(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return S() ?? t;
}, C, w, T = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (w === void 0 || C !== e) && (C = e, w = he()), w;
}, E = {
	de: () => import("./intlayer-Header-1xfa8v-de-BJuKoHgh.js").then((e) => e.n).then((e) => e.default),
	en: () => import("./intlayer-Header-1xfa8v-en-BdIcifLQ.js").then((e) => e.n).then((e) => e.default),
	es: () => import("./intlayer-Header-1xfa8v-es-BKOsqsBM.js").then((e) => e.n).then((e) => e.default),
	fr: () => import("./intlayer-Header-1xfa8v-fr-B2y4-0X7.js").then((e) => e.n).then((e) => e.default),
	it: () => import("./intlayer-Header-1xfa8v-it-D8inadiW.js").then((e) => e.n).then((e) => e.default),
	ja: () => import("./intlayer-Header-1xfa8v-ja-BhjvwXuP.js").then((e) => e.n).then((e) => e.default),
	ko: () => import("./intlayer-Header-1xfa8v-ko-DOJHUj_H.js").then((e) => e.n).then((e) => e.default),
	pt: () => import("./intlayer-Header-1xfa8v-pt-DyKfHkDv.js").then((e) => e.n).then((e) => e.default),
	ru: () => import("./intlayer-Header-1xfa8v-ru-BnS4cUeC.js").then((e) => e.n).then((e) => e.default),
	zh: () => import("./intlayer-Header-1xfa8v-zh-DrXkDC7o.js").then((e) => e.n).then((e) => e.default)
}, D = T(), O = E[D];
typeof window < "u" && typeof O == "function" && O().then((e) => {
	E.__intlayerPreloaded = {
		locale: D,
		dictionary: e
	};
}, () => void 0);
var k = /* @__PURE__ */ new Map(), ge = (e, t) => Object.create(new Proxy(e, {
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
}), _e = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = k.get(t);
	i || (i = /* @__PURE__ */ new Map(), k.set(t, i));
	let a = i.get(r);
	return a || (a = ge(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ve = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, _e(t, Array.prototype)), r;
}, A = /* @__PURE__ */ new WeakMap(), j = 0, ye = (e) => {
	if (!e) return "base";
	let t = A.get(e);
	if (t) return t;
	j += 1;
	let n = `p${j}`;
	return A.set(e, n), n;
}, be = 256, M = /* @__PURE__ */ new WeakMap(), N = (e) => typeof e == "object" && !!e, xe = (e, t, n) => `${e}_${t}_${ye(n)}`, Se = (e, t) => {
	if (!N(e)) return { hit: !1 };
	let n = M.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, P = (e, t, n) => {
	if (!N(e)) return n;
	let r = M.get(e);
	return r || (r = /* @__PURE__ */ new Map(), M.set(e, r)), r.size >= be && r.clear(), r.set(t, n), n;
}, Ce = "translation", we = "object", Te = "array", F = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), I = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, I);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => I(e, F(t, e, {
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
			n[r] = I(e[r], F(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = I(e[r], F(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !L(e) || !L(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? R(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ee = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => R(e, t));
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ee(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Ce,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, De = z, W = z, Oe = z, ke = (e) => z, Ae = z, je = (e, t = !0) => [
	B(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	V,
	H(e ?? y.defaultLocale),
	U,
	De,
	ke(e ?? y.defaultLocale),
	Ae,
	W,
	Oe
].filter((e) => e !== z), Me = (e, t, n = []) => I(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), Ne = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = xe(r ?? y.defaultLocale, "", n), o = Se(e, a);
	if (o.hit) return o.content;
	let s = n ?? je(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return Me(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? P(e, a, null) : Array.isArray(c) ? P(e, a, c.map(l)) : P(e, a, l(c));
}, Pe = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[se];
	if (n && n.locale === t) return n.dictionary;
}, K = null, Fe = null;
K?.catch(() => {}), Fe?.catch(() => {});
var Ie = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ve({
		value: t.children,
		children: t.children
	})
}, Le = z, Re = z;
m(() => K.then((e) => ({ default: e.MarkdownRenderer }))), m(() => K.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ze = z;
m(() => Fe.then((e) => ({ default: e })));
var Be = z, q = /* @__PURE__ */ new Map(), Ve = (e, t = !0) => {
	let n = `${e ?? y.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		Ie,
		B(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
		V,
		H(e ?? y.defaultLocale),
		U,
		ke(e ?? y.defaultLocale),
		Ae,
		W,
		Oe,
		Le,
		Re,
		ze,
		Be
	].filter((e) => e !== z);
	return q.set(n, r), r;
}, He = (e, t) => Ne(e, t, Ve(typeof t == "object" && t ? t.locale : t)), Ue = pe, We = c({
	locale: () => Ue() ?? y?.defaultLocale,
	setLocale: () => null
}), J = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Ge = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Ke = Symbol("LOADABLE_SETTLED_VALUE"), Y = /* @__PURE__ */ new Map(), qe = (e) => typeof e == "string" ? e : e.cacheKey, X = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Je = (e, t) => typeof e == "function" ? e(t) : e, Ye = (e, t) => {
	let n = qe(e), r = Y.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Je(t, e).then((e) => (Y.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw Y.delete(n), e;
	});
	return Y.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Xe = (e, t) => {
	let n = qe(e);
	Y.has(n) || Y.set(n, {
		status: "success",
		value: t
	});
}, Ze = (e, t) => typeof t == "function" ? t.bind(e) : t, Qe = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === J.toString ? () => "" : e === J.valueOf ? () => void 0 : e === J.value ? "" : Ge, $e = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === J.promiseThen) return;
			let a = X(e(), n);
			if (i === Ke) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Ze(a, Reflect.get(Object(a), i));
			let o = Qe(i);
			return o === Ge ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = X(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $e(() => {
				let t = X(e(), n);
				if (typeof t == "function") return ee(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, et = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Ke];
}, tt = (e, t) => {
	let [n] = f(() => typeof e == "function" ? e() : e, (e) => Ye(e, t));
	return d(() => {
		n();
	}), $e(() => n());
}, nt = (e, t) => {
	let n = g(We) ?? {}, r = u(() => {
		let r = n?.locale?.();
		return He(et(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, rt = (e, t, n) => {
	let { locale: r } = g(We) ?? {}, i = y.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, u = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, d = Pe(o, c());
	return d && Xe(l(), d), nt(tt(l, u), s);
};
function it(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), h(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var at = [
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
], ot = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, st = o("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), ct = o("<option>");
function lt() {
	let t = v(), i = ne(), a = te(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		i(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var i = st(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(s, {
			each: at,
			children: (e) => (() => {
				var t = ct();
				return t.value = e, r(t, () => ot(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var Z = {
	de: () => import("./intlayer-Header-1xfa8v-de-BJuKoHgh.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-Header-1xfa8v-en-BdIcifLQ.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-Header-1xfa8v-es-BKOsqsBM.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-Header-1xfa8v-fr-B2y4-0X7.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-Header-1xfa8v-it-D8inadiW.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-Header-1xfa8v-ja-BhjvwXuP.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-Header-1xfa8v-ko-DOJHUj_H.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-Header-1xfa8v-pt-DyKfHkDv.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-Header-1xfa8v-ru-BnS4cUeC.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-Header-1xfa8v-zh-DrXkDC7o.js").then((e) => e.t).then((e) => e.default)
}, ut = T(), Q = Z[ut];
typeof window < "u" && typeof Q == "function" && Q().then((e) => {
	Z.__intlayerPreloaded = {
		locale: ut,
		dictionary: e
	};
}, () => void 0);
var dt = o("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function ft() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function pt() {
	let e = rt(Z, "theme-toggle"), [t, i] = p("auto");
	h(() => {
		let e = ft();
		i(e), $(e);
	}), l(() => {
		if (t() !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	});
	function o() {
		let e = t(), n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		i(n), $(n), window.localStorage.setItem("theme", n);
	}
	let s = () => t() === "auto" ? e().d.value : `Theme mode: ${t()}. Click to switch mode.`, c = () => t() === "auto" ? e().a.value : t() === "dark" ? e().b.value : e().c.value;
	return (() => {
		var e = dt();
		return e.$$click = o, r(e, c), n((t) => {
			var n = s(), r = s();
			return n !== t.e && a(e, "aria-label", t.e = n), r !== t.t && a(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
t(["click"]);
var mt = o("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), ht = o("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), gt = o("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function _t(e) {
	return (() => {
		var t = mt();
		return n(() => a(t, "class", e.class)), t;
	})();
}
function vt() {
	let t = rt(E, "header");
	it(t().f.value);
	let [n, a] = p(!1), o = v(), c = () => o.locale ?? "en", l = () => [
		{
			to: `/${c()}/products`,
			label: t().k.value
		},
		{
			to: `/${c()}/pricing`,
			label: t().j.value
		},
		{
			to: `/${c()}/team`,
			label: t().m.value
		},
		{
			to: `/${c()}/blog`,
			label: t().a.value
		},
		{
			to: `/${c()}/careers`,
			label: t().b.value
		},
		{
			to: `/${c()}/faq`,
			label: t().d.value
		},
		{
			to: `/${c()}/contact`,
			label: t().c.value
		},
		{
			to: `/${c()}/settings`,
			label: t().l.value
		}
	];
	return (() => {
		var o = ht(), u = o.firstChild.firstChild, d = u.firstChild, f = d.firstChild, p = f.firstChild, m = u.nextSibling, h = m.firstChild.firstChild;
		return r(u, e(_, {
			get href() {
				return `/${c()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), d), r(d, e(_, {
			get href() {
				return `/${c()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return t().g;
			}
		}), f), r(d, e(_, {
			get href() {
				return `/${c()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return t().h;
			}
		}), f), p.$$click = () => a(!n()), p.addEventListener("mouseleave", () => a(!1)), p.addEventListener("mouseenter", () => a(!0)), r(p, () => t().i, null), r(p, e(_t, { get class() {
			return `transition-transform ${n() ? "rotate-180" : ""}`;
		} }), null), r(f, (() => {
			var t = i(() => !!n());
			return () => t() && (() => {
				var t = gt(), n = t.firstChild;
				return t.addEventListener("mouseleave", () => a(!1)), t.addEventListener("mouseenter", () => a(!0)), r(n, e(s, {
					get each() {
						return l();
					},
					children: (t) => e(_, {
						get href() {
							return t.to;
						},
						class: "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => a(!1),
						get children() {
							return t.label;
						}
					})
				})), t;
			})();
		})(), null), r(h, () => t().e), r(m, e(lt, {}), null), r(m, e(pt, {}), null), o;
	})();
}
t(["click"]);
export { vt as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "Header",
	k: "Produkte",
	j: "Preise",
	m: "Team",
	a: "Blog",
	b: "Karriere",
	d: "FAQ",
	c: "Kontakt",
	l: "Einstellungen",
	g: "Home",
	h: "Methodik",
	i: "Testseiten",
	e: "Zu GitHub"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
	a: "Design: Auto",
	b: "Design: Dunkel",
	c: "Design: Hell"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "Header",
	k: "Products",
	j: "Pricing",
	m: "Team",
	a: "Blog",
	b: "Careers",
	d: "FAQ",
	c: "Contact",
	l: "Settings",
	g: "Home",
	h: "Methodology",
	i: "Mock Pages",
	e: "Go to GitHub"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "Theme mode: auto (system). Click to switch to light mode.",
	a: "Theme: Auto",
	b: "Theme: Dark",
	c: "Theme: Light"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "Encabezado",
	k: "Productos",
	j: "Precios",
	m: "Equipo",
	a: "Blog",
	b: "Carreras",
	d: "FAQ",
	c: "Contacto",
	l: "Ajustes",
	g: "Inicio",
	h: "Metodología",
	i: "Páginas de prueba",
	e: "Ir a GitHub"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	a: "Tema: Automático",
	b: "Tema: Oscuro",
	c: "Tema: Claro"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "En-tête",
	k: "Produits",
	j: "Tarification",
	m: "Équipe",
	a: "Blog",
	b: "Carrières",
	d: "FAQ",
	c: "Contact",
	l: "Paramètres",
	g: "Accueil",
	h: "Méthodologie",
	i: "Pages fictives",
	e: "Aller sur GitHub"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
	a: "Thème : Auto",
	b: "Thème : Sombre",
	c: "Thème : Clair"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "Intestazione",
	k: "Prodotti",
	j: "Prezzi",
	m: "Team",
	a: "Blog",
	b: "Carriere",
	d: "FAQ",
	c: "Contatti",
	l: "Impostazioni",
	g: "Home",
	h: "Metodologia",
	i: "Pagine di prova",
	e: "Vai su GitHub"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
	a: "Tema: Auto",
	b: "Tema: Scuro",
	c: "Tema: Chiaro"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "ヘッダー",
	k: "製品",
	j: "価格設定",
	m: "チーム",
	a: "ブログ",
	b: "採用情報",
	d: "よくある質問",
	c: "お問い合わせ",
	l: "設定",
	g: "ホーム",
	h: "方法論",
	i: "モックページ",
	e: "GitHub へ"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
	a: "テーマ：自動",
	b: "テーマ：ダーク",
	c: "テーマ：ライト"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "헤더",
	k: "제품",
	j: "가격",
	m: "팀",
	a: "블로그",
	b: "채용",
	d: "자주 묻는 질문",
	c: "문의",
	l: "설정",
	g: "홈",
	h: "방법론",
	i: "모ック 페이지",
	e: "GitHub으로 이동"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
	a: "테마: 자동",
	b: "테마: 다크",
	c: "테마: 라이트"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "Cabeçalho",
	k: "Produtos",
	j: "Preços",
	m: "Equipe",
	a: "Blog",
	b: "Carreiras",
	d: "FAQ",
	c: "Contato",
	l: "Configurações",
	g: "Início",
	h: "Metodologia",
	i: "Páginas de Teste",
	e: "Ir para o GitHub"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	a: "Tema: Automático",
	b: "Tema: Escuro",
	c: "Tema: Claro"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "Заголовок",
	k: "Продукты",
	j: "Цены",
	m: "Команда",
	a: "Блог",
	b: "Вакансии",
	d: "FAQ",
	c: "Контакт",
	l: "Настройки",
	g: "Главная",
	h: "Методология",
	i: "Мок-страницы",
	e: "Перейти на GitHub"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
	a: "Тема: Авто",
	b: "Тема: Темная",
	c: "Тема: Светлая"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "header", r = {
	f: "页眉",
	k: "产品",
	j: "定价",
	m: "团队",
	a: "博客",
	b: "职业",
	d: "常见问题",
	c: "联系我们",
	l: "设置",
	g: "首页",
	h: "方法论",
	i: "模拟页面",
	e: "前往 GitHub"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "theme-toggle", s = {
	d: "主题模式：自动（系统）。点击切换到亮色模式。",
	a: "主题：自动",
	b: "主题：深色",
	c: "主题：亮色"
}, c = {
	key: o,
	content: s
};
export { t as n, a as t };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
export { t };
