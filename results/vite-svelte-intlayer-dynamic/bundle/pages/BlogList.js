import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, get, writable } from "svelte/store";
var content = {
	"de": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/de.json").then((m) => m.default),
	"en": () => import("./en-dkhXxVAz.js").then((m) => m.default),
	"es": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/es.json").then((m) => m.default),
	"fr": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/fr.json").then((m) => m.default),
	"it": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/it.json").then((m) => m.default),
	"ja": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ja.json").then((m) => m.default),
	"ko": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ko.json").then((m) => m.default),
	"pt": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/pt.json").then((m) => m.default),
	"ru": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ru.json").then((m) => m.default),
	"zh": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/zh.json").then((m) => m.default)
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
