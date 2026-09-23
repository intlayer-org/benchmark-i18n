import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, onBeforeMount as u, onMounted as d, openBlock as f, ref as p, renderList as ee, shallowRef as m, toDisplayString as h, toValue as g, watch as te } from "vue";
var _ = {
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
}, v = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = p(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
			return v({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return l(o);
}, y = /* @__PURE__ */ new WeakMap(), b = 0, ne = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, re = 256, x = /* @__PURE__ */ new WeakMap(), S = (e) => typeof e == "object" && !!e, C = (e, t, n) => `${e}_${t}_${ne(n)}`, w = (e, t) => {
	if (!S(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, T = (e, t, n) => {
	if (!S(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, ie = "translation", ae = "object", E = "array", D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => D(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: E,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ae,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = D(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = D(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, O = "default", k = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, oe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, oe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? O : typeof e == "string" ? j(e, k) : Object.keys(e).sort().map((t) => `${j(t, A)}=${j(String(e[t]), A)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(M) : [M(e)], se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, le = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ue = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, de = (e, t) => {
	if (!le(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : se(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ce(e, n, t, s)).map((t) => ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", F = {
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
}, I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (I(e) && I(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : L(e[r], t[r]));
		return n;
	}
	return e;
}, R = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => L(e, t));
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ie,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return R(o, e, t);
	}
}, V = z, pe = (e) => z, H = z, me = z, U = z, W = z, G = (e) => z, K = z, he = (e, t = !0) => [
	B(e ?? F.defaultLocale, t ? F.defaultLocale : void 0),
	V,
	H,
	me,
	G(e ?? F.defaultLocale),
	K,
	U,
	W
], ge = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), _e = (e, t, n) => {
	let { locale: r, selector: i } = fe(t), a = C(r ?? F.defaultLocale, P(i), n), o = w(e, a);
	if (o.hit) return o.content;
	let s = n ?? he(r), c = de(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ge(e.content, t, s);
	};
	return c === null ? T(e, a, null) : Array.isArray(c) ? T(e, a, c.map(l)) : T(e, a, l(c));
}, ve = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => v({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, ye = z, q = z, be = z, J = /* @__PURE__ */ new Map(), xe = (e, t = !0) => {
	let n = `${e ?? F.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		B(e ?? F.defaultLocale, t ? F.defaultLocale : void 0),
		V,
		pe(e ?? F.defaultLocale),
		H,
		G(e ?? F.defaultLocale),
		K,
		U,
		W,
		ve,
		ye,
		q,
		be
	];
	return J.set(n, r), r;
}, Y = (e, t) => _e(e, t, xe(typeof t == "object" && t ? t.locale : t)), Se = Symbol("intlayer"), X = (e, t) => t.reduce((e, t) => e?.[t], e), Z = (e) => typeof e == "object" && !!e, Q = (e) => typeof e == "function" || Z(e) && ("render" in e || "setup" in e), Ce = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, $ = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Q(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), we = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return $(() => e.value);
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
}), Te = (e, n) => {
	let r = a() ? s(Se) : void 0, i = c(r?.locale) ? r.locale : p(r?.locale ?? F.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : g(n)
	})), l = t(() => o.value.locale ?? i.value), u = m({});
	te([
		() => g(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? Y(e, {
			...n,
			locale: t
		}) : Y(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let d = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => X(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return $(() => a.value);
			let o = e.concat(r), s = X(u.value, o);
			if (s === void 0 || Z(s) && !Q(s)) return d(o);
			if (Ce(s)) return we(t(() => X(u.value, o)));
			if (typeof s == "function") {
				let t = X(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => X(u.value, o)?.(...e);
			}
			let c = t(() => X(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = X(u.value, e);
			return Z(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return d([]);
};
function Ee(e) {
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
var De = i({
	__name: "ResultsTable",
	setup(e, { expose: t }) {
		t(), Ee("ResultsTable");
		let { c: n, a: r, yes1: i, b: a, d: o } = Te(_), s = {
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
}), Oe = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ke = { class: "mb-6 text-2xl font-bold text-foreground" }, Ae = { class: "overflow-x-auto rounded-lg border border-border" }, je = { class: "w-full text-sm" }, Me = { class: "bg-muted" }, Ne = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Pe = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Fe = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Ie = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Le = { class: "px-4 py-3 font-medium text-foreground" }, Re = { class: "px-4 py-3 text-muted-foreground" }, ze = { class: "px-4 py-3 text-muted-foreground" }, Be = { class: "px-4 py-3 text-muted-foreground" };
function Ve(t, i, a, o, s, c) {
	return f(), n("section", null, [r("h2", ke, h(o.title), 1), r("div", Ae, [r("table", je, [r("thead", Me, [r("tr", null, [
		r("th", Ne, h(o.columns.library), 1),
		r("th", Pe, h(o.columns.bundleSize), 1),
		r("th", Fe, h(o.columns.lookupTime), 1),
		r("th", Ie, h(o.columns.lazyLoading), 1)
	])]), r("tbody", null, [(f(), n(e, null, ee(o.results, (e) => r("tr", {
		key: e.lib,
		class: "border-t border-border"
	}, [
		r("td", Le, h(e.lib), 1),
		r("td", Re, h(e.size), 1),
		r("td", ze, h(e.time), 1),
		r("td", Be, h(e.lazy), 1)
	])), 64))])])])]);
}
var He = Oe(De, [["render", Ve], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/home/ResultsTable.vue"]]);
export { He as default };
