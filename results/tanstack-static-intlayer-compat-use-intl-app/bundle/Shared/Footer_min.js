import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Link as u, useParams as d } from "@tanstack/react-router";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
var h = {
	key: "footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				resources: "Resources",
				contact: "Contact",
				github: "GitHub",
				methodology: "Methodology",
				contributing: "Contributing",
				builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
				anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
			},
			fr: {
				resources: "Ressources",
				contact: "Contact",
				github: "GitHub",
				methodology: "Méthodologie",
				contributing: "Contribuer",
				builtWith: "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
				anOpenSourceTestApplication: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application."
			},
			es: {
				resources: "Recursos",
				contact: "Contacto",
				github: "GitHub",
				methodology: "Metodología",
				contributing: "Contribuir",
				builtWith: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
				anOpenSourceTestApplication: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación."
			},
			de: {
				resources: "Ressourcen",
				contact: "Kontakt",
				github: "GitHub",
				methodology: "Methodik",
				contributing: "Beitragen",
				builtWith: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
				anOpenSourceTestApplication: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität."
			},
			it: {
				resources: "Risorse",
				contact: "Contatti",
				github: "GitHub",
				methodology: "Metodologia",
				contributing: "Contribuire",
				builtWith: "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
				anOpenSourceTestApplication: "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app."
			},
			pt: {
				resources: "Recursos",
				contact: "Contato",
				github: "GitHub",
				methodology: "Metodologia",
				contributing: "Contribuir",
				builtWith: "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.",
				anOpenSourceTestApplication: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo."
			},
			zh: {
				resources: "资源",
				contact: "联系我们",
				github: "GitHub",
				methodology: "方法论",
				contributing: "贡献",
				builtWith: "i18n Benchmark — 开源项目。使用 React、Vite 和 TanStack Router 构建。",
				anOpenSourceTestApplication: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。"
			},
			ja: {
				resources: "リソース",
				contact: "お問い合わせ",
				github: "GitHub",
				methodology: "方法論",
				contributing: "貢献する",
				builtWith: "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。",
				anOpenSourceTestApplication: "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーションです。"
			},
			ko: {
				resources: "리소스",
				contact: "문의하기",
				github: "GitHub",
				methodology: "방법론",
				contributing: "기여하기",
				builtWith: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
				anOpenSourceTestApplication: "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다."
			},
			ru: {
				resources: "Ресурсы",
				contact: "Контакт",
				github: "GitHub",
				methodology: "Методология",
				contributing: "Вклад",
				builtWith: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
				anOpenSourceTestApplication: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения."
			}
		}
	}
}, g = /* @__PURE__ */ new WeakMap(), _ = 0, ee = (e) => {
	if (!e) return "base";
	let t = g.get(e);
	if (t) return t;
	_ += 1;
	let n = `p${_}`;
	return g.set(e, n), n;
}, v = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, te = (e, t, n) => `${e}_${t}_${ee(n)}`, ne = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= v && r.clear(), r.set(t, n), n;
}, re = "translation", ie = "enumeration", ae = "plural", oe = "condition", S = "insertion", se = "object", ce = "array", C = "markdown", w = "html", le = "gender", ue = "select", T = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, E);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, T(t, e, {
		type: ce,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: se,
			key: r
		};
		if (t.eager) {
			n[r] = E(e[r], T(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = E(e[r], T(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, de = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, fe = (e, t) => e[de(e, t) ?? "fallback"], pe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), D = {
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
}, O = {
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
}, me = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, k = "\x1B[0m", he = "\x1B[34m", ge = "\x1B[31m", _e = "\x1B[32m", ve = "\x1B[36m", ye = (e) => e, be = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ye(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, xe = (e, t) => (n, r) => be(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), A = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? k : n : k}` : e;
A("✗", ge), A("✓", _e), A("⏲", he);
var Se = 50, j = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Set(), Ce = (e) => {
	M.has(e) || (M.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, we = {
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
}, Te = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ce(e), we[e]);
};
function N(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = j.get(a);
	o || (o = /* @__PURE__ */ new Map(), j.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e, t, n) => e[N("PluralRules", n).select(t)] ?? e.other, De = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !P(e) || !P(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? F(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Oe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => F(e, t));
}, I = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ke = (e) => {
	if (typeof e == "string") return e;
	if (I(e)) return e.nodeType === "html" ? e[w] : e[C];
}, Ae = (e, t) => {
	if (typeof e == "string") return t;
	if (I(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, L = (e, t, n, r, i) => {
	let a = Ae(e, pe(ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, je = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Oe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: re,
				key: e
			}]
		});
	}
}, B = R, V = (e) => R, H = R, Me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || I(e),
			transform: (e, n, r) => {
				if (I(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = pe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return W(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, U = [
	ie,
	oe,
	ae,
	le,
	ue
], Ne = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !U.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && je(i) ? i(n) : i;
	};
}, W = (e, t) => typeof t == "function" && U.includes(e?.nodeType ?? "") ? (n) => Ne(e, t, n) : t, G = R, Pe = R, Fe = (e) => R, Ie = R, Le = (e, t = !0) => [
	z(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	B,
	V(e ?? D.defaultLocale),
	H,
	Me,
	Fe(e ?? D.defaultLocale),
	Ie,
	G,
	Pe
].filter((e) => e !== R), Re = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), K = /* @__PURE__ */ new WeakSet(), ze = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = te(r ?? D.defaultLocale, "", n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Le(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !K.has(e)
		};
		K.add(e);
		try {
			return Re(e.content, t, s);
		} finally {
			t.eager && K.delete(e);
		}
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, Be = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ve = /\{\{\s*(.*?)\s*\}\}/g, He = (e, t = {}) => {
	if (!Object.values(t).some(Be)) return {
		isSimple: !0,
		parts: e.replace(Ve, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ve), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ue = (e, t, n = ".") => {
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
}, We = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], q = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ge = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? N("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? N("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : N("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return N("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ke = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? Ge(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : Ge(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), J = (e, t) => e[t] ?? e.count ?? e.n, Y = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ke(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Y(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Y(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Y(r[S], t, n);
	if (r.nodeType === "html") return Y(r[w], t, n);
	if (r.nodeType === "plural") {
		let e = r[ae];
		return Y(Ee(e, Number(J(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ie], i = We.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) We.includes(t) || (o[t] = n);
		let s = J(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = N("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? fe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Y(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ue], i = J(t, typeof r.variable == "string" ? r.variable : "value");
		return Y(De(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[le];
		return Y(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, qe = (e, t = {}, n = "en") => {
	let r = Y(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, X = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: X(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Je = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Ye = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Ye(e.children, n), a = n[e.tag];
	return typeof a == "function" ? p(t, { children: a(i) }, r) : p(t, { children: i }, r);
}), Xe = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Xe(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Ze = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Qe(e, (e) => Ue(t, r(e)), r);
}, Qe = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return qe(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Je(t), o = r(e, i);
			return o === void 0 ? n(e) : p(f, { children: Ye(X(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Je(t), o = r(e, i);
			return o === void 0 ? n(e) : Xe(X(o), a);
		}
	});
}, $e = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, et = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = $e(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, tt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, nt = (e = Z) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!tt) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, rt = !1, it, at = () => typeof window > "u" ? nt(Z) : (rt ||= (it = nt(Z), !0), it), ot = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (rt = !1, !tt && O.storage.cookies)) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: $e(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, et(r, e, i));
			} catch {}
		}
	}
}, st = /* @__PURE__ */ new Map(), ct = (e, t) => Object.create(new Proxy(e, {
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
}), lt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = st.get(t);
	i || (i = /* @__PURE__ */ new Map(), st.set(t, i));
	let a = i.get(r);
	return a || (a = ct(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ut = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : p(f, { children: e }),
	value: t,
	...n
}, lt(t)), dt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ut({
		value: t.children,
		children: t.children
	})
}, ft = R, pt = (e, n) => {
	let i = He(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, mt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || I(e),
			transform: (e, n, r) => {
				if (I(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = pt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return W(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, ht = R, gt = R, Q = /* @__PURE__ */ new Map(), _t = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		dt,
		z(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		B,
		V(e ?? D.defaultLocale),
		H,
		Fe(e ?? D.defaultLocale),
		Ie,
		G,
		Pe,
		ft,
		mt,
		ht,
		gt
	].filter((e) => e !== R);
	return Q.set(n, r), r;
}, vt = (e, t) => ze(e, t, _t(typeof t == "object" && t ? t.locale : t)), yt = at, bt = (e, t) => ot(e, {
	...Z,
	isCookieEnabled: t
}), xt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, St = (e, t = D?.locales, n = D?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, $ = n({
	get locale() {
		return yt() ?? D?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ct = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: f } = D ?? {}, [m, h] = l(() => e ?? yt() ?? t ?? f), [g, _] = l(e);
	e !== g && (_(e), e && e !== m && h(e)), s(() => {
		xt();
	}, []);
	let ee = a((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), bt(e, u);
		}
	}, [
		m,
		d,
		u
	]), v = i ?? ee, y = St(m), b = c(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: o
	}), [
		y,
		v,
		n,
		o
	]);
	return p($.Provider, {
		value: b,
		children: r
	});
}, wt = ({ children: e, ...t }) => m(Ct, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Tt = (e, t) => {
	let { locale: n, variant: r } = o($) ?? {}, i = t ?? n, a = i;
	return c(() => vt(e, i), [e.key, a]);
}, Et = ((e, t) => {
	let { locale: n } = o($) ?? {};
	return Ze(n, Tt(e), t);
}), Dt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && xe({ log: me })(`${A("IntlProvider", ve)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), p(wt, {
	locale: e,
	children: t
}, String(e)));
function Ot() {
	let e = Et(h), t = d({ strict: !1 }).locale ?? "en", n = [
		{
			label: e("github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e("methodology"),
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: e("contributing"),
			to: "/$locale/contact",
			isInternal: !0
		}
	];
	return p("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: m("div", {
			className: "container py-8",
			children: [m("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					m("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), p("p", {
						className: "text-sm text-muted-foreground",
						children: e("anOpenSourceTestApplication")
					})] }),
					m("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("resources")
					}), p("ul", {
						className: "space-y-1",
						children: n.map((e) => p("li", { children: e.isInternal ? p(u, {
							preload: !1,
							to: e.to,
							params: { locale: t },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : p("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					m("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("contact")
					}), p("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), p("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e("builtWith")
			})]
		})
	});
}
function kt({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(Dt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function At() {
	return p(kt, { children: p(Ot, {}) });
}
export { At as default };
