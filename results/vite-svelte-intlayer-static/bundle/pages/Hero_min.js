import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
var a = {
	key: "hero",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				title: "i18n Benchmark",
				description: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
				viewResults: "View Results",
				methodology: "Methodology"
			},
			fr: {
				title: "Benchmark i18n",
				description: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
				viewResults: "Voir les résultats",
				methodology: "Méthodologie"
			},
			es: {
				title: "i18n Benchmark",
				description: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de la representación.",
				viewResults: "Ver resultados",
				methodology: "Metodología"
			},
			de: {
				title: "i18n Benchmark",
				description: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
				viewResults: "Ergebnisse anzeigen",
				methodology: "Methodik"
			},
			it: {
				title: "i18n Benchmark",
				description: "Un'applicazione di test progettata per misurare l'impatto nel mondo reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
				viewResults: "Visualizza i risultati",
				methodology: "Metodologia"
			},
			pt: {
				title: "i18n Benchmark",
				description: "Um aplicativo de teste projetado para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
				viewResults: "Ver Resultados",
				methodology: "Metodologia"
			},
			zh: {
				title: "i18n 基准测试",
				description: "一个旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性的实际影响的测试应用程序。",
				viewResults: "查看结果",
				methodology: "方法论"
			},
			ja: {
				title: "i18n ベンチマーク",
				description: "国際化ライブラリがバンドルサイズ、ロードパフォーマンス、およびレンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。",
				viewResults: "結果を見る",
				methodology: "方法論"
			},
			ko: {
				title: "i18n 벤치마크",
				description: "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
				viewResults: "결과 보기",
				methodology: "방법론"
			},
			ru: {
				title: "i18n Бенчмарк",
				description: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
				viewResults: "Посмотреть результаты",
				methodology: "Методология"
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
var re = e.from_html("<section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"> </h1> <p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"> </p> <div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button> <button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button></div></section>");
function ie(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", i), [i, o] = e.setup_stores(), s = te(a);
	ne("Hero"), e.init();
	var c = re(), l = e.child(c), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.only_child(d, !0), p = e.sibling(d, 2), m = e.child(p), h = e.only_child(m, !0), g = e.sibling(m, 2), _ = e.only_child(g, !0);
	e.reset(p), e.reset(c), e.template_effect(() => {
		e.set_text(u, r().title), e.set_text(f, r().description), e.set_text(h, r().viewResults), e.set_text(_, r().methodology);
	}), e.append(t, c), e.pop(), o();
}
export { ie as default };
