import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useCallback as a, useContext as o, useEffect as s, useLayoutEffect as c, useMemo as l, useRef as u, useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { Link as h, useNavigate as ee, useParams as te } from "@tanstack/react-router";
import { ChevronDown as ne } from "lucide-react";
var g = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				g: "Home",
				i: "Methodology",
				j: "Mock Pages",
				l: "Products",
				k: "Pricing",
				n: "Team",
				a: "Blog",
				b: "Careers",
				d: "FAQ",
				c: "Contact",
				m: "Settings",
				e: "Go to GitHub",
				f: "Header",
				h: "i18n Bench"
			},
			fr: {
				g: "Accueil",
				i: "Méthodologie",
				j: "Pages de Test",
				l: "Produits",
				k: "Tarification",
				n: "Équipe",
				a: "Blog",
				b: "Carrières",
				d: "FAQ",
				c: "Contact",
				m: "Paramètres",
				e: "Aller sur GitHub",
				f: "En-tête",
				h: "Bench i18n"
			},
			es: {
				g: "Inicio",
				i: "Metodología",
				j: "Páginas de Prueba",
				l: "Productos",
				k: "Precios",
				n: "Equipo",
				a: "Blog",
				b: "Carreras",
				d: "FAQ",
				c: "Contacto",
				m: "Ajustes",
				e: "Ir a GitHub",
				f: "Cabecera",
				h: "Bench i18n"
			},
			de: {
				g: "Startseite",
				i: "Methodik",
				j: "Testseiten",
				l: "Produkte",
				k: "Preise",
				n: "Team",
				a: "Blog",
				b: "Karriere",
				d: "FAQ",
				c: "Kontakt",
				m: "Einstellungen",
				e: "Zu GitHub gehen",
				f: "Header",
				h: "i18n Bench"
			},
			it: {
				g: "Home",
				i: "Metodologia",
				j: "Pagine di test",
				l: "Prodotti",
				k: "Prezzi",
				n: "Team",
				a: "Blog",
				b: "Carriere",
				d: "FAQ",
				c: "Contatti",
				m: "Impostazioni",
				e: "Vai su GitHub",
				f: "Intestazione",
				h: "Bench i18n"
			},
			pt: {
				g: "Início",
				i: "Metodologia",
				j: "Páginas de teste",
				l: "Produtos",
				k: "Preços",
				n: "Equipe",
				a: "Blog",
				b: "Carreiras",
				d: "FAQ",
				c: "Contato",
				m: "Configurações",
				e: "Ir para GitHub",
				f: "Cabeçalho",
				h: "Bench i18n"
			},
			zh: {
				g: "首页",
				i: "方法学",
				j: "模拟页面",
				l: "产品",
				k: "价格",
				n: "团队",
				a: "博客",
				b: "职业",
				d: "常见问题",
				c: "联系我们",
				m: "设置",
				e: "前往 GitHub",
				f: "页眉",
				h: "i18n 基准"
			},
			ja: {
				g: "ホーム",
				i: "方法論",
				j: "モックページ",
				l: "製品",
				k: "価格",
				n: "チーム",
				a: "ブログ",
				b: "採用情報",
				d: "よくある質問",
				c: "お問い合わせ",
				m: "設定",
				e: "GitHubへ移動",
				f: "ヘッダー",
				h: "i18n ベンチ"
			},
			ko: {
				g: "홈",
				i: "방법론",
				j: "모의 페이지",
				l: "제품",
				k: "가격",
				n: "팀",
				a: "블로그",
				b: "채용",
				d: "자주 묻는 질문",
				c: "연락처",
				m: "설정",
				e: "GitHub으로 이동",
				f: "헤더",
				h: "i18n 벤치"
			},
			ru: {
				g: "Главная",
				i: "Методология",
				j: "Тестовые страницы",
				l: "Продукты",
				k: "Цены",
				n: "Команда",
				a: "Блог",
				b: "Карьера",
				d: "FAQ",
				c: "Контакт",
				m: "Настройки",
				e: "Перейти на GitHub",
				f: "Шапка",
				h: "i18n Бенчмарк"
			}
		}
	}
}, _ = {
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
	defaultLocale: "en"
}, v = {
	mode: "prefix-no-default",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, y = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : /* @__PURE__ */ p(f, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, b = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = b(e);
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
			let n = b(t);
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
}, re = "translation", x = "insertion", ie = "object", ae = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ae,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ie,
				key: r
			}]
		};
		n[r] = S(e[r], i);
	}
	return n;
}, oe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), C = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, w = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (C(e) && C(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : w(e[r], t[r]));
		return n;
	}
	return e;
}, se = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => w(e, t));
}, ce = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", le = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => ce ? T : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: re,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return se(a, e, t);
	}
}, D = T, O = T, ue = le ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = oe(i, e);
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
	E(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	D,
	O,
	ue,
	A(e ?? _.defaultLocale),
	j,
	k
].filter(Boolean), N = (e, t, n = []) => S(e, {
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
}, R = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", B = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-55VIgmar.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-Cfd3z5Bm.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var V = R ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => y({
		...n,
		value: n.children,
		children: n.children
	})
}, H = z ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => y({
		...n,
		value: "[[react-element]]",
		children: b(e)
	})
}, U = (t, r) => {
	let i = L(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, de = B ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
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
}, fe = T, pe = T, me = (e, t = !0) => [
	E(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	D,
	O,
	A(e ?? _.defaultLocale),
	j,
	k,
	V,
	H,
	de,
	fe,
	pe
].filter(Boolean), he = (e, t) => P(e, t, me(t)), ge = (e, t = _?.locales, n = _?.defaultLocale) => {
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
}, W = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _e = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ve = (e) => {
	let { locales: t } = _;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!W) for (let t = 0; t < (v.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(v.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ye = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !W && v.storage.cookies) for (let n = 0; n < v.storage.cookies.length; n++) {
		let { name: r, attributes: i } = v.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, _e(r, e, i));
			} catch {}
		}
	}
}, G = {
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
}, be = 50, K = /* @__PURE__ */ new Map(), q = (e, t, n) => {
	let r = t ?? _?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = K.get(e);
	a || (a = /* @__PURE__ */ new Map(), K.set(e, a));
	let o = a.get(i);
	return o || (a.size > be && a.clear(), o = new e(r, n), a.set(i, o)), o;
}, xe = {
	Collator: function(e, t) {
		return q(Intl.Collator, e, t);
	},
	DateTimeFormat: function(e, t) {
		return q(Intl.DateTimeFormat, e, t);
	},
	DisplayNames: function(e, t) {
		return q(Intl.DisplayNames, e, t);
	},
	ListFormat: function(e, t) {
		return q(Intl.ListFormat, e, t);
	},
	NumberFormat: function(e, t) {
		return q(Intl.NumberFormat, e, t);
	},
	PluralRules: function(e, t) {
		return q(Intl.PluralRules, e, t);
	},
	RelativeTimeFormat: function(e, t) {
		return q(Intl.RelativeTimeFormat, e, t);
	},
	Segmenter: function(e, t) {
		return q(Intl.Segmenter, e, t);
	}
}, Se = (e, t = e) => new xe.DisplayNames(t, { type: "language" }).of(e) ?? "Unknown locale", J = ve(G), Y = (e, t) => ye(e, {
	...G,
	isCookieEnabled: t
}), Ce = () => {
	let { locale: e } = o(X) ?? {}, t = u(null);
	s(() => {}, []), s(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, we = ({ children: e }) => (Ce(), e), Te = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, X = t({
	locale: J ?? _?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ee = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: o, defaultLocale: c } = _ ?? {}, [l, u] = d(e ?? J ?? t ?? c);
	s(() => {
		e && e !== l && u(e);
	}, [e]), s(() => {
		Te();
	}, []);
	let f = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!o?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			u(e), Y(e, a);
		}
	}), m = ge(l);
	return /* @__PURE__ */ p(X.Provider, {
		value: {
			locale: m,
			setLocale: f,
			disableEditor: i
		},
		children: n
	});
}, De = ({ children: e, ...t }) => /* @__PURE__ */ m(Ee, {
	...t,
	children: [/* @__PURE__ */ p(we, {}), e]
}), Z = (e, t) => {
	let { locale: n } = o(X) ?? {};
	return l(() => he(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, Oe = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { defaultLocale: n, locales: r } = _ ?? {}, { locale: i, setLocale: s, isCookieEnabled: c } = o(X) ?? {};
	return {
		locale: i,
		defaultLocale: n,
		availableLocales: r,
		setLocale: a((n) => {
			if (!r?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			s(n), Y(n, e ?? c ?? !0), t?.(n);
		}, [
			r,
			t,
			s,
			e
		])
	};
}, Q = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Theme mode: auto (system). Click to switch to light mode.",
				themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
				themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
				a: "Theme: Auto",
				b: "Theme: Dark",
				c: "Theme: Light",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Theme mode: {{mode}}. Click to switch mode."
				}
			},
			fr: {
				d: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				themeModeLightClick: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				themeModeDarkClick: "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
				a: "Thème : Auto",
				b: "Thème : Sombre",
				c: "Thème : Clair",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Mode de thème : {{mode}}. Cliquez pour changer de mode."
				}
			},
			es: {
				d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				themeModeLightClick: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				themeModeDarkClick: "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
				a: "Tema: Auto",
				b: "Tema: Oscuro",
				c: "Tema: Claro",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modo de tema: {{mode}}. Haga clic para cambiar de modo."
				}
			},
			de: {
				d: "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
				themeModeLightClick: "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
				themeModeDarkClick: "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
				a: "Design: Auto",
				b: "Design: Dunkel",
				c: "Design: Hell",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Themenmodus: {{mode}}. Zum Umschalten klicken."
				}
			},
			it: {
				d: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
				themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
				a: "Tema: Auto",
				b: "Tema: Scuro",
				c: "Tema: Chiaro",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modalità tema: {{mode}}. Clicca per cambiare modalità."
				}
			},
			pt: {
				d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
				a: "Tema: Auto",
				b: "Tema: Escuro",
				c: "Tema: Claro",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modo de tema: {{mode}}. Clique para alternar o modo."
				}
			},
			zh: {
				d: "主题模式：自动（系统）。点击切换到浅色模式。",
				themeModeLightClick: "主题模式：浅色。点击切换到深色模式。",
				themeModeDarkClick: "主题模式：深色。点击切换到自动（系统）模式。",
				a: "主题：自动",
				b: "主题：深色",
				c: "主题：浅色",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "主题模式：{{mode}}。点击切换模式。"
				}
			},
			ja: {
				d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				themeModeLightClick: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				themeModeDarkClick: "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
				a: "テーマ：自動",
				b: "テーマ：ダーク",
				c: "テーマ：ライト",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "テーマモード：{{mode}}。モードを切り替えるにはクリックしてください。"
				}
			},
			ko: {
				d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				themeModeLightClick: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				themeModeDarkClick: "테마 모드: 다크. 자동(시스템) 모드로 전환하려면 클릭하세요.",
				a: "테마: 자동",
				b: "테마: 다크",
				c: "테마: 라이트",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "테마 모드: {{mode}}. 모드를 전환하려면 클릭하세요."
				}
			},
			ru: {
				d: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
				a: "Тема: Авто",
				b: "Тема: Темная",
				c: "Тема: Светлая",
				e: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Режим темы: {{mode}}. Нажмите, чтобы переключить режим."
				}
			}
		}
	}
};
//#endregion
//#region src/components/ThemeToggle.tsx
function ke() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ae() {
	let e = Z(Q), [t, n] = d("auto");
	s(() => {
		let e = ke();
		n(e), $(e);
	}, []), s(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let i = t === "auto" ? e.d.value : e.e({ mode: t });
	return /* @__PURE__ */ p("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? e.a.value : t === "dark" ? e.b.value : e.c.value
	});
}
//#endregion
//#region src/components/LocaleSwitcher.tsx
function je() {
	let e = ee(), { locale: t, availableLocales: n, setLocale: r } = Oe({ onLocaleChange: (t) => {
		e({
			to: ".",
			params: (e) => ({
				...e,
				locale: t
			})
		});
	} });
	return /* @__PURE__ */ p("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ p("select", {
			value: t,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: n.map((e) => /* @__PURE__ */ p("option", {
				value: e,
				children: Se(e)
			}, e))
		})
	});
}
//#endregion
//#region src/hooks/usePerformanceMeasure.ts
function Me(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), c(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region src/components/Header.tsx
function Ne() {
	let e = Z(g);
	Me(e.f.value);
	let [t, n] = d(!1), r = te({ strict: !1 }).locale ?? "en", i = [
		{
			to: "/$locale/products",
			label: e.l
		},
		{
			to: "/$locale/pricing",
			label: e.k
		},
		{
			to: "/$locale/team",
			label: e.n
		},
		{
			to: "/$locale/blog",
			label: e.a
		},
		{
			to: "/$locale/careers",
			label: e.b
		},
		{
			to: "/$locale/faq",
			label: e.d
		},
		{
			to: "/$locale/contact",
			label: e.c
		},
		{
			to: "/$locale/settings",
			label: e.m
		}
	];
	return /* @__PURE__ */ p("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ m("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ m("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ p(h, {
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.h
				}), /* @__PURE__ */ m("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ p(h, {
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e.g
						}),
						/* @__PURE__ */ p(h, {
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e.i
						}),
						/* @__PURE__ */ m("div", {
							className: "relative",
							children: [/* @__PURE__ */ m("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e.j, /* @__PURE__ */ p(ne, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && /* @__PURE__ */ p("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: /* @__PURE__ */ p("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => /* @__PURE__ */ p(h, {
										to: e.to,
										params: { locale: r },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.to))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ m("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ m("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ p("span", {
							className: "sr-only",
							children: e.e
						}), /* @__PURE__ */ p("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ p("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ p(je, {}),
					/* @__PURE__ */ p(Ae, {})
				]
			})]
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Pe({ children: e }) {
	return /* @__PURE__ */ p(De, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/Header.wrapper.tsx
function Fe() {
	return /* @__PURE__ */ p(Pe, { children: /* @__PURE__ */ p(Ne, {}) });
}
//#endregion
export { Fe as default };
import { Fragment as e, createContext as t, createElement as n, useContext as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
var a = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, o = /* @__PURE__ */ new Map(), s = (e) => {
	if (o.has(e)) return o.get(e);
	if (typeof e != "string") return [];
	let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, s = t.exec(e), c = (e) => {
		(r.length > 0 ? r[r.length - 1].children : n).push(e);
	};
	for (; s !== null;) {
		let [n, o, l, u, d] = s, f = s.index;
		f > i && c(e.slice(i, f));
		let p = o === "/", m = d === "/" || u.trim().endsWith("/") || n.endsWith("/>"), h = u.trim().replace(/\/$/, "").trim();
		if (p) {
			let e = r[r.length - 1];
			if (e && e.tagName === l) {
				let e = r.pop();
				e && c({
					tagName: e.tagName,
					props: e.props,
					children: e.children
				});
			}
		} else if (m) c({
			tagName: l,
			props: a(h),
			children: []
		});
		else {
			let e = a(h);
			r.push({
				tagName: l,
				children: [],
				props: e
			});
		}
		i = f + n.length, s = t.exec(e);
	}
	for (i < e.length && c(e.slice(i)); r.length > 0;) {
		let e = r.pop();
		e && c({
			tagName: e.tagName,
			props: e.props,
			children: e.children
		});
	}
	return o.set(e, n), n;
}, c = (e, t) => {
	let n = s(e), r = 0, i = (e) => {
		if (typeof e == "string") return e;
		let { tagName: n, props: a, children: o } = e, s = o.flatMap(i), c = r++, l = t[n];
		if (!l) {
			let e = n.toLowerCase(), r = Object.keys(t).find((t) => t.toLowerCase() === e);
			r && (l = t[r]);
		}
		let u = `html-tag-${n}-${c}`;
		if (typeof l == "function") return l({
			...a,
			children: s,
			key: u
		});
		if (typeof l == "string") {
			let e = t[l];
			return typeof e == "function" ? e({
				...a,
				children: s,
				key: u
			}) : s;
		}
		if (typeof l == "object" && l && "tag" in l) {
			let { tag: e, props: n } = l, r = t[e];
			return typeof r == "function" ? r({
				...a,
				...n,
				children: s,
				key: u
			}) : s;
		}
		return s;
	}, a = n.flatMap(i);
	return a.length === 1 ? a[0] : a;
}, l = t(void 0), u = () => r(l), d = (t, { components: r = {} } = {}) => {
	let a = Object.fromEntries(Object.entries(r).filter(([, e]) => e).map(([e, t]) => [e, (e) => n(t, e)]));
	return /* @__PURE__ */ i(e, { children: c(t, new Proxy(a, { get(e, t) {
		if (typeof t == "string" && t in e) return e[t];
		if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return (e) => n(t, e);
	} })) });
}, f = (e) => {
	let { html: t, userComponents: n } = e;
	return d(t, { components: {
		...u()?.components,
		...n
	} });
};
//#endregion
export { f as HTMLRendererPlugin };
import { createContext as e, useContext as t } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var n = e(void 0), r = () => t(n), i = (e) => {
	let { children: t, options: n, components: i } = e, a = r();
	return (a?.renderMarkdown ?? ((e) => e))(t, n, {
		...a?.components ?? {},
		...i ?? {}
	});
};
//#endregion
export { i as MarkdownRendererPlugin };
