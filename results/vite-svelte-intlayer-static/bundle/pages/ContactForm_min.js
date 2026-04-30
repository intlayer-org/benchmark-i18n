import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	key: "contact-form",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				sendMessage: "Send Message",
				describeYourQuestionOrIdea: "Describe your question or idea...",
				message: "Message",
				other: "Other",
				contribution: "Contribution",
				methodologyQuestion: "Methodology Question",
				newBenchmarkIdea: "New Benchmark Idea",
				bugReport: "Bug Report",
				topic: "Topic",
				email: "Email",
				yourName: "Your name",
				name: "Name"
			},
			fr: {
				sendMessage: "Envoyer le message",
				describeYourQuestionOrIdea: "Décrivez votre question ou idée...",
				message: "Message",
				other: "Autre",
				contribution: "Contribution",
				methodologyQuestion: "Question sur la méthodologie",
				newBenchmarkIdea: "Nouvelle idée de benchmark",
				bugReport: "Rapport de bug",
				topic: "Sujet",
				email: "Email",
				yourName: "Votre nom",
				name: "Nom"
			},
			es: {
				sendMessage: "Enviar mensaje",
				describeYourQuestionOrIdea: "Describe tu pregunta o idea...",
				message: "Mensaje",
				other: "Otro",
				contribution: "Contribución",
				methodologyQuestion: "Pregunta sobre metodología",
				newBenchmarkIdea: "Nueva idea de benchmark",
				bugReport: "Informe de error",
				topic: "Tema",
				email: "Correo electrónico",
				yourName: "Tu nombre",
				name: "Nombre"
			},
			de: {
				sendMessage: "Nachricht senden",
				describeYourQuestionOrIdea: "Beschreiben Sie Ihre Frage oder Idee...",
				message: "Nachricht",
				other: "Andere",
				contribution: "Beitrag",
				methodologyQuestion: "Frage zur Methodik",
				newBenchmarkIdea: "Neue Benchmark-Idee",
				bugReport: "Fehlerbericht",
				topic: "Thema",
				email: "E-Mail",
				yourName: "Ihr Name",
				name: "Name"
			},
			it: {
				sendMessage: "Invia messaggio",
				describeYourQuestionOrIdea: "Descrivi la tua domanda o idea...",
				message: "Messaggio",
				other: "Altro",
				contribution: "Contributo",
				methodologyQuestion: "Domanda sulla metodologia",
				newBenchmarkIdea: "Nuova idea di benchmark",
				bugReport: "Segnalazione bug",
				topic: "Argomento",
				email: "Email",
				yourName: "Il tuo nome",
				name: "Nome"
			},
			pt: {
				sendMessage: "Enviar mensagem",
				describeYourQuestionOrIdea: "Descreva sua pergunta ou ideia...",
				message: "Mensagem",
				other: "Outro",
				contribution: "Contribuição",
				methodologyQuestion: "Pergunta sobre metodologia",
				newBenchmarkIdea: "Nova ideia de benchmark",
				bugReport: "Relatório de bug",
				topic: "Tópico",
				email: "E-mail",
				yourName: "Seu nome",
				name: "Nome"
			},
			zh: {
				sendMessage: "发送消息",
				describeYourQuestionOrIdea: "描述您的问题或想法...",
				message: "消息",
				other: "其他",
				contribution: "贡献",
				methodologyQuestion: "方法论问题",
				newBenchmarkIdea: "新的基准测试想法",
				bugReport: "错误报告",
				topic: "主题",
				email: "电子邮件",
				yourName: "您的姓名",
				name: "姓名"
			},
			ja: {
				sendMessage: "メッセージを送信",
				describeYourQuestionOrIdea: "質問やアイデアを説明してください...",
				message: "メッセージ",
				other: "その他",
				contribution: "貢献",
				methodologyQuestion: "方法論に関する質問",
				newBenchmarkIdea: "新しいベンチマークのアイデア",
				bugReport: "バグ報告",
				topic: "トピック",
				email: "メールアドレス",
				yourName: "お名前",
				name: "名前"
			},
			ko: {
				sendMessage: "메시지 보내기",
				describeYourQuestionOrIdea: "질문이나 아이디어를 설명해 주세요...",
				message: "메시지",
				other: "기타",
				contribution: "기여",
				methodologyQuestion: "방법론 질문",
				newBenchmarkIdea: "새로운 벤치마크 아이디어",
				bugReport: "버그 보고",
				topic: "주제",
				email: "이메일",
				yourName: "이름",
				name: "이름"
			},
			ru: {
				sendMessage: "Отправить сообщение",
				describeYourQuestionOrIdea: "Опишите ваш вопрос или идею...",
				message: "Сообщение",
				other: "Другое",
				contribution: "Вклад",
				methodologyQuestion: "Вопрос по методологии",
				newBenchmarkIdea: "Новая идея для бенчмарка",
				bugReport: "Отчет об ошибке",
				topic: "Тема",
				email: "Email",
				yourName: "Ваше имя",
				name: "Имя"
			}
		}
	}
}, a = Symbol("intlayer"), o = () => t(a), s = {
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
}, c = s?.defaultLocale, l = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: c });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: c })
	};
})(), u = "translation", d = "object", f = "array", p = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => p(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => p(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: f,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: d,
					key: r
				}]
			}, i = p(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, m = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, h = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (m(e) && m(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : h(e[r], t[r]));
		return n;
	}
	return e;
}, g = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => h(e, t));
}, _ = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, v = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? _ : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: u,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return g(o, e, t);
	}
}, y = _, b = _, x = _, S = _, C = (e) => _, w = _, T = (e, t = !0) => [
	v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	y,
	b,
	x,
	C(e ?? s.defaultLocale),
	w,
	S
], E = (e, t, n = []) => p(e, {
	...t,
	plugins: n
}), D = (e, t, n = T(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return E(e.content, r, n);
};
function O(t, n) {
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0);
	var o = e.comment(), s = e.first_child(o), c = (t) => {
		var n = e.comment(), o = e.first_child(n);
		e.element(o, r, !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, l = (t) => {
		r()(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), e.append(t, o);
}
var k = (e) => {
	let t = !!O.prototype?.$destroy, n;
	return n = t ? class extends O {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => O(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, A = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => k({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, j = A, M = _, N = _, P = _, F = /* @__PURE__ */ new Map(), I = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if (F.has(n)) return F.get(n);
	let r = [
		v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		y,
		b,
		C(e ?? s.defaultLocale),
		w,
		S,
		A,
		j,
		M,
		N,
		P
	];
	return F.set(n, r), r;
}, L = (e, t) => D(e, t, I(t)), R = (e, t) => {
	let r = o();
	return n([l], ([n]) => L(e, t ?? r?.locale ?? n.locale));
}, z = e.from_html("<form class=\"space-y-6\"><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\" placeholder=\"you@example.com\"/></div></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <textarea class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"></textarea></div> <button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></form>");
function B(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = R(i), c = "contact-name", l = "contact-email", u = "contact-topic", d = "contact-message";
	e.init();
	var f = z(), p = e.child(f), m = e.child(p), h = e.child(m);
	e.set_attribute(h, "for", c);
	var g = e.child(h, !0);
	e.reset(h);
	var _ = e.sibling(h, 2);
	e.set_attribute(_, "id", c), e.reset(m);
	var v = e.sibling(m, 2), y = e.child(v);
	e.set_attribute(y, "for", l);
	var b = e.child(y, !0);
	e.reset(y);
	var x = e.sibling(y, 2);
	e.set_attribute(x, "id", l), e.reset(v), e.reset(p);
	var S = e.sibling(p, 2), C = e.child(S);
	e.set_attribute(C, "for", u);
	var w = e.child(C, !0);
	e.reset(C);
	var T = e.sibling(C, 2);
	e.set_attribute(T, "id", u);
	var E = e.child(T), D = e.child(E, !0);
	e.reset(E);
	var O = {}, k = e.sibling(E), A = e.child(k, !0);
	e.reset(k);
	var j = {}, M = e.sibling(k), N = e.child(M, !0);
	e.reset(M);
	var P = {}, F = e.sibling(M), I = e.child(F, !0);
	e.reset(F);
	var L = {}, B = e.sibling(F), V = e.child(B, !0);
	e.reset(B);
	var H = {};
	e.reset(T), e.reset(S);
	var U = e.sibling(S, 2), W = e.child(U);
	e.set_attribute(W, "for", d);
	var G = e.child(W, !0);
	e.reset(W);
	var K = e.sibling(W, 2);
	e.set_attribute(K, "id", d), e.set_attribute(K, "rows", 5), e.reset(U);
	var q = e.sibling(U, 2), J = e.child(q, !0);
	e.reset(q), e.reset(f), e.template_effect(() => {
		e.set_text(g, r().name), e.set_attribute(_, "placeholder", r().yourName), e.set_text(b, r().email), e.set_text(w, r().topic), e.set_text(D, r().bugReport), O !== (O = r().bugReport) && (E.__value = r().bugReport), e.set_text(A, r().newBenchmarkIdea), j !== (j = r().newBenchmarkIdea) && (k.__value = r().newBenchmarkIdea), e.set_text(N, r().methodologyQuestion), P !== (P = r().methodologyQuestion) && (M.__value = r().methodologyQuestion), e.set_text(I, r().contribution), L !== (L = r().contribution) && (F.__value = r().contribution), e.set_text(V, r().other), H !== (H = r().other) && (B.__value = r().other), e.set_text(G, r().message), e.set_attribute(K, "placeholder", r().describeYourQuestionOrIdea), e.set_text(J, r().sendMessage);
	}), e.append(t, f), e.pop(), o();
}
export { B as default };
