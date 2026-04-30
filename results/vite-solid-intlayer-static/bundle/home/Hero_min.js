import { Dynamic as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, onMount as a, useContext as o } from "solid-js";
var s = {
	key: "hero",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "i18n Benchmark",
				a: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
				e: "View Results",
				c: "Methodology",
				b: "Hero"
			},
			fr: {
				d: "Benchmark i18n",
				a: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
				e: "Voir les résultats",
				c: "Méthodologie",
				b: "Héros"
			},
			es: {
				d: "i18n Benchmark",
				a: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga и la reactividad de la representación.",
				e: "Ver Resultados",
				c: "Metodología",
				b: "Héroe"
			},
			de: {
				d: "i18n Benchmark",
				a: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
				e: "Ergebnisse anzeigen",
				c: "Methodik",
				b: "Hero"
			},
			it: {
				d: "i18n Benchmark",
				a: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
				e: "Visualizza risultati",
				c: "Metodologia",
				b: "Eroe"
			},
			pt: {
				d: "i18n Benchmark",
				a: "Uma aplicação de teste progettada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.",
				e: "Ver Resultados",
				c: "Metodologia",
				b: "Herói"
			},
			zh: {
				d: "i18n Benchmark",
				a: "一个测试应用程序，旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性的真实影响。",
				e: "查看结果",
				c: "方法论",
				b: "主页横幅"
			},
			ja: {
				d: "i18n Benchmark",
				a: "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーションです。",
				e: "結果を表示",
				c: "方法論",
				b: "ヒーロー"
			},
			ko: {
				d: "i18n Benchmark",
				a: "번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위해 설계된 테스트 애플리케이션입니다.",
				e: "결과 표시",
				c: "방법론",
				b: "히어로"
			},
			ru: {
				d: "i18n Benchmark",
				a: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
				e: "Посмотреть результаты",
				c: "Методология",
				b: "Главная"
			}
		}
	}
}, c = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, l = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(l(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
}, u = {
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
}, d = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, f = "translation", p = "object", m = "array", h = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => h(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => h(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: m,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: p,
					key: r
				}]
			}, i = h(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, g = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, _ = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (g(e) && g(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : _(e[r], t[r]));
		return n;
	}
	return e;
}, v = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => _(e, t));
}, y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, b = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: f,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return v(o, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (e, t = !0) => [
	b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	x,
	S,
	C,
	T(e ?? u.defaultLocale),
	E,
	w
], O = (e, t, n = []) => h(e, {
	...t,
	plugins: n
}), k = (e, t, n = D(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return O(e.content, r, n);
}, A = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => c({
		...n,
		value: n.children,
		children: n.children
	})
}, j = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? y : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => c({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : l(e)
	})
}, M = y, N = y, P = y, F = /* @__PURE__ */ new Map(), I = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (F.has(n)) return F.get(n);
	let r = [
		b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		x,
		S,
		T(e ?? u.defaultLocale),
		E,
		w,
		A,
		j,
		M,
		N,
		P
	];
	return F.set(n, r), r;
}, L = (e, t) => k(e, t, I(t)), R = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var z = (e = B) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!R) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, B = {
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
}, V = z(B), H = r({
	locale: () => V ?? u?.defaultLocale,
	setLocale: () => null
}), U = (e, t) => {
	let n = o(H) ?? {};
	return i(() => L(e, t ?? n?.locale?.()));
};
function W(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var G = n("<section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"></h1><p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"></p><div class=\"mt-8 flex justify-center gap-4\"><button type=button class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"></button><button type=button class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent\">");
function K() {
	W(a.value);
	let { d: e, a: n, e: r, c: i, b: a } = U(s);
	return (() => {
		var a = G(), o = a.firstChild, s = o.nextSibling, c = s.nextSibling.firstChild, l = c.nextSibling;
		return t(o, e), t(s, n), t(c, r), t(l, i), a;
	})();
}
export { K as default };
