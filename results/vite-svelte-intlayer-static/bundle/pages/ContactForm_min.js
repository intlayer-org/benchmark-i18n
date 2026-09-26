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
}, a = {
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
}, o = a?.defaultLocale, s = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: o });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: o })
	};
})(), c = Symbol("intlayer"), l = () => t(c), u = /* @__PURE__ */ new Map(), d = (e, t) => Object.create(new Proxy(e, {
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
}), f = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = u.get(t);
	i || (i = /* @__PURE__ */ new Map(), u.set(t, i));
	let a = i.get(r);
	return a || (a = d(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, p = "translation", m = "object", h = "array", g = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, _);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, g(t, e, {
		type: h,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: m,
			key: r
		};
		if (t.eager) {
			n[r] = _(e[r], g(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = _(e[r], g(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, v = /* @__PURE__ */ new WeakMap(), y = 0, b = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, x = 256, S = /* @__PURE__ */ new WeakMap(), C = (e) => typeof e == "object" && !!e, w = (e, t, n) => `${e}_${t}_${b(n)}`, T = (e, t) => {
	if (!C(e)) return { hit: !1 };
	let n = S.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!C(e)) return n;
	let r = S.get(e);
	return r || (r = /* @__PURE__ */ new Map(), S.set(e, r)), r.size >= x && r.clear(), r.set(t, n), n;
}, D = (e, t = !0) => [
	F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	I,
	L(e ?? a.defaultLocale),
	R,
	z,
	H(e ?? a.defaultLocale),
	U,
	B,
	V
].filter((e) => e !== P), O = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), k = /* @__PURE__ */ new WeakSet(), A = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = w(r ?? a.defaultLocale, "", n), s = T(e, o);
	if (s.hit) return s.content;
	let c = n ?? D(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !k.has(e)
		};
		k.add(e);
		try {
			return O(e.content, t, c);
		} finally {
			t.eager && k.delete(e);
		}
	};
	return l === null ? E(e, o, null) : Array.isArray(l) ? E(e, o, l.map(u)) : E(e, o, u(l));
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !j(e) || !j(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? M(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, N = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: p,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, z = P, B = P, V = P, H = (e) => P, U = P;
function W(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var G = (e) => {
	let t = !!W.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new W({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => W(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, f(e.value, Function.prototype)), n;
}, K = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => G({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, q = K, J = P, Y = P, X = P, Z = /* @__PURE__ */ new Map(), Q = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		K,
		F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		I,
		L(e ?? a.defaultLocale),
		R,
		H(e ?? a.defaultLocale),
		U,
		B,
		V,
		q,
		J,
		Y,
		X
	].filter((e) => e !== P);
	return Z.set(n, r), r;
}, $ = (e, t) => A(e, t, Q(typeof t == "object" && t ? t.locale : t)), ee = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, te = e.from_html("<form class=\"space-y-6\"><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\" placeholder=\"you@example.com\"/></div></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <textarea class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"></textarea></div> <button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></form>");
function ne(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = ee(i), c = "contact-name", l = "contact-email", u = "contact-topic", d = "contact-message";
	e.init();
	var f = te(), p = e.child(f), m = e.child(p), h = e.child(m);
	e.set_attribute(h, "for", c);
	var g = e.only_child(h, !0), _ = e.sibling(h, 2);
	e.set_attribute(_, "id", c), e.reset(m);
	var v = e.sibling(m, 2), y = e.child(v);
	e.set_attribute(y, "for", l);
	var b = e.only_child(y, !0), x = e.sibling(y, 2);
	e.set_attribute(x, "id", l), e.reset(v), e.reset(p);
	var S = e.sibling(p, 2), C = e.child(S);
	e.set_attribute(C, "for", u);
	var w = e.only_child(C, !0), T = e.sibling(C, 2);
	e.set_attribute(T, "id", u);
	var E = e.child(T), D = e.only_child(E, !0), O = {}, k = e.sibling(E), A = e.only_child(k, !0), j = {}, M = e.sibling(k), N = e.only_child(M, !0), P = {}, F = e.sibling(M), I = e.only_child(F, !0), L = {}, R = e.sibling(F), z = e.only_child(R, !0), B = {};
	e.reset(T), e.reset(S);
	var V = e.sibling(S, 2), H = e.child(V);
	e.set_attribute(H, "for", d);
	var U = e.only_child(H, !0), W = e.sibling(H, 2);
	e.set_attribute(W, "id", d), e.set_attribute(W, "rows", 5), e.reset(V);
	var G = e.sibling(V, 2), K = e.only_child(G, !0);
	e.reset(f), e.template_effect(() => {
		e.set_text(g, r().name), e.set_attribute(_, "placeholder", r().yourName), e.set_text(b, r().email), e.set_text(w, r().topic), e.set_text(D, r().bugReport), O !== (O = r().bugReport) && (E.__value = O), e.set_text(A, r().newBenchmarkIdea), j !== (j = r().newBenchmarkIdea) && (k.__value = j), e.set_text(N, r().methodologyQuestion), P !== (P = r().methodologyQuestion) && (M.__value = P), e.set_text(I, r().contribution), L !== (L = r().contribution) && (F.__value = L), e.set_text(z, r().other), B !== (B = r().other) && (R.__value = B), e.set_text(U, r().message), e.set_attribute(W, "placeholder", r().describeYourQuestionOrIdea), e.set_text(K, r().sendMessage);
	}), e.append(t, f), e.pop(), o();
}
export { ne as default };
