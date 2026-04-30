import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as p, toDisplayString as m, toValue as h, watch as g, withModifiers as _ } from "vue";
var ee = {
	key: "contact-form",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				e: "Name",
				f: "Your name",
				a: "Email",
				b: "you@example.com",
				h: "Topic",
				i: [
					"Bug Report",
					"New Benchmark Idea",
					"Methodology Question",
					"Contribution",
					"Other"
				],
				c: "Message",
				d: "Describe your question or idea...",
				g: "Send Message"
			},
			fr: {
				e: "Nom",
				f: "Votre nom",
				a: "E-mail",
				b: "vous@exemple.com",
				h: "Sujet",
				i: [
					"Rapport de bug",
					"Idée de benchmark",
					"Question de méthodologie",
					"Contribution",
					"Autre"
				],
				c: "Message",
				d: "Décrivez votre question ou idée…",
				g: "Envoyer"
			},
			es: {
				e: "Nombre",
				f: "Su nombre",
				a: "Correo electrónico",
				b: "tu@ejemplo.com",
				h: "Tema",
				i: [
					"Informe de error",
					"Nueva idea de benchmark",
					"Pregunta sobre metodología",
					"Contribución",
					"Otro"
				],
				c: "Mensaje",
				d: "Describa su pregunta o idea...",
				g: "Enviar mensaje"
			},
			de: {
				e: "Name",
				f: "Ihr Name",
				a: "E-Mail",
				b: "sie@beispiel.de",
				h: "Thema",
				i: [
					"Fehlerbericht",
					"Neue Benchmark-Idee",
					"Frage zur Methodik",
					"Beitrag",
					"Sonstiges"
				],
				c: "Nachricht",
				d: "Beschreiben Sie Ihre Frage oder Idee...",
				g: "Nachricht senden"
			},
			it: {
				e: "Nome",
				f: "Il tuo nome",
				a: "E-mail",
				b: "tu@esempio.com",
				h: "Argomento",
				i: [
					"Segnalazione bug",
					"Nuova idea di benchmark",
					"Domanda sulla metodologia",
					"Contributo",
					"Altro"
				],
				c: "Messaggio",
				d: "Descrivi la tua domanda o idea...",
				g: "Invia messaggio"
			},
			pt: {
				e: "Nome",
				f: "Seu nome",
				a: "E-mail",
				b: "voce@exemplo.com",
				h: "Assunto",
				i: [
					"Relatório de erro",
					"Nova ideia de benchmark",
					"Pergunta sobre metodologia",
					"Contribuição",
					"Outro"
				],
				c: "Mensagem",
				d: "Descreva sua pergunta ou ideia...",
				g: "Enviar Mensagem"
			},
			zh: {
				e: "姓名",
				f: "您的姓名",
				a: "电子邮件",
				b: "you@example.com",
				h: "主题",
				i: [
					"错误报告",
					"新基准测试创意",
					"方法论问题",
					"贡献",
					"其他"
				],
				c: "消息",
				d: "描述您的问题或想法...",
				g: "发送消息"
			},
			ja: {
				e: "名前",
				f: "お名前",
				a: "メールアドレス",
				b: "you@example.com",
				h: "トピック",
				i: [
					"バグ報告",
					"新しいベンチマークのアイデア",
					"方法論に関する質問",
					"貢献",
					"その他"
				],
				c: "メッセージ",
				d: "質問やアイデアを説明してください...",
				g: "メッセージを送信"
			},
			ko: {
				e: "이름",
				f: "이름을 입력하세요",
				a: "이메일",
				b: "you@example.com",
				h: "주제",
				i: [
					"버그 보고",
					"새로운 벤치마크 아이디어",
					"방법론 관련 질문",
					"기여",
					"기타"
				],
				c: "메시지",
				d: "질문이나 아이디어를 설명해 주세요...",
				g: "메시지 보내기"
			},
			ru: {
				e: "Имя",
				f: "Ваше имя",
				a: "Электронная почта",
				b: "you@example.com",
				h: "Тема",
				i: [
					"Отчет об ошибке",
					"Новая идея для бенчмарка",
					"Вопрос по методологии",
					"Вклад",
					"Другое"
				],
				c: "Сообщение",
				d: "Опишите ваш вопрос или идею...",
				g: "Отправить сообщение"
			}
		}
	}
}, v = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return v({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), l(o);
}, y = "translation", b = "object", x = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: x,
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
					type: b,
					key: r
				}]
			}, i = S(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, C = {
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
}, w = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, T = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (w(e) && w(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : T(e[r], t[r]));
		return n;
	}
	return e;
}, E = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => T(e, t));
}, D = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", O = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, k = (e, t) => D ? O : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: y,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return E(o, e, t);
	}
}, A = O, j = O, M = O, N = O, P = (e) => O, F = O, I = (e, t = !0) => [
	k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	A,
	j,
	M,
	P(e ?? C.defaultLocale),
	F,
	N
], L = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), R = (e, t, n = I(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return L(e.content, r, n);
}, z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => v({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return l(a);
	}
}, B = O, V = O, H = O, U = /* @__PURE__ */ new Map(), W = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (U.has(n)) return U.get(n);
	let r = [
		k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		A,
		j,
		P(e ?? C.defaultLocale),
		F,
		N,
		z,
		B,
		V,
		H
	];
	return U.set(n, r), r;
}, G = (e, t) => R(e, t, W(t)), K = Symbol("intlayer"), q = (e, t) => t.reduce((e, t) => e?.[t], e), J = (e) => typeof e == "object" && !!e, Y = (e) => typeof e == "function" || J(e) && ("render" in e || "setup" in e), X = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Z = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Y(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Q = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Z(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), $ = (e, n) => {
	let r = a() ? s(K) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? C.defaultLocale), o = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), l = p({});
	g([() => h(e), () => o.value], ([e, t]) => {
		l.value = G(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => q(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Z(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = q(l.value, o);
			if (s === void 0 || J(s) && !Y(s)) return u(o);
			if (X(s)) return Q(t(() => q(l.value, o)));
			let c = t(() => q(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = q(l.value, e);
			return J(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, te = i({
	__name: "ContactForm",
	setup(e, { expose: t }) {
		t();
		let { e: n, f: r, a: i, b: a, h: o, i: s, c, d: l, g: u } = $(ee), d = {
			nameLabel: n,
			namePlaceholder: r,
			emailLabel: i,
			emailPlaceholder: a,
			topicLabel: o,
			topics: s,
			messageLabel: c,
			messagePlaceholder: l,
			sendMessage: u
		};
		return Object.defineProperty(d, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), d;
	}
}), ne = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, re = { class: "grid gap-4 md:grid-cols-2" }, ie = {
	for: "name",
	class: "mb-1 block text-sm font-medium text-foreground"
}, ae = ["placeholder"], oe = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
}, se = ["placeholder"], ce = {
	for: "topic",
	class: "mb-1 block text-sm font-medium text-foreground"
}, le = {
	id: "topic",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
}, ue = {
	for: "message",
	class: "mb-1 block text-sm font-medium text-foreground"
}, de = ["placeholder"], fe = {
	type: "submit",
	class: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function pe(t, i, a, o, s, c) {
	return u(), n("form", {
		class: "space-y-6",
		onSubmit: i[0] ||= _(() => {}, ["prevent"])
	}, [
		r("div", re, [r("div", null, [r("label", ie, m(o.nameLabel), 1), r("input", {
			id: "name",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: o.namePlaceholder
		}, null, 8, ae)]), r("div", null, [r("label", oe, m(o.emailLabel), 1), r("input", {
			id: "email",
			type: "email",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: o.emailPlaceholder
		}, null, 8, se)])]),
		r("div", null, [r("label", ce, m(o.topicLabel), 1), r("select", le, [(u(!0), n(e, null, f(o.topics, (e) => (u(), n("option", { key: e }, m(e), 1))), 128))])]),
		r("div", null, [r("label", ue, m(o.messageLabel), 1), r("textarea", {
			id: "message",
			rows: "5",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: o.messagePlaceholder
		}, null, 8, de)]),
		r("button", fe, m(o.sendMessage), 1)
	], 32);
}
var me = ne(te, [["render", pe], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/contact/ContactForm.vue"]]);
export { me as default };
