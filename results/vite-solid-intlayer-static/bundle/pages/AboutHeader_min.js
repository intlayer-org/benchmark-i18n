import { insert as e, template as t } from "solid-js/web";
import { createContext as n, createMemo as r, lazy as i, onMount as a, useContext as o } from "solid-js";
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
}, c = {
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
}, l = {
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
}, u = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var d = {
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
}, f = ((e = d) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!u) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(d), p = n({
	locale: () => f ?? c?.defaultLocale,
	setLocale: () => null
}), m = /* @__PURE__ */ new WeakMap(), h = 0, ee = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${ee(n)}`, b = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
}, S = "translation", C = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: C,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], te = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ne = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, re = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ie = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, N = (e, t) => {
	if (!re(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : te(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ne(e, n, t, s)).map((t) => ie(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, P = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, F = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (I(e) && I(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : L(e[r], t[r]));
		return n;
	}
	return e;
}, R = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => L(e, t));
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return R(o, e, t);
	}
}, V = z, H = (e) => z, U = z, W = z, G = z, K = z, q = (e) => z, J = z, ae = (e, t = !0) => [
	B(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	V,
	U,
	W,
	q(e ?? c.defaultLocale),
	J,
	G,
	K
], oe = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), se = (e, t, n) => {
	let { locale: r, selector: i } = P(t), a = y(r ?? c.defaultLocale, F(i), n), o = b(e, a);
	if (o.hit) return o.content;
	let s = n ?? ae(r), l = N(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return oe(e.content, t, s);
	};
	return l === null ? x(e, a, null) : Array.isArray(l) ? x(e, a, l.map(u)) : x(e, a, u(l));
}, Y = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, ce = (e) => typeof e == "string" && /^\d+$/.test(e), le = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === Y.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === Y.toString) return () => String(t ?? "");
		if (n === Y.valueOf) return () => t;
		if (n === Y.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== Y.constructor && n !== Y.length && !ce(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, X = null, Z = null;
X?.catch(() => {}), Z?.catch(() => {});
var ue = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => le({
		...n,
		value: n.children,
		children: n.children
	})
}, de = z, fe = z;
i(() => X.then((e) => ({ default: e.MarkdownRenderer }))), i(() => X.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var pe = z;
i(() => Z.then((e) => ({ default: e })));
var me = z, Q = /* @__PURE__ */ new Map(), he = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		B(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		V,
		H(e ?? c.defaultLocale),
		U,
		q(e ?? c.defaultLocale),
		J,
		G,
		K,
		ue,
		de,
		fe,
		pe,
		me
	];
	return Q.set(n, r), r;
}, ge = (e, t) => se(e, t, he(typeof t == "object" && t ? t.locale : t)), $ = Symbol("LOADABLE_SETTLED_VALUE"), _e = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[$];
}, ve = (e, t) => {
	let n = o(p) ?? {}, i = r(() => {
		let r = n?.locale?.();
		return ge(_e(e) ?? e, t ?? r);
	});
	return new Proxy(i, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
};
function ye(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var be = t("<h1 class=\"mb-4 text-3xl font-bold text-foreground\">"), xe = t("<p class=\"mb-8 max-w-3xl text-muted-foreground\">");
function Se() {
	let t = ve(s);
	return ye("AboutHeader"), [(() => {
		var n = be();
		return e(n, () => t().a), n;
	})(), (() => {
		var n = xe();
		return e(n, () => t().b), n;
	})()];
}
export { Se as default };
