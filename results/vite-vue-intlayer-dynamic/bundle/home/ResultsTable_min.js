import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, onBeforeMount as u, onMounted as d, openBlock as f, ref as p, renderList as m, shallowRef as h, toDisplayString as g, toValue as _, unref as v, watch as ee } from "vue";
var y = {
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
}, b = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return b({
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
}, x = "translation", S = "object", C = "array", w = (e, t) => {
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
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : D(e[r], t[r]));
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
					type: x,
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
		let r = (e) => b({
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
}, K = (e, t) => z(e, t, G(t)), q = Symbol("intlayer"), J = (e, t) => t.reduce((e, t) => e?.[t], e), Y = (e) => typeof e == "object" && !!e, X = (e) => typeof e == "function" || Y(e) && ("render" in e || "setup" in e), Z = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : X(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), $ = (e) => new Proxy({}, {
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
}), te = (e, n) => {
	let r = a() ? s(q) : void 0, i = c(r?.locale) ? r.locale : p(r?.locale ?? T.defaultLocale), o = t(() => (n === void 0 ? void 0 : _(n)) ?? i.value), l = h({});
	ee([() => _(e), () => o.value], ([e, t]) => {
		l.value = K(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => J(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = J(l.value, o);
			if (s === void 0 || Y(s) && !X(s)) return u(o);
			if (Z(s)) return $(t(() => J(l.value, o)));
			let c = t(() => J(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = J(l.value, e);
			return Y(t) ? Reflect.ownKeys(t) : [];
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
var re = { class: "mb-6 text-2xl font-bold text-foreground" }, ie = { class: "overflow-x-auto rounded-lg border border-border" }, ae = { class: "w-full text-sm" }, oe = { class: "bg-muted" }, se = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, ce = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, le = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, ue = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, de = { class: "px-4 py-3 font-medium text-foreground" }, fe = { class: "px-4 py-3 text-muted-foreground" }, pe = { class: "px-4 py-3 text-muted-foreground" }, me = { class: "px-4 py-3 text-muted-foreground" }, he = i({
	__name: "ResultsTable",
	setup(t) {
		ne("ResultsTable");
		let { c: i, a, yes1: o, b: s, d: c } = te(y), l = [
			{
				lib: "react-i18next",
				size: "42.3 kB",
				time: "0.12ms",
				lazy: c
			},
			{
				lib: "react-intl",
				size: "38.1 kB",
				time: "0.15ms",
				lazy: s
			},
			{
				lib: "lingui",
				size: "12.8 kB",
				time: "0.08ms",
				lazy: o
			},
			{
				lib: "typesafe-i18n",
				size: "5.2 kB",
				time: "0.05ms",
				lazy: "Built-in"
			}
		];
		return (t, o) => (f(), n("section", null, [r("h2", re, g(v(i)), 1), r("div", ie, [r("table", ae, [r("thead", oe, [r("tr", null, [
			r("th", se, g(v(a).library), 1),
			r("th", ce, g(v(a).bundleSize), 1),
			r("th", le, g(v(a).lookupTime), 1),
			r("th", ue, g(v(a).lazyLoading), 1)
		])]), r("tbody", null, [(f(), n(e, null, m(l, (e) => r("tr", {
			key: e.lib,
			class: "border-t border-border"
		}, [
			r("td", de, g(e.lib), 1),
			r("td", fe, g(e.size), 1),
			r("td", pe, g(e.time), 1),
			r("td", me, g(e.lazy), 1)
		])), 64))])])])]));
	}
});
export { he as default };
