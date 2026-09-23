import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h, withModifiers as g } from "vue";
var te = {
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
}, _ = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
			return _({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return l(o);
}, v = /* @__PURE__ */ new WeakMap(), y = 0, ne = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, re = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, ie = (e, t, n) => `${e}_${t}_${ne(n)}`, S = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, ae = "translation", oe = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: oe,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, le = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ue = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, de = (e, t) => {
	if (!le(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : se(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ce(e, n, t, s)).map((t) => ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, N = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", P = {
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
}, L = (e, t, n) => {
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
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, pe = R, U = R, W = R, G = (e) => R, K = R, me = (e, t = !0) => [
	z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	B,
	H,
	pe,
	G(e ?? P.defaultLocale),
	K,
	U,
	W
], he = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), ge = (e, t, n) => {
	let { locale: r, selector: i } = fe(t), a = ie(r ?? P.defaultLocale, N(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? me(r), c = de(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return he(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => _({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, _e = R, ve = R, ye = R, J = /* @__PURE__ */ new Map(), be = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		B,
		V(e ?? P.defaultLocale),
		H,
		G(e ?? P.defaultLocale),
		K,
		U,
		W,
		q,
		_e,
		ve,
		ye
	];
	return J.set(n, r), r;
}, Y = (e, t) => ge(e, t, be(typeof t == "object" && t ? t.locale : t)), xe = Symbol("intlayer"), X = (e, t) => t.reduce((e, t) => e?.[t], e), Z = (e) => typeof e == "object" && !!e, Q = (e) => typeof e == "function" || Z(e) && ("render" in e || "setup" in e), Se = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, $ = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Q(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Ce = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return $(() => e.value);
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
}), we = (e, n) => {
	let r = a() ? s(xe) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? P.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = t(() => o.value.locale ?? i.value), u = ee({});
	h([
		() => m(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? Y(e, {
			...n,
			locale: t
		}) : Y(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => X(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return $(() => a.value);
			let o = e.concat(r), s = X(u.value, o);
			if (s === void 0 || Z(s) && !Q(s)) return f(o);
			if (Se(s)) return Ce(t(() => X(u.value, o)));
			if (typeof s == "function") {
				let t = X(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => X(u.value, o)?.(...e);
			}
			let c = t(() => X(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = X(u.value, e);
			return Z(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, Te = i({
	__name: "ContactForm",
	setup(e, { expose: t }) {
		t();
		let { e: n, f: r, a: i, b: a, h: o, i: s, c, d: l, g: u } = we(te), d = {
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
}), Ee = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, De = { class: "grid gap-4 md:grid-cols-2" }, Oe = {
	for: "name",
	class: "mb-1 block text-sm font-medium text-foreground"
}, ke = ["placeholder"], Ae = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
}, je = ["placeholder"], Me = {
	for: "topic",
	class: "mb-1 block text-sm font-medium text-foreground"
}, Ne = {
	id: "topic",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
}, Pe = {
	for: "message",
	class: "mb-1 block text-sm font-medium text-foreground"
}, Fe = ["placeholder"], Ie = {
	type: "submit",
	class: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function Le(t, i, a, o, s, c) {
	return u(), n("form", {
		class: "space-y-6",
		onSubmit: i[0] ||= g(() => {}, ["prevent"])
	}, [
		r("div", De, [r("div", null, [r("label", Oe, p(o.nameLabel), 1), r("input", {
			id: "name",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: o.namePlaceholder
		}, null, 8, ke)]), r("div", null, [r("label", Ae, p(o.emailLabel), 1), r("input", {
			id: "email",
			type: "email",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: o.emailPlaceholder
		}, null, 8, je)])]),
		r("div", null, [r("label", Me, p(o.topicLabel), 1), r("select", Ne, [(u(!0), n(e, null, f(o.topics, (e) => (u(), n("option", { key: e }, p(e), 1))), 128))])]),
		r("div", null, [r("label", Pe, p(o.messageLabel), 1), r("textarea", {
			id: "message",
			rows: "5",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: o.messagePlaceholder
		}, null, 8, Fe)]),
		r("button", Ie, p(o.sendMessage), 1)
	], 32);
}
var Re = Ee(Te, [["render", Le], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/contact/ContactForm.vue"]]);
export { Re as default };
