import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useId as s, useMemo as c, useRef as l, useState as ee } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = {
	key: "contact-form",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				yourName: "Your name",
				bugReport: "Bug Report",
				newBenchmarkIdea: "New Benchmark Idea",
				methodologyQuestion: "Methodology Question",
				describeYourQuestionOrIdea: "Describe your question or idea...",
				sendMessage: "Send Message"
			},
			fr: {
				yourName: "Votre nom",
				bugReport: "Rapport de bug",
				newBenchmarkIdea: "Nouvelle idée de benchmark",
				methodologyQuestion: "Question sur la méthodologie",
				describeYourQuestionOrIdea: "Décrivez votre question ou idée...",
				sendMessage: "Envoyer le message"
			},
			es: {
				yourName: "Tu nombre",
				bugReport: "Informe de bug",
				newBenchmarkIdea: "Nueva idea de benchmark",
				methodologyQuestion: "Pregunta sobre metodología",
				describeYourQuestionOrIdea: "Describe tu pregunta o idea...",
				sendMessage: "Enviar mensaje"
			},
			de: {
				yourName: "Ihr Name",
				bugReport: "Fehlerbericht",
				newBenchmarkIdea: "Neue Benchmark-Idee",
				methodologyQuestion: "Frage zur Methodik",
				describeYourQuestionOrIdea: "Beschreiben Sie Ihre Frage oder Idee...",
				sendMessage: "Nachricht senden"
			},
			it: {
				yourName: "Il tuo nome",
				bugReport: "Segnalazione di bug",
				newBenchmarkIdea: "Nuova idea di benchmark",
				methodologyQuestion: "Domanda sulla metodologia",
				describeYourQuestionOrIdea: "Descrivi la tua domanda o idea...",
				sendMessage: "Invia messaggio"
			},
			pt: {
				yourName: "Seu nome",
				bugReport: "Relatório de bug",
				newBenchmarkIdea: "Nova ideia de benchmark",
				methodologyQuestion: "Pergunta sobre metodologia",
				describeYourQuestionOrIdea: "Descreva sua pergunta ou ideia...",
				sendMessage: "Enviar mensagem"
			},
			zh: {
				yourName: "您的姓名",
				bugReport: "错误报告",
				newBenchmarkIdea: "新基准测试想法",
				methodologyQuestion: "方法论问题",
				describeYourQuestionOrIdea: "描述您的问题或想法...",
				sendMessage: "发送消息"
			},
			ja: {
				yourName: "お名前",
				bugReport: "バグ報告",
				newBenchmarkIdea: "新しいベンチマークのアイデア",
				methodologyQuestion: "方法論に関する質問",
				describeYourQuestionOrIdea: "質問やアイデアを説明してください...",
				sendMessage: "メッセージを送信"
			},
			ko: {
				yourName: "이름",
				bugReport: "버그 보고",
				newBenchmarkIdea: "새로운 벤치마크 아이디어",
				methodologyQuestion: "방법론 질문",
				describeYourQuestionOrIdea: "질문이나 아이디어를 설명해주세요...",
				sendMessage: "메시지 보내기"
			},
			ru: {
				yourName: "Ваше имя",
				bugReport: "Отчет об ошибке",
				newBenchmarkIdea: "Новая идея для бенчмарка",
				methodologyQuestion: "Вопрос по методологии",
				describeYourQuestionOrIdea: "Опишите ваш вопрос или идею...",
				sendMessage: "Отправить сообщение"
			}
		}
	}
}, te = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				home: "Home",
				methodology: "Methodology",
				mockPages: "Mock Pages",
				products: "Products",
				pricing: "Pricing",
				team: "Team",
				blog: "Blog",
				careers: "Careers",
				faq: "FAQ",
				contact: "Contact",
				settings: "Settings",
				goToGithub: "Go to GitHub"
			},
			fr: {
				home: "Accueil",
				methodology: "Méthodologie",
				mockPages: "Pages de test",
				products: "Produits",
				pricing: "Tarifs",
				team: "Équipe",
				blog: "Blog",
				careers: "Carrières",
				faq: "FAQ",
				contact: "Contact",
				settings: "Paramètres",
				goToGithub: "Aller sur GitHub"
			},
			es: {
				home: "Inicio",
				methodology: "Metodología",
				mockPages: "Páginas de prueba",
				products: "Productos",
				pricing: "Precios",
				team: "Equipo",
				blog: "Blog",
				careers: "Carreras",
				faq: "FAQ",
				contact: "Contacto",
				settings: "Ajustes",
				goToGithub: "Ir a GitHub"
			},
			de: {
				home: "Startseite",
				methodology: "Methodik",
				mockPages: "Testseiten",
				products: "Produkte",
				pricing: "Preise",
				team: "Team",
				blog: "Blog",
				careers: "Karriere",
				faq: "FAQ",
				contact: "Kontakt",
				settings: "Einstellungen",
				goToGithub: "Zu GitHub"
			},
			it: {
				home: "Home",
				methodology: "Metodologia",
				mockPages: "Pagine di test",
				products: "Prodotti",
				pricing: "Prezzi",
				team: "Team",
				blog: "Blog",
				careers: "Carriere",
				faq: "FAQ",
				contact: "Contatti",
				settings: "Impostazioni",
				goToGithub: "Vai su GitHub"
			},
			pt: {
				home: "Início",
				methodology: "Metodologia",
				mockPages: "Páginas de teste",
				products: "Produtos",
				pricing: "Preços",
				team: "Equipe",
				blog: "Blog",
				careers: "Carreiras",
				faq: "FAQ",
				contact: "Contato",
				settings: "Configurações",
				goToGithub: "Ir para GitHub"
			},
			zh: {
				home: "首页",
				methodology: "方法论",
				mockPages: "模拟页面",
				products: "产品",
				pricing: "价格",
				team: "团队",
				blog: "博客",
				careers: "招聘",
				faq: "常见问题",
				contact: "联系我们",
				settings: "设置",
				goToGithub: "前往 GitHub"
			},
			ja: {
				home: "ホーム",
				methodology: "方法論",
				mockPages: "模擬ページ",
				products: "製品",
				pricing: "料金",
				team: "チーム",
				blog: "ブログ",
				careers: "採用",
				faq: "FAQ",
				contact: "お問い合わせ",
				settings: "設定",
				goToGithub: "GitHubへ移動"
			},
			ko: {
				home: "홈",
				methodology: "방법론",
				mockPages: "모의 페이지",
				products: "제품",
				pricing: "요금",
				team: "팀",
				blog: "블로그",
				careers: "채용",
				faq: "FAQ",
				contact: "문의하기",
				settings: "설정",
				goToGithub: "GitHub으로 이동"
			},
			ru: {
				home: "Главная",
				methodology: "Методология",
				mockPages: "Тестовые страницы",
				products: "Продукты",
				pricing: "Цены",
				team: "Команда",
				blog: "Блог",
				careers: "Карьера",
				faq: "FAQ",
				contact: "Контакт",
				settings: "Настройки",
				goToGithub: "Перейти на GitHub"
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
}, String(e))), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/contact/ContactForm.tsx";
function It() {
	let e = Pt(m), t = Pt(te), n = s(), r = s(), i = s(), a = s();
	return p("form", {
		className: "space-y-6",
		children: [
			p("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [p("div", { children: [p("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 16,
					columnNumber: 11
				}, this), p("input", {
					id: n,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e("yourName")
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 22,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 15,
					columnNumber: 9
				}, this), p("div", { children: [p("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 29,
					columnNumber: 11
				}, this), p("input", {
					id: r,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 35,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 28,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			p("div", { children: [p("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 44,
				columnNumber: 9
			}, this), p("select", {
				id: i,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					p("option", { children: e("bugReport") }, void 0, !1, {
						fileName: Q,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					p("option", { children: e("newBenchmarkIdea") }, void 0, !1, {
						fileName: Q,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					p("option", { children: e("methodologyQuestion") }, void 0, !1, {
						fileName: Q,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					p("option", { children: t("contact") }, void 0, !1, {
						fileName: Q,
						lineNumber: 57,
						columnNumber: 11
					}, this),
					p("option", { children: "Other" }, void 0, !1, {
						fileName: Q,
						lineNumber: 58,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 50,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			p("div", { children: [p("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 62,
				columnNumber: 9
			}, this), p("textarea", {
				id: a,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e("describeYourQuestionOrIdea")
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 68,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			p("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e("sendMessage")
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 75,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
var Lt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Rt({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(Ft, {
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
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/contact/ContactForm.wrapper.tsx";
function zt() {
	return p(Rt, { children: p(It, {}, void 0, !1, {
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
