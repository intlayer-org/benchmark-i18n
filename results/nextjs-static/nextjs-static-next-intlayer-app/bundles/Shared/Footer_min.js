import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { usePathname as p, useRouter as m } from "next/navigation.js";
import h from "next/link";
var ee = {
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
	let i = r(e) ? e : /* @__PURE__ */ d(u, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, y = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = y(e);
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
	return n(t ?? "span", r, ...r.children);
}, te = "translation", b = "insertion", ne = "object", re = "array", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: re,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ne,
				key: r
			}]
		};
		n[r] = x(e[r], i);
	}
	return n;
}, ie = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = (e) => {
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
}, ae = (e, t, n) => {
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
}, oe = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", w = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => oe ? T : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return ae(a, e, t);
	}
}, D = T, O = T, se = w ? T : {
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
					let a = ie(i, e);
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
}, k = T, A = (e) => T, j = T, ce = (e, t = !0) => [
	E(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	D,
	O,
	se,
	A(e ?? g.defaultLocale),
	j,
	k
].filter(Boolean), M = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), N = (e, t, n = ce(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return M(e.content, r, n);
}, P = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", F = /\{\{\s*(.*?)\s*\}\}/g, I = (e, t = {}) => {
	if (!Object.values(t).some(P)) return {
		isSimple: !0,
		parts: e.replace(F, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(F), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, L = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-BJew_ddL.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-ytPPxvV0.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var B = L ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => v({
		...n,
		value: n.children,
		children: n.children
	})
}, V = R ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => v({
		...n,
		value: "[[react-element]]",
		children: y(e)
	})
}, H = (t, r) => {
	let i = I(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, U = z ? T : {
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
					let a = H(i, e);
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
}, W = T, G = T, le = (e, t = !0) => [
	E(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	D,
	O,
	A(e ?? g.defaultLocale),
	j,
	k,
	B,
	V,
	U,
	W,
	G
].filter(Boolean), ue = (e, t) => N(e, t, le(t)), K = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), q = (e, t = g?.locales) => {
	let n = K(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://example.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://example.com", "");
}, de = ["en"], J = (e = {}) => ({
	defaultLocale: g?.defaultLocale ?? "en",
	mode: _?.mode ?? "prefix-no-default",
	locales: g?.locales ?? de,
	rewrite: _?.rewrite,
	domains: _?.domains,
	...e
}), fe = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = J(t);
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
}, pe = (e, t, n) => e, me = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), Y = (e, t = g?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s, currentDomain: c } = J(n), l = q(e, a), u = K(l), d = u ? new URL(l) : new URL(l, "http://example.com"), f = me(pe(d.pathname, void 0, void 0), t, void 0).path, p = u ? `${d.protocol}//${d.host}` : "", { prefix: m } = fe(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), h = `/${m}${f}`.replace(/\/+/g, "/");
	return h.length > 1 && h.endsWith("/") && (h = h.slice(0, -1)), `${p}${h}${d.search}${d.hash}`;
}, X = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var he = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ge = (e) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!X) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, _e = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !X && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
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
}, Z = {
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
}, ve = ge(Z), ye = (e, t) => _e(e, {
	...Z,
	isCookieEnabled: t
}), Q = t({
	locale: ve ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), be = (e, t) => {
	let { locale: n } = o(Q) ?? {};
	return c(() => ue(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, $ = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
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
			s(n), ye(n, e ?? c ?? !0), t?.(n);
		}, [
			r,
			t,
			s,
			e
		])
	};
}, xe = () => {
	let e = p(), [t, n] = l(e);
	return s(() => {
		let t = typeof window < "u" ? window.location.search : "";
		n(t ? `${e}${t}` : e);
	}, [e]), c(() => q(t), [t]);
}, Se = ({ onChange: e = "replace" } = {}) => {
	let { replace: t, push: n } = m(), r = xe();
	return {
		...$({ onLocaleChange: a((i) => {
			if (!e) return;
			let a = Y(r, i, { currentDomain: void 0 });
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
}, Ce = (e) => /^https?:\/\//.test(e ?? ""), we = ({ href: e, children: t, ...n }) => {
	let { locale: r } = Se(), i = Ce(e.toString());
	return /* @__PURE__ */ d(h, {
		href: e && !i ? Y(e.toString(), r) : e,
		...n,
		children: t
	});
};
//#endregion
//#region src/components/Footer.tsx
function Te() {
	let e = be(ee), t = [
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
	return /* @__PURE__ */ d("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ f("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ f("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ f("div", { children: [/* @__PURE__ */ d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.g
					}), /* @__PURE__ */ d("p", {
						className: "text-sm text-muted-foreground",
						children: e.a
					})] }),
					/* @__PURE__ */ f("div", { children: [/* @__PURE__ */ d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.i
					}), /* @__PURE__ */ d("ul", {
						className: "space-y-1",
						children: t.map((e) => /* @__PURE__ */ d("li", { children: e.isInternal ? /* @__PURE__ */ d(we, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : /* @__PURE__ */ d("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label.value))
					})] }),
					/* @__PURE__ */ f("div", { children: [/* @__PURE__ */ d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e.c
					}), /* @__PURE__ */ d("p", {
						className: "text-sm text-muted-foreground",
						children: e.d
					})] })
				]
			}), /* @__PURE__ */ d("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e.b
			})]
		})
	});
}
//#endregion
export { Te as default };
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
