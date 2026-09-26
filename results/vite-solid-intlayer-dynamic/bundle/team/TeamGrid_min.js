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
	de: () => import("./intlayer-TeamGrid-kfg1o5-de-GEPAsbBu.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-TeamGrid-kfg1o5-en-Cd15iHiC.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-TeamGrid-kfg1o5-es-C5HyU3O1.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-TeamGrid-kfg1o5-fr-XMCs5Qgm.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-TeamGrid-kfg1o5-it-D5a0HuXS.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-TeamGrid-kfg1o5-ja-BInT63_k.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-TeamGrid-kfg1o5-ko-1o6WKzrZ.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-TeamGrid-kfg1o5-pt-DBgGCyY_.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-TeamGrid-kfg1o5-ru-Dl84_uKj.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-TeamGrid-kfg1o5-zh-DO3yvVm_.js").then((e) => e.t).then((e) => e.default)
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
}, We = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), Ge = n("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"></div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"mb-2 text-xs font-medium text-primary\"></p><p class=\"text-sm text-muted-foreground\">");
function Ke() {
	let n = Ue(b, "team-grid"), i = () => [
		{
			name: n().o.value,
			role: n().h.value,
			bio: n().g.value
		},
		{
			name: n().l.value,
			role: n().n.value,
			bio: n().p.value
		},
		{
			name: n().a.value,
			role: n().d.value,
			bio: n().m.value
		},
		{
			name: n().q.value,
			role: n().i.value,
			bio: n().j.value
		},
		{
			name: n().r.value,
			role: n().c.value,
			bio: n().f.value
		},
		{
			name: n().e.value,
			role: n().b.value,
			bio: n().k.value
		}
	];
	return (() => {
		var n = We();
		return t(n, e(r, {
			get each() {
				return i();
			},
			children: (e) => (() => {
				var n = Ge(), r = n.firstChild, i = r.nextSibling, a = i.nextSibling, o = a.nextSibling;
				return t(r, () => e.name.split(" ").map((e) => e[0]).join("")), t(i, () => e.name), t(a, () => e.role), t(o, () => e.bio), n;
			})()
		})), n;
	})();
}
export { Ke as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "Gründerin & leitende Ingenieurin",
	g: "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
	l: "Marcus Weber",
	n: "Performance Engineer",
	p: "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
	a: "Aisha Patel",
	d: "Developer Advocate",
	m: "Leidenschaft für Entwicklererfahrung und Bildung. Sprecher bei React Conf, JSConf und i18nNext.",
	q: "Tomás Rodríguez",
	i: "Full-Stack Developer",
	j: "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.",
	r: "Yuki Tanaka",
	c: "Data Analyst",
	f: "Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. PhD in angewandter Statistik vom MIT.",
	e: "Elena Kowalski",
	b: "Community Manager",
	k: "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance."
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
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "Founder & Lead Engineer",
	g: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	l: "Marcus Weber",
	n: "Performance Engineer",
	p: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	a: "Aisha Patel",
	d: "Developer Advocate",
	m: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	q: "Tomás Rodríguez",
	i: "Full-Stack Developer",
	j: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	r: "Yuki Tanaka",
	c: "Data Analyst",
	f: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	e: "Elena Kowalski",
	b: "Community Manager",
	k: "Manages community contributions, partnerships, and events. Background in open source governance."
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
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "Fundadora e ingeniera principal",
	g: "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.",
	l: "Marcus Weber",
	n: "Ingeniero de rendimiento",
	p: "Especializado en optimización del rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.",
	a: "Aisha Patel",
	d: "Defensor del desarrollador",
	m: "Apasionada por la experiencia y educación del desarrollador. Ponente en React Conf, JSConf e i18nNext.",
	q: "Tomás Rodríguez",
	i: "Desarrollador Full-Stack",
	j: "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto en Lingui.",
	r: "Yuki Tanaka",
	c: "Analista de datos",
	f: "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.",
	e: "Elena Kowalski",
	b: "Gerente de comunidad",
	k: "Gestiona las contribuciones, asociaciones y eventos de la comunidad. Antecedentes en gobernanza de código abierto."
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
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "Fondatrice et ingénieure en chef",
	g: "Ancienne ingénieure Google avec 10 ans d'expérience dans la création de systèmes d'internationalisation à grande échelle.",
	l: "Marcus Weber",
	n: "Ingénieur Performance",
	p: "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.",
	a: "Aisha Patel",
	d: "Developer Advocate",
	m: "Passionnée par l'expérience et l'éducation des développeurs. Conférencière à React Conf, JSConf et i18nNext.",
	q: "Tomás Rodríguez",
	i: "Développeur Full-Stack",
	j: "Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
	r: "Yuki Tanaka",
	c: "Analyste de données",
	f: "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
	e: "Elena Kowalski",
	b: "Community Manager",
	k: "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source."
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
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "Fondatore e Ingegnere Capo",
	g: "Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su scala.",
	l: "Marcus Weber",
	n: "Ingegnere delle prestazioni",
	p: "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente in Vercel.",
	a: "Aisha Patel",
	d: "Developer Advocate",
	m: "Appassionato di developer experience e formazione. Speaker a React Conf, JSConf e i18nNext.",
	q: "Tomás Rodríguez",
	i: "Sviluppatore Full-Stack",
	j: "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Contributore open source di Lingui.",
	r: "Yuki Tanaka",
	c: "Analista di dati",
	f: "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in Statistica Applicata al MIT.",
	e: "Elena Kowalski",
	b: "Community Manager",
	k: "Gestisce i contributi della comunità, le partnership e gli eventi. Esperienza nella governance open source."
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
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "創設者兼リードエンジニア",
	g: "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。",
	l: "Marcus Weber",
	n: "パフォーマンスエンジニア",
	p: "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
	a: "Aisha Patel",
	d: "デベロッパーアドボケイト",
	m: "開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。",
	q: "Tomás Rodríguez",
	i: "フルスタックデベロッパー",
	j: "ベンチマークインフラストラクチャとCI / CDパイプラインを保守します。Linguiへのオープンソースコントリビューター。",
	r: "Yuki Tanaka",
	c: "データアナリスト",
	f: "すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。",
	e: "Elena Kowalski",
	b: "コミュニティマネージャー",
	k: "コミュニティへの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴。"
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
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "설립자 및 수석 엔지니어",
	g: "대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.",
	l: "Marcus Weber",
	n: "성능 엔지니어",
	p: "JavaScript 성능 최적화 및 벤치마킹 방법론을 전공했습니다. 이전에는 Vercel에서 근무했습니다.",
	a: "Aisha Patel",
	d: "디벨로퍼 애드보킷",
	m: "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.",
	q: "Tomás Rodríguez",
	i: "풀스택 개발자",
	j: "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.",
	r: "Yuki Tanaka",
	c: "데이터 분석가",
	f: "모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.",
	e: "Elena Kowalski",
	b: "커뮤니티 매니저",
	k: "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경."
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
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "Fundador e Engenheiro Principal",
	g: "Ex-engenheiro do Google com 10 anos de experiência na criação de sistemas de internacionalização em escala.",
	l: "Marcus Weber",
	n: "Engenheiro de Performance",
	p: "Especializado em otimização de desempenho de JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
	a: "Aisha Patel",
	d: "Developer Advocate",
	m: "Apaixonado por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
	q: "Tomás Rodríguez",
	i: "Desenvolvedore Full-Stack",
	j: "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.",
	r: "Yuki Tanaka",
	c: "Analista de Dados",
	f: "Garante o rigor estatístico em todos os resultados do benchmark. PhD em Estatística Aplicada pelo MIT.",
	e: "Elena Kowalski",
	b: "Gerente de Comunidade",
	k: "Gerencia contribuições, parcerias e eventos da comunidade. Experiência em governança de código aberto."
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
}), n = "team-grid", r = {
	o: "Сара Чен",
	h: "Основатель и ведущий инженер",
	g: "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
	l: "Маркус Вебер",
	n: "Инженер по производительности",
	p: "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
	a: "Аиша Патель",
	d: "Developer Advocate",
	m: "Увлечен вопросами опыта разработчиков и обучения. Спикер на React Conf, JSConf и i18nNext.",
	q: "Томас Родригес",
	i: "Full-stack разработчик",
	j: "Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Автор open source вкладов в Lingui.",
	r: "Юки Танака",
	c: "Аналитик данных",
	f: "Обеспечивает статистическую точность всех результатов бенчмарков. Доктор прикладной статистики (MIT).",
	e: "Елена Ковальски",
	b: "Комьюнити-менеджер",
	k: "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами."
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
}), n = "team-grid", r = {
	o: "Sarah Chen",
	h: "创始人兼首席工程师",
	g: "前 Google 工程师，拥有 10 年大规模构建国际化系统的经验。",
	l: "Marcus Weber",
	n: "性能工程师",
	p: "专注于 JavaScript 性能优化和基准测试方法论。此前曾任职于 Vercel。",
	a: "Aisha Patel",
	d: "开发者关系",
	m: "热衷于开发人员体验和教育。曾任 React Conf、JSConf 和 i18nNext 的演讲者。",
	q: "Tomás Rodríguez",
	i: "全栈开发人员",
	j: "维护基准测试基础设施和 CI/CD 管道。Lingui 的开源贡献者。",
	r: "Yuki Tanaka",
	c: "数据分析师",
	f: "确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。",
	e: "Elena Kowalski",
	b: "社区经理",
	k: "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
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
