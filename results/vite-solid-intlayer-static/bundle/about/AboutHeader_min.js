import { Dynamic as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, onMount as a, useContext as o } from "solid-js";
var s = {
	key: "about-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				a: "About This Benchmark",
				b: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
			},
			fr: {
				a: "À propos de ce benchmark",
				b: "Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
			},
			es: {
				a: "Acerca de este benchmark",
				b: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React realista de varias páginas donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
			},
			de: {
				a: "Über diesen Benchmark",
				b: "Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck besteht darin, eine realistische, mehrseitige React-App bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können."
			},
			it: {
				a: "Informazioni su questo benchmark",
				b: "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche."
			},
			pt: {
				a: "Sobre este benchmark",
				b: "Este é um aplicativo de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React de várias páginas realista, onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas."
			},
			zh: {
				a: "关于此基准测试",
				b: "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个真实的、多页面的 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。"
			},
			ja: {
				a: "このベンチマークについて",
				b: "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、さまざまなi18nライブラリを統合し、同一条件下で測定できる現実的なマルチページReactアプリを提供することです。"
			},
			ko: {
				a: "이 벤치마크 정보",
				b: "이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 다양한 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다."
			},
			ru: {
				a: "Об этом бенчмарке",
				b: "Это открытое тестовое приложение — не продукт и не компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
			}
		}
	}
}, c = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, l = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(l(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
}, u = {
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, f = "translation", p = "object", m = "array", h = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => h(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => h(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: m,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: p,
					key: r
				}]
			}, i = h(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, g = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, _ = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (g(e) && g(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : _(e[r], t[r]));
		return n;
	}
	return e;
}, v = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => _(e, t));
}, y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, b = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: f,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return v(o, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (e, t = !0) => [
	b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	x,
	S,
	C,
	T(e ?? u.defaultLocale),
	E,
	w
], O = (e, t, n = []) => h(e, {
	...t,
	plugins: n
}), k = (e, t, n = D(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return O(e.content, r, n);
}, A = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => c({
		...n,
		value: n.children,
		children: n.children
	})
}, j = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? y : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => c({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : l(e)
	})
}, M = y, N = y, P = y, F = /* @__PURE__ */ new Map(), I = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (F.has(n)) return F.get(n);
	let r = [
		b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		x,
		S,
		T(e ?? u.defaultLocale),
		E,
		w,
		A,
		j,
		M,
		N,
		P
	];
	return F.set(n, r), r;
}, L = (e, t) => k(e, t, I(t)), R = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var z = (e = B) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!R) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, B = {
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
}, V = z(B), H = r({
	locale: () => V ?? u?.defaultLocale,
	setLocale: () => null
}), U = (e, t) => {
	let n = o(H) ?? {};
	return i(() => L(e, t ?? n?.locale?.()));
};
function W(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var G = n("<h1 class=\"mb-4 text-3xl font-bold text-foreground\">"), K = n("<p class=\"mb-8 max-w-3xl text-muted-foreground\">");
function q() {
	let e = U(s);
	return W("AboutHeader"), [(() => {
		var n = G();
		return t(n, () => e().aboutThisBenchmark), n;
	})(), (() => {
		var n = K();
		return t(n, () => e().thisIsAnOpenSource), n;
	})()];
}
export { q as default };
