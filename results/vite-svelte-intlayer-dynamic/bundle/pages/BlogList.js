import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, get, writable } from "svelte/store";
var content = {
	"de": () => import("./de-COOG5Oo4.js").then((m) => m.default),
	"en": () => import("./en-DSK2Qe8q.js").then((m) => m.default),
	"es": () => import("./es-DlkQQRSu.js").then((m) => m.default),
	"fr": () => import("./fr-Bx17ve61.js").then((m) => m.default),
	"it": () => import("./it-BLlJFhRi.js").then((m) => m.default),
	"ja": () => import("./ja-BTqNkZVQ.js").then((m) => m.default),
	"ko": () => import("./ko-Bi_HhaAs.js").then((m) => m.default),
	"pt": () => import("./pt-CjzSncNu.js").then((m) => m.default),
	"ru": () => import("./ru-BAOAZd3P.js").then((m) => m.default),
	"zh": () => import("./zh-VcwwJzC8.js").then((m) => m.default)
};
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
var internationalization = {
	"locales": [
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
	"requiredLocales": [
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
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var defaultLocale = internationalization?.defaultLocale;
var createIntlayerStore = () => {
	const { subscribe, set, update } = writable({ locale: defaultLocale });
	return {
		subscribe,
		setLocale: (locale) => update((store) => ({
			...store,
			locale
		})),
		getLocale: () => derived({ subscribe }, ($store) => $store.locale),
		reset: () => set({ locale: defaultLocale })
	};
};
var intlayerStore = createIntlayerStore();
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
function IntlayerNodeWrapper($$anchor, $$props) {
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, Renderer, false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_1 = ($$anchor) => {
		Renderer()($$anchor, $.spread_props(rendererProps, {
			children: ($$anchor, $$slotProps) => {
				$.next();
				var text_1 = $.text();
				$.template_effect(() => $.set_text(text_1, value()));
				$.append($$anchor, text_1);
			},
			$$slots: { default: true }
		}));
	};
	var alternate = ($$anchor) => {
		var text_2 = $.text();
		$.template_effect(() => $.set_text(text_2, value()));
		$.append($$anchor, text_2);
	};
	$.if(node, ($$render) => {
		if (typeof Renderer() === "string") $$render(consequent);
		else if (typeof Renderer() === "function") $$render(consequent_1, 1);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = class extends IntlayerNodeWrapper {
		constructor(options) {
			super({
				...options,
				props: {
					...options.props,
					Renderer: args.component,
					rendererProps: args.props,
					value: args.value
				}
			});
		}
	};
	else Node = (props) => {
		return IntlayerNodeWrapper(props, {
			Renderer: args.component,
			rendererProps: args.props,
			value: args.value
		});
	};
	Object.defineProperty(Node, "value", {
		value: args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "toString", {
		value: () => args.value?.toString() ?? "",
		writable: true,
		configurable: true
	});
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, { children, ...rest }) => renderIntlayerNode({
		value: children ?? node,
		component: void 0,
		props: rest
	})
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		intlayerNodePlugins,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
var recursiveProxy = new Proxy(() => {}, {
	get: (_target, prop) => {
		if (prop === Symbol.toPrimitive) return () => void 0;
		if (prop === "toString") return () => "";
		if (prop === "then") return;
		return recursiveProxy;
	},
	apply: () => recursiveProxy
});
function useDictionaryDynamic(dictionaryPromise, _key, locale) {
	const context = getIntlayerContext();
	return derived(derived(intlayerStore, ($store) => locale ?? context?.locale ?? $store.locale), ($locale, set) => {
		set(new Proxy({
			isLoading: true,
			error: null
		}, { get: (_target, prop) => {
			if (prop === "isLoading") return true;
			if (prop === "error") return null;
			return recursiveProxy;
		} }));
		let isCancelled = false;
		const load = async () => {
			try {
				const loader = dictionaryPromise[$locale];
				if (!loader) return;
				const dict = await loader();
				if (isCancelled) return;
				set({
					...getDictionary(dict, $locale),
					isLoading: false,
					error: null
				});
			} catch (error) {
				if (isCancelled) return;
				console.error(error);
				set({
					isLoading: false,
					error
				});
			}
		};
		load();
		return () => {
			isCancelled = true;
		};
	}, new Proxy({
		isLoading: true,
		error: null
	}, { get: (_target, prop) => {
		if (prop === "isLoading") return true;
		if (prop === "error") return null;
		return recursiveProxy;
	} }));
}
var root_1 = $.from_html(`<article class="rounded-lg border border-border bg-card p-6"><div class="mb-3 flex items-center gap-3"><span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"> </span> <span class="text-xs text-muted-foreground"> </span></div> <h2 class="mb-2 text-lg font-semibold text-foreground"> </h2> <p class="mb-4 text-sm text-muted-foreground"> </p> <button type="button" class="text-sm font-medium text-primary hover:underline"> </button></article>`);
var root = $.from_html(`<div class="grid gap-6 md:grid-cols-2"></div>`);
function BlogList($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content$1, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content$1 = useDictionaryDynamic(content, "blog-list");
	const posts = [
		{
			title: get(content$1).comparingI18nLibrariesIn2026,
			date: get(content$1).march152026,
			excerpt: get(content$1).weTested12DifferentInternationalization,
			category: get(content$1).benchmark
		},
		{
			title: get(content$1).howToReduceYourI18n,
			date: get(content$1).march82026,
			excerpt: get(content$1).practicalStrategiesForOptimizingTranslat,
			category: get(content$1).tutorial
		},
		{
			title: get(content$1).theStateOfInternationalizationIn,
			date: get(content$1).february282026,
			excerpt: get(content$1).anOverviewOfTheCurrent,
			category: get(content$1).analysis
		},
		{
			title: get(content$1).migratingFromReactI18nextTo,
			date: get(content$1).february152026,
			excerpt: get(content$1).aStepByStepGuide,
			category: get(content$1).tutorial1
		},
		{
			title: get(content$1).serverComponentsAndI18nWhat,
			date: get(content$1).february12026,
			excerpt: get(content$1).reactServerComponentsIntroduceNew,
			category: get(content$1).analysis1
		},
		{
			title: get(content$1).benchmarkMethodologyHowWeTest,
			date: get(content$1).january202026,
			excerpt: get(content$1).aTransparentLookAtOur,
			category: get(content$1).meta
		}
	];
	$.init();
	var div = root();
	$.each(div, 5, () => posts, (p) => p.title, ($$anchor, p) => {
		var article = root_1();
		var div_1 = $.child(article);
		var span = $.child(div_1);
		var text = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_1 = $.child(span_1, true);
		$.reset(span_1);
		$.reset(div_1);
		var h2 = $.sibling(div_1, 2);
		var text_2 = $.child(h2, true);
		$.reset(h2);
		var p_1 = $.sibling(h2, 2);
		var text_3 = $.child(p_1, true);
		$.reset(p_1);
		var button = $.sibling(p_1, 2);
		var text_4 = $.child(button, true);
		$.reset(button);
		$.reset(article);
		$.template_effect(() => {
			$.set_text(text, $.get(p).category);
			$.set_text(text_1, $.get(p).date);
			$.set_text(text_2, $.get(p).title);
			$.set_text(text_3, $.get(p).excerpt);
			$.set_text(text_4, $content().readMore);
		});
		$.append($$anchor, article);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { BlogList as default };
var de_default = {
	key: "blog-list",
	content: {
		"readMore": "Mehr lesen →",
		"meta": "Meta",
		"aTransparentLookAtOur": "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
		"january202026": "20. Januar 2026",
		"benchmarkMethodologyHowWeTest": "Benchmark-Methodik: Wie wir testen",
		"analysis1": "Analyse",
		"reactServerComponentsIntroduceNew": "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
		"february12026": "1. Februar 2026",
		"serverComponentsAndI18nWhat": "Server Components und i18n: Was ändert sich?",
		"tutorial1": "Tutorial",
		"aStepByStepGuide": "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
		"february152026": "15. Februar 2026",
		"migratingFromReactI18nextTo": "Migration von react-i18next zu Lingui",
		"analysis": "Analyse",
		"anOverviewOfTheCurrent": "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.",
		"february282026": "28. Februar 2026",
		"theStateOfInternationalizationIn": "Der Stand der Internationalisierung in React",
		"tutorial": "Tutorial",
		"practicalStrategiesForOptimizingTranslat": "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.",
		"march82026": "8. März 2026",
		"howToReduceYourI18n": "So reduzieren Sie Ihr i18n-Bundle um 60 %",
		"benchmark": "Benchmark",
		"weTested12DifferentInternationalization": "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.",
		"march152026": "15. März 2026",
		"comparingI18nLibrariesIn2026": "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick"
	}
};
export { de_default as default };
var en_default = {
	key: "blog-list",
	content: {
		"readMore": "Read More →",
		"meta": "Meta",
		"aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		"january202026": "January 20, 2026",
		"benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
		"analysis1": "Analysis",
		"reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		"february12026": "February 1, 2026",
		"serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
		"tutorial1": "Tutorial",
		"aStepByStepGuide": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		"february152026": "February 15, 2026",
		"migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
		"analysis": "Analysis",
		"anOverviewOfTheCurrent": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		"february282026": "February 28, 2026",
		"theStateOfInternationalizationIn": "The State of Internationalization in React",
		"tutorial": "Tutorial",
		"practicalStrategiesForOptimizingTranslat": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		"march82026": "March 8, 2026",
		"howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
		"benchmark": "Benchmark",
		"weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		"march152026": "March 15, 2026",
		"comparingI18nLibrariesIn2026": "Comparing i18n Libraries in 2026: A Deep Dive"
	}
};
export { en_default as default };
var es_default = {
	key: "blog-list",
	content: {
		"readMore": "Leer más →",
		"meta": "Meta",
		"aTransparentLookAtOur": "Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproducibilidad.",
		"january202026": "20 de enero de 2026",
		"benchmarkMethodologyHowWeTest": "Metodología de benchmark: cómo probamos",
		"analysis1": "Análisis",
		"reactServerComponentsIntroduceNew": "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
		"february12026": "1 de febrero de 2026",
		"serverComponentsAndI18nWhat": "Server Components e i18n: ¿qué cambia?",
		"tutorial1": "Tutorial",
		"aStepByStepGuide": "Una guía paso a paso sobre la migración de una aplicación de producción con 50,000 claves de traducción de react-i18next a Lingui.",
		"february152026": "15 de febrero de 2026",
		"migratingFromReactI18nextTo": "Migración de react-i18next a Lingui",
		"analysis": "Análisis",
		"anOverviewOfTheCurrent": "Una descripción general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.",
		"february282026": "28 de febrero de 2026",
		"theStateOfInternationalizationIn": "El estado de la internacionalización en React",
		"tutorial": "Tutorial",
		"practicalStrategiesForOptimizingTranslat": "Estrategias prácticas para optimizar los paquetes de traducción, incluida la carga diferida, la división de código y las optimizaciones en tiempo de compilación.",
		"march82026": "8 de marzo de 2026",
		"howToReduceYourI18n": "Cómo reducir su paquete i18n en un 60%",
		"benchmark": "Benchmark",
		"weTested12DifferentInternationalization": "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.",
		"march152026": "15 de marzo de 2026",
		"comparingI18nLibrariesIn2026": "Comparación de bibliotecas i18n en 2026: una inmersión profunda"
	}
};
export { es_default as default };
var fr_default = {
	key: "blog-list",
	content: {
		"readMore": "Lire la suite →",
		"meta": "Méta",
		"aTransparentLookAtOur": "Un aperçu transparent de notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
		"january202026": "20 janvier 2026",
		"benchmarkMethodologyHowWeTest": "Méthodologie de benchmark : comment nous testons",
		"analysis1": "Analyse",
		"reactServerComponentsIntroduceNew": "Les React Server Components introduisent de nouveaux schémas pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
		"february12026": "1 février 2026",
		"serverComponentsAndI18nWhat": "Server Components et i18n : quels changements ?",
		"tutorial1": "Tutoriel",
		"aStepByStepGuide": "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
		"february152026": "15 février 2026",
		"migratingFromReactI18nextTo": "Migration de react-i18next vers Lingui",
		"analysis": "Analyse",
		"anOverviewOfTheCurrent": "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les schémas émergents et les préférences de la communauté.",
		"february282026": "28 février 2026",
		"theStateOfInternationalizationIn": "L'état de l'internationalisation dans React",
		"tutorial": "Tutoriel",
		"practicalStrategiesForOptimizingTranslat": "Stratégies pratiques pour optimiser les bundles de traduction, y compris le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.",
		"march82026": "8 mars 2026",
		"howToReduceYourI18n": "Comment réduire votre bundle i18n de 60 %",
		"benchmark": "Benchmark",
		"weTested12DifferentInternationalization": "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.",
		"march152026": "15 mars 2026",
		"comparingI18nLibrariesIn2026": "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie"
	}
};
export { fr_default as default };
var it_default = {
	key: "blog-list",
	content: {
		"readMore": "Leggi di più →",
		"meta": "Meta",
		"aTransparentLookAtOur": "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.",
		"january202026": "20 gennaio 2026",
		"benchmarkMethodologyHowWeTest": "Metodologia di benchmark: come testiamo",
		"analysis1": "Analisi",
		"reactServerComponentsIntroduceNew": "I React Server Components introducono nuovi pattern per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
		"february12026": "1 febbraio 2026",
		"serverComponentsAndI18nWhat": "Server Components e i18n: cosa cambia?",
		"tutorial1": "Tutorial",
		"aStepByStepGuide": "Una guida passo-passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
		"february152026": "15 febbraio 2026",
		"migratingFromReactI18nextTo": "Migrazione da react-i18next a Lingui",
		"analysis": "Analisi",
		"anOverviewOfTheCurrent": "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, pattern emergenti e preferenze della community.",
		"february282026": "28 febbraio 2026",
		"theStateOfInternationalizationIn": "Lo stato dell'internazionalizzazione in React",
		"tutorial": "Tutorial",
		"practicalStrategiesForOptimizingTranslat": "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.",
		"march82026": "8 marzo 2026",
		"howToReduceYourI18n": "Come ridurre il bundle i18n del 60%",
		"benchmark": "Benchmark",
		"weTested12DifferentInternationalization": "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.",
		"march152026": "15 marzo 2026",
		"comparingI18nLibrariesIn2026": "Confronto tra librerie i18n nel 2026: un approfondimento"
	}
};
export { it_default as default };
var ja_default = {
	key: "blog-list",
	content: {
		"readMore": "詳しく読む →",
		"meta": "メタ",
		"aTransparentLookAtOur": "テスト環境、統計手法、再現性など、当社のベンチマーク手法を透明に公開します。",
		"january202026": "2026年1月20日",
		"benchmarkMethodologyHowWeTest": "ベンチマーク手法：テスト方法",
		"analysis1": "分析",
		"reactServerComponentsIntroduceNew": "React Server Components は、国際化のための新しいパターンを導入します。その影響とベストプラクティスを調査します。",
		"february12026": "2026年2月1日",
		"serverComponentsAndI18nWhat": "Server Components と i18n：何が変わるのか？",
		"tutorial1": "チュートリアル",
		"aStepByStepGuide": "50,000 個の翻訳キーを持つプロダクションアプリを react-i18next から Lingui に移行するためのステップバイステップガイド。",
		"february152026": "2026年2月15日",
		"migratingFromReactI18nextTo": "react-i18next から Lingui への移行",
		"analysis": "分析",
		"anOverviewOfTheCurrent": "トレンド、新しいパターン、コミュニティの好みを網羅した、React における現在の i18n エコシステムの概要。",
		"february282026": "2026年2月28日",
		"theStateOfInternationalizationIn": "React における国際化の現状",
		"tutorial": "チュートリアル",
		"practicalStrategiesForOptimizingTranslat": "遅延読み込み、コード分割、コンパイル時最適化など、翻訳バンドルを最適化するための実用的な戦略。",
		"march82026": "2026年3月8日",
		"howToReduceYourI18n": "i18n バンドルを 60% 削減する方法",
		"benchmark": "ベンチマーク",
		"weTested12DifferentInternationalization": "パフォーマンス、バンドルサイズ、DX にわたって 12 の異なる国際化ライブラリをテストしました。驚くべき結果がこちらです。",
		"march152026": "2026年3月15日",
		"comparingI18nLibrariesIn2026": "2026 年における i18n ライブラリの比較：ディープダイブ"
	}
};
export { ja_default as default };
var ko_default = {
	key: "blog-list",
	content: {
		"readMore": "더 읽어보기 →",
		"meta": "메타",
		"aTransparentLookAtOur": "테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론을 투명하게 보여줍니다.",
		"january202026": "2026년 1월 20일",
		"benchmarkMethodologyHowWeTest": "벤치마크 방법론: 테스트 방법",
		"analysis1": "분석",
		"reactServerComponentsIntroduceNew": "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
		"february12026": "2026년 2월 1일",
		"serverComponentsAndI18nWhat": "Server Components 및 i18n: 무엇이 바뀌나요?",
		"tutorial1": "튜토리얼",
		"aStepByStepGuide": "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.",
		"february152026": "2026년 2월 15일",
		"migratingFromReactI18nextTo": "react-i18next에서 Lingui로 마이그레이션",
		"analysis": "분석",
		"anOverviewOfTheCurrent": "트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.",
		"february282026": "2026년 2월 28일",
		"theStateOfInternationalizationIn": "React의 국제화 현황",
		"tutorial": "튜토리얼",
		"practicalStrategiesForOptimizingTranslat": "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.",
		"march82026": "2026년 3월 8일",
		"howToReduceYourI18n": "i18n 번들을 60% 줄이는 방법",
		"benchmark": "벤치마크",
		"weTested12DifferentInternationalization": "성능, 번들 크기 및 DX에 대해 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.",
		"march152026": "2026년 3월 15일",
		"comparingI18nLibrariesIn2026": "2026년 i18n 라이브러리 비교: 심층 분석"
	}
};
export { ko_default as default };
var pt_default = {
	key: "blog-list",
	content: {
		"readMore": "Ler mais →",
		"meta": "Meta",
		"aTransparentLookAtOur": "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
		"january202026": "20 de janeiro de 2026",
		"benchmarkMethodologyHowWeTest": "Metodologia de Benchmark: Como Testamos",
		"analysis1": "Análise",
		"reactServerComponentsIntroduceNew": "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
		"february12026": "1 de fevereiro de 2026",
		"serverComponentsAndI18nWhat": "Server Components e i18n: O que muda?",
		"tutorial1": "Tutorial",
		"aStepByStepGuide": "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
		"february152026": "15 de fevereiro de 2026",
		"migratingFromReactI18nextTo": "Migrando do react-i18next para o Lingui",
		"analysis": "Análise",
		"anOverviewOfTheCurrent": "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.",
		"february282026": "28 de fevereiro de 2026",
		"theStateOfInternationalizationIn": "O estado da internacionalização no React",
		"tutorial": "Tutorial",
		"practicalStrategiesForOptimizingTranslat": "Estratégias práticas para otimizar os pacotes de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.",
		"march82026": "8 de março de 2026",
		"howToReduceYourI18n": "Como reduzir seu bundle i18n em 60%",
		"benchmark": "Benchmark",
		"weTested12DifferentInternationalization": "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.",
		"march152026": "15 de março de 2026",
		"comparingI18nLibrariesIn2026": "Comparando bibliotecas i18n em 2026: um mergulho profundo"
	}
};
export { pt_default as default };
var ru_default = {
	key: "blog-list",
	content: {
		"readMore": "Читать далее →",
		"meta": "Мета",
		"aTransparentLookAtOur": "Прозрачный взгляд на нашу методологию бенчмаркинга, включая среды тестирования, статистические методы и воспроизводимость.",
		"january202026": "20 января 2026 г.",
		"benchmarkMethodologyHowWeTest": "Методология бенчмарка: как мы тестируем",
		"analysis1": "Анализ",
		"reactServerComponentsIntroduceNew": "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
		"february12026": "1 февраля 2026 г.",
		"serverComponentsAndI18nWhat": "Server Components и i18n: что меняется?",
		"tutorial1": "Обучение",
		"aStepByStepGuide": "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.",
		"february152026": "15 февраля 2026 г.",
		"migratingFromReactI18nextTo": "Миграция с react-i18next на Lingui",
		"analysis": "Анализ",
		"anOverviewOfTheCurrent": "Обзор текущей экосистемы i18n в React, охватывающий тенденции, появляющиеся паттерны и предпочтения сообщества.",
		"february282026": "28 февраля 2026 г.",
		"theStateOfInternationalizationIn": "Состояние интернационализации в React",
		"tutorial": "Обучение",
		"practicalStrategiesForOptimizingTranslat": "Практические стратегии по оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию на этапе компиляции.",
		"march82026": "8 марта 2026 г.",
		"howToReduceYourI18n": "Как уменьшить ваш i18n бандл на 60%",
		"benchmark": "Бенчмарк",
		"weTested12DifferentInternationalization": "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.",
		"march152026": "15 марта 2026 г.",
		"comparingI18nLibrariesIn2026": "Сравнение библиотек i18n в 2026 году: глубокое погружение"
	}
};
export { ru_default as default };
var zh_default = {
	key: "blog-list",
	content: {
		"readMore": "阅读更多 →",
		"meta": "元",
		"aTransparentLookAtOur": "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重复性。",
		"january202026": "2026年1月20日",
		"benchmarkMethodologyHowWeTest": "基准测试方法：我们如何测试",
		"analysis1": "分析",
		"reactServerComponentsIntroduceNew": "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。",
		"february12026": "2026年2月1日",
		"serverComponentsAndI18nWhat": "Server Components 和 i18n：有什么变化？",
		"tutorial1": "教程",
		"aStepByStepGuide": "有关将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。",
		"february152026": "2026年2月15日",
		"migratingFromReactI18nextTo": "从 react-i18next 迁移到 Lingui",
		"analysis": "分析",
		"anOverviewOfTheCurrent": "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。",
		"february282026": "2026年2月28日",
		"theStateOfInternationalizationIn": "React 国际化的现状",
		"tutorial": "教程",
		"practicalStrategiesForOptimizingTranslat": "优化翻译包的实用策略，包括延迟加载、代码分割和编译时优化。",
		"march82026": "2026年3月8日",
		"howToReduceYourI18n": "如何将 i18n 包减少 60%",
		"benchmark": "基准测试",
		"weTested12DifferentInternationalization": "我们对 12 种不同的国际化库在性能、捆绑包大小和 DX 方面进行了测试。以下是令人惊讶的结果。",
		"march152026": "2026年3月15日",
		"comparingI18nLibrariesIn2026": "2026 年 i18n 库比较：深入探讨"
	}
};
export { zh_default as default };
