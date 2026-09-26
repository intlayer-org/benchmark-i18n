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
}, ie = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : d(u, { children: e });
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
}, h = /* @__PURE__ */ new WeakMap(), g = 0, ae = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, oe = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, se = (e, t, n) => `${e}_${t}_${ae(n)}`, ce = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= oe && r.clear(), r.set(t, n), n;
}, le = "translation", b = "insertion", ue = "object", de = "array", x = "markdown", S = "html", C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
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
}, w = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), T = "default", fe = /[^A-Za-z0-9._&=-]/g, E = /[^A-Za-z0-9._-]/g, pe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, D = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, pe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, O = (e) => e === void 0 ? T : typeof e == "string" ? D(e, fe) : Object.keys(e).sort().map((t) => `${D(t, E)}=${D(String(e[t]), E)}`).join("&"), k = (e) => Array.isArray(e) ? e.length === 0 ? [T] : e.map(O) : [O(e)], me = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? T : e[0] ?? "default";
}, he = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ge = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, _e = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ve = (e, t) => {
	if (!ge(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? T : me(k(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => he(e, n, t, s)).map((t) => _e(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ye = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, A = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? k(n).join(",") : String(n)}`;
}).join("|") : "", j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (j(e) && j(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : M(e[r], t[r]));
		return n;
	}
	return e;
}, be = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => M(e, t));
}, N = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, xe = (e) => {
	if (typeof e == "string") return e;
	if (N(e)) return e.nodeType === "html" ? e[S] : e[x];
}, Se = (e, t) => {
	if (typeof e == "string") return t;
	if (N(e)) {
		let n = e.nodeType === "html" ? S : x;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, P = (e, t, n, r, i) => {
	let a = Se(e, w(xe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
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
		return be(o, e, t);
	}
}, L = F, Ce = (e) => F, R = F, we = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
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
}, z = F, B = F, V = (e) => F, H = F, Te = (e, t = !0) => [
	I(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	L,
	R,
	we,
	V(e ?? p.defaultLocale),
	H,
	z,
	B
], Ee = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), De = (e, t, n) => {
	let { locale: r, selector: i } = ye(t), a = se(r ?? p.defaultLocale, A(i), n), o = ce(e, a);
	if (o.hit) return o.content;
	let s = n ?? Te(r), c = ve(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Ee(e.content, t, s);
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, Oe = ["en"], ke = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", U = /\{\{\s*(.*?)\s*\}\}/g, Ae = (e, t = {}) => {
	if (!Object.values(t).some(ke)) return {
		isSimple: !0,
		parts: e.replace(U, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(U), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, je = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ie({
		...n,
		value: n.children,
		children: n.children
	})
}, Me = F, Ne = (t, r) => {
	let i = Ae(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Pe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ne(i, e);
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
}, Fe = F, Ie = F, W = /* @__PURE__ */ new Map(), Le = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (W.has(n)) return W.get(n);
	let r = [
		I(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		L,
		Ce(e ?? p.defaultLocale),
		R,
		V(e ?? p.defaultLocale),
		H,
		z,
		B,
		je,
		Me,
		Pe,
		Fe,
		Ie
	];
	return W.set(n, r), r;
}, Re = (e, t) => De(e, t, Le(typeof t == "object" && t ? t.locale : t)), G = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), K = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ze = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = K(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, q = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var J = {
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
}, Be = (e = J) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!q) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Ve = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !q && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: K(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ze(r, e, i));
			} catch {}
		}
	}
}, He = Be(J), Ue = (e, t) => Ve(e, {
	...J,
	isCookieEnabled: t
}), Y = (e, t = p?.locales) => {
	let n = G(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, We = (e, t, n) => (n ?? m?.rewrite, e), X = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? Oe,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), Ge = (e, t) => !!e && (t ?? p.locales).includes(e), Ke = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = X(t);
	return !e || !Ge(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, qe = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), Je = (e, t = p?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = X(n), c = Y(e, a), l = new URL(c, "http://e.com"), u = qe(We(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = Ke(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, Z = (e, t = p?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = X(n), a = G(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${Je(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, Q = t({
	locale: He ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ye = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${A(i)}` : i;
	return c(() => Re(e, i), [e.key, o]);
}, { defaultLocale: Xe, locales: $ } = p ?? {}, Ze = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Q) ?? {};
	return {
		locale: n,
		defaultLocale: Xe,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Ue(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, Qe = () => {
	let e = ee(), [t, n] = l("");
	o(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let r = t ? `${e}${t}` : e;
	return c(() => Y(r), [r]);
}, $e = ({ onChange: e = "replace", onLocaleChange: t, isCookieEnabled: n } = {}) => {
	let { replace: r, push: a } = te(), o = Qe();
	return {
		...Ze({
			onLocaleChange: i((n) => {
				if (!e) return;
				let i = Z(o, n, { currentDomain: void 0 });
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
}, et = (e) => /^https?:\/\//.test(e ?? ""), tt = ({ href: e, children: t, ...n }) => {
	let { locale: r } = $e(), i = et(e.toString()), a = e && !i ? Z(e.toString(), r) : e;
	return d(ne, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	});
};
function nt() {
	let e = Ye(re), t = [
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
						children: t.map((e) => d("li", { children: e.isInternal ? d(tt, {
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
function rt() {
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
function it(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function at({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return s(() => {
		it("AppRoot", n);
	}, [n]), o(() => {
		t && (document.documentElement.lang = t);
	}, [t]), o(() => {
		rt();
	}, []), e;
}
function ot({ children: e }) {
	return d(at, {
		locale: "en",
		children: e
	});
}
function st() {
	return d(ot, { children: d(nt, {}) });
}
export { st as default };
