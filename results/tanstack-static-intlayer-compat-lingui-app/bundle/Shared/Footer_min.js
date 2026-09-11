import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Link as u, useParams as d } from "@tanstack/react-router";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { jsxDEV as h } from "react/jsx-dev-runtime";
var ee = {
	key: "footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				github: "GitHub",
				methodology: "Methodology",
				contributing: "Contributing",
				anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				resources: "Resources",
				contact: "Contact",
				builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
				i18nBenchmark: "i18n Benchmark"
			},
			fr: {
				github: "GitHub",
				methodology: "Méthodologie",
				contributing: "Contribuer",
				anOpenSourceTestApplication: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				resources: "Ressources",
				contact: "Contact",
				builtWith: "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
				i18nBenchmark: "i18n Benchmark"
			},
			es: {
				github: "GitHub",
				methodology: "Metodología",
				contributing: "Contribuir",
				anOpenSourceTestApplication: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.",
				resources: "Recursos",
				contact: "Contacto",
				builtWith: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
				i18nBenchmark: "i18n Benchmark"
			},
			de: {
				github: "GitHub",
				methodology: "Methodik",
				contributing: "Beitragen",
				anOpenSourceTestApplication: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
				resources: "Ressourcen",
				contact: "Kontakt",
				builtWith: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
				i18nBenchmark: "i18n Benchmark"
			},
			it: {
				github: "GitHub",
				methodology: "Metodologia",
				contributing: "Contribuire",
				anOpenSourceTestApplication: "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				resources: "Risorse",
				contact: "Contatti",
				builtWith: "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
				i18nBenchmark: "i18n Benchmark"
			},
			pt: {
				github: "GitHub",
				methodology: "Metodologia",
				contributing: "Contribuir",
				anOpenSourceTestApplication: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
				resources: "Recursos",
				contact: "Contato",
				builtWith: "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.",
				i18nBenchmark: "i18n Benchmark"
			},
			zh: {
				github: "GitHub",
				methodology: "方法论",
				contributing: "贡献",
				anOpenSourceTestApplication: "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。",
				resources: "资源",
				contact: "联系我们",
				builtWith: "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。",
				i18nBenchmark: "i18n Benchmark"
			},
			ja: {
				github: "GitHub",
				methodology: "方法論",
				contributing: "貢献する",
				anOpenSourceTestApplication: "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。",
				resources: "リソース",
				contact: "お問い合わせ",
				builtWith: "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。",
				i18nBenchmark: "i18n Benchmark"
			},
			ko: {
				github: "GitHub",
				methodology: "방법론",
				contributing: "기여하기",
				anOpenSourceTestApplication: "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
				resources: "리소스",
				contact: "문의하기",
				builtWith: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
				i18nBenchmark: "i18n Benchmark"
			},
			ru: {
				github: "GitHub",
				methodology: "Методология",
				contributing: "Вклад",
				anOpenSourceTestApplication: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
				resources: "Ресурсы",
				contact: "Контакт",
				builtWith: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
				i18nBenchmark: "i18n Benchmark"
			}
		}
	}
}, te = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, ne = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, re = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, g = (e, t) => {
	let n = ne(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return ne(n, t);
	}
}, ie = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${ae(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, ae = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ie).join("") : String(e ?? ""), oe = "translation", se = "enumeration", ce = "plural", _ = "insertion", le = "object", ue = "array", de = "markdown", v = "html", y = "gender", fe = "select", b = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ue,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: le,
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
}, pe = (e) => b(se, e), me = (e) => b(y, e), he = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, S = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = he(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, ge = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), _e = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ve = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(_e)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = ge.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, C = (e, t) => b(v, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ve(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return S(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => S(await e)), typeof n == "string") return S(n);
	try {
		return S(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), w = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, T = (e) => b(_, e, { fields: (() => {
	if (typeof e == "string") return w(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => w(await e)), typeof t == "string") return w(t);
	try {
		return w(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), ye = (e) => b(ce, e), be = (e, t) => b(fe, e, { variable: t }), xe = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, E = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? C(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? C(t) : T(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? C(t) : t;
		if (t.type === "argument") return t.format ? T(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : T(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = E(a);
				}
				return e.__intlayer_icu_var = t.name, pe(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = E(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return ye(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = E(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? me({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : be(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = E(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, pe(e);
		}
	}
	return e.map((e) => E([e]));
}, Se = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return E(xe(e));
		} catch {
			return e;
		}
	}
}, Ce = (e) => x(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Se
	}]
}), we = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Te = (e, t) => e[we(e, t) ?? "fallback"], D = {
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
}, Ee = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, De = 50, Oe = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Set(), Ae = (e) => {
	ke.has(e) || (ke.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, je = {
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
}, Me = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ae(e), je[e]);
};
function k(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Oe.get(a);
	o || (o = /* @__PURE__ */ new Map(), Oe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Me(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > De && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ne = (e, t, n) => e[k("PluralRules", n).select(t)] ?? e.other, Pe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, A = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], j = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Fe = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? k("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? k("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : k("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return k("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ie = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = j(t, r);
	return o === void 0 ? e : i ? Fe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = j(t, r);
	return o === void 0 ? e : Fe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = j(t, n);
	return r === void 0 ? e : String(r);
}), M = (e, t) => e[t] ?? e.count ?? e.n, N = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ie(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return N(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(N(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return N(r[_], t, n);
	if (r.nodeType === "html") return N(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return N(Ne(e, Number(M(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[se], i = A.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) A.includes(t) || (o[t] = n);
		let s = M(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = k("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Te(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return N(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = M(t, typeof r.variable == "string" ? r.variable : "value");
		return N(Pe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[y];
		return N(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Le = (e, t = {}, n = "en") => {
	let r = N(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Re = (e) => (t, n = {}, r = "en") => Le(typeof t == "string" ? e(t) : t, n, r), ze = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: ze(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Be = Re(Ce), Ve = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, P = class extends te {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, re(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = Ve(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = g(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = g(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = g(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: ae(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? Le(c.node, o, s) : Be(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, F = t(null), I = /* @__PURE__ */ new WeakMap(), L = 0, He = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	L += 1;
	let n = `p${L}`;
	return I.set(e, n), n;
}, Ue = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, We = (e, t, n) => `${e}_${t}_${He(n)}`, Ge = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= Ue && r.clear(), r.set(t, n), n;
}, V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", Ke = /[^A-Za-z0-9._&=-]/g, qe = /[^A-Za-z0-9._-]/g, Je = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, U = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Je);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ye = (e) => e === void 0 ? H : typeof e == "string" ? U(e, Ke) : Object.keys(e).sort().map((t) => `${U(t, qe)}=${U(String(e[t]), qe)}`).join("&"), Xe = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(Ye) : [Ye(e)], Ze = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
}, Qe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, $e = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, et = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, tt = (e, t) => {
	if (!$e(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : Ze(Xe(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Qe(e, n, t, s)).map((t) => et(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, nt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, rt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Xe(n).join(",") : String(n)}`;
}).join("|") : "", W = "\x1B[0m", it = "\x1B[34m", at = "\x1B[31m", ot = "\x1B[32m", st = "\x1B[38;5;3m", ct = (e) => e, lt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ct(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, ut = (e, t) => (n, r) => lt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), G = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? W : n : W}` : e, dt = (e, t = st, n = W) => [e].flat().map((e) => G(e, t, n)).join(", ");
G("✗", at), G("✓", ot), G("⏲", it);
var ft = () => ({}), pt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), K = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : pt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : K(e ? `${e}.${String(n)}` : String(n)) }), mt = /* @__PURE__ */ new Set(), ht = (e, t, n) => {
	let r = ft()[e];
	return r ? Nt(r, t, n) : (mt.has(e) || (ut({ log: Ee })(typeof window > "u" ? `Dictionary ${dt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), mt.add(e)), K(e));
}, gt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, _t = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (gt(e) && gt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : _t(e[r], t[r]));
		return n;
	}
	return e;
}, vt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => _t(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, yt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[v] : e[de];
}, bt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? v : de;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, xt = (e, t, n, r, i) => {
	let a = bt(e, V(yt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, St = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: oe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return vt(o, e, t);
	}
}, Ct = J, wt = (e) => J, Tt = J, Et = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => xt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
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
}, Dt = J, Ot = J, kt = (e) => J, At = J, jt = (e, t = !0) => [
	St(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	Ct,
	Tt,
	Et,
	kt(e ?? D.defaultLocale),
	At,
	Dt,
	Ot
], Mt = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), Nt = (e, t, n) => {
	let { locale: r, selector: i } = nt(t), a = We(r ?? D.defaultLocale, rt(i), n), o = Ge(e, a);
	if (o.hit) return o.content;
	let s = n ?? jt(r), c = tt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Mt(e.content, t, s);
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, Pt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ft = /\{\{\s*(.*?)\s*\}\}/g, It = (e, t = {}) => {
	if (!Object.values(t).some(Pt)) return {
		isSimple: !0,
		parts: e.replace(Ft, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ft), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Lt = () => {
	try {
		return Object.keys(ft());
	} catch {
		return [];
	}
}, Rt = (e, t) => {
	let n = Lt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return ht(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = g(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = g(a(t), e);
		if (n !== void 0) return n;
	}
}, zt = (e) => {
	let t = {};
	for (let n of Lt()) try {
		Object.assign(t, re(ht(n, e)));
	} catch {}
	return t;
}, Bt = () => ({
	lookup: Rt,
	all: zt
}), Vt = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : p(f, { children: e });
	return new Proxy(i, { get(e, r, i) {
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
}, Ht = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Vt({
		...n,
		value: n.children,
		children: n.children
	})
}, Ut = J, Wt = (t, r) => {
	let i = It(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Gt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => xt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Wt(i, e);
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
}, Kt = J, qt = J, Y = /* @__PURE__ */ new Map(), Jt = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		St(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		Ct,
		wt(e ?? D.defaultLocale),
		Tt,
		kt(e ?? D.defaultLocale),
		At,
		Dt,
		Ot,
		Ht,
		Ut,
		Gt,
		Kt,
		qt
	];
	return Y.set(n, r), r;
}, Yt = (e, t) => Nt(e, t, Jt(typeof t == "object" && t ? t.locale : t)), Xt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Zt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Xt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Qt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, $t = (e = X) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Qt) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, en = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Qt && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Xt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Zt(r, e, i));
			} catch {}
		}
	}
}, tn = $t(X), nn = (e, t) => en(e, {
	...X,
	isCookieEnabled: t
}), rn = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, an = ({ children: e }) => (rn(), e), on = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, sn = ({ children: e }) => (on(), e), cn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ln = (e, t = D?.locales, n = D?.defaultLocale) => {
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
}, Z = t({
	locale: tn ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), un = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = D ?? {}, [d, f] = l(e ?? tn ?? t ?? u);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		cn();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), nn(e, s);
		}
	}), h = ln(d);
	return p(Z.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, dn = ({ children: e, ...t }) => m(un, {
	...t,
	children: [
		p(an, {}),
		p(sn, {}),
		e
	]
}), { defaultLocale: fn, locales: Q } = D ?? {}, pn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: fn,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), nn(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, mn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), p(F.Provider, {
		value: i,
		children: p(dn, {
			locale: s,
			children: n
		})
	});
}, hn = (e, t) => {
	let n = new P({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, gn = (...e) => {
	let { locale: t } = pn(), n = e.map((e) => e.key).join("\0");
	return s(() => hn(t, Object.fromEntries(e.map((e) => [e.key, Yt(e, t)]))), [t, n]);
}, _n = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = _n(t.children, n), a = n[t.tag];
	if (a === void 0) return p(e, { children: i }, r);
	if (typeof a == "function") return p(e, { children: a(p(f, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return p(e, {
			...t,
			children: i
		}, r);
	}
	return p(e, { children: i }, r);
}), vn = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), l = r && Object.keys(r).length > 0, u;
	if (l) {
		let e = _n(ze(c), r);
		u = p(f, { children: e });
	} else u = c;
	let d = {
		id: e,
		translation: u,
		children: u,
		message: t ?? null
	};
	if (typeof i == "function") return i(d);
	let m = a ?? s;
	return m ? p(m, {
		...d,
		children: u
	}) : p(f, { children: u });
}, yn = ({ dictionary: e, ...t }) => {
	let { i18n: n } = gn(e), { defaultComponent: r } = a(F) ?? {};
	return vn(t, n, r);
}, bn = (e) => new P({
	...e,
	registry: Bt()
});
bn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/Footer.tsx";
function xn() {
	let { i18n: e } = gn(ee), t = d({ strict: !1 }).locale ?? "en", n = [
		{
			label: e._("footer.github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e._("footer.methodology"),
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: e._("footer.contributing"),
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
						children: h(yn, {
							id: "footer.i18nBenchmark",
							message: "i18n Benchmark",
							dictionary: ee
						}, void 0, !1, {
							fileName: $,
							lineNumber: 34,
							columnNumber: 15
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 33,
						columnNumber: 13
					}, this), h("p", {
						className: "text-sm text-muted-foreground",
						children: e._("footer.anOpenSourceTestApplication")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 36,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 32,
						columnNumber: 11
					}, this),
					h("div", { children: [h("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e._("footer.resources")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 41,
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
							fileName: $,
							lineNumber: 48,
							columnNumber: 21
						}, this) : h("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 57,
							columnNumber: 21
						}, this) }, e.label, !1, {
							fileName: $,
							lineNumber: 46,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: $,
						lineNumber: 44,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 40,
						columnNumber: 11
					}, this),
					h("div", { children: [h("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e._("footer.contact")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 71,
						columnNumber: 13
					}, this), h("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 74,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 70,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 31,
				columnNumber: 9
			}, this), h("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e._("footer.builtWith")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 79,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
function Sn(e, t) {
	let n = bn();
	return n.activate(e), n;
}
var Cn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function wn({ children: e }) {
	let t = s(() => Sn("en"), []);
	return h(mn, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: Cn,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var Tn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/Footer.wrapper.tsx";
function En() {
	return h(wn, { children: h(xn, {}, void 0, !1, {
		fileName: Tn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Tn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { En as default };
