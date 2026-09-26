import { insert as e, template as t } from "solid-js/web";
import { createContext as n, createMemo as r, lazy as i, onMount as a, useContext as o } from "solid-js";
var s = {
	key: "hero",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "i18n Benchmark",
				a: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
				e: "View Results",
				c: "Methodology"
			},
			fr: {
				d: "Benchmark i18n",
				a: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
				e: "Voir les résultats",
				c: "Méthodologie"
			},
			es: {
				d: "i18n Benchmark",
				a: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga и la reactividad de la representación.",
				e: "Ver Resultados",
				c: "Metodología"
			},
			de: {
				d: "i18n Benchmark",
				a: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
				e: "Ergebnisse anzeigen",
				c: "Methodik"
			},
			it: {
				d: "i18n Benchmark",
				a: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
				e: "Visualizza risultati",
				c: "Metodologia"
			},
			pt: {
				d: "i18n Benchmark",
				a: "Uma aplicação de teste progettada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.",
				e: "Ver Resultados",
				c: "Metodologia"
			},
			zh: {
				d: "i18n Benchmark",
				a: "一个测试应用程序，旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性的真实影响。",
				e: "查看结果",
				c: "方法论"
			},
			ja: {
				d: "i18n Benchmark",
				a: "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーションです。",
				e: "結果を表示",
				c: "方法論"
			},
			ko: {
				d: "i18n Benchmark",
				a: "번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위해 설계된 테스트 애플리케이션입니다.",
				e: "결과 표시",
				c: "방법론"
			},
			ru: {
				d: "i18n Benchmark",
				a: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
				e: "Посмотреть результаты",
				c: "Методология"
			}
		}
	}
}, c = {
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
}, l = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, u = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var d = {
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
}, f = (e = d) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!u) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ee = !1, p, m = () => typeof window > "u" ? f(d) : (ee ||= (p = f(d), !0), p), h = /* @__PURE__ */ new Map(), g = (e, t) => Object.create(new Proxy(e, {
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
}), _ = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = h.get(t);
	i || (i = /* @__PURE__ */ new Map(), h.set(t, i));
	let a = i.get(r);
	return a || (a = g(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, v = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, _(t, Array.prototype)), r;
}, y = /* @__PURE__ */ new WeakMap(), b = 0, x = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, S = 256, C = /* @__PURE__ */ new WeakMap(), w = (e) => typeof e == "object" && !!e, T = (e, t, n) => `${e}_${t}_${x(n)}`, E = (e, t) => {
	if (!w(e)) return { hit: !1 };
	let n = C.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, D = (e, t, n) => {
	if (!w(e)) return n;
	let r = C.get(e);
	return r || (r = /* @__PURE__ */ new Map(), C.set(e, r)), r.size >= S && r.clear(), r.set(t, n), n;
}, O = "translation", k = "object", A = "array", j = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, M);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, j(t, e, {
		type: A,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: k,
			key: r
		};
		if (t.eager) {
			n[r] = M(e[r], j(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = M(e[r], j(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, N = (e) => {
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
}, F = (e, t, n) => {
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
}, I = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, L = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? I : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = F(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: O,
				key: e
			}]
		});
	}
}, R = I, z = (e) => I, B = I, V = I, H = I, U = I, W = (e) => I, G = I, K = (e, t = !0) => [
	L(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	R,
	z(e ?? c.defaultLocale),
	B,
	V,
	W(e ?? c.defaultLocale),
	G,
	H,
	U
].filter((e) => e !== I), q = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), Y = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = T(r ?? c.defaultLocale, "", n), o = E(e, a);
	if (o.hit) return o.content;
	let s = n ?? K(r), l = e, u = (e) => {
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
			return q(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return l === null ? D(e, a, null) : Array.isArray(l) ? D(e, a, l.map(u)) : D(e, a, u(l));
}, X = null, Z = null;
X?.catch(() => {}), Z?.catch(() => {});
var Q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => v({
		value: t.children,
		children: t.children
	})
}, te = I, ne = I;
i(() => X.then((e) => ({ default: e.MarkdownRenderer }))), i(() => X.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var re = I;
i(() => Z.then((e) => ({ default: e })));
var ie = I, $ = /* @__PURE__ */ new Map(), ae = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Q,
		L(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		R,
		z(e ?? c.defaultLocale),
		B,
		W(e ?? c.defaultLocale),
		G,
		H,
		U,
		te,
		ne,
		re,
		ie
	].filter((e) => e !== I);
	return $.set(n, r), r;
}, oe = (e, t) => Y(e, t, ae(typeof t == "object" && t ? t.locale : t)), se = m, ce = n({
	locale: () => se() ?? c?.defaultLocale,
	setLocale: () => null
}), le = Symbol("LOADABLE_SETTLED_VALUE"), ue = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[le];
}, de = (e, t) => {
	let n = o(ce) ?? {}, i = r(() => {
		let r = n?.locale?.();
		return oe(ue(e) ?? e, t ?? r);
	});
	return new Proxy(i, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
};
function fe(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var pe = t("<section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"></h1><p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"></p><div class=\"mt-8 flex justify-center gap-4\"><button type=button class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"></button><button type=button class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent\">");
function me() {
	fe("Hero");
	let { d: t, a: n, e: r, c: i } = de(s);
	return (() => {
		var a = pe(), o = a.firstChild, s = o.nextSibling, c = s.nextSibling.firstChild, l = c.nextSibling;
		return e(o, t), e(s, n), e(c, r), e(l, i), a;
	})();
}
export { me as default };
