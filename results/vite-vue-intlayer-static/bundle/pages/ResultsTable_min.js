import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, onBeforeMount as u, onMounted as d, openBlock as f, ref as p, renderList as m, shallowRef as ee, toDisplayString as h, toValue as g, watch as _ } from "vue";
var v = {
	key: "results-table",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				c: "Sample Results",
				a: {
					c: "Library",
					a: "Bundle Size",
					d: "Lookup Time",
					b: "Lazy Loading"
				},
				d: "Yes",
				b: "Manual"
			},
			fr: {
				c: "Exemples de résultats",
				a: {
					c: "Bibliothèque",
					a: "Taille du bundle",
					d: "Temps de recherche",
					b: "Chargement différé"
				},
				d: "Oui",
				b: "Manuel"
			},
			es: {
				c: "Resultados de muestra",
				a: {
					c: "Biblioteca",
					a: "Tamaño del paquete",
					d: "Tiempo de búsqueda",
					b: "Carga diferida"
				},
				d: "Sí",
				b: "Manual"
			},
			de: {
				c: "Beispielergebnisse",
				a: {
					c: "Bibliothek",
					a: "Bundle-Größe",
					d: "Lookup-Zeit",
					b: "Lazy Loading"
				},
				d: "Ja",
				b: "Manuell"
			},
			it: {
				c: "Risultati di esempio",
				a: {
					c: "Libreria",
					a: "Dimensioni del bundle",
					d: "Tempo di ricerca",
					b: "Caricamento lazy"
				},
				d: "Sì",
				b: "Manuale"
			},
			pt: {
				c: "Resultados de Amostra",
				a: {
					c: "Biblioteca",
					a: "Tamanho do bundle",
					d: "Tempo de busca",
					b: "Carregamento preguiçoso"
				},
				d: "Sim",
				b: "Manual"
			},
			zh: {
				c: "样本结果",
				a: {
					c: "库",
					a: "捆绑包大小",
					d: "查找时间",
					b: "延迟加载"
				},
				d: "是",
				b: "手动"
			},
			ja: {
				c: "サンプル結果",
				a: {
					c: "ライブラリ",
					a: "バンドルサイズ",
					d: "ルックアップ時間",
					b: "遅延ロード"
				},
				d: "はい",
				b: "手動"
			},
			ko: {
				c: "샘플 결과",
				a: {
					c: "라이브러리",
					a: "번들 크기",
					d: "조회 시간",
					b: "지연 로딩"
				},
				d: "예",
				b: "수동"
			},
			ru: {
				c: "Примеры результатов",
				a: {
					c: "Библиотека",
					a: "Размер бандла",
					d: "Время поиска",
					b: "Ленивая загрузка"
				},
				d: "Да",
				b: "Вручную"
			}
		}
	}
}, y = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return y({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), l(o);
}, b = "translation", x = "object", te = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: te,
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
					type: x,
					key: r
				}]
			}, i = S(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, C = {
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
}, w = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, T = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (w(e) && w(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : T(e[r], t[r]));
		return n;
	}
	return e;
}, E = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => T(e, t));
}, D = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, O = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? D : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: b,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return E(o, e, t);
	}
}, k = D, A = D, j = D, M = D, N = (e) => D, P = D, F = (e, t = !0) => [
	O(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	k,
	A,
	j,
	N(e ?? C.defaultLocale),
	P,
	M
], I = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), L = (e, t, n = F(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return I(e.content, r, n);
}, R = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => y({
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
		return l(a);
	}
}, z = D, B = D, V = D, H = /* @__PURE__ */ new Map(), U = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (H.has(n)) return H.get(n);
	let r = [
		O(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		k,
		A,
		N(e ?? C.defaultLocale),
		P,
		M,
		R,
		z,
		B,
		V
	];
	return H.set(n, r), r;
}, W = (e, t) => L(e, t, U(t)), G = Symbol("intlayer"), K = (e, t) => t.reduce((e, t) => e?.[t], e), q = (e) => typeof e == "object" && !!e, J = (e) => typeof e == "function" || q(e) && ("render" in e || "setup" in e), Y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, X = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : J(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Z = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return X(() => e.value);
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
}), Q = (e, n) => {
	let r = a() ? s(G) : void 0, i = c(r?.locale) ? r.locale : p(r?.locale ?? C.defaultLocale), o = t(() => (n === void 0 ? void 0 : g(n)) ?? i.value), l = ee({});
	_([() => g(e), () => o.value], ([e, t]) => {
		l.value = W(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => K(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return X(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = K(l.value, o);
			if (s === void 0 || q(s) && !J(s)) return u(o);
			if (Y(s)) return Z(t(() => K(l.value, o)));
			let c = t(() => K(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = K(l.value, e);
			return q(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
};
function ne(e) {
	u(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), d(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var re = i({
	__name: "ResultsTable",
	setup(e, { expose: t }) {
		t(), ne("ResultsTable");
		let { c: n, a: r, yes1: i, b: a, d: o } = Q(v), s = {
			title: n,
			columns: r,
			yes1: i,
			manual: a,
			yes: o,
			results: [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: o
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: a
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: i
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: "Built-in"
				}
			]
		};
		return Object.defineProperty(s, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), s;
	}
}), ie = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ae = { class: "mb-6 text-2xl font-bold text-foreground" }, oe = { class: "overflow-x-auto rounded-lg border border-border" }, se = { class: "w-full text-sm" }, ce = { class: "bg-muted" }, le = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, ue = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, de = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, fe = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, pe = { class: "px-4 py-3 font-medium text-foreground" }, $ = { class: "px-4 py-3 text-muted-foreground" }, me = { class: "px-4 py-3 text-muted-foreground" }, he = { class: "px-4 py-3 text-muted-foreground" };
function ge(t, i, a, o, s, c) {
	return f(), n("section", null, [r("h2", ae, h(o.title), 1), r("div", oe, [r("table", se, [r("thead", ce, [r("tr", null, [
		r("th", le, h(o.columns.library), 1),
		r("th", ue, h(o.columns.bundleSize), 1),
		r("th", de, h(o.columns.lookupTime), 1),
		r("th", fe, h(o.columns.lazyLoading), 1)
	])]), r("tbody", null, [(f(), n(e, null, m(o.results, (e) => r("tr", {
		key: e.lib,
		class: "border-t border-border"
	}, [
		r("td", pe, h(e.lib), 1),
		r("td", $, h(e.size), 1),
		r("td", me, h(e.time), 1),
		r("td", he, h(e.lazy), 1)
	])), 64))])])])]);
}
var _e = ie(re, [["render", ge], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/home/ResultsTable.vue"]]);
export { _e as default };
