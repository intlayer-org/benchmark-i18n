import { createContext as e, isValidElement as t, useContext as n, useMemo as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
var s = {
	key: "hero",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				c: "i18n Benchmark",
				a: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
				d: "View Results",
				b: "Methodology"
			},
			fr: {
				c: "Benchmark i18n",
				a: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
				d: "Voir les résultats",
				b: "Méthodologie"
			},
			es: {
				c: "i18n Benchmark",
				a: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga и la reactividad de la representación.",
				d: "Ver Resultados",
				b: "Metodología"
			},
			de: {
				c: "i18n Benchmark",
				a: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
				d: "Ergebnisse anzeigen",
				b: "Methodik"
			},
			it: {
				c: "i18n Benchmark",
				a: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
				d: "Visualizza risultati",
				b: "Metodologia"
			},
			pt: {
				c: "i18n Benchmark",
				a: "Uma aplicação de teste progettada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.",
				d: "Ver Resultados",
				b: "Metodologia"
			},
			zh: {
				c: "i18n Benchmark",
				a: "一个测试应用程序，旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性的真实影响。",
				d: "查看结果",
				b: "方法论"
			},
			ja: {
				c: "i18n Benchmark",
				a: "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーションです。",
				d: "結果を表示",
				b: "方法論"
			},
			ko: {
				c: "i18n Benchmark",
				a: "번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위해 설계된 테스트 애플리케이션입니다.",
				d: "결과 표시",
				b: "방법론"
			},
			ru: {
				c: "i18n Benchmark",
				a: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
				d: "Посмотреть результаты",
				b: "Методология"
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
}, f = ((e = d) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!u) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(d), p = e({
	locale: f ?? c?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), m = /* @__PURE__ */ new WeakMap(), h = 0, g = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, _ = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, b = (e, t, n) => `${e}_${t}_${g(n)}`, x = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= _ && r.clear(), r.set(t, n), n;
}, C = "translation", w = "object", T = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: T,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: w,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ee = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, te = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, P = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, F = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, I = (e, t) => {
	if (!P(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ee(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => te(e, n, t, s)).map((t) => F(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, L = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, R = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (z(e) && z(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : B(e[r], t[r]));
		return n;
	}
	return e;
}, V = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => B(e, t));
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: C,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return V(o, e, t);
	}
}, W = H, G = (e) => H, K = H, q = H, J = H, Y = H, X = (e) => H, Z = H, ne = (e, t = !0) => [
	U(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	W,
	K,
	q,
	X(e ?? c.defaultLocale),
	Z,
	J,
	Y
], re = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), ie = (e, t, n) => {
	let { locale: r, selector: i } = L(t), a = b(r ?? c.defaultLocale, R(i), n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? ne(r), l = I(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return re(e.content, t, s);
	};
	return l === null ? S(e, a, null) : Array.isArray(l) ? S(e, a, l.map(u)) : S(e, a, u(l));
}, ae = ({ children: e, value: n, additionalProps: r }) => {
	let o = t(e) ? e : a(i, { children: e });
	return new Proxy(o, { get(e, t, i) {
		if (t === "value") return n;
		if (t === Symbol.toPrimitive) return () => n ?? "";
		if (t === "toString") return () => String(n ?? "");
		if (t === "valueOf") return () => n;
		if (r && Object.hasOwn(r, t)) return r[t];
		if (n != null && typeof t == "string" && t !== "constructor" && !(t in e)) {
			let e = Object(n);
			if (t in e) {
				let r = e[t];
				return typeof r == "function" ? r.bind(n) : r;
			}
		}
		return Reflect.get(e, t, i);
	} });
}, oe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ae({
		...n,
		value: n.children,
		children: n.children
	})
}, se = H, Q = H, ce = H, le = H, $ = /* @__PURE__ */ new Map(), ue = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		U(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		W,
		G(e ?? c.defaultLocale),
		K,
		X(e ?? c.defaultLocale),
		Z,
		J,
		Y,
		oe,
		se,
		Q,
		ce,
		le
	];
	return $.set(n, r), r;
}, de = (e, t) => ie(e, t, ue(typeof t == "object" && t ? t.locale : t)), fe = (e, t) => {
	let { locale: i, variant: a } = n(p) ?? {}, o = t ?? i, s = typeof o == "object" && o ? `${o.locale ?? ""}|${R(o)}` : o;
	return r(() => de(e, o), [e.key, s]);
};
function pe() {
	let { c: e, a: t, d: n, b: r } = fe(s);
	return o("section", {
		className: "mb-16 text-center",
		children: [
			a("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: e
			}),
			a("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: t
			}),
			o("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [a("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
					children: n
				}), a("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent",
					children: r
				})]
			})
		]
	});
}
export { pe as default };
