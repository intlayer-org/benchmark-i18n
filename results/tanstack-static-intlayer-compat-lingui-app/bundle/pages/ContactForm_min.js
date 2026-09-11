import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useId as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { jsxDEV as m } from "react/jsx-dev-runtime";
var ee = {
	key: "contact-form",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				yourName: "Your name",
				email: "Email",
				topic: "Topic",
				bugReport: "Bug Report",
				newBenchmarkIdea: "New Benchmark Idea",
				methodologyQuestion: "Methodology Question",
				contribution: "Contribution",
				other: "Other",
				message: "Message",
				describeYourQuestionOrIdea: "Describe your question or idea...",
				sendMessage: "Send Message"
			},
			fr: {
				yourName: "Votre nom",
				email: "E-mail",
				topic: "Sujet",
				bugReport: "Rapport de bug",
				newBenchmarkIdea: "Nouvelle idée de benchmark",
				methodologyQuestion: "Question sur la méthodologie",
				contribution: "Contribution",
				other: "Autre",
				message: "Message",
				describeYourQuestionOrIdea: "Décrivez votre question ou idée...",
				sendMessage: "Envoyer le message"
			},
			es: {
				yourName: "Tu nombre",
				email: "Correo electrónico",
				topic: "Tema",
				bugReport: "Informe de bug",
				newBenchmarkIdea: "Nueva idea de benchmark",
				methodologyQuestion: "Pregunta sobre metodología",
				contribution: "Contribución",
				other: "Otro",
				message: "Mensaje",
				describeYourQuestionOrIdea: "Describe tu pregunta o idea...",
				sendMessage: "Enviar mensaje"
			},
			de: {
				yourName: "Ihr Name",
				email: "E-Mail",
				topic: "Thema",
				bugReport: "Fehlerbericht",
				newBenchmarkIdea: "Neue Benchmark-Idee",
				methodologyQuestion: "Frage zur Methodik",
				contribution: "Beitrag",
				other: "Sonstiges",
				message: "Nachricht",
				describeYourQuestionOrIdea: "Beschreiben Sie Ihre Frage oder Idee...",
				sendMessage: "Nachricht senden"
			},
			it: {
				yourName: "Il tuo nome",
				email: "Email",
				topic: "Argomento",
				bugReport: "Segnalazione di bug",
				newBenchmarkIdea: "Nuova idea di benchmark",
				methodologyQuestion: "Domanda sulla metodologia",
				contribution: "Contributo",
				other: "Altro",
				message: "Messaggio",
				describeYourQuestionOrIdea: "Descrivi la tua domanda o idea...",
				sendMessage: "Invia messaggio"
			},
			pt: {
				yourName: "Seu nome",
				email: "E-mail",
				topic: "Assunto",
				bugReport: "Relatório de bug",
				newBenchmarkIdea: "Nova ideia de benchmark",
				methodologyQuestion: "Pergunta sobre metodologia",
				contribution: "Contribuição",
				other: "Outros",
				message: "Mensagem",
				describeYourQuestionOrIdea: "Descreva sua pergunta ou ideia...",
				sendMessage: "Enviar mensagem"
			},
			zh: {
				yourName: "您的姓名",
				email: "电子邮箱",
				topic: "话题",
				bugReport: "Bug 报告",
				newBenchmarkIdea: "新基准测试想法",
				methodologyQuestion: "方法论问题",
				contribution: "贡献",
				other: "其他",
				message: "消息内容",
				describeYourQuestionOrIdea: "描述您的问题或想法...",
				sendMessage: "发送消息"
			},
			ja: {
				yourName: "お名前",
				email: "メールアドレス",
				topic: "トピック",
				bugReport: "バグ報告",
				newBenchmarkIdea: "新しいベンチマークのアイデア",
				methodologyQuestion: "方法論に関する質問",
				contribution: "貢献",
				other: "その他",
				message: "メッセージ",
				describeYourQuestionOrIdea: "質問やアイデアの詳細を記入してください...",
				sendMessage: "メッセージを送信"
			},
			ko: {
				yourName: "이름",
				email: "이메일",
				topic: "주제",
				bugReport: "버그 보고",
				newBenchmarkIdea: "새로운 벤치마크 아이디어",
				methodologyQuestion: "방법론 질문",
				contribution: "기여",
				other: "기타",
				message: "메시지",
				describeYourQuestionOrIdea: "질문이나 아이디어를 설명해주세요...",
				sendMessage: "메시지 보내기"
			},
			ru: {
				yourName: "Ваше имя",
				email: "Электронная почта",
				topic: "Тема",
				bugReport: "Отчет об ошибке",
				newBenchmarkIdea: "Новая идея для бенчмарка",
				methodologyQuestion: "Вопрос по методологии",
				contribution: "Вклад",
				other: "Другое",
				message: "Сообщение",
				describeYourQuestionOrIdea: "Опишите ваш вопрос или идею...",
				sendMessage: "Отправить сообщение"
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
}, h = (e, t) => {
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
}, ae = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ie).join("") : String(e ?? ""), oe = "translation", se = "enumeration", ce = "plural", g = "insertion", le = "object", ue = "array", _ = "markdown", v = "html", y = "gender", de = "select", b = (e, t, n) => ({
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
}, S = (e) => b(se, e), fe = (e) => b(y, e), pe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, C = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = pe(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, me = /* @__PURE__ */ new Set([
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
]), he = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ge = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(he)) {
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
				let e = me.has(i.toLowerCase());
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
}, w = (e, t) => b(v, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ge(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return C(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => C(await e)), typeof n == "string") return C(n);
	try {
		return C(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), T = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, E = (e) => b(g, e, { fields: (() => {
	if (typeof e == "string") return T(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => T(await e)), typeof t == "string") return T(t);
	try {
		return T(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), _e = (e) => b(ce, e), ve = (e, t) => b(de, e, { variable: t }), ye = (e) => {
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
}, D = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : E(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
		if (t.type === "argument") return t.format ? E(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : E(`{{${t.name}}}`);
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
					e[i] = D(a);
				}
				return e.__intlayer_icu_var = t.name, S(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = D(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return _e(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = D(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? fe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ve(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = D(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, S(e);
		}
	}
	return e.map((e) => D([e]));
}, be = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return D(ye(e));
		} catch {
			return e;
		}
	}
}, xe = (e) => x(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...be
	}]
}), Se = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ce = (e, t) => e[Se(e, t) ?? "fallback"], O = {
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
}, we = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Te = 50, Ee = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Set(), De = (e) => {
	A.has(e) || (A.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Oe = {
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
}, ke = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (De(e), Oe[e]);
};
function j(e, t, n) {
	let r = t ?? O?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ee.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ee.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Te && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ae = (e, t, n) => e[j("PluralRules", n).select(t)] ?? e.other, je = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, M = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], N = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Me = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? j("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? j("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : j("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return j("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ne = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = N(t, r);
	return o === void 0 ? e : i ? Me(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = N(t, r);
	return o === void 0 ? e : Me(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = N(t, n);
	return r === void 0 ? e : String(r);
}), P = (e, t) => e[t] ?? e.count ?? e.n, F = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ne(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return F(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(F(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return F(r[g], t, n);
	if (r.nodeType === "html") return F(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return F(Ae(e, Number(P(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[se], i = M.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) M.includes(t) || (o[t] = n);
		let s = P(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = j("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ce(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return F(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[de], i = P(t, typeof r.variable == "string" ? r.variable : "value");
		return F(je(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[y];
		return F(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Pe = (e, t = {}, n = "en") => {
	let r = F(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Fe = ((e) => (t, n = {}, r = "en") => Pe(typeof t == "string" ? e(t) : t, n, r))(xe), Ie = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Le = class extends te {
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
		let { dictionaryKey: t, remainder: n } = Ie(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = h(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = h(t, e);
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
			let t = h(r, e);
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
		return (c.kind === "node" ? Pe(c.node, o, s) : Fe(c.message, o, s)) ?? i;
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
}, Re = t(null), I = /* @__PURE__ */ new WeakMap(), L = 0, ze = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	L += 1;
	let n = `p${L}`;
	return I.set(e, n), n;
}, Be = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, Ve = (e, t, n) => `${e}_${t}_${ze(n)}`, He = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= Be && r.clear(), r.set(t, n), n;
}, V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", Ue = /[^A-Za-z0-9._&=-]/g, U = /[^A-Za-z0-9._-]/g, We = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, We);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ge = (e) => e === void 0 ? H : typeof e == "string" ? W(e, Ue) : Object.keys(e).sort().map((t) => `${W(t, U)}=${W(String(e[t]), U)}`).join("&"), Ke = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(Ge) : [Ge(e)], qe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
}, Je = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ye = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Xe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ze = (e, t) => {
	if (!Ye(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : qe(Ke(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Je(e, n, t, s)).map((t) => Xe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Qe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, $e = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ke(n).join(",") : String(n)}`;
}).join("|") : "", G = "\x1B[0m", et = "\x1B[34m", tt = "\x1B[31m", nt = "\x1B[32m", rt = "\x1B[38;5;3m", it = (e) => e, at = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = it(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, ot = (e, t) => (n, r) => at(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, st = (e, t = rt, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", tt), K("✓", nt), K("⏲", et);
var ct = () => ({}), lt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ut = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : lt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ut(e ? `${e}.${String(n)}` : String(n)) }), dt = /* @__PURE__ */ new Set(), ft = (e, t, n) => {
	let r = ct()[e];
	return r ? At(r, t, n) : (dt.has(e) || (ot({ log: we })(typeof window > "u" ? `Dictionary ${st(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), dt.add(e)), ut(e));
}, pt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, mt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (pt(e) && pt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : mt(e[r], t[r]));
		return n;
	}
	return e;
}, ht = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => mt(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, gt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[v] : e[_];
}, _t = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? v : _;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, vt = (e, t, n, r, i) => {
	let a = _t(e, V(gt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, yt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
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
		return ht(o, e, t);
	}
}, bt = J, xt = (e) => J, St = J, Ct = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => vt(e, i, n, t.plugins, r);
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
}, wt = J, Tt = J, Et = (e) => J, Dt = J, Ot = (e, t = !0) => [
	yt(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
	bt,
	St,
	Ct,
	Et(e ?? O.defaultLocale),
	Dt,
	wt,
	Tt
], kt = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), At = (e, t, n) => {
	let { locale: r, selector: i } = Qe(t), a = Ve(r ?? O.defaultLocale, $e(i), n), o = He(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ot(r), c = Ze(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return kt(e.content, t, s);
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, jt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Mt = /\{\{\s*(.*?)\s*\}\}/g, Nt = (e, t = {}) => {
	if (!Object.values(t).some(jt)) return {
		isSimple: !0,
		parts: e.replace(Mt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Mt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Pt = () => {
	try {
		return Object.keys(ct());
	} catch {
		return [];
	}
}, Ft = (e, t) => {
	let n = Pt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return ft(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = h(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = h(a(t), e);
		if (n !== void 0) return n;
	}
}, It = (e) => {
	let t = {};
	for (let n of Pt()) try {
		Object.assign(t, re(ft(n, e)));
	} catch {}
	return t;
}, Lt = () => ({
	lookup: Ft,
	all: It
}), Rt = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : f(d, { children: e });
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
}, zt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Rt({
		...n,
		value: n.children,
		children: n.children
	})
}, Bt = J, Vt = (t, r) => {
	let i = Nt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ht = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => vt(e, i, n, t.plugins, r);
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
}, Ut = J, Wt = J, Y = /* @__PURE__ */ new Map(), Gt = (e, t = !0) => {
	let n = `${e ?? O.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		yt(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
		bt,
		xt(e ?? O.defaultLocale),
		St,
		Et(e ?? O.defaultLocale),
		Dt,
		wt,
		Tt,
		zt,
		Bt,
		Ht,
		Ut,
		Wt
	];
	return Y.set(n, r), r;
}, Kt = (e, t) => At(e, t, Gt(typeof t == "object" && t ? t.locale : t)), qt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Jt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = qt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Yt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, Xt = (e = X) => {
	let { locales: t } = O;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Yt) for (let t = 0; t < (k.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(k.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Zt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Yt && k.storage.cookies) for (let n = 0; n < k.storage.cookies.length; n++) {
		let { name: r, attributes: i } = k.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: qt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Jt(r, e, i));
			} catch {}
		}
	}
}, Qt = Xt(X), $t = (e, t) => Zt(e, {
	...X,
	isCookieEnabled: t
}), en = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, tn = ({ children: e }) => (en(), e), nn = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, rn = ({ children: e }) => (nn(), e), an = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, on = (e, t = O?.locales, n = O?.defaultLocale) => {
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
	locale: Qt ?? O?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), sn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = O ?? {}, [d, p] = u(e ?? Qt ?? t ?? l);
	o(() => {
		e && e !== d && p(e);
	}, [e]), o(() => {
		an();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), $t(e, s);
		}
	}), ee = on(d);
	return f(Z.Provider, {
		value: {
			locale: ee,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, cn = ({ children: e, ...t }) => p(sn, {
	...t,
	children: [
		f(tn, {}),
		f(rn, {}),
		e
	]
}), { defaultLocale: ln, locales: Q } = O ?? {}, un = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: ln,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), $t(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, dn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = u(() => r(e)), [s, c] = u(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), f(Re.Provider, {
		value: i,
		children: f(cn, {
			locale: s,
			children: n
		})
	});
}, fn = (e, t) => {
	let n = new Le({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, pn = (...e) => {
	let { locale: t } = un(), n = e.map((e) => e.key).join("\0");
	return c(() => fn(t, Object.fromEntries(e.map((e) => [e.key, Kt(e, t)]))), [t, n]);
}, mn = (e) => new Le({
	...e,
	registry: Lt()
});
mn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/contact/ContactForm.tsx";
function hn() {
	let { i18n: e } = pn(ee), t = s(), n = s(), r = s(), i = s();
	return m("form", {
		className: "space-y-6",
		children: [
			m("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [m("div", { children: [m("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e._("contact-form.yourName")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 16,
					columnNumber: 11
				}, this), m("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e._("contact-form.yourName")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 22,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: $,
					lineNumber: 15,
					columnNumber: 9
				}, this), m("div", { children: [m("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e._("contact-form.email")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 29,
					columnNumber: 11
				}, this), m("input", {
					id: n,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 35,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: $,
					lineNumber: 28,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			m("div", { children: [m("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e._("contact-form.topic")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 44,
				columnNumber: 9
			}, this), m("select", {
				id: r,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					m("option", { children: e._("contact-form.bugReport") }, void 0, !1, {
						fileName: $,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					m("option", { children: e._("contact-form.newBenchmarkIdea") }, void 0, !1, {
						fileName: $,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					m("option", { children: e._("contact-form.methodologyQuestion") }, void 0, !1, {
						fileName: $,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					m("option", { children: e._("contact-form.contribution") }, void 0, !1, {
						fileName: $,
						lineNumber: 57,
						columnNumber: 11
					}, this),
					m("option", { children: e._("contact-form.other") }, void 0, !1, {
						fileName: $,
						lineNumber: 58,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 50,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: $,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			m("div", { children: [m("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e._("contact-form.message")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 62,
				columnNumber: 9
			}, this), m("textarea", {
				id: i,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e._("contact-form.describeYourQuestionOrIdea")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 68,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: $,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			m("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e._("contact-form.sendMessage")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 75,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
function gn(e, t) {
	let n = mn();
	return n.activate(e), n;
}
var _n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function vn({ children: e }) {
	let t = c(() => gn("en"), []);
	return m(dn, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: _n,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var yn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/contact/ContactForm.wrapper.tsx";
function bn() {
	return m(vn, { children: m(hn, {}, void 0, !1, {
		fileName: yn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: yn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { bn as default };
