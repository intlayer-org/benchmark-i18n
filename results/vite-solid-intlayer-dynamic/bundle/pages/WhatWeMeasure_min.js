import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r, createContext as i, createMemo as a, createRenderEffect as o, createResource as s, lazy as c, untrack as l, useContext as u } from "solid-js";
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
}, ne = ["en"], re = "__intlayerPreloaded", m = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? f?.defaultLocale ?? "en",
	mode: e.mode ?? p?.mode ?? "prefix-no-default",
	locales: e.locales ?? f?.locales ?? ne,
	rewrite: e.rewrite ?? p?.rewrite,
	domains: e.domains ?? p?.domains
}), h = (e, t) => !!e && (t ?? f.locales).includes(e), ie = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var g = {
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
}, _ = (e = g) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ie) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = !1, v, oe = () => typeof window > "u" ? _(g) : (ae ||= (v = _(g), !0), v), se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = m(t);
	if (!n || !r) return n;
	let a = d(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return h(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (h(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = m(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return _() ?? t;
}, le, y, ue = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (y === void 0 || le !== e) && (le = e, y = ce()), y;
}, b = {
	de: () => import("./intlayer-WhatWeMeasure-1284rs-de-LfHrLXtF.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-WhatWeMeasure-1284rs-en-YcO4v36s.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-WhatWeMeasure-1284rs-es-BYds6E-x.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-WhatWeMeasure-1284rs-fr-qWTmxhza.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-WhatWeMeasure-1284rs-it-D59YBLpu.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-WhatWeMeasure-1284rs-ja-BUVEehRZ.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-WhatWeMeasure-1284rs-ko-AA3Ul6Ic.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-WhatWeMeasure-1284rs-pt-4o61ZyUN.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-WhatWeMeasure-1284rs-ru-DBkqh6k0.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-WhatWeMeasure-1284rs-zh-CYluGMLk.js").then((e) => e.t).then((e) => e.default)
}, x = ue(), S = b[x];
typeof window < "u" && typeof S == "function" && S().then((e) => {
	b.__intlayerPreloaded = {
		locale: x,
		dictionary: e
	};
}, () => void 0);
var C = /* @__PURE__ */ new Map(), de = (e, t) => Object.create(new Proxy(e, {
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
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = C.get(t);
	i || (i = /* @__PURE__ */ new Map(), C.set(t, i));
	let a = i.get(r);
	return a || (a = de(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, pe = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, fe(t, Array.prototype)), r;
}, w = /* @__PURE__ */ new WeakMap(), T = 0, me = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, he = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, ge = (e, t, n) => `${e}_${t}_${me(n)}`, _e = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= he && r.clear(), r.set(t, n), n;
}, ve = "translation", ye = "object", be = "array", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, N = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, P = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? N : {
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
}, F = N, I = (e) => N, L = N, Se = N, R = N, z = N, B = (e) => N, V = N, Ce = (e, t = !0) => [
	P(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	F,
	I(e ?? f.defaultLocale),
	L,
	Se,
	B(e ?? f.defaultLocale),
	V,
	R,
	z
].filter((e) => e !== N), we = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), H = /* @__PURE__ */ new WeakSet(), Te = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ge(r ?? f.defaultLocale, "", n), o = _e(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ce(r), c = e, l = (e) => {
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
			return we(e.content, t, s);
		} finally {
			t.eager && H.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, Ee = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
	if (n && n.locale === t) return n.dictionary;
}, U = null, W = null;
U?.catch(() => {}), W?.catch(() => {});
var De = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => pe({
		value: t.children,
		children: t.children
	})
}, Oe = N, ke = N;
c(() => U.then((e) => ({ default: e.MarkdownRenderer }))), c(() => U.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Ae = N;
c(() => W.then((e) => ({ default: e })));
var je = N, G = /* @__PURE__ */ new Map(), Me = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		De,
		P(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		F,
		I(e ?? f.defaultLocale),
		L,
		B(e ?? f.defaultLocale),
		V,
		R,
		z,
		Oe,
		ke,
		Ae,
		je
	].filter((e) => e !== N);
	return G.set(n, r), r;
}, Ne = (e, t) => Te(e, t, Me(typeof t == "object" && t ? t.locale : t)), Pe = oe, K = i({
	locale: () => Pe() ?? f?.defaultLocale,
	setLocale: () => null
}), q = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, J = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Y = Symbol("LOADABLE_SETTLED_VALUE"), X = /* @__PURE__ */ new Map(), Z = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Fe = (e, t) => typeof e == "function" ? e(t) : e, Ie = (e, t) => {
	let n = Z(e), r = X.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Fe(t, e).then((e) => (X.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw X.delete(n), e;
	});
	return X.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Le = (e, t) => {
	let n = Z(e);
	X.has(n) || X.set(n, {
		status: "success",
		value: t
	});
}, Re = (e, t) => typeof t == "function" ? t.bind(e) : t, ze = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === q.toString ? () => "" : e === q.valueOf ? () => void 0 : e === q.value ? "" : J, $ = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === q.promiseThen) return;
			let a = Q(e(), n);
			if (i === Y) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Re(a, Reflect.get(Object(a), i));
			let o = ze(i);
			return o === J ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return l(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Be = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Y];
}, Ve = (e, t) => {
	let [n] = s(() => typeof e == "function" ? e() : e, (e) => Ie(e, t));
	return o(() => {
		n();
	}), $(() => n());
}, He = (e, t) => {
	let n = u(K) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return Ne(Be(e) ?? e, t ?? r);
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
	let { locale: r } = u(K) ?? {}, i = f.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, d = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, p = Ee(o, c());
	return p && Le(l(), p), He(Ve(l, d), s);
}, We = n("<section class=\"mx-auto mt-12 max-w-3xl\"><h2 class=\"mb-4 text-2xl font-bold text-foreground\"></h2><ul class=space-y-4>"), Ge = n("<li class=\"rounded-md border border-border p-4\"><span class=\"block text-sm font-bold text-primary\"></span><span class=\"mt-1 block text-sm text-muted-foreground\">");
function Ke() {
	let n = Ue(b, "what-we-measure"), i = () => [
		{
			metric: n().a.value,
			desc: n().i.value
		},
		{
			metric: n().h.value,
			desc: n().d.value
		},
		{
			metric: n().e.value,
			desc: n().b.value
		},
		{
			metric: n().f.value,
			desc: n().k.value
		},
		{
			metric: n().g.value,
			desc: n().c.value
		}
	];
	return (() => {
		var a = We(), o = a.firstChild, s = o.nextSibling;
		return t(o, () => n().j), t(s, e(r, {
			get each() {
				return i();
			},
			children: (e) => (() => {
				var n = Ge(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.metric), t(i, () => e.desc), n;
			})()
		})), a;
	})();
}
export { Ke as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "what-we-measure", r = {
	a: "Auswirkungen auf die Bundle-Größe",
	i: "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.",
	h: "Rendering-Overhead",
	d: "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.",
	e: "Hydrierungskosten",
	b: "Während SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.",
	f: "Effektivität von Lazy Loading",
	k: "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
	g: "Geschwindigkeit beim Gebietschemata-Wechsel",
	c: "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des Re-Renderings von Komponenten und der Aktualisierung des DOM.",
	j: "Was wir messen"
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
}), n = "what-we-measure", r = {
	a: "Bundle size impact",
	i: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	h: "Rendering overhead",
	d: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	e: "Hydration cost",
	b: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	f: "Lazy loading effectiveness",
	k: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	g: "Locale switch speed",
	c: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	j: "What We Measure"
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
}), n = "what-we-measure", r = {
	a: "Impacto en el tamaño del paquete",
	i: "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.",
	h: "Sobrecarga de renderizado",
	d: "Cuánto tiempo adicional añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizaciones innecesarias en todo el árbol de componentes.",
	e: "Coste de hidratación",
	b: "Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
	f: "Efectividad de la carga diferida",
	k: "Si la división de las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
	g: "Velocidad de cambio de idioma",
	c: "Qué tan rápido la aplicación puede cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, la re-renderización de componentes y la actualización del DOM.",
	j: "Qué medimos"
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
}), n = "what-we-measure", r = {
	a: "Impact sur la taille du bundle",
	i: "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
	h: "Surcharge de rendu",
	d: "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.",
	e: "Coût d'hydratation",
	b: "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
	f: "Efficacité du chargement différé",
	k: "Si la division des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis elle introduit (requêtes en cascade, FOUC, complexité du cache).",
	g: "Vitesse de changement de langue",
	c: "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
	j: "Ce que nous mesurons"
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
}), n = "what-we-measure", r = {
	a: "Impatto sulla dimensione del bundle",
	i: "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.",
	h: "Overhead di rendering",
	d: "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un singolo fornitore di contesto possono causare re-rendering non necessari nell'albero dei componenti.",
	e: "Costo di idratazione",
	b: "Durante il SSR, i dati di traduzione vengono serializzati in HTML. I dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
	f: "Efficacia del lazy loading",
	k: "Se la suddivisione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste waterfall, FOUC, complessità della cache).",
	g: "Velocità di cambio lingua",
	c: "Quanto velocemente l'app può passare da una lingua all'altra in fase di runtime, inclusi il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.",
	j: "Cosa misuriamo"
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
}), n = "what-we-measure", r = {
	a: "バンドルサイズの影響",
	i: "i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速ネットワークでのダウンロード時間に直接影響します。",
	h: "レンダリングオーバーヘッド",
	d: "ライブラリがReactのレンダリングサイクルにどれだけの時間を追加するか。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要なリレンダリングを引き起こす可能性があります。",
	e: "ハイドレーションコスト",
	b: "SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。",
	f: "遅延ロードの有効性",
	k: "ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するかどうか、およびどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。",
	g: "ロケール切り替え速度",
	c: "新しい翻訳の取得、コンポーネントのリレンダリング、DOMの更新を含め、実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。",
	j: "測定内容"
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
}), n = "what-we-measure", r = {
	a: "번들 크기 영향",
	i: "i18n 라이브러리 및 해당 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
	h: "렌더링 오버헤드",
	d: "라이브러리가 React의 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 삽입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 유발할 수 있습니다.",
	e: "수화 비용",
	b: "SSR 중에는 번역 데이터가 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 대화형이 되는 순간인 수화를 늦춥니다.",
	f: "지연 로딩 효과",
	k: "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 여부입니다.",
	g: "로케일 전환 속도",
	c: "새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트를 포함하여 런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지입니다.",
	j: "측정 항목"
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
}), n = "what-we-measure", r = {
	a: "Impacto no tamanho do pacote",
	i: "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
	h: "Sobrecarga de renderização",
	d: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.",
	e: "Custo de hidratação",
	b: "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentano o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.",
	f: "Eficácia do carregamento lento",
	k: "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs ela introduz (requisições em cascata, FOUC, complexità de cache).",
	g: "Velocidade de troca de idioma",
	c: "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.",
	j: "O que medimos"
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
}), n = "what-we-measure", r = {
	a: "Влияние на размер бандла",
	i: "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и её файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.",
	h: "Накладные расходы на рендеринг",
	d: "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.",
	e: "Стоимость гидратации",
	b: "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают размер HTML-пейлоада и замедляют гидратацию — момент, когда страница становится интерактивной.",
	f: "Эффективность ленивой загрузки",
	k: "Действительно ли разделение переводов по маршрутам или пространствам имен уменьшает начальную загрузку, и какие компромиссы оно привносит (каскадные запросы, FOUC, сложность кэширования).",
	g: "Скорость переключения локали",
	c: "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
	j: "Что мы измеряем"
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
}), n = "what-we-measure", r = {
	a: "捆绑包大小影响",
	i: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
	h: "渲染开销",
	d: "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树发生不必要的重新渲染。",
	e: "水合成本",
	b: "在 SSR 期间，翻译数据被序列化为 HTML。大型字典会增加 HTML 负载并减慢水合过程（即页面变得可交互的时刻）。",
	f: "延迟加载效果",
	k: "按路由或命名空间拆分翻译是否真的减少了初始加载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
	g: "语言环境切换速度",
	c: "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
	j: "我们测量什么"
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
