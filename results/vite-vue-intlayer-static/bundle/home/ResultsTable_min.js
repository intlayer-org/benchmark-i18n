import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, onBeforeMount as u, onMounted as d, openBlock as f, ref as p, renderList as ee, shallowRef as te, toDisplayString as m, toValue as h, unref as g, watch as ne } from "vue";
var re = {
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
}, _ = {
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
}, v = Symbol("intlayer"), y = /* @__PURE__ */ new WeakMap(), b = 0, ie = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, ae = 256, x = /* @__PURE__ */ new WeakMap(), S = (e) => typeof e == "object" && !!e, C = (e, t, n) => `${e}_${t}_${ie(n)}`, w = (e, t) => {
	if (!S(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, T = (e, t, n) => {
	if (!S(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= ae && r.clear(), r.set(t, n), n;
}, E = "translation", oe = "object", se = "array", D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => D(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: se,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: oe,
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
}, O = "default", ce = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, le = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, le);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? O : typeof e == "string" ? A(e, ce) : Object.keys(e).sort().map((t) => `${A(t, k)}=${A(String(e[t]), k)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(j) : [j(e)], ue = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, de = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, fe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, pe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, me = (e, t) => {
	if (!fe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : ue(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => de(e, n, t, s)).map((t) => pe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, N = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: E,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, he = (e) => R, V = R, ge = R, H = R, U = R, W = (e) => R, G = R, _e = (e, t = !0) => [
	z(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	B,
	V,
	ge,
	W(e ?? _.defaultLocale),
	G,
	H,
	U
], ve = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), ye = (e, t, n) => {
	let { locale: r, selector: i } = N(t), a = C(r ?? _.defaultLocale, P(i), n), o = w(e, a);
	if (o.hit) return o.content;
	let s = n ?? _e(r), c = me(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ve(e.content, t, s);
	};
	return c === null ? T(e, a, null) : Array.isArray(c) ? T(e, a, c.map(l)) : T(e, a, l(c));
}, K = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return K({
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
}, be = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => K({
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
}, xe = R, Se = R, Ce = R, q = /* @__PURE__ */ new Map(), we = (e, t = !0) => {
	let n = `${e ?? _.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
		B,
		he(e ?? _.defaultLocale),
		V,
		W(e ?? _.defaultLocale),
		G,
		H,
		U,
		be,
		xe,
		Se,
		Ce
	];
	return q.set(n, r), r;
}, J = (e, t) => ye(e, t, we(typeof t == "object" && t ? t.locale : t)), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Te = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Ee = (e) => new Proxy({}, {
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
}), De = (e, n) => {
	let r = a() ? s(v) : void 0, i = c(r?.locale) ? r.locale : p(r?.locale ?? _.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : h(n)
	})), l = t(() => o.value.locale ?? i.value), u = te({});
	ne([
		() => h(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let d = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => Y(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = e.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return d(o);
			if (Te(s)) return Ee(t(() => Y(u.value, o)));
			if (typeof s == "function") {
				let t = Y(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = t(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(u.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
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
function $(e) {
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
var Oe = { class: "mb-6 text-2xl font-bold text-foreground" }, ke = { class: "overflow-x-auto rounded-lg border border-border" }, Ae = { class: "w-full text-sm" }, je = { class: "bg-muted" }, Me = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Ne = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Pe = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Fe = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Ie = { class: "px-4 py-3 font-medium text-foreground" }, Le = { class: "px-4 py-3 text-muted-foreground" }, Re = { class: "px-4 py-3 text-muted-foreground" }, ze = { class: "px-4 py-3 text-muted-foreground" }, Be = i({
	__name: "ResultsTable",
	setup(t) {
		$("ResultsTable");
		let { c: i, a, yes1: o, b: s, d: c } = De(re), l = [
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
		return (t, o) => (f(), n("section", null, [r("h2", Oe, m(g(i)), 1), r("div", ke, [r("table", Ae, [r("thead", je, [r("tr", null, [
			r("th", Me, m(g(a).library), 1),
			r("th", Ne, m(g(a).bundleSize), 1),
			r("th", Pe, m(g(a).lookupTime), 1),
			r("th", Fe, m(g(a).lazyLoading), 1)
		])]), r("tbody", null, [(f(), n(e, null, ee(l, (e) => r("tr", {
			key: e.lib,
			class: "border-t border-border"
		}, [
			r("td", Ie, m(e.lib), 1),
			r("td", Le, m(e.size), 1),
			r("td", Re, m(e.time), 1),
			r("td", ze, m(e.lazy), 1)
		])), 64))])])])]));
	}
});
export { Be as default };
