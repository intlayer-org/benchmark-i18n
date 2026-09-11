import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as ee } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Fragment as p, jsxDEV as m } from "react/jsx-dev-runtime";
var te = {
	key: "about-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				aboutThisBenchmark: "About This Benchmark",
				thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
			},
			fr: {
				aboutThisBenchmark: "À propos de ce benchmark",
				thisIsAnOpenSource: "Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
			},
			es: {
				aboutThisBenchmark: "Sobre este benchmark",
				thisIsAnOpenSource: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
			},
			de: {
				aboutThisBenchmark: "Über diesen Benchmark",
				thisIsAnOpenSource: "Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können."
			},
			it: {
				aboutThisBenchmark: "Informazioni su questo benchmark",
				thisIsAnOpenSource: "Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e mesurate in condizioni identiche."
			},
			pt: {
				aboutThisBenchmark: "Sobre este benchmark",
				thisIsAnOpenSource: "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas."
			},
			zh: {
				aboutThisBenchmark: "关于此基准测试",
				thisIsAnOpenSource: "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。"
			},
			ja: {
				aboutThisBenchmark: "このベンチマークについて",
				thisIsAnOpenSource: "これはオープンソースのテストアプリケーションであり、製品や会社ではありません。その唯一の目的は、Identicalな条件下で異なるi18nライブラリを統合して測定できる、現実的な多ページReactアプリを提供することです。"
			},
			ko: {
				aboutThisBenchmark: "이 벤치마크에 대하여",
				thisIsAnOpenSource: "이것은 제품이나 회사가 아닌 오픈 소스 테스트 애플리케이션입니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다."
			},
			ru: {
				aboutThisBenchmark: "Об этом бенчмарке",
				thisIsAnOpenSource: "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
			}
		}
	}
}, ne = /* @__PURE__ */ new WeakMap(), re = 0, ie = (e) => {
	if (!e) return "base";
	let t = ne.get(e);
	if (t) return t;
	re += 1;
	let n = `p${re}`;
	return ne.set(e, n), n;
}, ae = 256, h = /* @__PURE__ */ new WeakMap(), g = (e) => typeof e == "object" && !!e, oe = (e, t, n) => `${e}_${t}_${ie(n)}`, se = (e, t) => {
	if (!g(e)) return { hit: !1 };
	let n = h.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, _ = (e, t, n) => {
	if (!g(e)) return n;
	let r = h.get(e);
	return r || (r = /* @__PURE__ */ new Map(), h.set(e, r)), r.size >= ae && r.clear(), r.set(t, n), n;
}, ce = "translation", le = "enumeration", ue = "plural", v = "insertion", de = "object", fe = "array", pe = "markdown", y = "html", me = "gender", he = "select", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: fe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: de,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = b(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = b(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, ge = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, _e = (e, t) => e[ge(e, t) ?? "fallback"], x = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", ve = /[^A-Za-z0-9._&=-]/g, C = /[^A-Za-z0-9._-]/g, ye = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, w = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ye);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, T = (e) => e === void 0 ? S : typeof e == "string" ? w(e, ve) : Object.keys(e).sort().map((t) => `${w(t, C)}=${w(String(e[t]), C)}`).join("&"), E = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(T) : [T(e)], be = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, xe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, we = (e, t) => {
	if (!Se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : be(E(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => xe(e, n, t, s)).map((t) => Ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Te = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, D = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? E(n).join(",") : String(n)}`;
}).join("|") : "", O = {
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
}, k = {
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
}, Ee = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, A = "\x1B[0m", De = "\x1B[34m", Oe = "\x1B[31m", ke = "\x1B[32m", Ae = "\x1B[36m", je = (e) => e, Me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = je(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ne = (e, t) => (n, r) => Me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), j = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? A : n : A}` : e;
j("✗", Oe), j("✓", ke), j("⏲", De);
var Pe = 50, M = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Set(), Fe = (e) => {
	N.has(e) || (N.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ie = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, Le = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Fe(e), Ie[e]);
};
function P(e, t, n) {
	let r = t ?? O?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = M.get(a);
	o || (o = /* @__PURE__ */ new Map(), M.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Le(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Re = (e, t, n) => e[P("PluralRules", n).select(t)] ?? e.other, ze = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, Be = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ve = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[y] : e[pe];
}, He = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? y : pe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = He(e, x(Ve(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
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
					type: ce,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Be(o, e, t);
	}
}, V = z, Ue = (e) => z, H = z, We = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = x(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, Ge = z, U = z, W = (e) => z, Ke = z, qe = (e, t = !0) => [
	B(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
	V,
	H,
	We,
	W(e ?? O.defaultLocale),
	Ke,
	Ge,
	U
], Je = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), Ye = (e, t, n) => {
	let { locale: r, selector: i } = Te(t), a = oe(r ?? O.defaultLocale, D(i), n), o = se(e, a);
	if (o.hit) return o.content;
	let s = n ?? qe(r), c = we(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Je(e.content, t, s);
	};
	return c === null ? _(e, a, null) : Array.isArray(c) ? _(e, a, c.map(l)) : _(e, a, l(c));
}, Xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ze = /\{\{\s*(.*?)\s*\}\}/g, Qe = (e, t = {}) => {
	if (!Object.values(t).some(Xe)) return {
		isSimple: !0,
		parts: e.replace(Ze, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ze), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, $e = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, et = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, tt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? P("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? P("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : P("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return P("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, nt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? tt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : tt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return nt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[v], t, n);
	if (r.nodeType === "html") return q(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[ue];
		return q(Re(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[le], i = et.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) et.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = P("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? _e(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[he], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(ze(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[me];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, rt = (e, t = {}, n = "en") => {
	let r = q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, it = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, at = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = at(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), ot = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = ot(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), st = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return ct(e, (e) => $e(t, r(e)), r);
}, ct = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return rt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = it(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: at(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = it(t), o = r(e, i);
			return o === void 0 ? n(e) : ot(J(o), a);
		}
	});
}, lt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
	return new Proxy(r, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, ut = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => lt({
		...n,
		value: n.children,
		children: n.children
	})
}, dt = z, ft = (e, n) => {
	let i = Qe(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, pt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ft(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, mt = z, ht = z, Y = /* @__PURE__ */ new Map(), gt = (e, t = !0) => {
	let n = `${e ?? O.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		B(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
		V,
		Ue(e ?? O.defaultLocale),
		H,
		W(e ?? O.defaultLocale),
		Ke,
		Ge,
		U,
		ut,
		dt,
		pt,
		mt,
		ht
	];
	return Y.set(n, r), r;
}, _t = (e, t) => Ye(e, t, gt(typeof t == "object" && t ? t.locale : t)), vt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, yt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = vt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, bt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var X = {
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
}, xt = (e = X) => {
	let { locales: t } = O;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!bt) for (let t = 0; t < (k.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(k.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, St = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !bt && k.storage.cookies) for (let n = 0; n < k.storage.cookies.length; n++) {
		let { name: r, attributes: i } = k.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: vt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, yt(r, e, i));
			} catch {}
		}
	}
}, Ct = xt(X), wt = (e, t) => St(e, {
	...X,
	isCookieEnabled: t
}), Tt = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Et = ({ children: e }) => (Tt(), e), Dt = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Ot = ({ children: e }) => (Dt(), e), kt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, At = (e, t = O?.locales, n = O?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, Z = n({
	locale: Ct ?? O?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), jt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = O ?? {}, [u, f] = ee(e ?? Ct ?? t ?? l);
	o(() => {
		e && e !== u && f(e);
	}, [e]), o(() => {
		kt();
	}, []);
	let p = i ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), wt(e, s);
		}
	}), m = At(u);
	return d(Z.Provider, {
		value: {
			locale: m,
			setLocale: p,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Mt = ({ children: e, ...t }) => f(jt, {
	...t,
	children: [
		d(Et, {}),
		d(Ot, {}),
		e
	]
}), Nt = (e, t) => {
	let { locale: n, variant: r } = a(Z) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${D(i)}` : i;
	return c(() => _t(e, i), [e.key, o]);
}, Pt = ((e, t) => {
	let { locale: n } = a(Z) ?? {};
	return st(n, Nt(e), t);
}), Ft = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ne({ log: Ee })(`${j("IntlProvider", Ae)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(Mt, {
	locale: e,
	children: t
}, String(e)));
function It(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/about/AboutHeader.tsx";
function Lt() {
	let e = Pt(te);
	return It("AboutHeader"), m(p, { children: [m("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: e("aboutThisBenchmark")
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 9,
		columnNumber: 7
	}, this), m("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: e("thisIsAnOpenSource")
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 12,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: Q,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Rt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function zt({ children: t }) {
	return m(e.Suspense, {
		fallback: null,
		children: m(Ft, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Rt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Rt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/about/AboutHeader.wrapper.tsx";
function Bt() {
	return m(zt, { children: m(Lt, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Bt as default };
