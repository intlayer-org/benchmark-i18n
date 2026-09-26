import { insert as e, template as t } from "solid-js/web";
import { createContext as n, createMemo as r, createRenderEffect as i, createResource as a, lazy as o, untrack as s, useContext as c } from "solid-js";
var l = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), u = {
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
}, d = {
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
}, f = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, p = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && f(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ee = ["en"], te = "__intlayerPreloaded", ne = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? u?.defaultLocale ?? "en",
	mode: e.mode ?? d?.mode ?? "prefix-no-default",
	locales: e.locales ?? u?.locales ?? ee,
	rewrite: e.rewrite ?? d?.rewrite,
	domains: e.domains ?? d?.domains
}), m = (e, t) => !!e && (t ?? u.locales).includes(e), re = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!re) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ie = !1, _, ae = () => typeof window > "u" ? g(h) : (ie ||= (_ = g(h), !0), _), oe = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ne(t);
	if (!n || !r) return n;
	let a = l(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return m(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (m(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, se = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = ne(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = p(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = oe(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return g() ?? t;
}, v, y, ce = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (y === void 0 || v !== e) && (v = e, y = se()), y;
}, b = {
	de: () => import("./intlayer-WhyItMatters-ifl0n3-de-BdhLTvQX.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-WhyItMatters-ifl0n3-en-1jU7lDKT.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-WhyItMatters-ifl0n3-es-pZqg77eG.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-WhyItMatters-ifl0n3-fr-C7ZbS_KW.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-WhyItMatters-ifl0n3-it-C6In3B1r.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-WhyItMatters-ifl0n3-ja-CiVFa2Fn.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-WhyItMatters-ifl0n3-ko-DP_nJuDZ.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-WhyItMatters-ifl0n3-pt-B2RkSD3m.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-WhyItMatters-ifl0n3-ru-Co1b-oMh.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-WhyItMatters-ifl0n3-zh-CGf3zMkm.js").then((e) => e.t).then((e) => e.default)
}, x = ce(), S = b[x];
typeof window < "u" && typeof S == "function" && S().then((e) => {
	b.__intlayerPreloaded = {
		locale: x,
		dictionary: e
	};
}, () => void 0);
var C = /* @__PURE__ */ new Map(), le = (e, t) => Object.create(new Proxy(e, {
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
}), ue = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = C.get(t);
	i || (i = /* @__PURE__ */ new Map(), C.set(t, i));
	let a = i.get(r);
	return a || (a = le(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, de = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, ue(t, Array.prototype)), r;
}, w = /* @__PURE__ */ new WeakMap(), T = 0, fe = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, pe = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, me = (e, t, n) => `${e}_${t}_${fe(n)}`, he = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= pe && r.clear(), r.set(t, n), n;
}, ge = "translation", _e = "object", ve = "array", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: ve,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: _e,
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
}, ye = (e, t, n) => {
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
		let a = ye(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ge,
				key: e
			}]
		});
	}
}, F = N, I = (e) => N, L = N, be = N, R = N, z = N, B = (e) => N, V = N, xe = (e, t = !0) => [
	P(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	F,
	I(e ?? u.defaultLocale),
	L,
	be,
	B(e ?? u.defaultLocale),
	V,
	R,
	z
].filter((e) => e !== N), Se = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), H = /* @__PURE__ */ new WeakSet(), Ce = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = me(r ?? u.defaultLocale, "", n), o = he(e, a);
	if (o.hit) return o.content;
	let s = n ?? xe(r), c = e, l = (e) => {
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
			return Se(e.content, t, s);
		} finally {
			t.eager && H.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, we = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[te];
	if (n && n.locale === t) return n.dictionary;
}, U = null, W = null;
U?.catch(() => {}), W?.catch(() => {});
var Te = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => de({
		value: t.children,
		children: t.children
	})
}, Ee = N, De = N;
o(() => U.then((e) => ({ default: e.MarkdownRenderer }))), o(() => U.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Oe = N;
o(() => W.then((e) => ({ default: e })));
var ke = N, G = /* @__PURE__ */ new Map(), Ae = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		Te,
		P(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		F,
		I(e ?? u.defaultLocale),
		L,
		B(e ?? u.defaultLocale),
		V,
		R,
		z,
		Ee,
		De,
		Oe,
		ke
	].filter((e) => e !== N);
	return G.set(n, r), r;
}, je = (e, t) => Ce(e, t, Ae(typeof t == "object" && t ? t.locale : t)), Me = ae, K = n({
	locale: () => Me() ?? u?.defaultLocale,
	setLocale: () => null
}), q = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, J = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Y = Symbol("LOADABLE_SETTLED_VALUE"), X = /* @__PURE__ */ new Map(), Z = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Ne = (e, t) => typeof e == "function" ? e(t) : e, Pe = (e, t) => {
	let n = Z(e), r = X.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Ne(t, e).then((e) => (X.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw X.delete(n), e;
	});
	return X.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Fe = (e, t) => {
	let n = Z(e);
	X.has(n) || X.set(n, {
		status: "success",
		value: t
	});
}, Ie = (e, t) => typeof t == "function" ? t.bind(e) : t, Le = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === q.toString ? () => "" : e === q.valueOf ? () => void 0 : e === q.value ? "" : J, $ = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === q.promiseThen) return;
			let a = Q(e(), n);
			if (i === Y) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Ie(a, Reflect.get(Object(a), i));
			let o = Le(i);
			return o === J ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return s(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Re = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Y];
}, ze = (e, t) => {
	let [n] = a(() => typeof e == "function" ? e() : e, (e) => Pe(e, t));
	return i(() => {
		n();
	}), $(() => n());
}, Be = (e, t) => {
	let n = c(K) ?? {}, i = r(() => {
		let r = n?.locale?.();
		return je(Re(e) ?? e, t ?? r);
	});
	return new Proxy(i, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ve = (e, t, n) => {
	let { locale: r } = c(K) ?? {}, i = u.defaultLocale, a = String(t), o = e, s = n, l = () => s ?? r?.() ?? i, d = () => {
		let e = l();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, f = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, p = we(o, l());
	return p && Fe(d(), p), Be(ze(d, f), s);
}, He = t("<section class=mb-16><h2 class=\"mb-6 text-2xl font-bold text-foreground\"></h2><div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">");
function Ue() {
	let t = Ve(b, "why-it-matters");
	return (() => {
		var n = He(), r = n.firstChild, i = r.nextSibling.firstChild, a = i.firstChild, o = a.nextSibling, s = i.nextSibling, c = s.firstChild, l = c.nextSibling, u = s.nextSibling.firstChild, d = u.nextSibling;
		return e(r, () => t().g), e(a, () => t().a), e(o, () => t().f), e(c, () => t().e), e(l, () => t().b), e(u, () => t().c), e(d, () => t().d), n;
	})();
}
export { Ue as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "why-it-matters", r = {
	g: "Warum diese Metriken wichtig sind",
	a: "Bundle-Größe",
	f: "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.",
	e: "Rendering & Hydrierung",
	b: "Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
	c: "Dynamisches Laden",
	d: "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich."
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
}), n = "why-it-matters", r = {
	g: "Why These Metrics Matter",
	a: "Bundle Size",
	f: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	e: "Rendering & Hydration",
	b: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	c: "Dynamic Loading",
	d: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
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
}), n = "why-it-matters", r = {
	g: "Por qué estas métricas importan",
	a: "Tamaño del bundle",
	f: "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.",
	e: "Renderizado e Hidratación",
	b: "Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar re-renderizaciones en todo el árbol. Durante la hidratación de SSR, analizar и adjuntar objetos de traducción masivos añade latencia antes de que la página se vuelva interactiva, lo que afecta directamente al Time to Interactive (TTI).",
	c: "Carga dinámica",
	d: "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propios compromisos: solicitudes en cascada, destellos de contenido no traducido и complejidad de caché. Medir ambas estrategias es esencial."
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
}), n = "why-it-matters", r = {
	g: "Pourquoi ces mesures sont importantes",
	a: "Taille du bundle",
	f: "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
	e: "Rendu & Hydratation",
	b: "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
	c: "Chargement dynamique",
	d: "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel."
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
}), n = "why-it-matters", r = {
	g: "Perché queste metriche sono importanti",
	a: "Dimensione del bundle",
	f: "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
	e: "Rendering e idratazione",
	b: "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
	c: "Caricamento dinamico",
	d: "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il caricamento lazy introduce i propri compromessi: richieste waterfall, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale."
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
}), n = "why-it-matters", r = {
	g: "なぜこれらの指標が重要なのか",
	a: "バンドルサイズ",
	f: "バンドルとは、世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に、多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリは、ランタイムコードだけで数キロバイトから数十キロバイトまで重量が大きく异なり、さらに翻訳ファイル自体が加わります。",
	e: "レンダリングとハイドレーション",
	b: "すべてのコンポーネントに大規模なJSON辞書を接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体のリレンダリングを引き起こす可能性があります。SSRのハイドレーション中に巨大な翻訳オブジェクトを解析してアタッチすると、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。",
	c: "動的ロード",
	d: "すべての翻訳を事前にロードすると、初期ペイロードが過負荷になります。動的（遅延）ロードは、ルートや名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延ロードには、ウォーターフォールリクエスト、翻訳されていないコンテンツのちらつき（FOUC）、キャッシュの複雑さなどのトレードオフが伴います。両方の戦略を測定することが不可欠です。"
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
}), n = "why-it-matters", r = {
	g: "이 지표가 중요한 이유",
	a: "번들 크기",
	f: "번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.",
	e: "렌더링 및 수화(Hydration)",
	b: "모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지는 시간까지 지연이 발생하며, 이는 Time to Interactive (TTI) 에 직접적인 영향을 미칩니다.",
	c: "동적 로드",
	d: "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로드는 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로드에는 워터폴 요청, 번역되지 않은 콘텐츠의 플래시(FOUC) 및 캐시 복잡성과 같은 고유한 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다."
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
}), n = "why-it-matters", r = {
	g: "Por que estas métricas importam",
	a: "Tamanho do bundle",
	f: "O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.",
	e: "Renderização e hidratação",
	b: "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
	c: "Carregamento dinâmico",
	d: "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
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
}), n = "why-it-matters", r = {
	g: "Почему эти показатели важны",
	a: "Размер бандла",
	f: "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
	e: "Рендеринг и гидратация",
	b: "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
	c: "Динамическая загрузка",
	d: "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо."
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
}), n = "why-it-matters", r = {
	g: "为什么这些指标很重要",
	a: "捆绑包大小",
	f: "捆绑包是发送给全球每个用户的数据。捆绑包越大意味着下载时间越长——特别是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
	e: "渲染与水合",
	b: "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译环境中的任何更改都可能触发整个树的重新渲染。在 SSR 水合期间，解析和附加庞大的翻译对象会增加页面变得可交互之前的延迟——直接影响可交互时间 (TTI)。",
	c: "动态加载",
	d: "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了其自身的权衡：瀑布式请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
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
