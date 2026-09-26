import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
import "svelte/internal/flags/legacy";
var a = {
	key: "results-table",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				title: "Sample Results",
				columns: {
					library: "Library",
					bundleSize: "Bundle Size",
					lookupTime: "Lookup Time",
					lazyLoading: "Lazy Loading"
				},
				yes1: "Yes",
				manual: "Manual",
				yes: "Yes"
			},
			fr: {
				title: "Exemples de résultats",
				columns: {
					library: "Bibliothèque",
					bundleSize: "Taille du bundle",
					lookupTime: "Temps de recherche",
					lazyLoading: "Chargement différé"
				},
				yes1: "Oui",
				manual: "Manuel",
				yes: "Oui"
			},
			es: {
				title: "Resultados de muestra",
				columns: {
					library: "Biblioteca",
					bundleSize: "Tamaño del bundle",
					lookupTime: "Tiempo de búsqueda",
					lazyLoading: "Carga perezosa"
				},
				yes1: "Sí",
				manual: "Manual",
				yes: "Sí"
			},
			de: {
				title: "Beispielergebnisse",
				columns: {
					library: "Bibliothek",
					bundleSize: "Bundle-Größe",
					lookupTime: "Lookup-Zeit",
					lazyLoading: "Lazy Loading"
				},
				yes1: "Ja",
				manual: "Manuell",
				yes: "Ja"
			},
			it: {
				title: "Esempi di risultati",
				columns: {
					library: "Libreria",
					bundleSize: "Dimensioni del bundle",
					lookupTime: "Tempo di ricerca",
					lazyLoading: "Caricamento pigro"
				},
				yes1: "Sì",
				manual: "Manuale",
				yes: "Sì"
			},
			pt: {
				title: "Exemplos de resultados",
				columns: {
					library: "Biblioteca",
					bundleSize: "Tamanho do bundle",
					lookupTime: "Tempo de busca",
					lazyLoading: "Carregamento lento"
				},
				yes1: "Sim",
				manual: "Manual",
				yes: "Sim"
			},
			zh: {
				title: "示例结果",
				columns: {
					library: "库",
					bundleSize: "捆绑包大小",
					lookupTime: "查找时间",
					lazyLoading: "延迟加载"
				},
				yes1: "是",
				manual: "手动",
				yes: "是"
			},
			ja: {
				title: "サンプルの結果",
				columns: {
					library: "ライブラリ",
					bundleSize: "バンドルサイズ",
					lookupTime: "ルックアップ時間",
					lazyLoading: "遅延読み込み"
				},
				yes1: "はい",
				manual: "手動",
				yes: "はい"
			},
			ko: {
				title: "샘플 결과",
				columns: {
					library: "라이브러리",
					bundleSize: "번들 크기",
					lookupTime: "조회 시간",
					lazyLoading: "지연 로딩"
				},
				yes1: "예",
				manual: "수동",
				yes: "예"
			},
			ru: {
				title: "Примеры результатов",
				columns: {
					library: "Библиотека",
					bundleSize: "Размер бандла",
					lookupTime: "Время поиска",
					lazyLoading: "Ленивая загрузка"
				},
				yes1: "Да",
				manual: "Вручную",
				yes: "Да"
			}
		}
	}
}, o = {
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
}, s = o?.defaultLocale, c = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: s });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: s })
	};
})(), l = Symbol("intlayer"), u = () => t(l), d = /* @__PURE__ */ new Map(), f = (e, t) => Object.create(new Proxy(e, {
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
}), p = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = d.get(t);
	i || (i = /* @__PURE__ */ new Map(), d.set(t, i));
	let a = i.get(r);
	return a || (a = f(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, m = "translation", h = "object", g = "array", _ = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, v);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, _(t, e, {
		type: g,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: h,
			key: r
		};
		if (t.eager) {
			n[r] = v(e[r], _(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = v(e[r], _(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
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
}, O = (e, t = !0) => [
	I(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	L,
	R(e ?? o.defaultLocale),
	z,
	B,
	U(e ?? o.defaultLocale),
	W,
	V,
	H
].filter((e) => e !== F), k = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), A = /* @__PURE__ */ new WeakSet(), j = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = T(r ?? o.defaultLocale, "", n), s = E(e, a);
	if (s.hit) return s.content;
	let c = n ?? O(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !A.has(e)
		};
		A.add(e);
		try {
			return k(e.content, t, c);
		} finally {
			t.eager && A.delete(e);
		}
	};
	return l === null ? D(e, a, null) : Array.isArray(l) ? D(e, a, l.map(u)) : D(e, a, u(l));
}, M = (e) => {
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
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = P(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: m,
				key: e
			}]
		});
	}
}, L = F, R = (e) => F, z = F, B = F, V = F, H = F, U = (e) => F, W = F;
function G(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var K = (e) => {
	let t = !!G.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new G({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => G(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, p(e.value, Function.prototype)), n;
}, q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => K({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, J = q, Y = F, X = F, Z = F, Q = /* @__PURE__ */ new Map(), $ = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		q,
		I(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		L,
		R(e ?? o.defaultLocale),
		z,
		U(e ?? o.defaultLocale),
		W,
		V,
		H,
		J,
		Y,
		X,
		Z
	].filter((e) => e !== F);
	return Q.set(n, r), r;
}, ee = (e, t) => j(e, t, $(typeof t == "object" && t ? t.locale : t)), te = (e, t) => {
	let n = u();
	return r([c], ([r]) => {
		let i = n?.locale ?? r.locale;
		return ee(e, t ?? i);
	});
};
function ne(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var re = e.from_html("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td></tr>"), ie = e.from_html("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th></tr></thead><tbody></tbody></table></div></section>");
function ae(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$content", i), [i, o] = e.setup_stores();
	ne("ResultsTable");
	let s = te(a), c = e.derived(() => [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: r().yes
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: r().manual
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: r().yes1
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: "Built-in"
		}
	]);
	var l = ie(), u = e.child(l), d = e.only_child(u, !0), f = e.sibling(u, 2), p = e.child(f), m = e.child(p), h = e.child(m), g = e.child(h), _ = e.only_child(g, !0), v = e.sibling(g), y = e.only_child(v, !0), b = e.sibling(v), x = e.only_child(b, !0), S = e.sibling(b), C = e.only_child(S, !0);
	e.reset(h), e.reset(m);
	var w = e.sibling(m);
	e.each(w, 21, () => e.get(c), e.index, (t, n) => {
		var r = re(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i), s = e.only_child(o, !0), c = e.sibling(o), l = e.only_child(c, !0), u = e.sibling(c), d = e.only_child(u, !0);
		e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).lib), e.set_text(s, e.get(n).size), e.set_text(l, e.get(n).time), e.set_text(d, e.get(n).lazy);
		}), e.append(t, r);
	}), e.reset(w), e.reset(p), e.reset(f), e.reset(l), e.template_effect(() => {
		e.set_text(d, r().title), e.set_text(_, r().columns.library), e.set_text(y, r().columns.bundleSize), e.set_text(x, r().columns.lookupTime), e.set_text(C, r().columns.lazyLoading);
	}), e.append(t, l), e.pop(), o();
}
export { ae as default };
