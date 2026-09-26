import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, createRenderEffect as a, createResource as o, lazy as s, untrack as c, useContext as l } from "solid-js";
var u = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), d = {
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
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, p = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ee = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && p(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, te = ["en"], ne = "__intlayerPreloaded", re = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? d?.defaultLocale ?? "en",
	mode: e.mode ?? f?.mode ?? "prefix-no-default",
	locales: e.locales ?? d?.locales ?? te,
	rewrite: e.rewrite ?? f?.rewrite,
	domains: e.domains ?? f?.domains
}), m = (e, t) => !!e && (t ?? d.locales).includes(e), ie = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	if (!ie) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = !1, _, oe = () => typeof window > "u" ? g(h) : (ae ||= (_ = g(h), !0), _), se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = re(t);
	if (!n || !r) return n;
	let a = u(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return m(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (m(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = re(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ee(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return g() ?? t;
}, v, y, b = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (y === void 0 || v !== e) && (v = e, y = ce()), y;
}, x = {
	de: () => import("./intlayer-SettingsHeader-chfb2k-de-Jf1XMvD8.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-SettingsHeader-chfb2k-en-Tw1BfNHz.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-SettingsHeader-chfb2k-es-BKwBQ3EG.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-SettingsHeader-chfb2k-fr-DepsxmI-.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-SettingsHeader-chfb2k-it-2rU1K6um.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-SettingsHeader-chfb2k-ja-BOR75CEg.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-SettingsHeader-chfb2k-ko-DvM38jXD.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-SettingsHeader-chfb2k-pt-D6Z7iPXY.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-SettingsHeader-chfb2k-ru-DAat7Paw.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-SettingsHeader-chfb2k-zh-C6ngLSue.js").then((e) => e.t).then((e) => e.default)
}, le = b(), S = x[le];
typeof window < "u" && typeof S == "function" && S().then((e) => {
	x.__intlayerPreloaded = {
		locale: le,
		dictionary: e
	};
}, () => void 0);
var C = /* @__PURE__ */ new Map(), ue = (e, t) => Object.create(new Proxy(e, {
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
}), de = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = C.get(t);
	i || (i = /* @__PURE__ */ new Map(), C.set(t, i));
	let a = i.get(r);
	return a || (a = ue(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, fe = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, de(t, Array.prototype)), r;
}, w = /* @__PURE__ */ new WeakMap(), T = 0, pe = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, me = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, he = (e, t, n) => `${e}_${t}_${pe(n)}`, ge = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= me && r.clear(), r.set(t, n), n;
}, _e = "translation", ve = "object", ye = "array", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: ye,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ve,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !j(e) || !j(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? M(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, be = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, N = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, P = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? N : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = be(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: _e,
				key: e
			}]
		});
	}
}, F = N, I = (e) => N, L = N, xe = N, R = N, z = N, B = (e) => N, V = N, Se = (e, t = !0) => [
	P(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	F,
	I(e ?? d.defaultLocale),
	L,
	xe,
	B(e ?? d.defaultLocale),
	V,
	R,
	z
].filter((e) => e !== N), Ce = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), H = /* @__PURE__ */ new WeakSet(), we = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = he(r ?? d.defaultLocale, "", n), o = ge(e, a);
	if (o.hit) return o.content;
	let s = n ?? Se(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !H.has(e)
		};
		H.add(e);
		try {
			return Ce(e.content, t, s);
		} finally {
			t.eager && H.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, Te = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ne];
	if (n && n.locale === t) return n.dictionary;
}, U = null, W = null;
U?.catch(() => {}), W?.catch(() => {});
var Ee = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => fe({
		value: t.children,
		children: t.children
	})
}, De = N, Oe = N;
s(() => U.then((e) => ({ default: e.MarkdownRenderer }))), s(() => U.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ke = N;
s(() => W.then((e) => ({ default: e })));
var Ae = N, G = /* @__PURE__ */ new Map(), je = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		Ee,
		P(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		F,
		I(e ?? d.defaultLocale),
		L,
		B(e ?? d.defaultLocale),
		V,
		R,
		z,
		De,
		Oe,
		ke,
		Ae
	].filter((e) => e !== N);
	return G.set(n, r), r;
}, Me = (e, t) => we(e, t, je(typeof t == "object" && t ? t.locale : t)), Ne = oe, K = r({
	locale: () => Ne() ?? d?.defaultLocale,
	setLocale: () => null
}), q = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, J = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Y = Symbol("LOADABLE_SETTLED_VALUE"), X = /* @__PURE__ */ new Map(), Z = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Pe = (e, t) => typeof e == "function" ? e(t) : e, Fe = (e, t) => {
	let n = Z(e), r = X.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Pe(t, e).then((e) => (X.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw X.delete(n), e;
	});
	return X.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Ie = (e, t) => {
	let n = Z(e);
	X.has(n) || X.set(n, {
		status: "success",
		value: t
	});
}, Le = (e, t) => typeof t == "function" ? t.bind(e) : t, Re = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === q.toString ? () => "" : e === q.valueOf ? () => void 0 : e === q.value ? "" : J, ze = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === q.promiseThen) return;
			let a = Q(e(), n);
			if (i === Y) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Le(a, Reflect.get(Object(a), i));
			let o = Re(i);
			return o === J ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : ze(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return c(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Be = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Y];
}, Ve = (e, t) => {
	let [n] = o(() => typeof e == "function" ? e() : e, (e) => Fe(e, t));
	return a(() => {
		n();
	}), ze(() => n());
}, He = (e, t) => {
	let n = l(K) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return Me(Be(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ue = (e, t, n) => {
	let { locale: r } = l(K) ?? {}, i = d.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, u = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, f = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, p = Te(o, c());
	return p && Ie(u(), p), He(Ve(u, f), s);
}, $ = {
	de: () => import("./intlayer-SettingsHeader-chfb2k-de-Jf1XMvD8.js").then((e) => e.n).then((e) => e.default),
	en: () => import("./intlayer-SettingsHeader-chfb2k-en-Tw1BfNHz.js").then((e) => e.n).then((e) => e.default),
	es: () => import("./intlayer-SettingsHeader-chfb2k-es-BKwBQ3EG.js").then((e) => e.n).then((e) => e.default),
	fr: () => import("./intlayer-SettingsHeader-chfb2k-fr-DepsxmI-.js").then((e) => e.n).then((e) => e.default),
	it: () => import("./intlayer-SettingsHeader-chfb2k-it-2rU1K6um.js").then((e) => e.n).then((e) => e.default),
	ja: () => import("./intlayer-SettingsHeader-chfb2k-ja-BOR75CEg.js").then((e) => e.n).then((e) => e.default),
	ko: () => import("./intlayer-SettingsHeader-chfb2k-ko-DvM38jXD.js").then((e) => e.n).then((e) => e.default),
	pt: () => import("./intlayer-SettingsHeader-chfb2k-pt-D6Z7iPXY.js").then((e) => e.n).then((e) => e.default),
	ru: () => import("./intlayer-SettingsHeader-chfb2k-ru-DAat7Paw.js").then((e) => e.n).then((e) => e.default),
	zh: () => import("./intlayer-SettingsHeader-chfb2k-zh-C6ngLSue.js").then((e) => e.n).then((e) => e.default)
}, We = b(), Ge = $[We];
typeof window < "u" && typeof Ge == "function" && Ge().then((e) => {
	$.__intlayerPreloaded = {
		locale: We,
		dictionary: e
	};
}, () => void 0);
var Ke = n("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function qe() {
	let e = Ue($, "mock-banner");
	return (() => {
		var n = Ke();
		return t(n, () => e().a), n;
	})();
}
var Je = n("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), Ye = n("<p class=\"mb-8 text-muted-foreground\">");
function Xe() {
	let n = Ue(x, "settings-header");
	return [
		e(qe, {}),
		(() => {
			var e = Je();
			return t(e, () => n().b), e;
		})(),
		(() => {
			var e = Ye();
			return t(e, () => n().a), e;
		})()
	];
}
export { Xe as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "mock-banner", r = { a: "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "Einstellungen",
	a: "Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen."
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
}), n = "mock-banner", r = { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "Settings",
	a: "Manage your account preferences and configuration."
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
}), n = "mock-banner", r = { a: "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "Ajustes",
	a: "Gestione las preferencias y la configuración de su cuenta."
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
}), n = "mock-banner", r = { a: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "Paramètres",
	a: "Gérez vos préférences de compte et votre configuration."
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
}), n = "mock-banner", r = { a: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "Impostazioni",
	a: "Gestisci le preferenze e la configurazione del tuo account."
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
}), n = "mock-banner", r = { a: "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "設定",
	a: "アカウント設定と構成を管理します。"
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
}), n = "mock-banner", r = { a: "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "설정",
	a: "계정 환경 설정 및 구성을 관리하세요."
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
}), n = "mock-banner", r = { a: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "Configurações",
	a: "Gerencie suas preferências de conta e configuração."
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
}), n = "mock-banner", r = { a: "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "Настройки",
	a: "Управляйте настройками и конфигурацией вашего аккаунта."
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
}), n = "mock-banner", r = { a: "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务 or 服务无关。" }, i = {
	key: n,
	content: r
}, a = e({
	content: () => s,
	default: () => c,
	key: () => o
}), o = "settings-header", s = {
	b: "设置",
	a: "管理您的帐户首选项和配置。"
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
