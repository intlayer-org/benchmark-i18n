import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { usePathname as ee, useRouter as m } from "next/navigation.js";
import te from "next/link";
import { jsxDEV as h } from "react/jsx-dev-runtime";
import { ChevronDown as ne } from "lucide-react";
import { useParams as re, usePathname as ie, useRouter as ae } from "next/navigation";
var oe = {
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
}, _ = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, se = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : f(d, { children: e });
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
}, ce = /* @__PURE__ */ new WeakMap(), le = 0, ue = (e) => {
	if (!e) return "base";
	let t = ce.get(e);
	if (t) return t;
	le += 1;
	let n = `p${le}`;
	return ce.set(e, n), n;
}, de = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, fe = (e, t, n) => `${e}_${t}_${ue(n)}`, pe = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= de && r.clear(), r.set(t, n), n;
}, me = "translation", x = "insertion", he = "object", ge = "array", S = "markdown", _e = "html", C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
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
			n[r] = C(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = C(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, w = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), T = "default", ve = /[^A-Za-z0-9._&=-]/g, E = /[^A-Za-z0-9._-]/g, ye = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, D = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ye);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, be = (e) => e === void 0 ? T : typeof e == "string" ? D(e, ve) : Object.keys(e).sort().map((t) => `${D(t, E)}=${D(String(e[t]), E)}`).join("&"), xe = (e) => Array.isArray(e) ? e.length === 0 ? [T] : e.map(be) : [be(e)], Se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? T : e[0] ?? "default";
}, Ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, we = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Te = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ee = (e, t) => {
	if (!we(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? T : Se(xe(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ce(e, n, t, s)).map((t) => Te(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, De = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Oe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? xe(n).join(",") : String(n)}`;
}).join("|") : "", O = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, k = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (O(e) && O(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : k(e[r], t[r]));
		return n;
	}
	return e;
}, ke = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => k(e, t));
}, A = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ae = (e) => {
	if (typeof e == "string") return e;
	if (A(e)) return e.nodeType === "html" ? e[_e] : e[S];
}, je = (e, t) => {
	if (typeof e == "string") return t;
	if (A(e)) {
		let n = e.nodeType === "html" ? _e : S;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, j = (e, t, n, r, i) => {
	let a = je(e, w(Ae(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, M = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, N = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? M : {
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
		return ke(o, e, t);
	}
}, P = M, Me = (e) => M, F = M, Ne = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? M : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || A(e),
			transform: (e, n, r) => {
				if (A(e)) return (i) => j(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = w(i, e);
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
}, I = M, L = M, R = (e) => M, z = M, Pe = (e, t = !0) => [
	N(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	P,
	F,
	Ne,
	R(e ?? g.defaultLocale),
	z,
	I,
	L
], Fe = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), Ie = (e, t, n) => {
	let { locale: r, selector: i } = De(t), a = fe(r ?? g.defaultLocale, Oe(i), n), o = pe(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pe(r), c = Ee(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Fe(e.content, t, s);
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, Le = ["en"], Re = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", B = /\{\{\s*(.*?)\s*\}\}/g, ze = (e, t = {}) => {
	if (!Object.values(t).some(Re)) return {
		isSimple: !0,
		parts: e.replace(B, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(B), r = [];
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
	transform: (e, { plugins: t, ...n }) => se({
		...n,
		value: n.children,
		children: n.children
	})
}, Ve = M, He = (t, r) => {
	let i = ze(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ue = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? M : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || A(e),
			transform: (e, n, r) => {
				if (A(e)) return (i) => j(e, i, n, t.plugins, r);
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
}, We = M, Ge = M, V = /* @__PURE__ */ new Map(), Ke = (e, t = !0) => {
	let n = `${e ?? g.defaultLocale}_${t}`;
	if (V.has(n)) return V.get(n);
	let r = [
		N(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
		P,
		Me(e ?? g.defaultLocale),
		F,
		R(e ?? g.defaultLocale),
		z,
		I,
		L,
		Be,
		Ve,
		Ue,
		We,
		Ge
	];
	return V.set(n, r), r;
}, qe = (e, t) => Ie(e, t, Ke(typeof t == "object" && t ? t.locale : t)), H = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), U = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Je = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = U(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, W = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var G = {
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
}, Ye = (e = G) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!W) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Xe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !W && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: U(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Je(r, e, i));
			} catch {}
		}
	}
}, K = Ye(G), q = (e, t) => Xe(e, {
	...G,
	isCookieEnabled: t
}), Ze = () => {
	let { locale: e } = a(Y) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Qe = ({ children: e }) => (Ze(), e), $e = () => {
	let { locale: e } = a(Y) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, et = ({ children: e }) => ($e(), e), tt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, nt = (e, t = g?.locales) => {
	let n = H(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, rt = (e, t, n) => (n ?? _?.rewrite, e), J = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? Le,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), it = (e, t) => !!e && (t ?? g.locales).includes(e), at = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = J(t);
	return !e || !it(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, ot = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), st = (e, t = g?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = J(n), c = nt(e, a), l = new URL(c, "http://e.com"), u = ot(rt(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = at(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, ct = (e, t = g?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = J(n), a = H(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${st(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, lt = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, Y = t({
	locale: K ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), ut = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = g ?? {}, [d, p] = u(e ?? K ?? t ?? l);
	o(() => {
		e && e !== d && p(e);
	}, [e]), o(() => {
		tt();
	}, []);
	let ee = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), q(e, s);
		}
	}), m = lt(d);
	return f(Y.Provider, {
		value: {
			locale: m,
			setLocale: ee,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, dt = ({ children: e, ...t }) => p(ut, {
	...t,
	children: [
		f(Qe, {}),
		f(et, {}),
		e
	]
}), ft = (e, t) => {
	let { locale: n, variant: r } = a(Y) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${Oe(i)}` : i;
	return c(() => qe(e, i), [e.key, o]);
}, { defaultLocale: pt, locales: X } = g ?? {}, mt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Y) ?? {};
	return {
		locale: n,
		defaultLocale: pt,
		availableLocales: X,
		setLocale: i((n) => {
			if (!X?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), q(n, e ?? o ?? !0), t?.(n);
		}, [
			X,
			t,
			r,
			e
		])
	};
}, ht = (e) => f(dt, { ...e }), gt = () => {
	let e = ee(), [t, n] = u("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => nt(r), [r]);
}, _t = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = m(), o = gt();
	return {
		...mt({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = ct(o, n, { currentDomain: void 0 });
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
}, vt = g.locales;
g.requiredLocales, g.defaultLocale;
var yt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/Link.tsx", bt = (e) => /^https?:\/\//.test(e ?? ""), Z = ({ href: e, children: t, ...n }) => {
	let { locale: r } = _t(), i = bt(e.toString()), a = e && !i ? ct(e.toString(), r) : e;
	return h(te, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: yt,
		lineNumber: 26,
		columnNumber: 5
	}, void 0);
}, xt = {
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
}, St = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/ThemeToggle.tsx";
function Ct() {
	let e = ft(xt);
	return h("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: e.a.value
	}, void 0, !1, {
		fileName: St,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/LocaleSwitcher.tsx";
function wt(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Tt() {
	let e = re().locale ?? "en", t = ie(), n = ae(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return h("div", {
		className: "flex items-center gap-2",
		children: h("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: vt.map((e) => h("option", {
				value: e,
				children: wt(e)
			}, e, !1, {
				fileName: Q,
				lineNumber: 35,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/Header.tsx";
function Et() {
	let e = ft(oe), t = [
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
	return h("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: h("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [h("div", {
				className: "flex items-center gap-8",
				children: [h(Z, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e.h
				}, void 0, !1, {
					fileName: $,
					lineNumber: 25,
					columnNumber: 11
				}, this), h("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						h(Z, {
							href: "/",
							className: "nav-link",
							children: e.g
						}, void 0, !1, {
							fileName: $,
							lineNumber: 33,
							columnNumber: 13
						}, this),
						h(Z, {
							href: "/about",
							className: "nav-link",
							children: e.i
						}, void 0, !1, {
							fileName: $,
							lineNumber: 36,
							columnNumber: 13
						}, this),
						h("div", {
							className: "relative group",
							children: [h("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								children: [e.j, h(ne, {
									size: 14,
									className: "transition-transform group-hover:rotate-180"
								}, void 0, !1, {
									fileName: $,
									lineNumber: 47,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: $,
								lineNumber: 42,
								columnNumber: 15
							}, this), h("div", {
								className: "absolute left-0 top-full pt-2 w-48 hidden group-hover:block",
								children: h("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: t.map((e) => h(Z, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										children: e.label
									}, e.href, !1, {
										fileName: $,
										lineNumber: 56,
										columnNumber: 21
									}, this))
								}, void 0, !1, {
									fileName: $,
									lineNumber: 54,
									columnNumber: 17
								}, this)
							}, void 0, !1, {
								fileName: $,
								lineNumber: 53,
								columnNumber: 15
							}, this)]
						}, void 0, !0, {
							fileName: $,
							lineNumber: 41,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 32,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 24,
				columnNumber: 9
			}, this), h("div", {
				className: "flex items-center gap-4",
				children: [
					h("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [h("span", {
							className: "sr-only",
							children: e.e
						}, void 0, !1, {
							fileName: $,
							lineNumber: 77,
							columnNumber: 13
						}, this), h("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: h("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 79,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: $,
							lineNumber: 78,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 71,
						columnNumber: 11
					}, this),
					h(Tt, {}, void 0, !1, {
						fileName: $,
						lineNumber: 85,
						columnNumber: 11
					}, this),
					h(Ct, {}, void 0, !1, {
						fileName: $,
						lineNumber: 86,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 70,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 23,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function Dt() {
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
function Ot(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var kt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/AppProviders.tsx";
function At({ children: e, locale: t }) {
	let [n] = u(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		Ot("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		Dt();
	}, []), h(ht, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: kt,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var jt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/scripts/Wrapper.tsx";
function Mt({ children: e }) {
	return h(At, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: jt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var Nt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/Header.wrapper.tsx";
function Pt() {
	return h(Mt, { children: h(Et, {}, void 0, !1, {
		fileName: Nt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Nt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Pt as default };
