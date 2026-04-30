import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { derived as t, get as n, writable as r } from "svelte/store";
import { getContext as i, onMount as a } from "svelte";
var o = {
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
}, s = Symbol("intlayer"), c = () => i(s), l = {
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
}, u = l?.defaultLocale, d = (() => {
	let { subscribe: e, set: n, update: i } = r({ locale: u });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => t({ subscribe: e }, (e) => e.locale),
		reset: () => n({ locale: u })
	};
})(), f = "translation", p = "object", m = "array", h = (e, t) => {
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
	b(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
	x,
	S,
	C,
	T(e ?? l.defaultLocale),
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
};
function A(t, n) {
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0);
	var o = e.comment(), s = e.first_child(o), c = (t) => {
		var n = e.comment(), o = e.first_child(n);
		e.element(o, r, !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, l = (t) => {
		r()(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), e.append(t, o);
}
var j = (e) => {
	let t = !!A.prototype?.$destroy, n;
	return n = t ? class extends A {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => A(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, M = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => j({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, N = M, P = y, F = y, I = y, L = /* @__PURE__ */ new Map(), R = (e, t = !0) => {
	let n = `${e ?? l.defaultLocale}_${t}`;
	if (L.has(n)) return L.get(n);
	let r = [
		b(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
		x,
		S,
		T(e ?? l.defaultLocale),
		E,
		w,
		M,
		N,
		P,
		F,
		I
	];
	return L.set(n, r), r;
}, z = (e, t) => k(e, t, R(t)), B = (e, n) => {
	let r = c();
	return t([d], ([t]) => z(e, n ?? r?.locale ?? t.locale));
};
function V(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var H = e.from_html("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td></tr>"), U = e.from_html("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th></tr></thead><tbody></tbody></table></div></section>");
function W(t, r) {
	e.push(r, !1);
	let i = () => e.store_get(c, "$content", a), [a, s] = e.setup_stores();
	V("ResultsTable");
	let c = B(o), l = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: n(c).yes
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: n(c).manual
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: n(c).yes1
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: "Built-in"
		}
	];
	e.init();
	var u = U(), d = e.child(u), f = e.child(d, !0);
	e.reset(d);
	var p = e.sibling(d, 2), m = e.child(p), h = e.child(m), g = e.child(h), _ = e.child(g), v = e.child(_, !0);
	e.reset(_);
	var y = e.sibling(_), b = e.child(y, !0);
	e.reset(y);
	var x = e.sibling(y), S = e.child(x, !0);
	e.reset(x);
	var C = e.sibling(x), w = e.child(C, !0);
	e.reset(C), e.reset(g), e.reset(h);
	var T = e.sibling(h);
	e.each(T, 5, () => l, (e) => e.lib, (t, n) => {
		var r = H(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i), s = e.child(o, !0);
		e.reset(o);
		var c = e.sibling(o), l = e.child(c, !0);
		e.reset(c);
		var u = e.sibling(c), d = e.child(u, !0);
		e.reset(u), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).lib), e.set_text(s, e.get(n).size), e.set_text(l, e.get(n).time), e.set_text(d, e.get(n).lazy);
		}), e.append(t, r);
	}), e.reset(T), e.reset(m), e.reset(p), e.reset(u), e.template_effect(() => {
		e.set_text(f, i().title), e.set_text(v, i().columns.library), e.set_text(b, i().columns.bundleSize), e.set_text(S, i().columns.lookupTime), e.set_text(w, i().columns.lazyLoading);
	}), e.append(t, u), e.pop(), s();
}
export { W as default };
