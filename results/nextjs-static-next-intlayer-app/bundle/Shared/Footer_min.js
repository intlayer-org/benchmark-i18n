import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { usePathname as m, useRouter as h } from "next/navigation.js";
import ee from "next/link";
import { jsxDEV as g } from "react/jsx-dev-runtime";
var te = {
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
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ne = ({ children: e, value: t, additionalProps: n }) => {
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
}, re = /* @__PURE__ */ new WeakMap(), ie = 0, ae = (e) => {
	if (!e) return "base";
	let t = re.get(e);
	if (t) return t;
	ie += 1;
	let n = `p${ie}`;
	return re.set(e, n), n;
}, oe = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, se = (e, t, n) => `${e}_${t}_${ae(n)}`, ce = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= oe && r.clear(), r.set(t, n), n;
}, le = "translation", S = "insertion", ue = "object", de = "array", C = "markdown", fe = "html", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: de,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ue,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = w(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = w(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, T = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = "default", pe = /[^A-Za-z0-9._&=-]/g, me = /[^A-Za-z0-9._-]/g, he = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, D = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, he);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, ge = (e) => e === void 0 ? E : typeof e == "string" ? D(e, pe) : Object.keys(e).sort().map((t) => `${D(t, me)}=${D(String(e[t]), me)}`).join("&"), O = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(ge) : [ge(e)], _e = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ve = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ye = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, be = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, xe = (e, t) => {
	if (!ye(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : _e(O(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ve(e, n, t, s)).map((t) => be(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Se = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, k = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? O(n).join(",") : String(n)}`;
}).join("|") : "", A = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (A(e) && A(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : j(e[r], t[r]));
		return n;
	}
	return e;
}, Ce = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => j(e, t));
}, M = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, we = (e) => {
	if (typeof e == "string") return e;
	if (M(e)) return e.nodeType === "html" ? e[fe] : e[C];
}, Te = (e, t) => {
	if (typeof e == "string") return t;
	if (M(e)) {
		let n = e.nodeType === "html" ? fe : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, N = (e, t, n, r, i) => {
	let a = Te(e, T(we(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: le,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ce(o, e, t);
	}
}, I = P, Ee = (e) => P, L = P, De = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = T(i, e);
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
}, R = P, z = P, B = (e) => P, V = P, Oe = (e, t = !0) => [
	F(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	I,
	L,
	De,
	B(e ?? _.defaultLocale),
	V,
	R,
	z
], ke = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), Ae = (e, t, n) => {
	let { locale: r, selector: i } = Se(t), a = se(r ?? _.defaultLocale, k(i), n), o = ce(e, a);
	if (o.hit) return o.content;
	let s = n ?? Oe(r), c = xe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ke(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, je = ["en"], Me = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", H = /\{\{\s*(.*?)\s*\}\}/g, Ne = (e, t = {}) => {
	if (!Object.values(t).some(Me)) return {
		isSimple: !0,
		parts: e.replace(H, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(H), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Pe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ne({
		...n,
		value: n.children,
		children: n.children
	})
}, Fe = P, Ie = (t, r) => {
	let i = Ne(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Le = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ie(i, e);
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
}, Re = P, ze = P, U = /* @__PURE__ */ new Map(), Be = (e, t = !0) => {
	let n = `${e ?? _.defaultLocale}_${t}`;
	if (U.has(n)) return U.get(n);
	let r = [
		F(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
		I,
		Ee(e ?? _.defaultLocale),
		L,
		B(e ?? _.defaultLocale),
		V,
		R,
		z,
		Pe,
		Fe,
		Le,
		Re,
		ze
	];
	return U.set(n, r), r;
}, Ve = (e, t) => Ae(e, t, Be(typeof t == "object" && t ? t.locale : t)), W = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), G = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, He = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = G(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, K = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var q = {
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
}, Ue = (e = q) => {
	let { locales: t } = _;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!K) for (let t = 0; t < (v.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(v.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, We = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !K && v.storage.cookies) for (let n = 0; n < v.storage.cookies.length; n++) {
		let { name: r, attributes: i } = v.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: G(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, He(r, e, i));
			} catch {}
		}
	}
}, J = Ue(q), Y = (e, t) => We(e, {
	...q,
	isCookieEnabled: t
}), Ge = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ke = ({ children: e }) => (Ge(), e), qe = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Je = ({ children: e }) => (qe(), e), Ye = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Xe = (e, t = _?.locales) => {
	let n = W(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, Ze = (e, t, n) => (n ?? v?.rewrite, e), X = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? _?.defaultLocale ?? "en",
	mode: e.mode ?? v?.mode ?? "prefix-no-default",
	locales: e.locales ?? _?.locales ?? je,
	rewrite: e.rewrite ?? v?.rewrite,
	domains: e.domains ?? v?.domains
}), Qe = (e, t) => !!e && (t ?? _.locales).includes(e), $e = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = X(t);
	return !e || !Qe(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, et = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), tt = (e, t = _?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = X(n), c = Xe(e, a), l = new URL(c, "http://e.com"), u = et(Ze(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = $e(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, nt = (e, t = _?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = X(n), a = W(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${tt(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, rt = (e, t = _?.locales, n = _?.defaultLocale) => {
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
}, Z = t({
	locale: J ?? _?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), it = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = _ ?? {}, [d, p] = u(e ?? J ?? t ?? l);
	o(() => {
		e && e !== d && p(e);
	}, [e]), o(() => {
		Ye();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Y(e, s);
		}
	}), h = rt(d);
	return f(Z.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, at = ({ children: e, ...t }) => p(it, {
	...t,
	children: [
		f(Ke, {}),
		f(Je, {}),
		e
	]
}), ot = (e, t) => {
	let { locale: n, variant: r } = a(Z) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${k(i)}` : i;
	return c(() => Ve(e, i), [e.key, o]);
}, { defaultLocale: st, locales: Q } = _ ?? {}, ct = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: st,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Y(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, lt = (e) => f(at, { ...e }), ut = () => {
	let e = m(), [t, n] = u("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => Xe(r), [r]);
}, dt = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = h(), o = ut();
	return {
		...ct({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = nt(o, n, { currentDomain: void 0 });
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
}, ft = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/Link.tsx", pt = (e) => /^https?:\/\//.test(e ?? ""), mt = ({ href: e, children: t, ...n }) => {
	let { locale: r } = dt(), i = pt(e.toString()), a = e && !i ? nt(e.toString(), r) : e;
	return g(ee, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: ft,
		lineNumber: 26,
		columnNumber: 5
	}, void 0);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/Footer.tsx";
function ht() {
	let e = ot(te), t = [
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
	return g("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: g("div", {
			className: "container py-8",
			children: [g("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					g("div", { children: [g("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}, void 0, !1, {
						fileName: $,
						lineNumber: 30,
						columnNumber: 13
					}, this), g("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					}, void 0, !1, {
						fileName: $,
						lineNumber: 33,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					g("div", { children: [g("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}, void 0, !1, {
						fileName: $,
						lineNumber: 38,
						columnNumber: 13
					}, this), g("ul", {
						className: "space-y-1",
						children: t.map((e) => g("li", { children: e.isInternal ? g(mt, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 45,
							columnNumber: 21
						}, this) : g("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 52,
							columnNumber: 21
						}, this) }, e.label.value, !1, {
							fileName: $,
							lineNumber: 43,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: $,
						lineNumber: 41,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 37,
						columnNumber: 11
					}, this),
					g("div", { children: [g("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}, void 0, !1, {
						fileName: $,
						lineNumber: 66,
						columnNumber: 13
					}, this), g("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					}, void 0, !1, {
						fileName: $,
						lineNumber: 69,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 65,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 28,
				columnNumber: 9
			}, this), g("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			}, void 0, !1, {
				fileName: $,
				lineNumber: 74,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 27,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 26,
		columnNumber: 5
	}, this);
}
function gt() {
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
function _t(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var vt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/AppProviders.tsx";
function yt({ children: e, locale: t }) {
	let [n] = u(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		_t("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		gt();
	}, []), g(lt, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: vt,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var bt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/scripts/Wrapper.tsx";
function xt({ children: e }) {
	return g(yt, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: bt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var St = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/Footer.wrapper.tsx";
function Ct() {
	return g(xt, { children: g(ht, {}, void 0, !1, {
		fileName: St,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: St,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ct as default };
