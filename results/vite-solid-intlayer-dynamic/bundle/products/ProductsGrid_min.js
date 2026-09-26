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
	de: () => import("./intlayer-ProductsGrid-1geobf-de-CCKd7vZO.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-ProductsGrid-1geobf-en-C8sfx7xQ.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-ProductsGrid-1geobf-es-Be-cMixE.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-ProductsGrid-1geobf-fr-CR0CyJ5R.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-ProductsGrid-1geobf-it-Cx82YSGz.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-ProductsGrid-1geobf-ja-B6KSc_8U.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-ProductsGrid-1geobf-ko-DoeuKk-a.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-ProductsGrid-1geobf-pt-BnQliQTj.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-ProductsGrid-1geobf-ru-CV7XYNJE.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-ProductsGrid-1geobf-zh-PAU-TuUw.js").then((e) => e.t).then((e) => e.default)
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
}, We = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), Ge = n("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"mb-4 text-sm text-muted-foreground\"></p></div><div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"></span><button type=button class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Ke() {
	let n = Ue(b, "products-grid"), i = () => [
		{
			name: n().e.value,
			desc: n().n.value,
			price: n().j.value
		},
		{
			name: n().f.value,
			desc: n().c.value,
			price: "$29/mo"
		},
		{
			name: n().g.value,
			desc: n().m.value,
			price: n().i.value
		},
		{
			name: n().l.value,
			desc: n().a.value,
			price: "$99 one-time"
		},
		{
			name: n().o.value,
			desc: n().d.value,
			price: "$19/mo"
		},
		{
			name: n().h.value,
			desc: n().b.value,
			price: "$49/mo"
		}
	];
	return (() => {
		var a = We();
		return t(a, e(r, {
			get each() {
				return i();
			},
			children: (e) => (() => {
				var r = Ge(), i = r.firstChild, a = i.firstChild, o = a.nextSibling, s = i.nextSibling.firstChild, c = s.nextSibling;
				return t(a, () => e.name), t(o, () => e.desc), t(s, () => e.price), t(c, () => n().k), r;
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
}), n = "products-grid", r = {
	e: "Benchmark CLI",
	n: "Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.",
	j: "Kostenlos",
	f: "Benchmark Cloud",
	c: "Automatisiertes cloudbasiertes Benchmarking mit historischer Nachverfolgung, Warnungen und Team-Dashboards.",
	g: "Benchmark Enterprise",
	m: "On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.",
	i: "Kontaktieren Sie uns",
	l: "Migrationsassistent",
	a: "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.",
	o: "Übersetzungs-QA",
	d: "Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.",
	h: "Bundle-Optimierer",
	b: "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.",
	k: "Mehr erfahren"
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
}), n = "products-grid", r = {
	e: "Benchmark CLI",
	n: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	j: "Free",
	f: "Benchmark Cloud",
	c: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	g: "Benchmark Enterprise",
	m: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	i: "Contact Us",
	l: "Migration Assistant",
	a: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	o: "Translation QA",
	d: "Automated quality checks for missing translations, pluralization issues, and context errors.",
	h: "Bundle Optimizer",
	b: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	k: "Learn More"
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
}), n = "products-grid", r = {
	e: "CLI de Benchmark",
	n: "Ejecute benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.",
	j: "Gratis",
	f: "Benchmark Cloud",
	c: "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
	g: "Benchmark Enterprise",
	m: "Despliegue local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.",
	i: "Contáctenos",
	l: "Asistente de migración",
	a: "Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n sin tiempo de inactividad.",
	o: "Control de calidad de traducción",
	d: "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.",
	h: "Optimizador de bundle",
	b: "Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.",
	k: "Más información"
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
}), n = "products-grid", r = {
	e: "CLI Benchmark",
	n: "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
	j: "Gratuit",
	f: "Benchmark Cloud",
	c: "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
	g: "Benchmark Enterprise",
	m: "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.",
	i: "Contactez-nous",
	l: "Assistant de migration",
	a: "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.",
	o: "QA de traduction",
	d: "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
	h: "Optimiseur de bundle",
	b: "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.",
	k: "En savoir plus"
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
}), n = "products-grid", r = {
	e: "CLI del Benchmark",
	n: "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.",
	j: "Gratis",
	f: "Benchmark Cloud",
	c: "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
	g: "Benchmark Enterprise",
	m: "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.",
	i: "Contattaci",
	l: "Assistente alla migrazione",
	a: "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.",
	o: "QA delle traduzioni",
	d: "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.",
	h: "Ottimizzatore del bundle",
	b: "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.",
	k: "Scopri di più"
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
}), n = "products-grid", r = {
	e: "ベンチマーク CLI",
	n: "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。",
	j: "無料",
	f: "ベンチマーククラウド",
	c: "履歴の追跡、アラート、およびチームダッシュボードを備えた自動クラウドベースのベンチマーク。",
	g: "ベンチマークエンタープライズ",
	m: "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。",
	i: "お問い合わせ",
	l: "移行アシスタント",
	a: "i18nライブラリ間でコードベースをダウンタイムなしで移行するのを支援するAI搭載ツール。",
	o: "翻訳QA",
	d: "欠落している翻訳、複数形の問題、およびコンテキストエラーの自動品質チェック。",
	h: "バンドルオプティマイザー",
	b: "ツリーシェイキングとコード分割を使用して、本番用のi18nバンドルを分析および最適化します。",
	k: "詳細はこちら"
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
}), n = "products-grid", r = {
	e: "벤치마크 CLI",
	n: "터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성 및 CI 통합을 지원합니다.",
	j: "무료",
	f: "벤치마크 클라우드",
	c: "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.",
	g: "벤치마크 엔터프라이즈",
	m: "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 갖춘 온프레미스 배포.",
	i: "문의하기",
	l: "마이그레이션 어시스턴트",
	a: "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하는 데 도움이 되는 AI 기반 도구입니다.",
	o: "번역 QA",
	d: "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.",
	h: "번들 최적화 도구",
	b: "트리 쉐이킹 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.",
	k: "자세히 알아보기"
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
}), n = "products-grid", r = {
	e: "CLI de Benchmark",
	n: "Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.",
	j: "Grátis",
	f: "Benchmark Cloud",
	c: "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.",
	g: "Benchmark Enterprise",
	m: "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.",
	i: "Contate-nos",
	l: "Assistente de migração",
	a: "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.",
	o: "QA de tradução",
	d: "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.",
	h: "Otimizador de bundle",
	b: "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.",
	k: "Saiba Mais"
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
}), n = "products-grid", r = {
	e: "CLI для бенчмарков",
	n: "Запускайте бенчмарки локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.",
	j: "Бесплатно",
	f: "Облачный бенчмарк",
	c: "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными дашбордами.",
	g: "Бенчмарк для предприятий",
	m: "Локальное развертывание с поддержкой SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.",
	i: "Связаться с нами",
	l: "Помощник по миграции",
	a: "Инструмент на базе ИИ, который помогает переносить кодовую базу между библиотеками i18n без простоев.",
	o: "QA переводов",
	d: "Автоматизированные проверки качества на наличие отсутствующих переводов, проблем с множественным числом и контекстных ошибок.",
	h: "Оптимизатор бандла",
	b: "Анализирует и оптимизирует ваш i18n-бандл для продакшена с помощью tree-shaking и разделения кода.",
	k: "Узнать больше"
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
}), n = "products-grid", r = {
	e: "基准测试 CLI",
	n: "从您的终端在本地运行基准测试。支持自定义配置和 CI 集成。",
	j: "免费",
	f: "基准测试云",
	c: "具有历史跟踪、警报和团队仪表板的自动化云基准测试。",
	g: "基准测试企业版",
	m: "支持 SSO、审计日志、自定义 SLA 和专用支持的本地部署。",
	i: "联系我们",
	l: "迁移助手",
	a: "人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。",
	o: "翻译质量保证",
	d: "针对缺失翻译、复数问题和上下文错误的自动质量检查。",
	h: "捆绑包优化器",
	b: "通过摇树优化和代码拆分，分析并优化您的生产 i18n 捆绑包。",
	k: "了解更多"
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
