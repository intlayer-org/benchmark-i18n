import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { usePathname as p, useRouter as m } from "next/navigation.js";
import h from "next/link";
import { ChevronDown as ee } from "lucide-react";
var te = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				f: "Home",
				h: "Methodology",
				i: "Mock Pages",
				k: "Products",
				j: "Pricing",
				m: "Team",
				a: "Blog",
				b: "Careers",
				d: "FAQ",
				c: "Contact",
				l: "Settings",
				e: "Go to GitHub",
				header: "Header",
				g: "i18n Bench"
			},
			fr: {
				f: "Accueil",
				h: "Méthodologie",
				i: "Pages de Test",
				k: "Produits",
				j: "Tarification",
				m: "Équipe",
				a: "Blog",
				b: "Carrières",
				d: "FAQ",
				c: "Contact",
				l: "Paramètres",
				e: "Aller sur GitHub",
				header: "En-tête",
				g: "Bench i18n"
			},
			es: {
				f: "Inicio",
				h: "Metodología",
				i: "Páginas de Prueba",
				k: "Productos",
				j: "Precios",
				m: "Equipo",
				a: "Blog",
				b: "Carreras",
				d: "FAQ",
				c: "Contacto",
				l: "Ajustes",
				e: "Ir a GitHub",
				header: "Cabecera",
				g: "Bench i18n"
			},
			de: {
				f: "Startseite",
				h: "Methodik",
				i: "Testseiten",
				k: "Produkte",
				j: "Preise",
				m: "Team",
				a: "Blog",
				b: "Karriere",
				d: "FAQ",
				c: "Kontakt",
				l: "Einstellungen",
				e: "Zu GitHub gehen",
				header: "Header",
				g: "i18n Bench"
			},
			it: {
				f: "Home",
				h: "Metodologia",
				i: "Pagine di test",
				k: "Prodotti",
				j: "Prezzi",
				m: "Team",
				a: "Blog",
				b: "Carriere",
				d: "FAQ",
				c: "Contatti",
				l: "Impostazioni",
				e: "Vai su GitHub",
				header: "Intestazione",
				g: "Bench i18n"
			},
			pt: {
				f: "Início",
				h: "Metodologia",
				i: "Páginas de teste",
				k: "Produtos",
				j: "Preços",
				m: "Equipe",
				a: "Blog",
				b: "Carreiras",
				d: "FAQ",
				c: "Contato",
				l: "Configurações",
				e: "Ir para GitHub",
				header: "Cabeçalho",
				g: "Bench i18n"
			},
			zh: {
				f: "首页",
				h: "方法学",
				i: "模拟页面",
				k: "产品",
				j: "价格",
				m: "团队",
				a: "博客",
				b: "职业",
				d: "常见问题",
				c: "联系我们",
				l: "设置",
				e: "前往 GitHub",
				header: "页眉",
				g: "i18n 基准"
			},
			ja: {
				f: "ホーム",
				h: "方法論",
				i: "モックページ",
				k: "製品",
				j: "価格",
				m: "チーム",
				a: "ブログ",
				b: "採用情報",
				d: "よくある質問",
				c: "お問い合わせ",
				l: "設定",
				e: "GitHubへ移動",
				header: "ヘッダー",
				g: "i18n ベンチ"
			},
			ko: {
				f: "홈",
				h: "방법론",
				i: "모의 페이지",
				k: "제품",
				j: "가격",
				m: "팀",
				a: "블로그",
				b: "채용",
				d: "자주 묻는 질문",
				c: "연락처",
				l: "설정",
				e: "GitHub으로 이동",
				header: "헤더",
				g: "i18n 벤치"
			},
			ru: {
				f: "Главная",
				h: "Методология",
				i: "Тестовые страницы",
				k: "Продукты",
				j: "Цены",
				m: "Команда",
				a: "Блог",
				b: "Карьера",
				d: "FAQ",
				c: "Контакт",
				l: "Настройки",
				e: "Перейти на GitHub",
				header: "Шапка",
				g: "i18n Бенчмарк"
			}
		}
	}
}, g = {
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
}, _ = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, v = {
	internationalization: g,
	routing: _,
	editor: {
		applicationURL: "http://localhost:3000",
		editorURL: "http://localhost:8000",
		cmsURL: "https://app.intlayer.org",
		backendURL: "https://back.intlayer.org",
		port: 8e3,
		enabled: !1,
		dictionaryPriorityStrategy: "local_first",
		liveSync: !0,
		liveSyncPort: 4e3,
		liveSyncURL: "http://localhost:4000"
	},
	log: {
		mode: "default",
		prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
	}
}, y = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : /* @__PURE__ */ d(u, { children: e });
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
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: re,
				key: r
			}]
		};
		n[r] = S(e[r], i);
	}
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
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ne,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return oe(a, e, t);
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
}, k = T, A = (e) => T, j = T, ue = (e, t = !0) => [
	E(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	D,
	O,
	le,
	A(e ?? g.defaultLocale),
	j,
	k
].filter(Boolean), de = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), fe = (e, t, n = ue(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return de(e.content, r, n);
}, pe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", M = /\{\{\s*(.*?)\s*\}\}/g, N = (e, t = {}) => {
	if (!Object.values(t).some(pe)) return {
		isSimple: !0,
		parts: e.replace(M, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(M), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, P = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", F = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", I = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-BJew_ddL.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-ytPPxvV0.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var L = P ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => y({
		...n,
		value: n.children,
		children: n.children
	})
}, R = F ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => y({
		...n,
		value: "[[react-element]]",
		children: b(e)
	})
}, z = (t, r) => {
	let i = N(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, B = I ? T : {
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
					let a = z(i, e);
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
}, me = T, he = T, ge = (e, t = !0) => [
	E(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	D,
	O,
	A(e ?? g.defaultLocale),
	j,
	k,
	L,
	R,
	B,
	me,
	he
].filter(Boolean), _e = (e, t) => fe(e, t, ge(t)), V = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), H = (e, t = g?.locales) => {
	let n = V(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://example.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://example.com", "");
}, ve = ["en"], U = (e = {}) => ({
	defaultLocale: g?.defaultLocale ?? "en",
	mode: _?.mode ?? "prefix-no-default",
	locales: g?.locales ?? ve,
	rewrite: _?.rewrite,
	domains: _?.domains,
	...e
}), ye = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = U(t);
	return !e || !i.includes(e) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, be = (e, t, n) => e, xe = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), W = (e, t = g?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s, currentDomain: c } = U(n), l = H(e, a), u = V(l), d = u ? new URL(l) : new URL(l, "http://example.com"), f = xe(be(d.pathname, void 0, void 0), t, void 0).path, p = u ? `${d.protocol}//${d.host}` : "", { prefix: m } = ye(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), h = `/${m}${f}`.replace(/\/+/g, "/");
	return h.length > 1 && h.endsWith("/") && (h = h.slice(0, -1)), `${p}${h}${d.search}${d.hash}`;
}, G = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Se = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Ce = (e) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!G) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, we = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !G && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Se(r, e, i));
			} catch {}
		}
	}
}, K = {
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
}, Te = 50, q = /* @__PURE__ */ new Map(), J = (e, t, n) => {
	let r = t ?? g?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = q.get(e);
	a || (a = /* @__PURE__ */ new Map(), q.set(e, a));
	let o = a.get(i);
	return o || (a.size > Te && a.clear(), o = new e(r, n), a.set(i, o)), o;
}, Ee = {
	Collator: function(e, t) {
		return J(Intl.Collator, e, t);
	},
	DateTimeFormat: function(e, t) {
		return J(Intl.DateTimeFormat, e, t);
	},
	DisplayNames: function(e, t) {
		return J(Intl.DisplayNames, e, t);
	},
	ListFormat: function(e, t) {
		return J(Intl.ListFormat, e, t);
	},
	NumberFormat: function(e, t) {
		return J(Intl.NumberFormat, e, t);
	},
	PluralRules: function(e, t) {
		return J(Intl.PluralRules, e, t);
	},
	RelativeTimeFormat: function(e, t) {
		return J(Intl.RelativeTimeFormat, e, t);
	},
	Segmenter: function(e, t) {
		return J(Intl.Segmenter, e, t);
	}
}, De = (e, t = e) => new Ee.DisplayNames(t, { type: "language" }).of(e) ?? "Unknown locale", Oe = Ce(K), ke = (e, t) => we(e, {
	...K,
	isCookieEnabled: t
}), Y = t({
	locale: Oe ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), X = (e, t) => {
	let { locale: n } = o(Y) ?? {};
	return c(() => _e(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, Z = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { defaultLocale: n, locales: r } = g ?? {}, { locale: i, setLocale: s, isCookieEnabled: c } = o(Y) ?? {};
	return {
		locale: i,
		defaultLocale: n,
		availableLocales: r,
		setLocale: a((n) => {
			if (!r?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			s(n), ke(n, e ?? c ?? !0), t?.(n);
		}, [
			r,
			t,
			s,
			e
		])
	};
}, Ae = () => {
	let e = p(), [t, n] = l(e);
	return s(() => {
		let t = typeof window < "u" ? window.location.search : "";
		n(t ? `${e}${t}` : e);
	}, [e]), c(() => H(t), [t]);
}, Q = ({ onChange: e = "replace" } = {}) => {
	let { replace: t, push: n } = m(), r = Ae();
	return {
		...Z({ onLocaleChange: a((i) => {
			if (!e) return;
			let a = W(r, i, { currentDomain: void 0 });
			if (typeof e == "function") {
				e({
					locale: i,
					path: a
				});
				return;
			}
			e === "replace" && t(a), e === "push" && n(a);
		}, [
			t,
			n,
			r,
			e
		]) }),
		pathWithoutLocale: r
	};
}, je = v.internationalization.locales;
v.internationalization.requiredLocales, v.internationalization.defaultLocale, v.editor;
//#endregion
//#region src/components/Link.tsx
var Me = (e) => /^https?:\/\//.test(e ?? ""), $ = ({ href: e, children: t, ...n }) => {
	let { locale: r } = Q(), i = Me(e.toString());
	return /* @__PURE__ */ d(h, {
		href: e && !i ? W(e.toString(), r) : e,
		...n,
		children: t
	});
}, Ne = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
				themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
				themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
				a: "Theme: Auto",
				themeDark: "Theme: Dark",
				themeLight: "Theme: Light",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Theme mode: {{mode}}. Click to switch mode."
				}
			},
			fr: {
				themeModeAutoSystemClick: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				themeModeLightClick: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				themeModeDarkClick: "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
				a: "Thème : Auto",
				themeDark: "Thème : Sombre",
				themeLight: "Thème : Clair",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Mode de thème : {{mode}}. Cliquez pour changer de mode."
				}
			},
			es: {
				themeModeAutoSystemClick: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				themeModeLightClick: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				themeModeDarkClick: "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
				a: "Tema: Auto",
				themeDark: "Tema: Oscuro",
				themeLight: "Tema: Claro",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modo de tema: {{mode}}. Haga clic para cambiar de modo."
				}
			},
			de: {
				themeModeAutoSystemClick: "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
				themeModeLightClick: "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
				themeModeDarkClick: "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
				a: "Design: Auto",
				themeDark: "Design: Dunkel",
				themeLight: "Design: Hell",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Themenmodus: {{mode}}. Zum Umschalten klicken."
				}
			},
			it: {
				themeModeAutoSystemClick: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
				themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
				a: "Tema: Auto",
				themeDark: "Tema: Scuro",
				themeLight: "Tema: Chiaro",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modalità tema: {{mode}}. Clicca per cambiare modalità."
				}
			},
			pt: {
				themeModeAutoSystemClick: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
				a: "Tema: Auto",
				themeDark: "Tema: Escuro",
				themeLight: "Tema: Claro",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modo de tema: {{mode}}. Clique para alternar o modo."
				}
			},
			zh: {
				themeModeAutoSystemClick: "主题模式：自动（系统）。点击切换到浅色模式。",
				themeModeLightClick: "主题模式：浅色。点击切换到深色模式。",
				themeModeDarkClick: "主题模式：深色。点击切换到自动（系统）模式。",
				a: "主题：自动",
				themeDark: "主题：深色",
				themeLight: "主题：浅色",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "主题模式：{{mode}}。点击切换模式。"
				}
			},
			ja: {
				themeModeAutoSystemClick: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				themeModeLightClick: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				themeModeDarkClick: "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
				a: "テーマ：自動",
				themeDark: "テーマ：ダーク",
				themeLight: "テーマ：ライト",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "テーマモード：{{mode}}。モードを切り替えるにはクリックしてください。"
				}
			},
			ko: {
				themeModeAutoSystemClick: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				themeModeLightClick: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				themeModeDarkClick: "테마 모드: 다크. 자동(시스템) 모드로 전환하려면 클릭하세요.",
				a: "테마: 자동",
				themeDark: "테마: 다크",
				themeLight: "테마: 라이트",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "테마 모드: {{mode}}. 모드를 전환하려면 클릭하세요."
				}
			},
			ru: {
				themeModeAutoSystemClick: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
				a: "Тема: Авто",
				themeDark: "Тема: Темная",
				themeLight: "Тема: Светлая",
				themeModeModeClickTo: {
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
function Pe() {
	return /* @__PURE__ */ d("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: X(Ne).a.value
	});
}
//#endregion
//#region src/components/LocaleSwitcher.tsx
function Fe() {
	let { locale: e, setLocale: t } = Q({ onChange: "push" });
	return /* @__PURE__ */ d("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ d("select", {
			value: e,
			onChange: (e) => t(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: je.map((e) => /* @__PURE__ */ d("option", {
				value: e,
				children: De(e)
			}, e))
		})
	});
}
//#endregion
//#region src/components/Header.tsx
function Ie() {
	let e = X(te), t = [
		{
			href: "/products",
			label: e.k
		},
		{
			href: "/pricing",
			label: e.j
		},
		{
			href: "/team",
			label: e.m
		},
		{
			href: "/blog",
			label: e.a
		},
		{
			href: "/careers",
			label: e.b
		},
		{
			href: "/faq",
			label: e.d
		},
		{
			href: "/contact",
			label: e.c
		},
		{
			href: "/settings",
			label: e.l
		}
	];
	return /* @__PURE__ */ d("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ f("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ f("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ d($, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.g
				}), /* @__PURE__ */ f("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ d($, {
							href: "/",
							className: "nav-link",
							children: e.f
						}),
						/* @__PURE__ */ d($, {
							href: "/about",
							className: "nav-link",
							children: e.h
						}),
						/* @__PURE__ */ f("div", {
							className: "relative group",
							children: [/* @__PURE__ */ f("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								children: [e.i, /* @__PURE__ */ d(ee, {
									size: 14,
									className: "transition-transform group-hover:rotate-180"
								})]
							}), /* @__PURE__ */ d("div", {
								className: "absolute left-0 top-full pt-2 w-48 hidden group-hover:block",
								children: /* @__PURE__ */ d("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: t.map((e) => /* @__PURE__ */ d($, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ f("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ f("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ d("span", {
							className: "sr-only",
							children: e.e
						}), /* @__PURE__ */ d("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ d("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ d(Fe, {}),
					/* @__PURE__ */ d(Pe, {})
				]
			})]
		})
	});
}
//#endregion
export { Ie as default };
import { Fragment as e, createContext as t, createElement as n, useContext as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
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
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var n = e(void 0), r = () => t(n), i = (e) => {
	let { children: t, options: n, components: i } = e, a = r();
	return (a?.renderMarkdown ?? ((e) => e))(t, n, {
		...a?.components ?? {},
		...i ?? {}
	});
};
//#endregion
export { i as MarkdownRendererPlugin };
