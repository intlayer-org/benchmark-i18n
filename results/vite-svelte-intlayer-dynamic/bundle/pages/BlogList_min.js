import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, get as r, writable as i } from "svelte/store";
var a = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/de.json").then((e) => e.default),
	en: () => import("./en-ChtYtuYC.js").then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/zh.json").then((e) => e.default)
}, o = Symbol("intlayer"), s = () => t(o), c = {
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
}, l = c?.defaultLocale, u = (() => {
	let { subscribe: e, set: t, update: r } = i({ locale: l });
	return {
		subscribe: e,
		setLocale: (e) => r((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: l })
	};
})(), d = "translation", f = "object", p = "array", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: p,
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
					type: f,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, y = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? v : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _(o, e, t);
	}
}, b = v, x = v, S = v, C = v, w = (e) => v, T = v, E = (e, t = !0) => [
	y(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	b,
	x,
	S,
	w(e ?? c.defaultLocale),
	T,
	C
], D = (e, t, n = []) => m(e, {
	...t,
	plugins: n
}), O = (e, t, n = E(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return D(e.content, r, n);
};
function k(t, n) {
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
var A = (e) => {
	let t = !!k.prototype?.$destroy, n;
	return n = t ? class extends k {
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
	} : (t) => k(t, {
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
}, j = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => A({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, M = j, N = v, P = v, F = v, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		y(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		b,
		x,
		w(e ?? c.defaultLocale),
		T,
		C,
		j,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => O(e, t, L(t)), z = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return z;
	},
	apply: () => z
});
function B(e, t, r) {
	let i = s();
	return n(n(u, (e) => r ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : z }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...R(a, t),
					isLoading: !1,
					error: null
				});
			} catch (e) {
				if (r) return;
				console.error(e), n({
					isLoading: !1,
					error: e
				});
			}
		})(), () => {
			r = !0;
		};
	}, new Proxy({
		isLoading: !0,
		error: null
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : z }));
}
var V = e.from_html("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"> </span> <span class=\"text-xs text-muted-foreground\"> </span></div> <h2 class=\"mb-2 text-lg font-semibold text-foreground\"> </h2> <p class=\"mb-4 text-sm text-muted-foreground\"> </p> <button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"> </button></article>"), H = e.from_html("<div class=\"grid gap-6 md:grid-cols-2\"></div>");
function U(t, n) {
	e.push(n, !1);
	let i = () => e.store_get(c, "$content", o), [o, s] = e.setup_stores(), c = B(a, "blog-list"), l = [
		{
			title: r(c).comparingI18nLibrariesIn2026,
			date: r(c).march152026,
			excerpt: r(c).weTested12DifferentInternationalization,
			category: r(c).benchmark
		},
		{
			title: r(c).howToReduceYourI18n,
			date: r(c).march82026,
			excerpt: r(c).practicalStrategiesForOptimizingTranslat,
			category: r(c).tutorial
		},
		{
			title: r(c).theStateOfInternationalizationIn,
			date: r(c).february282026,
			excerpt: r(c).anOverviewOfTheCurrent,
			category: r(c).analysis
		},
		{
			title: r(c).migratingFromReactI18nextTo,
			date: r(c).february152026,
			excerpt: r(c).aStepByStepGuide,
			category: r(c).tutorial1
		},
		{
			title: r(c).serverComponentsAndI18nWhat,
			date: r(c).february12026,
			excerpt: r(c).reactServerComponentsIntroduceNew,
			category: r(c).analysis1
		},
		{
			title: r(c).benchmarkMethodologyHowWeTest,
			date: r(c).january202026,
			excerpt: r(c).aTransparentLookAtOur,
			category: r(c).meta
		}
	];
	e.init();
	var u = H();
	e.each(u, 5, () => l, (e) => e.title, (t, n) => {
		var r = V(), a = e.child(r), o = e.child(a), s = e.child(o, !0);
		e.reset(o);
		var c = e.sibling(o, 2), l = e.child(c, !0);
		e.reset(c), e.reset(a);
		var u = e.sibling(a, 2), d = e.child(u, !0);
		e.reset(u);
		var f = e.sibling(u, 2), p = e.child(f, !0);
		e.reset(f);
		var m = e.sibling(f, 2), h = e.child(m, !0);
		e.reset(m), e.reset(r), e.template_effect(() => {
			e.set_text(s, e.get(n).category), e.set_text(l, e.get(n).date), e.set_text(d, e.get(n).title), e.set_text(p, e.get(n).excerpt), e.set_text(h, i().readMore);
		}), e.append(t, r);
	}), e.reset(u), e.append(t, u), e.pop(), s();
}
export { U as default };
var e = {
	key: "blog-list",
	content: {
		readMore: "Read More →",
		meta: "Meta",
		aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		january202026: "January 20, 2026",
		benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
		analysis1: "Analysis",
		reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		february12026: "February 1, 2026",
		serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
		tutorial1: "Tutorial",
		aStepByStepGuide: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		february152026: "February 15, 2026",
		migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
		analysis: "Analysis",
		anOverviewOfTheCurrent: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		february282026: "February 28, 2026",
		theStateOfInternationalizationIn: "The State of Internationalization in React",
		tutorial: "Tutorial",
		practicalStrategiesForOptimizingTranslat: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		march82026: "March 8, 2026",
		howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
		benchmark: "Benchmark",
		weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		march152026: "March 15, 2026",
		comparingI18nLibrariesIn2026: "Comparing i18n Libraries in 2026: A Deep Dive"
	}
};
export { e as default };
