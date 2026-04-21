import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useId as o, useMemo as s, useRef as c, useState as ee } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "contact-form",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				l: "Your name",
				a: "Bug Report",
				h: "New Benchmark Idea",
				f: "Methodology Question",
				c: "Describe your question or idea...",
				j: "Send Message",
				g: "Name",
				d: "Email",
				k: "Topic",
				b: "Contribution",
				i: "Other",
				e: "Message"
			},
			fr: {
				l: "Votre nom",
				a: "Rapport de Bug",
				h: "Nouvelle Idée de Benchmark",
				f: "Question sur la Méthodologie",
				c: "Décrivez votre question ou idée...",
				j: "Envoyer le Message",
				g: "Nom",
				d: "Email",
				k: "Sujet",
				b: "Contribution",
				i: "Autre",
				e: "Message"
			},
			es: {
				l: "Tu nombre",
				a: "Informe de Errores",
				h: "Nueva Idea de Benchmark",
				f: "Pregunta sobre Metodología",
				c: "Describe tu pregunta o idea...",
				j: "Enviar Mensaje",
				g: "Nombre",
				d: "Correo electrónico",
				k: "Tema",
				b: "Contribución",
				i: "Otro",
				e: "Mensaje"
			},
			de: {
				l: "Ihr Name",
				a: "Fehlerbericht",
				h: "Neue Benchmark-Idee",
				f: "Frage zur Methodik",
				c: "Beschreiben Sie Ihre Frage oder Idee...",
				j: "Nachricht senden",
				g: "Name",
				d: "E-Mail",
				k: "Thema",
				b: "Beitrag",
				i: "Andere",
				e: "Nachricht"
			},
			it: {
				l: "Il tuo nome",
				a: "Segnalazione bug",
				h: "Nuova idea di benchmark",
				f: "Domanda sulla metodologia",
				c: "Descrivi la tua domanda o idea...",
				j: "Invia messaggio",
				g: "Nome",
				d: "Email",
				k: "Argomento",
				b: "Contributo",
				i: "Altro",
				e: "Messaggio"
			},
			pt: {
				l: "Seu nome",
				a: "Relatório de Bug",
				h: "Nova Ideia de Benchmark",
				f: "Pergunta sobre Metodologia",
				c: "Descreva sua pergunta ou ideia...",
				j: "Enviar Mensagem",
				g: "Nome",
				d: "E-mail",
				k: "Tópico",
				b: "Contribuição",
				i: "Outro",
				e: "Mensagem"
			},
			zh: {
				l: "您的姓名",
				a: "错误报告",
				h: "新基准测试想法",
				f: "方法论问题",
				c: "描述您的问题或想法...",
				j: "发送消息",
				g: "姓名",
				d: "电子邮件",
				k: "主题",
				b: "贡献",
				i: "其他",
				e: "消息"
			},
			ja: {
				l: "お名前",
				a: "バグ報告",
				h: "新しいベンチマークのアイデア",
				f: "方法論に関する質問",
				c: "質問やアイデアを説明してください...",
				j: "メッセージを送信",
				g: "名前",
				d: "メール",
				k: "トピック",
				b: "貢献",
				i: "その他",
				e: "メッセージ"
			},
			ko: {
				l: "이름",
				a: "버그 보고",
				h: "새로운 벤치마크 아이디어",
				f: "방법론 질문",
				c: "질문이나 아이디어를 설명하세요...",
				j: "메시지 보내기",
				g: "이름",
				d: "이메일",
				k: "주제",
				b: "기여",
				i: "기타",
				e: "메시지"
			},
			ru: {
				l: "Ваше имя",
				a: "Отчет об ошибке",
				h: "Новая идея для бенчмарка",
				f: "Вопрос по методологии",
				c: "Опишите ваш вопрос или идею...",
				j: "Отправить сообщение",
				g: "Имя",
				d: "Email",
				k: "Тема",
				b: "Вклад",
				i: "Другое",
				e: "Сообщение"
			}
		}
	}
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(l, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && r in n ? n[r] : Reflect.get(e, r, i);
	} });
}, g = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = g(e);
				if (typeof r == "object" && r && "type" in r) {
					let e = r;
					return n(e.type, {
						...e.props,
						key: t
					}, ...Array.isArray(e.props?.children) ? e.props.children : e.props?.children === void 0 ? [] : [e.props.children]);
				}
				return r;
			});
			return {
				...e,
				props: {
					...e.props,
					children: r
				}
			};
		} else if (t != null) {
			let n = g(t);
			return {
				...e,
				props: {
					...e.props,
					children: [n]
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: []
			}
		};
	})(e);
	return n(t ?? "span", r, ...r.children);
}, te = "translation", _ = "insertion", ne = "object", v = "array", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: v,
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
					type: ne,
					key: r
				}]
			}, i = y(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, re = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), b = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, x = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (b(e) && b(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : x(e[r], t[r]));
		return n;
	}
	return e;
}, S = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => x(e, t));
}, C = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", w = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => C ? T : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return S(o, e, t);
	}
}, D = T, O = T, ie = w ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = re(i, e);
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
}, k = T, A = (e) => T, j = T, M = (e, t = !0) => [
	E(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	D,
	O,
	ie,
	A(e ?? p.defaultLocale),
	j,
	k
], N = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), P = (e, t, n = M(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return N(e.content, r, n);
}, F = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", I = /\{\{\s*(.*?)\s*\}\}/g, L = (e, t = {}) => {
	if (!Object.values(t).some(F)) return {
		isSimple: !0,
		parts: e.replace(I, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(I), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, R = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", B = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", V = R ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: n.children,
		children: n.children
	})
}, H = z ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: "[[react-element]]",
		children: g(e)
	})
}, U = (t, r) => {
	let i = L(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, W = B ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = U(i, e);
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
}, G = T, ae = T, K = /* @__PURE__ */ new Map(), q = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		E(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		D,
		O,
		A(e ?? p.defaultLocale),
		j,
		k,
		V,
		H,
		W,
		G,
		ae
	];
	return K.set(n, r), r;
}, J = (e, t) => P(e, t, q(t)), oe = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, Y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var se = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ce = (e) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, se(r, e, i));
			} catch {}
		}
	}
}, X = {
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
}, Z = ce(X), ue = (e, t) => le(e, {
	...X,
	isCookieEnabled: t
}), de = () => {
	let { locale: e } = i(Q) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, fe = ({ children: e }) => (de(), e), pe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: Z ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), $ = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: o }) => {
	let { locales: s, defaultLocale: c } = p ?? {}, [l, d] = ee(e ?? Z ?? t ?? c);
	a(() => {
		e && e !== l && d(e);
	}, [e]), a(() => {
		pe();
	}, []);
	let f = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), ue(e, o);
		}
	}), m = oe(l);
	return u(Q.Provider, {
		value: {
			locale: m,
			setLocale: f,
			disableEditor: i
		},
		children: n
	});
}, me = ({ children: e, ...t }) => d($, {
	...t,
	children: [u(fe, {}), e]
}), he = (e, t) => {
	let { locale: n } = i(Q) ?? {};
	return s(() => J(e, t ?? n), [
		e.key,
		n,
		t
	]);
};
function ge() {
	let e = he(f), t = o(), n = o(), r = o(), i = o();
	return d("form", {
		className: "space-y-6",
		children: [
			d("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [d("div", { children: [u("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e.g
				}), u("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e.l.value
				})] }), d("div", { children: [u("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e.d
				}), u("input", {
					id: n,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			d("div", { children: [u("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e.k
			}), d("select", {
				id: r,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					u("option", { children: e.a }),
					u("option", { children: e.h }),
					u("option", { children: e.f }),
					u("option", { children: e.b }),
					u("option", { children: e.i })
				]
			})] }),
			d("div", { children: [u("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e.e
			}), u("textarea", {
				id: i,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e.c.value
			})] }),
			u("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e.j
			})
		]
	});
}
function _e({ children: e }) {
	return u(me, {
		locale: "en",
		children: e
	});
}
function ve() {
	return u(_e, { children: u(ge, {}) });
}
export { ve as default };
