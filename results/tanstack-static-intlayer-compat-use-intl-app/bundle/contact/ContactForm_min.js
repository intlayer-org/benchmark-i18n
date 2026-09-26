import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useId as c, useMemo as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
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
}, h = {
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
}, re = "translation", S = "enumeration", C = "plural", ie = "condition", w = "insertion", ae = "object", oe = "array", se = "markdown", T = "html", ce = "gender", le = "select", E = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, D);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, E(t, e, {
		type: oe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ae,
			key: r
		};
		if (t.eager) {
			n[r] = D(e[r], E(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = D(e[r], E(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, de = (e, t) => e[ue(e, t) ?? "fallback"], fe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), O = {
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
}, pe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, A = "\x1B[0m", me = "\x1B[34m", he = "\x1B[31m", ge = "\x1B[32m", _e = "\x1B[36m", ve = (e) => e, ye = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ve(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, be = (e, t) => (n, r) => ye(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), j = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? A : n : A}` : e;
j("✗", he), j("✓", ge), j("⏲", me);
var xe = 50, M = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Set(), Se = (e) => {
	N.has(e) || (N.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ce = {
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
}, we = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Se(e), Ce[e]);
};
function P(e, t, n) {
	let r = t ?? O?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = M.get(a);
	o || (o = /* @__PURE__ */ new Map(), M.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? we(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > xe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Te = (e, t, n) => e[P("PluralRules", n).select(t)] ?? e.other, Ee = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !F(e) || !F(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? I(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, De = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => I(e, t));
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Oe = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[T] : e[se];
}, ke = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? T : se;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = ke(e, fe(Oe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ae = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = De(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: re,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
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
					let a = fe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ne(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	S,
	ie,
	C,
	ce,
	le
], Me = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
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
		return !r && Ae(i) ? i(n) : i;
	};
}, Ne = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => Me(e, t, n) : t, Pe = z, Fe = z, Ie = (e) => z, Le = z, Re = (e, t = !0) => [
	B(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
	V,
	H(e ?? O.defaultLocale),
	U,
	je,
	Ie(e ?? O.defaultLocale),
	Le,
	Pe,
	Fe
].filter((e) => e !== z), ze = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), Be = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = te(r ?? O.defaultLocale, "", n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Re(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return ze(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, Ve = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", He = /\{\{\s*(.*?)\s*\}\}/g, Ue = (e, t = {}) => {
	if (!Object.values(t).some(Ve)) return {
		isSimple: !0,
		parts: e.replace(He, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(He), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, We = (e, t, n = ".") => {
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
}, Ge = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ke = (e, t, n, r) => {
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
}, qe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? Ke(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : Ke(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return qe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[w], t, n);
	if (r.nodeType === "html") return J(r[T], t, n);
	if (r.nodeType === "plural") {
		let e = r[C];
		return J(Te(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[S], i = Ge.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ge.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = P("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Ee(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ce];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Je = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Y(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Ye = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Xe = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Xe(e.children, n), a = n[e.tag];
	return typeof a == "function" ? f(t, { children: a(i) }, r) : f(t, { children: i }, r);
}), Ze = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Ze(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Qe = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return $e(e, (e) => We(t, r(e)), r);
}, $e = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Je(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Ye(t), o = r(e, i);
			return o === void 0 ? n(e) : f(d, { children: Xe(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Ye(t), o = r(e, i);
			return o === void 0 ? n(e) : Ze(Y(o), a);
		}
	});
}, et = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, tt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = et(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, nt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, rt = (e = X) => {
	let { locales: t } = O;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!nt) for (let t = 0; t < (k.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(k.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, it = !1, at, ot = () => typeof window > "u" ? rt(X) : (it ||= (at = rt(X), !0), at), st = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (it = !1, !nt && k.storage.cookies)) for (let n = 0; n < k.storage.cookies.length; n++) {
		let { name: r, attributes: i } = k.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: et(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, tt(r, e, i));
			} catch {}
		}
	}
}, ct = /* @__PURE__ */ new Map(), lt = (e, t) => Object.create(new Proxy(e, {
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
}), ut = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = ct.get(t);
	i || (i = /* @__PURE__ */ new Map(), ct.set(t, i));
	let a = i.get(r);
	return a || (a = lt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, dt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : f(d, { children: e }),
	value: t,
	...n
}, ut(t)), ft = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => dt({
		value: t.children,
		children: t.children
	})
}, pt = z, mt = (e, n) => {
	let i = Ue(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ht = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
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
					let a = mt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ne(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, gt = z, _t = z, Z = /* @__PURE__ */ new Map(), vt = (e, t = !0) => {
	let n = `${e ?? O.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		ft,
		B(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
		V,
		H(e ?? O.defaultLocale),
		U,
		Ie(e ?? O.defaultLocale),
		Le,
		Pe,
		Fe,
		pt,
		ht,
		gt,
		_t
	].filter((e) => e !== z);
	return Z.set(n, r), r;
}, yt = (e, t) => Be(e, t, vt(typeof t == "object" && t ? t.locale : t)), bt = ot, xt = (e, t) => st(e, {
	...X,
	isCookieEnabled: t
}), St = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Ct = (e, t = O?.locales, n = O?.defaultLocale) => {
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
}, Q = n({
	get locale() {
		return bt() ?? O?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), wt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: d, defaultLocale: p } = O ?? {}, [m, h] = u(() => e ?? bt() ?? t ?? p), [g, _] = u(e);
	e !== g && (_(e), e && e !== m && h(e)), s(() => {
		St();
	}, []);
	let ee = a((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), xt(e, c);
		}
	}, [
		m,
		d,
		c
	]), v = i ?? ee, y = Ct(m), b = l(() => ({
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
	return f(Q.Provider, {
		value: b,
		children: r
	});
}, Tt = ({ children: e, ...t }) => p(wt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Et = (e, t) => {
	let { locale: n, variant: r } = o(Q) ?? {}, i = t ?? n, a = i;
	return l(() => yt(e, i), [e.key, a]);
}, $ = ((e, t) => {
	let { locale: n } = o(Q) ?? {};
	return Qe(n, Et(e), t);
}), Dt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && be({ log: pe })(`${j("IntlProvider", _e)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), f(Tt, {
	locale: e,
	children: t
}, String(e)));
function Ot() {
	let e = $(m), t = $(h), n = c(), r = c(), i = c(), a = c();
	return p("form", {
		className: "space-y-6",
		children: [
			p("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [p("div", { children: [f("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}), f("input", {
					id: n,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e("yourName")
				})] }), p("div", { children: [f("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}), f("input", {
					id: r,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			p("div", { children: [f("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}), p("select", {
				id: i,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					f("option", { children: e("bugReport") }),
					f("option", { children: e("newBenchmarkIdea") }),
					f("option", { children: e("methodologyQuestion") }),
					f("option", { children: t("contact") }),
					f("option", { children: "Other" })
				]
			})] }),
			p("div", { children: [f("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}), f("textarea", {
				id: a,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e("describeYourQuestionOrIdea")
			})] }),
			f("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e("sendMessage")
			})
		]
	});
}
function kt({ children: t }) {
	return f(e.Suspense, {
		fallback: null,
		children: f(Dt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function At() {
	return f(kt, { children: f(Ot, {}) });
}
export { At as default };
