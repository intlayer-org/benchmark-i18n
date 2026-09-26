import { className as e, createComponent as t, effect as n, insert as r, memo as i, template as a } from "solid-js/web";
import { For as o, createContext as s, createMemo as c, createRenderEffect as l, createResource as u, lazy as d, untrack as f, useContext as p } from "solid-js";
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
}, ne = ["en"], re = "__intlayerPreloaded", _ = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? h?.defaultLocale ?? "en",
	mode: e.mode ?? g?.mode ?? "prefix-no-default",
	locales: e.locales ?? h?.locales ?? ne,
	rewrite: e.rewrite ?? g?.rewrite,
	domains: e.domains ?? g?.domains
}), v = (e, t) => !!e && (t ?? h.locales).includes(e), ie = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	if (!ie) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = !1, x, oe = () => typeof window > "u" ? b(y) : (ae ||= (x = b(y), !0), x), se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = _(t);
	if (!n || !r) return n;
	let a = m(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return v(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (v(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = _(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return b() ?? t;
}, le, S, ue = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (S === void 0 || le !== e) && (le = e, S = ce()), S;
}, C = {
	de: () => import("./intlayer-PricingTiers-15q3jm-de-uAafNt1K.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-PricingTiers-15q3jm-en-DZiYDlqX.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-PricingTiers-15q3jm-es-mYGQHdVk.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-PricingTiers-15q3jm-fr-seSjWagF.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-PricingTiers-15q3jm-it-CWHnrpwn.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-PricingTiers-15q3jm-ja-MK2gyL1C.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-PricingTiers-15q3jm-ko-DmssWV5U.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-PricingTiers-15q3jm-pt-DIcBfCHF.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-PricingTiers-15q3jm-ru-CYSOfDzf.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-PricingTiers-15q3jm-zh-BVfnT64S.js").then((e) => e.t).then((e) => e.default)
}, w = ue(), T = C[w];
typeof window < "u" && typeof T == "function" && T().then((e) => {
	C.__intlayerPreloaded = {
		locale: w,
		dictionary: e
	};
}, () => void 0);
var E = /* @__PURE__ */ new Map(), de = (e, t) => Object.create(new Proxy(e, {
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
}), fe = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = E.get(t);
	i || (i = /* @__PURE__ */ new Map(), E.set(t, i));
	let a = i.get(r);
	return a || (a = de(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, pe = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, fe(t, Array.prototype)), r;
}, D = /* @__PURE__ */ new WeakMap(), O = 0, me = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, he = 256, k = /* @__PURE__ */ new WeakMap(), A = (e) => typeof e == "object" && !!e, ge = (e, t, n) => `${e}_${t}_${me(n)}`, _e = (e, t) => {
	if (!A(e)) return { hit: !1 };
	let n = k.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, j = (e, t, n) => {
	if (!A(e)) return n;
	let r = k.get(e);
	return r || (r = /* @__PURE__ */ new Map(), k.set(e, r)), r.size >= he && r.clear(), r.set(t, n), n;
}, ve = "translation", ye = "object", be = "array", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
		type: be,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ye,
			key: r
		};
		if (t.eager) {
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !P(e) || !P(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? F(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, xe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => F(e, t));
}, I = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, L = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? I : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = xe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ve,
				key: e
			}]
		});
	}
}, R = I, z = (e) => I, B = I, Se = I, V = I, H = I, U = (e) => I, W = I, Ce = (e, t = !0) => [
	L(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	R,
	z(e ?? h.defaultLocale),
	B,
	Se,
	U(e ?? h.defaultLocale),
	W,
	V,
	H
].filter((e) => e !== I), we = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), Te = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ge(r ?? h.defaultLocale, "", n), o = _e(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ce(r), c = e, l = (e) => {
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
			return we(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? j(e, a, null) : Array.isArray(c) ? j(e, a, c.map(l)) : j(e, a, l(c));
}, Ee = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
	if (n && n.locale === t) return n.dictionary;
}, K = null, q = null;
K?.catch(() => {}), q?.catch(() => {});
var De = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => pe({
		value: t.children,
		children: t.children
	})
}, Oe = I, ke = I;
d(() => K.then((e) => ({ default: e.MarkdownRenderer }))), d(() => K.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Ae = I;
d(() => q.then((e) => ({ default: e })));
var je = I, J = /* @__PURE__ */ new Map(), Me = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		De,
		L(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		R,
		z(e ?? h.defaultLocale),
		B,
		U(e ?? h.defaultLocale),
		W,
		V,
		H,
		Oe,
		ke,
		Ae,
		je
	].filter((e) => e !== I);
	return J.set(n, r), r;
}, Ne = (e, t) => Te(e, t, Me(typeof t == "object" && t ? t.locale : t)), Pe = oe, Y = s({
	locale: () => Pe() ?? h?.defaultLocale,
	setLocale: () => null
}), X = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Fe = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Ie = Symbol("LOADABLE_SETTLED_VALUE"), Z = /* @__PURE__ */ new Map(), Le = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Re = (e, t) => typeof e == "function" ? e(t) : e, ze = (e, t) => {
	let n = Le(e), r = Z.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Re(t, e).then((e) => (Z.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw Z.delete(n), e;
	});
	return Z.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Be = (e, t) => {
	let n = Le(e);
	Z.has(n) || Z.set(n, {
		status: "success",
		value: t
	});
}, Ve = (e, t) => typeof t == "function" ? t.bind(e) : t, He = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === X.toString ? () => "" : e === X.valueOf ? () => void 0 : e === X.value ? "" : Fe, $ = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === X.promiseThen) return;
			let a = Q(e(), n);
			if (i === Ie) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Ve(a, Reflect.get(Object(a), i));
			let o = He(i);
			return o === Fe ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return f(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Ue = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Ie];
}, We = (e, t) => {
	let [n] = u(() => typeof e == "function" ? e() : e, (e) => ze(e, t));
	return l(() => {
		n();
	}), $(() => n());
}, Ge = (e, t) => {
	let n = p(Y) ?? {}, r = c(() => {
		let r = n?.locale?.();
		return Ne(Ue(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ke = (e, t, n) => {
	let { locale: r } = p(Y) ?? {}, i = h.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, u = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, d = Ee(o, c());
	return d && Be(l(), d), Ge(We(l, u), s);
}, qe = a("<div class=\"grid gap-6 md:grid-cols-3\">"), Je = a("<div><h3 class=\"text-lg font-semibold text-foreground\"></h3><div class=my-4><span class=\"text-3xl font-bold text-foreground\"></span><span class=\"text-sm text-muted-foreground\"></span></div><ul class=\"mb-6 flex-1 space-y-2\"></ul><button type=button>"), Ye = a("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=text-primary>✓</span> ");
function Xe() {
	let a = Ke(C, "pricing-tiers"), s = () => [
		{
			name: a().u.value,
			price: "$0",
			period: "forever",
			features: [
				a().x.value,
				"3 libraries",
				a().f.value,
				a().s.value
			]
		},
		{
			name: a().r.value,
			price: "$29",
			period: "/month",
			features: [
				a().w.value,
				a().a.value,
				a().p.value,
				a().q.value,
				a().e.value,
				a().n.value
			],
			highlighted: !0
		},
		{
			name: a().k.value,
			price: a().h.value,
			period: "",
			features: [
				a().l.value,
				a().o.value,
				a().t.value,
				a().j.value,
				a().i.value,
				a().b.value,
				a().v.value
			]
		}
	];
	return (() => {
		var c = qe();
		return r(c, t(o, {
			get each() {
				return s();
			},
			children: (s) => (() => {
				var c = Je(), l = c.firstChild, u = l.nextSibling, d = u.firstChild, f = d.nextSibling, p = u.nextSibling, m = p.nextSibling;
				return r(l, () => s.name), r(d, () => s.price), r(f, () => s.period), r(p, t(o, {
					get each() {
						return s.features;
					},
					children: (e) => (() => {
						var t = Ye();
						return t.firstChild.nextSibling, r(t, e, null), t;
					})()
				})), r(m, (() => {
					var e = i(() => s.name === a().k.value);
					return () => e() ? a().g.value : a().m.value;
				})()), n((t) => {
					var n = `flex flex-col rounded-lg border p-6 ${s.highlighted ? a().d.value : "border-border bg-card"}`, r = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${s.highlighted ? "bg-primary text-primary-foreground" : a().c.value}`;
					return n !== t.e && e(c, t.e = n), r !== t.t && e(m, t.t = r), t;
				}, {
					e: void 0,
					t: void 0
				}), c;
			})()
		})), c;
	})();
}
export { Xe as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "Starter",
	x: "5 Benchmark-Läufe/Tag",
	f: "Community-Support",
	s: "Öffentliche Ergebnisse",
	r: "Pro",
	w: "Unbegrenzte Läufe",
	a: "Alle Bibliotheken",
	p: "Prioritäts-Support",
	q: "Private Ergebnisse",
	e: "CI-Integration",
	n: "Historische Daten",
	k: "Enterprise",
	h: "Benutzerdefiniert",
	l: "Alles in Pro",
	o: "On-Premise-Option",
	t: "SSO & SAML",
	j: "Dedizierter Account Manager",
	i: "Benutzerdefinierte SLAs",
	b: "Audit-Protokolle",
	v: "Schulungen",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "Vertrieb kontaktieren",
	m: "Erste Schritte"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "Starter",
	x: "5 benchmark runs/day",
	f: "Community support",
	s: "Public results",
	r: "Pro",
	w: "Unlimited runs",
	a: "All libraries",
	p: "Priority support",
	q: "Private results",
	e: "CI integration",
	n: "Historical data",
	k: "Enterprise",
	h: "Custom",
	l: "Everything in Pro",
	o: "On-premise option",
	t: "SSO & SAML",
	j: "Dedicated account manager",
	i: "Custom SLAs",
	b: "Audit logs",
	v: "Training sessions",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "Contact Sales",
	m: "Get Started"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "Starter",
	x: "5 ejecuciones de benchmark al día",
	f: "Soporte de la comunidad",
	s: "Resultados públicos",
	r: "Pro",
	w: "Ejecuciones ilimitadas",
	a: "Todas las bibliotecas",
	p: "Soporte prioritario",
	q: "Resultados privados",
	e: "Integración de CI",
	n: "Datos históricos",
	k: "Enterprise",
	h: "Personalizado",
	l: "Todo en Pro",
	o: "Opción on-premise",
	t: "SSO y SAML",
	j: "Gestor de cuentas dedicado",
	i: "SLAs personalizados",
	b: "Registros de auditoría",
	v: "Sesiones de formación",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "Contactar con ventas",
	m: "Empezar"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "Débutant",
	x: "5 exécutions de benchmark/jour",
	f: "Support communautaire",
	s: "Résultats publics",
	r: "Pro",
	w: "Exécutions illimitées",
	a: "Toutes les bibliothèques",
	p: "Support prioritaire",
	q: "Résultats privés",
	e: "Intégration CI",
	n: "Données historiques",
	k: "Entreprise",
	h: "Personnalisé",
	l: "Tout ce qui est dans Pro",
	o: "Option sur site",
	t: "SSO et SAML",
	j: "Gestionnaire de compte dédié",
	i: "SLA personnalisés",
	b: "Logs d'audit",
	v: "Sessions de formation",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "Contacter le service commercial",
	m: "Démarrer"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "Starter",
	x: "5 esecuzioni di benchmark al giorno",
	f: "Supporto della comunità",
	s: "Risultati pubblici",
	r: "Pro",
	w: "Esecuzioni illimitate",
	a: "Tutte le librerie",
	p: "Supporto prioritario",
	q: "Risultati privati",
	e: "Integrazione CI",
	n: "Dati storici",
	k: "Enterprise",
	h: "Personalizzato",
	l: "Tutto quello che c'è in Pro",
	o: "Opzione on-premise",
	t: "SSO e SAML",
	j: "Account manager dedicato",
	i: "SLA personalizzati",
	b: "Log di audit",
	v: "Sessioni di formazione",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "Contatta l'ufficio vendite",
	m: "Inizia subito"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "スターター",
	x: "1日5回のベンチマーク実行",
	f: "コミュニティサポート",
	s: "公開結果",
	r: "プロ",
	w: "実行無制限",
	a: "すべてのライブラリ",
	p: "優先サポート",
	q: "プライベートな結果",
	e: "CI 統合",
	n: "履歴データ",
	k: "エンタープライズ",
	h: "カスタム",
	l: "プロのすべての機能",
	o: "オンプレミスオプション",
	t: "SSO と SAML",
	j: "専任のアカウントマネージャー",
	i: "カスタムSLA",
	b: "監査ログ",
	v: "トレーニングセッション",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "営業に連絡",
	m: "始める"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "스타터",
	x: "일일 5회 벤치마크 실행",
	f: "커뮤니티 지원",
	s: "공개 결과",
	r: "프로",
	w: "무제한 실행",
	a: "모든 라이브러리",
	p: "우선 지원",
	q: "비공개 결과",
	e: "CI 통합",
	n: "기록 데이터",
	k: "엔터프라이즈",
	h: "커스텀",
	l: "Pro의 모든 기능 포함",
	o: "온프레미스 옵션",
	t: "SSO 및 SAML",
	j: "전담 어카운트 매니저",
	i: "맞춤형 SLA",
	b: "감사 로그",
	v: "교육 세션",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "영업팀 문의",
	m: "시작하기"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "Starter",
	x: "5 execuções de benchmark/dia",
	f: "Suporte da comunidade",
	s: "Resultados públicos",
	r: "Pro",
	w: "Execuções ilimitadas",
	a: "Todas as biblioteche",
	p: "Suporte prioritário",
	q: "Resultados privados",
	e: "Integração CI",
	n: "Dados históricos",
	k: "Enterprise",
	h: "Personalizado",
	l: "Tudo no Pro",
	o: "Opção on-premise",
	t: "SSO e SAML",
	j: "Gerente de conta dedicado",
	i: "SLAs personalizados",
	b: "Logs de auditoria",
	v: "Sessões de treinamento",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "Contatar Vendas",
	m: "Começar"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "Стартовый",
	x: "5 запусков бенчмарка в день",
	f: "Поддержка сообщества",
	s: "Публичные результаты",
	r: "Профи",
	w: "Безлимитные запуски",
	a: "Все библиотеки",
	p: "Приоритетная поддержка",
	q: "Приватные результаты",
	e: "Интеграция с CI",
	n: "Исторические данные",
	k: "Корпоративный",
	h: "Индивидуальный",
	l: "Все, что в Профи",
	o: "Локальная установка",
	t: "SSO и SAML",
	j: "Выделенный менеджер",
	i: "Индивидуальные SLA",
	b: "Журналы аудита",
	v: "Обучающие сессии",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "Связаться с отделом продаж",
	m: "Начать"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "pricing-tiers", r = {
	u: "入门版",
	x: "每天 5 次基准测试运行",
	f: "社区支持",
	s: "公开结果",
	r: "专业版",
	w: "无限次运行",
	a: "所有库",
	p: "优先支持",
	q: "私人结果",
	e: "CI 集成",
	n: "历史数据",
	k: "企业版",
	h: "自定义",
	l: "包含专业版所有功能",
	o: "本地部署选项",
	t: "SSO 和 SAML",
	j: "专属客户经理",
	i: "自定义 SLA",
	b: "审核日志",
	v: "培训课程",
	d: "border-primary bg-primary/5 ring-1 ring-primary",
	c: "border border-border text-foreground hover:bg-accent",
	g: "联系销售",
	m: "开始使用"
}, i = {
	key: n,
	content: r
};
export { t };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
export { t };
