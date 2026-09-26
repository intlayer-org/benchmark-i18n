import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var p = {
	key: "hero",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				viewResults: "View Results",
				aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
				title: "i18n Benchmark"
			},
			fr: {
				viewResults: "Voir les résultats",
				aTestApplicationDesignedTo: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
				title: "Benchmark i18n"
			},
			es: {
				viewResults: "Ver resultados",
				aTestApplicationDesignedTo: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
				title: "i18n Benchmark"
			},
			de: {
				viewResults: "Ergebnisse anzeigen",
				aTestApplicationDesignedTo: "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.",
				title: "i18n Benchmark"
			},
			it: {
				viewResults: "Visualizza i risultati",
				aTestApplicationDesignedTo: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
				title: "i18n Benchmark"
			},
			pt: {
				viewResults: "Ver Resultados",
				aTestApplicationDesignedTo: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
				title: "i18n Benchmark"
			},
			zh: {
				viewResults: "查看结果",
				aTestApplicationDesignedTo: "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。",
				title: "i18n Benchmark"
			},
			ja: {
				viewResults: "結果を見る",
				aTestApplicationDesignedTo: "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
				title: "i18n Benchmark"
			},
			ko: {
				viewResults: "결과 보기",
				aTestApplicationDesignedTo: "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
				title: "i18n Benchmark"
			},
			ru: {
				viewResults: "Посмотреть результаты",
				aTestApplicationDesignedTo: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
				title: "i18n Benchmark"
			}
		}
	}
}, m = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				products: "Products",
				pricing: "Pricing",
				team: "Team",
				careers: "Careers",
				faq: "FAQ",
				contact: "Contact",
				settings: "Settings",
				i18nBench: "i18n Bench",
				home: "Home",
				methodology: "Methodology",
				mockPages: "Mock Pages",
				goToGithub: "Go to GitHub",
				blog: "Blog"
			},
			fr: {
				products: "Produits",
				pricing: "Tarifs",
				team: "Équipe",
				careers: "Carrières",
				faq: "FAQ",
				contact: "Contact",
				settings: "Paramètres",
				i18nBench: "Bench i18n",
				home: "Accueil",
				methodology: "Méthodologie",
				mockPages: "Pages de test",
				goToGithub: "Aller sur GitHub",
				blog: "Blog"
			},
			es: {
				products: "Productos",
				pricing: "Precios",
				team: "Equipo",
				careers: "Carreras",
				faq: "FAQ",
				contact: "Contacto",
				settings: "Ajustes",
				i18nBench: "i18n Bench",
				home: "Inicio",
				methodology: "Metodología",
				mockPages: "Páginas de prueba",
				goToGithub: "Ir a GitHub",
				blog: "Blog"
			},
			de: {
				products: "Produkte",
				pricing: "Preise",
				team: "Team",
				careers: "Karriere",
				faq: "FAQ",
				contact: "Kontakt",
				settings: "Einstellungen",
				i18nBench: "i18n Bench",
				home: "Startseite",
				methodology: "Methodik",
				mockPages: "Testseiten",
				goToGithub: "Zu GitHub",
				blog: "Blog"
			},
			it: {
				products: "Prodotti",
				pricing: "Prezzi",
				team: "Team",
				careers: "Carriere",
				faq: "FAQ",
				contact: "Contatti",
				settings: "Impostazioni",
				i18nBench: "i18n Bench",
				home: "Home",
				methodology: "Metodologia",
				mockPages: "Pagine di test",
				goToGithub: "Vai su GitHub",
				blog: "Blog"
			},
			pt: {
				products: "Produtos",
				pricing: "Preços",
				team: "Equipe",
				careers: "Carreiras",
				faq: "FAQ",
				contact: "Contato",
				settings: "Configurações",
				i18nBench: "i18n Bench",
				home: "Início",
				methodology: "Metodologia",
				mockPages: "Páginas de teste",
				goToGithub: "Ir para GitHub",
				blog: "Blog"
			},
			zh: {
				products: "产品",
				pricing: "价格",
				team: "团队",
				careers: "职业生涯",
				faq: "常见问题",
				contact: "联系我们",
				settings: "设置",
				i18nBench: "i18n Bench",
				home: "首页",
				methodology: "方法论",
				mockPages: "模拟页面",
				goToGithub: "访问 GitHub",
				blog: "博客"
			},
			ja: {
				products: "製品",
				pricing: "料金",
				team: "チーム",
				careers: "採用情報",
				faq: "FAQ",
				contact: "お問い合わせ",
				settings: "設定",
				i18nBench: "i18n Bench",
				home: "ホーム",
				methodology: "方法論",
				mockPages: "モックページ",
				goToGithub: "GitHubへ",
				blog: "ブログ"
			},
			ko: {
				products: "제품",
				pricing: "요금",
				team: "팀",
				careers: "채용",
				faq: "FAQ",
				contact: "문의하기",
				settings: "설정",
				i18nBench: "i18n Bench",
				home: "홈",
				methodology: "방법론",
				mockPages: "모의 페이지",
				goToGithub: "GitHub으로 이동",
				blog: "블로그"
			},
			ru: {
				products: "Продукты",
				pricing: "Цены",
				team: "Команда",
				careers: "Карьера",
				faq: "FAQ",
				contact: "Контакт",
				settings: "Настройки",
				i18nBench: "i18n Bench",
				home: "Главная",
				methodology: "Методология",
				mockPages: "Тестовые страницы",
				goToGithub: "Перейти на GitHub",
				blog: "Блог"
			}
		}
	}
}, h = t(null), ee = class {
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
}, g = (e, t) => {
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
}, _ = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, v = (e, t) => {
	let n = g(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return g(n, t);
	}
}, y = (e) => {
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
			i.push(`${t} {${b(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, b = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(y).join("") : String(e ?? ""), te = "translation", x = "enumeration", S = "plural", ne = "condition", C = "insertion", re = "object", ie = "array", ae = "markdown", w = "html", T = "gender", E = "select", D = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), O = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, k);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, O(t, e, {
		type: ie,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: re,
			key: r
		};
		if (t.eager) {
			n[r] = k(e[r], O(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = k(e[r], O(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, oe = (e) => D(x, e), se = (e) => D(T, e), ce = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, A = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = ce(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, le = /* @__PURE__ */ new Set([
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
]), ue = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, de = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(ue)) {
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
				let e = le.has(i.toLowerCase());
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
}, j = (e, t) => D(w, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = de(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return A(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => A(await e)), typeof n == "string") return A(n);
	try {
		return A(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), M = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, N = (e) => D(C, e, { fields: (() => {
	if (typeof e == "string") return M(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => M(await e)), typeof t == "string") return M(t);
	try {
		return M(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), fe = (e) => D(S, e), pe = (e, t) => D(E, e, { variable: t }), me = (e) => {
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
}, P = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : N(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : t;
		if (t?.type === "argument") return t.format ? N(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : N(`{{${t.name}}}`);
		if (t?.type === "plural") {
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
					e[i] = P(a);
				}
				return e.__intlayer_icu_var = t.name, oe(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = P(i);
			}
			return fe(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = P(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? se({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : pe(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = P(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, oe(e);
		}
	}
	return e.map((e) => P([e]));
}, he = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return P(me(e));
		} catch {
			return e;
		}
	}
}, ge = (e) => k(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...he
	}]
}), _e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ve = (e, t) => e[_e(e, t) ?? "fallback"], F = {
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
}, I = {
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
}, ye = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, be = 50, xe = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Set(), Ce = (e) => {
	Se.has(e) || (Se.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function L(e, t, n) {
	let r = t ?? F?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = xe.get(a);
	o || (o = /* @__PURE__ */ new Map(), xe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > be && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e, t, n) => e[L("PluralRules", n).select(t)] ?? e.other, De = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Oe = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], R = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, ke = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? L("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? L("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : L("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return L("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ae = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = R(t, r);
	return o === void 0 ? e : i ? ke(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = R(t, r);
	return o === void 0 ? e : ke(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = R(t, n);
	return r === void 0 ? e : String(r);
}), z = (e, t) => e[t] ?? e.count ?? e.n, B = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ae(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return B(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(B(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return B(r[C], t, n);
	if (r.nodeType === "html") return B(r[w], t, n);
	if (r.nodeType === "plural") {
		let e = r[S];
		return B(Ee(e, Number(z(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[x], i = Oe.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Oe.includes(t) || (o[t] = n);
		let s = z(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = L("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return B(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[E], i = z(t, typeof r.variable == "string" ? r.variable : "value");
		return B(De(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[T];
		return B(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, je = (e, t = {}, n = "en") => {
	let r = B(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Me = (e) => (t, n = {}, r = "en") => je(typeof t == "string" ? e(t) : t, n, r), Ne = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Ne(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Pe = Me(ge), Fe = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Ie = class extends ee {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, _(t));
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
		let { dictionaryKey: t, remainder: n } = Fe(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = v(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = v(t, e);
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
			let t = v(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: b(t)
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
		return (c.kind === "node" ? je(c.node, o, s) : Pe(c.message, o, s)) ?? i;
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
}, Le = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Re = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Le(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ze = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var V = {
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
}, H = (e = V) => {
	let { locales: t } = F;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ze) for (let t = 0; t < (I.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(I.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, U = !1, Be, Ve = () => typeof window > "u" ? H(V) : (U ||= (Be = H(V), !0), Be), He = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (U = !1, !ze && I.storage.cookies)) for (let n = 0; n < I.storage.cookies.length; n++) {
		let { name: r, attributes: i } = I.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Le(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Re(r, e, i));
			} catch {}
		}
	}
}, Ue = /* @__PURE__ */ new Map(), We = (e, t) => Object.create(new Proxy(e, {
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
}), Ge = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Ue.get(t);
	i || (i = /* @__PURE__ */ new Map(), Ue.set(t, i));
	let a = i.get(r);
	return a || (a = We(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ke = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, Ge(t)), qe = /* @__PURE__ */ new WeakMap(), Je = 0, Ye = (e) => {
	if (!e) return "base";
	let t = qe.get(e);
	if (t) return t;
	Je += 1;
	let n = `p${Je}`;
	return qe.set(e, n), n;
}, Xe = 256, W = /* @__PURE__ */ new WeakMap(), Ze = (e) => typeof e == "object" && !!e, Qe = (e, t, n) => `${e}_${t}_${Ye(n)}`, $e = (e, t) => {
	if (!Ze(e)) return { hit: !1 };
	let n = W.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, G = (e, t, n) => {
	if (!Ze(e)) return n;
	let r = W.get(e);
	return r || (r = /* @__PURE__ */ new Map(), W.set(e, r)), r.size >= Xe && r.clear(), r.set(t, n), n;
}, et = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), K = "\x1B[0m", tt = "\x1B[34m", nt = "\x1B[31m", rt = "\x1B[32m", it = "\x1B[38;5;3m", at = (e) => e, ot = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = at(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, st = (e, t) => (n, r) => ot(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), q = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? K : n : K}` : e, ct = (e, t = it, n = K) => [e].flat().map((e) => q(e, t, n)).join(", ");
q("✗", nt), q("✓", rt), q("⏲", tt);
var lt = () => ({}), ut = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), dt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ut.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : dt(e ? `${e}.${String(n)}` : String(n)) }), ft = /* @__PURE__ */ new Set(), pt = (e, t, n) => {
	let r = lt()[e];
	return r ? Ft(r, t, n) : (ft.has(e) || (st({ log: ye })(typeof window > "u" ? `Dictionary ${ct(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), ft.add(e)), dt(e));
}, mt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, ht = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !mt(e) || !mt(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? ht(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, gt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => ht(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, _t = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[w] : e[ae];
}, vt = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? w : ae;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, yt = (e, t, n, r, i) => {
	let a = vt(e, et(_t(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, bt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, xt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = gt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: te,
				key: e
			}]
		});
	}
}, St = Y, Ct = (e) => Y, wt = Y, Tt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => yt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = et(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ot(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Et = [
	x,
	ne,
	S,
	T,
	E
], Dt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Et.includes(i)) return t;
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
		return !r && bt(i) ? i(n) : i;
	};
}, Ot = (e, t) => typeof t == "function" && Et.includes(e?.nodeType ?? "") ? (n) => Dt(e, t, n) : t, kt = Y, At = Y, jt = (e) => Y, Mt = Y, Nt = (e, t = !0) => [
	xt(e ?? F.defaultLocale, t ? F.defaultLocale : void 0),
	St,
	Ct(e ?? F.defaultLocale),
	wt,
	Tt,
	jt(e ?? F.defaultLocale),
	Mt,
	kt,
	At
].filter((e) => e !== Y), Pt = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), Ft = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Qe(r ?? F.defaultLocale, "", n), o = $e(e, a);
	if (o.hit) return o.content;
	let s = n ?? Nt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return Pt(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? G(e, a, null) : Array.isArray(c) ? G(e, a, c.map(l)) : G(e, a, l(c));
}, It = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Lt = /\{\{\s*(.*?)\s*\}\}/g, Rt = (e, t = {}) => {
	if (!Object.values(t).some(It)) return {
		isSimple: !0,
		parts: e.replace(Lt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Lt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, zt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ke({
		value: t.children,
		children: t.children
	})
}, Bt = Y, Vt = (t, r) => {
	let i = Rt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ht = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => yt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Vt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ot(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ut = Y, Wt = Y, Z = /* @__PURE__ */ new Map(), Gt = (e, t = !0) => {
	let n = `${e ?? F.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		zt,
		xt(e ?? F.defaultLocale, t ? F.defaultLocale : void 0),
		St,
		Ct(e ?? F.defaultLocale),
		wt,
		jt(e ?? F.defaultLocale),
		Mt,
		kt,
		At,
		Bt,
		Ht,
		Ut,
		Wt
	].filter((e) => e !== Y);
	return Z.set(n, r), r;
}, Kt = (e, t) => Ft(e, t, Gt(typeof t == "object" && t ? t.locale : t)), qt = Ve, Jt = (e, t) => He(e, {
	...V,
	isCookieEnabled: t
}), Yt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Xt = (e, t = F?.locales, n = F?.defaultLocale) => {
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
}, Zt = t({
	get locale() {
		return qt() ?? F?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Qt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: s, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: p } = F ?? {}, [m, h] = l(() => e ?? qt() ?? t ?? p), [ee, g] = l(e);
	e !== ee && (g(e), e && e !== m && h(e)), o(() => {
		Yt();
	}, []);
	let _ = i((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), Jt(e, u);
		}
	}, [
		m,
		f,
		u
	]), v = a ?? _, y = Xt(m), b = c(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: s
	}), [
		y,
		v,
		n,
		s
	]);
	return d(Zt.Provider, {
		value: b,
		children: r
	});
}, $t = ({ children: e, ...t }) => f(Qt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: en, locales: Q } = F ?? {}, tn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Zt) ?? {};
	return {
		locale: n,
		defaultLocale: en,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Jt(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, nn = (e, t) => {
	let n = new Ie({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, rn = (...e) => {
	let { locale: t } = tn(), n = e.map((e) => e.key).join("\0");
	return c(() => nn(t, Object.fromEntries(e.map((e) => [e.key, Kt(e, t)]))), [t, n]);
}, $ = () => {
	try {
		return Object.keys(lt());
	} catch {
		return [];
	}
}, an = (e, t) => {
	let n = $(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return pt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = v(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = v(a(t), e);
		if (n !== void 0) return n;
	}
}, on = (e) => {
	let t = {};
	for (let n of $()) try {
		Object.assign(t, _(pt(n, e)));
	} catch {}
	return t;
}, sn = () => ({
	lookup: an,
	all: on
}), cn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = cn(t.children, n), a = n[t.tag];
	if (a === void 0) return d(e, { children: i }, r);
	if (typeof a == "function") return d(e, { children: a(d(u, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return d(e, {
			...t,
			children: i
		}, r);
	}
	return d(e, { children: i }, r);
}), ln = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), l = r && Object.keys(r).length > 0, f;
	if (l) {
		let e = cn(Ne(c), r);
		f = d(u, { children: e });
	} else f = c;
	let p = {
		id: e,
		translation: f,
		children: f,
		message: t ?? null
	};
	if (typeof i == "function") return i(p);
	let m = a ?? s;
	return m ? d(m, {
		...p,
		children: f
	}) : d(u, { children: f });
}, un = ({ dictionary: e, ...t }) => {
	let { i18n: n } = rn(e), { defaultComponent: r } = a(h) ?? {};
	return ln(t, n, r);
}, dn = (e) => new Ie({
	...e,
	registry: sn()
});
dn({ locale: "en" });
var fn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), d(h.Provider, {
		value: i,
		children: d($t, {
			locale: s,
			children: n
		})
	});
};
function pn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function mn() {
	let { i18n: e } = rn(p, m);
	return pn("Hero"), f("section", {
		className: "mb-16 text-center",
		children: [
			d("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: d(un, {
					id: "hero.title",
					message: "i18n Benchmark",
					dictionary: p
				})
			}),
			d("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: d(un, {
					id: "hero.aTestApplicationDesignedTo",
					message: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
					dictionary: p
				})
			}),
			f("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [d("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e._("hero.viewResults")
				}), d("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: e._("header.methodology")
				})]
			})
		]
	});
}
function hn(e, t) {
	let n = dn();
	return n.activate(e), n;
}
function gn({ children: e }) {
	let t = c(() => hn("en"), []);
	return d(fn, {
		i18n: t,
		children: e
	});
}
function _n() {
	return d(gn, { children: d(mn, {}) });
}
export { _n as default };
