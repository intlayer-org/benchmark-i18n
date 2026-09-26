import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, createRenderEffect as a, createResource as o, lazy as s, untrack as c, useContext as l } from "solid-js";
import { A as u, useParams as d } from "@solidjs/router";
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
}, ne = ["en"], re = "__intlayerPreloaded", h = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? ne,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), g = (e, t) => !!e && (t ?? p.locales).includes(e), ie = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _ = {
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
}, v = (e = _) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ie) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = !1, y, oe = () => typeof window > "u" ? v(_) : (ae ||= (y = v(_), !0), y), se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = h(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return g(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (g(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = h(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return v() ?? t;
}, le, b, ue = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (b === void 0 || le !== e) && (le = e, b = ce()), b;
}, x = {
	de: () => import("./intlayer-Footer-g5mu0y-de-BuMrsd_e.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-Footer-g5mu0y-en-BpcLxMLw.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-Footer-g5mu0y-es-C7sQUuYe.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-Footer-g5mu0y-fr-gNhRXP32.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-Footer-g5mu0y-it-CPLZ3xVh.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-Footer-g5mu0y-ja-CN5lx0zU.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-Footer-g5mu0y-ko-Ba4ZjfXo.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-Footer-g5mu0y-pt-CgrZlKU1.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-Footer-g5mu0y-ru-f6CYbO5-.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-Footer-g5mu0y-zh-DTTG1rvt.js").then((e) => e.t).then((e) => e.default)
}, S = ue(), C = x[S];
typeof window < "u" && typeof C == "function" && C().then((e) => {
	x.__intlayerPreloaded = {
		locale: S,
		dictionary: e
	};
}, () => void 0);
var w = /* @__PURE__ */ new Map(), de = (e, t) => Object.create(new Proxy(e, {
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
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = w.get(t);
	i || (i = /* @__PURE__ */ new Map(), w.set(t, i));
	let a = i.get(r);
	return a || (a = de(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, pe = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, fe(t, Array.prototype)), r;
}, T = /* @__PURE__ */ new WeakMap(), E = 0, me = (e) => {
	if (!e) return "base";
	let t = T.get(e);
	if (t) return t;
	E += 1;
	let n = `p${E}`;
	return T.set(e, n), n;
}, he = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, ge = (e, t, n) => `${e}_${t}_${me(n)}`, _e = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= he && r.clear(), r.set(t, n), n;
}, ve = "translation", ye = "object", be = "array", A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
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
}, M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !M(e) || !M(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? N(a, i) : a;
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
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
}, I = P, L = (e) => P, R = P, Se = P, z = P, B = P, V = (e) => P, H = P, Ce = (e, t = !0) => [
	F(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	I,
	L(e ?? p.defaultLocale),
	R,
	Se,
	V(e ?? p.defaultLocale),
	H,
	z,
	B
].filter((e) => e !== P), we = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), U = /* @__PURE__ */ new WeakSet(), Te = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ge(r ?? p.defaultLocale, "", n), o = _e(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ce(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !U.has(e)
		};
		U.add(e);
		try {
			return we(e.content, t, s);
		} finally {
			t.eager && U.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, Ee = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
	if (n && n.locale === t) return n.dictionary;
}, W = null, G = null;
W?.catch(() => {}), G?.catch(() => {});
var De = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => pe({
		value: t.children,
		children: t.children
	})
}, Oe = P, ke = P;
s(() => W.then((e) => ({ default: e.MarkdownRenderer }))), s(() => W.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Ae = P;
s(() => G.then((e) => ({ default: e })));
var je = P, K = /* @__PURE__ */ new Map(), Me = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		De,
		F(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		I,
		L(e ?? p.defaultLocale),
		R,
		V(e ?? p.defaultLocale),
		H,
		z,
		B,
		Oe,
		ke,
		Ae,
		je
	].filter((e) => e !== P);
	return K.set(n, r), r;
}, Ne = (e, t) => Te(e, t, Me(typeof t == "object" && t ? t.locale : t)), Pe = oe, q = r({
	locale: () => Pe() ?? p?.defaultLocale,
	setLocale: () => null
}), J = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Y = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), X = Symbol("LOADABLE_SETTLED_VALUE"), Z = /* @__PURE__ */ new Map(), Fe = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Ie = (e, t) => typeof e == "function" ? e(t) : e, Le = (e, t) => {
	let n = Fe(e), r = Z.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Ie(t, e).then((e) => (Z.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw Z.delete(n), e;
	});
	return Z.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Re = (e, t) => {
	let n = Fe(e);
	Z.has(n) || Z.set(n, {
		status: "success",
		value: t
	});
}, ze = (e, t) => typeof t == "function" ? t.bind(e) : t, Be = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === J.toString ? () => "" : e === J.valueOf ? () => void 0 : e === J.value ? "" : Y, $ = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === J.promiseThen) return;
			let a = Q(e(), n);
			if (i === X) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : ze(a, Reflect.get(Object(a), i));
			let o = Be(i);
			return o === Y ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return c(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[X];
}, He = (e, t) => {
	let [n] = o(() => typeof e == "function" ? e() : e, (e) => Le(e, t));
	return a(() => {
		n();
	}), $(() => n());
}, Ue = (e, t) => {
	let n = l(q) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return Ne(Ve(e) ?? e, t ?? r);
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
	let { locale: r } = l(q) ?? {}, i = p.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, u = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, d = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, f = Ee(o, c());
	return f && Re(u(), f), Ue(He(u, d), s);
}, Ge = n("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">i18n Benchmark</h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\">GitHub</a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">contact@intlayer.org</p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function Ke() {
	let n = We(x, "footer"), r = d(), i = () => r.locale ?? "en";
	return (() => {
		var r = Ge(), a = r.firstChild.firstChild, o = a.firstChild, s = o.firstChild.nextSibling, c = o.nextSibling, l = c.firstChild, d = l.nextSibling.firstChild.nextSibling, f = d.nextSibling, p = c.nextSibling.firstChild, m = a.nextSibling;
		return t(s, () => n().a), t(l, () => n().f), t(d, e(u, {
			get href() {
				return `/${i()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return n().e;
			}
		})), t(f, e(u, {
			get href() {
				return `/${i()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return n().c;
			}
		})), t(p, () => n().b), t(m, () => n().d), r;
	})();
}
export { Ke as default };
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
};
export { t };
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
};
export { t };
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
};
export { t };
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
};
export { t };
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
};
export { t };
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
};
export { t };
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
};
export { t };
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
};
export { t };
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
};
export { t };
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
