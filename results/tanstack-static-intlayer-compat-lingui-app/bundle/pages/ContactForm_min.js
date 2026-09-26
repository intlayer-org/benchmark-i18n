import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useId as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
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
}, p = t(null), m = class {
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
}, h = (e, t) => {
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
}, g = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, _ = (e, t) => {
	let n = h(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return h(n, t);
	}
}, v = (e) => {
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
			i.push(`${t} {${y(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, y = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(v).join("") : String(e ?? ""), te = "translation", b = "enumeration", x = "plural", ne = "condition", S = "insertion", re = "object", ie = "array", ae = "markdown", C = "html", w = "gender", T = "select", E = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), D = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, O);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, D(t, e, {
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
			n[r] = O(e[r], D(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = O(e[r], D(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, oe = (e) => E(b, e), se = (e) => E(w, e), ce = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, k = (e) => {
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
}, A = (e, t) => E(C, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = de(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return k(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => k(await e)), typeof n == "string") return k(n);
	try {
		return k(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), j = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, M = (e) => E(S, e, { fields: (() => {
	if (typeof e == "string") return j(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => j(await e)), typeof t == "string") return j(t);
	try {
		return j(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), fe = (e) => E(x, e), pe = (e, t) => E(T, e, { variable: t }), me = (e) => {
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
}, N = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : M(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : t;
		if (t?.type === "argument") return t.format ? M(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : M(`{{${t.name}}}`);
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
					e[i] = N(a);
				}
				return e.__intlayer_icu_var = t.name, oe(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = N(i);
			}
			return fe(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = N(r);
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
				e[i] = N(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, oe(e);
		}
	}
	return e.map((e) => N([e]));
}, he = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return N(me(e));
		} catch {
			return e;
		}
	}
}, ge = (e) => O(e, {
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
}, ve = (e, t) => e[_e(e, t) ?? "fallback"], P = {
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
}, F = {
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
function I(e, t, n) {
	let r = t ?? P?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = xe.get(a);
	o || (o = /* @__PURE__ */ new Map(), xe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > be && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e, t, n) => e[I("PluralRules", n).select(t)] ?? e.other, De = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Oe = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], L = (e, t) => {
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
			return n === "percent" ? I("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? I("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : I("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return I("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ae = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : i ? ke(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : ke(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = L(t, n);
	return r === void 0 ? e : String(r);
}), R = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ae(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[S], t, n);
	if (r.nodeType === "html") return z(r[C], t, n);
	if (r.nodeType === "plural") {
		let e = r[x];
		return z(Ee(e, Number(R(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[b], i = Oe.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Oe.includes(t) || (o[t] = n);
		let s = R(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = I("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[T], i = R(t, typeof r.variable == "string" ? r.variable : "value");
		return z(De(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[w];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, je = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Me = ((e) => (t, n = {}, r = "en") => je(typeof t == "string" ? e(t) : t, n, r))(ge), Ne = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Pe = class extends m {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, g(t));
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
		let { dictionaryKey: t, remainder: n } = Ne(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = _(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = _(t, e);
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
			let t = _(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: y(t)
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
		return (c.kind === "node" ? je(c.node, o, s) : Me(c.message, o, s)) ?? i;
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
}, Fe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Ie = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Fe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, B = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = P;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!B) for (let t = 0; t < (F.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(F.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, U = !1, Le, Re = () => typeof window > "u" ? H(V) : (U ||= (Le = H(V), !0), Le), ze = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (U = !1, !B && F.storage.cookies)) for (let n = 0; n < F.storage.cookies.length; n++) {
		let { name: r, attributes: i } = F.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Fe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Ie(r, e, i));
			} catch {}
		}
	}
}, Be = /* @__PURE__ */ new Map(), Ve = (e, t) => Object.create(new Proxy(e, {
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
}), He = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Be.get(t);
	i || (i = /* @__PURE__ */ new Map(), Be.set(t, i));
	let a = i.get(r);
	return a || (a = Ve(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ue = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, He(t)), We = /* @__PURE__ */ new WeakMap(), Ge = 0, Ke = (e) => {
	if (!e) return "base";
	let t = We.get(e);
	if (t) return t;
	Ge += 1;
	let n = `p${Ge}`;
	return We.set(e, n), n;
}, qe = 256, W = /* @__PURE__ */ new WeakMap(), Je = (e) => typeof e == "object" && !!e, Ye = (e, t, n) => `${e}_${t}_${Ke(n)}`, Xe = (e, t) => {
	if (!Je(e)) return { hit: !1 };
	let n = W.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, G = (e, t, n) => {
	if (!Je(e)) return n;
	let r = W.get(e);
	return r || (r = /* @__PURE__ */ new Map(), W.set(e, r)), r.size >= qe && r.clear(), r.set(t, n), n;
}, Ze = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), K = "\x1B[0m", Qe = "\x1B[34m", $e = "\x1B[31m", et = "\x1B[32m", tt = "\x1B[38;5;3m", nt = (e) => e, rt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = nt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, it = (e, t) => (n, r) => rt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), q = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? K : n : K}` : e, at = (e, t = tt, n = K) => [e].flat().map((e) => q(e, t, n)).join(", ");
q("✗", $e), q("✓", et), q("⏲", Qe);
var ot = () => ({}), st = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ct = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : st.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ct(e ? `${e}.${String(n)}` : String(n)) }), lt = /* @__PURE__ */ new Set(), ut = (e, t, n) => {
	let r = ot()[e];
	return r ? jt(r, t, n) : (lt.has(e) || (it({ log: ye })(typeof window > "u" ? `Dictionary ${at(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), lt.add(e)), ct(e));
}, dt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, ft = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !dt(e) || !dt(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? ft(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, pt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => ft(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, mt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[C] : e[ae];
}, ht = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? C : ae;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, gt = (e, t, n, r, i) => {
	let a = ht(e, Ze(mt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, _t = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, vt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = pt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: te,
				key: e
			}]
		});
	}
}, yt = Y, bt = (e) => Y, xt = Y, St = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => gt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ze(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Tt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ct = [
	b,
	ne,
	x,
	w,
	T
], wt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Ct.includes(i)) return t;
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
		return !r && _t(i) ? i(n) : i;
	};
}, Tt = (e, t) => typeof t == "function" && Ct.includes(e?.nodeType ?? "") ? (n) => wt(e, t, n) : t, X = Y, Et = Y, Dt = (e) => Y, Ot = Y, kt = (e, t = !0) => [
	vt(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	yt,
	bt(e ?? P.defaultLocale),
	xt,
	St,
	Dt(e ?? P.defaultLocale),
	Ot,
	X,
	Et
].filter((e) => e !== Y), At = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), jt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ye(r ?? P.defaultLocale, "", n), o = Xe(e, a);
	if (o.hit) return o.content;
	let s = n ?? kt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return At(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? G(e, a, null) : Array.isArray(c) ? G(e, a, c.map(l)) : G(e, a, l(c));
}, Mt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Nt = /\{\{\s*(.*?)\s*\}\}/g, Pt = (e, t = {}) => {
	if (!Object.values(t).some(Mt)) return {
		isSimple: !0,
		parts: e.replace(Nt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Nt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ft = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ue({
		value: t.children,
		children: t.children
	})
}, It = Y, Lt = (t, r) => {
	let i = Pt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Rt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => gt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Lt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Tt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, zt = Y, Bt = Y, Q = /* @__PURE__ */ new Map(), Vt = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Ft,
		vt(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		yt,
		bt(e ?? P.defaultLocale),
		xt,
		Dt(e ?? P.defaultLocale),
		Ot,
		X,
		Et,
		It,
		Rt,
		zt,
		Bt
	].filter((e) => e !== Y);
	return Q.set(n, r), r;
}, Ht = (e, t) => jt(e, t, Vt(typeof t == "object" && t ? t.locale : t)), Ut = Re, Wt = (e, t) => ze(e, {
	...V,
	isCookieEnabled: t
}), Gt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Kt = (e, t = P?.locales, n = P?.defaultLocale) => {
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
}, qt = t({
	get locale() {
		return Ut() ?? P?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Jt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: s, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = P ?? {}, [p, m] = l(() => e ?? Ut() ?? t ?? ee), [h, g] = l(e);
	e !== h && (g(e), e && e !== p && m(e)), o(() => {
		Gt();
	}, []);
	let _ = i((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Wt(e, u);
		}
	}, [
		p,
		f,
		u
	]), v = a ?? _, y = Kt(p), te = c(() => ({
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
	return d(qt.Provider, {
		value: te,
		children: r
	});
}, Yt = ({ children: e, ...t }) => f(Jt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: Xt, locales: $ } = P ?? {}, Zt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(qt) ?? {};
	return {
		locale: n,
		defaultLocale: Xt,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Wt(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, Qt = (e, t) => {
	let n = new Pe({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, $t = (...e) => {
	let { locale: t } = Zt(), n = e.map((e) => e.key).join("\0");
	return c(() => Qt(t, Object.fromEntries(e.map((e) => [e.key, Ht(e, t)]))), [t, n]);
}, en = () => {
	try {
		return Object.keys(ot());
	} catch {
		return [];
	}
}, tn = (e, t) => {
	let n = en(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return ut(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = _(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = _(a(t), e);
		if (n !== void 0) return n;
	}
}, nn = (e) => {
	let t = {};
	for (let n of en()) try {
		Object.assign(t, g(ut(n, e)));
	} catch {}
	return t;
}, rn = () => ({
	lookup: tn,
	all: nn
}), an = (e) => new Pe({
	...e,
	registry: rn()
});
an({ locale: "en" });
var on = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), d(p.Provider, {
		value: i,
		children: d(Yt, {
			locale: s,
			children: n
		})
	});
};
function sn() {
	let { i18n: e } = $t(ee), t = s(), n = s(), r = s(), i = s();
	return f("form", {
		className: "space-y-6",
		children: [
			f("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [f("div", { children: [d("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e._("contact-form.yourName")
				}), d("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e._("contact-form.yourName")
				})] }), f("div", { children: [d("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e._("contact-form.email")
				}), d("input", {
					id: n,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			f("div", { children: [d("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e._("contact-form.topic")
			}), f("select", {
				id: r,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					d("option", { children: e._("contact-form.bugReport") }),
					d("option", { children: e._("contact-form.newBenchmarkIdea") }),
					d("option", { children: e._("contact-form.methodologyQuestion") }),
					d("option", { children: e._("contact-form.contribution") }),
					d("option", { children: e._("contact-form.other") })
				]
			})] }),
			f("div", { children: [d("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e._("contact-form.message")
			}), d("textarea", {
				id: i,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e._("contact-form.describeYourQuestionOrIdea")
			})] }),
			d("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e._("contact-form.sendMessage")
			})
		]
	});
}
function cn(e, t) {
	let n = an();
	return n.activate(e), n;
}
function ln({ children: e }) {
	let t = c(() => cn("en"), []);
	return d(on, {
		i18n: t,
		children: e
	});
}
function un() {
	return d(ln, { children: d(sn, {}) });
}
export { un as default };
