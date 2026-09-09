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
}, s = {
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
}, c = s?.defaultLocale, l = (() => {
	let { subscribe: e, set: n, update: i } = r({ locale: c });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => t({ subscribe: e }, (e) => e.locale),
		reset: () => n({ locale: c })
	};
})(), u = Symbol("intlayer"), d = () => i(u), f = "default", p = /[^A-Za-z0-9._&=-]/g, m = /[^A-Za-z0-9._-]/g, h = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, g = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, h);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, _ = (e) => e === void 0 ? f : typeof e == "string" ? g(e, p) : Object.keys(e).sort().map((t) => `${g(t, m)}=${g(String(e[t]), m)}`).join("&"), v = (e) => Array.isArray(e) ? e.length === 0 ? [f] : e.map(_) : [_(e)], y = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? f : e[0] ?? "default";
}, b = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, x = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, S = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, C = (e, t) => {
	if (!x(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? f : y(v(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => b(e, n, t, s)).map((t) => S(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, w = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, T = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? v(n).join(",") : String(n)}`;
}).join("|") : "", ee = "translation", E = "object", D = "array", O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => O(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: D,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: E,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = O(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = O(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, k = /* @__PURE__ */ new WeakMap(), A = 0, te = (e) => {
	if (!e) return "base";
	let t = k.get(e);
	if (t) return t;
	A += 1;
	let n = `p${A}`;
	return k.set(e, n), n;
}, ne = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, N = (e, t, n) => `${e}_${t}_${te(n)}`, P = (e, t) => {
	if (!M(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!M(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, I = (e, t = !0) => [
	V(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	H,
	W,
	G,
	J(e ?? s.defaultLocale),
	Y,
	K,
	q
], L = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), re = (e, t, n) => {
	let { locale: r, selector: i } = w(t), a = N(r ?? s.defaultLocale, T(i), n), o = P(e, a);
	if (o.hit) return o.content;
	let c = n ?? I(r), l = C(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return L(e.content, t, c);
	};
	return l === null ? F(e, a, null) : Array.isArray(l) ? F(e, a, l.map(u)) : F(e, a, u(l));
}, R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, ie = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ee,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ie(o, e, t);
	}
}, H = B, U = (e) => B, W = B, G = B, K = B, q = B, J = (e) => B, Y = B;
function X(t, n) {
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
var ae = (e) => {
	let t = !!X.prototype?.$destroy, n;
	if (n = t ? class extends X {
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
	} : (t) => X(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ae({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, oe = Z, se = B, Q = B, ce = B, $ = /* @__PURE__ */ new Map(), le = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		V(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		H,
		U(e ?? s.defaultLocale),
		W,
		J(e ?? s.defaultLocale),
		Y,
		K,
		q,
		Z,
		oe,
		se,
		Q,
		ce
	];
	return $.set(n, r), r;
}, ue = (e, t) => re(e, t, le(typeof t == "object" && t ? t.locale : t)), de = (e, n) => {
	let r = d();
	return t([l], ([t]) => {
		let i = r?.locale ?? t.locale;
		return ue(e, n ?? i);
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
var pe = e.from_html("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td></tr>"), me = e.from_html("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th></tr></thead><tbody></tbody></table></div></section>");
function he(t, r) {
	e.push(r, !1);
	let i = () => e.store_get(c, "$content", a), [a, s] = e.setup_stores();
	fe("ResultsTable");
	let c = de(o), l = [
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
	var u = me(), d = e.child(u), f = e.only_child(d, !0), p = e.sibling(d, 2), m = e.child(p), h = e.child(m), g = e.child(h), _ = e.child(g), v = e.only_child(_, !0), y = e.sibling(_), b = e.only_child(y, !0), x = e.sibling(y), S = e.only_child(x, !0), C = e.sibling(x), w = e.only_child(C, !0);
	e.reset(g), e.reset(h);
	var T = e.sibling(h);
	e.each(T, 5, () => l, (e) => e.lib, (t, n) => {
		var r = pe(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i), s = e.only_child(o, !0), c = e.sibling(o), l = e.only_child(c, !0), u = e.sibling(c), d = e.only_child(u, !0);
		e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).lib), e.set_text(s, e.get(n).size), e.set_text(l, e.get(n).time), e.set_text(d, e.get(n).lazy);
		}), e.append(t, r);
	}), e.reset(T), e.reset(m), e.reset(p), e.reset(u), e.template_effect(() => {
		e.set_text(f, i().title), e.set_text(v, i().columns.library), e.set_text(b, i().columns.bundleSize), e.set_text(S, i().columns.lookupTime), e.set_text(w, i().columns.lazyLoading);
	}), e.append(t, u), e.pop(), s();
}
export { he as default };
