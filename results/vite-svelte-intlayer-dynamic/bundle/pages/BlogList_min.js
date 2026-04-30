import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, get as r, writable as i } from "svelte/store";
var a = {
	de: () => import("./de-ktPD9inp.js").then((e) => e.default),
	en: () => import("./en-Cer6fFiw.js").then((e) => e.default),
	es: () => import("./es-DVkQYIH7.js").then((e) => e.default),
	fr: () => import("./fr-CKDRyMwk.js").then((e) => e.default),
	it: () => import("./it-BsVZr6WA.js").then((e) => e.default),
	ja: () => import("./ja-DGF_ypR0.js").then((e) => e.default),
	ko: () => import("./ko-B1fE4rdn.js").then((e) => e.default),
	pt: () => import("./pt-w8P5wpQw.js").then((e) => e.default),
	ru: () => import("./ru-Ch3S7YpX.js").then((e) => e.default),
	zh: () => import("./zh-kctnmwzF.js").then((e) => e.default)
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
		readMore: "Mehr lesen →",
		meta: "Meta",
		aTransparentLookAtOur: "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
		january202026: "20. Januar 2026",
		benchmarkMethodologyHowWeTest: "Benchmark-Methodik: Wie wir testen",
		analysis1: "Analyse",
		reactServerComponentsIntroduceNew: "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
		february12026: "1. Februar 2026",
		serverComponentsAndI18nWhat: "Server Components und i18n: Was ändert sich?",
		tutorial1: "Tutorial",
		aStepByStepGuide: "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
		february152026: "15. Februar 2026",
		migratingFromReactI18nextTo: "Migration von react-i18next zu Lingui",
		analysis: "Analyse",
		anOverviewOfTheCurrent: "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.",
		february282026: "28. Februar 2026",
		theStateOfInternationalizationIn: "Der Stand der Internationalisierung in React",
		tutorial: "Tutorial",
		practicalStrategiesForOptimizingTranslat: "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.",
		march82026: "8. März 2026",
		howToReduceYourI18n: "So reduzieren Sie Ihr i18n-Bundle um 60 %",
		benchmark: "Benchmark",
		weTested12DifferentInternationalization: "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.",
		march152026: "15. März 2026",
		comparingI18nLibrariesIn2026: "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick"
	}
};
export { e as default };
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
var e = {
	key: "blog-list",
	content: {
		readMore: "Leer más →",
		meta: "Meta",
		aTransparentLookAtOur: "Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproducibilidad.",
		january202026: "20 de enero de 2026",
		benchmarkMethodologyHowWeTest: "Metodología de benchmark: cómo probamos",
		analysis1: "Análisis",
		reactServerComponentsIntroduceNew: "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
		february12026: "1 de febrero de 2026",
		serverComponentsAndI18nWhat: "Server Components e i18n: ¿qué cambia?",
		tutorial1: "Tutorial",
		aStepByStepGuide: "Una guía paso a paso sobre la migración de una aplicación de producción con 50,000 claves de traducción de react-i18next a Lingui.",
		february152026: "15 de febrero de 2026",
		migratingFromReactI18nextTo: "Migración de react-i18next a Lingui",
		analysis: "Análisis",
		anOverviewOfTheCurrent: "Una descripción general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.",
		february282026: "28 de febrero de 2026",
		theStateOfInternationalizationIn: "El estado de la internacionalización en React",
		tutorial: "Tutorial",
		practicalStrategiesForOptimizingTranslat: "Estrategias prácticas para optimizar los paquetes de traducción, incluida la carga diferida, la división de código y las optimizaciones en tiempo de compilación.",
		march82026: "8 de marzo de 2026",
		howToReduceYourI18n: "Cómo reducir su paquete i18n en un 60%",
		benchmark: "Benchmark",
		weTested12DifferentInternationalization: "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.",
		march152026: "15 de marzo de 2026",
		comparingI18nLibrariesIn2026: "Comparación de bibliotecas i18n en 2026: una inmersión profunda"
	}
};
export { e as default };
var e = {
	key: "blog-list",
	content: {
		readMore: "Lire la suite →",
		meta: "Méta",
		aTransparentLookAtOur: "Un aperçu transparent de notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
		january202026: "20 janvier 2026",
		benchmarkMethodologyHowWeTest: "Méthodologie de benchmark : comment nous testons",
		analysis1: "Analyse",
		reactServerComponentsIntroduceNew: "Les React Server Components introduisent de nouveaux schémas pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
		february12026: "1 février 2026",
		serverComponentsAndI18nWhat: "Server Components et i18n : quels changements ?",
		tutorial1: "Tutoriel",
		aStepByStepGuide: "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
		february152026: "15 février 2026",
		migratingFromReactI18nextTo: "Migration de react-i18next vers Lingui",
		analysis: "Analyse",
		anOverviewOfTheCurrent: "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les schémas émergents et les préférences de la communauté.",
		february282026: "28 février 2026",
		theStateOfInternationalizationIn: "L'état de l'internationalisation dans React",
		tutorial: "Tutoriel",
		practicalStrategiesForOptimizingTranslat: "Stratégies pratiques pour optimiser les bundles de traduction, y compris le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.",
		march82026: "8 mars 2026",
		howToReduceYourI18n: "Comment réduire votre bundle i18n de 60 %",
		benchmark: "Benchmark",
		weTested12DifferentInternationalization: "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.",
		march152026: "15 mars 2026",
		comparingI18nLibrariesIn2026: "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie"
	}
};
export { e as default };
var e = {
	key: "blog-list",
	content: {
		readMore: "Leggi di più →",
		meta: "Meta",
		aTransparentLookAtOur: "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.",
		january202026: "20 gennaio 2026",
		benchmarkMethodologyHowWeTest: "Metodologia di benchmark: come testiamo",
		analysis1: "Analisi",
		reactServerComponentsIntroduceNew: "I React Server Components introducono nuovi pattern per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
		february12026: "1 febbraio 2026",
		serverComponentsAndI18nWhat: "Server Components e i18n: cosa cambia?",
		tutorial1: "Tutorial",
		aStepByStepGuide: "Una guida passo-passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
		february152026: "15 febbraio 2026",
		migratingFromReactI18nextTo: "Migrazione da react-i18next a Lingui",
		analysis: "Analisi",
		anOverviewOfTheCurrent: "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, pattern emergenti e preferenze della community.",
		february282026: "28 febbraio 2026",
		theStateOfInternationalizationIn: "Lo stato dell'internazionalizzazione in React",
		tutorial: "Tutorial",
		practicalStrategiesForOptimizingTranslat: "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.",
		march82026: "8 marzo 2026",
		howToReduceYourI18n: "Come ridurre il bundle i18n del 60%",
		benchmark: "Benchmark",
		weTested12DifferentInternationalization: "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.",
		march152026: "15 marzo 2026",
		comparingI18nLibrariesIn2026: "Confronto tra librerie i18n nel 2026: un approfondimento"
	}
};
export { e as default };
var e = {
	key: "blog-list",
	content: {
		readMore: "詳しく読む →",
		meta: "メタ",
		aTransparentLookAtOur: "テスト環境、統計手法、再現性など、当社のベンチマーク手法を透明に公開します。",
		january202026: "2026年1月20日",
		benchmarkMethodologyHowWeTest: "ベンチマーク手法：テスト方法",
		analysis1: "分析",
		reactServerComponentsIntroduceNew: "React Server Components は、国際化のための新しいパターンを導入します。その影響とベストプラクティスを調査します。",
		february12026: "2026年2月1日",
		serverComponentsAndI18nWhat: "Server Components と i18n：何が変わるのか？",
		tutorial1: "チュートリアル",
		aStepByStepGuide: "50,000 個の翻訳キーを持つプロダクションアプリを react-i18next から Lingui に移行するためのステップバイステップガイド。",
		february152026: "2026年2月15日",
		migratingFromReactI18nextTo: "react-i18next から Lingui への移行",
		analysis: "分析",
		anOverviewOfTheCurrent: "トレンド、新しいパターン、コミュニティの好みを網羅した、React における現在の i18n エコシステムの概要。",
		february282026: "2026年2月28日",
		theStateOfInternationalizationIn: "React における国際化の現状",
		tutorial: "チュートリアル",
		practicalStrategiesForOptimizingTranslat: "遅延読み込み、コード分割、コンパイル時最適化など、翻訳バンドルを最適化するための実用的な戦略。",
		march82026: "2026年3月8日",
		howToReduceYourI18n: "i18n バンドルを 60% 削減する方法",
		benchmark: "ベンチマーク",
		weTested12DifferentInternationalization: "パフォーマンス、バンドルサイズ、DX にわたって 12 の異なる国際化ライブラリをテストしました。驚くべき結果がこちらです。",
		march152026: "2026年3月15日",
		comparingI18nLibrariesIn2026: "2026 年における i18n ライブラリの比較：ディープダイブ"
	}
};
export { e as default };
var e = {
	key: "blog-list",
	content: {
		readMore: "더 읽어보기 →",
		meta: "메타",
		aTransparentLookAtOur: "테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론을 투명하게 보여줍니다.",
		january202026: "2026년 1월 20일",
		benchmarkMethodologyHowWeTest: "벤치마크 방법론: 테스트 방법",
		analysis1: "분석",
		reactServerComponentsIntroduceNew: "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
		february12026: "2026년 2월 1일",
		serverComponentsAndI18nWhat: "Server Components 및 i18n: 무엇이 바뀌나요?",
		tutorial1: "튜토리얼",
		aStepByStepGuide: "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.",
		february152026: "2026년 2월 15일",
		migratingFromReactI18nextTo: "react-i18next에서 Lingui로 마이그레이션",
		analysis: "분석",
		anOverviewOfTheCurrent: "트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.",
		february282026: "2026년 2월 28일",
		theStateOfInternationalizationIn: "React의 국제화 현황",
		tutorial: "튜토리얼",
		practicalStrategiesForOptimizingTranslat: "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.",
		march82026: "2026년 3월 8일",
		howToReduceYourI18n: "i18n 번들을 60% 줄이는 방법",
		benchmark: "벤치마크",
		weTested12DifferentInternationalization: "성능, 번들 크기 및 DX에 대해 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.",
		march152026: "2026년 3월 15일",
		comparingI18nLibrariesIn2026: "2026년 i18n 라이브러리 비교: 심층 분석"
	}
};
export { e as default };
var e = {
	key: "blog-list",
	content: {
		readMore: "Ler mais →",
		meta: "Meta",
		aTransparentLookAtOur: "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
		january202026: "20 de janeiro de 2026",
		benchmarkMethodologyHowWeTest: "Metodologia de Benchmark: Como Testamos",
		analysis1: "Análise",
		reactServerComponentsIntroduceNew: "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
		february12026: "1 de fevereiro de 2026",
		serverComponentsAndI18nWhat: "Server Components e i18n: O que muda?",
		tutorial1: "Tutorial",
		aStepByStepGuide: "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
		february152026: "15 de fevereiro de 2026",
		migratingFromReactI18nextTo: "Migrando do react-i18next para o Lingui",
		analysis: "Análise",
		anOverviewOfTheCurrent: "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.",
		february282026: "28 de fevereiro de 2026",
		theStateOfInternationalizationIn: "O estado da internacionalização no React",
		tutorial: "Tutorial",
		practicalStrategiesForOptimizingTranslat: "Estratégias práticas para otimizar os pacotes de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.",
		march82026: "8 de março de 2026",
		howToReduceYourI18n: "Como reduzir seu bundle i18n em 60%",
		benchmark: "Benchmark",
		weTested12DifferentInternationalization: "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.",
		march152026: "15 de março de 2026",
		comparingI18nLibrariesIn2026: "Comparando bibliotecas i18n em 2026: um mergulho profundo"
	}
};
export { e as default };
var e = {
	key: "blog-list",
	content: {
		readMore: "Читать далее →",
		meta: "Мета",
		aTransparentLookAtOur: "Прозрачный взгляд на нашу методологию бенчмаркинга, включая среды тестирования, статистические методы и воспроизводимость.",
		january202026: "20 января 2026 г.",
		benchmarkMethodologyHowWeTest: "Методология бенчмарка: как мы тестируем",
		analysis1: "Анализ",
		reactServerComponentsIntroduceNew: "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
		february12026: "1 февраля 2026 г.",
		serverComponentsAndI18nWhat: "Server Components и i18n: что меняется?",
		tutorial1: "Обучение",
		aStepByStepGuide: "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.",
		february152026: "15 февраля 2026 г.",
		migratingFromReactI18nextTo: "Миграция с react-i18next на Lingui",
		analysis: "Анализ",
		anOverviewOfTheCurrent: "Обзор текущей экосистемы i18n в React, охватывающий тенденции, появляющиеся паттерны и предпочтения сообщества.",
		february282026: "28 февраля 2026 г.",
		theStateOfInternationalizationIn: "Состояние интернационализации в React",
		tutorial: "Обучение",
		practicalStrategiesForOptimizingTranslat: "Практические стратегии по оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию на этапе компиляции.",
		march82026: "8 марта 2026 г.",
		howToReduceYourI18n: "Как уменьшить ваш i18n бандл на 60%",
		benchmark: "Бенчмарк",
		weTested12DifferentInternationalization: "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.",
		march152026: "15 марта 2026 г.",
		comparingI18nLibrariesIn2026: "Сравнение библиотек i18n в 2026 году: глубокое погружение"
	}
};
export { e as default };
var e = {
	key: "blog-list",
	content: {
		readMore: "阅读更多 →",
		meta: "元",
		aTransparentLookAtOur: "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重复性。",
		january202026: "2026年1月20日",
		benchmarkMethodologyHowWeTest: "基准测试方法：我们如何测试",
		analysis1: "分析",
		reactServerComponentsIntroduceNew: "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。",
		february12026: "2026年2月1日",
		serverComponentsAndI18nWhat: "Server Components 和 i18n：有什么变化？",
		tutorial1: "教程",
		aStepByStepGuide: "有关将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。",
		february152026: "2026年2月15日",
		migratingFromReactI18nextTo: "从 react-i18next 迁移到 Lingui",
		analysis: "分析",
		anOverviewOfTheCurrent: "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。",
		february282026: "2026年2月28日",
		theStateOfInternationalizationIn: "React 国际化的现状",
		tutorial: "教程",
		practicalStrategiesForOptimizingTranslat: "优化翻译包的实用策略，包括延迟加载、代码分割和编译时优化。",
		march82026: "2026年3月8日",
		howToReduceYourI18n: "如何将 i18n 包减少 60%",
		benchmark: "基准测试",
		weTested12DifferentInternationalization: "我们对 12 种不同的国际化库在性能、捆绑包大小和 DX 方面进行了测试。以下是令人惊讶的结果。",
		march152026: "2026年3月15日",
		comparingI18nLibrariesIn2026: "2026 年 i18n 库比较：深入探讨"
	}
};
export { e as default };
