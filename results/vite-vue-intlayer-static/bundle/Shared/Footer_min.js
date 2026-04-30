import { Fragment as e, computed as t, createBlock as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, defineComponent as o, getCurrentInstance as s, h as c, inject as l, isRef as u, markRaw as d, openBlock as f, ref as p, renderList as m, resolveComponent as ee, shallowRef as h, toDisplayString as g, toValue as _, watch as v, withCtx as y } from "vue";
import { useRoute as te } from "vue-router";
var b = {
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
}, x = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return x({
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
}, ne = "translation", S = "object", C = "array", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: C,
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
					type: S,
					key: r
				}]
			}, i = w(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, T = {
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
}, E = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, D = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (E(e) && E(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : D(e[r], t[r]));
		return n;
	}
	return e;
}, O = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => D(e, t));
}, k = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, A = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? k : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ne,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return O(o, e, t);
	}
}, j = k, M = k, N = k, P = k, F = (e) => k, I = k, L = (e, t = !0) => [
	A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
	j,
	M,
	N,
	F(e ?? T.defaultLocale),
	I,
	P
], R = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), z = (e, t, n = L(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return R(e.content, r, n);
}, B = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => x({
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
}, V = k, H = k, U = k, W = /* @__PURE__ */ new Map(), G = (e, t = !0) => {
	let n = `${e ?? T.defaultLocale}_${t}`;
	if (W.has(n)) return W.get(n);
	let r = [
		A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
		j,
		M,
		F(e ?? T.defaultLocale),
		I,
		P,
		B,
		V,
		H,
		U
	];
	return W.set(n, r), r;
}, K = (e, t) => z(e, t, G(t)), q = Symbol("intlayer"), J = (e, t) => t.reduce((e, t) => e?.[t], e), Y = (e) => typeof e == "object" && !!e, X = (e) => typeof e == "function" || Y(e) && ("render" in e || "setup" in e), Z = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => d(o({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : X(t) ? c(t) : Array.isArray(t) ? c("span", t) : t;
		};
	}
})), re = (e) => new Proxy({}, {
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
}), ie = (e, n) => {
	let r = s() ? l(q) : void 0, i = u(r?.locale) ? r.locale : p(r?.locale ?? T.defaultLocale), a = t(() => (n === void 0 ? void 0 : _(n)) ?? i.value), o = h({});
	v([() => _(e), () => a.value], ([e, t]) => {
		o.value = K(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let c = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => J(o.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let s = e.concat(r), l = J(o.value, s);
			if (l === void 0 || Y(l) && !X(l)) return c(s);
			if (Z(l)) return re(t(() => J(o.value, s)));
			let u = t(() => J(o.value, s));
			return new Proxy(u, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = J(o.value, e);
			return Y(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return c([]);
}, ae = o({
	__name: "Footer",
	setup(e, { expose: n }) {
		n();
		let r = te(), i = t(() => r.params.locale || "en"), { e: a, i: o, b: s, g: c, h: l, d: u, f: d, a: f, c: p } = ie(b), m = {
			route: r,
			currentLocale: i,
			description: a,
			resources: o,
			contactLabel: s,
			github: c,
			methodology: l,
			contributing: u,
			footerText: d,
			appName: f,
			contactEmail: p,
			footerLinks: t(() => [
				{
					label: c,
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: l,
					to: `/${i.value}/about`,
					isInternal: !0
				},
				{
					label: u,
					to: `/${i.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(m, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), m;
	}
}), oe = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, se = { class: "mt-20 border-t border-border bg-card" }, ce = { class: "container py-8" }, le = { class: "grid gap-8 md:grid-cols-3" }, ue = { class: "mb-2 text-sm font-semibold text-foreground" }, de = { class: "text-sm text-muted-foreground" }, fe = { class: "mb-2 text-sm font-semibold text-foreground" }, pe = { class: "space-y-1" }, $ = ["href"], me = { class: "mb-2 text-sm font-semibold text-foreground" }, he = { class: "text-sm text-muted-foreground" }, ge = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function _e(t, o, s, c, l, u) {
	let d = ee("router-link");
	return f(), r("footer", se, [i("div", ce, [i("div", le, [
		i("div", null, [i("h3", ue, g(c.appName), 1), i("p", de, g(c.description), 1)]),
		i("div", null, [i("h3", fe, g(c.resources), 1), i("ul", pe, [(f(!0), r(e, null, m(c.footerLinks, (e) => (f(), r("li", { key: e.label }, [e.isInternal ? (f(), n(d, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: y(() => [a(g(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (f(), r("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, g(e.label), 9, $))]))), 128))])]),
		i("div", null, [i("h3", me, g(c.contactLabel), 1), i("p", he, g(c.contactEmail), 1)])
	]), i("div", ge, g(c.footerText), 1)])]);
}
var ve = oe(ae, [["render", _e], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Footer.vue"]]);
export { ve as default };
