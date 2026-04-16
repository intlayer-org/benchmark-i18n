import { Fragment as e, Profiler as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { usePathname as m, useRouter as h } from "next/navigation.js";
import ee from "next/link";
import { ChevronDown as te } from "lucide-react";
var ne = {
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
	let r = i(e) ? e : f(d, { children: e });
	return new Proxy(r, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, b = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: n } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let n = t.map((e, t) => {
				let n = b(e);
				if (typeof n == "object" && n && "type" in n) {
					let e = n;
					return r(e.type, {
						...e.props,
						key: t
					}, ...Array.isArray(e.props?.children) ? e.props.children : e.props?.children === void 0 ? [] : [e.props.children]);
				}
				return n;
			});
			return {
				...e,
				props: {
					...e.props,
					children: n
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
	return r(t ?? "span", n, ...n.children);
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
}, T = (e, t, n) => {
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
}, se = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", ce = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", E = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, D = (e, t) => se ? E : {
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
		return T(a, e, t);
	}
}, O = E, k = E, le = ce ? E : {
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
}, A = E, j = (e) => E, M = E, ue = (e, t = !0) => [
	D(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	O,
	k,
	le,
	j(e ?? g.defaultLocale),
	M,
	A
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
}, pe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", N = /\{\{\s*(.*?)\s*\}\}/g, P = (e, t = {}) => {
	if (!Object.values(t).some(pe)) return {
		isSimple: !0,
		parts: e.replace(N, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(N), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, F = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", I = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", R = F ? E : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => y({
		...n,
		value: n.children,
		children: n.children
	})
}, z = I ? E : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => y({
		...n,
		value: "[[react-element]]",
		children: b(e)
	})
}, B = (t, n) => {
	let i = P(t, n);
	return i.isSimple ? i.parts : r(e, null, ...i.parts.map((t, n) => r(e, { key: n }, t)));
}, me = L ? E : {
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
					let a = B(i, e);
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
}, he = E, ge = E, _e = (e, t = !0) => [
	D(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	O,
	k,
	j(e ?? g.defaultLocale),
	M,
	A,
	R,
	z,
	me,
	he,
	ge
].filter(Boolean), ve = (e, t) => fe(e, t, _e(t)), V = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), H = (e, t = g?.locales) => {
	let n = V(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://example.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://example.com", "");
}, ye = ["en"], U = (e = {}) => ({
	defaultLocale: g?.defaultLocale ?? "en",
	mode: _?.mode ?? "prefix-no-default",
	locales: g?.locales ?? ye,
	rewrite: _?.rewrite,
	domains: _?.domains,
	...e
}), be = (e, t = {}) => {
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
}, xe = (e, t, n) => e, Se = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), W = (e, t = g?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s, currentDomain: c } = U(n), l = H(e, a), u = V(l), d = u ? new URL(l) : new URL(l, "http://example.com"), f = Se(xe(d.pathname, void 0, void 0), t, void 0).path, p = u ? `${d.protocol}//${d.host}` : "", { prefix: m } = be(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), h = `/${m}${f}`.replace(/\/+/g, "/");
	return h.length > 1 && h.endsWith("/") && (h = h.slice(0, -1)), `${p}${h}${d.search}${d.hash}`;
}, Ce = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, G = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var we = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Te = (e) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!G) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Ee = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !G && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, we(r, e, i));
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
}, q = Te(K), J = (e, t) => Ee(e, {
	...K,
	isCookieEnabled: t
}), De = () => {
	let { locale: e } = o(Y) ?? {}, t = l(null);
	s(() => {}, []), s(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, Oe = ({ children: e }) => (De(), e), ke = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Y = n({
	locale: q ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ae = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: o, defaultLocale: c } = g ?? {}, [l, d] = u(e ?? q ?? t ?? c);
	s(() => {
		e && e !== l && d(e);
	}, [e]), s(() => {
		ke();
	}, []);
	let p = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!o?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), J(e, a);
		}
	}), m = Ce(l);
	return f(Y.Provider, {
		value: {
			locale: m,
			setLocale: p,
			disableEditor: i
		},
		children: n
	});
}, je = ({ children: e, ...t }) => p(Ae, {
	...t,
	children: [f(Oe, {}), e]
}), X = (e, t) => {
	let { locale: n } = o(Y) ?? {};
	return c(() => ve(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, Me = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
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
			s(n), J(n, e ?? c ?? !0), t?.(n);
		}, [
			r,
			t,
			s,
			e
		])
	};
}, Ne = (e) => f(je, { ...e }), Pe = () => {
	let e = m(), [t, n] = u(e);
	return s(() => {
		let t = typeof window < "u" ? window.location.search : "";
		n(t ? `${e}${t}` : e);
	}, [e]), c(() => H(t), [t]);
}, Z = ({ onChange: e = "replace" } = {}) => {
	let { replace: t, push: n } = h(), r = Pe();
	return {
		...Me({ onLocaleChange: a((i) => {
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
}, Fe = v.internationalization.locales;
v.internationalization.requiredLocales, v.internationalization.defaultLocale, v.editor;
//#endregion
//#region src/components/Link.tsx
var Q = (e) => /^https?:\/\//.test(e ?? ""), $ = ({ href: e, children: t, ...n }) => {
	let { locale: r } = Z(), i = Q(e.toString());
	return f(ee, {
		href: e && !i ? W(e.toString(), r) : e,
		...n,
		children: t
	});
}, Ie = {
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
function Le() {
	return f("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: X(Ie).a.value
	});
}
//#endregion
//#region src/components/LocaleSwitcher.tsx
function Re(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function ze() {
	let { locale: e, setLocale: t } = Z({ onChange: "push" });
	return f("div", {
		className: "flex items-center gap-2",
		children: f("select", {
			value: e,
			onChange: (e) => t(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Fe.map((e) => f("option", {
				value: e,
				children: Re(e)
			}, e))
		})
	});
}
//#endregion
//#region src/components/Header.tsx
function Be() {
	let e = X(ne), t = [
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
	return f("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: p("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [p("div", {
				className: "flex items-center gap-8",
				children: [f($, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.g
				}), p("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						f($, {
							href: "/",
							className: "nav-link",
							children: e.f
						}),
						f($, {
							href: "/about",
							className: "nav-link",
							children: e.h
						}),
						p("div", {
							className: "relative group",
							children: [p("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								children: [e.i, f(te, {
									size: 14,
									className: "transition-transform group-hover:rotate-180"
								})]
							}), f("div", {
								className: "absolute left-0 top-full pt-2 w-48 hidden group-hover:block",
								children: f("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: t.map((e) => f($, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										children: e.label
									}, e.href))
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
					f(ze, {}),
					f(Le, {})
				]
			})]
		})
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function Ve() {
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
function He(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region src/components/AppProviders.tsx
function Ue({ children: e, locale: n }) {
	return s(() => {
		n && (document.documentElement.lang = n);
	}, [n]), s(() => {
		Ve();
	}, []), f(t, {
		id: "AppRoot",
		onRender: He,
		children: f(Ne, {
			locale: n,
			children: e
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function We({ children: e }) {
	return f(Ue, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/Header.wrapper.tsx
function Ge() {
	return f(We, { children: f(Be, {}) });
}
//#endregion
export { Ge as default };
