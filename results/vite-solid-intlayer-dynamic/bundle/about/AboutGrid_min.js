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
	de: () => import("./intlayer-AboutGrid-fjl599-de-D3WaMg1Z.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-AboutGrid-fjl599-en-D2KhNo23.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-AboutGrid-fjl599-es-C5tRsfAK.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-AboutGrid-fjl599-fr-DhccA7K7.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-AboutGrid-fjl599-it-C5TQLYWd.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-AboutGrid-fjl599-ja-BPhatVP-.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-AboutGrid-fjl599-ko-lOjQ8vgY.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-AboutGrid-fjl599-pt-DeLN3SLk.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-AboutGrid-fjl599-ru-CechYBoo.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-AboutGrid-fjl599-zh-DJ484HJF.js").then((e) => e.t).then((e) => e.default)
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
}, He = t("<div class=\"grid gap-8 md:grid-cols-2\"><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"></h2><p class=\"text-sm text-muted-foreground\"></p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"></h2><p class=\"text-sm text-muted-foreground\">");
function Ue() {
	let t = Ve(b, "about-grid");
	return (() => {
		var n = He(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = r.nextSibling.firstChild, s = o.nextSibling;
		return e(i, () => t().d), e(a, () => t().a), e(o, () => t().b), e(s, () => t().c), n;
	})();
}
export { Ue as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "about-grid", r = {
	d: "Warum dies existiert",
	a: "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.",
	b: "Methodik",
	c: "Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktionsbundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten bei Gebietschemata-Wechseln zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten."
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
}), n = "about-grid", r = {
	d: "Why This Exists",
	a: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	b: "Methodology",
	c: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
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
}), n = "about-grid", r = {
	d: "Por qué existe esto",
	a: "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al paquete? ¿Cómo afecta a la renderización cuando se cargan miles de claves de traducción? ¿La carga diferida ayuda realmente o simplemente traslada el coste? Este benchmark responde a esas preguntas con datos reales.",
	b: "Metodología",
	c: "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles."
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
}), n = "about-grid", r = {
	d: "Pourquoi cela existe",
	a: "Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.",
	b: "Méthodologie",
	c: "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles."
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
}), n = "about-grid", r = {
	d: "Perché esiste questo",
	a: "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il lazy loading aiuta davvero o sposta semplicemente il costo? Questo benchmark risponde a queste domande con dati reali.",
	b: "Metodologia",
	c: "La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili."
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
}), n = "about-grid", r = {
	d: "なぜこれが存在するのか",
	a: "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの人間工学に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重みを追加するのか？数千の翻訳キーがロードされたときにレンダリングにどのような影響を与えるのか？遅延ロードは実際に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでそれらの質問に答えます。",
	b: "方法論",
	c: "同じ10ページのアプリが、ライブラリごとに1回構築されます。本番バンドルを（rollup-plugin-visualizer経由で）測定し、ロードメトリクスのためにLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェア上のCIで実行されます。"
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
}), n = "about-grid", r = {
	d: "이것이 존재하는 이유",
	a: "i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 초점을 맞추고 있지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미칩니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가합니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답변합니다.",
	b: "방법론",
	c: "동일한 10페이지 앱이 라이브러리당 한 번씩 빌드됩니다. (rollup-plugin-visualizer를 통해) 프로덕션 번들을 측정하고 로딩 메트릭에 대한 Lighthouse 감사를 실행하며 React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 재현 가능한 결과를 보장하기 위해 모든 테스트는 일관된 하드웨어의 CI에서 실행됩니다."
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
}), n = "about-grid", r = {
	d: "Por que isso existe",
	a: "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.",
	b: "Metodologia",
	c: "O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar os tempos de renderização durante as trocas de idioma. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis."
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
}), n = "about-grid", r = {
	d: "Зачем это нужно",
	a: "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют влияние на производительность: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли ленивая загрузка помогает или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.",
	b: "Методология",
	c: "Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшен-бандл (с помощью rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при переключении локалей. Все тесты запускаются в CI на одинаковом оборудовании для обеспечения воспроизводимости результатов."
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
}), n = "about-grid", r = {
	d: "为什么存在这个",
	a: "选择 i18n 库是一个具有长期影响的架构决策。大多数比较都侧重于 API 的人体工程学，但很少有人衡量性能成本：库向捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？该基准测试用真实数据回答了这些问题。",
	b: "方法论",
	c: "相同的 10 页应用程序每个库构建一次。我们衡量生产捆绑包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核加载指标，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致的硬件上的 CI 中运行，以确保结果可复现。"
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
