import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var ee = {
	key: "hero",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				a: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
				e: "View Results",
				d: "Methodology",
				c: "i18n Benchmark"
			},
			fr: {
				a: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
				e: "Voir les Résultats",
				d: "Méthodologie",
				c: "Benchmark i18n"
			},
			es: {
				a: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
				e: "Ver Resultados",
				d: "Metodología",
				c: "Benchmark i18n"
			},
			de: {
				a: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungs-Bibliotheken auf die Bundle-Größe, Ladeleistung und Rendering-Reaktivität zu messen.",
				e: "Ergebnisse anzeigen",
				d: "Methodik",
				c: "i18n Benchmark"
			},
			it: {
				a: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
				e: "Visualizza i risultati",
				d: "Metodologia",
				c: "Benchmark i18n"
			},
			pt: {
				a: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
				e: "Ver Resultados",
				d: "Metodologia",
				c: "Benchmark i18n"
			},
			zh: {
				a: "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
				e: "查看结果",
				d: "方法论",
				c: "i18n 基准测试"
			},
			ja: {
				a: "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、およびレンダリングの反応性に与える実際の影を測定するために設計されたテストアプリケーション。",
				e: "結果を表示",
				d: "方法論",
				c: "i18n ベンチマーク"
			},
			ko: {
				a: "번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
				e: "결과 보기",
				d: "방법론",
				c: "i18n 벤치마크"
			},
			ru: {
				a: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
				e: "Посмотреть результаты",
				d: "Методология",
				c: "i18n Бенчмарк"
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
}, te = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var m = {
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
}, h = (e = m) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!te) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ne = !1, g, re = () => typeof window > "u" ? h(m) : (ne ||= (g = h(m), !0), g), _ = /* @__PURE__ */ new Map(), ie = (e, t) => Object.create(new Proxy(e, {
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
}), ae = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = _.get(t);
	i || (i = /* @__PURE__ */ new Map(), _.set(t, i));
	let a = i.get(r);
	return a || (a = ie(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, oe = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, ae(t)), v = /* @__PURE__ */ new WeakMap(), y = 0, se = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ce = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, le = (e, t, n) => `${e}_${t}_${se(n)}`, ue = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ce && r.clear(), r.set(t, n), n;
}, C = "translation", w = "enumeration", T = "plural", de = "condition", E = "insertion", fe = "object", pe = "array", D = "markdown", O = "html", me = "gender", he = "select", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: fe,
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
}, P = (e, t, n) => {
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
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, I = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[O] : e[D];
}, L = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? O : D;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = L(e, j(I(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ge = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = P(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: C,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, _e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => R(e, i, n, t.plugins, r);
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
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	w,
	de,
	T,
	me,
	he
], ve = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
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
		return !r && ge(i) ? i(n) : i;
	};
}, G = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => ve(e, t, n) : t, K = z, q = z, J = (e) => z, Y = z, ye = (e, t = !0) => [
	B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	V,
	H(e ?? f.defaultLocale),
	U,
	_e,
	J(e ?? f.defaultLocale),
	Y,
	K,
	q
].filter((e) => e !== z), be = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), xe = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = le(r ?? f.defaultLocale, "", n), o = ue(e, a);
	if (o.hit) return o.content;
	let s = n ?? ye(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return be(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, Se = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, Ce = (e, t = {}) => {
	if (!Object.values(t).some(Se)) return {
		isSimple: !0,
		parts: e.replace(Z, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Z), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, we = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => oe({
		value: t.children,
		children: t.children
	})
}, Te = z, Ee = (t, r) => {
	let i = Ce(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, De = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ee(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Oe = z, ke = z, Q = /* @__PURE__ */ new Map(), $ = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		we,
		B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		V,
		H(e ?? f.defaultLocale),
		U,
		J(e ?? f.defaultLocale),
		Y,
		K,
		q,
		Te,
		De,
		Oe,
		ke
	].filter((e) => e !== z);
	return Q.set(n, r), r;
}, Ae = (e, t) => xe(e, t, $(typeof t == "object" && t ? t.locale : t)), je = re, Me = t({
	get locale() {
		return je() ?? f?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ne = (e, t) => {
	let { locale: n, variant: r } = i(Me) ?? {}, a = t ?? n, o = a;
	return s(() => Ae(e, a), [e.key, o]);
};
function Pe() {
	let e = Ne(ee);
	return d("section", {
		className: "mb-16 text-center",
		children: [
			u("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: e.c
			}),
			u("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: e.a
			}),
			d("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [u("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e.e
				}), u("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: e.d
				})]
			})
		]
	});
}
function Fe() {
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
function Ie(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Le({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Ie("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Fe();
	}, []), e;
}
function Re({ children: e }) {
	return u(Le, {
		locale: "en",
		children: e
	});
}
function ze() {
	return u(Re, { children: u(Pe, {}) });
}
export { ze as default };
