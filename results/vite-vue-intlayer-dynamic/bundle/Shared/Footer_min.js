import { Fragment as e, computed as t, createBlock as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, defineComponent as o, getCurrentInstance as s, h as c, inject as l, isRef as u, markRaw as d, openBlock as f, ref as p, renderList as m, resolveComponent as ee, shallowRef as h, toDisplayString as g, toValue as _, unref as v, watch as y, withCtx as te } from "vue";
import { useRoute as b } from "vue-router";
var x = {
	key: "footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				e: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				i: "Resources",
				b: "Contact",
				g: "GitHub",
				h: "Methodology",
				d: "Contributing",
				f: "i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			fr: {
				e: "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				i: "Ressources",
				b: "Contact",
				g: "GitHub",
				h: "Méthodologie",
				d: "Contribuer",
				f: "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et Vue Router.",
				a: "Benchmark i18n",
				c: "contact@intlayer.org"
			},
			es: {
				e: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
				i: "Recursos",
				b: "Contacto",
				g: "GitHub",
				h: "Metodología",
				d: "Contribuir",
				f: "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			de: {
				e: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
				i: "Ressourcen",
				b: "Kontakt",
				g: "GitHub",
				h: "Methodik",
				d: "Mitwirken",
				f: "i18n Benchmark – Open-Source-Projekt. Erstellt mit Vue, Vite & Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			it: {
				e: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				i: "Risorse",
				b: "Contatto",
				g: "GitHub",
				h: "Metodologia",
				d: "Contribuire",
				f: "i18n Benchmark — Progetto open-source. Costruito con Vue, Vite e Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			pt: {
				e: "Um aplicativo de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
				i: "Recursos",
				b: "Contato",
				g: "GitHub",
				h: "Metodologia",
				d: "Contribuindo",
				f: "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			zh: {
				e: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
				i: "资源",
				b: "联系我们",
				g: "GitHub",
				h: "方法论",
				d: "贡献",
				f: "i18n 基准测试——开源项目。使用 Vue、Vite 和 Vue Router 构建。",
				a: "i18n 基准测试",
				c: "contact@intlayer.org"
			},
			ja: {
				e: "バンドルサイズ、ロード時間、アプリの反応性に与える国際化ライブラリの実際の影響を測定するためのオープンソースのテストアプリケーション。",
				i: "リソース",
				b: "お問い合わせ",
				g: "GitHub",
				h: "方法論",
				d: "貢献",
				f: "i18n ベンチマーク — オープンソースプロジェクト。Vue、Vite、Vue Routerで構築されています。",
				a: "i18n ベンチマーク",
				c: "contact@intlayer.org"
			},
			ko: {
				e: "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
				i: "리소스",
				b: "연락처",
				g: "GitHub",
				h: "방법론",
				d: "기여하기",
				f: "i18n 벤치마크 — 오픈 소스 프로젝트. Vue, Vite 및 Vue Router로 제작되었습니다.",
				a: "i18n 벤치마크",
				c: "contact@intlayer.org"
			},
			ru: {
				e: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
				i: "Ресурсы",
				b: "Контакт",
				g: "GitHub",
				h: "Методология",
				d: "Участие в проекте",
				f: "i18n Benchmark — проект с открытым исходным кодом. Построен на Vue, Vite и Vue Router.",
				a: "i18n Бенчмарк",
				c: "contact@intlayer.org"
			}
		}
	}
}, S = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = p(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return S({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), d(o);
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
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: w,
					key: r
				}]
			}, i = E(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, D = {
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
}, O = (e) => {
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
}, A = (e, t, n) => {
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
}, j = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, M = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? j : {
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
		return A(o, e, t);
	}
}, N = j, P = j, ne = j, F = j, I = (e) => j, L = j, R = (e, t = !0) => [
	M(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	N,
	P,
	ne,
	I(e ?? D.defaultLocale),
	L,
	F
], z = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), B = (e, t, n = R(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return z(e.content, r, n);
}, V = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => S({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return d(a);
	}
}, H = j, U = j, W = j, G = /* @__PURE__ */ new Map(), K = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		M(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		N,
		P,
		I(e ?? D.defaultLocale),
		L,
		F,
		V,
		H,
		U,
		W
	];
	return G.set(n, r), r;
}, q = (e, t) => B(e, t, K(t)), J = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), re = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => d(o({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? c(t) : Array.isArray(t) ? c("span", t) : t;
		};
	}
})), ie = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), ae = (e, n) => {
	let r = s() ? l(J) : void 0, i = u(r?.locale) ? r.locale : p(r?.locale ?? D.defaultLocale), a = t(() => (n === void 0 ? void 0 : _(n)) ?? i.value), o = h({});
	y([() => _(e), () => a.value], ([e, t]) => {
		o.value = q(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let c = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => Y(o.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let s = e.concat(r), l = Y(o.value, s);
			if (l === void 0 || X(l) && !Z(l)) return c(s);
			if (re(l)) return ie(t(() => Y(o.value, s)));
			let u = t(() => Y(o.value, s));
			return new Proxy(u, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(o.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return c([]);
}, oe = { class: "mt-20 border-t border-border bg-card" }, $ = { class: "container py-8" }, se = { class: "grid gap-8 md:grid-cols-3" }, ce = { class: "mb-2 text-sm font-semibold text-foreground" }, le = { class: "text-sm text-muted-foreground" }, ue = { class: "mb-2 text-sm font-semibold text-foreground" }, de = { class: "space-y-1" }, fe = ["href"], pe = { class: "mb-2 text-sm font-semibold text-foreground" }, me = { class: "text-sm text-muted-foreground" }, he = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, ge = o({
	__name: "Footer",
	setup(o) {
		let s = b(), c = t(() => s.params.locale || "en"), { e: l, i: u, b: d, g: p, h, d: _, f: y, a: S, c: C } = ae(x), w = t(() => [
			{
				label: p,
				href: "https://github.com/intlayer-org/benchmark-i18n",
				isInternal: !1
			},
			{
				label: h,
				to: `/${c.value}/about`,
				isInternal: !0
			},
			{
				label: _,
				to: `/${c.value}/contact`,
				isInternal: !0
			}
		]);
		return (t, o) => {
			let s = ee("router-link");
			return f(), r("footer", oe, [i("div", $, [i("div", se, [
				i("div", null, [i("h3", ce, g(v(S)), 1), i("p", le, g(v(l)), 1)]),
				i("div", null, [i("h3", ue, g(v(u)), 1), i("ul", de, [(f(!0), r(e, null, m(w.value, (e) => (f(), r("li", { key: e.label }, [e.isInternal ? (f(), n(s, {
					key: 0,
					to: e.to,
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, {
					default: te(() => [a(g(e.label), 1)]),
					_: 2
				}, 1032, ["to"])) : (f(), r("a", {
					key: 1,
					href: e.href,
					target: "_blank",
					rel: "noreferrer",
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, g(e.label), 9, fe))]))), 128))])]),
				i("div", null, [i("h3", pe, g(v(d)), 1), i("p", me, g(v(C)), 1)])
			]), i("div", he, g(v(y)), 1)])]);
		};
	}
});
export { ge as default };
