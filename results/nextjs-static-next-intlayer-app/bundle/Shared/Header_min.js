import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as ee, jsx as u, jsxs as d } from "react/jsx-runtime";
import { usePathname as te, useRouter as ne } from "next/navigation.js";
import re from "next/link";
import { ChevronDown as ie } from "lucide-react";
import { useParams as ae, usePathname as oe, useRouter as se } from "next/navigation";
var ce = {
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
				h: "i18n Бенчмарк"
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
}, le = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(ee, { children: e });
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
}, m = /* @__PURE__ */ new WeakMap(), h = 0, ue = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, de = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, fe = (e, t, n) => `${e}_${t}_${ue(n)}`, pe = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= de && r.clear(), r.set(t, n), n;
}, me = "translation", y = "insertion", he = "object", ge = "array", _e = "markdown", b = "html", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ge,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: he,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, S = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), C = "default", ve = /[^A-Za-z0-9._&=-]/g, w = /[^A-Za-z0-9._-]/g, ye = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, T = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ye);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, E = (e) => e === void 0 ? C : typeof e == "string" ? T(e, ve) : Object.keys(e).sort().map((t) => `${T(t, w)}=${T(String(e[t]), w)}`).join("&"), D = (e) => Array.isArray(e) ? e.length === 0 ? [C] : e.map(E) : [E(e)], be = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? C : e[0] ?? "default";
}, xe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, we = (e, t) => {
	if (!Se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? C : be(D(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => xe(e, n, t, s)).map((t) => Ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Te = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, O = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? D(n).join(",") : String(n)}`;
}).join("|") : "", k = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, A = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (k(e) && k(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : A(e[r], t[r]));
		return n;
	}
	return e;
}, Ee = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => A(e, t));
}, j = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, De = (e) => {
	if (typeof e == "string") return e;
	if (j(e)) return e.nodeType === "html" ? e[b] : e[_e];
}, Oe = (e, t) => {
	if (typeof e == "string") return t;
	if (j(e)) {
		let n = e.nodeType === "html" ? b : _e;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, M = (e, t, n, r, i) => {
	let a = Oe(e, S(De(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, N = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, P = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? N : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: me,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ee(o, e, t);
	}
}, F = N, ke = (e) => N, I = N, Ae = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? N : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || j(e),
			transform: (e, n, r) => {
				if (j(e)) return (i) => M(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = S(i, e);
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
}, L = N, R = N, z = (e) => N, B = N, je = (e, t = !0) => [
	P(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	F,
	I,
	Ae,
	z(e ?? f.defaultLocale),
	B,
	L,
	R
], Me = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), Ne = (e, t, n) => {
	let { locale: r, selector: i } = Te(t), a = fe(r ?? f.defaultLocale, O(i), n), o = pe(e, a);
	if (o.hit) return o.content;
	let s = n ?? je(r), c = we(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Me(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, Pe = ["en"], Fe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", V = /\{\{\s*(.*?)\s*\}\}/g, Ie = (e, t = {}) => {
	if (!Object.values(t).some(Fe)) return {
		isSimple: !0,
		parts: e.replace(V, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(V), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Le = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => le({
		...n,
		value: n.children,
		children: n.children
	})
}, Re = N, ze = (t, r) => {
	let i = Ie(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Be = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? N : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || j(e),
			transform: (e, n, r) => {
				if (j(e)) return (i) => M(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ze(i, e);
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
}, Ve = N, He = N, H = /* @__PURE__ */ new Map(), Ue = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (H.has(n)) return H.get(n);
	let r = [
		P(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		F,
		ke(e ?? f.defaultLocale),
		I,
		z(e ?? f.defaultLocale),
		B,
		L,
		R,
		Le,
		Re,
		Be,
		Ve,
		He
	];
	return H.set(n, r), r;
}, We = (e, t) => Ne(e, t, Ue(typeof t == "object" && t ? t.locale : t)), U = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), W = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Ge = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = W(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, G = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var K = {
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
}, Ke = (e = K) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!G) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, qe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !G && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: W(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Ge(r, e, i));
			} catch {}
		}
	}
}, Je = Ke(K), Ye = (e, t) => qe(e, {
	...K,
	isCookieEnabled: t
}), q = (e, t = f?.locales) => {
	let n = U(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, Xe = (e, t, n) => (n ?? p?.rewrite, e), J = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? f?.defaultLocale ?? "en",
	mode: e.mode ?? p?.mode ?? "prefix-no-default",
	locales: e.locales ?? f?.locales ?? Pe,
	rewrite: e.rewrite ?? p?.rewrite,
	domains: e.domains ?? p?.domains
}), Ze = (e, t) => !!e && (t ?? f.locales).includes(e), Qe = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = J(t);
	return !e || !Ze(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, $e = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), et = (e, t = f?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = J(n), c = q(e, a), l = new URL(c, "http://e.com"), ee = $e(Xe(l.pathname, void 0, void 0), t, void 0).path, { prefix: u } = Qe(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), d = `/${u}${ee}`.replace(/\/+/g, "/");
	return d.length > 1 && d.endsWith("/") && (d = d.slice(0, -1)), `${d}${l.search}${l.hash}`;
}, Y = (e, t = f?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = J(n), a = U(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${et(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, X = t({
	locale: Je ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Z = (e, t) => {
	let { locale: n, variant: r } = a(X) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${O(i)}` : i;
	return c(() => We(e, i), [e.key, o]);
}, { defaultLocale: tt, locales: Q } = f ?? {}, nt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(X) ?? {};
	return {
		locale: n,
		defaultLocale: tt,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Ye(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, rt = () => {
	let e = te(), [t, n] = l("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => q(r), [r]);
}, it = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = ne(), o = rt();
	return {
		...nt({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = Y(o, n, { currentDomain: void 0 });
				if (typeof e == "function") {
					e({
						locale: n,
						path: i
					});
					return;
				}
				e === "replace" && r(i), e === "push" && a(i), t?.(n);
			}, [
				r,
				a,
				o,
				e,
				t
			]),
			isCookieEnabled: n
		}),
		pathWithoutLocale: o
	};
}, at = f.locales;
f.requiredLocales, f.defaultLocale;
var ot = (e) => /^https?:\/\//.test(e ?? ""), $ = ({ href: e, children: t, ...n }) => {
	let { locale: r } = it(), i = ot(e.toString()), a = e && !i ? Y(e.toString(), r) : e;
	return u(re, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	});
}, st = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: { a: "Theme: Auto" },
			fr: { a: "Thème : Auto" },
			es: { a: "Tema: Auto" },
			de: { a: "Design: Auto" },
			it: { a: "Tema: Auto" },
			pt: { a: "Tema: Auto" },
			zh: { a: "主题：自动" },
			ja: { a: "テーマ：自動" },
			ko: { a: "테마: 자동" },
			ru: { a: "Тема: Авто" }
		}
	}
};
function ct() {
	let e = Z(st);
	return u("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: e.a.value
	});
}
function lt(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function ut() {
	let e = ae().locale ?? "en", t = oe(), n = se(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return u("div", {
		className: "flex items-center gap-2",
		children: u("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: at.map((e) => u("option", {
				value: e,
				children: lt(e)
			}, e))
		})
	});
}
function dt() {
	let e = Z(ce), t = [
		{
			href: "/products",
			label: e.l
		},
		{
			href: "/pricing",
			label: e.k
		},
		{
			href: "/team",
			label: e.n
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
			label: e.m
		}
	];
	return u("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: d("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [d("div", {
				className: "flex items-center gap-8",
				children: [u($, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.h
				}), d("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						u($, {
							href: "/",
							className: "nav-link",
							children: e.g
						}),
						u($, {
							href: "/about",
							className: "nav-link",
							children: e.i
						}),
						d("div", {
							className: "relative group",
							children: [d("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								children: [e.j, u(ie, {
									size: 14,
									className: "transition-transform group-hover:rotate-180"
								})]
							}), u("div", {
								className: "absolute left-0 top-full pt-2 w-48 hidden group-hover:block",
								children: u("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: t.map((e) => u($, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), d("div", {
				className: "flex items-center gap-4",
				children: [
					d("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [u("span", {
							className: "sr-only",
							children: e.e
						}), u("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: u("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					u(ut, {}),
					u(ct, {})
				]
			})]
		})
	});
}
function ft() {
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
function pt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function mt({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		pt("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		ft();
	}, []), e;
}
function ht({ children: e }) {
	return u(mt, {
		locale: "en",
		children: e
	});
}
function gt() {
	return u(ht, { children: u(dt, {}) });
}
export { gt as default };
