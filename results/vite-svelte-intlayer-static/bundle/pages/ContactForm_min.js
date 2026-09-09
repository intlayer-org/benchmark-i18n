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
})(), c = Symbol("intlayer"), l = () => t(c), u = "default", d = /[^A-Za-z0-9._&=-]/g, f = /[^A-Za-z0-9._-]/g, p = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, m = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, p);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, h = (e) => e === void 0 ? u : typeof e == "string" ? m(e, d) : Object.keys(e).sort().map((t) => `${m(t, f)}=${m(String(e[t]), f)}`).join("&"), g = (e) => Array.isArray(e) ? e.length === 0 ? [u] : e.map(h) : [h(e)], _ = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? u : e[0] ?? "default";
}, v = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, y = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, b = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, x = (e, t) => {
	if (!y(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? u : _(g(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => v(e, n, t, s)).map((t) => b(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, S = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, C = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? g(n).join(",") : String(n)}`;
}).join("|") : "", w = "translation", T = "object", E = "array", D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => D(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: E,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: T,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = D(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = D(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, O = /* @__PURE__ */ new WeakMap(), k = 0, A = (e) => {
	if (!e) return "base";
	let t = O.get(e);
	if (t) return t;
	k += 1;
	let n = `p${k}`;
	return O.set(e, n), n;
}, j = 256, M = /* @__PURE__ */ new WeakMap(), N = (e) => typeof e == "object" && !!e, P = (e, t, n) => `${e}_${t}_${A(n)}`, F = (e, t) => {
	if (!N(e)) return { hit: !1 };
	let n = M.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!N(e)) return n;
	let r = M.get(e);
	return r || (r = /* @__PURE__ */ new Map(), M.set(e, r)), r.size >= j && r.clear(), r.set(t, n), n;
}, L = (e, t = !0) => [
	U(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	W,
	K,
	te,
	Y(e ?? a.defaultLocale),
	X,
	q,
	J
], R = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), ee = (e, t, n) => {
	let { locale: r, selector: i } = S(t), o = P(r ?? a.defaultLocale, C(i), n), s = F(e, o);
	if (s.hit) return s.content;
	let c = n ?? L(r), l = x(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return R(e.content, t, c);
	};
	return l === null ? I(e, o, null) : Array.isArray(l) ? I(e, o, l.map(u)) : I(e, o, u(l));
}, z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (z(e) && z(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : B(e[r], t[r]));
		return n;
	}
	return e;
}, V = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => B(e, t));
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return V(o, e, t);
	}
}, W = H, G = (e) => H, K = H, te = H, q = H, J = H, Y = (e) => H, X = H;
function Z(t, n) {
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
var ne = (e) => {
	let t = !!Z.prototype?.$destroy, n;
	if (n = t ? class extends Z {
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
	} : (t) => Z(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ne({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, re = Q, ie = H, ae = H, oe = H, $ = /* @__PURE__ */ new Map(), se = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		U(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		W,
		G(e ?? a.defaultLocale),
		K,
		Y(e ?? a.defaultLocale),
		X,
		q,
		J,
		Q,
		re,
		ie,
		ae,
		oe
	];
	return $.set(n, r), r;
}, ce = (e, t) => ee(e, t, se(typeof t == "object" && t ? t.locale : t)), le = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return ce(e, t ?? i);
	});
}, ue = e.from_html("<form class=\"space-y-6\"><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\" placeholder=\"you@example.com\"/></div></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <textarea class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"></textarea></div> <button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></form>");
function de(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = le(i), c = "contact-name", l = "contact-email", u = "contact-topic", d = "contact-message";
	e.init();
	var f = ue(), p = e.child(f), m = e.child(p), h = e.child(m);
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
	var E = e.child(T), D = e.only_child(E, !0), O = {}, k = e.sibling(E), A = e.only_child(k, !0), j = {}, M = e.sibling(k), N = e.only_child(M, !0), P = {}, F = e.sibling(M), I = e.only_child(F, !0), L = {}, R = e.sibling(F), ee = e.only_child(R, !0), z = {};
	e.reset(T), e.reset(S);
	var B = e.sibling(S, 2), V = e.child(B);
	e.set_attribute(V, "for", d);
	var H = e.only_child(V, !0), U = e.sibling(V, 2);
	e.set_attribute(U, "id", d), e.set_attribute(U, "rows", 5), e.reset(B);
	var W = e.sibling(B, 2), G = e.only_child(W, !0);
	e.reset(f), e.template_effect(() => {
		e.set_text(g, r().name), e.set_attribute(_, "placeholder", r().yourName), e.set_text(b, r().email), e.set_text(w, r().topic), e.set_text(D, r().bugReport), O !== (O = r().bugReport) && (E.__value = O), e.set_text(A, r().newBenchmarkIdea), j !== (j = r().newBenchmarkIdea) && (k.__value = j), e.set_text(N, r().methodologyQuestion), P !== (P = r().methodologyQuestion) && (M.__value = P), e.set_text(I, r().contribution), L !== (L = r().contribution) && (F.__value = L), e.set_text(ee, r().other), z !== (z = r().other) && (R.__value = z), e.set_text(H, r().message), e.set_attribute(U, "placeholder", r().describeYourQuestionOrIdea), e.set_text(G, r().sendMessage);
	}), e.append(t, f), e.pop(), o();
}
export { de as default };
