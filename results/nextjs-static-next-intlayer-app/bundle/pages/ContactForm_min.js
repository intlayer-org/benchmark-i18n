import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var ee = {
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
}, f = {
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
}, p = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(l, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, h = /* @__PURE__ */ new WeakMap(), g = 0, _ = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, te = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, b = (e, t, n) => `${e}_${t}_${_(n)}`, x = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= te && r.clear(), r.set(t, n), n;
}, ne = "translation", C = "insertion", re = "object", ie = "array", w = "markdown", T = "html", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: re,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), O = "default", k = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, ae = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ae);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? O : typeof e == "string" ? j(e, k) : Object.keys(e).sort().map((t) => `${j(t, A)}=${j(String(e[t]), A)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(M) : [M(e)], oe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, se = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ce = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, le = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ue = (e, t) => {
	if (!ce(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : oe(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => se(e, n, t, s)).map((t) => le(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, de = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", F = (e) => {
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
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, z = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[T] : e[w];
}, B = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? T : w;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, V = (e, t, n, r, i) => {
	let a = B(e, D(z(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
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
					type: ne,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, W = H, fe = (e) => H, G = H, pe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = D(i, e);
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
}, K = H, q = H, J = (e) => H, Y = H, me = (e, t = !0) => [
	U(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	W,
	G,
	pe,
	J(e ?? f.defaultLocale),
	Y,
	K,
	q
], he = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), ge = (e, t, n) => {
	let { locale: r, selector: i } = de(t), a = b(r ?? f.defaultLocale, P(i), n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? me(r), c = ue(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return he(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, _e = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, ve = (e, t = {}) => {
	if (!Object.values(t).some(_e)) return {
		isSimple: !0,
		parts: e.replace(X, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(X), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ye = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: n.children,
		children: n.children
	})
}, be = H, xe = (t, r) => {
	let i = ve(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Se = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = xe(i, e);
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
}, Ce = H, we = H, Z = /* @__PURE__ */ new Map(), Te = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		U(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		W,
		fe(e ?? f.defaultLocale),
		G,
		J(e ?? f.defaultLocale),
		Y,
		K,
		q,
		ye,
		be,
		Se,
		Ce,
		we
	];
	return Z.set(n, r), r;
}, Ee = (e, t) => ge(e, t, Te(typeof t == "object" && t ? t.locale : t)), De = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Q = {
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
}, $ = ((e = Q) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!De) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(Q), Oe = t({
	locale: $ ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), ke = (e, t) => {
	let { locale: n, variant: r } = i(Oe) ?? {}, a = t ?? n, o = typeof a == "object" && a ? `${a.locale ?? ""}|${P(a)}` : a;
	return s(() => Ee(e, a), [e.key, o]);
};
function Ae() {
	let e = ke(ee), t = "name", n = "email", r = "topic", i = "message";
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
function je() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function Me(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Ne({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Me("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		je();
	}, []), e;
}
function Pe({ children: e }) {
	return u(Ne, {
		locale: "en",
		children: e
	});
}
function Fe() {
	return u(Pe, { children: u(Ae, {}) });
}
export { Fe as default };
