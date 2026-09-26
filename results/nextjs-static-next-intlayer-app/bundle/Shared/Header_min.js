import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { usePathname as ee, useRouter as te } from "next/navigation.js";
import ne from "next/link";
import { ChevronDown as re } from "lucide-react";
import { useParams as ie, usePathname as ae, useRouter as oe } from "next/navigation";
var se = {
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
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), g = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ce = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = g(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, le = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _ = {
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
}, ue = (e = _) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!le) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, v = !1, y, de = () => typeof window > "u" ? ue(_) : (v ||= (y = ue(_), !0), y), fe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (v = !1, !le && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: g(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ce(r, e, i));
			} catch {}
		}
	}
}, b = /* @__PURE__ */ new Map(), pe = (e, t) => Object.create(new Proxy(e, {
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
}), me = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = b.get(t);
	i || (i = /* @__PURE__ */ new Map(), b.set(t, i));
	let a = i.get(r);
	return a || (a = pe(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, he = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, me(t)), x = /* @__PURE__ */ new WeakMap(), S = 0, ge = (e) => {
	if (!e) return "base";
	let t = x.get(e);
	if (t) return t;
	S += 1;
	let n = `p${S}`;
	return x.set(e, n), n;
}, _e = 256, C = /* @__PURE__ */ new WeakMap(), w = (e) => typeof e == "object" && !!e, ve = (e, t, n) => `${e}_${t}_${ge(n)}`, ye = (e, t) => {
	if (!w(e)) return { hit: !1 };
	let n = C.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, T = (e, t, n) => {
	if (!w(e)) return n;
	let r = C.get(e);
	return r || (r = /* @__PURE__ */ new Map(), C.set(e, r)), r.size >= _e && r.clear(), r.set(t, n), n;
}, be = "translation", xe = "enumeration", Se = "plural", Ce = "condition", E = "insertion", we = "object", Te = "array", D = "markdown", O = "html", Ee = "gender", De = "select", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: Te,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: we,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, j = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !M(e) || !M(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? N(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Oe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, P = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ke = (e) => {
	if (typeof e == "string") return e;
	if (P(e)) return e.nodeType === "html" ? e[O] : e[D];
}, Ae = (e, t) => {
	if (typeof e == "string") return t;
	if (P(e)) {
		let n = e.nodeType === "html" ? O : D;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, F = (e, t, n, r, i) => {
	let a = Ae(e, j(ke(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, I = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, je = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, L = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? I : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Oe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: be,
				key: e
			}]
		});
	}
}, R = I, z = (e) => I, B = I, Me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? I : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => F(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = j(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return H(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, V = [
	xe,
	Ce,
	Se,
	Ee,
	De
], Ne = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !V.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && je(i) ? i(n) : i;
	};
}, H = (e, t) => typeof t == "function" && V.includes(e?.nodeType ?? "") ? (n) => Ne(e, t, n) : t, U = I, W = I, G = (e) => I, K = I, Pe = (e, t = !0) => [
	L(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	R,
	z(e ?? p.defaultLocale),
	B,
	Me,
	G(e ?? p.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== I), Fe = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), Ie = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ve(r ?? p.defaultLocale, "", n), o = ye(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pe(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !q.has(e)
		};
		q.add(e);
		try {
			return Fe(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? T(e, a, null) : Array.isArray(c) ? T(e, a, c.map(l)) : T(e, a, l(c));
}, Le = ["en"], Re = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", J = /\{\{\s*(.*?)\s*\}\}/g, ze = (e, t = {}) => {
	if (!Object.values(t).some(Re)) return {
		isSimple: !0,
		parts: e.replace(J, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(J), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Be = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => he({
		value: t.children,
		children: t.children
	})
}, Ve = I, He = (t, r) => {
	let i = ze(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ue = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? I : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => F(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = He(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return H(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, We = I, Ge = I, Y = /* @__PURE__ */ new Map(), Ke = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		Be,
		L(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		R,
		z(e ?? p.defaultLocale),
		B,
		G(e ?? p.defaultLocale),
		K,
		U,
		W,
		Ve,
		Ue,
		We,
		Ge
	].filter((e) => e !== I);
	return Y.set(n, r), r;
}, qe = (e, t) => Ie(e, t, Ke(typeof t == "object" && t ? t.locale : t)), Je = de, Ye = (e, t) => fe(e, {
	..._,
	isCookieEnabled: t
}), X = (e, t = p?.locales) => {
	let n = h(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, Xe = (e, t, n) => (n ?? m?.rewrite, e), Z = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? Le,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), Ze = (e, t) => !!e && (t ?? p.locales).includes(e), Qe = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = Z(t);
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
}), et = (e, t = p?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = Z(n), c = X(e, a), l = new URL(c, "http://e.com"), u = $e(Xe(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = Qe(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, tt = (e, t = p?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = Z(n), a = h(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${et(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, nt = t({
	get locale() {
		return Je() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), rt = (e, t) => {
	let { locale: n, variant: r } = a(nt) ?? {}, i = t ?? n, o = i;
	return c(() => qe(e, i), [e.key, o]);
}, { defaultLocale: it, locales: Q } = p ?? {}, at = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(nt) ?? {};
	return {
		locale: n,
		defaultLocale: it,
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
}, ot = () => {
	let e = ee(), [t, n] = l("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => X(r), [r]);
}, st = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = te(), o = ot();
	return {
		...at({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = tt(o, n, { currentDomain: void 0 });
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
}, ct = p.locales;
p.requiredLocales, p.defaultLocale;
var lt = (e) => /^https?:\/\//.test(e ?? ""), $ = ({ href: e, children: t, ...n }) => {
	let { locale: r } = st(), i = lt(e.toString()), a = e && !i ? tt(e.toString(), r) : e;
	return d(ne, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	});
}, ut = {
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
function dt() {
	let e = rt(ut);
	return d("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: e.a.value
	});
}
function ft(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function pt() {
	let e = ie().locale ?? "en", t = ae(), n = oe(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return d("div", {
		className: "flex items-center gap-2",
		children: d("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: ct.map((e) => d("option", {
				value: e,
				children: ft(e)
			}, e))
		})
	});
}
function mt() {
	let e = rt(se), t = [
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
	return d("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: f("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [f("div", {
				className: "flex items-center gap-8",
				children: [d($, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.h
				}), f("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						d($, {
							href: "/",
							className: "nav-link",
							children: e.g
						}),
						d($, {
							href: "/about",
							className: "nav-link",
							children: e.i
						}),
						f("div", {
							className: "relative group",
							children: [f("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								children: [e.j, d(re, {
									size: 14,
									className: "transition-transform group-hover:rotate-180"
								})]
							}), d("div", {
								className: "absolute left-0 top-full pt-2 w-48 hidden group-hover:block",
								children: d("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: t.map((e) => d($, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), f("div", {
				className: "flex items-center gap-4",
				children: [
					f("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [d("span", {
							className: "sr-only",
							children: e.e
						}), d("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: d("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					d(pt, {}),
					d(dt, {})
				]
			})]
		})
	});
}
function ht() {
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
function gt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function _t({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		gt("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		ht();
	}, []), e;
}
function vt({ children: e }) {
	return d(_t, {
		locale: "en",
		children: e
	});
}
function yt() {
	return d(vt, { children: d(mt, {}) });
}
export { yt as default };
