import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { usePathname as ee, useRouter as te } from "next/navigation.js";
import ne from "next/link";
var re = {
	key: "footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				i: "Resources",
				c: "Contact",
				f: "GitHub",
				h: "Methodology",
				e: "Contributing",
				b: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
				a: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				d: "contact@intlayer.org",
				g: "i18n Benchmark"
			},
			fr: {
				i: "Ressources",
				c: "Contact",
				f: "GitHub",
				h: "Méthodologie",
				e: "Contribuer",
				b: "i18n Benchmark — Projet open-source. Construit avec React, Vite & TanStack Router.",
				a: "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				d: "contact@intlayer.org",
				g: "Benchmark i18n"
			},
			es: {
				i: "Recursos",
				c: "Contacto",
				f: "GitHub",
				h: "Metodología",
				e: "Contribuir",
				b: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
				a: "Una aplicación de prueba de código abierto para medir el impacto en el mundo real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.",
				d: "contact@intlayer.org",
				g: "Benchmark i18n"
			},
			de: {
				i: "Ressourcen",
				c: "Kontakt",
				f: "GitHub",
				h: "Methodik",
				e: "Mitwirken",
				b: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
				a: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf die Bundle-Größe, Ladezeit und App-Reaktivität.",
				d: "contact@intlayer.org",
				g: "i18n Benchmark"
			},
			it: {
				i: "Risorse",
				c: "Contatti",
				f: "GitHub",
				h: "Metodologia",
				e: "Contribuire",
				b: "i18n Benchmark — Progetto open source. Costruito con React, Vite e TanStack Router.",
				a: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				d: "contact@intlayer.org",
				g: "Benchmark i18n"
			},
			pt: {
				i: "Recursos",
				c: "Contato",
				f: "GitHub",
				h: "Metodologia",
				e: "Contribuir",
				b: "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
				a: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
				d: "contact@intlayer.org",
				g: "Benchmark i18n"
			},
			zh: {
				i: "资源",
				c: "联系",
				f: "GitHub",
				h: "方法论",
				e: "贡献",
				b: "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
				a: "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
				d: "contact@intlayer.org",
				g: "i18n 基准测试"
			},
			ja: {
				i: "リソース",
				c: "連絡先",
				f: "GitHub",
				h: "方法論",
				e: "貢献",
				b: "i18n Benchmark — オープンソースプロジェクト。React, Vite & TanStack Router で構築。",
				a: "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。",
				d: "contact@intlayer.org",
				g: "i18n ベンチマーク"
			},
			ko: {
				i: "리소스",
				c: "연락처",
				f: "GitHub",
				h: "방법론",
				e: "기여",
				b: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
				a: "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
				d: "contact@intlayer.org",
				g: "i18n 벤치마크"
			},
			ru: {
				i: "Ресурсы",
				c: "Контакт",
				f: "GitHub",
				h: "Методология",
				e: "Вклад",
				b: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
				a: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
				d: "contact@intlayer.org",
				g: "i18n Бенчмарк"
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
}, ie = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = g(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _ = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var v = {
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
}, y = (e = v) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = !1, b, oe = () => typeof window > "u" ? y(v) : (ae ||= (b = y(v), !0), b), se = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (ae = !1, !_ && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: g(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ie(r, e, i));
			} catch {}
		}
	}
}, x = /* @__PURE__ */ new Map(), ce = (e, t) => Object.create(new Proxy(e, {
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
}), le = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = x.get(t);
	i || (i = /* @__PURE__ */ new Map(), x.set(t, i));
	let a = i.get(r);
	return a || (a = ce(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ue = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, le(t)), S = /* @__PURE__ */ new WeakMap(), C = 0, de = (e) => {
	if (!e) return "base";
	let t = S.get(e);
	if (t) return t;
	C += 1;
	let n = `p${C}`;
	return S.set(e, n), n;
}, fe = 256, w = /* @__PURE__ */ new WeakMap(), T = (e) => typeof e == "object" && !!e, pe = (e, t, n) => `${e}_${t}_${de(n)}`, me = (e, t) => {
	if (!T(e)) return { hit: !1 };
	let n = w.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!T(e)) return n;
	let r = w.get(e);
	return r || (r = /* @__PURE__ */ new Map(), w.set(e, r)), r.size >= fe && r.clear(), r.set(t, n), n;
}, he = "translation", ge = "enumeration", _e = "plural", ve = "condition", D = "insertion", ye = "object", be = "array", O = "markdown", k = "html", xe = "gender", Se = "select", A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
		type: be,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ye,
			key: r
		};
		if (t.eager) {
			n[r] = j(e[r], A(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = j(e[r], A(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, M = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !N(e) || !N(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? P(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ce = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => P(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, we = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[k] : e[O];
}, Te = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? k : O;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, I = (e, t, n, r, i) => {
	let a = Te(e, M(we(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ee = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ce(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: he,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, De = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: D }], i = e[D], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => I(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = M(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return U(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, H = [
	ge,
	ve,
	_e,
	xe,
	Se
], Oe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !H.includes(i)) return t;
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
		return !r && Ee(i) ? i(n) : i;
	};
}, U = (e, t) => typeof t == "function" && H.includes(e?.nodeType ?? "") ? (n) => Oe(e, t, n) : t, W = L, G = L, K = (e) => L, q = L, ke = (e, t = !0) => [
	R(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	z,
	B(e ?? p.defaultLocale),
	V,
	De,
	K(e ?? p.defaultLocale),
	q,
	W,
	G
].filter((e) => e !== L), Ae = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), je = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = pe(r ?? p.defaultLocale, "", n), o = me(e, a);
	if (o.hit) return o.content;
	let s = n ?? ke(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !J.has(e)
		};
		J.add(e);
		try {
			return Ae(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return c === null ? E(e, a, null) : Array.isArray(c) ? E(e, a, c.map(l)) : E(e, a, l(c));
}, Me = ["en"], Ne = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Y = /\{\{\s*(.*?)\s*\}\}/g, Pe = (e, t = {}) => {
	if (!Object.values(t).some(Ne)) return {
		isSimple: !0,
		parts: e.replace(Y, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Y), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Fe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ue({
		value: t.children,
		children: t.children
	})
}, Ie = L, Le = (t, r) => {
	let i = Pe(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Re = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: D }], i = e[D], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => I(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Le(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return U(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, ze = L, Be = L, X = /* @__PURE__ */ new Map(), Ve = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Fe,
		R(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		z,
		B(e ?? p.defaultLocale),
		V,
		K(e ?? p.defaultLocale),
		q,
		W,
		G,
		Ie,
		Re,
		ze,
		Be
	].filter((e) => e !== L);
	return X.set(n, r), r;
}, He = (e, t) => je(e, t, Ve(typeof t == "object" && t ? t.locale : t)), Ue = oe, We = (e, t) => se(e, {
	...v,
	isCookieEnabled: t
}), Z = (e, t = p?.locales) => {
	let n = h(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, Ge = (e, t, n) => (n ?? m?.rewrite, e), Q = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? Me,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), Ke = (e, t) => !!e && (t ?? p.locales).includes(e), qe = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = Q(t);
	return !e || !Ke(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, Je = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), Ye = (e, t = p?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = Q(n), c = Z(e, a), l = new URL(c, "http://e.com"), u = Je(Ge(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = qe(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, Xe = (e, t = p?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = Q(n), a = h(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${Ye(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, Ze = t({
	get locale() {
		return Ue() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Qe = (e, t) => {
	let { locale: n, variant: r } = a(Ze) ?? {}, i = t ?? n, o = i;
	return c(() => He(e, i), [e.key, o]);
}, { defaultLocale: $e, locales: $ } = p ?? {}, et = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Ze) ?? {};
	return {
		locale: n,
		defaultLocale: $e,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), We(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, tt = () => {
	let e = ee(), [t, n] = l("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => Z(r), [r]);
}, nt = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = te(), o = tt();
	return {
		...et({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = Xe(o, n, { currentDomain: void 0 });
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
}, rt = (e) => /^https?:\/\//.test(e ?? ""), it = ({ href: e, children: t, ...n }) => {
	let { locale: r } = nt(), i = rt(e.toString()), a = e && !i ? Xe(e.toString(), r) : e;
	return d(ne, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	});
};
function at() {
	let e = Qe(re), t = [
		{
			label: e.f,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e.h,
			href: "/about",
			isInternal: !0
		},
		{
			label: e.e,
			href: "/contact",
			isInternal: !0
		}
	];
	return d("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: f("div", {
			className: "container py-8",
			children: [f("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}), d("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					})] }),
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}), d("ul", {
						className: "space-y-1",
						children: t.map((e) => d("li", { children: e.isInternal ? d(it, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : d("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label.value))
					})] }),
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}), d("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					})] })
				]
			}), d("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			})]
		})
	});
}
function ot() {
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
function st(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function ct({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		st("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		ot();
	}, []), e;
}
function lt({ children: e }) {
	return d(ct, {
		locale: "en",
		children: e
	});
}
function ut() {
	return d(lt, { children: d(at, {}) });
}
export { ut as default };
