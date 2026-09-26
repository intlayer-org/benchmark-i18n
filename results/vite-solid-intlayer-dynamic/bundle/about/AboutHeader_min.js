import { insert as e, template as t } from "solid-js/web";
import { createContext as n, createMemo as r, createRenderEffect as i, createResource as a, lazy as o, onMount as s, untrack as c, useContext as l } from "solid-js";
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
}, te = ["en"], ne = "__intlayerPreloaded", m = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? d?.defaultLocale ?? "en",
	mode: e.mode ?? f?.mode ?? "prefix-no-default",
	locales: e.locales ?? d?.locales ?? te,
	rewrite: e.rewrite ?? f?.rewrite,
	domains: e.domains ?? f?.domains
}), h = (e, t) => !!e && (t ?? d.locales).includes(e), re = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!re) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ie = !1, v, ae = () => typeof window > "u" ? _(g) : (ie ||= (v = _(g), !0), v), oe = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = m(t);
	if (!n || !r) return n;
	let a = u(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return h(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (h(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, se = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = m(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ee(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = oe(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return _() ?? t;
}, y, b, ce = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (b === void 0 || y !== e) && (y = e, b = se()), b;
}, x = {
	de: () => import("./intlayer-AboutHeader-11ly1u-de-CNsx3Yg_.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-AboutHeader-11ly1u-en-3pQKdmxg.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-AboutHeader-11ly1u-es-BNFboE6p.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-AboutHeader-11ly1u-fr-CYDCRVz-.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-AboutHeader-11ly1u-it-C80iT36V.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-AboutHeader-11ly1u-ja-uLWePPGw.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-AboutHeader-11ly1u-ko-BaxB4wka.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-AboutHeader-11ly1u-pt-C8AdEoE_.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-AboutHeader-11ly1u-ru-BEhPbvkC.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-AboutHeader-11ly1u-zh-BxSf8-Cn.js").then((e) => e.t).then((e) => e.default)
}, S = ce(), C = x[S];
typeof window < "u" && typeof C == "function" && C().then((e) => {
	x.__intlayerPreloaded = {
		locale: S,
		dictionary: e
	};
}, () => void 0);
var w = /* @__PURE__ */ new Map(), le = (e, t) => Object.create(new Proxy(e, {
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
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = w.get(t);
	i || (i = /* @__PURE__ */ new Map(), w.set(t, i));
	let a = i.get(r);
	return a || (a = le(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, de = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, ue(t, Array.prototype)), r;
}, T = /* @__PURE__ */ new WeakMap(), E = 0, fe = (e) => {
	if (!e) return "base";
	let t = T.get(e);
	if (t) return t;
	E += 1;
	let n = `p${E}`;
	return T.set(e, n), n;
}, pe = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, me = (e, t, n) => `${e}_${t}_${fe(n)}`, he = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= pe && r.clear(), r.set(t, n), n;
}, ge = "translation", _e = "object", ve = "array", A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
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
}, I = P, L = (e) => P, R = P, be = P, z = P, B = P, V = (e) => P, H = P, xe = (e, t = !0) => [
	F(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	I,
	L(e ?? d.defaultLocale),
	R,
	be,
	V(e ?? d.defaultLocale),
	H,
	z,
	B
].filter((e) => e !== P), Se = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), U = /* @__PURE__ */ new WeakSet(), Ce = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = me(r ?? d.defaultLocale, "", n), o = he(e, a);
	if (o.hit) return o.content;
	let s = n ?? xe(r), c = e, l = (e) => {
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
			return Se(e.content, t, s);
		} finally {
			t.eager && U.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, we = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ne];
	if (n && n.locale === t) return n.dictionary;
}, W = null, G = null;
W?.catch(() => {}), G?.catch(() => {});
var Te = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => de({
		value: t.children,
		children: t.children
	})
}, Ee = P, De = P;
o(() => W.then((e) => ({ default: e.MarkdownRenderer }))), o(() => W.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Oe = P;
o(() => G.then((e) => ({ default: e })));
var ke = P, K = /* @__PURE__ */ new Map(), Ae = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		Te,
		F(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		I,
		L(e ?? d.defaultLocale),
		R,
		V(e ?? d.defaultLocale),
		H,
		z,
		B,
		Ee,
		De,
		Oe,
		ke
	].filter((e) => e !== P);
	return K.set(n, r), r;
}, je = (e, t) => Ce(e, t, Ae(typeof t == "object" && t ? t.locale : t)), Me = ae, q = n({
	locale: () => Me() ?? d?.defaultLocale,
	setLocale: () => null
}), J = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Y = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), X = Symbol("LOADABLE_SETTLED_VALUE"), Z = /* @__PURE__ */ new Map(), Q = (e) => typeof e == "string" ? e : e.cacheKey, $ = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Ne = (e, t) => typeof e == "function" ? e(t) : e, Pe = (e, t) => {
	let n = Q(e), r = Z.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Ne(t, e).then((e) => (Z.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw Z.delete(n), e;
	});
	return Z.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Fe = (e, t) => {
	let n = Q(e);
	Z.has(n) || Z.set(n, {
		status: "success",
		value: t
	});
}, Ie = (e, t) => typeof t == "function" ? t.bind(e) : t, Le = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === J.toString ? () => "" : e === J.valueOf ? () => void 0 : e === J.value ? "" : Y, Re = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === J.promiseThen) return;
			let a = $(e(), n);
			if (i === X) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Ie(a, Reflect.get(Object(a), i));
			let o = Le(i);
			return o === Y ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = $(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : Re(() => {
				let t = $(e(), n);
				if (typeof t == "function") return c(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, ze = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[X];
}, Be = (e, t) => {
	let [n] = a(() => typeof e == "function" ? e() : e, (e) => Pe(e, t));
	return i(() => {
		n();
	}), Re(() => n());
}, Ve = (e, t) => {
	let n = l(q) ?? {}, i = r(() => {
		let r = n?.locale?.();
		return je(ze(e) ?? e, t ?? r);
	});
	return new Proxy(i, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, He = (e, t, n) => {
	let { locale: r } = l(q) ?? {}, i = d.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, u = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, f = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, p = we(o, c());
	return p && Fe(u(), p), Ve(Be(u, f), s);
};
function Ue(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var We = t("<h1 class=\"mb-4 text-3xl font-bold text-foreground\">"), Ge = t("<p class=\"mb-8 max-w-3xl text-muted-foreground\">");
function Ke() {
	let t = He(x, "about-header");
	return Ue("AboutHeader"), [(() => {
		var n = We();
		return e(n, () => t().a), n;
	})(), (() => {
		var n = Ge();
		return e(n, () => t().b), n;
	})()];
}
export { Ke as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "about-header", r = {
	a: "Über diesen Benchmark",
	b: "Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck besteht darin, eine realistische, mehrseitige React-App bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können."
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
}), n = "about-header", r = {
	a: "About This Benchmark",
	b: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
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
}), n = "about-header", r = {
	a: "Acerca de este benchmark",
	b: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React realista de varias páginas donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
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
}), n = "about-header", r = {
	a: "À propos de ce benchmark",
	b: "Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
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
}), n = "about-header", r = {
	a: "Informazioni su questo benchmark",
	b: "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche."
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
}), n = "about-header", r = {
	a: "このベンチマークについて",
	b: "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、さまざまなi18nライブラリを統合し、同一条件下で測定できる現実的なマルチページReactアプリを提供することです。"
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
}), n = "about-header", r = {
	a: "이 벤치마크 정보",
	b: "이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 다양한 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다."
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
}), n = "about-header", r = {
	a: "Sobre este benchmark",
	b: "Este é um aplicativo de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React de várias páginas realista, onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas."
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
}), n = "about-header", r = {
	a: "Об этом бенчмарке",
	b: "Это открытое тестовое приложение — не продукт и не компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
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
}), n = "about-header", r = {
	a: "关于此基准测试",
	b: "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个真实的、多页面的 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。"
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
