import { Fragment as e, Profiler as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { usePathname as m, useRouter as h } from "next/navigation.js";
import ee from "next/link";
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
}, v = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : f(d, { children: e });
	return new Proxy(r, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, y = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: n } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let n = t.map((e, t) => {
				let n = y(e);
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
			let n = y(t);
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
}, ne = "translation", b = "insertion", re = "object", ie = "array", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
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
		n[r] = x(e[r], i);
	}
	return n;
}, ae = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, C = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (S(e) && S(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : C(e[r], t[r]));
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => C(e, t));
}, w = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", se = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => w ? T : {
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
}, D = T, O = T, ce = se ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
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
}, k = T, A = (e) => T, j = T, le = (e, t = !0) => [
	E(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	D,
	O,
	ce,
	A(e ?? g.defaultLocale),
	j,
	k
].filter(Boolean), ue = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), M = (e, t, n = le(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return ue(e.content, r, n);
}, N = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", P = /\{\{\s*(.*?)\s*\}\}/g, F = (e, t = {}) => {
	if (!Object.values(t).some(N)) return {
		isSimple: !0,
		parts: e.replace(P, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(P), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, I = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", z = I ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => v({
		...n,
		value: n.children,
		children: n.children
	})
}, B = L ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => v({
		...n,
		value: "[[react-element]]",
		children: y(e)
	})
}, V = (t, n) => {
	let i = F(t, n);
	return i.isSimple ? i.parts : r(e, null, ...i.parts.map((t, n) => r(e, { key: n }, t)));
}, H = R ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
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
}, U = T, de = T, fe = (e, t = !0) => [
	E(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	D,
	O,
	A(e ?? g.defaultLocale),
	j,
	k,
	z,
	B,
	H,
	U,
	de
].filter(Boolean), pe = (e, t) => M(e, t, fe(t)), W = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), G = (e, t = g?.locales) => {
	let n = W(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://example.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://example.com", "");
}, me = ["en"], K = (e = {}) => ({
	defaultLocale: g?.defaultLocale ?? "en",
	mode: _?.mode ?? "prefix-no-default",
	locales: g?.locales ?? me,
	rewrite: _?.rewrite,
	domains: _?.domains,
	...e
}), he = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = K(t);
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
}, ge = (e, t, n) => e, _e = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), q = (e, t = g?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s, currentDomain: c } = K(n), l = G(e, a), u = W(l), d = u ? new URL(l) : new URL(l, "http://example.com"), f = _e(ge(d.pathname, void 0, void 0), t, void 0).path, p = u ? `${d.protocol}//${d.host}` : "", { prefix: m } = he(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), h = `/${m}${f}`.replace(/\/+/g, "/");
	return h.length > 1 && h.endsWith("/") && (h = h.slice(0, -1)), `${p}${h}${d.search}${d.hash}`;
}, ve = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, J = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var ye = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, be = (e) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, xe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ye(r, e, i));
			} catch {}
		}
	}
}, Y = {
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
}, X = be(Y), Z = (e, t) => xe(e, {
	...Y,
	isCookieEnabled: t
}), Se = () => {
	let { locale: e } = o(Q) ?? {}, t = l(null);
	s(() => {}, []), s(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, Ce = ({ children: e }) => (Se(), e), we = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = n({
	locale: X ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Te = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: o, defaultLocale: c } = g ?? {}, [l, d] = u(e ?? X ?? t ?? c);
	s(() => {
		e && e !== l && d(e);
	}, [e]), s(() => {
		we();
	}, []);
	let p = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!o?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), Z(e, a);
		}
	}), m = ve(l);
	return f(Q.Provider, {
		value: {
			locale: m,
			setLocale: p,
			disableEditor: i
		},
		children: n
	});
}, Ee = ({ children: e, ...t }) => p(Te, {
	...t,
	children: [f(Ce, {}), e]
}), De = (e, t) => {
	let { locale: n } = o(Q) ?? {};
	return c(() => pe(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, Oe = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { defaultLocale: n, locales: r } = g ?? {}, { locale: i, setLocale: s, isCookieEnabled: c } = o(Q) ?? {};
	return {
		locale: i,
		defaultLocale: n,
		availableLocales: r,
		setLocale: a((n) => {
			if (!r?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			s(n), Z(n, e ?? c ?? !0), t?.(n);
		}, [
			r,
			t,
			s,
			e
		])
	};
}, ke = (e) => f(Ee, { ...e }), Ae = () => {
	let e = m(), [t, n] = u(e);
	return s(() => {
		let t = typeof window < "u" ? window.location.search : "";
		n(t ? `${e}${t}` : e);
	}, [e]), c(() => G(t), [t]);
}, $ = ({ onChange: e = "replace" } = {}) => {
	let { replace: t, push: n } = h(), r = Ae();
	return {
		...Oe({ onLocaleChange: a((i) => {
			if (!e) return;
			let a = q(r, i, { currentDomain: void 0 });
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
}, je = (e) => /^https?:\/\//.test(e ?? ""), Me = ({ href: e, children: t, ...n }) => {
	let { locale: r } = $(), i = je(e.toString());
	return f(ee, {
		href: e && !i ? q(e.toString(), r) : e,
		...n,
		children: t
	});
};
//#endregion
//#region src/components/Footer.tsx
function Ne() {
	let e = De(te), t = [
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
	return f("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: p("div", {
			className: "container py-8",
			children: [p("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}), f("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					})] }),
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}), f("ul", {
						className: "space-y-1",
						children: t.map((e) => f("li", { children: e.isInternal ? f(Me, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : f("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label.value))
					})] }),
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}), f("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					})] })
				]
			}), f("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			})]
		})
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function Pe() {
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
function Fe(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region src/components/AppProviders.tsx
function Ie({ children: e, locale: n }) {
	return s(() => {
		n && (document.documentElement.lang = n);
	}, [n]), s(() => {
		Pe();
	}, []), f(t, {
		id: "AppRoot",
		onRender: Fe,
		children: f(ke, {
			locale: n,
			children: e
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Le({ children: e }) {
	return f(Ie, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/Footer.wrapper.tsx
function Re() {
	return f(Le, { children: f(Ne, {}) });
}
//#endregion
export { Re as default };
