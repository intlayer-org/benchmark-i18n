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
	de: () => import("./intlayer-OpenPositions-c1sk4g-de-BEgNrL6k.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-OpenPositions-c1sk4g-en-DWtFtxna.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-OpenPositions-c1sk4g-es-COHBg6gb.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-OpenPositions-c1sk4g-fr-BT0VFBC8.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-OpenPositions-c1sk4g-it-Bq3s5bS3.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-OpenPositions-c1sk4g-ja-DuLM5yae.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-OpenPositions-c1sk4g-ko-C_HZZHsr.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-OpenPositions-c1sk4g-pt-CWhBBd2D.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-OpenPositions-c1sk4g-ru-BIACQGwP.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-OpenPositions-c1sk4g-zh-CoyZm8Yn.js").then((e) => e.t).then((e) => e.default)
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
}, We = n("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">"), Ge = n("<div class=space-y-4>"), Ke = n("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span></div></div><button type=button class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function qe() {
	let n = Ue(b, "open-positions"), i = () => [
		{
			title: n().p.value,
			location: n().n.value,
			type: "Full-time",
			dept: n().j.value,
			desc: n().c.value
		},
		{
			title: n().b.value,
			location: n().n.value,
			type: "Full-time",
			dept: n().j.value,
			desc: n().f.value
		},
		{
			title: n().q.value,
			location: n().n.value,
			type: "Part-time",
			dept: n().h.value,
			desc: n().e.value
		},
		{
			title: n().g.value,
			location: n().o.value,
			type: "Full-time",
			dept: n().d.value,
			desc: n().i.value
		},
		{
			title: n().m.value,
			location: n().n.value,
			type: "Full-time",
			dept: n().j.value,
			desc: n().k.value
		}
	];
	return [(() => {
		var e = We();
		return t(e, () => n().l), e;
	})(), (() => {
		var a = Ge();
		return t(a, e(r, {
			get each() {
				return i();
			},
			children: (e) => (() => {
				var r = Ke(), i = r.firstChild, a = i.firstChild, o = a.nextSibling, s = o.nextSibling.firstChild, c = s.nextSibling, l = c.nextSibling, u = i.nextSibling;
				return t(a, () => e.title), t(o, () => e.desc), t(s, () => e.dept), t(c, () => e.location), t(l, () => e.type), t(u, () => n().a), r;
			})()
		})), a;
	})()];
}
export { qe as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "open-positions", r = {
	p: "Senior Frontend Engineer",
	n: "Remote",
	j: "Engineering",
	c: "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
	b: "Backend Engineer",
	f: "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.",
	q: "Technical Writer",
	h: "Dokumentation",
	e: "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
	g: "DevRel Engineer",
	o: "San Francisco / Remote",
	d: "Community",
	i: "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
	m: "QA Engineer",
	k: "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
	l: "Offene Stellen",
	a: "Jetzt bewerben"
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
}), n = "open-positions", r = {
	p: "Senior Frontend Engineer",
	n: "Remote",
	j: "Engineering",
	c: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	b: "Backend Engineer",
	f: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	q: "Technical Writer",
	h: "Documentation",
	e: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	g: "DevRel Engineer",
	o: "San Francisco / Remote",
	d: "Community",
	i: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	m: "QA Engineer",
	k: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
	l: "Open Positions",
	a: "Apply Now"
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
}), n = "open-positions", r = {
	p: "Ingeniero Frontend Senior",
	n: "Remoto",
	j: "Ingeniería",
	c: "Cree y mantenga nuestro panel de benchmarking y herramientas de desarrollo utilizando React, TypeScript y Vite.",
	b: "Ingeniero Backend",
	f: "Diseñe y escale nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.",
	q: "Redactor Técnico",
	h: "Documentación",
	e: "Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.",
	g: "Ingeniero DevRel",
	o: "San Francisco / Remoto",
	d: "Comunidad",
	i: "Participe con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
	m: "Ingeniero QA",
	k: "Garantice la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.",
	l: "Posiciones abiertas",
	a: "Postular ahora"
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
}), n = "open-positions", r = {
	p: "Ingénieur Frontend Senior",
	n: "À distance",
	j: "Ingénierie",
	c: "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.",
	b: "Ingénieur Backend",
	f: "Concevoir et mettre à l’échelle notre infrastructure de benchmarking cloud gérant des milliers d’exécutions automatisées chaque jour.",
	q: "Rédacteur Technique",
	h: "Documentation",
	e: "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
	g: "Ingénieur DevRel",
	o: "San Francisco / À distance",
	d: "Communauté",
	i: "Interagir avec la communauté i18n par des conférences, des ateliers, des articles de blog et des contributions open source.",
	m: "Ingénieur QA",
	k: "Assurer l'exactitude et la fiabilité des résultats de benchmark grâce à des tests et des validations rigoureux.",
	l: "Postes Ouverts",
	a: "Postuler Maintenant"
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
}), n = "open-positions", r = {
	p: "Ingegnere Frontend Senior",
	n: "Remoto",
	j: "Ingegneria",
	c: "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
	b: "Backend Engineer",
	f: "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
	q: "Scrittore tecnico",
	h: "Documentazione",
	e: "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
	g: "Ingegnere DevRel",
	o: "San Francisco / Remoto",
	d: "Comunità",
	i: "Interagisci con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
	m: "Ingegnere QA",
	k: "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
	l: "Posizioni aperte",
	a: "Candidati ora"
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
}), n = "open-positions", r = {
	p: "シニアフロントエンドエンジニア",
	n: "リモート",
	j: "エンジニアリング",
	c: "React、TypeScript、およびViteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。",
	b: "バックエンドエンジニア",
	f: "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールします。",
	q: "テクニカルライター",
	h: "ドキュメント",
	e: "ベンチマークプラットフォームの包括的なガイド、APIリファレンス、およびチュートリアルを作成します。",
	g: "DevRelエンジニア",
	o: "サンフランシスコ / リモート",
	d: "コミュニティ",
	i: "トーク、ワークショップ、ブログ投稿、およびオープンソースへの貢献を通じて、i18nコミュニティと交流します。",
	m: "QAエンジニア",
	k: "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
	l: "募集中の職種",
	a: "今すぐ応募"
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
}), n = "open-positions", r = {
	p: "시니어 프론트엔드 엔지니어",
	n: "원격",
	j: "엔지니어링",
	c: "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
	b: "백엔드 엔지니어",
	f: "매일 수천 건의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
	q: "테크니컬 라이터",
	h: "문서",
	e: "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 만듭니다.",
	g: "DevRel 엔지니어",
	o: "샌프란시스코 / 원격",
	d: "커뮤니티",
	i: "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.",
	m: "QA 엔지니어",
	k: "엄격한 테스트 및 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
	l: "채용 중인 직무",
	a: "지금 지원하기"
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
}), n = "open-positions", r = {
	p: "Engenheiro Frontend Sênior",
	n: "Remoto",
	j: "Engenharia",
	c: "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
	b: "Engenheiro Backend",
	f: "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
	q: "Escritor Técnico",
	h: "Documentação",
	e: "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
	g: "Engenheiro DevRel",
	o: "San Francisco / Remoto",
	d: "Comunidade",
	i: "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
	m: "Engenheiro de QA",
	k: "Garanta a precisão e a confiabilidade dos resultados do benchmark por meio de testes e validação rigorosos.",
	l: "Vagas abertas",
	a: "Candidatar-se agora"
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
}), n = "open-positions", r = {
	p: "Старший фронтенд-инженер",
	n: "Удаленно",
	j: "Разработка",
	c: "Создание и поддержка нашего дашборда для бенчмаркинга и инструментов разработки с использованием React, TypeScript и Vite.",
	b: "Бэкенд-инженер",
	f: "Проектирование и масштабирование нашей облачной инфраструктуры для бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.",
	q: "Технический писатель",
	h: "Документация",
	e: "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы бенчмаркинга.",
	g: "DevRel-инженер",
	o: "Сан-Франциско / Удаленно",
	d: "Сообщество",
	i: "Взаимодействие с сообществом i18n посредством выступлений, семинаров, постов в блогах и вклада в open source.",
	m: "QA-инженер",
	k: "Обеспечение точности и надежности результатов бенчмарков путем тщательного тестирования и валидации.",
	l: "Открытые вакансии",
	a: "Подать заявку"
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
}), n = "open-positions", r = {
	p: "高级前端工程师",
	n: "远程",
	j: "工程",
	c: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
	b: "后端工程师",
	f: "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。",
	q: "技术文档工程师",
	h: "文档",
	e: "为我们的基准测试平台创建全面的指南、API 参考和教程。",
	g: "开发者关系工程师",
	o: "旧金山 / 远程",
	d: "社区",
	i: "通过演讲、工作坊、博客文章和开源贡献与 i18n 社区互动。",
	m: "质量保证工程师",
	k: "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
	l: "开放职位",
	a: "现在申请"
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
