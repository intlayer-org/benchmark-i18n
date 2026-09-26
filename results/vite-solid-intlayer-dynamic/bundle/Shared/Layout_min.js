import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, mergeProps as a, setAttribute as o, template as s } from "solid-js/web";
import { A as c, useLocation as l, useNavigate as u, useParams as d } from "@solidjs/router";
import { For as f, Suspense as p, createComputed as m, createContext as h, createEffect as g, createMemo as ee, createRenderEffect as te, createResource as ne, createSignal as _, lazy as v, on as re, onMount as y, untrack as ie, useContext as ae } from "solid-js";
import { recordHydrationDuration as oe, recordRenderTime as se } from "test-utils/browser-metrics";
var b = {
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
}, x = {
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
}, ce = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), S = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, le = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = S(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ue = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var C = {
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
}, w = (e = C) => {
	let { locales: t } = b;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ue) for (let t = 0; t < (x.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(x.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, T = !1, E, de = () => typeof window > "u" ? w(C) : (T ||= (E = w(C), !0), E), fe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (T = !1, !ue && x.storage.cookies)) for (let n = 0; n < x.storage.cookies.length; n++) {
		let { name: r, attributes: i } = x.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: S(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, le(r, e, i));
			} catch {}
		}
	}
}, pe = /* @__PURE__ */ new Map(), me = (e, t) => Object.create(new Proxy(e, {
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
}), he = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = pe.get(t);
	i || (i = /* @__PURE__ */ new Map(), pe.set(t, i));
	let a = i.get(r);
	return a || (a = me(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ge = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, he(t, Array.prototype)), r;
}, _e = /* @__PURE__ */ new WeakMap(), ve = 0, ye = (e) => {
	if (!e) return "base";
	let t = _e.get(e);
	if (t) return t;
	ve += 1;
	let n = `p${ve}`;
	return _e.set(e, n), n;
}, be = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, xe = (e, t, n) => `${e}_${t}_${ye(n)}`, Se = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= be && r.clear(), r.set(t, n), n;
}, Ce = "translation", we = "object", Te = "array", A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
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
			n[r] = j(e[r], A(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = j(e[r], A(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Ee = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, De = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Ee(e) || !Ee(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? De(a, i) : a;
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => De(e, t));
}, M = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ke = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? M : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Oe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Ce,
				key: e
			}]
		});
	}
}, Ae = M, je = (e) => M, Me = M, Ne = M, N = M, P = M, F = (e) => M, I = M, Pe = (e, t = !0) => [
	ke(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
	Ae,
	je(e ?? b.defaultLocale),
	Me,
	Ne,
	F(e ?? b.defaultLocale),
	I,
	N,
	P
].filter((e) => e !== M), Fe = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), L = /* @__PURE__ */ new WeakSet(), Ie = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = xe(r ?? b.defaultLocale, "", n), o = Se(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pe(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !L.has(e)
		};
		L.add(e);
		try {
			return Fe(e.content, t, s);
		} finally {
			t.eager && L.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, Le = ["en"], Re = "__intlayerPreloaded", ze = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[Re];
	if (n && n.locale === t) return n.dictionary;
}, R = null, z = null;
R?.catch(() => {}), z?.catch(() => {});
var Be = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ge({
		value: t.children,
		children: t.children
	})
}, Ve = M, He = M;
v(() => R.then((e) => ({ default: e.MarkdownRenderer }))), v(() => R.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Ue = M;
v(() => z.then((e) => ({ default: e })));
var We = M, B = /* @__PURE__ */ new Map(), Ge = (e, t = !0) => {
	let n = `${e ?? b.defaultLocale}_${t}`;
	if (B.has(n)) return B.get(n);
	let r = [
		Be,
		ke(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
		Ae,
		je(e ?? b.defaultLocale),
		Me,
		F(e ?? b.defaultLocale),
		I,
		N,
		P,
		Ve,
		He,
		Ue,
		We
	].filter((e) => e !== M);
	return B.set(n, r), r;
}, Ke = (e, t) => Ie(e, t, Ge(typeof t == "object" && t ? t.locale : t)), qe = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, Je = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && qe(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, V = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? b?.defaultLocale ?? "en",
	mode: e.mode ?? x?.mode ?? "prefix-no-default",
	locales: e.locales ?? b?.locales ?? Le,
	rewrite: e.rewrite ?? x?.rewrite,
	domains: e.domains ?? x?.domains
}), H = (e, t) => !!e && (t ?? b.locales).includes(e), Ye = (e, t = b?.locales, n = b?.defaultLocale) => {
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
}, Xe = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = V(t);
	if (!n || !r) return n;
	let a = ce(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return H(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (H(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, Ze = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = V(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = Je(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = Xe(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return w() ?? t;
}, Qe, U, W = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (U === void 0 || Qe !== e) && (Qe = e, U = Ze()), U;
}, $e = de, et = (e, t) => fe(e, {
	...C,
	isCookieEnabled: t
}), tt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, nt = null, rt = null, G = h({
	locale: () => $e() ?? b?.defaultLocale,
	setLocale: () => null
}), it = (t) => {
	let { defaultLocale: n, locales: r } = b ?? {}, i = t.locale ?? $e() ?? t.defaultLocale ?? n, [a, o] = _(i), s = t.setLocale ?? ((e) => {
		if (a().toString() !== e.toString()) {
			if (!r?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			o(e), et(e, t.isCookieEnabled);
		}
	}), c = ee(() => Ye(a()));
	return m(re(() => t.locale, (e) => {
		e && e !== ie(a) && o(e);
	}, { defer: !0 })), y(() => {
		tt();
	}), e(G.Provider, {
		value: {
			locale: c,
			setLocale: s,
			variant: () => t.variant
		},
		get children() {
			return t.children;
		}
	});
}, at = (t) => e(it, a(t, { get children() {
	return [
		i(() => i(() => !1)() && e(p, { get children() {
			return e(nt, {});
		} })),
		i(() => i(() => !1)() && e(p, { get children() {
			return e(rt, {});
		} })),
		i(() => t.children)
	];
} })), K = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, ot = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), st = Symbol("LOADABLE_SETTLED_VALUE"), q = /* @__PURE__ */ new Map(), ct = (e) => typeof e == "string" ? e : e.cacheKey, J = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), lt = (e, t) => typeof e == "function" ? e(t) : e, ut = (e, t) => {
	let n = ct(e), r = q.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = lt(t, e).then((e) => (q.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw q.delete(n), e;
	});
	return q.set(n, {
		status: "pending",
		promise: i
	}), i;
}, dt = (e, t) => {
	let n = ct(e);
	q.has(n) || q.set(n, {
		status: "success",
		value: t
	});
}, ft = (e, t) => typeof t == "function" ? t.bind(e) : t, pt = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === K.toString ? () => "" : e === K.valueOf ? () => void 0 : e === K.value ? "" : ot, mt = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === K.promiseThen) return;
			let a = J(e(), n);
			if (i === st) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : ft(a, Reflect.get(Object(a), i));
			let o = pt(i);
			return o === ot ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = J(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : mt(() => {
				let t = J(e(), n);
				if (typeof t == "function") return ie(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, ht = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[st];
}, gt = (e, t) => {
	let [n] = ne(() => typeof e == "function" ? e() : e, (e) => ut(e, t));
	return te(() => {
		n();
	}), mt(() => n());
}, _t = (e, t) => {
	let n = ae(G) ?? {}, r = ee(() => {
		let r = n?.locale?.();
		return Ke(ht(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Y = (e, t, n) => {
	let { locale: r } = ae(G) ?? {}, i = b.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, u = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, d = ze(o, c());
	return d && dt(l(), d), _t(gt(l, u), s);
}, X = {
	de: () => import("./intlayer-Layout-1mhtc2-de-DUKdTg8_.js").then((e) => e.r).then((e) => e.default),
	en: () => import("./intlayer-Layout-1mhtc2-en-BNdIBDCj.js").then((e) => e.r).then((e) => e.default),
	es: () => import("./intlayer-Layout-1mhtc2-es-DHcZauRp.js").then((e) => e.r).then((e) => e.default),
	fr: () => import("./intlayer-Layout-1mhtc2-fr-C9XooqYa.js").then((e) => e.r).then((e) => e.default),
	it: () => import("./intlayer-Layout-1mhtc2-it-D2pus12R.js").then((e) => e.r).then((e) => e.default),
	ja: () => import("./intlayer-Layout-1mhtc2-ja-C0X0YSBa.js").then((e) => e.r).then((e) => e.default),
	ko: () => import("./intlayer-Layout-1mhtc2-ko-DvYsWmdg.js").then((e) => e.r).then((e) => e.default),
	pt: () => import("./intlayer-Layout-1mhtc2-pt-CSQJx5ZX.js").then((e) => e.r).then((e) => e.default),
	ru: () => import("./intlayer-Layout-1mhtc2-ru-BnHIcmiT.js").then((e) => e.r).then((e) => e.default),
	zh: () => import("./intlayer-Layout-1mhtc2-zh-iizuWdnZ.js").then((e) => e.r).then((e) => e.default)
}, vt = W(), yt = X[vt];
typeof window < "u" && typeof yt == "function" && yt().then((e) => {
	X.__intlayerPreloaded = {
		locale: vt,
		dictionary: e
	};
}, () => void 0);
var bt = s("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">i18n Benchmark</h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\">GitHub</a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">contact@intlayer.org</p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function xt() {
	let t = Y(X, "footer"), n = d(), i = () => n.locale ?? "en";
	return (() => {
		var n = bt(), a = n.firstChild.firstChild, o = a.firstChild, s = o.firstChild.nextSibling, l = o.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild.nextSibling, f = d.nextSibling, p = l.nextSibling.firstChild, m = a.nextSibling;
		return r(s, () => t().a), r(u, () => t().f), r(d, e(c, {
			get href() {
				return `/${i()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return t().e;
			}
		})), r(f, e(c, {
			get href() {
				return `/${i()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return t().c;
			}
		})), r(p, () => t().b), r(m, () => t().d), n;
	})();
}
var Z = {
	de: () => import("./intlayer-Layout-1mhtc2-de-DUKdTg8_.js").then((e) => e.n).then((e) => e.default),
	en: () => import("./intlayer-Layout-1mhtc2-en-BNdIBDCj.js").then((e) => e.n).then((e) => e.default),
	es: () => import("./intlayer-Layout-1mhtc2-es-DHcZauRp.js").then((e) => e.n).then((e) => e.default),
	fr: () => import("./intlayer-Layout-1mhtc2-fr-C9XooqYa.js").then((e) => e.n).then((e) => e.default),
	it: () => import("./intlayer-Layout-1mhtc2-it-D2pus12R.js").then((e) => e.n).then((e) => e.default),
	ja: () => import("./intlayer-Layout-1mhtc2-ja-C0X0YSBa.js").then((e) => e.n).then((e) => e.default),
	ko: () => import("./intlayer-Layout-1mhtc2-ko-DvYsWmdg.js").then((e) => e.n).then((e) => e.default),
	pt: () => import("./intlayer-Layout-1mhtc2-pt-CSQJx5ZX.js").then((e) => e.n).then((e) => e.default),
	ru: () => import("./intlayer-Layout-1mhtc2-ru-BnHIcmiT.js").then((e) => e.n).then((e) => e.default),
	zh: () => import("./intlayer-Layout-1mhtc2-zh-iizuWdnZ.js").then((e) => e.n).then((e) => e.default)
}, St = W(), Ct = Z[St];
typeof window < "u" && typeof Ct == "function" && Ct().then((e) => {
	Z.__intlayerPreloaded = {
		locale: St,
		dictionary: e
	};
}, () => void 0);
function wt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), y(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Tt = [
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
], Et = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Dt = s("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), Ot = s("<option>");
function kt() {
	let t = d(), i = u(), a = l(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		i(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var i = Dt(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(f, {
			each: Tt,
			children: (e) => (() => {
				var t = Ot();
				return t.value = e, r(t, () => Et(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var Q = {
	de: () => import("./intlayer-Layout-1mhtc2-de-DUKdTg8_.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-Layout-1mhtc2-en-BNdIBDCj.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-Layout-1mhtc2-es-DHcZauRp.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-Layout-1mhtc2-fr-C9XooqYa.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-Layout-1mhtc2-it-D2pus12R.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-Layout-1mhtc2-ja-C0X0YSBa.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-Layout-1mhtc2-ko-DvYsWmdg.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-Layout-1mhtc2-pt-CSQJx5ZX.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-Layout-1mhtc2-ru-BnHIcmiT.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-Layout-1mhtc2-zh-iizuWdnZ.js").then((e) => e.t).then((e) => e.default)
}, At = W(), jt = Q[At];
typeof window < "u" && typeof jt == "function" && jt().then((e) => {
	Q.__intlayerPreloaded = {
		locale: At,
		dictionary: e
	};
}, () => void 0);
var Mt = s("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function Nt() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Pt() {
	let e = Y(Q, "theme-toggle"), [t, i] = _("auto");
	y(() => {
		let e = Nt();
		i(e), $(e);
	}), g(() => {
		if (t() !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	});
	function a() {
		let e = t(), n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		i(n), $(n), window.localStorage.setItem("theme", n);
	}
	let s = () => t() === "auto" ? e().d.value : `Theme mode: ${t()}. Click to switch mode.`, c = () => t() === "auto" ? e().a.value : t() === "dark" ? e().b.value : e().c.value;
	return (() => {
		var e = Mt();
		return e.$$click = a, r(e, c), n((t) => {
			var n = s(), r = s();
			return n !== t.e && o(e, "aria-label", t.e = n), r !== t.t && o(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
t(["click"]);
var Ft = s("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), It = s("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), Lt = s("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function Rt(e) {
	return (() => {
		var t = Ft();
		return n(() => o(t, "class", e.class)), t;
	})();
}
function zt() {
	let t = Y(Z, "header");
	wt(t().f.value);
	let [n, a] = _(!1), o = d(), s = () => o.locale ?? "en", l = () => [
		{
			to: `/${s()}/products`,
			label: t().k.value
		},
		{
			to: `/${s()}/pricing`,
			label: t().j.value
		},
		{
			to: `/${s()}/team`,
			label: t().m.value
		},
		{
			to: `/${s()}/blog`,
			label: t().a.value
		},
		{
			to: `/${s()}/careers`,
			label: t().b.value
		},
		{
			to: `/${s()}/faq`,
			label: t().d.value
		},
		{
			to: `/${s()}/contact`,
			label: t().c.value
		},
		{
			to: `/${s()}/settings`,
			label: t().l.value
		}
	];
	return (() => {
		var o = It(), u = o.firstChild.firstChild, d = u.firstChild, p = d.firstChild, m = p.firstChild, h = u.nextSibling, g = h.firstChild.firstChild;
		return r(u, e(c, {
			get href() {
				return `/${s()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), d), r(d, e(c, {
			get href() {
				return `/${s()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return t().g;
			}
		}), p), r(d, e(c, {
			get href() {
				return `/${s()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return t().h;
			}
		}), p), m.$$click = () => a(!n()), m.addEventListener("mouseleave", () => a(!1)), m.addEventListener("mouseenter", () => a(!0)), r(m, () => t().i, null), r(m, e(Rt, { get class() {
			return `transition-transform ${n() ? "rotate-180" : ""}`;
		} }), null), r(p, (() => {
			var t = i(() => !!n());
			return () => t() && (() => {
				var t = Lt(), n = t.firstChild;
				return t.addEventListener("mouseleave", () => a(!1)), t.addEventListener("mouseenter", () => a(!0)), r(n, e(f, {
					get each() {
						return l();
					},
					children: (t) => e(c, {
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
		})(), null), r(g, () => t().e), r(h, e(kt, {}), null), r(h, e(Pt, {}), null), o;
	})();
}
t(["click"]);
function Bt(t) {
	let n = d(), r = typeof performance < "u" ? performance.now() : 0;
	return y(() => {
		oe(), se("AppRoot", r);
	}), g(() => {
		document.documentElement.lang = n.locale ?? "en";
	}), e(at, {
		get locale() {
			return n.locale;
		},
		get children() {
			return [
				e(zt, {}),
				i(() => t.children),
				e(xt, {})
			];
		}
	});
}
export { Bt as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
	f: "Ressourcen",
	e: "Methodik",
	c: "Beitragen",
	b: "Kontakt",
	d: "i18n Benchmark — Open-Source-Projekt. Erstellt mit Solid, Vite & Solid Router."
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
	a: "Design: Auto",
	b: "Design: Dunkel",
	c: "Design: Hell"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	f: "Resources",
	e: "Methodology",
	c: "Contributing",
	b: "Contact",
	d: "i18n Benchmark — Open-source project. Built with Solid, Vite & Solid Router."
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "Theme mode: auto (system). Click to switch to light mode.",
	a: "Theme: Auto",
	b: "Theme: Dark",
	c: "Theme: Light"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
	f: "Recursos",
	e: "Metodología",
	c: "Contribución",
	b: "Contacto",
	d: "i18n Benchmark — Proyecto de código abierto. Construido con Solid, Vite y Solid Router."
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	a: "Tema: Automático",
	b: "Tema: Oscuro",
	c: "Tema: Claro"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
	f: "Ressources",
	e: "Méthodologie",
	c: "Contribuer",
	b: "Contact",
	d: "i18n Benchmark — Projet open source. Construit avec Solid, Vite & Solid Router."
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
	a: "Thème : Auto",
	b: "Thème : Sombre",
	c: "Thème : Clair"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
	f: "Risorse",
	e: "Metodologia",
	c: "Contribuire",
	b: "Contatti",
	d: "i18n Benchmark — Progetto open source. Creato con Solid, Vite & Solid Router."
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
	a: "Tema: Auto",
	b: "Tema: Scuro",
	c: "Tema: Chiaro"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーションです。",
	f: "リソース",
	e: "方法論",
	c: "貢献する",
	b: "お問い合わせ",
	d: "i18n Benchmark — オープンソースプロジェクト。Solid、Vite、Solid Routerで構築されています。"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
	a: "テーマ：自動",
	b: "テーマ：ダーク",
	c: "テーマ：ライト"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플ри케이션입니다.",
	f: "리소스",
	e: "방법론",
	c: "기여",
	b: "문의",
	d: "i18n Benchmark — 오픈 소스 프로젝트. Solid, Vite 및 Solid Router로 제작되었습니다."
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
	a: "테마: 자동",
	b: "테마: 다크",
	c: "테마: 라이트"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.",
	f: "Recursos",
	e: "Metodologia",
	c: "Contribuindo",
	b: "Contato",
	d: "i18n Benchmark — Projeto de código aberto. Construído com Solid, Vite & Solid Router."
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	a: "Tema: Automático",
	b: "Tema: Escuro",
	c: "Tema: Claro"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
	f: "Ресурсы",
	e: "Методология",
	c: "Вклад",
	b: "Контакт",
	d: "i18n Benchmark — проект с открытым исходным кодом. Построен на Solid, Vite и Solid Router."
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
	a: "Тема: Авто",
	b: "Тема: Темная",
	c: "Тема: Светлая"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	a: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
	f: "资源",
	e: "方法论",
	c: "贡献",
	b: "联系我们",
	d: "i18n Benchmark — 开源项目。使用 Solid、Vite 和 Solid Router 构建。"
}, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "header", s = {
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
}, c = {
	key: o,
	content: s
}, l = e({
	content: () => d,
	default: () => f,
	key: () => u
}), u = "theme-toggle", d = {
	d: "主题模式：自动（系统）。点击切换到亮色模式。",
	a: "主题：自动",
	b: "主题：深色",
	c: "主题：亮色"
}, f = {
	key: u,
	content: d
};
export { a as n, t as r, l as t };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
export { t };
