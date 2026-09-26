import { effect as e, insert as t, setAttribute as n, template as r } from "solid-js/web";
import { createContext as i, createMemo as a, createUniqueId as o, lazy as s, useContext as c } from "solid-js";
var l = {
	key: "contact-form",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				g: "Name",
				l: "Your name",
				d: "Email",
				k: "Topic",
				a: "Bug Report",
				h: "New Benchmark Idea",
				f: "Methodology Question",
				b: "Contribution",
				i: "Other",
				e: "Message",
				c: "Describe your question or idea...",
				j: "Send Message"
			},
			fr: {
				g: "Nom",
				l: "Votre nom",
				d: "Email",
				k: "Sujet",
				a: "Rapport de bug",
				h: "Nouvelle idée de benchmark",
				f: "Question sur la méthodologie",
				b: "Contribution",
				i: "Autre",
				e: "Message",
				c: "Décrivez votre question ou idée...",
				j: "Envoyer le message"
			},
			es: {
				g: "Nombre",
				l: "Tu nombre",
				d: "Correo electrónico",
				k: "Tema",
				a: "Reporte de error",
				h: "Nueva idea de benchmark",
				f: "Pregunta sobre metodología",
				b: "Contribución",
				i: "Otro",
				e: "Mensaje",
				c: "Describe tu pregunta o idea...",
				j: "Enviar mensaje"
			},
			de: {
				g: "Name",
				l: "Ihr Name",
				d: "E-Mail",
				k: "Thema",
				a: "Fehlerbericht",
				h: "Neue Benchmark-Idee",
				f: "Frage zur Methodik",
				b: "Beitrag",
				i: "Sonstiges",
				e: "Nachricht",
				c: "Beschreiben Sie Ihre Frage oder Idee...",
				j: "Nachricht senden"
			},
			it: {
				g: "Nome",
				l: "Il tuo nome",
				d: "Email",
				k: "Argomento",
				a: "Segnalazione bug",
				h: "Nuova idea di benchmark",
				f: "Domanda sulla metodologia",
				b: "Contributo",
				i: "Altro",
				e: "Messaggio",
				c: "Descrivi la tua domanda o idea...",
				j: "Invia messaggio"
			},
			pt: {
				g: "Nome",
				l: "Seu nome",
				d: "E-mail",
				k: "Tópico",
				a: "Relato de bug",
				h: "Nova ideia de benchmark",
				f: "Pergunta sobre metodologia",
				b: "Contribuição",
				i: "Outro",
				e: "Mensagem",
				c: "Descreva sua pergunta ou ideia...",
				j: "Enviar mensagem"
			},
			zh: {
				g: "姓名",
				l: "您的姓名",
				d: "电子邮件",
				k: "主题",
				a: "报告错误",
				h: "新的基准测试想法",
				f: "方法论问题",
				b: "贡献",
				i: "其他",
				e: "消息",
				c: "描述您的问题或想法...",
				j: "发送消息"
			},
			ja: {
				g: "名前",
				l: "あなたの名前",
				d: "メールアドレス",
				k: "トピック",
				a: "バグ報告",
				h: "新しいベンチマークのアイデア",
				f: "方法論に関する質問",
				b: "貢献",
				i: "その他",
				e: "メッセージ",
				c: "質問やアイデアを説明してください...",
				j: "メッセージを送信"
			},
			ko: {
				g: "이름",
				l: "귀하의 성함",
				d: "이메일",
				k: "주제",
				a: "버그 보고",
				h: "새로운 벤치마크 아이디어",
				f: "방법론 질문",
				b: "기여",
				i: "기타",
				e: "메시지",
				c: "질문이나 아이디어를 설명해 주세요...",
				j: "메시지 보내기"
			},
			ru: {
				g: "Имя",
				l: "Ваше имя",
				d: "Электронная почта",
				k: "Тема",
				a: "Отчет об ошибке",
				h: "Новая идея бенчмарка",
				f: "Вопрос по методологии",
				b: "Вклад",
				i: "Другое",
				e: "Сообщение",
				c: "Опишите ваш вопрос или идею...",
				j: "Отправить сообщение"
			}
		}
	}
}, u = {
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
}, d = {
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
}, f = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var p = {
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
}, m = (e = p) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!f) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, h = !1, g, _ = () => typeof window > "u" ? m(p) : (h ||= (g = m(p), !0), g), v = /* @__PURE__ */ new Map(), y = (e, t) => Object.create(new Proxy(e, {
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
}), b = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = v.get(t);
	i || (i = /* @__PURE__ */ new Map(), v.set(t, i));
	let a = i.get(r);
	return a || (a = y(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, x = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, b(t, Array.prototype)), r;
}, S = /* @__PURE__ */ new WeakMap(), C = 0, w = (e) => {
	if (!e) return "base";
	let t = S.get(e);
	if (t) return t;
	C += 1;
	let n = `p${C}`;
	return S.set(e, n), n;
}, T = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, ee = (e, t, n) => `${e}_${t}_${w(n)}`, O = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= T && r.clear(), r.set(t, n), n;
}, te = "translation", A = "object", j = "array", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
		type: j,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: A,
			key: r
		};
		if (t.eager) {
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !P(e) || !P(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? F(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, I = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => F(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = I(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: te,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, H = L, U = L, W = L, G = (e) => L, K = L, q = (e, t = !0) => [
	R(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	z,
	B(e ?? u.defaultLocale),
	V,
	H,
	G(e ?? u.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== L), J = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), X = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ee(r ?? u.defaultLocale, "", n), o = O(e, a);
	if (o.hit) return o.content;
	let s = n ?? q(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return J(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, Z = null, Q = null;
Z?.catch(() => {}), Q?.catch(() => {});
var ne = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => x({
		value: t.children,
		children: t.children
	})
}, re = L, ie = L;
s(() => Z.then((e) => ({ default: e.MarkdownRenderer }))), s(() => Z.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ae = L;
s(() => Q.then((e) => ({ default: e })));
var oe = L, $ = /* @__PURE__ */ new Map(), se = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		ne,
		R(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		z,
		B(e ?? u.defaultLocale),
		V,
		G(e ?? u.defaultLocale),
		K,
		U,
		W,
		re,
		ie,
		ae,
		oe
	].filter((e) => e !== L);
	return $.set(n, r), r;
}, ce = (e, t) => X(e, t, se(typeof t == "object" && t ? t.locale : t)), le = _, ue = i({
	locale: () => le() ?? u?.defaultLocale,
	setLocale: () => null
}), de = Symbol("LOADABLE_SETTLED_VALUE"), fe = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[de];
}, pe = (e, t) => {
	let n = c(ue) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return ce(fe(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, me = r("<form class=space-y-6><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input type=email class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"placeholder=you@example.com></div></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><textarea rows=5 class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></textarea></div><button type=submit class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function he() {
	let r = pe(l), i = o(), a = o(), s = o(), c = o();
	return (() => {
		var o = me(), l = o.firstChild, u = l.firstChild, d = u.firstChild, f = d.nextSibling, p = u.nextSibling.firstChild, m = p.nextSibling, h = l.nextSibling, g = h.firstChild, _ = g.nextSibling, v = _.firstChild, y = v.nextSibling, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = h.nextSibling, w = C.firstChild, T = w.nextSibling, E = C.nextSibling;
		return n(d, "for", i), t(d, () => r().g), n(f, "id", i), n(p, "for", a), t(p, () => r().d), n(m, "id", a), n(g, "for", s), t(g, () => r().k), n(_, "id", s), t(v, () => r().a), t(y, () => r().h), t(b, () => r().f), t(x, () => r().b), t(S, () => r().i), n(w, "for", c), t(w, () => r().e), n(T, "id", c), t(E, () => r().j), e((e) => {
			var t = r().l.value, i = r().c.value;
			return t !== e.e && n(f, "placeholder", e.e = t), i !== e.t && n(T, "placeholder", e.t = i), e;
		}, {
			e: void 0,
			t: void 0
		}), o;
	})();
}
export { he as default };
