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
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, d = (e) => typeof e == "string" && /^\d+$/.test(e), f = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === u.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === u.toString) return () => String(t ?? "");
		if (n === u.valueOf) return () => t;
		if (n === u.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== u.constructor && n !== u.length && !d(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, p = {
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
}, m = {
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
}, h = /* @__PURE__ */ new WeakMap(), g = 0, _ = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, v = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, x = (e, t, n) => `${e}_${t}_${_(n)}`, S = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= v && r.clear(), r.set(t, n), n;
}, w = "translation", T = "object", E = "array", D = (e, t) => {
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
}, O = "default", ee = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, te = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, te);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? O : typeof e == "string" ? A(e, ee) : Object.keys(e).sort().map((t) => `${A(t, k)}=${A(String(e[t]), k)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(j) : [j(e)], ne = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, re = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ie = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, N = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, P = (e, t) => {
	if (!ie(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : ne(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => re(e, n, t, s)).map((t) => N(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, F = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, I = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, ae = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
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
		return ae(o, e, t);
	}
}, V = z, H = (e) => z, U = z, W = z, G = z, K = z, q = (e) => z, J = z, oe = (e, t = !0) => [
	B(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	V,
	U,
	W,
	q(e ?? p.defaultLocale),
	J,
	G,
	K
], se = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), ce = (e, t, n) => {
	let { locale: r, selector: i } = F(t), a = x(r ?? p.defaultLocale, I(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? oe(r), c = P(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return se(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var le = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: n.children,
		children: n.children
	})
}, ue = z, de = z;
s(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), s(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var fe = z;
s(() => X.then((e) => ({ default: e })));
var pe = z, Z = /* @__PURE__ */ new Map(), me = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		B(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		V,
		H(e ?? p.defaultLocale),
		U,
		q(e ?? p.defaultLocale),
		J,
		G,
		K,
		le,
		ue,
		de,
		fe,
		pe
	];
	return Z.set(n, r), r;
}, Q = (e, t) => ce(e, t, me(typeof t == "object" && t ? t.locale : t)), he = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, ge = ((e = $) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!he) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), _e = i({
	locale: () => ge ?? p?.defaultLocale,
	setLocale: () => null
}), ve = Symbol("LOADABLE_SETTLED_VALUE"), ye = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[ve];
}, be = (e, t) => {
	let n = c(_e) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return Q(ye(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, xe = r("<form class=space-y-6><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input type=email class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"placeholder=you@example.com></div></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><textarea rows=5 class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></textarea></div><button type=submit class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Se() {
	let r = be(l), i = o(), a = o(), s = o(), c = o();
	return (() => {
		var o = xe(), l = o.firstChild, u = l.firstChild, d = u.firstChild, f = d.nextSibling, p = u.nextSibling.firstChild, m = p.nextSibling, h = l.nextSibling, g = h.firstChild, _ = g.nextSibling, v = _.firstChild, y = v.nextSibling, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = h.nextSibling, w = C.firstChild, T = w.nextSibling, E = C.nextSibling;
		return n(d, "for", i), t(d, () => r().g), n(f, "id", i), n(p, "for", a), t(p, () => r().d), n(m, "id", a), n(g, "for", s), t(g, () => r().k), n(_, "id", s), t(v, () => r().a), t(y, () => r().h), t(b, () => r().f), t(x, () => r().b), t(S, () => r().i), n(w, "for", c), t(w, () => r().e), n(T, "id", c), t(E, () => r().j), e((e) => {
			var t = r().l.value, i = r().c.value;
			return t !== e.e && n(f, "placeholder", e.e = t), i !== e.t && n(T, "placeholder", e.t = i), e;
		}, {
			e: void 0,
			t: void 0
		}), o;
	})();
}
export { Se as default };
