import { effect as e, insert as t, setAttribute as n, template as r } from "solid-js/web";
import { createContext as i, createMemo as a, createRenderEffect as o, createResource as s, createUniqueId as c, lazy as l, untrack as u, useContext as d } from "solid-js";
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
}, _ = ["en"], v = "__intlayerPreloaded", y = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? _,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), b = (e, t) => !!e && (t ?? p.locales).includes(e), x = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var S = {
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
}, C = (e = S) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!x) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, w = !1, T, E = () => typeof window > "u" ? C(S) : (w ||= (T = C(S), !0), T), D = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = y(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return b(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (b(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, O = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = y(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = g(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = D(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, k, A, ee = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (A === void 0 || k !== e) && (k = e, A = O()), A;
}, j = {
	de: () => import("./intlayer-PreferencesSection-cwmvll-de-BnpZXPSf.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-PreferencesSection-cwmvll-en-CMUA5Fnl.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-PreferencesSection-cwmvll-es-CM6rDQmh.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-PreferencesSection-cwmvll-fr-_uIkmp41.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-PreferencesSection-cwmvll-it-DlXSdFUE.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-PreferencesSection-cwmvll-ja-CfemLQQZ.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-PreferencesSection-cwmvll-ko--oGrOdfg.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-PreferencesSection-cwmvll-pt-BsGPpP-n.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-PreferencesSection-cwmvll-ru-4wBF3rQs.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-PreferencesSection-cwmvll-zh-BB4pmqE2.js").then((e) => e.t).then((e) => e.default)
}, M = ee(), N = j[M];
typeof window < "u" && typeof N == "function" && N().then((e) => {
	j.__intlayerPreloaded = {
		locale: M,
		dictionary: e
	};
}, () => void 0);
var te = /* @__PURE__ */ new Map(), ne = (e, t) => Object.create(new Proxy(e, {
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
}), re = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = te.get(t);
	i || (i = /* @__PURE__ */ new Map(), te.set(t, i));
	let a = i.get(r);
	return a || (a = ne(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ie = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, re(t, Array.prototype)), r;
}, ae = /* @__PURE__ */ new WeakMap(), oe = 0, se = (e) => {
	if (!e) return "base";
	let t = ae.get(e);
	if (t) return t;
	oe += 1;
	let n = `p${oe}`;
	return ae.set(e, n), n;
}, ce = 256, P = /* @__PURE__ */ new WeakMap(), F = (e) => typeof e == "object" && !!e, le = (e, t, n) => `${e}_${t}_${se(n)}`, ue = (e, t) => {
	if (!F(e)) return { hit: !1 };
	let n = P.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!F(e)) return n;
	let r = P.get(e);
	return r || (r = /* @__PURE__ */ new Map(), P.set(e, r)), r.size >= ce && r.clear(), r.set(t, n), n;
}, de = "translation", fe = "object", pe = "array", L = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), R = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, R);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => R(e, L(t, e, {
		type: pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: fe,
			key: r
		};
		if (t.eager) {
			n[r] = R(e[r], L(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = R(e[r], L(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !z(e) || !z(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? B(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, me = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => B(e, t));
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, H = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = me(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: de,
				key: e
			}]
		});
	}
}, U = V, W = (e) => V, G = V, he = V, K = V, ge = V, _e = (e) => V, ve = V, ye = (e, t = !0) => [
	H(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	U,
	W(e ?? p.defaultLocale),
	G,
	he,
	_e(e ?? p.defaultLocale),
	ve,
	K,
	ge
].filter((e) => e !== V), be = (e, t, n = []) => R(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), xe = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = le(r ?? p.defaultLocale, "", n), o = ue(e, a);
	if (o.hit) return o.content;
	let s = n ?? ye(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !q.has(e)
		};
		q.add(e);
		try {
			return be(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? I(e, a, null) : Array.isArray(c) ? I(e, a, c.map(l)) : I(e, a, l(c));
}, Se = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[v];
	if (n && n.locale === t) return n.dictionary;
}, J = null, Ce = null;
J?.catch(() => {}), Ce?.catch(() => {});
var we = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ie({
		value: t.children,
		children: t.children
	})
}, Te = V, Ee = V;
l(() => J.then((e) => ({ default: e.MarkdownRenderer }))), l(() => J.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var De = V;
l(() => Ce.then((e) => ({ default: e })));
var Oe = V, Y = /* @__PURE__ */ new Map(), ke = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		we,
		H(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		U,
		W(e ?? p.defaultLocale),
		G,
		_e(e ?? p.defaultLocale),
		ve,
		K,
		ge,
		Te,
		Ee,
		De,
		Oe
	].filter((e) => e !== V);
	return Y.set(n, r), r;
}, Ae = (e, t) => xe(e, t, ke(typeof t == "object" && t ? t.locale : t)), je = E, Me = i({
	locale: () => je() ?? p?.defaultLocale,
	setLocale: () => null
}), X = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Z = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Ne = Symbol("LOADABLE_SETTLED_VALUE"), Q = /* @__PURE__ */ new Map(), Pe = (e) => typeof e == "string" ? e : e.cacheKey, $ = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Fe = (e, t) => typeof e == "function" ? e(t) : e, Ie = (e, t) => {
	let n = Pe(e), r = Q.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Fe(t, e).then((e) => (Q.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw Q.delete(n), e;
	});
	return Q.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Le = (e, t) => {
	let n = Pe(e);
	Q.has(n) || Q.set(n, {
		status: "success",
		value: t
	});
}, Re = (e, t) => typeof t == "function" ? t.bind(e) : t, ze = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === X.toString ? () => "" : e === X.valueOf ? () => void 0 : e === X.value ? "" : Z, Be = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === X.promiseThen) return;
			let a = $(e(), n);
			if (i === Ne) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Re(a, Reflect.get(Object(a), i));
			let o = ze(i);
			return o === Z ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = $(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : Be(() => {
				let t = $(e(), n);
				if (typeof t == "function") return u(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Ne];
}, He = (e, t) => {
	let [n] = s(() => typeof e == "function" ? e() : e, (e) => Ie(e, t));
	return o(() => {
		n();
	}), Be(() => n());
}, Ue = (e, t) => {
	let n = d(Me) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return Ae(Ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, We = (e, t, n) => {
	let { locale: r } = d(Me) ?? {}, i = p.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, u = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, f = Se(o, c());
	return f && Le(l(), f), Ue(He(l, u), s);
}, Ge = r("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option>");
function Ke() {
	let r = We(j, "preferences-section"), i = c();
	return (() => {
		var a = Ge(), o = a.firstChild, s = o.nextSibling.firstChild, c = s.firstChild, l = c.firstChild, u = l.nextSibling, d = c.nextSibling, f = s.nextSibling, p = f.firstChild, m = p.firstChild, h = m.nextSibling, g = p.nextSibling, _ = f.nextSibling.firstChild, v = _.nextSibling, y = v.firstChild, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling, w = C.nextSibling, T = w.nextSibling, E = T.nextSibling, D = E.nextSibling, O = D.nextSibling, k = O.nextSibling;
		return t(o, () => r().m), t(l, () => r().e), t(u, () => r().n), t(m, () => r().c), t(h, () => r().s), n(_, "for", i), t(_, () => r().d), n(v, "id", i), t(y, () => r().f), t(b, () => r().g), t(x, () => r().h), t(S, () => r().p), t(C, () => r().j), t(w, () => r().b), t(T, () => r().i), t(E, () => r().l), t(D, () => r().k), t(O, () => r().o), t(k, () => r().a), e((e) => {
			var t = r().r.value, i = r().q.value;
			return t !== e.e && n(d, "aria-label", e.e = t), i !== e.t && n(g, "aria-label", e.t = i), e;
		}, {
			e: void 0,
			t: void 0
		}), a;
	})();
}
export { Ke as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "preferences-section", r = {
	m: "Einstellungen",
	e: "E-Mail-Benachrichtigungen",
	n: "Erhalten Sie wöchentliche Benchmark-Berichte",
	r: "Benachrichtigungen umschalten",
	c: "Dunkelmodus",
	s: "Dunkles Farbschema verwenden",
	q: "Dunkelmodus umschalten",
	d: "Standardsprache",
	f: "Englisch (en)",
	g: "Französisch (fr)",
	h: "Deutsch (de)",
	p: "Spanisch (es)",
	j: "Japanisch (ja)",
	b: "Chinesisch (Vereinfacht) (zh-CN)",
	i: "Italienisch (it)",
	l: "Portugiesisch (pt)",
	k: "Koreanisch (ko)",
	o: "Russisch (ru)",
	a: "Arabisch (ar)"
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
}), n = "preferences-section", r = {
	m: "Preferences",
	e: "Email Notifications",
	n: "Receive weekly benchmark reports",
	r: "Toggle notifications",
	c: "Dark Mode",
	s: "Use dark color scheme",
	q: "Toggle dark mode",
	d: "Default Language",
	f: "English (en)",
	g: "French (fr)",
	h: "German (de)",
	p: "Spanish (es)",
	j: "Japanese (ja)",
	b: "Chinese Simplified (zh-CN)",
	i: "Italian (it)",
	l: "Portuguese (pt)",
	k: "Korean (ko)",
	o: "Russian (ru)",
	a: "Arabic (ar)"
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
}), n = "preferences-section", r = {
	m: "Preferencias",
	e: "Notificaciones por correo electrónico",
	n: "Recibe informes semanales de benchmarks",
	r: "Alternar notificaciones",
	c: "Modo oscuro",
	s: "Usar combinación de colores oscuros",
	q: "Alternar modo oscuro",
	d: "Idioma predeterminado",
	f: "Inglés (en)",
	g: "Francés (fr)",
	h: "Alemán (de)",
	p: "Español (es)",
	j: "Japonés (ja)",
	b: "Chino simplificado (zh-CN)",
	i: "Italiano (it)",
	l: "Portugués (pt)",
	k: "Coreano (ko)",
	o: "Ruso (ru)",
	a: "Árabe (ar)"
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
}), n = "preferences-section", r = {
	m: "Préférences",
	e: "Notifications par email",
	n: "Recevoir des rapports hebdomadaires de benchmark",
	r: "Basculer les notifications",
	c: "Mode sombre",
	s: "Utiliser le schéma de couleurs sombres",
	q: "Basculer le mode sombre",
	d: "Langue par défaut",
	f: "Anglais (en)",
	g: "Français (fr)",
	h: "Allemand (de)",
	p: "Espagnol (es)",
	j: "Japonais (ja)",
	b: "Chinois simplifié (zh-CN)",
	i: "Italien (it)",
	l: "Portugais (pt)",
	k: "Coréen (ko)",
	o: "Russe (ru)",
	a: "Arabe (ar)"
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
}), n = "preferences-section", r = {
	m: "Preferenze",
	e: "Notifiche via email",
	n: "Ricevi rapporti settimanali sui benchmark",
	r: "Attiva/disattiva notifiche",
	c: "Modalità scura",
	s: "Usa lo schema colori scuro",
	q: "Attiva/disattiva modalità scura",
	d: "Lingua predefinita",
	f: "Inglese (en)",
	g: "Francese (fr)",
	h: "Tedesco (de)",
	p: "Spagnolo (es)",
	j: "Giapponese (ja)",
	b: "Cinese semplificato (zh-CN)",
	i: "Italiano (it)",
	l: "Portoghese (pt)",
	k: "Coreano (ko)",
	o: "Russo (ru)",
	a: "Arabo (ar)"
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
}), n = "preferences-section", r = {
	m: "設定",
	e: "メール通知",
	n: "毎週のベンチマークレポートを受け取る",
	r: "通知を切り替える",
	c: "ダークモード",
	s: "ダークカラースキームを使用する",
	q: "ダークモードを切り替える",
	d: "デフォルトの言語",
	f: "英語 (en)",
	g: "フランス語 (fr)",
	h: "ドイツ語 (de)",
	p: "スペイン語 (es)",
	j: "日本語 (ja)",
	b: "中国語（簡体字）（zh-CN）",
	i: "イタリア語 (it)",
	l: "ポルトガル語 (pt)",
	k: "韓国語 (ko)",
	o: "ロシア語 (ru)",
	a: "アラビア語 (ar)"
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
}), n = "preferences-section", r = {
	m: "환경 설정",
	e: "이메일 알림",
	n: "주간 벤치마크 보고서 받기",
	r: "알림 전환",
	c: "다크 모드",
	s: "다크 색상 테마 사용",
	q: "다크 모드 전환",
	d: "기본 언어",
	f: "영어 (en)",
	g: "프랑스어 (fr)",
	h: "독일어 (de)",
	p: "스페인어 (es)",
	j: "일본어 (ja)",
	b: "중국어 간체 (zh-CN)",
	i: "이탈리아어 (it)",
	l: "포르투갈어 (pt)",
	k: "한국어 (ko)",
	o: "러시아어 (ko)",
	a: "아랍어 (ar)"
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
}), n = "preferences-section", r = {
	m: "Preferências",
	e: "Notificações por e-mail",
	n: "Receba relatórios semanais de benchmark",
	r: "Alternar notificações",
	c: "Modo escuro",
	s: "Usar esquema de cores escuro",
	q: "Alternar modo escuro",
	d: "Idioma padrão",
	f: "Inglês (en)",
	g: "Francês (fr)",
	h: "Alemão (de)",
	p: "Espanhol (es)",
	j: "Japonês (ja)",
	b: "Chinês Simplificado (zh-CN)",
	i: "Italiano (it)",
	l: "Português (pt)",
	k: "Coreano (ko)",
	o: "Russo (ru)",
	a: "Árabe (ar)"
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
}), n = "preferences-section", r = {
	m: "Настройки",
	e: "Уведомления по электронной почте",
	n: "Получать еженедельные отчеты о бенчмарках",
	r: "Переключить уведомления",
	c: "Темная тема",
	s: "Использовать темную цветовую схему",
	q: "Переключить темную тему",
	d: "Язык по умолчанию",
	f: "Английский (en)",
	g: "Французский (fr)",
	h: "Немецкий (de)",
	p: "Испанский (es)",
	j: "Японский (ja)",
	b: "Китайский упрощенный (zh-CN)",
	i: "Итальянский (it)",
	l: "Португальский (pt)",
	k: "Корейский (ko)",
	o: "Русский (ru)",
	a: "Арабский (ar)"
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
}), n = "preferences-section", r = {
	m: "首选项",
	e: "电子邮件通知",
	n: "接收每周基准测试报告",
	r: "切换通知",
	c: "深色模式",
	s: "使用深色方案",
	q: "切换深色模式",
	d: "默认语言",
	f: "英语 (en)",
	g: "法语 (fr)",
	h: "德语 (de)",
	p: "西班牙语 (es)",
	j: "日语 (ja)",
	b: "简体中文 (zh-CN)",
	i: "意大利语 (it)",
	l: "葡萄牙语 (pt)",
	k: "韩语 (ko)",
	o: "俄语 (ru)",
	a: "阿拉伯语 (ar)"
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
