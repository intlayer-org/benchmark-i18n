import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { Link as m, useNavigate as ee, useParams as te } from "@tanstack/react-router";
import { ChevronDown as h } from "lucide-react";
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
}, v = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, y = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : f(d, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && r in n ? n[r] : Reflect.get(e, r, i);
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
}, ne = "translation", x = "insertion", re = "object", ie = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ie,
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
					type: re,
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
}, ae = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), C = (e) => {
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
}, oe = (e, t, n) => {
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
}, se = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", ce = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => se ? T : {
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
		return oe(o, e, t);
	}
}, D = T, O = T, le = ce ? T : {
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
					let a = ae(i, e);
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
	le,
	A(e ?? _.defaultLocale),
	j,
	k
], N = (e, t, n = []) => S(e, {
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
}, W = B ? T : {
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
}, ue = T, de = T, G = /* @__PURE__ */ new Map(), fe = (e, t = !0) => {
	let n = `${e ?? _.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		E(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
		D,
		O,
		A(e ?? _.defaultLocale),
		j,
		k,
		V,
		H,
		W,
		ue,
		de
	];
	return G.set(n, r), r;
}, pe = (e, t) => P(e, t, fe(t)), me = (e, t = _?.locales, n = _?.defaultLocale) => {
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
}, K = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var he = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ge = (e) => {
	let { locales: t } = _;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!K) for (let t = 0; t < (v.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(v.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, _e = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !K && v.storage.cookies) for (let n = 0; n < v.storage.cookies.length; n++) {
		let { name: r, attributes: i } = v.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, he(r, e, i));
			} catch {}
		}
	}
}, q = {
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
}, J = ge(q), Y = (e, t) => _e(e, {
	...q,
	isCookieEnabled: t
}), ve = () => {
	let { locale: e } = a(X) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, ye = ({ children: e }) => (ve(), e), be = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, X = t({
	locale: J ?? _?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), xe = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: s, defaultLocale: c } = _ ?? {}, [l, d] = u(e ?? J ?? t ?? c);
	o(() => {
		e && e !== l && d(e);
	}, [e]), o(() => {
		be();
	}, []);
	let p = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), Y(e, a);
		}
	}), m = me(l);
	return f(X.Provider, {
		value: {
			locale: m,
			setLocale: p,
			disableEditor: i
		},
		children: n
	});
}, Se = ({ children: e, ...t }) => p(xe, {
	...t,
	children: [f(ye, {}), e]
}), Z = (e, t) => {
	let { locale: n } = a(X) ?? {};
	return c(() => pe(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, Ce = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { defaultLocale: n, locales: r } = _ ?? {}, { locale: o, setLocale: s, isCookieEnabled: c } = a(X) ?? {};
	return {
		locale: o,
		defaultLocale: n,
		availableLocales: r,
		setLocale: i((n) => {
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
}, we = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Theme mode: auto (system). Click to switch to light mode.",
				f: "Theme mode: light. Click to switch to dark mode.",
				e: "Theme mode: dark. Click to switch to auto (system) mode.",
				a: "Theme: Auto",
				b: "Theme: Dark",
				c: "Theme: Light",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Theme mode: {{mode}}. Click to switch mode."
				}
			},
			fr: {
				d: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				f: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				e: "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
				a: "Thème : Auto",
				b: "Thème : Sombre",
				c: "Thème : Clair",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Mode de thème : {{mode}}. Cliquez pour changer de mode."
				}
			},
			es: {
				d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				f: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				e: "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
				a: "Tema: Auto",
				b: "Tema: Oscuro",
				c: "Tema: Claro",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modo de tema: {{mode}}. Haga clic para cambiar de modo."
				}
			},
			de: {
				d: "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
				f: "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
				e: "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
				a: "Design: Auto",
				b: "Design: Dunkel",
				c: "Design: Hell",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Themenmodus: {{mode}}. Zum Umschalten klicken."
				}
			},
			it: {
				d: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				f: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
				e: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
				a: "Tema: Auto",
				b: "Tema: Scuro",
				c: "Tema: Chiaro",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modalità tema: {{mode}}. Clicca per cambiare modalità."
				}
			},
			pt: {
				d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				f: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				e: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
				a: "Tema: Auto",
				b: "Tema: Escuro",
				c: "Tema: Claro",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modo de tema: {{mode}}. Clique para alternar o modo."
				}
			},
			zh: {
				d: "主题模式：自动（系统）。点击切换到浅色模式。",
				f: "主题模式：浅色。点击切换到深色模式。",
				e: "主题模式：深色。点击切换到自动（系统）模式。",
				a: "主题：自动",
				b: "主题：深色",
				c: "主题：浅色",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "主题模式：{{mode}}。点击切换模式。"
				}
			},
			ja: {
				d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				f: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				e: "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
				a: "テーマ：自動",
				b: "テーマ：ダーク",
				c: "テーマ：ライト",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "テーマモード：{{mode}}。モードを切り替えるにはクリックしてください。"
				}
			},
			ko: {
				d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				f: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				e: "테마 모드: 다크. 자동(시스템) 모드로 전환하려면 클릭하세요.",
				a: "테마: 자동",
				b: "테마: 다크",
				c: "테마: 라이트",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "테마 모드: {{mode}}. 모드를 전환하려면 클릭하세요."
				}
			},
			ru: {
				d: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				f: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				e: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
				a: "Тема: Авто",
				b: "Тема: Темная",
				c: "Тема: Светлая",
				g: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Режим темы: {{mode}}. Нажмите, чтобы переключить режим."
				}
			}
		}
	}
};
function Q() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Te() {
	let e = Z(we), [t, n] = u("auto");
	o(() => {
		let e = Q();
		n(e), $(e);
	}, []), o(() => {
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
	let i = t === "auto" ? e.d.value : e.g({ mode: t });
	return f("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? e.a.value : t === "dark" ? e.b.value : e.c.value
	});
}
function Ee(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function De() {
	let e = ee(), { locale: t, availableLocales: n, setLocale: r } = Ce({ onLocaleChange: (t) => {
		e({
			to: ".",
			params: (e) => ({
				...e,
				locale: t
			})
		});
	} });
	return f("div", {
		className: "flex items-center gap-2",
		children: f("select", {
			value: t,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: n.map((e) => f("option", {
				value: e,
				children: Ee(e)
			}, e))
		})
	});
}
function Oe(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function ke() {
	let e = Z(g);
	Oe(e.f.value);
	let [t, n] = u(!1), r = te({ strict: !1 }).locale ?? "en", i = [
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
	return f("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: p("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [p("div", {
				className: "flex items-center gap-8",
				children: [f(m, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.h
				}), p("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						f(m, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e.g
						}),
						f(m, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e.i
						}),
						p("div", {
							className: "relative",
							children: [p("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e.j, f(h, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && f("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: f("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => f(m, {
										preload: !1,
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
			}), p("div", {
				className: "flex items-center gap-4",
				children: [
					p("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [f("span", {
							className: "sr-only",
							children: e.e
						}), f("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: f("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					f(De, {}),
					f(Te, {})
				]
			})]
		})
	});
}
function Ae({ children: e }) {
	return f(Se, {
		locale: "en",
		children: e
	});
}
function je() {
	return f(Ae, { children: f(ke, {}) });
}
export { je as default };
