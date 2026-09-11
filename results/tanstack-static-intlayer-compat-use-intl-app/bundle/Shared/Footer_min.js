import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Link as u, useParams as d } from "@tanstack/react-router";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { jsxDEV as h } from "react/jsx-dev-runtime";
var ee = {
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
}, te = /* @__PURE__ */ new WeakMap(), ne = 0, re = (e) => {
	if (!e) return "base";
	let t = te.get(e);
	if (t) return t;
	ne += 1;
	let n = `p${ne}`;
	return te.set(e, n), n;
}, ie = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, ae = (e, t, n) => `${e}_${t}_${re(n)}`, oe = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= ie && r.clear(), r.set(t, n), n;
}, se = "translation", ce = "enumeration", le = "plural", y = "insertion", ue = "object", de = "array", fe = "markdown", b = "html", pe = "gender", me = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: de,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ue,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, he = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ge = (e, t) => e[he(e, t) ?? "fallback"], S = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), C = "default", _e = /[^A-Za-z0-9._&=-]/g, w = /[^A-Za-z0-9._-]/g, ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, T = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, E = (e) => e === void 0 ? C : typeof e == "string" ? T(e, _e) : Object.keys(e).sort().map((t) => `${T(t, w)}=${T(String(e[t]), w)}`).join("&"), D = (e) => Array.isArray(e) ? e.length === 0 ? [C] : e.map(E) : [E(e)], ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? C : e[0] ?? "default";
}, be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, xe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ce = (e, t) => {
	if (!xe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? C : ye(D(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => be(e, n, t, s)).map((t) => Se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, we = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, O = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? D(n).join(",") : String(n)}`;
}).join("|") : "", k = {
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
}, A = {
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
}, Te = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, j = "\x1B[0m", Ee = "\x1B[34m", De = "\x1B[31m", Oe = "\x1B[32m", ke = "\x1B[36m", Ae = (e) => e, je = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ae(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Me = (e, t) => (n, r) => je(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), M = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? j : n : j}` : e;
M("✗", De), M("✓", Oe), M("⏲", Ee);
var Ne = 50, N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Set(), Pe = (e) => {
	P.has(e) || (P.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Fe = {
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
}, Ie = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Pe(e), Fe[e]);
};
function F(e, t, n) {
	let r = t ?? k?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = N.get(a);
	o || (o = /* @__PURE__ */ new Map(), N.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ie(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ne && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Le = (e, t, n) => e[F("PluralRules", n).select(t)] ?? e.other, Re = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, I = (e) => {
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
}, ze = (e, t, n) => {
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
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Be = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[b] : e[fe];
}, Ve = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? b : fe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, z = (e, t, n, r, i) => {
	let a = Ve(e, S(Be(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: se,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ze(o, e, t);
	}
}, He = B, Ue = (e) => B, H = B, We = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? B : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => z(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = S(i, e);
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
}, U = B, W = B, Ge = (e) => B, Ke = B, qe = (e, t = !0) => [
	V(e ?? k.defaultLocale, t ? k.defaultLocale : void 0),
	He,
	H,
	We,
	Ge(e ?? k.defaultLocale),
	Ke,
	U,
	W
], Je = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), Ye = (e, t, n) => {
	let { locale: r, selector: i } = we(t), a = ae(r ?? k.defaultLocale, O(i), n), o = oe(e, a);
	if (o.hit) return o.content;
	let s = n ?? qe(r), c = Ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Je(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
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
			return n === "percent" ? F("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? F("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : F("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return F("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
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
	if (r.nodeType === "insertion") return q(r[y], t, n);
	if (r.nodeType === "html") return q(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[le];
		return q(Le(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ce], i = et.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) et.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = F("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ge(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[me], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Re(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[pe];
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
	return typeof a == "function" ? p(t, { children: a(i) }, r) : p(t, { children: i }, r);
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
			return o === void 0 ? n(e) : p(f, { children: at(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = it(t), o = r(e, i);
			return o === void 0 ? n(e) : ot(J(o), a);
		}
	});
}, lt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : p(f, { children: e });
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
}, dt = B, ft = (e, n) => {
	let i = Qe(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, pt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? B : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => z(e, i, n, t.plugins, r);
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
}, mt = B, ht = B, Y = /* @__PURE__ */ new Map(), gt = (e, t = !0) => {
	let n = `${e ?? k.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		V(e ?? k.defaultLocale, t ? k.defaultLocale : void 0),
		He,
		Ue(e ?? k.defaultLocale),
		H,
		Ge(e ?? k.defaultLocale),
		Ke,
		U,
		W,
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
	let { locales: t } = k;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!bt) for (let t = 0; t < (A.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(A.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, St = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !bt && A.storage.cookies) for (let n = 0; n < A.storage.cookies.length; n++) {
		let { name: r, attributes: i } = A.storage.cookies[n];
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
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Et = ({ children: e }) => (Tt(), e), Dt = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Ot = ({ children: e }) => (Dt(), e), kt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, At = (e, t = k?.locales, n = k?.defaultLocale) => {
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
	locale: Ct ?? k?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), jt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = k ?? {}, [d, f] = l(e ?? Ct ?? t ?? u);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		kt();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), wt(e, s);
		}
	}), h = At(d);
	return p(Z.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Mt = ({ children: e, ...t }) => m(jt, {
	...t,
	children: [
		p(Et, {}),
		p(Ot, {}),
		e
	]
}), Nt = (e, t) => {
	let { locale: n, variant: r } = a(Z) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${O(i)}` : i;
	return s(() => _t(e, i), [e.key, o]);
}, Pt = ((e, t) => {
	let { locale: n } = a(Z) ?? {};
	return st(n, Nt(e), t);
}), Ft = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Me({ log: Te })(`${M("IntlProvider", ke)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), p(Mt, {
	locale: e,
	children: t
}, String(e))), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/Footer.tsx";
function It() {
	let e = Pt(ee), t = d({ strict: !1 }).locale ?? "en", n = [
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
	return h("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: h("div", {
			className: "container py-8",
			children: [h("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					h("div", { children: [h("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 32,
						columnNumber: 13
					}, this), h("p", {
						className: "text-sm text-muted-foreground",
						children: e("anOpenSourceTestApplication")
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 35,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 31,
						columnNumber: 11
					}, this),
					h("div", { children: [h("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("resources")
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 40,
						columnNumber: 13
					}, this), h("ul", {
						className: "space-y-1",
						children: n.map((e) => h("li", { children: e.isInternal ? h(u, {
							preload: !1,
							to: e.to,
							params: { locale: t },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 47,
							columnNumber: 21
						}, this) : h("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 56,
							columnNumber: 21
						}, this) }, e.label, !1, {
							fileName: Q,
							lineNumber: 45,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 43,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 39,
						columnNumber: 11
					}, this),
					h("div", { children: [h("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("contact")
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 70,
						columnNumber: 13
					}, this), h("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 73,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 69,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 30,
				columnNumber: 9
			}, this), h("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e("builtWith")
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 78,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var Lt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Rt({ children: t }) {
	return h(e.Suspense, {
		fallback: null,
		children: h(Ft, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Lt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Lt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/Footer.wrapper.tsx";
function zt() {
	return h(Rt, { children: h(It, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { zt as default };
