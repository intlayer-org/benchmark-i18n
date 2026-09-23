import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as p, toDisplayString as m, toValue as h, unref as g, watch as _, withModifiers as v } from "vue";
var y = {
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
}, b = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return b({
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
}, x = "translation", S = "object", C = "array", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: C,
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
					type: S,
					key: r
				}]
			}, i = w(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, T = {
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
}, E = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, D = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (E(e) && E(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : D(e[r], t[r]));
		return n;
	}
	return e;
}, O = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => D(e, t));
}, k = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, A = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? k : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: x,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return O(o, e, t);
	}
}, j = k, M = k, N = k, P = k, F = (e) => k, I = k, L = (e, t = !0) => [
	A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
	j,
	M,
	N,
	F(e ?? T.defaultLocale),
	I,
	P
], R = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), z = (e, t, n = L(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return R(e.content, r, n);
}, B = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => b({
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
}, V = k, H = k, U = k, W = /* @__PURE__ */ new Map(), G = (e, t = !0) => {
	let n = `${e ?? T.defaultLocale}_${t}`;
	if (W.has(n)) return W.get(n);
	let r = [
		A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
		j,
		M,
		F(e ?? T.defaultLocale),
		I,
		P,
		B,
		V,
		H,
		U
	];
	return W.set(n, r), r;
}, K = (e, t) => z(e, t, G(t)), q = Symbol("intlayer"), J = (e, t) => t.reduce((e, t) => e?.[t], e), Y = (e) => typeof e == "object" && !!e, X = (e) => typeof e == "function" || Y(e) && ("render" in e || "setup" in e), Z = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : X(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), $ = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
}), ee = (e, n) => {
	let r = a() ? s(q) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? T.defaultLocale), o = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), l = p({});
	_([() => h(e), () => o.value], ([e, t]) => {
		l.value = K(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => J(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = J(l.value, o);
			if (s === void 0 || Y(s) && !X(s)) return u(o);
			if (Z(s)) return $(t(() => J(l.value, o)));
			let c = t(() => J(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = J(l.value, e);
			return Y(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, te = { class: "grid gap-4 md:grid-cols-2" }, ne = {
	for: "name",
	class: "mb-1 block text-sm font-medium text-foreground"
}, re = ["placeholder"], ie = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
}, ae = ["placeholder"], oe = {
	for: "topic",
	class: "mb-1 block text-sm font-medium text-foreground"
}, se = {
	id: "topic",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
}, ce = {
	for: "message",
	class: "mb-1 block text-sm font-medium text-foreground"
}, le = ["placeholder"], ue = {
	type: "submit",
	class: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
}, de = i({
	__name: "ContactForm",
	setup(t) {
		let { e: i, f: a, a: o, b: s, h: c, i: l, c: d, d: p, g: h } = ee(y);
		return (t, _) => (u(), n("form", {
			class: "space-y-6",
			onSubmit: _[0] ||= v(() => {}, ["prevent"])
		}, [
			r("div", te, [r("div", null, [r("label", ne, m(g(i)), 1), r("input", {
				id: "name",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: g(a)
			}, null, 8, re)]), r("div", null, [r("label", ie, m(g(o)), 1), r("input", {
				id: "email",
				type: "email",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: g(s)
			}, null, 8, ae)])]),
			r("div", null, [r("label", oe, m(g(c)), 1), r("select", se, [(u(!0), n(e, null, f(g(l), (e) => (u(), n("option", { key: e }, m(e), 1))), 128))])]),
			r("div", null, [r("label", ce, m(g(d)), 1), r("textarea", {
				id: "message",
				rows: "5",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: g(p)
			}, null, 8, le)]),
			r("button", ue, m(g(h)), 1)
		], 32));
	}
});
export { de as default };
